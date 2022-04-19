const videoMedia = (
  videoContainer,
  mediaquery,
  trueQuerySrc,
  falseQuerySrc
) => {
  const $videoContainer = document.querySelector(videoContainer);

  const $video = document.createElement('video');
  const $source = document.createElement('source');
  $source.setAttribute('type', 'video/mp4');
  if (window.matchMedia(mediaquery).matches) {
    $source.setAttribute('src', trueQuerySrc);
  } else {
    $source.setAttribute('src', falseQuerySrc);
  }

  $video.muted = true;
  $video.autoplay = true;

  $video.appendChild($source);
  //console.log(Object($video));
  $videoContainer.appendChild($video);
};

export default videoMedia;
