"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Route() {
  const pathname = usePathname();

  return (
    <div className="bg-[#f8f8f8] ">
      <div
        className="h-10 flex text-sm items-center p-6 text-black max-w-[850px] mx-auto"
        dir="rtl"
      >
        <Link href="/" className=" font-bold mr-10 hover:text-blue-500">
          خانه
        </Link>
        <div className="font-bold text-gray-500"> {pathname}</div>
      </div>
    </div>
  );
}
