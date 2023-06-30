import { useContext } from "react";
import PlayButton from "./PlayButton";
import Video from "./Video";
import VideosContext from "../context/VideosContext";

export default function VideoList({ editVideo }) {
  const videos = useContext(VideosContext);
  return (
    <>
      {videos.map((video) => (
        <Video
          key={video.id}
          id={video.id}
          title={video.title}
          channelName={video.channelName}
          views={video.views}
          time={video.time}
          verified={video.verified}
          editVideo={editVideo}
        >
          <PlayButton
            onPlay={() => console.log("Playing", video.title)}
            onPause={() => console.log("Paused", video.title)}
          >
            {video.title}
          </PlayButton>
        </Video>
      ))}
    </>
  );
}
