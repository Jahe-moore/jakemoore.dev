/* jakemoore.dev: navbar toggle and click-to-load YouTube. No dependencies. */
(function () {
  'use strict';

  // Navbar collapse (replaces bootstrap.bundle.js, which was only used for this)
  document.querySelectorAll('.navbar-toggler').forEach(function (btn) {
    var target = document.getElementById(btn.getAttribute('aria-controls'));
    if (!target) return;
    btn.addEventListener('click', function () {
      var open = target.classList.toggle('show');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      btn.classList.toggle('collapsed', !open);
    });
  });

  // YouTube facade: a thumbnail link that becomes a youtube-nocookie iframe on click
  document.querySelectorAll('a.yt-facade').forEach(function (link) {
    link.addEventListener('click', function (ev) {
      ev.preventDefault();
      var frame = document.createElement('iframe');
      frame.src = 'https://www.youtube-nocookie.com/embed/' + link.dataset.ytId + '?autoplay=1&rel=0';
      frame.title = link.dataset.ytTitle;
      frame.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
      frame.referrerPolicy = 'strict-origin-when-cross-origin';
      frame.allowFullscreen = true;
      frame.setAttribute('frameborder', '0');
      link.replaceWith(frame);
      frame.focus();
    });
  });
})();
