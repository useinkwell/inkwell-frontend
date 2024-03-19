import Link from "next/link";
// import Image from "next/image";
// import ExploreNav from "./ExploreNav";
import Nav from "../../navigations/Nav";
import Topics from "./Topics";
import Footer from "@/components/Footer";

function Explore() {
  return (
    <div>
      <Nav />
      <div >
        <Topics niche="#copywritng" title="Future of Tech"/>
        <Topics niche="#poetry" title="Drifting"/>
        <Topics niche="#contentwriting" title="12 Content Writing Ideas"/>
      </div>
      <Footer/>
    </div>
  );
}

export default Explore;
