import Image from "next/image";
import successImage from "../../../public/images/success-image.png";


function AccountSuccess() {
    return ( 
        <div>
            <div>
                <h3>
                You're signed up and ready to go!
                </h3>
                <Image src={successImage}
                className="w-[202px] h-[247px]"
                width={500}
                height={500}/>
            </div>
        </div>
     );
}

export default AccountSuccess;