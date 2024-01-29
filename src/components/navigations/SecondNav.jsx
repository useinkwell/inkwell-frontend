import backIcon from "../../../public/icons/arrow-left.svg";
import pen from "../../../public/icons/pen.svg";
import Image from "next/image";

function SecondNav() {
  return (
    <div className="flex justify-betweeen items-center">
      <div className="relative h-5 w-5">
        <Image src={backIcon} fill alt="arrow-left icon" />
      </div>
      <div>
        <div className="relative h-5 w-5 flex gap-3">
          <Image src={pen} alt="pen Icon" fill/>
        </div>
        <h3>Write</h3>
      </div>
      <i className="fa-solid fa-bars sm:hidden pr-5"></i>
    </div>
  );
}

export default SecondNav;
