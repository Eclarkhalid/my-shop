import Product from "../components/Product";

export default function NewProduct() {
  return <>
    <section className="p-4">
      <div className="sm:flex sm:items-center sm:justify-center">
        <div className="text-center sm:text-left">
          <p className="mt-1.5 text-lg text-red-500">
            Fill all the fields to add a new product!
          </p>
        </div>
      </div>

      <hr class="my-8 h-px border-0 bg-gray-300" />
      <div className="my-10 max-sm:my-12">
        <Product />
      </div>
    </section>
  </>
}