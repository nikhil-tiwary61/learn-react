import "./Video.css";

function Video({
  title = "No Title",
  channelName = "Private Channel",
  views = 0,
  time = "few seconds ago",
  verified = false,
}) {
  // let verified = true;
  let channelJSX;
  if (verified) {
    channelJSX = <div className="channelName">{channelName} ✅</div>;
  } else {
    channelJSX = <div className="channelName">{channelName} </div>;
  }

  return (
    <>
      <div className="container">
        <div className="picture">
          <img src="https://loremflickr.com/160/90" alt="LoremFlickr" />
        </div>
        <div className="title">{title}</div>
        {channelJSX}
        <div>
          {views} views <span>.</span> {time}
        </div>
      </div>
    </>
  );
}

export default Video;
