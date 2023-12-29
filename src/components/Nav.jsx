import Image from "next/image";
// import inkwellLogo from "@/public/images/inkwell.png";
import Link from "next/link";
import aboutIcon from "../../public/images/about-icon.png";
import loginIcon from "../../public/images/login-icon.png";
import { useState } from "react";

export default function Nav() {
  const [navClose, resetClose] = useState(false);
  const [navWidth, navwidthreset] = useState("w-0");
  function openNav() {
    navwidthreset("w-[40%]");
  }
  function closeNav() {
    navwidthreset("w-0");
  }


  return (
    <>
      <nav  className="px-8 py-4 flex justify-between flex-wrap content-center fixed w-full z-[5] bg-white">
        <Link href="#home">
          <Image
            src="/images/inkwell.png"
            width={110}
            height={110}
            alt="nav bars"
          />
        </Link>
        <div className="nav__menu flex items-center">
          <button className="hidden sm:block bg-gradient-to-b from-secondary to-[#B30048] rounded-lg text-base text-white font-semibold items-center px-8 py-2 md:py-4">
            <Link href="#join">
              Sign Up
            </Link>
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
        <div className="bars py-[.8rem] px-[.8rem] md:hidden text-2xl" onClick={openNav}>
          <i className="fa-solid fa-bars"></i>
        </div>
      </nav>
      {/* 
    when click is true 
    when click is false translate-x-[10rem]

        */}
      {/* side-nav */}

      <div className={`bg-white ${navWidth} overflow-hidden md:hidden transition-all duration-100 ease-in-out z-[5] fixed inset-y-0 right-0`}>
        <i className="fa-solid fa-xmark absolute top-3 right-5 z-[6] text-3xl" onClick={closeNav}></i>
        <div className="grid grid-col-3 top-[10%] left-[20%] absolute justify-center 
     content-center gap-y-12">
          <Link href="#join" className="text-white bg-gradient-to-b from-secondary  to-[#B20048] px-8 py-1 rounded
      relative right-[10%]">
            Sign Up
          </Link>
          <div className="flex gap-[.4rem] align-center">
            <Image
              src={loginIcon}
              alt="log in icon"
              width={25}
              height={25}
            />
            <Link href="/">Login</Link>
          </div>
          <div className="flex gap-[.4rem] align-center">
            <Image
            alt="log in icon"
              src={aboutIcon}
              width={25}
              height={25}
            />
            <Link href="/">About Us</Link>
          </div>
        </div>
      </div>

    </>
  );
}
