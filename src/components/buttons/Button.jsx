import Image from "next/image";
import like from "../../../public/icons/like.svg";
import comment from "../../../public/icons/comment.svg";

function Like() {
  return (
    <div className="h-16 w-16 justify-center shadow-xl rounded-full flex flex-col items-center button-effect cursor-pointer">
      <Image src={like} width={20} height={20} alt="like button" />
      <p>200</p>
    </div>
  );
}

function Comment() {
  return (
    <div className="h-16 w-16 justify-center shadow-xl rounded-full flex flex-col items-center button-effect cursor-pointer">
      <Image src={comment} width={20} height={20} alt="like button" />
      <p>20</p>
    </div>
  );
}
function Submit({text}) {
  return (
    <button className="w-[85%] sm:w-[25.65rem] flex items-center justify-center mt-1 font-bold text-white text-xl mx-auto px-3 py-2 rounded-lg bg-gradient-to-t from-secondary to-primary">
      {text || "Submit"}
    </button>
  );
}

export default { Like, Comment, Submit };
