import { useRouter } from "next/navigation";
import Image from "next/image";
import deleteIcon from "@/svg/delete.svg";
interface Item {
  title: "";
  pictureUrls: string[];
  options: [];
  id: "";
  _id: "";
  categories: [];
  tags: [];
  available: false;
  price: number;
  description: "";
  info: [];
  comments: [];
}
export default function Product({
  item,
  cartItem,
  handleDelete,
}: {
  item: Item;
  cartItem: { quantity: number };
  handleDelete: any;
}) {
  const router = useRouter();
  return (
    <div className="w-full flex p-4 gap-14 border-b-2 border-gray-300 sm:tems-center flex-col sm:flex-row">
      <div className="sm:w-1/2 w-full flex gap-12 items-center cursor-pointer">
        <div onClick={() => router.push(`/products/${item._id}`)}>
          <img
            src={item.pictureUrls[0] || ""}
            alt={item.title || ""}
            width={100}
            height={100}
          />
        </div>
        <div
          className="text-xl font-semibold text-center w-full cursor-pointer"
          onClick={() => router.push(`/products/${item._id}`)}
        >
          {item.title || ""}
        </div>
        <button
          className="text-red-500 text-4xl cursor-pointer sm:hidden"
          onClick={() => handleDelete(item._id as string)}
        >
          <Image src={deleteIcon} alt="delete" width={20} height={20} />
        </button>
      </div>
      <div className="sm:w-1/2 w-full flex justify-between sm:items-center cursor-pointer flex-wrap sm:flex-row gap-4">
        <div
          className="text-xl font-semibold"
          onClick={() => router.push(`/products/${item._id}`)}
        >
          <span className="sm:hidden">قیمت: </span>
          {item.price || ""}
        </div>
        <div className="text-xl font-semibold">
          <span className="sm:hidden">تعداد: </span>
          {cartItem?.quantity || ""}
        </div>

        <div className="text-xl font-semibold ">
          <span className="sm:hidden">قیمت کل: </span>
          {parseFloat((item.price * cartItem?.quantity).toFixed(2))}
        </div>
      </div>

      <button
        className="text-red-500 text-4xl cursor-pointer hidden sm:block"
        onClick={() => handleDelete(item._id as string)}
      >
        <Image src={deleteIcon} alt="delete" width={20} height={20} />
      </button>
    </div>
  );
}
