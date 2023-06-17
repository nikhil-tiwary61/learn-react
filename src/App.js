import "./App.css";
import Counter from "./components/Counter";
// import Assignment1 from "./components/Assignments/Chapter4Assignment1";
// import Form from "./components/Assignments/Chapter4Assignment2&3";
// import Close from "./components/Assignments/Chapter4Assignment7";
import PlayButton from "./components/PlayButton";
import Video from "./components/Video";
import videos from "./data/data";

function App() {
  return (
    <div className="app">
      <div className="sectionTitle">Videos</div>
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
