import Image from "next/image";
import inkwellLogo from "/public/images/inkwell.svg";
import signupImage from "/public/images/signup-image2.png";
import styles from "./signup.module.css";
import { useState } from "react";

// custom input form
const CustomInput = ({ name, inputType }) => {
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
      {inputType === "password" ? (
        <div className={` ${isInputActive ? styles.active : styles.notActive}`}>
          <input
            placeholder={name}
            name="password"
            type="password"
            className={` w-full px-4 py-2 border border-[#9F9999] outline-none rounded-xl box-border text-gray-700 
            border-solid ${styles.borderGradientOrangePink} focus:border-none`}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            // className="w-full focus:outline-none p-2 rounded-xl  border-2 border-inkBlue text-inkBlue"
          />
        </div>
      ) : inputType === "select" ? (
        <div className={` ${isInputActive ? styles.active : styles.notActive}`}>
          <select
            placeholder={name}
            name="field"
            type="select"
            className={` w-full px-4 py-2 border border-[#9F9999] outline-none rounded-xl box-border text-gray-700 
            border-solid ${styles.borderGradientOrangePink} focus:border-none`}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            // className="w-full focus:outline-none p-2 rounded-xl  border-2 border-inkBlue text-inkBlue"
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
            inputType="text"
            className={` w-full px-4 py-2 border border-[#9F9999] outline-none rounded-xl box-border text-gray-700 
            border-solid ${styles.borderGradientOrangePink} focus:border-none`}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            // className="w-full focus:outline-none p-2 rounded-xl  border-2 border-inkBlue text-inkBlue"
          />
        </div>
      )}
    </div>

    // <div className={` ${isInputActive ? styles.active : styles.notActive}`}>
    //   <input
    //     placeholder={name}
    //     name="name"
    //     inputType="text"
    //     className={` w-full px-4 py-2 border border-[#9F9999] outline-none rounded-xl box-border text-gray-700
    //         border-solid ${styles.borderGradientOrangePink} focus:border-none`}
    //     onFocus={handleInputFocus}
    //     onBlur={handleInputBlur}
    //     // className="w-full focus:outline-none p-2 rounded-xl  border-2 border-inkBlue text-inkBlue"
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
        <i className="fa-solid fa-arrow-left text-3xl ml-4"></i>
      </div>
      <div>
        <h2 className="text-center text-xl w-5/6 mx-auto font-normal">
          Sign up and join the <br />
          community!
        </h2>
        <Image src={signupImage} className="mx-auto" width={159} height={117} />
        {/* Form */}
        <form className="w-[85%] mx-auto flex flex-col gap-4">
          <CustomInput name="First Name" />
          <CustomInput name="Last Name" />
          <CustomInput name="User Name" />
          <CustomInput name="Password" inputType="password" />
          <CustomInput name="Confirm Password" inputType="password" />
          <CustomInput name="Select Field" inputType="select" />
        </form>
      </div>
    </div>
  );
}

export default CreateAccount;
