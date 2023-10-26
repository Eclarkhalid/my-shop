import axios from "axios";
import Link from "next/link";
import { useEffect } from "react";
import { useState } from "react";

export default function Categories() {
  const [name, setName] = useState('');
  const [categories, setCategories] = useState([]);
  const [parentCategory, setParentCategory] = useState('');

  useEffect(() => {
    fetchCategories();
  }, []);

  function fetchCategories() {
    axios.get('/api/categories').then(result => {
      setCategories(result.data)
    })
  }

  async function saveCategory(ev) {
    ev.preventDefault();
    await axios.post('/api/categories', { name, parentCategory });
    setName('')
    fetchCategories();
  }

  return <>
    <header>
      <div className="mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="flex max-sm:flex-col sm:items-center sm:justify-between items-center">
          <div className="text-center sm:text-left">
            <h1 className="text-3xl font-bold text-gray-900 sm:text-3xl">
              All Categories
            </h1>
            <p className="mt-1.5 text-md text-gray-500">
              Create a new category!
            </p>
          </div>

          <form onSubmit={saveCategory} className="mt-4 flex max-sm:flex-col gap-4 sm:mt-3 max-sm:px-4  sm:items-center">
            <div >
              <div class="relative">
                <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center px-2.5 text-gray-500">+</div>
                <div class="absolute inset-y-0 right-0 flex items-center text-gray-500">
                  <select  class="h-full rounded-md border-transparent bg-transparent py-0 pl-3  pr-7 text-gray-500 focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                  value={parentCategory}
                  onChange={ev => setParentCategory(ev.target.value)}
                  >
                  <option>No parent</option>
                    {categories.length > 0 && categories.map(category => (
                      <option key={category._id} value={category._id}>{category.name}</option>
                    ))}
                  </select>
                </div>
                <input type="text" id="example11" class="block w-[400px] rounded-md border border-slate-300 py-2.5 pl-8 pr-16 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500" placeholder="Category Name"
                  value={name}
                  onChange={ev => setName(ev.target.value)}
                />
              </div>
            </div>
            <button type="submit" class="rounded-lg border border-blue-100 bg-blue-100 px-5 py-3 text-center text-sm font-medium text-blue-600 transition-all hover:border-blue-200 hover:bg-blue-200 focus:ring focus:ring-blue-50 disabled:border-blue-50 disabled:bg-blue-50 disabled:text-blue-400">Save</button>
          </form>
        </div>
        <hr className="my-8 h-px border-0 bg-gray-300" />
      </div>
    </header>

    <div className="overflow-x-auto mx-auto p-4">
      <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-md border rounded">
        <thead>
          <tr>
          <th className="whitespace-nowrap px-4 py-2 text-gray-900 text-start font-bold">
              #
            </th>
            <th className="whitespace-nowrap px-4 py-2 text-gray-900 text-start font-bold">
              Category Name
            </th>
            <th className="whitespace-nowrap px-4 py-2 text-gray-900 text-start font-bold">
              Parent Category
            </th>
            <th className="px-4 py-2 whitespace-nowrap text-gray-900 text-start font-bold">Status</th>
          </tr>
        </thead>
        {categories.map((category, index) => (
        <tbody className="divide-y divide-gray-200" >
          <tr>
            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
               {index + 1} 
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700"> {category.name} </td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700"> {category?.parent?.name} </td>  
            <td className="whitespace-nowrap px-4 py-2 gap-4 flex">
              <Link
                href={''}
                className="inline-block rounded bg-green-500 px-4 py-2 text-xs font-medium text-white hover:bg-green-700"
              >
                Edit
              </Link>
              <Link
                href={''}
                className="inline-block rounded bg-red-600 px-4 py-2 text-xs font-medium text-white hover:bg-red-700"
              >
                Delete
              </Link>
            </td>
          </tr>
        </tbody>
         ))}
      </table>
    </div>
  </>
}