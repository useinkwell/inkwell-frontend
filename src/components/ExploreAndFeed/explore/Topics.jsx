import TopicCards from "./TopicCards";

function Topics() {
  return (
    <div className="py-20 px-11">
      {/* Topic name */}
      <h1 className="text-4xl">#copywritng</h1>
      {/* cards */}
      <div className="pt-5">
        <TopicCards />
      </div>
    </div>
  );
}

export default Topics;
