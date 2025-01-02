import { NextApiRequest, NextApiResponse } from "next";

export default function getWishlist(req: NextApiRequest, res: NextApiResponse) {
  const { token, wishlist } = req.body;
}
