import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Route from "@/components/Route";
import { clearUser } from "@/store/user";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
export const ProfileInfo = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user);
  return (
    <div className="bg-[#fff] ">
      <Navbar />
      <Route />
      <div
        className=" flex w-full sm:w-4/5 mx-auto p-10 text-black mb-20 flex-col items-center "
        dir="rtl"
      >
        <div className="w-full">
          <div className="flex gap-4 mb-10">
            <div className="bg-gray-400 w-fit rounded-full p-2 items-center flex">
              photo
            </div>
            <div className="flex flex-col gap-2">
              <div className="font-bold text-lg">سلام!!!</div>
              <div className="text-sm">{user.email}</div>
            </div>
          </div>
        </div>
        <div className="w-full p-4 flex flex-col md:flex-row gap-y-8 font-semibold text-gray-400 gap-20">
          <div className="flex flex-col gap-y-2 font-bold text-sm bg-[#f6f6f6] border border-[#d1d1d1] rounded-md w-full sm:max-w-[300px]">
            <button className="border-b border-[#d1d1d1] bg-[#fcb800] px-4 py-2 text-start">
              پیشخوان
            </button>
            <button className="border-b text-start border-[#d1d1d1] px-4 py-2">
              سفارش ها
            </button>
            <button className="border-b text-start border-[#d1d1d1] px-4 py-2">
              دانلود ها
            </button>
            <button className="border-b text-start border-[#d1d1d1] px-4 py-2">
              آدرس
            </button>
            <button className="border-b text-start border-[#d1d1d1] px-4 py-2">
              جزئیات حساب
            </button>
            <button
              className="border-b border-[#d1d1d1] px-4 py-2 text-start"
              onClick={() => {
                dispatch(clearUser());
                Cookies.remove("session");
              }}
            >
              خروج
            </button>
          </div>
          <div>
            <div>
              سلام {user.name} ({user.email} نیستید؟ خارج شوید)
            </div>
            <div>
              از طریق پیشخوان حساب کاربری‌تان، می‌توانید سفارش‌های اخیرتان را
              مشاهده، آدرس‌های حمل و نقل و صورتحساب‌تان را مدیریت و جزییات حساب
              کاربری و کلمه عبور خود را ویرایش کنید.
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
