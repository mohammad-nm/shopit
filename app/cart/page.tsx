"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Route from "@/components/Route";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";

import axios from "axios";
import { useEffect, useState } from "react";
import deleteIcon from "@/svg/delete.svg";
import { setCart } from "@/store/user";
import { useRouter } from "next/dist/client/components/navigation";

export default function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state: any) => state.user.cart);
  const userId = useSelector((state: any) => state.user._id);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const handleDelete = async (productId: string) => {
    try {
      if (!userId) {
        dispatch(
          setCart(cart.filter((item: any) => item.productId !== productId))
        );
        return;
      }
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/cart`,
        {
          userId,
          productId,
          quantity: 0,
        }
      );
      const data = await res.data;
      if (res.status === 200) {
        dispatch(setCart(data.cart));

        setError("");
      } else {
        setError("محصول با موفقیت حذف نشد");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleGetProducts = async () => {
    setLoading(true);
    try {
      const ids = cart.map((item: any) => item.productId);
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/products/ids`,
        {
          ids,
        }
      );
      const data = await res.data;
      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleGetProducts();
  }, [cart]);
  const router = useRouter();
  return (
    <div className="bg-[#fff] ">
      <Navbar />
      <Route />
      <div
        className="flex flex-col gap-4 p-10 text-black justify-center items-center mt-14  max-w-[850px] mx-auto mb-20"
        dir="rtl"
      >
        {loading ? (
          <div className="flex justify-center items-center h-screen">
            <div className="text-2xl font-bold">در حال دریافت سبد خرید...</div>
          </div>
        ) : (
          <>
            <div className="text-5xl font-bold mb-20">سبد خرید</div>
            {products.length === 0 ? (
              <div className="text-2xl font-bold mb-20">
                سبد خرید شما خالی است!
              </div>
            ) : (
              <>
                <div className=" w-full p-4 flex flex-col items-center mb-10">
                  <div className="text-md font-bold flex justify-between w-full px-24 bg-[#f2f2f2] rounded-md p-2">
                    <div className="w-1/2">محصول</div>
                    <div className="w-1/2 flex justify-between">
                      <div>قیمت</div>
                      <div>تعداد</div>
                      <div>جمع کل</div>
                    </div>
                  </div>
                  {products.map((item: any) => {
                    const cartItem = cart.find(
                      (c: any) => c.productId === item._id
                    ) || {
                      quantity: 0,
                    };
                    return (
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
                              src={item.pictureUrls[0] || ""}
                              alt={item.title || ""}
                              width={100}
                              height={100}
                            />
                          </div>
                          <div className="text-xl font-semibold text-center w-full cursor-pointer">
                            {item.title || ""}
                          </div>
                        </div>
                        <div className="w-1/2 flex justify-between items-center cursor-pointer">
                          <div className="text-xl font-semibold">
                            {item.price || ""}
                          </div>
                          <div className="text-xl font-semibold">
                            {cartItem?.quantity || ""}
                          </div>
                          <div className="text-xl font-semibold">
                            {parseFloat(
                              (item.price * cartItem?.quantity).toFixed(2)
                            )}
                          </div>
                        </div>

                        <button
                          className="text-red-500 text-4xl cursor-pointer"
                          onClick={() => handleDelete(item._id as string)}
                        >
                          <Image
                            src={deleteIcon}
                            alt="delete"
                            width={20}
                            height={20}
                          />
                        </button>
                      </div>
                    );
                  })}
                </div>
                <div className="flex justify-between w-full gap-4 mb-10">
                  <button className="bg-[#fcb800] text-black px-4 py-2 hover:bg-[#e9e6ed] transition-all duration-300 font-bold text-xl rounded-md">
                    بازگشت به فروشگاه
                  </button>
                  <button
                    className="border border-gray-500 text-gray-500 px-4 py-2 hover:bg-[#e9e6ed] transition-all duration-300 font-bold text-xl rounded-md"
                    onClick={handleGetProducts}
                  >
                    به روز رسانی سبد خرید
                  </button>
                </div>{" "}
                <div className="flex w-full">
                  <div className="w-1/3 flex flex-col gap-4 p-4">
                    <div className="text-2xl font-bold">تخفیف</div>
                    <div>
                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder="کد تخفیف"
                        className="border p-3  w-full border-gray-400 text-xl rounded-md placeholder:text-gray-500 placeholder:text-md outline-none"
                      />
                    </div>
                    <button className="border border-gray-500 text-gray-500 px-4 py-2 hover:bg-[#e9e6ed] transition-all duration-300 font-bold w-fit text-xl rounded-md">
                      کوپن را اعمال کنید
                    </button>
                  </div>
                  <div className="w-2/3 flex flex-col gap-4">
                    <div className="flex flex-col gap-2 text-xl font-bold border p-8 bg-[#f8f8f8] rounded-md">
                      <div className="text-gray-500 border-b-2 pb-3 mb-2 flex justify-between">
                        جمع کل
                        <span className="text-red-400 font-bold text-2xl ml-10">
                          {Math.floor(
                            products.reduce(
                              (acc: number, item: any) =>
                                acc +
                                item.price *
                                  cart.find(
                                    (c: any) => c.productId === item._id
                                  )?.quantity,
                              0
                            ) || 0
                          ).toFixed(2)}
                        </span>
                      </div>
                      <div className="flex justify-between text-2xl">
                        {" "}
                        مبلغ نهایی
                        <span className="text-red-400 font-bold text-2xl ml-10">
                          {Math.floor(
                            products.reduce(
                              (acc: number, item: any) =>
                                acc +
                                item.price *
                                  cart.find(
                                    (c: any) => c.productId === item._id
                                  )?.quantity,
                              0
                            ) || 0
                          ).toFixed(2)}
                        </span>
                      </div>
                    </div>
                    <button className="bg-[#fcb800] text-black px-4 py-2 hover:bg-[#e9e6ed] transition-all duration-300 font-bold text-xl rounded-md">
                      ادامه جهت تسویه حساب
                    </button>
                  </div>
                </div>
              </>
            )}
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}
