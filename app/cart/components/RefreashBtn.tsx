export default function Refreash({
  handleGetProducts,
}: {
  handleGetProducts: any;
}) {
  return (
    <button
      className="border border-gray-500 text-gray-500 px-4 py-4 hover:bg-[#e9e6ed] transition-all duration-300 font-bold text-xl rounded-md"
      onClick={handleGetProducts}
    >
      به روز رسانی سبد خرید
    </button>
  );
}
