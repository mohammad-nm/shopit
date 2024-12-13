import axios from "axios";

export const addToCart = async (
  userId: string,
  productId: string,
  quantity: number
) => {
  try {
    const res = await axios.post("http://localhost:5000/api/cart", {
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
