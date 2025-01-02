import axios from "axios";
import { useSelector } from "react-redux";
export const handleGetWishList = async (
  token: string | undefined,
  wishlist: { wishlist: string[] }
) => {
  //fix it later to get request
  if (token) {
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

      const products = res.data;
      return products;
    } catch (error) {
      return error;
    }
  }
  const productIds: string[] = wishlist.wishlist;
  console.log(productIds);
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/products/ids`,
      {
        ids: productIds,
      }
    );
    console.log(res.data);
    const products = res.data;
    return products;
  } catch (error) {
    return error;
  }
};
