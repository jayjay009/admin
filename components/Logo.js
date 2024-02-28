import Link from "next/link";

export default function Logo() {
  return (
    <Link href={"/"} className="flex gap-1">
      <img src="/coffee.svg" className="w-8 h-8" />
      <span className="">SAINT'S CAFE</span>
    </Link>
  );
}
