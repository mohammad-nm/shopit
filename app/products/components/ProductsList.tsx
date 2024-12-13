import { setTotalProducts } from "@/store/productsList";
import { setTotalPages } from "@/store/productsList";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setProducts } from "@/store/productsList";
import { setIsLoading } from "@/store/ui";
import { useRouter } from "next/navigation";

export default function ProductsList() {
  const dispatch = useDispatch();
  const products = useSelector((state: any) => state.productsList.products);
  const totalProducts = useSelector(
    (state: any) => state.productsList.totalProducts
  );
  const currentPage = useSelector(
    (state: any) => state.productsList.currentPage
  );
  const totalPages = useSelector((state: any) => state.productsList.totalPages);
  const category = useSelector((state: any) => state.productsList.category);
  const page = useSelector((state: any) => state.productsList.page);
  const limit = useSelector((state: any) => state.productsList.limit);
  const search = useSelector((state: any) => state.productsList.search);
  const getProducts = async () => {
    dispatch(setIsLoading(true));
    try {
      const res = await axios.post(`${process.env.BASE_URL}/api/products`, {
        category: category,
        page: page,
        limit: limit,
        search: search,
      });
      const data = await res.data;
      if (res.status === 200) {
        dispatch(setProducts(data.products));
        dispatch(setTotalPages(data.totalPages));
        dispatch(setTotalProducts(data.totalProducts));
        console.log(data);
        dispatch(setIsLoading(false));
        return;
      }
      dispatch(setIsLoading(false));
    } catch (error) {
      console.log(error);
      dispatch(setIsLoading(false));
    }
  };
  useEffect(() => {
    getProducts();
  }, [page, limit, category, search, currentPage]);
  const router = useRouter();
  return (
    <div className="p-4 flex flex-wrap w-full mb-10">
      {products.map((product: any) => (
        <div
          className="w-1/4 hover:border border border-transparent hover:border-gray-400 p-2 cursor-pointer mt-6"
          key={product.id}
          onClick={() => {
            router.push(`/products/${product.id}`);
          }}
        >
          <div className="w-full mb-4">
            <img src={`${product.pictureUrls[0]}`} alt="" />
          </div>
          <div className="text-blue-500 mb-4 font-semibold " dir="ltr">
            {product.title}
          </div>
          <div className="font-medium">{product.price} تومان</div>
        </div>
      ))}
    </div>
  );
}
