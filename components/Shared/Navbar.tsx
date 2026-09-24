"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="border-b sticky top-0 bg-[#0B0D12] z-50 border-b-[#1C1F26]">
      <div className="flex justify-between items-center h-20 w-[85%] mx-auto">
        <Image src="/nav-logo.png" width={93.41} height={30} alt="Nav Logo" />

        <div className="flex items-center gap-5">
          <Link
            className={`${
              pathname === "/"
                ? "px-5 py-2 bg-[#1A2312] rounded-full text-accent"
                : "text-body hover:bg-[#1A2312]/50 hover:text-white"
            } rounded-full px-5 py-2 transition-all duration-300 ease-in-out  text-[15px]`}
            href="/"
          >
            Workouts
          </Link>
          <Link
            className={`${
              pathname === "/my-plan"
                ? "px-5 py-2 bg-[#1A2312] rounded-full text-accent"
                : "text-body hover:bg-[#1A2312]/50 hover:text-white"
            } rounded-full px-5 py-2 transition-all duration-300 ease-in-out  text-[15px]`}
            href="/my-plan"
          >
            My Plan
          </Link>
        </div>

        <div className="flex items-center gap-5">
          <button className="cursor-pointer flex items-center gap-3">
            <Link href="/my-plan">Plan</Link>
            <span className="inline-flex items-center justify-center text-[12px] text-black h-6 w-6 rounded-full bg-accent">
              0
            </span>
          </button>
          <button className="cursor-pointer flex items-center gap-3">
            <Link href="/my-plan">Saved</Link>
            <span className="inline-flex items-center justify-center shrink-0 text-[12px]  h-6 w-6 rounded-full border border-[#2D313B]">
              0
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
