export default function ProductOptions({ options }: { options: [] }) {
  return (
    <div className="border-b border-gray-300 pb-4">
      <div className="text-xs flex flex-col gap-1 font-semibold text-gray-400">
        {options.map((option: any, index: number) => (
          <div key={index}>⁕ {option.name}</div>
        ))}
      </div>
    </div>
  );
}
