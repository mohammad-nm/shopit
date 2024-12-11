"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Route from "@/components/Route";
import { useDispatch, useSelector } from "react-redux";

import { ProfileInfo } from "./components/ProfileInfo";
import { SignInForm } from "./components/SignInForm";
import { SignUpForm } from "./components/SignUpForm";
import { TopButtons } from "./components/TopButtons";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { setError } from "@/store/ui";
import { handleSession } from "./tools/handleSession";
import { clearUser } from "@/store/user";
import { setUser } from "@/store/user";
interface User {
  moreInfo: {
    name: string;
    lastName: string;
    address: string;
    showName: string;
  };
  _id: string;
  email: string;
  password: string;
  likes: [];
  cart: [];
  purchases: [];
  __v: number;
  token: string;
}
export default function MyAccount() {
  const dispatch = useDispatch();
  const session = Cookies.get("session");
  const handleSessionCheck = async (token: string) => {
    const res: any = await handleSession(token);
    if (res.error) {
      dispatch(clearUser());
      return;
    }
    dispatch(setUser(res));
  };
  useEffect(() => {
    (async () => {
      if (session) {
        await handleSessionCheck(session);
      }
    })();
  }, []);
  const login = useSelector((state: any) => state.ui.loginSignup);
  const user: User = useSelector((state: any) => state.user);

  if (!user.token)
    return (
      <div className="bg-[#f1f1f1]">
        <Navbar />
        <Route />
        <div
          className="flex flex-col max-w-[850px] mx-auto p-10 text-black mb-20 items-center gap-20"
          dir="rtl"
        >
          <TopButtons />
          <div className="flex flex-col w-96 bg-[#fff] rounded-md p-8">
            {login ? <SignInForm /> : <SignUpForm />}
          </div>
        </div>
        <Footer />
      </div>
    );

  return <ProfileInfo />;
}
