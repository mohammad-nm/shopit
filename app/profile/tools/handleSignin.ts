"use client";

import axios from "axios";
import validator from "validator";

interface User {
  email: string;
  password: string;
}
//input: email, password
//output: { error: string } | { user: User }
export const handleSignin = async (email: string, password: string) => {
  if (email === "" || password === "") {
    return { error: "لطفا همه فیلد ها را پر کنید" };
  }

  if (!validator.isEmail(email)) {
    return { error: "آدرس ایمیل معتبر نیست" };
  }

  try {
    const res = await axios.post(`${process.env.BASE_URL}/api/signin`, {
      email: email as string,
      password: password as string,
    });
    const data = await res.data;

    if (res.status === 200) {
      return data;
    }

    if (res.status === 500) {
      return { error: "Something went wrong" };
    }
  } catch (error: any) {
    return { error: error.response.data.message };
  }
};
