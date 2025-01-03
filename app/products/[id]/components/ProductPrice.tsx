export default function ProductPrice({
  price,
  available,
}: {
  price: string;
  available: boolean;
}) {
  return (
    <div className="flex justify-between items-center border-b border-gray-300 pb-4">
      <div className="text-2xl font-bold">{price} تومان</div>
      <div className="text-sm text-[#00a881]">
        وضعیت: {available ? "موجود" : "ناموجود"}
      </div>
    </div>
  );
}
