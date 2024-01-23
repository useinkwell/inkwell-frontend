import Image from "next/image";
import Link from "next/link";
import inkwell from "../../public/images/inkwell.svg";

function Footer() {
  return (
    <div>
      {/*  */}
      <div className="text-[#757575] text-lg sm:text-xl flex flex-col gap-20 md:gap-20 pt-40 px-10 md:flex-row items-start justify-between">
        <div className="flex flex-col gap-3">
          <Link className="" href="#">
            HomePage
          </Link>
          <Link className="" href="#">
            Sign Up
          </Link>
          <Link className="" href="#">
            About Us
          </Link>
        </div>
        {/*  */}
        <div className="flex flex-col gap-3">
          <Link className="" href="#">
            Explore
          </Link>
          <Link className="" href="#">
            My Feed
          </Link>
          <Link className="" href="#">
            Search
          </Link>
          <Link className="" href="#">
            Notification
          </Link>
        </div>
        <div className="flex flex-col gap-3">
          <Link className="" href="#">
            Profile
          </Link>
        </div>
        <div>
          <Link className="" href="#">
            Portfolio
          </Link>
        </div>
        <div>
          <Link className="" href="#">
            Log Out
          </Link>
        </div>
      </div>
      <div className="mx-auto">
        <Image src={inkwell} width={150} height={150} className="mx-auto"/>
      </div>
    </div>
  );
}

export default Footer;
