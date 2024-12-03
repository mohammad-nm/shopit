import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Route from "@/components/Route";

export default function Wishlist() {
  return (
    <div className="bg-[#fff] ">
      <Navbar />
      <Route />
      <div
        className="flex flex-col gap-4 p-10 text-black justify-center items-center mt-14  max-w-[850px] mx-auto mb-20"
        dir="rtl"
      >
        <div className="text-5xl font-bold mb-20">سبد خرید</div>
        <div className=" w-full p-4 flex flex-col items-center mb-10">
          <div className="text-md font-bold flex justify-between w-full px-24 bg-[#f2f2f2] rounded-md p-2">
            <div className="w-1/2">محصول</div>
            <div className="w-1/2 flex justify-between">
              <div>قیمت</div>
              <div>تعداد</div>
              <div>جمع کل</div>
            </div>
          </div>
          <div className="w-full flex p-4 gap-4">
            <div className="w-1/2 flex gap-4">
              <div>photo</div>
              <div>name</div>
            </div>
            <div className="w-1/2 flex justify-between">
              <div>price</div>
              <div>count</div>
              <div>total</div>
            </div>
            <button>X</button>
          </div>
        </div>
        <div className="flex justify-between w-full gap-4 mb-10">
          <button className="bg-[#fcb800] text-black px-4 py-2 hover:bg-[#e9e6ed] transition-all duration-300 font-bold">
            بازگشت به فروشگاه
          </button>
          <button className="border border-gray-500 text-gray-500 px-4 py-2 hover:bg-[#e9e6ed] transition-all duration-300 font-bold">
            به روز رسانی سبد خرید
          </button>
        </div>
        <div className="flex w-full">
          <div className="w-1/3 flex flex-col gap-4 p-4">
            <div className="text-xl font-bold">تخفیف</div>
            <div>
              <input
                type="text"
                name=""
                id=""
                placeholder="کد تخفیف"
                className="border p-3  w-full border-gray-400"
              />
            </div>
            <button className="border border-gray-500 text-gray-500 px-4 py-2 hover:bg-[#e9e6ed] transition-all duration-300 font-bold w-fit">
              کوپن را اعمال کنید
            </button>
          </div>
          <div className="w-2/3 flex flex-col gap-4">
            <div className="flex flex-col gap-2 text-xl font-bold border p-4 bg-[#f8f8f8]">
              <div className="text-gray-500 border-b-2 pb-3 mb-2">
                مبلغ نهایی
              </div>
              <div> جمع کل</div>
            </div>
            <button className="bg-[#fcb800] text-black px-4 py-2 hover:bg-[#e9e6ed] transition-all duration-300 font-bold">
              ادامه جهت تسویه حساب
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
