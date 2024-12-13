"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Route from "@/components/Route";
import { useSelector } from "react-redux";

export default function Wishlist() {
  const liked = useSelector((state: any) => state.user.likes);
  console.log(liked);
  return (
    <div className="bg-[#fff] text-black">
      <Navbar />
      <Route />
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
      </div>
      <Footer />
    </div>
  );
}
