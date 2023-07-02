import PlayButton from "./PlayButton";
import Video from "./Video";
import useVideos from "../hooks/Videos";

export default function VideoList({ editVideo }) {
  const videos = useVideos();
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
