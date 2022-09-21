import Search from './Search.js';
import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';
import searchYouTube from '../lib/searchYouTube.js';
import exampleVideoData from '../data/exampleVideoData.js';

const { useState, useEffect } = React;

const App = () => {

  const [selectedVideo, setSelectedVideo] = useState(exampleVideoData[0]);
  const [videosState, setVideos] = useState([]);
  const [entry, setEntry] = useState('');
  // console.log('videosState', videosState);

  const addSelection = (video) => {
    setSelectedVideo(video);
    // console.log('selectedVideo', selectedVideo);
  };

  const addVideo = (video) => {
    setVideos([...videosState]);
    // console.log('video', video);
  };

  let timeout = null;

  const searchHandler = (e) => {
    let query = e.target.value;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      searchYouTube(query, (videos => {
        setVideos(videos);
      }));
    }, 5000);
  };

  useEffect(
    () => {
      searchYouTube(entry || 'cats', (data) => { setVideos(data); });
    }, []
  );

  return (
    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <div><h5><Search searchHandler={(e) => searchHandler(e)} /></h5></div>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <div>
            <h5>
              <VideoPlayer video={selectedVideo} />
            </h5>
          </div>
        </div>
        <div className="col-md-5">
          <div>
            <h5>
              <VideoList videos={videosState} addVideo={addVideo} addSelection={addSelection} />
            </h5 >
          </div >
        </div >
      </div >
    </div >
  );
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
