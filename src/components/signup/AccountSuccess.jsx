import Image from "next/image";
import successImage from "../../../public/images/success-image.png";
import inkwellLogo from "/public/images/inkwell.svg";

function AccountSuccess() {
  return (
    <div>
      <div>
        <div className="flex flex-col gap-0 justify-start content-center">
          <Image
            alt="inkwell logo"
            src={inkwellLogo}
            width={130}
            height={130}
            className=""
          />
          <i className="fa-solid fa-arrow-left text-3xl md:text-4xl ml-4"></i>
        </div>
        {/* ----------- */}
        <div className="max-w-6xl[1512px] mx-auto">
          <h3 className="flex flex-col min-[1512px]:gap-10 text-3xl text-center font-normal md:text-4xl min-[1512px]:text-[64px] min-[1512px]:absolute
          min-[1512px]:right-60 min-[1512px]:top-32 min-[1650px]:left-[35%]">
            <p>You're signed up and</p>
            <p>ready to go!</p>
          </h3>
          <Image
            src={successImage}
            className="w-[300px] h-[300px] md:w-[300px] md:h-[300px] mx-auto mt-16 md:mt-10 
            min-[1512px]:absolute min-[1512px]:left-80 min-[1650px]:left-[23%]  min-[1512px]:top-[10rem] min-[1512px]:w-[400px] min-[1512px]:h-[400px]"
            width={500}
            height={500}
          />
          <button className=" custom-button-styles  w-[239px] justify-center items-center mt-10
           min-[1512px]:mt-0 min-[1512px]:absolute min-[1512px]:right-96 min-[1650px]:left-[40%] min-[1512px]:bottom-32">
            Continue{" "}
            <i className="fa-solid fa-arrow-right text-3xl md:text-4xl ml-4"></i>
          </button>
        </div>

        {/* ------------- */}
      </div>
    </div>
  );
}

export default AccountSuccess;
