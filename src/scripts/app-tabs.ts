/**
 * Panel switching for the /my-apps tab bar (`AppTabs.astro`). Each in-page tab
 * (`data-tab="<id>"`) shows the `data-tab-panel` with that id and hides the
 * rest. A link to anything inside a hidden panel — the hero's icon dock, a
 * shared `/my-apps#calendar-sync` — opens its tab first. With JS off every
 * panel stays visible and the tabs are ordinary anchors.
 */

const panels = [...document.querySelectorAll<HTMLElement>('[data-tab-panel]')];
const tabs = [...document.querySelectorAll<HTMLAnchorElement>('[data-tab]')];

function show(id: string) {
  for (const panel of panels) panel.hidden = panel.id !== id;
  for (const tab of tabs) {
    if (tab.dataset.tab === id) tab.setAttribute('aria-current', 'true');
    else tab.removeAttribute('aria-current');
  }
}

/** Opens whichever panel holds the hash's target; false when no panel does. */
function followHash() {
  const id = decodeURIComponent(location.hash.slice(1));
  const panel = id ? document.getElementById(id)?.closest<HTMLElement>('[data-tab-panel]') : null;
  if (!panel) return false;
  show(panel.id);
  // Scroll to an app or section inside the panel, not to the panel itself.
  // On a first visit the browser's own jump (to a then-hidden target) lands at
  // load and would undo an earlier one, so wait for it.
  if (panel.id !== id) {
    const jump = () => requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView());
    if (document.readyState === 'complete') jump();
    else addEventListener('load', jump, { once: true });
  }
  return true;
}

if (panels.length > 0) {
  if (!followHash()) show(panels[0]!.id);
  addEventListener('hashchange', followHash);
  for (const tab of tabs) {
    tab.addEventListener('click', (event) => {
      event.preventDefault();
      show(tab.dataset.tab!);
      history.replaceState(null, '', `#${tab.dataset.tab}`);
    });
  }
}
