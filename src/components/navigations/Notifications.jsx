import Image from "next/image";
import bell from "../../../public/icons/bell-icon.svg";
import book from "../../../public/icons/book.svg";
import close from "../../../public/icons/close.svg";

function NotificationComponents() {
  return (
    <div className="flex gap-2 justify-center lg:justify-start items-center shadow-md p-5">
      {/* <div className="relative h-5 w-5"> */}
      <Image src={book} alt="notification icon" width={30} height={30} />
      {/* </div> */}
      <p>You have 3 new readers!</p>
    </div>
  );
}

function Notification() {
  return (
    <div className="lucida fixed overflow-auto z-10 top-0 bottom-0 left-0 right-0 bg-white pt-10 lg:w-6/12 lg:right-0 lg:left-2/4">
      <div className="flex items-center">
        <div className="flex gap-2 items-center mx-auto">
          <Image src={bell} alt="bell icon" width={30} height={30} />
          <p>Notifications</p>
        </div>
        <Image src={close} alt="x icon" width={40} height={40} className="mr-3"/>
      </div>
      {/* Notifications */}
      <div className="h-[2px] bg-[#E0E0E0] w-full mx-auto mt-10"></div>

      <div className="">
        {/* Notification */}
       <NotificationComponents/>
       <NotificationComponents/>
       <NotificationComponents/>
      </div>
    </div>
  );
}

export default Notification;
