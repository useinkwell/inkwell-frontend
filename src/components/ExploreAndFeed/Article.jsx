import Image from "next/image";
import Nav from "./Nav";
import bookmark from "../../../public/icons/bookmark.svg";
import profileImg from "../../../public/images/profile-img.jpg";
import blogImage from "../../../public/images/blog-cover-image.png";

function Article() {
  return (
    <div>
      <Nav />
      <div className="max-w-[1084px] mx-auto">
        {/* Header -title cover image caption,.......*/}
        <div>
          {/* profile Photo, follow button, bookmark button */}
          <div className="flex justify-between items-center max-w-[767px] mx-auto pt-20 pb-10 px-10">
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
            <div className="w-full h-auto sm:max-w-[767px] mx-auto">
              <Image
                src={blogImage}
                alt="a hand wrinting content on paper"
                width={300}
                height={300}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Article;
