import Image from "next/image";
import inkwellLogo from "@/public/images/inkwell.png"
export default function Nav() {
    return ( 
    // Mobile Navigation
       <nav className="flex  justify-between flex-wrap content-center text-3xl fixed w-full z-[5] bg-white">
        <Image src="/images/inkwell.png" width={110} height={110} alt="nav bars" />
        {/* <img  src="/images/inkwell.png"/> */}
        <div className="bars py-[.8rem] px-[.8rem]"><i className="fa-solid fa-bars"></i></div>
       </nav>   
        // Desktop Navigation  

     );
}

 