import axios from "axios";

export const addToCart = async (
  userId: string,
  productId: string,
  quantity: number
) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  try {
    const res = await axios.post(`${baseUrl}/api/cart`, {
      userId,
      productId,
      quantity,
    });
    if (res.status !== 200) {
      return { error: "Failed to add to cart", message: res.data.message };
    }
    return { success: "Product added to cart", cart: res.data.cart };
  } catch (error) {
    console.log(error);
    return { error: "Failed to add to cart" };
  }
};
