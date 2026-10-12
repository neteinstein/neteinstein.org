/**
 * Click-to-load video players. One delegated listener for every
 * `.video-embed` host on the page: clicking its `.video-embed-trigger` swaps
 * the host's contents for the player iframe in `data-embed-src`. Used by
 * `VideoEmbed` and by the app banners on /my-apps.
 */
document.addEventListener('click', (event) => {
  const trigger = (event.target as Element | null)?.closest<HTMLAnchorElement>(
    '.video-embed-trigger',
  );
  const host = trigger?.closest<HTMLElement>('.video-embed');
  if (!trigger || !host?.dataset.embedSrc) return;
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return;

  event.preventDefault();
  const frame = document.createElement('iframe');
  frame.src = host.dataset.embedSrc;
  frame.title = host.dataset.embedTitle ?? 'Video';
  frame.allow =
    'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen';
  frame.allowFullscreen = true;
  frame.className = 'absolute inset-0 size-full border-0';
  host.replaceChildren(frame);
  frame.focus();
});
