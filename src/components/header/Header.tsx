"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="w-full min-h-[30px] relative flex items-center justify-between bg-[#00205c] p-[20px] py-[15px]">
      <Image src="https://i.imgur.com/23N6cRH.png" width={300} height={74} className="w-[150px] h-[35px]" alt="logo" />
      <Link href="/" className="p-1 px-5 bg-[#f6a800] text-[#00205c] rounded-full">Sign in</Link>
    </div>
  );
}
