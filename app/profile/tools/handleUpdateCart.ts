import axios from "axios";
import cookies from "js-cookie";

export const handleUpdateCart = async (cart: any) => {
  const token = cookies.get("session");
  console.log("token", token);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const res = await axios.post(`${baseUrl}/api/cart/new`, {
    jwt: token,
    cart,
  });
  if (res.status !== 200) {
    return { error: "Failed to update cart" };
  }
  return { success: "Cart updated", cart: res.data.cart };
};
