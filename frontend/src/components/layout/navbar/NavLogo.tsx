import Link from "next/link";
import Image from "next/image";

export default function NavLogo() {
  return (
    <Link
      href="/"
      className="flex items-center shrink-0"
      aria-label="MotoHave Home"
    >
      <Image
        src="/moto-have.png"
        alt="MotoHave Logo"
        width={240}
        height={100}
        priority
        className="h-20 w-auto"
      />
    </Link>
  );
}