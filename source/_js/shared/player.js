// create youtube player

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    videoId: 'xBV5j-Bg77A',
    playerVars: { 'autohide': 0, 'showinfo': 0, 'modestbranding': 1 },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  $('#player-watch').on('click', function(){
    event.target.playVideo();
    $('.newsletter-signup, #player-watch').fadeOut();
    $('.player-close').fadeIn();
    $('.loading-spinner').fadeIn();

    // add class to body
    $('body').addClass('site-player-active');

    // change nav icon
    $(".site-nav-icon").toggleClass('open');

    // intro bg video
    $('.landing-video').get(0).pause();
    $('.landing-video').get(0).currentTime = 0;
    // $('.landing-video').fadeOut();

    $('.site-logo').fadeOut();
  });

  $('.site-nav-icon').on('click', function(){
    $('.newsletter-signup, #player-watch, .site-logo').fadeIn();
    $('body').removeClass('site-player-active');
    $('.player-close').fadeOut();
    $('#player').hide();
    event.target.stopVideo();
  });
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
function onPlayerStateChange(event) {
  if (event.data == 1) {
    $('.loading-spinner').fadeOut();
    $('#player').show();
  }
}
function stopVideo() {
  player.stopVideo();
}
