export default function SectionsBtn({
  description,
  setDescription,
}: {
  description: string;
  setDescription: any;
}) {
  return (
    <div className="flex justify-center items-center border-b border-gray-300 gap-10">
      <button
        className={`text-xl font-bold hover:text-[#fcb800] transition-all duration-300  hover:border-b-[#fcb800] pb-4 border-b-2 border-b-transparent ${
          description === "description"
            ? "border-b-[#fcb800] text-[#fcb800] "
            : ""
        }`}
        onClick={() => setDescription("description")}
      >
        توضیحات
      </button>
      <button
        className={`text-xl font-bold hover:text-[#fcb800] transition-all duration-300  hover:border-b-[#fcb800] pb-4 border-b-2 border-b-transparent ${
          description === "info" ? "border-b-[#fcb800] text-[#fcb800] " : ""
        }`}
        onClick={() => setDescription("info")}
      >
        مشخصات
      </button>
      <button
        className={`text-xl font-bold hover:text-[#fcb800] transition-all duration-300  hover:border-b-[#fcb800] pb-4 border-b-2 border-b-transparent ${
          description === "comments" ? "border-b-[#fcb800] text-[#fcb800] " : ""
        }`}
        onClick={() => setDescription("comments")}
      >
        نظرات
      </button>
    </div>
  );
}
