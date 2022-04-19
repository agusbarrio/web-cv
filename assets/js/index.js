import navbar from './navbar.js';
import videoMedia from './videoMedia.js';

document.addEventListener('DOMContentLoaded', () => {
  navbar();
  videoMedia(
    '.hero-image',
    '(max-width: 500px)',
    'assets/img/movil-video.mp4',
    'assets/img/video.mp4'
  );
});
