import Image from "next/image";
import inkwellLogo from "@/public/images/inkwell.svg";

function Signup() {
    return (
        <div>
            <div className="flex flex-col gap-5 justify-start gap-0 content-center">
                <Image
                    alt="inkwell logo"
                    src={inkwellLogo}
                    width={130}
                    height={130}
                    className=""
                />
                <i className="fa-solid fa-arrow-left text-3xl ml-4"></i>
            </div>
            <h2 className="text-center text-xl">Sign up and join the community!</h2>
        </div>
    );
}

export default Signup;