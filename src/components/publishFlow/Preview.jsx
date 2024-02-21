import Image from "next/image";
import bookmark from "../../../public/icons/bookmark.svg";
import profileImg from "../../../public/images/profile-img.jpg";
import blogImage from "../../../public/images/blog-cover-image.png";
// import Button from "../buttons/Button";
import Footer from "../Footer";
import arrowLeft from "../../../public/icons/arrow-left.svg";
import imageBlog from "../../../public/images/blog-cover-image.png";
// import Link from "next/link";
function PopUp() {
  return (
    <div className="hidden">
      <div className="fixed top-0 bottom-0 left-0 right-0 bg-black opacity-20 z-10"></div>
    <div
      className="fixed z-10 top-0 bottom-0 left-0 right-0 bg-white min-[834px]:fixed min-[834px]:w-10/12 
      min-[834px]:mx-auto min-[834px]:mb-10 max-w-[769px]"
    >
      <h3 className="text-2xl font-bold hidden">Publish?</h3>
      <div className="absolute right-0 mt-5 mr-5">
        <svg
          width="40"
          height="40"
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_451_4846)">
            <path
              d="M39.8996 16.1001L16.0996 39.9001M16.0996 16.1001L39.8996 39.9001"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              />
          </g>
          <defs>
            <clipPath id="clip0_451_4846">
              <rect width="56" height="56" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>

      <div className="min-[834px]:flex min-[834px]:flex-row min-[834px]:h-full min-[834px]:items-center 
      min-[834px]:justify-center min-[834px]:gap-10 min-[834px]:mb-40">
        {/* <div className="flex flex-col items-center gap-10 mb-10"> */}
        {/* card */}
        <div className="bg-white shadow-xl w-1/2 max-w-[360px] mx-auto min-[834px]:mx-0 mt-20 pb-3 box-blur ">
          <div className="relative w-full h-48">
            <Image src={imageBlog} fill alt="preview Image" />
          </div>
          <div className="px-1 pt-2 lucida">
            <h2 className="mb-1">12 Content Writing Ideas</h2>
            <p>add caption</p>
          </div>
          {/* </div> */}
        </div>

        <div className="flex gap-2 min-[834px]:hidden mx-auto my-7 justify-center">
          <input type="checkbox" name="addToPortfolio" />
          <p className="text-lg">Add to portfolio</p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col w-1/2 min-[834px]:w-[50%] max-w-[360px] min-[834px]:max-w-[200px] 
        mx-auto min-[834px]:mx-0 items-start gap-4 min-[834px]:mt-44 min-[834px]:gap-5">
          <div className="mr-40 gap-2 hidden min-[834px]:flex w-full">
            <input type="checkbox" name="addToPortfolio" />
            <p className="text-lg min-[834px]:text-base">Add to portfolio</p>
          </div>
          <div className="custom-gradient-background p-[0.1rem] rounded w-full">
            <button className="pt-sans-regular w-full py-2 border rounded bg-white relative z-40 h-full">
              <p className="gradient-text text-lg min-[834px]:text-base font-bold">
                Save to Drafts
              </p>
            </button>
          </div>

          <button
            className="pt-sans-regular border-secondary font-bold text-white border-gradient-custom w-full py-2 
            custom-gradient-background rounded text-lg"
            >
            Confirm
          </button>
        </div>

      </div>
    </div>
  </div>  
  );
}

function Preview() {
  return (
    <div className="pt-sans-regular">
      <div className="bg-[#D4D4D4] ">
        <div
          className="lg:w-[80%] mx-auto px-10 py-5 
          flex justify-between items-center max-w-[1500px]"
        >
          <Image src={arrowLeft} alt="left icon" className="h-10 w-10" />

          <div className="flex flex-col gap-3 items-center lg:flex-col">
            <button className="custom-gradient-background w-40  px-10 text-white font-semibold rounded">
              Publish
            </button>
            <button className="bg-white w-40 box-blur flex items-center font-semibold  rounded">
              <p className="gradient-text mx-auto">Continue Editing</p>
            </button>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="min-[834px]:px-10 max-w-[1084px] mx-auto">
          {/* Header -title cover image caption,.......*/}
          <div>
            {/* profile Photo, follow button, bookmark button */}
            <div className="flex justify-between items-center mx-auto pt-20 pb-10 px-10">
              <div className="flex items-center gap-10">
                <div className="flex gap-2 items-center">
                  <div className="relative h-14 w-14">
                    <Image
                      src={profileImg}
                      alt="profile photo"
                      fill
                      className="rounded-full object-cover"
                      />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold">Username </h3>
                    <p className="text-[10px]">Copywriter</p>
                  </div>
                </div>
                <p>Follow</p>
              </div>
              <div className="relative h-4 w-6 right-0">
                <Image src={bookmark} alt="bookmark icon" fill />
              </div>
            </div>
            {/* ------------ */}
            <div>
              <div className="w-full h-auto mx-auto">
                <Image
                  src={blogImage}
                  alt="a hand wrinting content on paper"
                  width={300}
                  height={300}
                  className="w-full h-auto"
                />
              </div>
            </div>
            {/* Title and caption */}
            <div className="lucida flex flex-col gap-2 mt-4 px-10 min-[834px]:px-0 lg:px-5">
              <h1 className="text-2xl leading-4 font-semibold">
                12 Content Writing Ideas
              </h1>
              <p className="text-base font-normal leading-4">Add caption</p>
            </div>
          </div>
          {/* Content, like and comment button*/}
          <div className="min-[834px]:flex">
            <div className="lucida flex flex-col gap-2 mt-10 pb-5 p px-10 min-[834px]:px-0 lg:px-5">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus. Maecenas eget condimentum velit,
                sit amet feugiat lectus. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos. Praesent
                auctor purus luctus enim egestas, ac scelerisque ante pulvinar.
                Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor
                urna. Curabitur vel bibendum lorem. Morbi convallis convallis
                diam sit amet lacinia. Aliquam in elementum tellus.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus. Maecenas eget condimentum velit,
                sit amet feugiat lectus. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos. Praesent
                auctor purus luctus enim egestas, ac scelerisque ante pulvinar.
                Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor
                urna. Curabitur vel bibendum lorem. Morbi convallis convallis
                diam sit amet lacinia. Aliquam in elementum tellus.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus. Maecenas eget condimentum velit,
                sit amet feugiat lectus. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos. Praesent
                auctor purus luctus enim egestas, ac scelerisque ante pulvinar.
                Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor
                urna. Curabitur vel bibendum lorem. Morbi convallis convallis
                diam sit amet lacinia. Aliquam in elementum tellus.
              </p>
            </div>
            {/* Like and comment button */}
            {/* <div
              className="flex items-center gap justify-center gap-5 p-10 min-[834px]:flex-col min-[834px]:px-2 min-[834px]:gap-8 
          min-[834px]:pt-20  min-[834px]:justify-start"
            >
              <Button.Like />
              <Button.Comment />
            </div> */}
          </div>
        </div>
        {/* <Comments /> */}
        {/* Footer */}
        <Footer />
      </div>{" "}
      <PopUp />
    </div>
  );
}

export default Preview;
