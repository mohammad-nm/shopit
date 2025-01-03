export default function ProductId({
  categories,
  id,
  tags,
}: {
  categories: [];
  id: string;
  tags: [];
}) {
  return (
    <div className="flex flex-col gap-1 text-sm">
      <div>
        <span className=" font-semibold m-2">شناسه :</span> {id}
      </div>
      <div>
        <span className=" font-semibold m-2">دسته بندی ها:</span>{" "}
        {categories.join(", ")}
      </div>
      <div>
        {" "}
        <span className=" font-semibold m-2">برچسب ها:</span>
        {tags.join(", ")}
      </div>
    </div>
  );
}
