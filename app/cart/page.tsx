import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Route from "@/components/Route";

export default function Wishlist() {
  return (
    <div className="bg-[#fff] " dir="rtl">
      <Navbar />
      <Route />
      <div className="flex flex-col gap-4 p-10 text-black justify-center items-center mt-14  max-w-[850px] mx-auto">
        <div className="text-5xl font-bold">سبد خرید</div>
        <div>items list</div>
        <div className="flex justify-between w-full">
          <button className="bg-blue-500 text-white p-2 rounded-md">
            به روز رسانی سبد خرید
          </button>
          <button className="bg-blue-500 text-white p-2 rounded-md">
            یازگشت به فروشگاه{" "}
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
                className="border p-2 rounded-md"
              />
            </div>
            <button className="bg-blue-500 text-white p-2 rounded-md">
              کوپن را اعمال کنید
            </button>
          </div>
          <div className="w-2/3 flex flex-col gap-4">
            <div className="flex flex-col gap-2 text-xl font-bold border p-4 bg-[#f8f8f8]">
              <div>مبلغ نهایی</div>
              <div> حمع کل</div>
            </div>
            <button className="bg-blue-500 text-white p-2 rounded-md">
              ادامه جهت تسویه حساب
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
