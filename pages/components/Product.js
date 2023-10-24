import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react"

export default function Product() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const router = useRouter();
  const [redirect, setRedirect] = useState(false);

  async function createProduct(ev) {
    ev.preventDefault();
    const data = {title, description, price};
    await axios.post('/api/products', data);
    setRedirect(true);
  }

  if (redirect) {
    router.push('/products');
    return null;
  }
  return <>

    <div class="mx-auto max-w-2xl">
      <form onSubmit={createProduct} class="space-y-5">
        <div class="grid grid-cols-2 items-center my-4">
          <label class="col-span-1 block text-lg font-medium text-gray-700 mb-3">Title</label>
          <div class="col-span-2">
            <input type="text" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 border p-3" placeholder="Title of product" required
              value={title}
              onChange={ev => setTitle(ev.target.value)}
            />
          </div>
        </div>
        <div class="grid grid-cols-2 items-center my-4">
          <label class="col-span-1 block text-lg font-medium text-gray-700 mb-3">Description</label>
          <div class="col-span-2">
            <textarea type="text" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 border p-3 " placeholder="Description about the  product" rows={6} required
              value={description}
              onChange={ev => setDescription(ev.target.value)}
            />
          </div>
        </div>
        <div class="grid grid-cols-2 items-center my-4">
          <label class="col-span-1 block text-lg font-medium text-gray-700 mb-3">Price</label>
          <div class="col-span-2">
            <input type="number" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 border p-3" placeholder="Price" required
              value={price}
              onChange={ev => setPrice(ev.target.value)}
            />
          </div>
        </div>
        <div class=" items-center my-4">
          <div class="col-span-2 col-start-2">
            <button type="submit" class="rounded-lg border border-slate-500 bg-primary-500 px-5 py-2.5 text-center text-sm font-medium text-black shadow-sm transition-all hover:border-primary-700 hover:bg-primary-700 focus:ring focus:ring-primary-200 disabled:cursor-not-allowed disabled:border-primary-300 disabled:bg-primary-300">Save Product</button>
          </div>
        </div>
      </form>
    </div>

  </>
}