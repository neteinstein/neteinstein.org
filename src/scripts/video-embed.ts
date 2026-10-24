/**
 * Click-to-load video players. One delegated listener for every
 * `.video-embed` host on the page: clicking its `.video-embed-trigger` swaps
 * the host's contents for the player iframe in `data-embed-src`, or for the
 * `<video>` in the host's `<template>` (a self-hosted file). Used by
 * `VideoEmbed` and by the app banners on /my-apps.
 */
document.addEventListener('click', (event) => {
  const trigger = (event.target as Element | null)?.closest<HTMLAnchorElement>(
    '.video-embed-trigger',
  );
  const host = trigger?.closest<HTMLElement>('.video-embed');
  const template = host?.querySelector('template');
  if (!trigger || !host || !(host.dataset.embedSrc || template)) return;
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return;

  event.preventDefault();
  if (template) {
    host.replaceChildren(template.content.cloneNode(true));
    host.querySelector('video')?.focus();
    return;
  }
  if (!host.dataset.embedSrc) return;
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
