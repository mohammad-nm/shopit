import axios from "axios";
import cookies from "js-cookie";
export const addToWishlist = async (productId: string) => {
  const token = cookies.get("session");
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/wishlist/add`,
      { jwt: token, productId }
    );
    if (res.status === 200) {
      return res.data;
    }
  } catch (error) {
    return error;
  }
};
