import Image from "next/image";
import close from "../../../public/icons/close.svg";
import shareButton from "../../../public/icons/share.svg";
import copy from "../../../public/icons/copy.svg";
import linkedIn from "../../../public/icons/linkedin.svg";
import instagram from "../../../public/icons/Instagram.svg";

function Share() {
  return (
    <div className="lucida fixed top-0 bottom-0 right-0 left-0 flex items-center justify-center">
      <div className="fixed top-0 bottom-0 left-0 right-0 bg-black opacity-20 z-10 "></div>
      <div className="bg-white  w-[532px] h-[50%] z-20 p-5">
        <div className="flex justify-between items-center">
          <div></div>
          <div className="flex gap-6 items-center">
            <Image src={shareButton} alt="share icon" width={20} height={20} className="sm:w-7 sm:h-7"/>{" "}
            <p className="text-xs sm:text-lg">Share Portfolio Link</p>
          </div>
          <div>
            <Image src={close} alt="close icon" width={40} height={40} />
          </div>
        </div>
        <div className="py-5 flex flex-col gap-5 sm:mt-20 sm:flex-row justify-center sm:gap-5 items-center">
          <div className="flex items-center gap-2">
            <Image src={copy} alt="copy icon" width={30} height={30} />
            <p>Copy Link</p>
          </div>
          <div className="flex items-center gap-2">
            <Image src={linkedIn} alt="LinkedIn icon" width={30} height={30} />
            <p>LinkedIn</p>
          </div>
          <div className="flex items-center gap-2">
            <Image src={instagram} alt="LinkedIn icon" width={30} height={30} />
            <p>Instagram</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Share;
