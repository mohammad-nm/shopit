import axios from "axios";
import validator from "validator";

export const handleSignup = async (email: string, password: string) => {
  if (email === "" || password === "") {
    return { error: "لطفا همه فیلد ها را پر کنید" };
  }
  if (!validator.isEmail(email)) {
    return { error: "آدرس ایمیل معتبر نیست" };
  }
  if (
    !validator.isStrongPassword(password, {
      minLength: 6,
      minLowercase: 1,
      minUppercase: 0,
      minNumbers: 1,
      minSymbols: 0,
    })
  ) {
    return {
      error: "رمز عبور باید حداقل 6 کاراکتر باشد و شامل حرف کوچک و عدد باشد",
    };
  }
  try {
    const res = await axios.post(`${process.env.BASE_URL}/api/signup`, {
      email,
      password,
    });

    const data = await res.data;

    if (res.status === 200) {
      return { ...data.user, token: data.token };
    }

    if (res.status === 500) {
      return { error: "Something went wrong" };
    }
  } catch (error: any) {
    return { error: error.response.data.message };
  }
};
