"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Route from "@/components/Route";
import axios from "axios";
import { useState } from "react";
export default function MyAccount() {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [login, setLogin] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [user, setUser] = useState<any>(null);
  const handleSignup = async () => {
    setIsLoading(true);
    if (email === "" || password === "") {
      setError("لطفا همه فیلد ها را پر کنید");
      return;
    }
    try {
      const res = await axios.post("http://localhost:5000/api/signup", {
        email,
        password,
      });

      const data = await res.data;
      console.log(data.response);
      if (res.status === 200) {
        console.log(data);
        setUser(data.response.user);
        return;
      }

      if (res.status === 500) {
        setError("Something went wrong");
        console.log(data);
        return;
      }
    } catch (error: any) {
      setIsLoading(false);
      console.log(error);
      setError(error.response.data.message);

      return;
    }
    setIsLoading(false);
  };
  const handleLogin = async () => {
    setIsLoading(true);
    if (email === "" || password === "") {
      setError("لطفا همه فیلد ها را پر کنید");
      return;
    }
    try {
      const res = await axios.post("http://localhost:5000/api/signin", {
        email: email as string,
        password: password as string,
      });
      const data = await res.data;
      console.log(data.response);

      if (res.status === 200) {
        setUser(data.response.user);
        console.log(data);
        return;
      }
      if (res.status === 500) {
        setError("Something went wrong");
        console.log(data);
        return;
      }
    } catch (error: any) {
      setIsLoading(false);
      console.log(error);
      setError(error.response.data.message);
    }
    setIsLoading(false);
  };
  if (!loggedIn)
    return (
      <div className="bg-[#f1f1f1]">
        <Navbar />
        <Route />
        <div
          className="flex flex-col max-w-[850px] mx-auto p-10 text-black mb-20 items-center gap-20"
          dir="rtl"
        >
          <div className="flex gap-12 font-semibold text-4xl">
            <button
              className={`${!login ? "text-gray-300" : ""}`}
              onClick={() => {
                setLogin(true);
                setError("");
              }}
            >
              ورود
            </button>
            <button
              className={`${login ? "text-gray-300" : ""}`}
              onClick={() => {
                setLogin(false);
                setError("");
              }}
            >
              عضویت
            </button>
          </div>
          <div className="flex flex-col w-96 bg-[#fff] rounded-md p-8">
            {login ? (
              <div>
                <div className="font-semibold text-lg mb-10">
                  وارد حساب کاربری خود شوید
                </div>
                <div className="gap-4 flex flex-col mb-6">
                  <input
                    type="text"
                    className="w-full h-16 p-4 border-[#d9d9d9;
] border "
                    placeholder="آدرس ایمیل"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    type="text"
                    className="w-full h-16 p-4 border-[#d9d9d9;
] border "
                    placeholder="رمز عبور"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="mb-4 justify-center items-center flex text-center font-semibold text-red-500 ">
                  {error && <div className="text-red-500">{error}</div>}
                </div>
                <div className="flex items-center gap-2 mb-4 ">
                  <input type="checkbox" />
                  مرا به خاطر بسپار
                </div>
                <div className="text-blue-500 mb-8">
                  رمز عبور خود را فراموش کرده اید؟
                </div>
                <button
                  className="w-full bg-[#fcb800] h-14 font-semibold text-lg "
                  onClick={() => {
                    setError("");
                    handleLogin();
                  }}
                >
                  {" "}
                  ورود
                </button>
              </div>
            ) : (
              <div>
                <div className="font-semibold text-lg mb-10">ثبت نام</div>
                <div className="gap-4 flex flex-col mb-6">
                  <div>
                    <input
                      type="text"
                      className="w-full h-16 p-4 border-[#d9d9d9;
] border "
                      placeholder="آدرس ایمیل"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="flex items-center">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="w-full h-16 p-4 border-[#d9d9d9;
] border "
                      placeholder="رمز عبور"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <div
                      className="mr-[-30px]"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      icon
                    </div>
                  </div>
                  <div className="mb-4 justify-center items-center flex text-center font-semibold text-red-500 ">
                    {error && <div className="text-red-500">{error}</div>}
                  </div>
                </div>
                <div className="font-semibold text-gray-400 mb-10">
                  اطلاعات شخصی شما برای پردازش سفارش شما استفاده می‌شود، و
                  پشتیبانی از تجربه شما در این وبسایت، و برای اهداف دیگری که در
                  سیاست حفظ حریم خصوصی توضیح داده شده است.
                </div>
                <div>
                  <button
                    className="w-full bg-[#fcb800] h-14 font-semibold text-lg"
                    onClick={() => {
                      setError("");
                      handleSignup();
                    }}
                  >
                    عضویت
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        <Footer />
      </div>
    );

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
              onClick={() => setLoggedIn(false)}
            >
              خروج
            </button>
          </div>
        </div>
        <div className="w-3/4 p-20 flex flex-col gap-y-8 font-semibold text-gray-400">
          <div>سلام mohammad (mohammad نیستید؟ خارج شوید)</div>
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
