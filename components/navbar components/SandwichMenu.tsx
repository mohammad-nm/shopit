"use client";
import Image from "next/image";
import SandwichSvg from "@/svg/sandwich.svg";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setCategory, setPage } from "@/store/productsList";
import Link from "next/link";

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

export default function SandwichMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();
  return (
    <div className="relative">
      <button onClick={() => setIsOpen(!isOpen)}>
        <Image src={SandwichSvg} alt="sandwich" width={30} height={30} />
      </button>
      {isOpen && (
        <div className="absolute top-14 right-0  bg-white sm:p-4  rounded-md shadow-md text-black">
          <div className="flex flex-col sm:gap-4 text-right p-2 w-40 items-center">
            {categories.map((category, index) => (
              <Link
                className="hover:bg-gray-100 p-2 rounded-md"
                key={index}
                onClick={() => {
                  setIsOpen(false);
                  dispatch(setCategory(category.mainCategory));
                  dispatch(setPage(1));
                }}
                href="/products"
              >
                {category.mainCategory}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
