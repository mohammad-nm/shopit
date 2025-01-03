export default function Refreash({
  handleGetProducts,
}: {
  handleGetProducts: any;
}) {
  return (
    <button
      className="border border-gray-500 text-gray-500 text-sm p-2 sm:p-4 hover:bg-[#e9e6ed] transition-all duration-300 font-bold sm:text-xl rounded-md "
      onClick={handleGetProducts}
    >
      به روز رسانی سبد خرید
    </button>
  );
}
