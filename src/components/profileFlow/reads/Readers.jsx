import Image from "next/image";
import close from "../../../../public/icons/close.svg";
import profileImage from "../../../../public/images/profile-img.jpg";
import { useSelector, useDispatch } from "react-redux";
import { readerClose } from "@/redux/slices/readSlice";

function ReadCard() {
  return (
    <div className="bg-white shadow-md w-full">
      <div className="h-[0.12rem] w-full bg-[#D9D9D9]"></div>
      <div className="px-2 py-2 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Image
            src={profileImage}
            alt="profile image"
            className="rounded-full w-10 h-10 object-cover"
          />
          <p className="text-xl">username</p>
        </div>
        <div>
          <button className="pt-sans-regular text-white rounded py-2 px-4 custom-gradient-background">
            Follow
          </button>
        </div>
      </div>
    </div>
  );
}

function Readers() {
const dispatch = useDispatch()
const {rOverlayState, readerIsOpen, readingIsClose} = useSelector((store)=> store.readSlice)

  function CloseFunction(){
    dispatch(readerClose());
  }


  return (
    <div className="lucida">
      <div
        className={`${readerIsOpen ? 'w-full lg:w-1/2':'w-0'} transition-all duration-300 ease-out fixed top-0 right-0   bottom-0 bg-white overflow-auto pt-5
       z-20`}
      >
        <div className="flex items-center justify-between px-2">
          <div></div>
          <h3 className="text-lg font-semibold">Readers</h3>
          <div onClick={() => CloseFunction()}>
            <Image src={close} alt="x icon" width={40} height={40} />
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-5 mx-auto max-w-[700px]">
          <ReadCard />
          <ReadCard />
        </div>
      </div>

      <div className={`${rOverlayState} fixed top-0 bottom-0 left-0 right-0 bg-black opacity-20 z-10`}></div>
    
    </div>
  );
}

export default Readers;
