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
  price: "";
  description: "";
  info: [];
  comments: [];
}
export default function Product({ item }: { item: Item }) {
  const router = useRouter();
  return (
    <div className="w-full flex px-8 border-b-2 border-gray-300 items-center">
      <div className="flex items-center gap-8 p-4 flex-col sm:flex-row w-full my-4">
        <div
          className="w-1/2 flex gap-12 items-center cursor-pointer"
          onClick={() => router.push(`/products/${item._id}`)}
        >
          <div>
            <img
              src={item.pictureUrls[0]}
              alt={item.title || ""}
              width={100}
              height={100}
            />
          </div>
          <div className="text-xl font-semibold text-center w-full cursor-pointer">
            {item.title || ""}
          </div>
        </div>
        <div
          className="w-1/2 flex justify-center gap-28  items-center cursor-pointer
    xl:gap-x-48"
        >
          <div className="text-xl font-semibold">{item.price || ""}</div>
          <div
            className={`text-xl font-semibold ${
              item.available ? "text-green-500" : "text-red-500"
            }`}
          >
            {item.available ? "موجود" : "ناموجود"}
          </div>
        </div>
      </div>

      <button
        className="text-red-500 text-4xl cursor-pointer"
        // onClick={() => handleDelete(item._id as string)}
      >
        <Image src={deleteIcon} alt="delete" width={20} height={20} />
      </button>
    </div>
  );
}
