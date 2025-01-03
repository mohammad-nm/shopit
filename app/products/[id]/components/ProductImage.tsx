export default function ProductImage({ image }: { image: string }) {
  return (
    <div className="w-full md:w-1/2 p-4">
      <img
        src={image}
        alt="product picture"
        className="h-3/4 object-cover w-full"
      />
    </div>
  );
}
