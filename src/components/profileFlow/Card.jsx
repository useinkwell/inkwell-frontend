import Image from "next/image";
import image from "../../../public/images/blog-cover-image.png";


function Card() {
  return (
    <div className="bg-white min-w-[288px] max-w-[400px] shadow-lg box-blur">
      <div className="relative w-full">
        <Image 
        src={image}
        alt="Article Image"
        className="h-auto"/>
      </div>
      <div className="px-3 py-3">
        <h2>12 Content Writing Ideas</h2>
        <p>Add caption</p>
      </div>
    </div>
  );
}

export default Card;
