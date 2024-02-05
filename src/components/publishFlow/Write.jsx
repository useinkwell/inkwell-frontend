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

function Write() {
  return (
    <div>
      <SecondNav />
      {/* Container */}
      <div className="flex flex-col ">
        {/* container 1 */}
        <div className="w-full">
          {/* mobile version */}
          <div className="w-full p-5">
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
                <button className="bg-white shadow-md flex items-center font-semibold px-10 gradient-text rounded">
                  Preview
                </button>
              </div>
            </div>
            {/* lower side */}
            <div className="flex gap-4 px-5 pt-10">
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
        </div>
        {/* container 2 */}
        <div className="w-full bg-[#E0E0E0] h-[245px] flex items-center justify-center">
          <Image alt="icons" src={addImage} width={30} height={30} />
        </div>
        {/* Container 3 */}
        <div className="w-full">
          {/* title and caption */}
          <div className="px-5">
            <h1>Add Title</h1>
            <h3>Add Caption</h3>
          </div>

          {/* Content */}
          <div className="px-10 pt-5">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra, per inceptos himenaeos. Praesent auctor purus
              luctus enim egestas, ac scelerisque ante pulvinar. Donec ut
              rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur
              vel bibendum lorem. Morbi convallis convallis diam sit amet
              lacinia. Aliquam in elementum tellus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Write;
