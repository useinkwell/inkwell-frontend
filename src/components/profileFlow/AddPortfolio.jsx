import Image from "next/image";
import add from "../../../public/icons/plus.svg";
import profileImage from "../../../public/images/profile-img.jpg";
import upload from "../../../public/icons/upload.svg";
import close from "../../../public/icons/close.svg";

function AddPortfolio() {
  return (
    <div>
      <div className="lucida fixed top-0 bottom-0 right-0 left-0 flex items-center justify-center">
        <div className="fixed top-0 bottom-0 left-0 right-0 bg-black opacity-20 z-10 "></div>
        <div className="bg-white  w-[532px] h-[50%] z-20 p-5">
          <div className="flex justify-between items-center">
            <div></div>
            <div className="flex gap-6 items-center">
              <Image
                src={add}
                alt="share icon"
                width={20}
                height={20}
                className="sm:w-7 sm:h-7"
              />{" "}
              <p className="text-xs sm:text-lg">Add to Portfolio</p>
            </div>
            <div>
              <Image src={close} alt="close icon" width={40} height={40} />
            </div>
          </div>
          <div className="py-5 flex flex-col gap-10 sm:mt-10 justify-center items-center">
            {/* <div className="flex items-center gap-2">
              <Image src={copy} alt="copy icon" width={30} height={30} />
              <p>Copy Link</p>
            </div> */}
            <div className="flex items-center gap-2">
              <Image
                src={profileImage}
                alt="LinkedIn icon"
                width={60}
                height={60}
                className="rounded-full h-10 w-10 object-cover"
              />
              <p>Add from profile</p>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src={upload}
                alt="LinkedIn icon"
                width={20}
                height={20}
              />
              <p>Upload from computer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddPortfolio;
