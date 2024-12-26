import axios from "axios";

export const handleSession = async (token: string) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  try {
    const res: any = await axios.post(`${baseUrl}/api/signin`, {
      token,
    });

    if (res.status === 200) {
      const data = res.data;
      console.log(data);
      return { ...data.user, token: data.token };
    }

    if (res.status === 500) {
      return { error: "Something went wrong" };
    }
  } catch (error: any) {
    return { error: error.response.data.message };
  }
};
