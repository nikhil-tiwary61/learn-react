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
        >
          <PlayButton
            onPlay={() => console.log("Playing", video.title)}
            onPause={() => console.log("Paused", video.title)}
          >
            {video.title}
          </PlayButton>
        </Video>
      ))}
      <div>
        {/* <PlayButton
          message="play"
          onPlay={() => console.log("Playing")}
          onPause={() => console.log("Paused")}
        >
          Play
        </PlayButton> */}
        {/* <PlayButton message="pause" onClick={() => alert("Paused")}>
           Pause
         </PlayButton> */}
      </div>
    </div>
  );
}

export default App;
