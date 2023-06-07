import "./Video.css";

function Video({
  title = "No Title",
  channelName = "Private Channel",
  views = 0,
  time = "few seconds ago",
}) {
  return (
    <>
      <div className="container">
        <div className="picture">
          <img src="https://loremflickr.com/160/90" alt="LoremFlickr" />
        </div>
        <div className="title">{title}</div>
        <div className="channelName">{channelName}</div>
        <div>
          {views} views <span>.</span> {time}
        </div>
      </div>
    </>
  );
}

export default Video;
