import Link from "next/link";
import Image from "next/image";
import searchIcon from "../../../public/icons/search.svg";
import home from "../../../public/icons/home.svg";
import profile from "../../../public/icons/profile-icon.svg";
import portfolioIcon from "../../../public/icons/folder-icon.svg";
import notification from "../../../public/icons/bell-icon.svg";
import logout from "../../../public/icons/login.svg";
import close from "../../../public/icons/close.svg";
import Search from "./Search";
import Notification from "./Notifications";
function Nav() {
  return (
    <div>
      <div className="mx-auto shadow-lg rounded-b-3xl">
        {/* Navigation */}
        {/* top navigation */}
        <div className="flex items-start justify-between max-w-5xl mx-auto h-24">
          {/* leftside */}
          <div href="/" className="relative w-24 h-14">
            <Link href="/">
              <Image priority src="/images/inkwell.png" alt="nav bars" fill />
            </Link>
          </div>
          {/* right navigation */}
          <div className="relative pt-4 flex gap-5">
            <i className="fa-solid fa-bars sm:hidden pr-5"></i>
            <div className="relative h-5 w-8 hidden sm:flex">
              <Image src="/icons/folder-icon.svg" fill alt="icon" />
            </div>
            <div className="relative h-5 w-8 hidden sm:flex">
              <Image src="/icons/bell-icon.svg" fill alt="icon" />
            </div>
            <div className="relative h-5 w-8 hidden sm:flex">
              <Image src="/icons/back-icon.svg" fill alt="icon" />
            </div>
            <div className="relative h-5 w-8 hidden sm:flex">
              <Image src="/icons/profile-icon.svg" fill alt="icon" />
            </div>
          </div>
        </div>
        {/* bottom */}
        <div className="max-w-4xl mx-auto px-2 md:px-0 grid grid-cols-2 md:grid-cols-3 place-items-center pb-2 text-primary text-base">
          <div className="border-primary border-solid border-2 rounded-md px-5 hidden md:flex">
            <input
              type="text"
              className="focus:outline-none placeholder:text-primary placeholder:font-semibold"
              placeholder="Search..."
            />
          </div>
          <div className="flex justify-between md:gap-20 font-semibold w-full sm:w-full">
            <div className="relative">
              <h4 className="pl-[0.8rem]">My Feed</h4>
              {/* <div className="w-24 h-[2px] rounded bg-secondary absolute mt-[0.7rem]"></div> */}
            </div>
            <div className="relative">
              <h4 className="pl-5 gradient-text border-blue-500">Explore</h4>
              <div className="w-24 h-[2px] rounded bg-secondary absolute mt-[0.7rem]"></div>
            </div>
          </div>
          <div className="text-white custom-gradient-background py-1 px-2 rounded-md flex items-center ml-10">
            <h4>Write</h4>
            <Image
              src="/icons/pen.svg"
              className="h-5 w-8"
              width={10}
              height={10}
              alt="icon"
            />
          </div>
        </div>
      </div>
      {/* mobile nav */}
      <div className="bg-white fixed top-0 bottom-0 right-0 w-1/2 z-20 h-screen hidden">
        <div className="h-10 w-10 absolute right-5 top-10 z-20">
          <Image src={close} fill alt="icon" />
        </div>
        <div className="h-screen flex flex-col items-start justify-start gap-10 pl-10 pt-28">
          <div className="flex gap-3 items-center text-sm">
            <div className="relative h-5 w-5">
              <Image alt="search icon" src={searchIcon} fill />
            </div>
            <p>Search</p>
          </div>
          <Link href="/">
            <div className="flex gap-2 items-center text-sm">
              <div className="relative h-5 w-5">
                <Image alt="search icon" src={home} fill />
              </div>
              <p>Home</p>
            </div>
          </Link>
          <div className="flex gap-2 items-center text-sm">
            <div className="relative h-5 w-5">
              <Image alt="search icon" src={profile} fill />
            </div>
            <p>Profile</p>
          </div>
          <div className="flex gap-2 items-center text-sm">
            <div className="relative h-5 w-5">
              <Image alt="search icon" src={portfolioIcon} fill />
            </div>
            <p>Portfolio</p>
          </div>
          <div className="flex gap-2 items-center text-sm">
            <div className="relative h-5 w-5">
              <Image alt="search icon" src={notification} fill />
            </div>
            <p>Notification</p>
          </div>

          <div className="flex gap-2 items-center text-sm">
            <div className="relative h-5 w-5">
              <Image alt="search icon" src={logout} fill />
            </div>
            <p>Log Out</p>
          </div>
        </div>
      </div>
      {/* Dark overlay */}
      <div className="fixed top-0 bottom-0 left-0 right-0 bg-black opacity-20 z-10 hidden"></div>
      {/* Search */}
      {/* <Search/> */}
      {/* Notification */}
      {/* <Notification/> */}
    </div>
  );
}

export default Nav;
