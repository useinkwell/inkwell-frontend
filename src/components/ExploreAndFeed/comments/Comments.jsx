import Image from "next/image";
import comment from "../../../../public/icons/comment.svg";
import close from "../../../../public/icons/close.svg";
import profileImg from "../../../../public/images/profile-img.jpg";
import like from "../../../../public/icons/like.svg";

function CommentComponent() {
  return (
    <div className="p-5">
      {/* profile */}
      <div>
        <div className="flex gap-2 items-center">
          <div className="relative h-10 w-10">
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
      </div>
      {/* text */}
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis
        molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
        fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
        elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
        lectus.
      </div>
      {/* likes and replies */}
      <div className="flex items-center gap-7 justify-end pr-5">
        <div className="flex flex-col">
          <div className="relative h-4 w-4">
            <Image src={like} alt="heart icon" fill />
          </div>
          <p>20</p>
        </div>

        <div className="flex flex-col items-center mb-1">
          <p>Replies</p>
          <p>20</p>
        </div>
      </div>
      <div className="h-[2px] bg-[#E0E0E0] w-full mx-auto"></div>
    </div>
  );
}


function Comments() {
  return (
    <div className="absolute z-30 top-0 left-0 right-0 bg-white hidden">
      <div className="pt-8 flex justify-center items-center">
        <div className="flex gap-2 justify-center">
          <div className="relative h-7 w-7">
            <Image src={comment} fill alt="comment icon" />
          </div>
          <h2 className="font-bold">Comments</h2>
        </div>
        <div className="relative h-10 w-10 left-28 items-center">
          <Image src={close} alt="x icon" fill />
        </div>
      </div>
      {/* comments container */}
      <div>
        {/* comment */}
        <CommentComponent/>
        <CommentComponent/>
        <CommentComponent/>
        <CommentComponent/>
        <CommentComponent/>
        <CommentComponent/>
        <CommentComponent/>
      </div>
    </div>
  );
}

export default Comments;
