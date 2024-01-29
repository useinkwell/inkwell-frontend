import Image from "next/image";
import Nav from "../navigations/Nav";
import bookmark from "../../../public/icons/bookmark.svg";
import profileImg from "../../../public/images/profile-img.jpg";
import blogImage from "../../../public/images/blog-cover-image.png";
import Button from "../buttons/Button";
import Footer from "../Footer";
import Comments from "./comments/Comments";

function Article() {
  return (
    <div className="relative">
      <Nav />
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
          <div className="flex flex-col gap-2 mt-4 px-10 min-[834px]:px-0 lg:px-5">
            <h1 className="text-2xl leading-4 font-semibold">
              12 Content Writing Ideas
            </h1>
            <p className="text-base font-normal leading-4">Add caption</p>
          </div>
        </div>
        {/* Content, like and comment button*/}
        <div className="min-[834px]:flex">
          <div className="flex flex-col gap-2 mt-10 pb-5 p px-10 min-[834px]:px-0 lg:px-5">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra, per inceptos himenaeos. Praesent auctor purus
              luctus enim egestas, ac scelerisque ante pulvinar. Donec ut
              rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur
              vel bibendum lorem. Morbi convallis convallis diam sit amet
              lacinia. Aliquam in elementum tellus.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra, per inceptos himenaeos. Praesent auctor purus
              luctus enim egestas, ac scelerisque ante pulvinar. Donec ut
              rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur
              vel bibendum lorem. Morbi convallis convallis diam sit amet
              lacinia. Aliquam in elementum tellus.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra, per inceptos himenaeos. Praesent auctor purus
              luctus enim egestas, ac scelerisque ante pulvinar. Donec ut
              rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur
              vel bibendum lorem. Morbi convallis convallis diam sit amet
              lacinia. Aliquam in elementum tellus.
            </p>
          </div>
          {/* Like and comment button */}
          <div className="flex items-center gap justify-center gap-5 p-10 min-[834px]:flex-col min-[834px]:px-2 min-[834px]:gap-8 
          min-[834px]:pt-20  min-[834px]:justify-start">
            <Button.Like/>
            <Button.Comment/>
          </div>
        </div>
      </div>
      <Comments/>
        {/* Footer */}
      <Footer/>  
    </div>
  );
}

export default Article;
