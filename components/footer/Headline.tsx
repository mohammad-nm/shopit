import Image from "next/image";
export default function Headline({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: string;
}) {
  return (
    <div className="w-full">
      <div className="flex items-center gap-4 justify-center text-right ">
        <div>
          <Image src={icon} alt="rocket" width={30} height={30} />
        </div>
        <div>
          <div>{title}</div>
          <div className="text-sm text-gray-500">{description}</div>
        </div>
      </div>
    </div>
  );
}
