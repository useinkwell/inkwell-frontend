import Link from "next/link";
import Image from "next/image";
// import ExploreNav from "./ExploreNav";
import Nav from "../Nav";
import Topics from "./Topics";

function Explore() {
  return (
    <div>
      <Nav />
      <div className="flex overflow-scroll scrollbar-hide p-5">
        <Topics />
        <Topics />
        <Topics />
        <Topics />
        <Topics />
        <Topics />
      </div>
      <div className="flex overflow-scroll scrollbar-hide p-5">
        <Topics />
        <Topics />
        <Topics />
        <Topics />
        <Topics />
        <Topics />
      </div>
      <div className="flex overflow-scroll scrollbar-hide p-5">
        <Topics />
        <Topics />
        <Topics />
        <Topics />
        <Topics />
        <Topics />
      </div>
    </div>
  );
}

export default Explore;
