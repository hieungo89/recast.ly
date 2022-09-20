import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

var searchYouTube = (query, callback, errorCB = null) => {
  $.ajax({
    url: "https://app-hrsei-api.herokuapp.com/api/recastly/videos",
    type: 'GET',
    data: { q: query },
    contentType: 'application/json',
    success: function(response) {
      callback(response);
    },
    error: errorCB || function(error) {
      console.error('Error submitting GET request', error);
    }
  });
};

export default searchYouTube;
