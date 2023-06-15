import "./App.css";
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
        ></Video>
      ))}
      <div>
        <PlayButton message="play" onClick={() => console.log("playing")}>
          Play
        </PlayButton>
        <PlayButton message="pause" onClick={() => alert("Paused")}>
          Pause
        </PlayButton>
      </div>
    </div>
  );
}

export default App;
