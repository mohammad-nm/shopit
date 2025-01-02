import axios from "axios";
import { useDispatch } from "react-redux";
import { addToWishlist as addToWishlistSlice } from "@/store/wishlist";
export const addToWishlist = async (productId: string, token: string) => {
  const dispatch = useDispatch();
  if (token) {
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
  }
  dispatch(addToWishlistSlice(productId));
};
