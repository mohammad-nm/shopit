import ProfileSvg from "@/svg/profile.svg";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";

export default function ProfileBtn() {
  const user = useSelector((state: any) => state.user);
  return (
    <div className="w-7 sm:w-14">
      {user.token ? (
        <Link href="/profile">
          <Image src={ProfileSvg} alt="profile" width={30} />
        </Link>
      ) : (
        <Link href="/profile" className="text-xs font-bold text-black">
          ورود
        </Link>
      )}
    </div>
  );
}
