import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Route from "@/components/Route";
export default function MyAccount() {
  return (
    <div className="bg-[#fff] ">
      <Navbar />
      <Route />
      <div
        className=" flex max-w-[850px] mx-auto p-10 text-black mb-20"
        dir="rtl"
      >
        <div className="w-1/4 ">
          <div className="flex gap-4 mb-10">
            <div>photo</div>
            <div className="flex flex-col gap-2">
              <div className="font-bold text-lg">سلام!!!</div>
              <div className="text-sm">mohammad.ro1383</div>
            </div>
          </div>
          <div className="flex flex-col gap-y-2 font-bold text-sm bg-[#f6f6f6] border border-[#d1d1d1] rounded-md w-full">
            <div className="border-b border-[#d1d1d1] bg-[#fcb800] px-4 py-2">
              پیشخوان
            </div>
            <div className="border-b border-[#d1d1d1] px-4 py-2">سفارش ها</div>
            <div className="border-b border-[#d1d1d1] px-4 py-2">دانلود ها</div>
            <div className="border-b border-[#d1d1d1] px-4 py-2">آدرس</div>
            <div className="border-b border-[#d1d1d1] px-4 py-2">
              جزئیات حساب
            </div>
            <div className="border-b border-[#d1d1d1] px-4 py-2">خروج</div>
          </div>
        </div>
        <div className="w-3/4 p-20 flex flex-col gap-y-8">
          <div>سلام mohammad.ro1383 (mohammad.ro1383 نیستید؟ خارج شوید)</div>
          <div>
            از طریق پیشخوان حساب کاربری‌تان، می‌توانید سفارش‌های اخیرتان را
            مشاهده، آدرس‌های حمل و نقل و صورتحساب‌تان را مدیریت و جزییات حساب
            کاربری و کلمه عبور خود را ویرایش کنید.
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
