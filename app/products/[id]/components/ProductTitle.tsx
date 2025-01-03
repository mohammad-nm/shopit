export default function ProductTitle({ title }: { title: string }) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center mb-10 border-b border-gray-300 pb-4">
      <div className="text-xl font-bold">{title}</div>
      <div className="text-2xl font-bold">share icons</div>
    </div>
  );
}
