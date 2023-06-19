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
  return (
    <div className="app">
      <AddVideo addVideos={addVideos}></AddVideo>
      <VideoList videos={videos}></VideoList>
      {/* <Assignment1></Assignment1>
      <Form></Form> */}
      {/* chapter4 assignemnt 5 */}
      {/* <PlayButton message="Playing" onPress={(message) => console.log(message)}>
        Assignment 5
      </PlayButton> */}
      {/* <Close>Close Tab</Close> */}
      {/* <Counter></Counter> */}
    </div>
  );
}

export default App;
