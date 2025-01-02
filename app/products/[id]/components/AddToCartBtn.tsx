import { setError } from "@/store/ui";
import { setCart } from "@/store/user";
import { addToCart } from "../tools/addToCart";
import { useDispatch, useSelector } from "react-redux";

export default function AddToCartBtn({
  productId,
  quantity,
}: {
  productId: string;
  quantity: number;
}) {
  const dispatch = useDispatch();

  const userId = useSelector((state: any) => state.user._id);
  const cart = useSelector((state: any) => state.user.cart);

  const handleCart = async () => {
    if (!userId) {
      dispatch(setCart([...(cart ? cart : []), { productId, quantity }]));
      return;
    }
    if (!productId) {
      return;
    }
    const res = await addToCart(userId, productId, quantity);
    if (res.error) {
      dispatch(setError(res.error));
    }
    if (res.success) {
      dispatch(setCart(res.cart));
    }
  };
  return (
    <div onClick={handleCart}>
      {" "}
      <button className="bg-[#fcb800] hover:bg-[#fcb155] transition-all duration-300 text-black px-4 py-2 rounded-md ">
        افزودن به سبد خرید
      </button>
    </div>
  );
}
