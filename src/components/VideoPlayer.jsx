var VideoPlayer = ({videos}) => {
  console.log('videoPlayer: ', videos);
  // console.log('videoPlayer: ', props.video.id.videoId);

  // let videoId = props.video.id.videoId;
  // let source = "https://www.youtube.com/embed/" + videoId;

  return (
    <div className="video-player">
      <div className="embed-responsive embed-responsive-16by9">
        {/* <iframe className="embed-responsive-item" src={source} allowFullScreen></iframe> */}

        <iframe className="embed-responsive-item" src={"https://www.youtube.com/embed/" + videos[0].id.videoId} allowFullScreen></iframe>

      </div>
      <div className="video-player-details">
        <h3>{videos[0].snippet.title}</h3>
        <div>{videos[0].snippet.description}</div>
      </div>
    </div>
  );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoPlayer.propTypes = {
  video: PropTypes.object,
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoPlayer;
