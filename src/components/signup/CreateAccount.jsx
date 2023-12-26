import Image from "next/image";
import inkwellLogo from "/public/images/inkwell.svg";
import signupImage from "/public/images/signup-image2.png";
function CreateAccount() {
  return (
    <div>
      <div className="flex flex-col gap-0 justify-start content-center">
        <Image
          alt="inkwell logo"
          src={inkwellLogo}
          width={130}
          height={130}
          className=""
        />
        <i className="fa-solid fa-arrow-left text-3xl ml-4"></i>
      </div>
      <div>
        <h2 className="text-center text-xl w-5/6 mx-auto font-normal">
          Sign up and join the <br />
          community!
        </h2>
        <Image src={signupImage} className="mx-auto" width={159} height={117} />
        {/* Form */}
        <form className="w-[85%] mx-auto">
          <input
            placeholder="John Doe"
            name="name"
            type="text"
            className="w-full focus:outline-none p-2 rounded-xl  border-2 border-inkBlue text-inkBlue"
          />
        </form>
      </div>
    </div>
  );
}

export default CreateAccount;
