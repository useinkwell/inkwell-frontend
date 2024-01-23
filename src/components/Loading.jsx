import Image from "next/image";
import ellipse from "../../public/icons/ellipse.svg";
import close from "../../public/icons/close.svg";

function Loading() {
  return (
    <div className="h-screen w-full flex items-center justify-center px-4">
      <div className="p-10 shadow-xl overflow-hidden relative">
        {/* Loading effect here */}
        <div className="absolute h-10 w-10 top-0 right-0">
          <Image src={close} fill />
        </div>

        <p className="text-xl font-semibold">
          Don't let writer's block ink you in. Keep writing, the words will flow
          like a fountain.
        </p>
        <div className="absolute h-32 w-32 top-0">
          <Image src={ellipse} fill />
        </div>
        <div className="absolute h-32 w-32 top-10 right-0">
          <Image src={ellipse} fill />
        </div>
      </div>
    </div>
  );
}

export default Loading;
