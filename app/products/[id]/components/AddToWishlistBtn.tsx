import Image from "next/image";
import WishlistSvg from "@/svg/wishlist.svg";
import { addToWishlist as addHandler } from "../tools/addToWishlist";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist as addToWishlistSlice } from "@/store/wishlist";

export default function AddToWishlistBtn({
  productId,
  token,
}: {
  productId: string;
  token: string | undefined;
}) {
  const wishlist = useSelector((state: any) => state.wishlist);
  const dispatch = useDispatch();

  const handleAddToWishlist = async () => {
    if (!token) {
      dispatch(addToWishlistSlice(productId));
      return;
    }

    const res = await addHandler(productId, token);
    console.log(res);
  };
  console.log(wishlist);
  return (
    <button
      className="flex flex-col items-center"
      onClick={handleAddToWishlist}
    >
      <Image src={WishlistSvg} alt="heart" width={20} height={20} />
      <div className="text-xs">Like</div>
    </button>
  );
}
