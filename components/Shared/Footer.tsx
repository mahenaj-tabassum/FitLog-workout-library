import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#090A0D] h-25 border-t border-t-[#1A1D24]">
      <div className="flex h-full w-[85%] mx-auto items-center justify-between">
        <Image src="/nav-logo.png" width={85} height={30} alt="Footer Logo" />
        <p className="text-[12px] text-[#6B7280]">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
