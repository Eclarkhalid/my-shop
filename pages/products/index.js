import Link from "next/link";

export default function Product() {
  return <>
    <header>
      <div className="mx-auto  px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="text-center sm:text-left">
            <h1 className="text-3xl font-bold text-gray-900 sm:text-3xl">
              All Products
            </h1>
          </div>

          <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
            <Link href={'/products/new'} type="button" class="inline-flex items-center gap-1.5 rounded-lg border border-green-500 bg-green-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-green-700 hover:bg-green-700 focus:ring focus:ring-green-200 disabled:cursor-not-allowed disabled:border-green-300 disabled:bg-green-300">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-4 w-4">
                <path d="M9.25 13.25a.75.75 0 001.5 0V4.636l2.955 3.129a.75.75 0 001.09-1.03l-4.25-4.5a.75.75 0 00-1.09 0l-4.25 4.5a.75.75 0 101.09 1.03L9.25 4.636v8.614z" />
                <path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" />
              </svg>
              Add Product
            </Link>
          </div>
        </div>
      </div>
    </header>
    <div className="overflow-x-auto mx-auto  p-4">
      <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-md">
        <thead >
          <tr>
            <th className="whitespace-nowrap px-4 py-2 text-gray-900 text-start font-bold ">
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

        <tbody className="divide-y divide-gray-200">
          <tr>
            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              John Doe
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">Web Developer</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">$120,000</td>
            <td className="whitespace-nowrap px-4 py-2 gap-4 flex">
              <a
                href="#"
                className="inline-block rounded bg-green-500 px-4 py-2 text-xs font-medium text-white hover:bg-green-700"
              >
                View
              </a>
              <a
                href="#"
                className="inline-block rounded bg-red-600 px-4 py-2 text-xs font-medium text-white hover:bg-red-700"
              >
                Delete
              </a>
            </td>
          </tr>
          <tr>
            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              John Doe
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">Web Developer</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">$120,000</td>
            <td className="whitespace-nowrap px-4 py-2 gap-4 flex">
              <a
                href="#"
                className="inline-block rounded bg-green-500 px-4 py-2 text-xs font-medium text-white hover:bg-green-700"
              >
                View
              </a>
              <a
                href="#"
                className="inline-block rounded bg-red-600 px-4 py-2 text-xs font-medium text-white hover:bg-red-700"
              >
                Delete
              </a>
            </td>
          </tr>

        </tbody>
      </table>
    </div>
  </>
}