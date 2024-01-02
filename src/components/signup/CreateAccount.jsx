import Image from "next/image";
import inkwellLogo from "/public/images/inkwell.svg";
import signupImage from "/public/images/signup-image3.png";
import styles from "./signup.module.css";
import { useState } from "react";

// custom input form
const CustomInput = ({ name, inputtype }) => {
  const [isInputActive, setIsInputActive] = useState(false);

  const handleInputFocus = () => {
    setIsInputActive(true);
  };

  const handleInputBlur = () => {
    setIsInputActive(false);
  };
  // if the input is in focus add the style to div if not remove it

  return (
    <div>
      {inputtype === "password" ? (
        <div
          className={` ${
            isInputActive ? styles.active : styles.notActive
          }`}
        >
          <input
            placeholder={name}
            name="password"
            type="password"
            className={`w-full px-4 py-2  border border-[#9F9999] outline-none rounded-xl box-border text-gray-700 
            border-solid ${styles.borderGradientOrangePink} focus:border-none`}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            // className="w-full focus:outline-none p-2 rounded-xl  border-2 border-primary text-primary"
          />
        </div>
      ) : inputtype === "select" ? (
        <div className={` ${isInputActive ? styles.active : styles.notActive}`}>
          <select
            placeholder={name}
            name="field"
            type="select"
            className={`w-full px-4 py-2 border border-[#9F9999] outline-none rounded-xl box-border text-gray-700 
            border-solid ${styles.borderGradientOrangePink} focus:border-none`}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            // className="w-full focus:outline-none p-2 rounded-xl  border-2 border-primary text-primary"
          >
            <option>blog</option>
            <option>blog</option>
            <option>linkelas blog</option>
          </select>
        </div>
      ) : (
        <div className={` ${isInputActive ? styles.active : styles.notActive}`}>
          <input
            placeholder={name}
            name="name"
            inputtype="text"
            className={`w-full px-4 py-2 border border-[#9F9999] outline-none rounded-xl box-border text-gray-700 
            border-solid ${styles.borderGradientOrangePink} focus:border-none`}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            // className="w-full focus:outline-none p-2 rounded-xl  border-2 border-primary text-primary"
          />
        </div>
      )}
    </div>

    // <div className={` ${isInputActive ? styles.active : styles.notActive}`}>
    //   <input
    //     placeholder={name}
    //     name="name"
    //     inputtype="text"
    //     className={` w-full px-4 py-2 border border-[#9F9999] outline-none rounded-xl box-border text-gray-700
    //         border-solid ${styles.borderGradientOrangePink} focus:border-none`}
    //     onFocus={handleInputFocus}
    //     onBlur={handleInputBlur}
    //     // className="w-full focus:outline-none p-2 rounded-xl  border-2 border-primary text-primary"
    //   />
    // </div>
  );
};

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
        <i className="fa-solid fa-arrow-left text-3xl md:text-4xl ml-4"></i>
      </div>
      <div>
        <h2 className="text-center text-2xl w-5/6 mx-auto font-normal md:text-[32px] xl:text-[38px]">
          Sign up and join the <br className="sm:hidden" />
          community!
        </h2>
        <div className="2xl:flex 2xl:items-center ml-auto 2xl:flex-row-reverse 2xl:w-[70%] mt-5">
          <Image
            src={signupImage}
            className="mx-auto w-[200px] h-[200px] 2xl:w-[411px] 2xl:h-[373px] mb-12"
            width={500}
            height={500}
          />
          {/* Form */}
          <form className="w-[85%] sm:w-[28.65rem] mx-auto flex flex-col gap-4 justify-center text-2xl lg:text-3xl 2xl:text-2xl 2xl:mt-5">
            <CustomInput name="First Name" />
            <CustomInput name="LastName" />
            <CustomInput name="UserName" />
            <CustomInput name="Password" inputtype="password" />
            <CustomInput name="Confirm Password" inputtype="password" />
            <CustomInput name="Select Field" inputtype="select" />
            <button className="w-[85%] sm:w-[25.65rem] flex items-center justify-center mt-1 font-bold text-white text-xl mx-auto px-3 py-2 rounded-lg bg-gradient-to-t from-secondary to-primary">
              Submit
            </button>
          <p className="underline text-xl text-center mt-1">Have an account? Log In</p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;
