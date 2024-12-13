"use client";
import {
  setPage,
  setLimit,
  setCategory,
  setSearch,
} from "@/store/productsList";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
export default function Search() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="flex items-center h-12 w-full">
      <button
        className="bg-black text-white px-4 py-1 rounded-l-md h-full"
        onClick={() => {
          dispatch(setPage(1));
          dispatch(setLimit(10));
          dispatch(setCategory(""));

          dispatch(setSearch(searchValue));
          router.push("/products");
        }}
      >
        جستجو
      </button>

      <input
        type="search"
        placeholder="جستجو..."
        className="border-none outline-none p-2 h-full text-black placeholder:text-gray-500 w-full"
        dir="rtl"
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
      />
      <select
        className="bg-black text-white h-full  p-2 rounded-r-md w-20"
        dir="rtl"
      >
        <option value="default" className="">
          همه
        </option>
        <option value="1" className="text-right">
          لوازم الکتریکی
        </option>
        <option value="2" className="text-right">
          مد و پوشاک
        </option>
        <option value="3" className="text-right">
          خانه و آشپزخانه
        </option>
        <option value="4" className="text-right">
          زیبایی و سلامت
        </option>
        <option value="8" className="text-right">
          ساعت و جواهرات
        </option>
        <option value="9" className="text-right">
          کامپیوتر و تکنولوژی
        </option>
      </select>
    </div>
  );
}
