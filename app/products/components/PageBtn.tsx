import { useDispatch, useSelector } from "react-redux";
import { setPage } from "@/store/productsList";

export default function PageBtn() {
  const dispatch = useDispatch();
  const page = useSelector((state: any) => state.productsList.page);
  const totalPages = useSelector((state: any) => state.productsList.totalPages);
  return (
    <div className="flex  items-end mx-auto h-full ">
      <div className="flex gap-4 items-center mb-20">
        <button
          className="bg-black text-white px-2 py-1 rounded-md text-md font-semibold"
          onClick={() => {
            dispatch(setPage(page > 1 ? page - 1 : 1));
          }}
        >
          صفحه قبل
        </button>
        <div className="text-gray-500 text-lg font-semibold">
          {page} از {totalPages}
        </div>
        <button
          className="bg-black text-white px-2 py-1 rounded-md text-md font-semibold"
          onClick={() => {
            dispatch(setPage(page < totalPages ? page + 1 : totalPages));
          }}
        >
          صفحه بعد
        </button>
      </div>
    </div>
  );
}
