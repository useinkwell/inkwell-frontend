import CustomInput from "@/components/forms/CustomInput";
import inkwellLogo from "../../../public/images/inkwell.svg";
import login from "../../../public/icons/login.svg";
import Image from "next/image";
import Button from "../buttons/Button";
import wavyLines from "../../../public/images/wavy-lines.png";
function Login() {
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
        <i className="fa-solid fa-arrow-left text-3xl md:text-4xl ml-4"></i>
      </div>
      <div className="absolute h-48 w-48 right-0 top-0">
        <Image alt="wavy lines" src={wavyLines} fill />
      </div>

      <div className="absolute h-48 w-48 bottom-0 left-0 hidden md:block">
        <Image alt="wavy lines" src={wavyLines} fill />
      </div>
      <div className="flex flex-col gap-10 py-10">
        {/*  */}
        <div className="flex gap-3 items-center justify-center">
          <p className="text-xl">Log In</p>
          <div className="relative h-10 w-10">
            <Image alt="log in icon" src={login} fill />
          </div>
        </div>
        {/*  */}
        <form className="w-[85%] sm:w-[28.65rem] mx-auto flex flex-col gap-8 justify-center text-lg lg:text-2xl 2xl:mt-5">
          <CustomInput name="Username" inputtype="text" />
          <CustomInput name="password" inputtype="password" />
          <Button.Submit />
          <p className="underline text-xl text-center mt-1">
            Don't have an account? Sign Up!
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
