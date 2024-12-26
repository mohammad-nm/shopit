"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Route from "@/components/Route";
import cookies from "js-cookie";
import { handleGetWishList } from "./tools/handleGetWishList";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLikes } from "@/store/user";
export default function Wishlist() {
  const dispatch = useDispatch();
  const token = cookies.get("session");
  const likes = useSelector((state: any) => state.user.likes);
  console.log("likes", likes);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const getWishlist = async () => {
    if (token) {
      setLoading(true);

      const res: string | { products: { productId: string }[] } =
        await handleGetWishList(token);
      if (typeof res === "string") {
        setError(res);
        setLoading(false);
        return;
      }
      const products: { productId: string }[] = res.products;
      if (products) {
        dispatch(setLikes(products));
      }
      setLoading(false);
    }
  };
  useEffect(() => {
    getWishlist();
  }, [token]);
  return (
    <div className="bg-[#fff] text-black">
      <Navbar />
      <Route />
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="text-2xl font-bold">
            در حال دریافت لیست علاقه مندی ها...
          </div>
        </div>
      ) : (
        <div
          className="flex flex-col gap-12 p-4 max-w-[850px] mx-auto mt-14 mb-20"
          dir="rtl"
        >
          <div className="text-5xl font-bold text-center">علاقه مندی ها</div>
          <div className="flex flex-col gap-4">
            <div className="text-3xl font-bold">لیست علاقه مندی های من</div>
            <div className="flex gap-4 justify-between items-center bg-[#f2f2f2] p-2 rounded-md text-sm text-gray-800">
              <div className="w-1/2 text-center">نام محصول</div>
              <div className="w-1/4 text-center">قیمت</div>
              <div className="w-1/4"> وضعیت</div>
            </div>
          </div>
          {error ? (
            <div className="text-center text-2xl font-bold">{error}</div>
          ) : (
            <div>
              {likes.length > 0 ? (
                likes.map((item: any) => (
                  <div key={item.productId}>{item.productId}</div>
                ))
              ) : (
                <div className="text-center text-2xl font-bold">
                  لیست علاقه مندی ها خالی است
                </div>
              )}
            </div>
          )}
        </div>
      )}
      <Footer />
    </div>
  );
}
