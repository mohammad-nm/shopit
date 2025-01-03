import MinusSvg from "@/svg/minus.svg";
import PlusSvg from "@/svg/plus.svg";
import Image from "next/image";
export default function QuantityInput({
  quantity,
  setQuantity,
}: {
  quantity: number;
  setQuantity: any;
}) {
  return (
    <div
      className="flex items-center border sm:p-4 border-gray-300 rounded-md w-full xl:w-fit justify-between"
      dir="ltr"
    >
      <button
        className="cursor-pointer p-3"
        onClick={() => setQuantity(quantity - 1 < 1 ? 1 : quantity - 1)}
      >
        <Image src={MinusSvg} alt="minus" width={15} height={15} />
      </button>
      <div>
        <input
          type="text"
          className="w-10 text-center text-xl font-semibold border-none outline-none"
          placeholder="1"
          onChange={(e) => setQuantity(parseInt(e.target.value))}
          value={quantity ? quantity : 1}
        />
      </div>
      <button
        className="cursor-pointer p-3"
        onClick={() => setQuantity(quantity + 1)}
      >
        <Image src={PlusSvg} alt="plus" width={15} height={15} />
      </button>
    </div>
  );
}
