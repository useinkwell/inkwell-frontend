import TopicCards from "../TopicCards";

function Topics({niche, title, caption}) {
  return (
    <div className="py-10 px-5">
      {/* Topic name */}
      <h1 className="text-4xl lucida">{niche}</h1>
      {/* cards */}
      <div className="lucida flex gap-3 overflow-scroll scrollbar-hide p-5 w-full">
        <TopicCards title={title} caption={caption}/>
        <TopicCards title={title} caption={caption}/>
        <TopicCards title={title} caption={caption}/>
        <TopicCards title={title} caption={caption}/>
        <TopicCards title={title} caption={caption}/>
        <TopicCards title={title} caption={caption}/>
        <TopicCards title={title} caption={caption}/>
      </div>
    </div>
  );
}

export default Topics;
