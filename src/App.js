import { useReducer, useState } from "react";
import "./App.css";
import videoDB from "./data/data";
import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";
import Clock from "./components/Assignments/Clock";

function App() {
  const path = [];
  const [editableVideo, setEditableVideo] = useState(null);
  function videoReducer(videos, action) {
    switch (action.type) {
      case "ADD":
        return [...videos, { ...action.payload, id: videos.length + 1 }];
      case "DELETE":
        return videos.filter((video) => video.id !== action.payload);
      case "UPDATE":
        const index = videos.findIndex((v) => v.id === action.payload.id);
        const newVideo = [...videos];
        newVideo.splice(index, 1, action.payload);
        setEditableVideo(null);
        return newVideo;
      default:
        return videos;
    }
  }

  const [videos, dispatch] = useReducer(videoReducer, videoDB);
  function editVideo(id) {
    setEditableVideo(videos.find((video) => video.id === id));
  }
  return (
    <div
      className="app"
      onClick={() => {
        path.push("app");
        console.log(path.reverse().join(">"));
      }}
    >
      <AddVideo dispatch={dispatch} editableVideo={editableVideo} />
      <VideoList
        videos={videos}
        dispatch={dispatch}
        editVideo={editVideo}
        path={path}
      />
      <Clock />
    </div>
  );
}

export default App;
