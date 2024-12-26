import axios from "axios";
export const handleGetWishList = async (token: string) => {
  //fix it later to get request
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/wishlist/get`,
      {
        jwt: token,
      }
    );
    if (res.status !== 200) {
      return res.data.message;
    }
    return res.data.wishlist;
  } catch (error) {
    return error;
  }
};
