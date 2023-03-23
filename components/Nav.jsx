import Image from "next/image";
import inkwellLogo from "@/public/images/inkwell.png";
export default function Nav() {
  return (
    <nav className="px-8 py-4 flex justify-between flex-wrap content-center fixed w-full z-[5] bg-white">
      <Image
        src="/images/inkwell.png"
        width={110}
        height={110}
        alt="nav bars"
      />
      <div className="nav__menu flex items-center">
        <button className="hidden sm:block bg-gradient-to-b from-[#000F55] to-[#B30048] rounded-lg text-base text-white font-semibold items-center px-8 py-2 md:py-4">
          Sign Up
        </button>
        <div className="hidden md:flex items-center">
          <button className="text-base text-[#000] font-semibold px-8">
            Log In
          </button>
          <button className="text-base text-[#000] font-semibold px-8">
            About Us
          </button>
        </div>
      </div>
      <div className="bars py-[.8rem] px-[.8rem] md:hidden text-2xl">
        <i className="fa-solid fa-bars"></i>
      </div>
    </nav>
  );
}
