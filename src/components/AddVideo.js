import { useState } from "react";
import "./AddVideo.css";

export default function AddVideo({ addVideos }) {
  const [video, setVideo] = useState({
    channelName: "CatsFoundation",
    time: "4 months ago",
    verified: true,
  });
  function handleChange(e) {
    setVideo({ ...video, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    addVideos(video);
  }
  return (
    <form>
      <input
        type="text"
        onChange={handleChange}
        name="title"
        placeholder="Title"
      />
      <input
        type="text"
        onChange={handleChange}
        name="views"
        placeholder="Views"
      />
      <button onClick={handleSubmit}>Add Videos</button>
    </form>
  );
}
