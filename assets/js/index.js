import navbar from './navbar.js';
import videoMedia from './videoMedia.js';

document.addEventListener('DOMContentLoaded', () => {
  navbar('.navbar-toggler', '.nav-link', '.navbar-brand', '.navbar-collapse');
  videoMedia(
    '.hero-image',
    '(max-width: 500px)',
    'assets/img/movil-video-1.mp4',
    'assets/img/video.mp4'
  );
});
