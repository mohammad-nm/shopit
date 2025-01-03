export default function ProductComments({
  title,
  comments,
}: {
  title: string;
  comments: [];
}) {
  return (
    <div className="mt-14 p-10">
      <div className="font-bold text-lg">
        اولین نفری باشید که دیدگاهی را برای “{title}” ارسال می کنید
      </div>
      <div className="mt-6">امتیاز شما به این محصول</div>

      <div>
        <input
          type="text"
          className="w-full h-32 border border-gray-300 p-4 mt-8 "
        />
        <div className="mt-[-80px] mr-6 font-semibold text-gray-400 ">
          بررسی خود را اینحا بنویسید...
        </div>
      </div>
      <div className="flex justify-between items-center mt-24">
        <button className="bg-[#fcb800] rounded-md font-semibold hover:bg-[#fcb155] transition-all duration-300 text-black px-4 py-2 ">
          ارسال دیدگاه
        </button>
      </div>
      <div className="mt-10">
        <div className="text-xl font-bold">دیدگاه ها</div>
      </div>
      <div className="mt-10" dir="ltr">
        {comments.map((comment: any, index: number) => (
          <div
            key={index}
            className="flex flex-col gap-2 p-4 bg-gray-100 rounded-md mb-4"
          >
            <div className="text-2xl font-bold">
              {comment.commentedBy}{" "}
              <span className="text-gray-500 text-sm">⁕{comment.date}</span>
            </div>
            <div className="text-md text-gray-500">{comment.comment}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
