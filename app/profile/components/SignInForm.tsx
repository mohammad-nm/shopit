"use client";
import { setError } from "@/store/ui";
import { setCart, setUser } from "@/store/user";
import { handleSignin } from "../tools/handleSignin";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";
import EyeIcon from "@/svg/eye.svg";
import Image from "next/image";
import { handleUpdateCart } from "../tools/handleUpdateCart";

export const SignInForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  const error = useSelector((state: any) => state.ui.error);
  const cart = useSelector((state: any) => state.user.cart);
  const handleLogin = async () => {
    setIsLoading(true);
    const oldCart = cart;
    const res: any = await handleSignin(email, password);
    if (res.error) {
      dispatch(setError(res.error));
      setIsLoading(false);
      return;
    }
    Cookies.set("session", res.token, { expires: 24 });
    dispatch(setUser(res));
    const newCart: {
      _id: string;
      productId: string;
      quantity: number;
    }[] = [
      ...oldCart.map((item: any) => {
        return {
          _id: res.user._id,
          productId: item.productId,
          quantity: item.quantity,
        };
      }),
      ...(res.user.cart ? res.user.cart : []),
    ];
    console.log("newCart", newCart);
    if (oldCart.length > 0) {
      const res = await handleUpdateCart(newCart);
      console.log("newCart", res);
      dispatch(setCart(res.cart));
    }
    dispatch(setCart(res.user.cart));
    setIsLoading(false);
    // router.push("/");
  };
  return (
    <div>
      <div className="font-semibold text-lg mb-10">
        وارد حساب کاربری خود شوید
      </div>
      <div>
        <input
          type="text"
          className="w-full h-16 mb-8 p-4 border-[#d9d9d9;
] border "
          placeholder="آدرس ایمیل"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="flex items-center mb-4">
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
          <Image src={EyeIcon} alt="eye" />
        </div>
      </div>
      <div className="mb-4 justify-center items-center flex text-center font-semibold text-red-500 ">
        {error && <div className="text-red-500">{error}</div>}
      </div>
      <div className="flex items-center gap-2 mb-4 ">
        <input type="checkbox" />
        مرا به خاطر بسپار
      </div>
      <div className="text-blue-500 mb-8">رمز عبور خود را فراموش کرده اید؟</div>
      <button
        className={`w-full h-14 font-semibold bg-[#fcb800] text-lg ${
          isLoading ? "bg-gray-300" : ""
        }`}
        onClick={() => {
          setError("");
          handleLogin();
        }}
      >
        {isLoading ? "در حال ارسال..." : "ورود"}
      </button>
    </div>
  );
};
