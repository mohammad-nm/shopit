import Image from "next/image";
import WishlistSvg from "@/svg/wishlist.svg";
import { addToWishlist as addHandler } from "../tools/addToWishlist";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist as addToWishlistSlice } from "@/store/wishlist";
import { setError } from "@/store/ui";
import { error } from "console";

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
      dispatch(setError("به لیست علاقه مندی اضافه شد"));

      return;
    }

    const res = await addHandler(productId, token);
    console.log(res.wishlist);
    if (res.wishlist) {
      dispatch(addToWishlistSlice(productId));
      dispatch(setError("به لیست علاقه مندی اضافه شد"));
      return;
    } else {
      dispatch(setError("دوباره تلاش کنید"));
      return;
    }
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
