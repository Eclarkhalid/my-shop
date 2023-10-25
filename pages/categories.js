import Link from "next/link";

export default function Categories() {
  return <>
    <header>
      <div className="mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="flex max-sm:flex-col sm:items-center sm:justify-between items-center">
          <div className="text-center sm:text-left">
            <h1 className="text-3xl font-bold text-gray-900 sm:text-3xl">
              All Products
            </h1>
            <p className="mt-1.5 text-md text-gray-500">
              Let&apos;s create a new product! 🎉
            </p>
          </div>

          <div className="mt-4 flex max-sm:flex-col gap-4 sm:mt-3 max-sm:px-4  sm:items-center">
            <div>
              <div class="relative">
                <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center px-2.5 text-gray-500">+</div>
                <div class="absolute inset-y-0 right-0 flex items-center text-gray-500">
                  <select id="currency" class="h-full rounded-md border-transparent bg-transparent py-0 pl-3  pr-7 text-gray-500 focus:border-primary-500 focus:ring-primary-500 sm:text-sm">
                    <option>USD</option>
                    <option>CAD</option>
                    <option>EUR</option>
                  </select>
                </div>
                <input type="text" id="example11" class="block w-[400px] rounded-md border border-slate-300 py-2.5 pl-8 pr-16 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500" placeholder="Category Name" />
              </div>
            </div>
            <button type="button" class="rounded-lg border border-blue-100 bg-blue-100 px-5 py-3.5 text-center text-sm font-medium text-blue-600 transition-all hover:border-blue-200 hover:bg-blue-200 focus:ring focus:ring-blue-50 disabled:border-blue-50 disabled:bg-blue-50 disabled:text-blue-400">Save</button>
          </div>
        </div>
        <hr className="my-8 h-px border-0 bg-gray-300" />
      </div>
    </header>
  </>
}