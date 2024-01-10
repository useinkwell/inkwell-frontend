import Link from "next/link";
import Image from "next/image";
function DashBoard() {
  return (
    <div className="mx-auto shadow-lg px-[5%] rounded-b-3xl">
      {/* Navigation */}
      {/* top navigation */}
      <div>
        <Link href="/">
          <Image
            src="/images/inkwell.png"
            width={300}
            height={300}
            alt="nav bars"
            className="w-[120px]"
          />
        </Link>
        <div className="relative">
            <Image/>
        </div>
        <div></div>
      </div>
      {/* bottom */}
      <div>Second Nav</div>
    </div>
  );
}

export default DashBoard;
