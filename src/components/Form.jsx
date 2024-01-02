import { useState } from "react";
import axios from "axios";

export default function Form() {
  // const apiKey = 'PMIb9gs716ERZ9tmRjTEtjdAhzsyBIPO3J0';
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const url = process.env.NEXT_PUBLIC_URL;

  // console.log(process.env.KEY);

  const clearMessage = () => {
    setIsSuccess("");
  };
  const clearErrorMessage = () => {
    setErrorMessage("");
    setIsError(false);
  };
  const clearForm = () => {
    setData({
      name: "",
      email: "",
    });
  };

  const [isSuccess, setIsSuccess] = useState();
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setData] = useState({
    name: "",
    email: "",
  });

  const handleInputChange = (event) => {
    setData({ ...formData, [event.target.name]: event.target.value });
    // console.log(formData);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const form = new FormData();
      form.append("name", formData.name);
      form.append("email", formData.email);

      const headers = {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "multipart/form-data",
      };
      const response = await axios.post(
        url,
        form,
        { headers }
      );

      // console.log(response.status);
      if (response.status == 200) {
        setIsSuccess("You're added to the waitlist");
      }

      setTimeout(clearMessage, 7000);
      setTimeout(clearForm, 7000);
      setTimeout(clearMessage, 7000);
    } catch (error) {
      // console.error("An error occured: ", error);
      setIsError(true);
      setErrorMessage("an error occured try again");
      setTimeout(clearForm, 7000);
      setTimeout(clearErrorMessage, 7000);
    }
  };

  return (
    <div>
      {/*   Success message  */}
      {isSuccess ? (
        <div className="flex items-center  p-3 gap-5 text-inkBlue bg-white text-center text-2xl rounded">
          <p className="">{isSuccess}</p>{" "}
          <i className="fa-solid fa-circle-check mt-[.233rem]"></i>
        </div>
      ) : (
        <div className="hidden"></div>
      )}
      {/* Error Message */}
      {isError ? (
        <div className="flex items-center p-3 gap-5 text-inkBlue bg-white text-center text-2xl rounded">
          <p className="text-red-400">{errorMessage}</p>{" "}
          {/* <i className="fa-solid fa-circle-xmark"></i> */}
        </div>
      ) : (
        <div className="hidden"></div>
      )}

      <form
        className={`flex flex-col gap-5 ${
          isSuccess || isError ? "hidden" : ""
        }`}
        onSubmit={handleSubmit}
      >
        <input
          placeholder="John Doe"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleInputChange}
          className="focus:outline-none p-2 rounded border-b-4 border-inkBlue text-inkBlue"
        />

        <input
          placeholder="johndoe@gmail.com"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          className="focus:outline-none p-2 rounded border-b-4 border-inkBlue text-inkBlue"
        />
        <button
          className="bg-white rounded px-[4rem] py-[0.5rem] text-2xl font-bold"
          type="submit"
        >
          <span className="gradient-text">Join the wait-list</span>
        </button>
      </form>
      {/* Email succes message */}

      {/* Email failed message */}
    </div>
  );
}
