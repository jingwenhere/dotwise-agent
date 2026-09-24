/* Shared world-space camera. Selection stays in canvas-ai.js; this owns navigation. */
window.createCanvasViewport = ({ board, stage, camera, getBounds, onChange }) => {
  const grid = stage.querySelector('.canvas-ai-grid');
  const zoomButton = document.getElementById('canvasZoomButton');
  const view = { x: 0, y: 0, scale: 1 };
  const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
  let initialized = false;
  let manual = false;
  let previousSize = { width: 0, height: 0 };
  let renderFrame = 0;
  let animationTimer = 0;
  let spaceDown = false;
  let handTool = false;
  let pan = null;
  let pinch = null;
  let suppressClickUntil = 0;
  const touches = new Map();
  const editable = (target) => target.closest('input, textarea, [contenteditable="true"]');
  const point = (event) => {
    const rect = stage.getBoundingClientRect();
    return { x: event.clientX - rect.left, y: event.clientY - rect.top };
  };

  stage.tabIndex = 0;
  stage.setAttribute('aria-label', 'Canvas. Scroll to pan, pinch or Control scroll to zoom. Hold Space and drag to pan.');
  board.setAttribute('aria-label', 'Interactive image canvas');
  zoomButton.title = 'Zoom and pan options';
  zoomButton.setAttribute('aria-haspopup', 'menu');
  zoomButton.setAttribute('aria-expanded', 'false');
  zoomButton.setAttribute('aria-controls', 'canvasNavigationMenu');
  const menu = document.createElement('div');
  menu.id = 'canvasNavigationMenu';
  menu.className = 'canvas-navigation-menu';
  menu.setAttribute('popover', 'auto');
  menu.setAttribute('role', 'menu');
  menu.setAttribute('aria-label', 'Canvas navigation');
  board.append(menu);
  const closeMenu = (restoreFocus = true) => {
    if (menu.matches(':popover-open')) menu.hidePopover();
    if (restoreFocus) zoomButton.focus({ preventScroll: true });
  };
  const positionMenu = () => {
    if (!menu.matches(':popover-open')) return;
    const rect = zoomButton.getBoundingClientRect();
    menu.style.left = `${Math.max(8, Math.min(rect.left, innerWidth - menu.offsetWidth - 8))}px`;
    menu.style.top = `${Math.max(8, rect.top - menu.offsetHeight - 8)}px`;
  };

  const makeControl = (label, action, isHand = false) => {
    const button = document.createElement('button');
    button.className = 'canvas-navigation-button';
    button.type = 'button';
    button.setAttribute('aria-label', label);
    button.textContent = label;
    button.setAttribute('role', isHand ? 'menuitemcheckbox' : 'menuitem');
    button.tabIndex = -1;
    button.addEventListener('click', () => { action(); closeMenu(!isHand); });
    menu.append(button);
    return button;
  };
  const plus = makeControl('Zoom in', () => zoomTo(view.scale * 1.2));
  const minus = makeControl('Zoom out', () => zoomTo(view.scale / 1.2));
  makeControl('Zoom to 100%', () => zoomTo(1));
  makeControl('Fit all images', () => fit());
  const hand = makeControl('Hand tool (H)', () => setHand(!handTool), true);
  hand.setAttribute('aria-checked', 'false');
  const toggleMenu = () => {
    if (menu.matches(':popover-open')) { closeMenu(); return; }
    menu.showPopover();
    positionMenu();
    menu.querySelector('button:not(:disabled)').focus({ preventScroll: true });
  };
  menu.addEventListener('toggle', () => zoomButton.setAttribute('aria-expanded', String(menu.matches(':popover-open'))));
  menu.addEventListener('keydown', (event) => {
    const items = [...menu.querySelectorAll('button:not(:disabled)')];
    const index = items.indexOf(document.activeElement);
    let next;
    if (event.key === 'ArrowDown') next = (index + 1) % items.length;
    else if (event.key === 'ArrowUp') next = (index - 1 + items.length) % items.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = items.length - 1;
    else if (event.key === 'Escape' || event.key === 'Tab') {
      event.preventDefault();
      event.stopPropagation();
      closeMenu();
      return;
    } else return;
    event.preventDefault();
    items[next].focus({ preventScroll: true });
  });
  window.addEventListener('resize', positionMenu);

  const syncCursor = () => {
    stage.dataset.navigation = pan || pinch ? 'panning' : handTool || spaceDown ? 'hand' : 'select';
  };
  const setHand = (active) => {
    handTool = active;
    hand.setAttribute('aria-checked', String(active));
    syncCursor();
    if (active) stage.focus({ preventScroll: true });
  };

  const render = () => {
    renderFrame = 0;
    camera.style.transform = `translate(${view.x}px, ${view.y}px) scale(${view.scale})`;
    // Tile only around the visible world region, so the grid has no pan boundary.
    const width = board.clientWidth;
    const height = board.clientHeight;
    Object.assign(grid.style, {
      left: `${Math.floor((-view.x - width) / view.scale / 26) * 26}px`,
      top: `${Math.floor((-view.y - height) / view.scale / 26) * 26}px`,
      width: `${width * 3 / view.scale + 52}px`,
      height: `${height * 3 / view.scale + 52}px`,
    });
    const percent = Math.round(view.scale * 100);
    zoomButton.textContent = `${percent}%`;
    zoomButton.setAttribute('aria-label', `Canvas zoom ${percent} percent. Open zoom options`);
    minus.disabled = view.scale <= .1;
    plus.disabled = view.scale >= 4;
    positionMenu();
    onChange(view);
  };
  const requestRender = () => { if (!renderFrame) renderFrame = requestAnimationFrame(render); };
  const beginNavigation = () => {
    // Interrupt an automatic fit at its visible position, never at its destination.
    if (stage.hasAttribute('data-camera-animating')) {
      const matrix = new DOMMatrixReadOnly(getComputedStyle(camera).transform);
      Object.assign(view, { x: matrix.e, y: matrix.f, scale: matrix.a });
    }
    clearTimeout(animationTimer);
    delete stage.dataset.cameraAnimating;
    manual = true;
  };
  const zoomTo = (scale, anchor = { x: board.clientWidth / 2, y: board.clientHeight / 2 }) => {
    beginNavigation();
    const next = clamp(scale, .1, 4);
    const ratio = next / view.scale;
    view.x = anchor.x - (anchor.x - view.x) * ratio;
    view.y = anchor.y - (anchor.y - view.y) * ratio;
    view.scale = next;
    requestRender();
  };
  const fit = ({ animate = false } = {}) => {
    if (!board.clientWidth || !board.clientHeight) return;
    const bounds = getBounds();
    view.scale = clamp(Math.min(1, (board.clientWidth - 64) / bounds.width, (board.clientHeight - 160) / bounds.height), .1, 4);
    view.x = (board.clientWidth - bounds.width * view.scale) / 2 - bounds.left * view.scale;
    view.y = (board.clientHeight - bounds.height * view.scale) / 2 - bounds.top * view.scale;
    manual = false;
    clearTimeout(animationTimer);
    if (animate && initialized) {
      stage.dataset.cameraAnimating = '';
      animationTimer = setTimeout(() => { delete stage.dataset.cameraAnimating; }, 280);
    } else delete stage.dataset.cameraAnimating;
    initialized = true;
    render();
  };
  const frame = ({ fit: forceFit = false } = {}) => {
    const size = { width: board.clientWidth, height: board.clientHeight };
    if (!size.width || !size.height) return;
    if (forceFit || !initialized || !manual) fit({ animate: initialized });
    else {
      view.x += (size.width - previousSize.width) / 2;
      view.y += (size.height - previousSize.height) / 2;
      render();
    }
    previousSize = size;
  };

  stage.addEventListener('wheel', (event) => {
    if (event.target.closest('.canvas-ai-prompt')) return;
    event.preventDefault();
    if (pan || pinch || stage.dataset.marquee === 'active') return;
    const unit = event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? board.clientHeight : 1;
    if (event.ctrlKey || event.metaKey) {
      zoomTo(view.scale * Math.exp(-clamp(event.deltaY * unit, -100, 100) * .01), point(event));
    } else {
      beginNavigation();
      view.x -= (event.shiftKey ? event.deltaY : event.deltaX) * unit;
      view.y -= (event.shiftKey ? event.deltaX : event.deltaY) * unit;
      requestRender();
    }
  }, { passive: false });

  const touchPair = () => {
    const [a, b] = [...touches.values()];
    return { center: { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 }, distance: Math.max(1, Math.hypot(a.x - b.x, a.y - b.y)) };
  };
  const consume = (event) => { event.preventDefault(); event.stopImmediatePropagation(); };
  stage.addEventListener('pointerdown', (event) => {
    if (event.target.closest('.canvas-ai-prompt')) return;
    if (event.pointerType === 'touch') {
      touches.set(event.pointerId, point(event));
      if (touches.size === 2) {
        stage.dispatchEvent(new Event('canvas-gesture-start'));
        beginNavigation();
        pinch = { ...touchPair(), ...view };
        pan = null;
        for (const id of touches.keys()) stage.setPointerCapture(id);
        syncCursor();
        consume(event);
        return;
      }
    }
    if (!(event.button === 1 || (event.button === 0 && (spaceDown || handTool)))) return;
    consume(event);
    stage.dispatchEvent(new Event('canvas-gesture-start'));
    beginNavigation();
    pan = { pointerId: event.pointerId, start: point(event), x: view.x, y: view.y };
    stage.setPointerCapture(event.pointerId);
    stage.focus({ preventScroll: true });
    syncCursor();
  }, true);

  stage.addEventListener('pointermove', (event) => {
    if (touches.has(event.pointerId)) touches.set(event.pointerId, point(event));
    if (pinch) {
      consume(event);
      if (touches.size < 2) return;
      const next = touchPair();
      view.scale = clamp(pinch.scale * next.distance / pinch.distance, .1, 4);
      const ratio = view.scale / pinch.scale;
      view.x = next.center.x - (pinch.center.x - pinch.x) * ratio;
      view.y = next.center.y - (pinch.center.y - pinch.y) * ratio;
      requestRender();
    } else if (pan && event.pointerId === pan.pointerId) {
      consume(event);
      const current = point(event);
      view.x = pan.x + current.x - pan.start.x;
      view.y = pan.y + current.y - pan.start.y;
      requestRender();
    }
  }, true);

  const finishPointer = (event) => {
    touches.delete(event.pointerId);
    if (!pinch && (!pan || event.pointerId !== pan.pointerId)) return;
    consume(event);
    suppressClickUntil = performance.now() + 400;
    if (stage.hasPointerCapture(event.pointerId)) stage.releasePointerCapture(event.pointerId);
    pan = null;
    if (!touches.size) pinch = null;
    syncCursor();
  };
  stage.addEventListener('pointerup', finishPointer, true);
  stage.addEventListener('pointercancel', finishPointer, true);
  stage.addEventListener('click', (event) => {
    if (performance.now() < suppressClickUntil && !event.target.closest('.canvas-ai-prompt')) consume(event);
  }, true);
  stage.addEventListener('auxclick', (event) => { if (event.button === 1) event.preventDefault(); });

  document.addEventListener('keydown', (event) => {
    if (!document.body.classList.contains('is-canvas-view') || editable(event.target)) return;
    // Space/Enter on navigation controls retain their native button behavior.
    if (menu.contains(event.target) || event.target === zoomButton) return;
    if (event.code === 'Space' && !event.metaKey && !event.ctrlKey) {
      event.preventDefault();
      spaceDown = true;
      syncCursor();
    }
    if (!board.contains(document.activeElement)) return;
    if (event.key.toLowerCase() === 'h') setHand(true);
    else if (event.key.toLowerCase() === 'v' || event.key === 'Escape') setHand(false);
    else if (event.key === '+' || event.key === '=') { event.preventDefault(); zoomTo(view.scale * 1.2); }
    else if (event.key === '-') { event.preventDefault(); zoomTo(view.scale / 1.2); }
    else if (event.code === 'Digit1' && event.shiftKey) { event.preventDefault(); fit(); }
    else if (event.code === 'Digit0') { event.preventDefault(); zoomTo(1); }
  });
  document.addEventListener('keyup', (event) => {
    if (event.code === 'Space') { spaceDown = false; syncCursor(); }
  });
  const resetGestures = () => {
    const ids = [...touches.keys(), ...(pan ? [pan.pointerId] : [])];
    touches.clear();
    spaceDown = false;
    pan = pinch = null;
    ids.forEach((id) => { if (stage.hasPointerCapture(id)) stage.releasePointerCapture(id); });
    stage.dispatchEvent(new Event('canvas-gesture-start'));
    syncCursor();
  };
  window.addEventListener('blur', resetGestures);
  document.addEventListener('visibilitychange', () => { if (document.hidden) resetGestures(); });
  document.querySelectorAll('[data-canvas-tool]').forEach((button) => button.addEventListener('click', () => setHand(false)));
  window.addEventListener('pagehide', () => {
    cancelAnimationFrame(renderFrame);
    renderFrame = 0;
    clearTimeout(animationTimer);
    delete stage.dataset.cameraAnimating;
    resetGestures();
  });
  const api = { frame, fit, zoomTo, toggleMenu };
  window.CanvasViewport = api;
  return api;
};
