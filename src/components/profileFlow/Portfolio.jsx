import Image from "next/image";
import SecondNav from "../navigations/SecondNav";
import coverPhoto from "../../../public/images/cover-photo.png";
import profilePhoto from "../../../public/images/profile-img.jpg";
import tinyPen from "../../../public/icons/pen.svg";
import shareButton from "../../../public/icons/share.svg";
import plus from "../../../public/icons/plus.svg";
import Card from "./Card";
import add from "../../../public/icons/gradient-add.svg";
import Footer from "../Footer";
import Nav from "../navigations/Nav";
import whitePen from "../../../public/icons/edit.svg";

// import pen from "../../../public/images/edit-pen.png";
function Portfolio() {
  return (
    <div>
      <SecondNav />
      <div className="hidden lg:block">
       <Nav />
      </div>
      <div className="mt-10 lg:mt-0">
        {/* cover photo and background image */}
        <div>
          {/* Cover Photo */}
          <div className="relative h-[122px] md:h-[222px] lg:h-[291px] w-full">
            <Image
              src={coverPhoto}
              alt="cover photo"
              fill
              className="object-bottom "
            />
            <div className="absolute bottom-2 right-2 h-5 w-5 md:h-8 md:w-8">
            <Image src={whitePen} alt="edit icon" fill/>
            </div>
          </div>
          {/* Profile photo and.... */}
          <div className="relative">
            {/* profile photo */}
            <div>
              <div
                className="absolute bg-white rounded-full p-1 
                    -translate-y-5 translate-x-5"
              >
                <Image
                  src={profilePhoto}
                  alt="Profile Photo"
                  className="relative h-[66.3px] w-[66.3px] rounded-full object-cover"
                />
              </div>

              {/* pen Icon */}
              <div className="relative top-[2rem] left-[4.5rem] inline-block">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 28 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="3" width="25" height="25" rx="12.5" fill="white" />
                  <path
                    d="M17.7727 6.59091L8 16.3636V20H11.6364L21.4091 10.2273M17.7727 6.59091L18.6105 5.75312C19.0927 5.2709 19.7468 5 20.4287 5C21.8488 5 23 6.15121 23 7.5713C23 8.25325 22.7291 8.90727 22.2469 9.38948L21.4091 10.2273M17.7727 6.59091L21.4091 10.2273"
                    stroke="url(#paint0_linear_503_10215)"
                    stroke-width="2"
                    stroke-linejoin="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_503_10215"
                      x1="15.5"
                      y1="5"
                      x2="15.5"
                      y2="20"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0.317708" stop-color="#000F55" />
                      <stop offset="0.848958" stop-color="#B30048" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>

            {/* ...name and share button */}
            <div className="absolute top-0 left-24">
              <div className="flex flex-col gap-1">
                <h2 className="text-sm sm:text-lg font-semibold">John Doe</h2>
                <div className="flex gap-1">
                  <p className="text-xs sm:text-base text-[#757575] font-semibold">
                    Content Writer
                  </p>
                  <Image src={tinyPen} alt="pen icon" width={10} height={10} />
                </div>
              </div>
            </div>
            <div
              className="absolute flex right-0 items-center gap-2 top-[1rem]
                 mr-3"
            >
              <Image
                src={shareButton}
                alt="share icon"
                width={10}
                height={10}
                className="md:h-7 md:w-7"
              />
              <p className="text-[5.82px] sm:text-sm">Share Portfolio Link</p>
            </div>
          </div>
        </div>
        {/* add a bio  */}
        <div className="mt-16 inline-block">
          <div className="flex gap-3 items-center pl-4 ml-7 box-blur rounded-full pr-24">
            <Image alt="plus icon" src={plus} width={28} height={28} />
            <p className="text-xs">Add Bio</p>
          </div>
        </div>

        <div className="px-2 py-5 flex justify-between items-center max-w-[1349px] mx-auto">
          <div className="flex flex-col items-start">
            <p className="text-center">Published</p>
            <p className="text-center ml-5">200</p>
          </div>
          <div className="relative h-8 w-8">
            <Image src={add} alt="+ icon" fill />
          </div>
        </div>
        {/* Articles */}
        <div className="mt-3 px-2 gap-5 grid place-items-center  min-[630px]:grid-cols-2 lg:grid-cols-3 max-w-[1349px] min-[1349px]:mx-auto">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>

      </div>
      <Footer/>
    </div>
  );
}

export default Portfolio;
