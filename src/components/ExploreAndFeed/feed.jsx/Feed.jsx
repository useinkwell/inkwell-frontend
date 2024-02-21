import Footer from "@/components/Footer";
import Nav from "../../navigations/Nav";
import TopicCards from "../TopicCards";

function Feed() {
  return (
    <div  className="lucida">
      <Nav />
      {/*  */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-6
      px-5 md:px-20 pt-10 max-w-[1288px] mx-auto"
      >
        <TopicCards title="Drifting" caption="add caption" />
        <TopicCards title="12 Content Writing Ideas" caption="add caption" />
        <TopicCards title="Future of Tech" caption="add caption" />

        <TopicCards title="Drifting" caption="add caption" />
        <TopicCards title="12 Content Writing Ideas" caption="add caption" />
        <TopicCards title="Future of Tech" caption="add caption" />

        <TopicCards title="Drifting" caption="add caption" />
        <TopicCards title="12 Content Writing Ideas" caption="add caption" />
        <TopicCards title="Future of Tech" caption="add caption" />
      </div>
      <Footer/>
    </div>
  );
}

export default Feed;
