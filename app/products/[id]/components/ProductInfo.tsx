export default function ProductInfo({ info }: { info: [] }) {
  return (
    <div className="mt-10 p-10">
      <div>
        <div className="flex flex-col">
          {info.map((info: any) => (
            <div
              key={info.infoTitle}
              className="flex border border-gray-300 justify-between "
              dir="ltr"
            >
              <div className="w-1/3 bg-gray-200 items-center justify-center text-center flex p-4">
                <div className="sm:text-xl text-xs font-semibold ">
                  {info.infoTitle}
                </div>
              </div>
              <div className="items-center justify-center text-center flex p-4">
                <div className="text-sm text-gray-500 font-semibold">
                  {info.info}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
