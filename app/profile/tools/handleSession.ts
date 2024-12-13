import axios from "axios";
export const handleSession = async (token: string) => {
  try {
    const res: any = await axios.post(`${process.env.BASE_URL}/api/signin`, {
      token,
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
