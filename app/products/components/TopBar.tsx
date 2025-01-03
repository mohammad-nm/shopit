import LineShow from "@/svg/lineShow.svg";
import BoxShow from "@/svg/boxShow.svg";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { setProductListShow, setSorting } from "@/store/ui";
export default function TopBar() {
  const dispatch = useDispatch();

  const totalProducts = useSelector(
    (state: any) => state.productsList.totalProducts
  );
  const search = useSelector((state: any) => state.productsList.search);

  return (
    <>
      {" "}
      <div className="mb-6">نتیجه جستجو برای "{`${search}`}"</div>
      <div className="flex w-full justify-between bg-[#f5f5f5] sm:p-4 p-2 items-center rounded-md">
        <div className="flex sm:gap-8 gap-4">
          <div className="hidden xl:block">نوع نمایش</div>
          <div className="flex sm:gap-6 gap-2">
            <div>
              <button onClick={() => dispatch(setProductListShow("row"))}>
                <Image src={LineShow} alt="list" width={20} height={20} />
              </button>
            </div>
            <div>
              <button onClick={() => dispatch(setProductListShow("col"))}>
                <Image src={BoxShow} alt="box" width={20} height={20} />
              </button>
            </div>
          </div>
        </div>
        <div>
          <select
            name="sorting"
            id="sorting"
            className="sm:w-72 border border-gray-300 sm:px-3 sm:h-9"
            onChange={(e) => {
              //   setSorting(e.target.value);
              dispatch(setSorting(e.target.value));
            }}
          >
            {" "}
            <option value="close">مرتبط بودن</option>
            <option value="popularity"> مرتب‌سازی بر اساس محبوبیت</option>
            <option value="price-asc"> مرتب‌سازی بر اساس ارزانترین</option>
            <option value="price-desc"> مرتب‌سازی بر اساس گرانترین</option>
          </select>
        </div>
        <div className="hidden xl:block">{totalProducts} محصول یافت شد</div>
      </div>
    </>
  );
}
