import Image from "next/image";
import close from "../../../../public/icons/close.svg";
import profileImage from "../../../../public/images/profile-img.jpg";
import { useDispatch, useSelector } from "react-redux";
import { readingClose } from "@/redux/slices/readSlice";

function ReadCard() {
  return (
    <div className="bg-white shadow-md w-full">
      <div className="h-[0.12rem] w-full bg-[#D9D9D9]"></div>
      <div className="px-2 py-2 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Image src={profileImage} alt="profile image" 
          className="rounded-full w-10 h-10 object-cover"
          />
          <p className="text-xl">username</p>
        </div>
        <div className="custom-gradient-background p-[0.1rem] rounded-sm">
            <button className="py-1 px-2 bg-white rounded-sm">
                <p className="pt-sans-regular gradient-text">Following</p>
            </button>
        </div>
      </div>
    </div>
  );
}

function Reading() {
  const dispatch = useDispatch();
  const {readingIsOpen} = useSelector((store)=> store.readSlice)

  return (
    <div>
    <div
      className={`${readingIsOpen ? "w-full lg:w-1/2":"w-0"} lucida fixed top-0 right-0 bottom-0 bg-white overflow-auto pt-5
      lg: z-20 transition-all duration-300 ease-out`}
    >
      <div className="flex items-center justify-between px-2">
        <div></div>
        <h3 className="text-lg font-semibold">Reading</h3>
        <div 
        onClick={()=>dispatch(readingClose())}
        >
        <Image src={close} alt="x icon" width={40} height={40} />
        </div>
      </div>
      <div className="mt-10 flex flex-col gap-5 mx-auto max-w-[700px]">
        <ReadCard />
        <ReadCard />
      </div>
    </div>
    </div>
  );
}

export default Reading;
