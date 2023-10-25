import Product from "@/pages/components/Product";
import axios from "axios";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";

export default function EditProduct() {
  const router = useRouter();
  const { id } = router.query;
  const [productInfo, setProductInfo] = useState(null);

  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get('/api/products?id=' + id).then(response => {
      setProductInfo(response.data)
    })
  }, [id])
  return <>

    <div className="sm:flex sm:items-center sm:justify-center">
      <div className="text-center sm:text-left">
        <p className="mt-1.5 text-lg text-red-500">
          Editing {productInfo?.title}
        </p>
      </div>
    </div>

    {productInfo && (
      <Product {...productInfo} />
    )}
  </>
}