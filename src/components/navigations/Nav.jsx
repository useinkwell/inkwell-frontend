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
import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  navOpen,
  navClose,
  showOverlay,
  closeOverlay,
  openOverlay,
  searchOpen,
  updateAnything,
  notificationOpen,
} from "@/redux/slices/navSlice";
// const navWidthClosed = "w-0";
// const navWidthOpen = "w-1/2";

function Nav() {
  const mobileNav = useRef(null);
  const {
    navWidthClosed,
    navWidthOpen,
    overlayState,
    navIsOpen,
    navWidthState,
    isAnythingOpen,
    searchIsOpen,
    notificationIsOpen,
  } = useSelector((store) => store.mobileNav);

  const dispatch = useDispatch();

  // const [mobileDivWidth, setMobileDivWidth] = useState(null);
  const [prevWidth, setPrevWidth] = useState(null);

  useEffect(() => {
    // Check if window is defined (only available on the client-side)
    if (typeof window !== "undefined") {
      // Access window.innerWidth when window is ready
      setPrevWidth(window.innerWidth);
    }
  }, []);

  // act on window resize
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        // handle mobile to desktop
        // const mobileNavWidth = mobileNav.current.getBoundingClientRect().width;
        if (window.innerWidth >= 640) {
          dispatch(navClose());
          dispatch(updateAnything());
        }
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [prevWidth]);

  useEffect(() => {
    if (navIsOpen || searchIsOpen) {
      dispatch(showOverlay());
    } else {
      dispatch(closeOverlay());
    }
  }, [isAnythingOpen, searchIsOpen]);

  return (
    <div>
      <div className="pt-sans-regular mx-auto shadow-lg rounded-b-3xl">
        {/* Navigation */}
        {/* top navigation */}
        <div className="flex items-start justify-between max-w-5xl mx-auto h-24">
          {/* leftside */}
          <div href="/" className="relative w-24 h-14">
            <Link href="/">
              <Image
                priority
                src="/images/inkwell.png"
                alt="inkwell logo"
                fill
              />
            </Link>
          </div>
          {/* right navigation */}
          <div className="relative pt-4 flex gap-5">
            <div
              onClick={() => {
                dispatch(navOpen());
                dispatch(showOverlay());
                dispatch(updateAnything());
              }}
            >
              <i className="fa-solid fa-bars sm:hidden pr-5"></i>
            </div>
            <Link href="/portfolio">
              <div className="relative h-5 w-8 hidden sm:flex">
                <Image src="/icons/folder-icon.svg" fill alt="portfolio icon" />
              </div>
            </Link>

            <div
              onClick={() => {
                dispatch(notificationOpen());
                dispatch(showOverlay());
              }}
              className="relative h-5 w-8 hidden sm:flex"
            >
              <Image src="/icons/bell-icon.svg" fill alt="bell icon" />
            </div>
            <div className="relative h-5 w-8 hidden sm:flex">
              <Image src="/icons/back-icon.svg" fill alt="logout icon" />
            </div>
            <Link href="/profile">
              <div className="relative h-5 w-8 hidden sm:flex">
                <Image src="/icons/profile-icon.svg" fill alt="profile icon" />
              </div>
            </Link>
          </div>
        </div>
        {/* bottom */}
        <div className="max-w-4xl mx-auto px-2 md:px-0 grid grid-cols-2 md:grid-cols-3 place-items-center pb-2 text-primary text-base">
          <div
            onClick={() => {
              dispatch(searchOpen());
              dispatch(showOverlay());
            }}
            className="border-primary border-solid border-2 rounded-md px-5 hidden md:flex"
          >
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
              src="/icons/penwhite.svg"
              className="h-5 w-8"
              width={10}
              height={10}
              alt="icon"
            />
          </div>
        </div>
      </div>
      {/* mobile nav */}
      <div
        className={`pt-sans-regular bg-white fixed top-0 bottom-0 right-0 overflow-hidden z-20 h-screen
       ${navWidthState} sm:w-0 transition-all duration-300 ease-out`}
        ref={mobileNav}
      >
        <div
          className="h-10 w-10 absolute right-5 top-10 z-20"
          onClick={() => {
            dispatch(navClose());
            dispatch(closeOverlay());
            dispatch(updateAnything());
          }}
        >
          <Image src={close} fill alt="icon" />
        </div>
        <div className="h-screen flex flex-col items-start justify-start gap-10 pl-10 pt-28">
          <div
            className="flex gap-3 items-center text-sm"
            onClick={() => {
              dispatch(searchOpen());
              dispatch(showOverlay());
            }}
          >
            <div className="relative h-5 w-5">
              <Image alt="search icon" src={searchIcon} fill />
            </div>
            <p>Search</p>
          </div>
          <Link href="/feed">
            <div className="flex gap-2 items-center text-sm">
              <div className="relative h-5 w-5">
                <Image alt="search icon" src={home} fill />
              </div>
              <p>Home</p>
            </div>
          </Link>

          <Link href="/profile">
            <div className="flex gap-2 items-center text-sm">
              <div className="relative h-5 w-5">
                <Image alt="search icon" src={profile} fill />
              </div>
              <p>Profile</p>
            </div>
          </Link>

          <div className="flex gap-2 items-center text-sm">
            <div className="relative h-5 w-5">
              <Image alt="search icon" src={portfolioIcon} fill />
            </div>
            <p>Portfolio</p>
          </div>
          <div
            onClick={() => {
              dispatch(notificationOpen());
              dispatch(showOverlay());
            }}
            className="flex gap-2 items-center text-sm"
          >
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
      <div
        className={`fixed top-0 bottom-0 left-0 right-0 bg-black opacity-20 z-10 ${overlayState}`}
      ></div>
      {/* Search */}
      <Search />
      {/* Notification */}
      <Notification />
    </div>
  );
}

export default Nav;