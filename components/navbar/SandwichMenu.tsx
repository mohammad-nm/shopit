"use client";
import Image from "next/image";
import SandwichSvg from "@/svg/sandwich.svg";
import { useState } from "react";

export default function SandwichMenu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <button onClick={() => setIsOpen(!isOpen)}>
        <Image src={SandwichSvg} alt="sandwich" width={30} height={30} />
      </button>
      {isOpen && (
        <div className="absolute top-14 right-0  bg-white p-4 rounded-md shadow-md text-black">
          <div className="flex flex-col gap-4 text-right p-2 w-40">
            <div>لوازم الکتریکی</div>
            <div>مد و پوشاک</div>
            <div>خانه و آشپزخانه</div>
            <div>زیبایی و سلامت</div>
            <div>ساعت و جواهرات</div>
            <div>کامپیوتر و تکنولوژی</div>
          </div>
        </div>
      )}
    </div>
  );
}
