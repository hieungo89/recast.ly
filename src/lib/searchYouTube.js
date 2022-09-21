import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

var searchYouTube = (query, callback) => {
  // $.get("https://app-hrsei-api.herokuapp.com/api/recastly/videos", {
  //   key: YOUTUBE_API_KEY,
  //   q: query
  // }).done((data) => callback(data));

  $.ajax({
    url: 'https://app-hrsei-api.herokuapp.com/api/recastly/videos',
    type: 'GET',
    data: {
      key: YOUTUBE_API_KEY,
      q: query,
      type: 'video',
      videoEmbeddable: true,
    },
    contentType: 'application/json',
    success: function (data) {
      callback(data);
    },
  });
};


export default searchYouTube;
