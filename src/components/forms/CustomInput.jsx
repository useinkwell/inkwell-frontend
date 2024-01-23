import { useState } from "react";
import styles from "../signup/signup.module.css";

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
        <div className={` ${isInputActive ? styles.active : styles.notActive}`}>
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

export default CustomInput;
