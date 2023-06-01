import Image from "next/image";
import inkwellLogo from "@/public/images/inkwell.png";
import Link from "next/link";
import aboutIcon from "@/public/images/about-icon.png"
import loginIcon from "@/public/images/login-icon.png"
import { useState } from "react";

export default function Nav() {
  const [click, resetClick] = useState(false);
  function handleNav() {
    resetClick(!click)
  }


  return (
    <>
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
    {/* 
    when click is true 
    when click is false translate-x-[10rem]

        */}
    {/* side-nav */}
   
    <div className="bg-white sm:hidden w-[40%] z-[5] absolute inset-y-0 right-[-200px] hidden
    ">
    <i className="fa-solid fa-xmark absolute top-5 right-5 z-[6] text-3xl"></i>
    <div className="grid grid-col-3 top-[10%] left-[20%] absolute justify-center 
     content-center gap-y-12">
      <Link href="/" className="text-white bg-gradient-to-b from-[#000F55]  to-[#B20048] px-8 py-1 rounded
      relative right-[10%]">
        Sign Up
      </Link>
      <div className="flex gap-[.4rem] align-center">
        <Image
        src={loginIcon}
        width={25} 
        height={25}
        />
        <Link href="/">Login</Link>
      </div>
      <div className="flex gap-[.4rem] align-center">
      <Image
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
