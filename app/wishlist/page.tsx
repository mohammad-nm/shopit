"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Route from "@/components/Route";
import cookies from "js-cookie";
import { handleGetWishList } from "./tools/handleGetWishList";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLikes } from "@/store/user";
import Image from "next/image";
import deleteIcon from "@/svg/delete.svg";
import { useRouter } from "next/dist/client/components/navigation";

export default function Wishlist() {
  const dispatch = useDispatch();
  const token = cookies.get("session");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [products, setProducts] = useState<{}[]>([]);
  const getWishlist = async () => {
    if (token && typeof token === "string") {
      setLoading(true);
      const products: string | { pictureUrls: string[] }[] =
        await handleGetWishList(token);
      if (typeof products === "string") {
        setError(products);
        setLoading(false);
        return;
      }
      if (products) {
        setProducts(products);
      }
      setLoading(false);
    }
  };
  useEffect(() => {
    getWishlist();
  }, []);

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
              {products.length > 0 ? (
                products.map((item: any) => (
                  <div
                    className="w-full flex p-4 gap-14 border-b-2 border-gray-300 items-cente"
                    key={item._id}
                  >
                    <div
                      className="w-1/2 flex gap-12 items-center cursor-pointer"
                      onClick={() => router.push(`/products/${item.id}`)}
                    >
                      <div>
                        <img
                          src={item.pictureUrls[0]}
                          alt={item.title || ""}
                          width={100}
                          height={100}
                        />
                      </div>
                      <div className="text-xl font-semibold text-center w-full cursor-pointer">
                        {item.title || ""}
                      </div>
                    </div>
                    <div className="w-1/2 flex justify-center gap-28 items-center cursor-pointer">
                      <div className="text-xl font-semibold">
                        {item.price || ""}
                      </div>
                      <div className="text-xl font-semibold">
                        {item.available ? "موجود" : "ناموجود"}
                      </div>
                    </div>

                    <button
                      className="text-red-500 text-4xl cursor-pointer"
                      // onClick={() => handleDelete(item._id as string)}
                    >
                      <Image
                        src={deleteIcon}
                        alt="delete"
                        width={20}
                        height={20}
                      />
                    </button>
                  </div>
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
