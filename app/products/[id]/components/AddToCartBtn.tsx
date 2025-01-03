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
    <div
      onClick={handleCart}
      className="w-full xl:w-fit items-center justify-center text-center p-6 text-lg font-semibold bg-[#fcb800] hover:bg-[#fcb155] transition-all duration-300 text-black rounded-md "
    >
      {" "}
      <button>افزودن به سبد خرید</button>
    </div>
  );
}
