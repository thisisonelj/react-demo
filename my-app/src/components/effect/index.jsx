/**
 * 练习使用effect
 */
import { useState, useRef, useEffect } from "react";
import { Button } from "antd";
import "./index.scss";

const VideoPlayer = ({ src, playing }) => {
  const videoPlayerRef = useRef(null);
  useEffect(() => {
    if (playing) {
      videoPlayerRef.current.play();
    } else {
      videoPlayerRef.current.pause();
    }
  }, [playing]);
  return (
    <video
      ref={videoPlayerRef}
      src={src}
      loop
      playsInline
      className="video-object"
    />
  );
};

export default function PlayerEffect() {
  const [playing, setPlaying] = useState(false);
  const startPlayer = () => {
    setPlaying(!playing);
  };
  return (
    <>
      <div className="video-player-container">
        <Button onClick={startPlayer} className="btn-object">
          {playing ? "暂停" : "播放"}
        </Button>
        <VideoPlayer
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          playing={playing}
        ></VideoPlayer>
      </div>
    </>
  );
}
