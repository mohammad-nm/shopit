"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Route from "@/components/Route";
import ProductsList from "./components/ProductsList";
import { useDispatch, useSelector } from "react-redux";
import Categories from "./components/Categories";
import Filters from "./components/Filters";
import { setPage } from "@/store/productsList";
export default function Products() {
  const totalProducts = useSelector(
    (state: any) => state.productsList.totalProducts
  );
  const page = useSelector((state: any) => state.productsList.page);
  const search = useSelector((state: any) => state.productsList.search);
  const totalPages = useSelector((state: any) => state.productsList.totalPages);
  const dispatch = useDispatch();
  return (
    <div className="bg-[#fff] text-black">
      <Navbar />
      <Route />
      <div className="flex max-w-[850px] mx-auto p-8" dir="rtl">
        <div className="w-1/4 flex flex-col gap-8">
          <Categories />
          <Filters />
        </div>
        <div className="w-3/4 flex flex-col px-8">
          <div className="mb-6">نتیجه مطالعه برای "{`${search}`}"</div>
          <div className="flex w-full justify-between bg-[#f5f5f5] p-4 items-center">
            <div className="flex gap-4">
              <div>نوع نمایش</div>
              <div className="flex gap-2">
                <div>icon</div>
                <div>icon</div>
              </div>
            </div>
            <div>
              <select
                name="sorting"
                id="sorting"
                className="w-72 border border-gray-300 px-3 h-9"
              >
                {" "}
                <option value="ارتباط"> ارتباط</option>
                <option value="ارتباط"> ارتباط</option>
                <option value="ارتباط"> ارتباط</option>
                <option value="ارتباط"> ارتباط</option>
              </select>
            </div>
            <div>{totalProducts} محصول یافت شد</div>
          </div>
          <ProductsList />
          <div className="flex justify-between items-center">
            <div className="flex gap-2">
              <button
                className="bg-black text-white px-4 py-2 rounded-md"
                onClick={() => {
                  dispatch(setPage(page > 1 ? page - 1 : 1));
                }}
              >
                صفحه قبل
              </button>
              <div className="text-gray-500">
                {page} از {totalPages}
              </div>
              <button
                className="bg-black text-white px-4 py-2 rounded-md"
                onClick={() => {
                  dispatch(setPage(page < totalPages ? page + 1 : totalPages));
                }}
              >
                صفحه بعد
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
