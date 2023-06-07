import "./App.css";
import Video from "./components/Video";

function App() {
  let thumbnailData = {
    title: "Cute Cats",
    channelName: "CatsFoundation",
    views: "2m",
    time: "4 months ago",
  };

  return (
    <div className="app">
      <div className="sectionTitle">Videos</div>
      <Video
        title="Cute Cats"
        channelName="CatsFoundation"
        views="2m"
        time="4 months ago"
      ></Video>
      <Video
        title="Adorable Kitty"
        channelName="CatsFoundation"
        views="325K"
        time="3 days ago"
      ></Video>
      <Video></Video>
      <Video {...thumbnailData}></Video>
    </div>
  );
}

export default App;
