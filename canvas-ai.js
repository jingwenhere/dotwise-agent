(() => {
  const board = document.getElementById('canvasBoard');
  const mode = document.documentElement.dataset.selectionMode;
  if (!board || !['single', 'multi'].includes(mode)) return;
  const requestedEffect = document.documentElement.dataset.loadingEffect;
  const loadingEffect = ['glass', 'glow', 'composer', 'pixels'].includes(requestedEffect) ? requestedEffect : 'combined';
  const usesLibraryLoader = ['composer', 'pixels'].includes(loadingEffect);

  const asset = (name) => `assets/figma/canvas-ai/${name}`;
  const secondaryArtwork = mode === 'multi'
    ? `<button class="canvas-ai-artwork canvas-ai-artwork-secondary" type="button" aria-label="Select winter landscape painting"><img src="${asset('winter-landscape.png')}" alt="Snowy winter landscape painting" /></button>`
    : '';
  const sourceImage = mode === 'single' ? 'winter-landscape.png' : 'water-lilies.png';
  const sourceAlt = mode === 'single' ? 'Snowy winter landscape painting' : 'Pastel water lilies painting';
  const resultImage = mode === 'single' ? 'water-lilies.png' : 'blue-abstract.png';
  const resultAlt = mode === 'single' ? 'Generated pastel water lilies painting' : 'Generated blue abstract painting';
  // Keep each experiment's layers separate so glass and glow cannot bleed together.
  const loadingLayers = usesLibraryLoader
    ? '<div class="canvas-ai-library-mount"></div>'
    : loadingEffect === 'glass'
    ? `<img class="canvas-ai-glass-image" src="${asset(sourceImage)}" alt="" /><span class="canvas-ai-glass-pane" data-node-id="2613:32457"></span>`
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
    <div class="canvas-ai-loader" aria-hidden="true">
      ${loadingLayers}
    </div>
    <figure class="canvas-ai-result" aria-label="AI generated image"><img src="${asset(resultImage)}" alt="${resultAlt}" /></figure>
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
  const sources = stage.querySelectorAll('.canvas-ai-artwork');
  const selection = stage.querySelector('.canvas-ai-selection');
  const marquee = stage.querySelector('.canvas-ai-marquee');
  const timers = new Set();
  let disposeLibraryLoader = null;
  let intent = 'generate';
  let selectedSources = [];
  let marqueeGesture = null;

  const stopLibraryLoader = () => {
    disposeLibraryLoader?.();
    disposeLibraryLoader = null;
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

  const frameCanvas = () => {
    const width = board.clientWidth;
    const height = board.clientHeight;
    if (!width || !height) return;
    syncSelectionBounds();
    const content = [...sources];
    if (stage.dataset.state === 'generating') content.push(stage.querySelector('.canvas-ai-loader'));
    if (stage.dataset.state === 'done') content.push(stage.querySelector('.canvas-ai-result'));
    const bounds = boundsOf(content);
    const zoom = Number.parseFloat(getComputedStyle(board).getPropertyValue('--canvas-zoom')) || 1;
    const scale = Math.min(1, Math.max(1, width - 64) / bounds.width, Math.max(1, height - 160) / bounds.height) * zoom;
    const x = (width - bounds.width * scale) / 2 - bounds.left * scale;
    const y = (height - bounds.height * scale) / 2 - bounds.top * scale;
    camera.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;
    const selected = boundsOf(selectedSources.length ? selectedSources : [...sources]);
    const promptWidth = Math.min(480, width - 32);
    Object.assign(prompt.style, {
      width: `${promptWidth}px`,
      left: `${Math.max(16 + promptWidth / 2, Math.min(width - 16 - promptWidth / 2, x + (selected.left + selected.width / 2) * scale))}px`,
      top: `${Math.max(16, y + selected.top * scale - prompt.offsetHeight - 8)}px`,
    });
    positionIntentMenu();
  };

  const setState = (state) => {
    stage.dataset.state = state;
    prompt.inert = state !== 'prompt';
    sources.forEach((source) => source.setAttribute('aria-pressed', String(state === 'prompt' && selectedSources.includes(source))));
    frameCanvas();
  };

  const syncInput = () => {
    intentControl.hidden = !input.value.trim();
    submit.disabled = false;
    if (intentControl.hidden) closeIntentMenu();
  };

  const canvasObserver = new ResizeObserver(frameCanvas);
  canvasObserver.observe(board);
  sources.forEach((source) => canvasObserver.observe(source));
  new MutationObserver(frameCanvas).observe(board, { attributes: true, attributeFilter: ['style'] });
  setState('idle');
  // Establish the first view immediately; animate only user-driven reframing.
  window.requestAnimationFrame(() => { stage.dataset.cameraReady = ''; });

  const promptObserver = new ResizeObserver(positionIntentMenu);
  promptObserver.observe(stage);
  promptObserver.observe(prompt);
  promptObserver.observe(selection);
  window.addEventListener('resize', positionIntentMenu);

  const schedule = (callback, delay) => {
    const timer = window.setTimeout(() => {
      timers.delete(timer);
      callback();
    }, delay);
    timers.add(timer);
  };

  const clearTimers = () => {
    timers.forEach((timer) => window.clearTimeout(timer));
    timers.clear();
  };

  const announce = (message) => {
    live.textContent = '';
    window.requestAnimationFrame(() => { live.textContent = message; });
  };

  const selectSource = (source) => {
    closeIntentMenu();
    clearTimers();
    stopLibraryLoader();
    board.removeAttribute('aria-busy');
    selectedSources = [source];
    setState('prompt');
    input.value = '';
    syncInput();
    announce('Painting selected. Edit selection with AI.');
    if (!window.matchMedia('(pointer: coarse)').matches) {
      window.requestAnimationFrame(() => input.focus({ preventScroll: true }));
    }
  };

  const startGeneration = () => {
    if (stage.dataset.state !== 'prompt' || !input.value.trim()) return;
    closeIntentMenu();
    submit.disabled = true;
    clearTimers();
    stopLibraryLoader();
    input.blur();
    // Reveal the generated-content placeholder and deselect in the same frame.
    setState('generating');
    board.setAttribute('aria-busy', 'true');
    announce('Generating image. Selection highlight removed.');

    const finishGeneration = () => {
      if (stage.dataset.state !== 'generating') return;
      stopLibraryLoader();
      setState('done');
      board.removeAttribute('aria-busy');
      announce('Image generation complete. Select a source painting to run the prototype again.');
    };
    if (usesLibraryLoader && window.CanvasLibraryLoaders) {
      disposeLibraryLoader = window.CanvasLibraryLoaders.mount(
        stage.querySelector('.canvas-ai-library-mount'),
        { effect: loadingEffect, imageUrl: asset(resultImage), onComplete: finishGeneration },
      );
    } else {
      if (usesLibraryLoader) {
        stage.querySelector('.canvas-ai-library-mount').textContent = 'Animation unavailable';
        announce('Animation unavailable. The generated image will appear shortly.');
      }
      schedule(finishGeneration, 4100);
    }
  };

  window.addEventListener('pagehide', stopLibraryLoader);
  window.addEventListener('pageshow', (event) => {
    // BFCache restores the DOM, but the pagehide cleanup already stopped React.
    if (event.persisted && usesLibraryLoader && stage.dataset.state === 'generating') {
      selectSource(sources[0]);
    }
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
    const images = selectedSources.map((source) => {
      const image = source.querySelector('img');
      return { src: image.src, alt: image.alt };
    });
    // Send directly to the C-style conversation without overwriting a chat draft.
    if (!window.CanvasChat.send(message, images)) {
      announce('The prompt could not be sent. Your prompt has been kept.');
      return;
    }

    selectedSources = [];
    setState('idle');
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
  sources.forEach((source) => source.addEventListener('click', () => selectSource(source)));

  const clearSelection = () => {
    selectedSources = [];
    sources.forEach((source) => source.classList.remove('is-marquee-hit'));
    closeIntentMenu();
    input.blur();
    setState('idle');
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
    if (event.target.closest('.canvas-ai-artwork, .canvas-ai-prompt, .canvas-ai-intent-menu')) return;
    if (mode !== 'multi') {
      if (stage.dataset.state === 'prompt') clearSelection();
      return;
    }
    if (!event.isPrimary || (event.pointerType === 'mouse' && event.button !== 0)) return;
    if (!['idle', 'prompt'].includes(stage.dataset.state)) return;
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
    setState('prompt');
    input.value = '';
    syncInput();
    announce(`${hits.length} ${hits.length === 1 ? 'painting' : 'paintings'} selected. Edit selection with AI.`);
    if (!window.matchMedia('(pointer: coarse)').matches) {
      window.requestAnimationFrame(() => input.focus({ preventScroll: true }));
    }
  };

  stage.addEventListener('pointerup', finishMarquee);
  stage.addEventListener('pointercancel', finishMarquee);

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

  announce(mode === 'multi'
    ? 'Drag across paintings to select multiple images, or choose one painting.'
    : 'Select a painting to edit it with AI.');
})();
