import { useState } from "react";
import "./App.css";
// import Counter from "./components/Counter";
// import Assignment1 from "./components/Assignments/Chapter4Assignment1";
// import Form from "./components/Assignments/Chapter4Assignment2&3";
// import Close from "./components/Assignments/Chapter4Assignment7";
import videoDB from "./data/data";
import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";

function App() {
  const [videos, setVideos] = useState(videoDB);
  function addVideos(video) {
    setVideos([...videos, { ...video, id: videos.length + 1 }]);
  }
  function deleteVideo(id) {
    setVideos(videos.filter((video) => video.id !== id));
  }
  return (
    <div className="app">
      <AddVideo addVideos={addVideos}></AddVideo>
      <VideoList videos={videos} deleteVideo={deleteVideo}></VideoList>
    </div>
  );
}

export default App;
