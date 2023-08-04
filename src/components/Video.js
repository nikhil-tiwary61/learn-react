import { useContext, useEffect } from "react";
import "./Video.css";
import ThemeContext from "../context/ThemeContext";
import useVideoDispatch from "../hooks/VideoDispatch";

function Video({
  id,
  title = "No Title",
  channelName = "Private Channel",
  views = 0,
  time = "few seconds ago",
  verified = false,
  children,
  editVideo,
}) {
  const theme = useContext(ThemeContext);
  const dispatch = useVideoDispatch;

  //works on every render
  useEffect(() => {
    console.log("video playing", id);
  }, [id]);

  return (
    <>
      <div className={`container ${theme}`}>
        <button
          className="close-btn"
          onClick={() => dispatch({ type: "DELETE", payload: id })}
        >
          X
        </button>
        <button className="edit-btn" onClick={() => editVideo(id)}>
          Edit
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
