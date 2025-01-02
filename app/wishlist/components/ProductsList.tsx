"use client";
import { useRouter } from "next/navigation";

import { useEffect, useState } from "react";
import cookies from "js-cookie";
import { useSelector } from "react-redux";
import { handleGetWishList } from "../tools/handleGetWishList";
import Product from "./product";

export default function ProductsList() {
  const [products, setProducts] = useState<{}[]>([]);
  const token: string | undefined = cookies.get("session");
  const wishlist = useSelector((state: any) => state.wishlist);
  useEffect(() => {
    const getProducts = async () => {
      const products = await handleGetWishList(token, wishlist);
      setProducts(products);
    };
    getProducts();
  }, []);
  return (
    <div>
      {products.length > 0 ? (
        products.map((item: any) => <Product item={item} key={item._id} />)
      ) : (
        <div className="text-center text-2xl font-bold">
          لیست علاقه مندی ها خالی است
        </div>
      )}
    </div>
  );
}
