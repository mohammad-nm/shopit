export default function ProductInfo({ info }: { info: [] }) {
  return (
    <div className="mt-10 p-10">
      <div>
        <div className="flex flex-col ">
          {info.map((info: any) => (
            <div
              key={info.infoTitle}
              className="flex border border-gray-300 gap-10 "
              dir="ltr"
            >
              <div className="text-xl font-semibold w-1/6 bg-gray-200 p-4">
                {info.infoTitle}
              </div>
              <div className="text-sm text-gray-500 font-semibold p-4">
                {info.info}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
