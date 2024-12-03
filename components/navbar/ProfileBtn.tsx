import ProfileSvg from "@/svg/profile.svg";
import Image from "next/image";
import Link from "next/link";

export default function ProfileBtn() {
  return (
    <Link href="/profile">
      <Image src={ProfileSvg} alt="profile" width={40} height={40} />
    </Link>
  );
}
