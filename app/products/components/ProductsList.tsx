import { setTotalProducts } from "@/store/productsList";
import { setTotalPages } from "@/store/productsList";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setProducts } from "@/store/productsList";
import { setIsLoading } from "@/store/ui";
import { useRouter } from "next/navigation";
interface Product {
  title: "";
  pictureUrls: string[];
  options: [];
  id: "";
  _id: "";
  categories: [];
  tags: [];
  available: false;
  price: "";
  description: "";
  info: [];
  comments: [];
}
export default function ProductsList() {
  const sorting: "close" | "popularity" | "price-asc" | "price-desc" =
    useSelector((state: any) => state.ui.sorting);
  const dispatch = useDispatch();
  const productsState = useSelector(
    (state: any) => state.productsList.products
  );
  const products = [...productsState].sort((a: Product, b: Product) => {
    switch (sorting) {
      case "popularity":
        return b.comments.length - a.comments.length;
      case "price-asc":
        return parseFloat(a.price) - parseFloat(b.price);
      case "price-desc":
        return parseFloat(b.price) - parseFloat(a.price);
      case "close":
      default:
        return 0;
    }
  });

  const currentPage = useSelector(
    (state: any) => state.productsList.currentPage
  );
  const category = useSelector((state: any) => state.productsList.category);
  const page = useSelector((state: any) => state.productsList.page);
  const limit = useSelector((state: any) => state.productsList.limit);
  const search = useSelector((state: any) => state.productsList.search);
  const show: "row" | "col" = useSelector(
    (state: any) => state.ui.productListShow
  );
  const getProducts = async () => {
    dispatch(setIsLoading(true));
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/products`,
        {
          category: category,
          page: page,
          limit: limit,
          search: search,
        }
      );
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
    <div
      className={`p-4 grid ${
        show === "row"
          ? "grid-cols-1"
          : "grid-cols-2 sm:grid-cols-3 xl:grid-cols-4"
      } `}
    >
      {products.map((product: Product) => (
        <div
          className="w-full hover:border border border-transparent hover:border-gray-400 p-2 cursor-pointer mt-6"
          key={product.id}
          onClick={() => {
            router.push(`/products/${product._id}`);
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
