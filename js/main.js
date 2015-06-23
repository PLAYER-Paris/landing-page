$(document).ready(function() {

  /* Video Youtube
  ----------------------------------------------------------------------*/
  var shouldPlayVideo = $(window).width() > 450;

  if (shouldPlayVideo) {
    $('.part-0 .overlay').tubular({
      videoId: '5u9Hf8WpJ04',
      start: 3,
      mute: true
    });

  } else {
    $('.part-0').addClass('replacement-bg-youtube');
  }
});
