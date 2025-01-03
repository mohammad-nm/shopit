import Image from "next/image";
import CompareSvg from "@/svg/compare.svg";
export default function CompareBtn() {
  return (
    <button className="flex flex-col items-center">
      <Image src={CompareSvg} alt="compare" width={20} height={20} />
      <div className="text-xs">Compare</div>
    </button>
  );
}
