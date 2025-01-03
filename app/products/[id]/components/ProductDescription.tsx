export default function ProductDescription({
  description,
  image,
}: {
  description: string;
  image: string;
}) {
  return (
    <div className="mt-10 p-10" dir="ltr">
      <div className="text-xl font-bold mb-4">{description}</div>
      <div className="text-sm text-gray-500 mb-10">{description}</div>
      <img src={image} alt="product" className="w-full" />
    </div>
  );
}
