import Image from "next/image";
import futureTech from "../../../../public/images/future-image.png";
import bookmark from "../../../../public/icons/bookmark.svg";
import profileImg from "../../../../public/images/profile-img.jpg";

function TopicCards() {
  return (
    <div className="flex flex-col w-72">
      {/* title and Caption */}
      <div className="pb-2 px-4">
        <h3 className="font-semibold text-sm">Future of Tech</h3>
        <p className="font-normal text-xs">Add caption</p>
      </div>
      {/* image */}
      <div className="">
        <Image src={futureTech} alt="future technology in use" className="h-auto"/>
      </div>
      {/* user information -image name title, follow bookmark */}
      <div className="py-5 px-4 flex items-center justify-between">
        <div className="flex gap-2 items-center">
          <div className="relative h-10 w-10">
            <Image src={profileImg} alt="some image desscription" fill className="rounded-full object-cover"/>
          </div>
          <div>
          <h3 className="text-sm font-semibold">Username </h3>
          <p className="text-[10px]">Copywriter</p>
          </div>
        </div>

        <p className="text-[12px]">Follow</p>
        <div className="relative h-4 w-6">
          <Image alt="bookmark Icon" fill src={bookmark}/>
        </div>
      </div>
    </div>
  );
}

export default TopicCards;
