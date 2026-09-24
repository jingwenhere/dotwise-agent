(() => {
  const board = document.getElementById('canvasBoard');
  const mode = document.documentElement.dataset.selectionMode;
  if (!board || !['single', 'multi'].includes(mode)) return;
  const requestedEffect = document.documentElement.dataset.loadingEffect;
  const loadingEffect = ['glass', 'glow', 'composer', 'pixels'].includes(requestedEffect) ? requestedEffect : 'combined';
  const usesLibraryLoader = ['composer', 'pixels'].includes(loadingEffect);
  const scene = new window.CanvasScene.Scene(mode, loadingEffect);

  const asset = (name) => `assets/figma/canvas-ai/${name}`;
  const secondaryArtwork = mode === 'multi'
    ? `<button class="canvas-ai-artwork canvas-ai-artwork-secondary" type="button" aria-label="Select winter landscape painting"><img src="${asset('winter-landscape.png')}" alt="Snowy winter landscape painting" /></button>`
    : '';
  const sourceImage = mode === 'single' ? 'winter-landscape.png' : 'water-lilies.png';
  const sourceAlt = mode === 'single' ? 'Snowy winter landscape painting' : 'Pastel water lilies painting';
  // Keep each experiment's layers separate so glass and glow cannot bleed together.
  const loadingLayers = usesLibraryLoader
    ? '<div class="canvas-ai-library-mount"></div>'
    : loadingEffect === 'glass'
    ? `<img class="canvas-ai-glass-image" src="${asset(sourceImage)}" alt="" /><span class="canvas-ai-glass-pane" data-node-id="2613:32457"><span class="canvas-ai-glass-cloud"></span><span class="canvas-ai-glass-cloud"></span><span class="canvas-ai-glass-cloud"></span></span>`
    : loadingEffect === 'glow'
      ? '<span class="canvas-ai-glow-mask" data-node-id="2640:34802"><span class="canvas-ai-glow-orbit"></span></span>'
      : '<span class="canvas-ai-loader-edge"></span><span class="canvas-ai-loader-surface"></span><span class="canvas-ai-loader-shimmer"></span>';

  const stage = document.createElement('div');
  stage.className = 'canvas-ai-stage';
  stage.dataset.mode = mode;
  stage.dataset.loadingEffect = loadingEffect;
  stage.dataset.state = 'idle';
  stage.innerHTML = `
    <div class="canvas-ai-camera">
    <div class="canvas-ai-grid" aria-hidden="true"></div>
    <button class="canvas-ai-artwork canvas-ai-artwork-primary" type="button" aria-label="Select ${mode === 'single' ? 'painting' : 'water lilies painting'}"><img src="${asset(sourceImage)}" alt="${sourceAlt}" /></button>
    ${secondaryArtwork}
    <div class="canvas-ai-selection">
      <span class="canvas-ai-handle" aria-hidden="true"></span><span class="canvas-ai-handle" aria-hidden="true"></span><span class="canvas-ai-handle" aria-hidden="true"></span><span class="canvas-ai-handle" aria-hidden="true"></span>
    </div>
    </div>
      <div class="canvas-ai-marquee" aria-hidden="true"></div>
      <form class="canvas-ai-prompt prompt-box prompt-box-light" aria-label="Ask AI about selected images" data-node-id="2594:31668" inert>
        <div class="prompt-inline-field">
          <img class="prompt-agent-icon" src="assets/figma/selection-prompt-icon.svg" alt="" />
          <input type="text" autocomplete="off" placeholder="Edit selection with AI" aria-label="Describe what to generate" />
        </div>
        <div class="prompt-inline-actions">
        <div class="canvas-ai-intent-control prompt-intent-control" hidden>
          <button class="canvas-ai-intent prompt-intent-route" type="button" aria-haspopup="menu" aria-expanded="false" aria-controls="canvasAiIntentMenu"><span>Generate</span><img src="assets/figma/chevron-down.svg" alt="" /></button>
          <div class="canvas-ai-intent-menu" id="canvasAiIntentMenu" role="menu" aria-label="Send prompt to" data-node-id="2595:31726" popover="manual" hidden>
            <button type="button" role="menuitemradio" aria-checked="true" data-intent="generate" tabindex="-1"><span>Generate</span><img src="${asset('check.svg')}" alt="" /></button>
            <button type="button" role="menuitemradio" aria-checked="false" data-intent="chat" tabindex="-1"><span>Ask in AI</span><img src="${asset('check.svg')}" alt="" /></button>
          </div>
        </div>
        <button class="canvas-ai-submit prompt-submit dark" type="submit" aria-label="Generate image"><img src="assets/figma/selection-prompt-send.svg" alt="" /></button>
        </div>
      </form>
    <p class="canvas-ai-live" aria-live="polite"></p>`;

  board.prepend(stage);

  const camera = stage.querySelector('.canvas-ai-camera');
  const prompt = stage.querySelector('.canvas-ai-prompt');
  const input = prompt.querySelector('input');
  const submit = prompt.querySelector('.canvas-ai-submit');
  const intentControl = prompt.querySelector('.canvas-ai-intent-control');
  const intentButton = prompt.querySelector('.canvas-ai-intent');
  const intentLabel = intentButton.querySelector('span');
  const intentMenu = prompt.querySelector('.canvas-ai-intent-menu');
  const intentOptions = [...intentMenu.querySelectorAll('[data-intent]')];
  const live = stage.querySelector('.canvas-ai-live');
  const sources = [...stage.querySelectorAll('.canvas-ai-artwork')];
  sources.forEach((source, index) => { source.dataset.imageId = `source-${index + 1}`; });
  const selection = stage.querySelector('.canvas-ai-selection');
  const marquee = stage.querySelector('.canvas-ai-marquee');
  const jobs = new Map();
  let intent = 'generate';
  let selectedSources = [];
  let marqueeGesture = null;

  const syncMotion = () => {
    jobs.forEach(({ element }) => {
      element.dataset.motionPaused = String(document.hidden || element.dataset.inView === 'false');
    });
  };
  const visibilityObserver = new IntersectionObserver((entries) => {
    entries.forEach(({ target, isIntersecting }) => { target.dataset.inView = String(isIntersecting); });
    syncMotion();
  });
  document.addEventListener('visibilitychange', syncMotion);

  const imageReference = (source) => {
    const node = scene.nodes.get(source.dataset.imageId);
    return { id: node.id, name: node.name, src: source.querySelector('img').src, alt: node.alt };
  };

  const closeIntentMenu = (restoreFocus = false) => {
    if (intentMenu.matches(':popover-open')) intentMenu.hidePopover();
    intentMenu.hidden = true;
    intentButton.setAttribute('aria-expanded', 'false');
    intentOptions.forEach((option) => { option.tabIndex = -1; });
    if (restoreFocus) intentButton.focus({ preventScroll: true });
  };

  const positionIntentMenu = () => {
    if (intentMenu.hidden) return;
    const promptRect = prompt.getBoundingClientRect();
    const triggerRect = intentButton.getBoundingClientRect();
    const scale = 1;
    const width = intentMenu.offsetWidth * scale;
    const height = intentMenu.offsetHeight * scale;
    const top = promptRect.top - 12 * scale - height;
    // The top layer keeps the Figma menu above the prompt without canvas clipping.
    intentMenu.dataset.side = top >= 8 ? 'top' : 'bottom';
    Object.assign(intentMenu.style, {
      left: `${Math.max(8, Math.min(triggerRect.left, window.innerWidth - width - 8))}px`,
      top: `${top >= 8 ? top : promptRect.bottom + 12 * scale}px`,
      transform: `scale(${scale})`,
    });
  };

  const focusIntentOption = (index) => {
    intentOptions.forEach((option, optionIndex) => { option.tabIndex = optionIndex === index ? 0 : -1; });
    intentOptions[index].focus({ preventScroll: true });
  };

  const openIntentMenu = (index = intentOptions.findIndex((option) => option.dataset.intent === intent)) => {
    if (stage.dataset.state !== 'prompt' || !input.value.trim()) return;
    intentMenu.hidden = false;
    intentMenu.showPopover();
    intentButton.setAttribute('aria-expanded', 'true');
    positionIntentMenu();
    focusIntentOption(index);
  };

  // Artwork stays in fixed world coordinates. Only this shared camera moves.
  const boundsOf = (elements) => {
    const left = Math.min(...elements.map((element) => element.offsetLeft));
    const top = Math.min(...elements.map((element) => element.offsetTop));
    const right = Math.max(...elements.map((element) => element.offsetLeft + element.offsetWidth));
    const bottom = Math.max(...elements.map((element) => element.offsetTop + element.offsetHeight));
    return { left, top, width: right - left, height: bottom - top };
  };

  const syncSelectionBounds = () => {
    if (!selectedSources.length) return;
    const { left, top, width, height } = boundsOf(selectedSources);
    Object.assign(selection.style, {
      left: `${left}px`, top: `${top}px`, width: `${width}px`, height: `${height}px`,
    });
  };

  const positionPrompt = ({ x, y, scale }) => {
    const width = board.clientWidth;
    const height = board.clientHeight;
    if (!width || !height) return;
    syncSelectionBounds();
    const selected = boundsOf(selectedSources.length ? selectedSources : [...sources]);
    const promptWidth = Math.min(480, width - 32);
    Object.assign(prompt.style, {
      width: `${promptWidth}px`,
      left: `${Math.max(16 + promptWidth / 2, Math.min(width - 16 - promptWidth / 2, x + (selected.left + selected.width / 2) * scale))}px`,
      top: `${Math.max(16, Math.min(height - prompt.offsetHeight - 72, y + selected.top * scale - prompt.offsetHeight - 8))}px`,
    });
    positionIntentMenu();
  };

  const viewport = window.createCanvasViewport({
    board, stage, camera, onChange: positionPrompt,
    getBounds: () => {
      const { x, y, width, height } = scene.bounds();
      return { left: x, top: y, width, height };
    },
  });
  const frameCanvas = () => viewport.frame();

  const setState = () => {
    const generating = [...scene.nodes.values()].some((node) => node.status === 'generating');
    const state = selectedSources.length ? 'prompt' : generating ? 'generating' : 'idle';
    stage.dataset.state = state;
    stage.dataset.generatingCount = String([...scene.nodes.values()].filter((node) => node.status === 'generating').length);
    prompt.inert = state !== 'prompt';
    sources.forEach((source) => source.setAttribute('aria-pressed', String(state === 'prompt' && selectedSources.includes(source))));
    window.CanvasChat?.setSelection(selectedSources.map(imageReference));
    // Only the pending card is busy; the rest of the canvas remains interactive.
    viewport.frame();
  };

  const syncInput = () => {
    intentControl.hidden = !input.value.trim();
    submit.disabled = false;
    if (intentControl.hidden) closeIntentMenu();
  };

  const canvasObserver = new ResizeObserver(frameCanvas);
  canvasObserver.observe(board);
  sources.forEach((source) => canvasObserver.observe(source));
  setState();

  const promptObserver = new ResizeObserver(positionIntentMenu);
  promptObserver.observe(stage);
  promptObserver.observe(prompt);
  promptObserver.observe(selection);
  window.addEventListener('resize', positionIntentMenu);

  const announce = (message) => {
    live.textContent = '';
    window.requestAnimationFrame(() => { live.textContent = message; });
  };

  const selectSource = (source, additive = false) => {
    closeIntentMenu();
    selectedSources = additive
      ? selectedSources.includes(source) ? selectedSources.filter((item) => item !== source) : [...selectedSources, source]
      : [source];
    setState();
    input.value = '';
    syncInput();
    announce('Painting selected. Edit selection with AI.');
    if (!window.matchMedia('(pointer: coarse)').matches) {
      window.requestAnimationFrame(() => input.focus({ preventScroll: true }));
    }
  };

  const place = (element, node, loading = false) => Object.assign(element.style, {
    left: `${node.x}px`, top: `${node.y}px`,
    width: `${loading ? node.loadingWidth : node.width}px`,
    height: `${loading ? node.loadingHeight : node.height}px`,
  });

  const stopJob = (job) => {
    job.runToken = null;
    clearTimeout(job.timer);
    clearTimeout(job.watchdog);
    job.dispose?.();
    job.dispose = null;
    if (job.image) job.image.onload = job.image.onerror = null;
  };

  const removeJob = (job) => {
    stopJob(job);
    visibilityObserver.unobserve(job.element);
    job.element.remove();
    jobs.delete(job.id);
  };

  const cancelJob = (job) => {
    const restoreFocus = job.element.contains(document.activeElement);
    scene.cancel(job.id);
    removeJob(job);
    setState();
    if (restoreFocus) sources[0].focus({ preventScroll: true });
    announce('Generation cancelled. Existing images are unchanged.');
  };

  const jobActions = (job, failed = false) => {
    const actions = document.createElement('div');
    actions.className = 'canvas-ai-job-actions';
    if (failed) {
      const retry = document.createElement('button');
      retry.type = 'button';
      retry.textContent = 'Retry';
      retry.addEventListener('click', () => {
        if (scene.retry(job.id)) { runJob(job); setState(); }
      });
      actions.append(retry);
    }
    const cancel = document.createElement('button');
    cancel.type = 'button';
    cancel.textContent = failed ? 'Remove' : 'Cancel';
    cancel.setAttribute('aria-label', `${failed ? 'Remove failed' : 'Cancel'} generation ${job.id}`);
    cancel.addEventListener('click', () => cancelJob(job));
    actions.append(cancel);
    return actions;
  };

  const runJob = (job) => {
    const restoreFocus = job.element.contains(document.activeElement);
    stopJob(job);
    const node = scene.nodes.get(job.id);
    const token = {};
    job.runToken = token;
    job.element.dataset.state = 'generating';
    job.element.setAttribute('aria-label', `Generating ${node.name}`);
    job.element.setAttribute('aria-busy', 'true');
    job.element.innerHTML = loadingLayers;
    const glassImage = job.element.querySelector('.canvas-ai-glass-image');
    if (glassImage) glassImage.src = asset(scene.nodes.get(node.parentIds[0]).file);
    job.element.append(jobActions(job));
    if (restoreFocus) job.element.querySelector('button').focus({ preventScroll: true });
    let loaded = false;
    let animationFinished = false;
    const current = () => job.runToken === token && scene.nodes.get(job.id)?.status === 'generating';
    const fail = () => {
      if (!current()) return;
      const restoreFocus = job.element.contains(document.activeElement);
      stopJob(job);
      scene.fail(job.id);
      job.element.dataset.state = 'error';
      job.element.setAttribute('aria-label', `Could not load ${node.name}`);
      job.element.removeAttribute('aria-busy');
      const message = document.createElement('p');
      message.textContent = 'Image could not load';
      job.element.replaceChildren(message, jobActions(job, true));
      setState();
      if (restoreFocus) job.element.querySelector('button').focus({ preventScroll: true });
      announce('Image could not load. Retry or remove this generation.');
    };
    const complete = () => {
      if (!current() || !loaded || !animationFinished) return;
      const restoreFocus = job.element.contains(document.activeElement);
      const result = scene.complete(job.id);
      const artwork = document.createElement('button');
      artwork.type = 'button';
      artwork.className = 'canvas-ai-artwork canvas-ai-generated';
      artwork.dataset.imageId = result.id;
      artwork.setAttribute('aria-label', `Select ${result.name}`);
      artwork.title = result.name;
      job.image.alt = result.alt;
      artwork.append(job.image);
      place(artwork, result);
      camera.append(artwork);
      sources.push(artwork);
      canvasObserver.observe(artwork);
      removeJob(job);
      // Completion never steals the current selection, prompt draft, or chat focus.
      setState();
      if (restoreFocus) artwork.focus({ preventScroll: true });
      announce(`${result.name} ready. Select any image to continue generating.`);
    };
    job.image = new Image();
    job.image.draggable = false;
    job.image.onload = () => { loaded = true; complete(); };
    job.image.onerror = fail;
    job.image.src = asset(node.file);
    job.watchdog = setTimeout(fail, 20000);
    const animationComplete = () => { animationFinished = true; complete(); };
    if (usesLibraryLoader && window.CanvasLibraryLoaders) {
      try {
        job.dispose = window.CanvasLibraryLoaders.mount(job.element.querySelector('.canvas-ai-library-mount'), {
          effect: loadingEffect, imageUrl: asset(node.file), onComplete: animationComplete,
        });
      } catch { fail(); }
    } else {
      if (usesLibraryLoader) job.element.querySelector('.canvas-ai-library-mount').textContent = 'Preparing image…';
      job.timer = setTimeout(animationComplete, 4100);
    }
  };

  const startGeneration = () => {
    if (!selectedSources.length || !input.value.trim()) return;
    const node = scene.createJob(selectedSources.map((source) => source.dataset.imageId), input.value);
    const element = document.createElement('div');
    element.className = 'canvas-ai-loader';
    element.dataset.imageId = node.id;
    element.setAttribute('role', 'group');
    element.setAttribute('aria-label', `Generating ${node.name}`);
    place(element, node, true);
    const job = { id: node.id, element };
    jobs.set(node.id, job);
    camera.append(element);
    visibilityObserver.observe(element);
    runJob(job);
    closeIntentMenu();
    selectedSources = [];
    input.value = '';
    input.blur();
    syncInput();
    setState();
    viewport.frame({ fit: true });
    announce('Generating image. You can continue selecting other images.');
  };

  window.addEventListener('pagehide', () => jobs.forEach(stopJob));
  window.addEventListener('pageshow', (event) => {
    if (event.persisted) jobs.forEach((job) => {
      if (scene.nodes.get(job.id)?.status === 'generating') runJob(job);
    });
  });

  const sendToChat = () => {
    const message = input.value.trim();
    if (stage.dataset.state !== 'prompt' || !message) return;
    const composer = document.getElementById('chatComposer');
    const chatInput = composer?.querySelector('textarea');
    const conversation = document.getElementById('newSessionConversation');
    if (!window.CanvasChat || !chatInput || !conversation) {
      announce('Chat is unavailable. Your prompt has been kept.');
      return;
    }

    closeIntentMenu();
    const images = selectedSources.map(imageReference);
    // Send directly to the C-style conversation without overwriting a chat draft.
    if (!window.CanvasChat.send(message, images)) {
      announce('The prompt could not be sent. Your prompt has been kept.');
      return;
    }

    selectedSources = [];
    setState();
    input.value = '';
    syncInput();
    window.requestAnimationFrame(() => {
      conversation.scrollTop = conversation.scrollHeight;
      syncSelectionBounds();
      chatInput.focus({ preventScroll: true });
    });
    announce('Prompt and selected images sent to chat.');
  };

  intentButton.addEventListener('click', () => {
    if (intentMenu.hidden) openIntentMenu();
    else closeIntentMenu(true);
  });
  intentButton.addEventListener('keydown', (event) => {
    if (!['ArrowDown', 'ArrowUp'].includes(event.key)) return;
    event.preventDefault();
    openIntentMenu(event.key === 'ArrowDown' ? 0 : intentOptions.length - 1);
  });
  intentOptions.forEach((option) => option.addEventListener('click', () => {
    intent = option.dataset.intent;
    intentLabel.textContent = option.querySelector('span').textContent;
    intentOptions.forEach((item) => item.setAttribute('aria-checked', String(item === option)));
    submit.setAttribute('aria-label', intent === 'generate' ? 'Generate image' : 'Send to chat');
    input.setAttribute('aria-label', intent === 'generate' ? 'Describe what to generate' : 'Ask about the selected images');
    closeIntentMenu(true);
    announce(`${intentLabel.textContent} selected.`);
  }));
  intentMenu.addEventListener('keydown', (event) => {
    const index = intentOptions.indexOf(document.activeElement);
    let next = index;
    if (event.key === 'ArrowDown') next = (index + 1) % intentOptions.length;
    else if (event.key === 'ArrowUp') next = (index - 1 + intentOptions.length) % intentOptions.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = intentOptions.length - 1;
    else if (event.key === 'Tab') { closeIntentMenu(true); return; }
    else return;
    event.preventDefault();
    focusIntentOption(next);
  });
  document.addEventListener('pointerdown', (event) => {
    if (!intentMenu.hidden && !intentControl.contains(event.target)) closeIntentMenu(true);
  });
  document.addEventListener('focusin', (event) => {
    if (!intentMenu.hidden && !intentControl.contains(event.target)) closeIntentMenu();
  });
  input.addEventListener('input', syncInput);
  prompt.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!input.value.trim()) { input.focus({ preventScroll: true }); return; }
    if (intent === 'chat') sendToChat();
    else startGeneration();
  });
  camera.addEventListener('click', (event) => {
    const source = event.target.closest('.canvas-ai-artwork');
    if (source) selectSource(source, event.shiftKey);
  });
  camera.addEventListener('dragstart', (event) => event.preventDefault());

  const clearSelection = () => {
    selectedSources = [];
    sources.forEach((source) => source.classList.remove('is-marquee-hit'));
    closeIntentMenu();
    input.blur();
    setState();
  };

  const localPointer = (event) => {
    const rect = stage.getBoundingClientRect();
    return {
      x: Math.max(0, Math.min(rect.width, event.clientX - rect.left)),
      y: Math.max(0, Math.min(rect.height, event.clientY - rect.top)),
    };
  };

  const marqueeRect = (start, current) => ({
    left: Math.min(start.x, current.x),
    top: Math.min(start.y, current.y),
    right: Math.max(start.x, current.x),
    bottom: Math.max(start.y, current.y),
  });

  const marqueeHits = (rect) => [...sources].filter((source) => {
    const sourceRect = source.getBoundingClientRect();
    const stageRect = stage.getBoundingClientRect();
    return rect.left < sourceRect.right - stageRect.left
      && rect.right > sourceRect.left - stageRect.left
      && rect.top < sourceRect.bottom - stageRect.top
      && rect.bottom > sourceRect.top - stageRect.top;
  });

  stage.addEventListener('pointerdown', (event) => {
    if (event.target.closest('.canvas-ai-artwork, .canvas-ai-loader, .canvas-ai-prompt, .canvas-ai-intent-menu')) return;
    if (!event.isPrimary || (event.pointerType === 'mouse' && event.button !== 0)) return;
    clearSelection();
    const start = localPointer(event);
    marqueeGesture = { pointerId: event.pointerId, start, moved: false, hits: [] };
    stage.setPointerCapture(event.pointerId);
  });

  stage.addEventListener('pointermove', (event) => {
    if (!marqueeGesture || event.pointerId !== marqueeGesture.pointerId) return;
    const current = localPointer(event);
    const rect = marqueeRect(marqueeGesture.start, current);
    if (!marqueeGesture.moved && Math.hypot(rect.right - rect.left, rect.bottom - rect.top) < 4) return;
    marqueeGesture.moved = true;
    event.preventDefault();
    Object.assign(marquee.style, {
      left: `${rect.left}px`,
      top: `${rect.top}px`,
      width: `${rect.right - rect.left}px`,
      height: `${rect.bottom - rect.top}px`,
    });
    stage.dataset.marquee = 'active';
    marqueeGesture.hits = marqueeHits(rect);
    sources.forEach((source) => source.classList.toggle('is-marquee-hit', marqueeGesture.hits.includes(source)));
  });

  const finishMarquee = (event) => {
    if (!marqueeGesture || event.pointerId !== marqueeGesture.pointerId) return;
    const { moved, hits } = marqueeGesture;
    marqueeGesture = null;
    delete stage.dataset.marquee;
    sources.forEach((source) => source.classList.remove('is-marquee-hit'));
    if (stage.hasPointerCapture(event.pointerId)) stage.releasePointerCapture(event.pointerId);
    if (!moved || !hits.length) {
      announce(moved ? 'No paintings selected.' : 'Selection cleared.');
      return;
    }
    selectedSources = hits;
    setState();
    input.value = '';
    syncInput();
    announce(`${hits.length} ${hits.length === 1 ? 'painting' : 'paintings'} selected. Edit selection with AI.`);
    if (!window.matchMedia('(pointer: coarse)').matches) {
      window.requestAnimationFrame(() => input.focus({ preventScroll: true }));
    }
  };

  stage.addEventListener('pointerup', finishMarquee);
  const cancelMarquee = () => {
    const pointerId = marqueeGesture?.pointerId;
    marqueeGesture = null;
    delete stage.dataset.marquee;
    sources.forEach((source) => source.classList.remove('is-marquee-hit'));
    if (pointerId !== undefined && stage.hasPointerCapture(pointerId)) stage.releasePointerCapture(pointerId);
  };
  stage.addEventListener('pointercancel', cancelMarquee);
  stage.addEventListener('canvas-gesture-start', cancelMarquee);

  stage.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;
    if (!intentMenu.hidden) {
      event.preventDefault();
      event.stopPropagation();
      closeIntentMenu(true);
      return;
    }
    if (stage.dataset.state === 'prompt') {
      const focusTarget = selectedSources[0] || sources[0];
      clearSelection();
      focusTarget.focus({ preventScroll: true });
      announce('Selection cleared.');
    }
  });

  announce('Drag across paintings to select them, or click a painting to select it.');
})();
