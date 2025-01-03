export default function Payment({
  products,
  cart,
}: {
  products: [];
  cart: any[];
}) {
  return (
    <div className="flex w-full flex-col items-center sm:flex-row">
      <div className="sm:w-1/3 flex flex-col gap-4 p-4 w-full mb-10">
        <div className="text-2xl font-bold">تخفیف</div>
        <div>
          <input
            type="text"
            name=""
            id=""
            placeholder="کد تخفیف"
            className="border p-3  w-full border-gray-400 text-xl rounded-md placeholder:text-gray-500 placeholder:text-md outline-none"
          />
        </div>
        <button className="border border-gray-500 text-gray-500 px-4 py-2 hover:bg-[#e9e6ed] transition-all duration-300 font-bold w-fit text-xl rounded-md">
          کوپن را اعمال کنید
        </button>
      </div>
      <div className="sm:w-2/3 flex flex-col gap-4 w-full">
        <div className="flex flex-col gap-2 text-xl font-bold border p-8 bg-[#f8f8f8] rounded-md">
          <div className="text-gray-500 border-b-2 pb-3 mb-2 flex justify-between">
            جمع کل
            <span className="text-red-400 font-bold text-2xl ml-10">
              {Math.floor(
                products.reduce(
                  (acc: number, item: any) =>
                    acc +
                    item.price *
                      cart.find((c: any) => c.productId === item._id)?.quantity,
                  0
                ) || 0
              ).toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between text-2xl">
            {" "}
            مبلغ نهایی
            <span className="text-red-400 font-bold text-2xl ml-10">
              {Math.floor(
                products.reduce(
                  (acc: number, item: any) =>
                    acc +
                    item.price *
                      cart.find((c: any) => c.productId === item._id)?.quantity,
                  0
                ) || 0
              ).toFixed(2)}
            </span>
          </div>
        </div>
        <button className="bg-[#fcb800] text-black px-4 py-4 hover:bg-[#e9e6ed] transition-all duration-300 font-bold text-xl rounded-md">
          ادامه جهت تسویه حساب
        </button>
      </div>
    </div>
  );
}
