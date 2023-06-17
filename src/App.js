import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
// import Assignment1 from "./components/Assignments/Chapter4Assignment1";
// import Form from "./components/Assignments/Chapter4Assignment2&3";
// import Close from "./components/Assignments/Chapter4Assignment7";
import PlayButton from "./components/PlayButton";
import Video from "./components/Video";
import videoDB from "./data/data";

function App() {
  const [videos, setVideos] = useState(videoDB);
  return (
    <div className="app">
      <div className="sectionTitle">
        <button
          onClick={() => {
            setVideos([
              ...videos,
              {
                id: videos.length + 1,
                title: "Cute Cats",
                channelName: "CatsFoundation",
                views: "2m",
                time: "4 months ago",
                verified: true,
              },
            ]);
          }}
        >
          Videos
        </button>
      </div>
      {videos.map((video) => (
        <Video
          key={video.id}
          id={video.id}
          title={video.title}
          channelName={video.channelName}
          views={video.views}
          time={video.time}
          verified={video.verified}
        >
          <PlayButton
            onPlay={() => console.log("Playing", video.title)}
            onPause={() => console.log("Paused", video.title)}
          >
            {video.title}
          </PlayButton>
        </Video>
      ))}
      {/* <Assignment1></Assignment1>
      <Form></Form> */}
      {/* chapter4 assignemnt 5 */}
      {/* <PlayButton message="Playing" onPress={(message) => console.log(message)}>
        Assignment 5
      </PlayButton> */}
      {/* <Close>Close Tab</Close> */}
      <Counter></Counter>
    </div>
  );
}

export default App;
