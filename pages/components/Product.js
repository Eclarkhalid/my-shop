import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Spinner from "./Spinner";

export default function Product({
  _id,
  title: existingTitle,
  description: existingDescription,
  price: existingPrice,
  images: existingImages,
}) {
  const [title, setTitle] = useState(existingTitle || '');
  const [description, setDescription] = useState(existingDescription || '');
  const [price, setPrice] = useState(existingPrice || '');
  const [images, setImages] = useState(existingImages || []);
  const router = useRouter();
  const [redirect, setRedirect] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const uploadImagesQueue = [];

  async function createProduct(ev) {
    ev.preventDefault();

    // Check if there are new images to upload
    if (isUploading) {
      // Wait for the images to finish uploading
      await Promise.all(uploadImagesQueue);
    }

    // Now you can make the API request to save the product
    const data = { title, description, price, images };
    if (_id) {
      await axios.put('/api/products', { ...data, _id });
    } else {
      await axios.post('/api/products', data);
    }

    // Redirect after saving
    setRedirect(true);
  }

  async function uploadImages(ev) {
    const files = ev.target?.files;
    if (files?.length > 0) {
      setIsUploading(true);

      for (const file of files) {
        const data = new FormData();
        data.append('file', file);

        // Use the axios.post method and push the promise to the queue
        uploadImagesQueue.push(
          axios.post('/api/upload', data)
            .then(res => {
              setImages(oldImages => [...oldImages, ...res.data.links]);
            })
        );
      }

      // Wait for all images to finish uploading
      await Promise.all(uploadImagesQueue);

      setIsUploading(false);
    }
  }

  if (redirect) {
    router.push('/products');
    return null;
  }

  return (
    <div className="mx-auto max-w-2xl">
      <form onSubmit={createProduct} className="space-y-5">
        {/* Title input */}
        <div className="grid grid-cols-2 items-center my-4">
          <label className="col-span-1 block text-lg font-medium text-gray-700 mb-3">Title</label>
          <div className="col-span-2">
            <input
              type="text"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 border p-3"
              placeholder="Title of product"
              required
              value={title}
              onChange={ev => setTitle(ev.target.value)}
            />
          </div>
        </div>

        {/* Images upload */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center">
            <label className="text-lg font-medium text-gray-700 mr-2">Images</label>
            <div className="flex items-center justify-center rounded-lg">
              <label htmlFor="fileInput" className="flex items-center gap-1.5 px-3 py-2 text-center text-sm font-medium text-gray-500 border cursor-pointer hover:border-primary-400">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                  <path d="M9.25 13.25a.75.75 0 001.5 0V4.636l2.955 3.129a.75.75 0 001.09-1.03l-4.25-4.5a.75.75 0 00-1.09 0l-4.25 4.5a.75.75 0 101.09 1.03L9.25 4.636v8.614z" />
                  <path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" />
                </svg>
                Upload
              </label>
              <input id="fileInput" type="file" className="hidden" accept="images/*" multiple onChange={uploadImages} />
            </div>
          </div>

          {/* Spinner during upload */}
          <div className="grid grid-cols-2 items-center rounded">
            {isUploading && (
              <Spinner className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            )}
          </div>

          {/* Display uploaded images */}
          {!isUploading && (
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 mb-2">
              {!!images?.length &&
                images.map((link) => (
                  <div key={link} className="h-32 w-full sm:w-32 md:w-24 lg:w-20 xl:w-20 border rounded bg-gray-200">
                    <img src={link} alt="image" className="object-cover h-full w-full" />
                  </div>
                ))}
            </div>
          )}
        </div>

        {/* Description input */}
        <div className="grid grid-cols-2 items-center my-4">
          <label className="col-span-1 block text-lg font-medium text-gray-700 mb-3">Description</label>
          <div className="col-span-2">
            <textarea
              type="text"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 border p-3"
              placeholder="Description about the product"
              rows={6}
              required
              value={description}
              onChange={ev => setDescription(ev.target.value)}
            />
          </div>
        </div>

        {/* Price input */}
        <div className="grid grid-cols-2 items-center my-4">
          <label className="col-span-1 block text-lg font-medium text-gray-700 mb-3">Price</label>
          <div className="col-span-2">
            <input
              type="number"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 border p-3"
              placeholder="Price"
              required
              value={price}
              onChange={ev => setPrice(ev.target.value)}
            />
          </div>
        </div>

        {/* Save button */}
        <div className="items-center my-4">
          <div className="col-span-2 col-start-2">
            <button
              type="submit"
              className="rounded-lg border border-slate-500 bg-primary-500 px-5 py-2.5 text-center text-sm font-medium text-black shadow-sm transition-all hover:border-primary-700 hover:bg-primary-700 focus:ring focus:ring-primary-200 disabled:cursor-not-allowed disabled:border-primary-300 disabled:bg-primary-300"
            >
              Save Product
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
