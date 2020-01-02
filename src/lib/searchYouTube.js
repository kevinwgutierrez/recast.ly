import YOUTUBE_API_KEY from '../youtube.example.js';
var searchYouTube = (options, callback) => {
  // TODO
  $.ajax({
    type: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    success: callback,
  }
  );
};

export default searchYouTube;
