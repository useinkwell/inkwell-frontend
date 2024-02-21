import Button from "../buttons/Button";
import SecondNav from "../navigations/SecondNav";
import Image from "next/image";
import strike from "../../../public/icons/format-strikethrough.svg";
import ticon from "../../../public/icons/ticon.svg";
import ticon2 from "../../../public/icons/ticon2.svg";
import justify from "../../../public/icons/justify.svg";
import alignLeft from "../../../public/icons/align-left.svg";
import alignRight from "../../../public/icons/format-align-right.svg";
import alignCenter from "../../../public/icons/format-align-center.svg";
import alignTop from "../../../public/icons/align-top.svg";
import underline from "../../../public/icons/format-underline.svg";
import italics from "../../../public/icons/slant-icon.svg";
import bold from "../../../public/icons/bold.svg";
import addImage from "../../../public/icons/image-plus.svg";
import Nav from "../navigations/Nav";

function DraftItem() {
  return (
    <div className="bg-white px-5 py-2 rounded-t w-full flex flex-col gap-2 border-b-[3px] border-[#757575]">
      <h3 className="text-base font-normal">Untitled</h3>
      <p className="text-xs text-[#757575]">Last Modified 1/23/2023</p>
    </div>
  );
}

function DraftItem2() {
  return (
    <div className="bg-white py-2 px-2 rounded-t w-full flex flex-col gap-2">
      <div className="px-5">
        <h3 className="text-xl font-normal">Untitled</h3>
        <p className="text-base text-[#757575]">Last Modified 1/23/2023</p>
      </div>
      <div className="h-[0.12rem] w-full bg-[#757575]"></div>
    </div>
  );
}

function DraftPopup() {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-30 bg-white overflow-auto hidden md:hidden">
      <div className="flex items-center justify-between pt-8">
        <div></div>
        <h3 className="text-center font-semibold text-xl">Drafts</h3>
        <svg
          width="40"
          height="40"
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_451_4846)">
            <path
              d="M39.8996 16.1001L16.0996 39.9001M16.0996 16.1001L39.8996 39.9001"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_451_4846">
              <rect width="56" height="56" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className="flex flex-col items-end gap-2 w-full pr-5 mt-7">
        <i className="fa fa-plus pr-10"></i>
        <p>Add to drafts</p>
      </div>
      <div className="flex flex-col">
        <DraftItem2 />
        <DraftItem2 />
        <DraftItem2 />
        <DraftItem2 />
        <DraftItem2 />
        <DraftItem2 />
        <DraftItem2 />
      </div>
    </div>
  );
}

function Write() {
  return (
    <div className="">
      <SecondNav />
      <div className="hidden lg:block">
        <Nav />
      </div>
      {/* Container */}
      <div className="flex flex-col lg:flex-row lg:pt-10 bg-[#F4F4F4] max-w-[1664px] mx-auto">
        {/* container 1 */}
        <div className="w-full lg:w-1/4">
          {/* mobile version */}
          <div className="w-full p-5 lg:hidden">
            {/* upper */}
            <div className="flex justify-between">
              <div className="flex gap-8 items-center ">
                <p>Drafts</p>
                <i className="fa-solid fa-plus text-2xl"></i>
              </div>
              {/* buttons */}
              <div className="flex flex-col gap-3">
                <button className="custom-gradient-background px-10 text-white font-semibold rounded">
                  Publish
                </button>
                <button className="bg-white box-blur flex items-center font-semibold px-10 gradient-text rounded">
                  Preview
                </button>
              </div>
            </div>
            {/* lower side */}
            <div className="flex gap-4 px-5 pt-10 justify-center md:gap-10">
              <Image alt="icons" src={strike} width={20} height={20} />
              <Image alt="icons" src={ticon} width={20} height={20} />
              <Image alt="icons" src={ticon2} width={20} height={20} />
              <Image alt="icons" src={justify} width={20} height={20} />
              <Image alt="icons" src={alignLeft} width={20} height={20} />
              <Image alt="icons" src={alignRight} width={20} height={20} />
              <Image alt="icons" src={alignCenter} width={20} height={20} />
              <Image alt="icons" src={alignTop} width={20} height={20} />
              <Image alt="icons" src={underline} width={20} height={20} />
              <Image alt="icons" src={italics} width={20} height={20} />
              <Image alt="icons" src={bold} width={10} height={10} />
              <Image alt="icons" src={addImage} width={20} height={20} />
            </div>
          </div>

          {/* Desktop version */}
          <div className="w-full bg-[#F4F4F4] hidden lg:block">
            <div className="flex gap-4 px-5 pt-10 justify-center md:gap-10 lg:flex-wrap">
              <Image alt="icons" src={strike} width={20} height={20} />
              <Image alt="icons" src={ticon} width={20} height={20} />
              <Image alt="icons" src={ticon2} width={20} height={20} />
              <Image alt="icons" src={justify} width={20} height={20} />
              <Image alt="icons" src={alignLeft} width={20} height={20} />
              <Image alt="icons" src={alignRight} width={20} height={20} />
              <Image alt="icons" src={alignCenter} width={20} height={20} />
              <Image alt="icons" src={alignTop} width={20} height={20} />
              <Image alt="icons" src={underline} width={20} height={20} />
              <Image alt="icons" src={italics} width={20} height={20} />
              <Image alt="icons" src={bold} width={10} height={10} />
              <Image alt="icons" src={addImage} width={20} height={20} />
            </div>
            {/* Drafts section */}
            <div className="px-5 pt-10">
              <div className="flex justify-between">
                <p>Drafts</p>
                <i className="fa fa-plus text-2xl"></i>
              </div>
              <div className="pt-3 p-5">
                <DraftItem />
                <DraftItem />
                <DraftItem />
                <DraftItem />
                <DraftItem />
              </div>
            </div>
          </div>
        </div>
        {/* container 2 */}
        <div className="lg:w-3/6">
          <div className="w-full mx-auto bg-[#E0E0E0] h-[245px] flex items-center justify-center">
            <Image alt="icons" src={addImage} width={30} height={30} />
          </div>
          <div className="w-full">
            {/* title and caption */}
            <div className="px-5 pt-2">
              <h1 className="font-semibold text-xl">Add Title</h1>
              <h3 className="text-xs">Add Caption</h3>
            </div>

            {/* Content */}
            <div className="px-10 pt-10 text-lg">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus. Maecenas eget condimentum velit,
                sit amet feugiat lectus. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos. Praesent
                auctor purus luctus enim egestas, ac scelerisque ante pulvinar.
                Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor
                urna. Curabitur vel bibendum lorem. Morbi convallis convallis
                diam sit amet lacinia. Aliquam in elementum tellus.
              </p>
            </div>
          </div>
        </div>
        {/* Container 3 for desktop screen */}
        <div className="hidden lg:flex w-1/4 justify-center">
          <div className="flex flex-col gap-3">
            <button className="text-xl custom-gradient-background px-10 text-white font-semibold rounded">
              Publish
            </button>
            <button className="text-xl bg-white box-blur flex items-center font-semibold px-10 gradient-text rounded">
              Preview
            </button>
          </div>
        </div>
      </div>
      <DraftPopup />
    </div>
  );
}

export default Write;
