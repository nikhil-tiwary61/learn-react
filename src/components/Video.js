import "./Video.css";

function Video({
  id,
  title = "No Title",
  channelName = "Private Channel",
  views = 0,
  time = "few seconds ago",
  verified = false,
  children,
  deleteVideo,
}) {
  return (
    <>
      <div className="container">
        <button className="close-btn" onClick={() => deleteVideo(id)}>
          X
        </button>
        <div className="picture">
          <img
            src={`https://picsum.photos/id/${id}/160/90`}
            alt="LoremFlickr"
          />
        </div>
        <div className="title">{title}</div>
        <div className="channelName">
          {channelName} {verified && "✅"}
        </div>
        <div>
          {views} views <span>.</span> {time}
        </div>
        <div>{children}</div>
      </div>
    </>
  );
}

export default Video;
