import VideoList from "./VideoList.js";
import VideoPlayer from './VideoPlayer.js';
import Search from "./Search.js";
import exampleVideoData from '../data/exampleVideoData.js';
import searchYoutube from '../lib/searchYoutube.js';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: exampleVideoData,
      displayedVideo: exampleVideoData[0]
    };
  }
  onVideoClick (video) {
    this.setState({
      displayedVideo : video
    });
  }
  render () {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> <Search/> </h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><em>videoPlayer</em> <VideoPlayer video = {this.state.displayedVideo} bob={'hey'} /></h5></div>
          </div>
          <div className="col-md-5">
            <div><h5><em>List of Videos</em> <VideoList onClick = {this.onVideoClick.bind(this)} videos = {this.state.videos}/></h5></div>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined

export default App;