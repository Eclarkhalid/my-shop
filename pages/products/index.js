import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Product() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/api/products').then(response => {
      setProducts(response.data);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <header>
        <div className="mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="text-center sm:text-left">
              <h1 className="text-3xl font-bold text-gray-900 sm:text-3xl">
                All Products
              </h1>
              <p className="mt-1.5 text-md text-gray-500">
                Lets create a new product! 🎉
              </p>
            </div>

            <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center max-w-md">
              <Link
                href={'/products/new'}
                className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-green-600 px-5 py-3 text-green-600 transition hover:bg-green-50 hover:text-green-700 focus:outline-none focus:ring"
                type="button"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm font-medium"> Add Product </span>
              </Link>
            </div>
          </div>
          <hr class="my-8 h-px border-0 bg-gray-300" />
        </div>
      </header>



      <div className="overflow-x-auto mx-auto p-4">
        {loading ? (
          <p>Loading...</p>
        ) : products.length === 0 ? (
          <p className="w-full text-center ">No products available.</p>
        ) : (
          <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-md">
            <thead>
              <tr>
                <th className="whitespace-nowrap px-4 py-2 text-gray-900 text-start font-bold">
                  Title
                </th>
                <th className="whitespace-nowrap px-4 py-2 text-gray-900 text-start font-bold">
                  Description
                </th>
                <th className="whitespace-nowrap px-4 py-2 text-gray-900 text-start font-bold">
                  Price
                </th>
                <th className="px-4 py-2 whitespace-nowrap text-gray-900 text-start font-bold">Status</th>
              </tr>
            </thead>
            {products.map(product => (
              <tbody className="divide-y divide-gray-200" key={product._id}>
                <tr>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {product.title}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">{product.description}</td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">Ksh. {product.price}</td>
                  <td className="whitespace-nowrap px-4 py-2 gap-4 flex">
                    <Link
                      href="#"
                      className="inline-block rounded bg-green-500 px-4 py-2 text-xs font-medium text-white hover:bg-green-700"
                    >
                      View
                    </Link>
                    <Link
                      href="#"
                      className="inline-block rounded bg-red-600 px-4 py-2 text-xs font-medium text-white hover:bg-red-700"
                    >
                      Delete
                    </Link>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        )}
      </div>
    </>
  );
}
