import backIcon from "../../../public/icons/arrow-left.svg";
import pen from "../../../public/icons/pen.svg";
import Image from "next/image";

function SecondNav() {
  return (
    <div className="pt-sans-regular px-5 flex justify-between items-center mx-auto shadow-lg rounded-b-2xl lg:hidden">
      <div className="relative h-12 w-12">
        <Image src={backIcon} fill alt="arrow-left icon" />
      </div>
      <div className="flex gap-3">
        <div className="relative h-5 w-5">
          <Image src={pen} alt="pen Icon" fill/>
        </div>
        <h3>Write</h3>
      </div>
      <i className="fa-solid fa-bars  pr-5 text-xl"></i>
    </div>
  );
}

export default SecondNav;
