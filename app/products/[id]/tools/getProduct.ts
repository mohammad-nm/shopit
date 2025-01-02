import axios from "axios";

export default async function getProduct(productId: string) {
  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/product`,
    {
      productId,
    }
  );

  return res.data;
}
