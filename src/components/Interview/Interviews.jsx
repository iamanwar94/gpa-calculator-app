import React from "react";
import YouTube from "react-youtube";

const Interviews = () => {
  const onReady = (e) => {
    console.log(e.target);
    e.target.playvideoAt(0);
  };
  const opts = {
    height: "540px",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      control: 0,
    },
  };
  return (
    <div>
      {/* <YouTube
        videoId="M7lc1UVf-VE"
        opts={opts}
        control="0"
        onReady={(e) => onReady(e)}
      /> */}
      <iframe
        src="https://www.youtube.com/embed/E7wJTI-1dvQ"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
        title="video"
        style={{ height: "540px", width: "100%" }}
      />
    </div>
  );
};

export default Interviews;
