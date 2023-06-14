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
      <PlayButton name="Play" message="play"></PlayButton>
      <PlayButton name="Pause" message="pause"></PlayButton>
    </div>
  );
}

export default App;
