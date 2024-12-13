import { setCategory, setPage } from "@/store/productsList";
import CatOpenSvg from "@/svg/catopen.svg";
import MinusSvg from "@/svg/minus.svg";
import Image from "next/image";
import { useState } from "react";
import { useDispatch } from "react-redux";

const categories = [
  {
    mainCategory: "Electronics",
    subcategories: [
      "Smartphones",
      "Laptops",
      "Headphones",
      "E-readers",
      "Accessories",
      "Gaming",
      "Cameras",
      "Drones",
      "Smartwatches",
      "Action Cameras",
      "Keyboards",
    ],
  },
  {
    mainCategory: "Fashion",
    subcategories: ["Footwear", "Clothes"],
  },
  {
    mainCategory: "Fitness",
    subcategories: ["Accessories", "Home Equipment"],
  },
  {
    mainCategory: "Furniture",
    subcategories: ["Office Chairs", "Home Furniture"],
  },
  {
    mainCategory: "Appliances",
    subcategories: ["Kitchen", "Home"],
  },
  {
    mainCategory: "Outdoor",
    subcategories: ["Camping Gear", "Sports Equipment"],
  },
  {
    mainCategory: "Toys",
    subcategories: ["Educational", "Outdoor Play"],
  },
  {
    mainCategory: "Automotive",
    subcategories: ["Car Accessories", "Maintenance"],
  },
  {
    mainCategory: "Books",
    subcategories: ["E-books", "Printed Books"],
  },
];

export default function Categories() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState("");
  return (
    <div className="bg-[#f8f8f8] p-4 flex flex-col gap-2 text-sm font-semibold text-gray-500">
      <div className="text-lg text-black mb-4">دسته بندی ها</div>
      <div className="flex items-center justify-between gap-2">
        <div
          className="cursor-pointer hover:text-black transition-all duration-300 text-lg mb-2"
          onClick={() => {
            dispatch(setCategory(""));
            dispatch(setPage(1));
          }}
        >
          بدون دسته‌بندی
        </div>
      </div>
      {categories.map((category) => {
        return (
          <div
            className=" gap-4 cursor-pointer"
            key={category.mainCategory}
            dir="ltr"
          >
            <div className="flex gap-2">
              <div
                className="text-black font-semibold text-md hover:text-blue-500 transition-all duration-300"
                onClick={() => {
                  dispatch(setCategory(category.mainCategory));
                  dispatch(setPage(1));
                }}
              >
                {category.mainCategory}
              </div>
              <div
                className="w-full flex justify-end"
                onClick={() =>
                  setOpen(
                    open === category.mainCategory ? "" : category.mainCategory
                  )
                }
              >
                <div
                  className={`flex items-center justify-center ${
                    open === category.mainCategory ? "hidden" : "block"
                  }`}
                >
                  <Image src={CatOpenSvg} alt="arrow" width={10} />
                </div>
                <div
                  className={`flex items-center justify-center ${
                    open === category.mainCategory ? "block" : "hidden"
                  }`}
                >
                  <Image src={MinusSvg} alt="arrow" width={15} />
                </div>
              </div>
            </div>
            <div
              className={`flex flex-col p-2 mt-2 gap-3 ${
                open === category.mainCategory ? "block" : "hidden"
              }`}
            >
              {category.subcategories.map((subcategory) => (
                <div className="text-xs" key={subcategory}>
                  {subcategory}
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
