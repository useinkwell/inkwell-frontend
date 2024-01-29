import Image from "next/image";
import close from "../../../public/icons/close.svg";

function Search() {
  return (
    <div className="fixed z-30 top-0 bottom-0 left-0 right-0 bg-white h-screen flex flex-col xl:w-[50%]">
      <div>
        <div className="h-10 w-10 absolute left-5 top-10 z-20">
          <Image src={close} fill alt="icon" />
        </div>

        <div className="mt-28">
          {/* filters */}
          <div className="flex items-center pr-6">
            <div className="flex-grow text-center font-semibold xl:text-left xl:px-4">
              <div>Search by Title...</div>
              <div className="h-1 bg-[#E0E0E0] w-32 mx-auto mt-3 xl:w-full "></div>
            </div>
            <div className="flex-grow flex items-center gap-3">
              <div>Title</div>
              <i className="fa-solid fa-chevron-up pt-1"></i>
            </div>
            <div className="custom-button-styles font-medium">Search</div>
          </div>
          {/* Results */}
          <div className="flex flex-col gap-5 mt-8">
            <div className="h-[2px] bg-[#E0E0E0] w-full mx-auto"></div>
            <div className="px-4 py-1 shadow-lg flex flex-col gap-4 min-[834px]:flex-row min-[834px]:justify-between min-[834px]:py-3">
              <div className="min-[834px]:flex items-center gap-6">
                <h2 className="font-semibold text-base min-[834px]:text-xl">Future of Tech</h2>
                <p className="text-xs text-[#9E9E9E] min-[834px]:text-base">by Username</p>
              </div>
              <h2 className="font-medium">Content Writing</h2>
            </div>

            <div className="h-[2px] bg-[#E0E0E0] w-full mx-auto"></div>
            <div className="px-4 py-1 shadow-lg flex flex-col gap-4 min-[834px]:flex-row min-[834px]:justify-between min-[834px]:py-3">
              <div className="min-[834px]:flex items-center gap-6">
                <h2 className="font-semibold text-base min-[834px]:text-xl">
                  12 Content Writing Ideas
                </h2>
                <p className="text-xs text-[#9E9E9E] min-[834px]:text-base">by Username</p>
              </div>
              <h2 className="font-medium">Content Writing</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
