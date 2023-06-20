import { useEffect, useState } from "react";
import "./AddVideo.css";

export default function AddVideo({ addVideos, editableVideo, updateVideo }) {
  const emptyState = {
    channelName: "CatsFoundation",
    time: "4 months ago",
    verified: true,
    title: "",
    views: "",
  };
  const [video, setVideo] = useState(emptyState);
  function handleChange(e) {
    setVideo({ ...video, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (editableVideo) {
      updateVideo(video);
    } else {
      addVideos(video);
    }
    setVideo(emptyState);
  }

  useEffect(() => {
    if (editableVideo) {
      setVideo(editableVideo);
    }
  }, [editableVideo]);

  return (
    <form>
      <input
        type="text"
        onChange={handleChange}
        name="title"
        placeholder="Title"
        value={video.title}
      />
      <input
        type="text"
        onChange={handleChange}
        name="views"
        placeholder="Views"
        value={video.views}
      />
      <button onClick={handleSubmit}>
        {editableVideo ? "Edit" : "Add"} Video
      </button>
    </form>
  );
}
