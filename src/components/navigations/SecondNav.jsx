import backIcon from "../../../public/icons/arrow-left.svg";
import pen from "../../../public/icons/pen.svg";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { openSecondNav, closeSecondNav } from "@/redux/slices/navSlice";
import searchIcon from "../../../public/icons/search.svg";
import home from "../../../public/icons/home.svg";
import profile from "../../../public/icons/profile-icon.svg";
import portfolioIcon from "../../../public/icons/folder-icon.svg";
import notification from "../../../public/icons/bell-icon.svg";
import logout from "../../../public/icons/login.svg";
import close from "../../../public/icons/close.svg";
import Link from "next/link";
import { useRouter } from "next/router";

function SecondNav() {

  const router = useRouter();
  const path = router.asPath;

  const { secondNavIsOpen } = useSelector((store) => store.mobileNav);
  const dispatch = useDispatch();

  
  return (
    <div>
      <div className="pt-sans-regular px-5 flex justify-between items-center mx-auto shadow-lg rounded-b-2xl">
        <div className="relative h-12 w-12">
          <Image src={backIcon} fill alt="arrow-left icon" />
        </div>
        {/* page label */}
        <div className="flex gap-3">
          <div className="relative h-5 w-5">
            <Image src={pen} alt="pen Icon" fill />
          </div>
          <h3>Write</h3>
        </div>

        <div onClick={() => dispatch(openSecondNav())}>
          <i className="fa-solid fa-bars pr-5 text-xl"></i>
        </div>
      </div>
      {/*  links */}

      <div
        className={`pt-sans-regular bg-white fixed  bottom-0 right-0 overflow-hidden z-20 h-screen
                    transition-all duration-300 ease-out
          ${secondNavIsOpen ? "w-1/2" : "w-0"}
          `}
      >
        <div
          className="h-10 w-10 absolute right-5 top-10 z-20"
          onClick={() => {
            dispatch(closeSecondNav());
            // dispatch(closeOverlay());
            // dispatch(updateAnything());
          }}
        >
          <Image src={close} fill alt="icon" />
        </div>
        <div className="h-screen flex flex-col items-start justify-start gap-10 pl-10 pt-28">
          <div
            className="flex gap-3 items-center text-sm"
            onClick={() => {
              // dispatch(searchOpen());
              // dispatch(showOverlay());
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
              // dispatch(notificationOpen());
              // dispatch(showOverlay());
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
          
      <div
        className={`fixed top-0 bottom-0 left-0 right-0 bg-black opacity-20 z-10 ${
          secondNavIsOpen ? "block" : "hidden"
        }`}
      ></div>
  
    </div>
  );
}

export default SecondNav;
