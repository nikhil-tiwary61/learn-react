import "./App.css";
import Video from "./components/Video";

function App() {
  let videos = [
    {
      id: 1,
      title: "Cute Cats",
      channelName: "CatsFoundation",
      views: "2m",
      time: "4 months ago",
      verified: true,
    },
    {
      id: 2,
      title: "Adorable Kitty",
      channelName: "CatNation",
      views: "155k",
      time: "1 month ago",
    },
    {
      id: 3,
      title: "Cat food",
      channelName: "Cat-o-cat",
      views: "222m",
      time: "4 year ago",
      verified: true,
    },
    {
      id: 4,
    },
  ];

  return (
    <div className="app">
      <div className="sectionTitle">Videos</div>
      {videos.map((video) => (
        <Video
          title={video.title}
          channelName={video.channelName}
          views={video.views}
          time={video.time}
          verified={video.verified}
        ></Video>
      ))}
    </div>
  );
}

export default App;
