(() => {
  const board = document.getElementById('canvasBoard');
  const mode = document.documentElement.dataset.selectionMode;
  if (!board || !['single', 'multi'].includes(mode)) return;
  const requestedEffect = document.documentElement.dataset.loadingEffect;
  const loadingEffect = ['glass', 'glow', 'composer', 'pixels'].includes(requestedEffect) ? requestedEffect : 'combined';
  const usesLibraryLoader = ['composer', 'pixels'].includes(loadingEffect);

  const asset = (name) => `assets/figma/canvas-ai/${name}`;
  const secondaryArtwork = mode === 'multi'
    ? `<button class="canvas-ai-artwork canvas-ai-artwork-secondary" type="button" aria-label="Select winter landscape with the other painting"><img src="${asset('winter-landscape.png')}" alt="Snowy winter landscape painting" /></button>`
    : '';
  const toolbarExtras = mode === 'multi'
    ? `
      <span class="canvas-ai-divider" aria-hidden="true"></span>
      <button class="canvas-ai-icon-action" type="button" aria-label="Group selection"><img src="${asset('group.svg')}" alt="" /></button>
      <button class="canvas-ai-icon-action" type="button" aria-label="Arrange selection"><img src="${asset('grid.svg')}" alt="" /></button>
      <button class="canvas-ai-icon-action" type="button" aria-label="Stack selection"><img src="${asset('cards.svg')}" alt="" /></button>`
    : `
      <span class="canvas-ai-divider" aria-hidden="true"></span>
      <button class="canvas-ai-icon-action" type="button" aria-label="Expand selection"><img src="${asset('maximize.svg')}" alt="" /></button>`;
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
  stage.dataset.state = 'selected';
  stage.innerHTML = `
    <button class="canvas-ai-artwork canvas-ai-artwork-primary" type="button" aria-label="${mode === 'single' ? 'Select painting' : 'Select painting group'}"><img src="${asset(sourceImage)}" alt="${sourceAlt}" /></button>
    ${secondaryArtwork}
    <div class="canvas-ai-selection">
      <span class="canvas-ai-handle" aria-hidden="true"></span><span class="canvas-ai-handle" aria-hidden="true"></span><span class="canvas-ai-handle" aria-hidden="true"></span><span class="canvas-ai-handle" aria-hidden="true"></span>
      <div class="canvas-ai-toolbar" role="toolbar" aria-label="Selection actions">
        <button class="canvas-ai-action" type="button" data-action="ask-ai"><img src="${asset('ask-ai.svg')}" alt="" /><span>Ask AI</span></button>
        ${toolbarExtras}
      </div>
      <form class="canvas-ai-prompt" aria-label="Ask AI about selected images" data-node-id="2594:31668">
        <img src="${asset('prompt-logo.svg')}" alt="" />
        <input type="text" autocomplete="off" placeholder="Search for similar paintings" aria-label="Describe what to generate" />
        <div class="canvas-ai-intent-control">
          <button class="canvas-ai-intent" type="button" aria-haspopup="menu" aria-expanded="false" aria-controls="canvasAiIntentMenu"><span>Generate</span><img src="${asset('chevron-down.svg')}" alt="" /></button>
          <div class="canvas-ai-intent-menu" id="canvasAiIntentMenu" role="menu" aria-label="Send prompt to" data-node-id="2595:31726" popover="manual" hidden>
            <button type="button" role="menuitemradio" aria-checked="true" data-intent="generate" tabindex="-1"><span>Generate</span><img src="${asset('check.svg')}" alt="" /></button>
            <button type="button" role="menuitemradio" aria-checked="false" data-intent="chat" tabindex="-1"><span>Ask in chat</span><img src="${asset('check.svg')}" alt="" /></button>
          </div>
        </div>
        <button class="canvas-ai-submit" type="submit" aria-label="Generate image" disabled><img src="${asset('send.svg')}" alt="" /></button>
      </form>
    </div>
    <div class="canvas-ai-loader" aria-hidden="true">
      ${loadingLayers}
    </div>
    <figure class="canvas-ai-result" aria-label="AI generated image"><img src="${asset(resultImage)}" alt="${resultAlt}" /></figure>
    <span class="canvas-ai-working-mark" aria-hidden="true"></span>
    <p class="canvas-ai-live" aria-live="polite"></p>`;

  board.prepend(stage);

  const askButton = stage.querySelector('[data-action="ask-ai"]');
  const prompt = stage.querySelector('.canvas-ai-prompt');
  const input = prompt.querySelector('input');
  const submit = prompt.querySelector('.canvas-ai-submit');
  const intentControl = prompt.querySelector('.canvas-ai-intent-control');
  const intentButton = prompt.querySelector('.canvas-ai-intent');
  const intentLabel = intentButton.querySelector('span');
  const intentMenu = prompt.querySelector('.canvas-ai-intent-menu');
  const intentOptions = [...intentMenu.querySelectorAll('[data-intent]')];
  const live = stage.querySelector('.canvas-ai-live');
  const workingMark = stage.querySelector('.canvas-ai-working-mark');
  const sources = stage.querySelectorAll('.canvas-ai-artwork');
  const selection = stage.querySelector('.canvas-ai-selection');
  const timers = new Set();
  let disposeLibraryLoader = null;
  let intent = 'generate';

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
    const stageRect = stage.getBoundingClientRect();
    const promptRect = prompt.getBoundingClientRect();
    const triggerRect = intentButton.getBoundingClientRect();
    const scale = window.matchMedia('(pointer: coarse)').matches
      ? 1
      : stageRect.width / Number.parseFloat(getComputedStyle(stage).width);
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
    if (stage.dataset.state !== 'prompt') return;
    intentMenu.hidden = false;
    intentMenu.showPopover();
    intentButton.setAttribute('aria-expanded', 'true');
    positionIntentMenu();
    focusIntentOption(index);
  };

  const syncSelectionBounds = () => {
    if (mode !== 'multi') return;
    const stageRect = stage.getBoundingClientRect();
    if (!stageRect.width || !stageRect.height) return;
    const stageStyle = getComputedStyle(stage);
    // Rects include the responsive stage scale; selection styles use local pixels.
    const scaleX = stageRect.width / Number.parseFloat(stageStyle.width);
    const scaleY = stageRect.height / Number.parseFloat(stageStyle.height);
    const rects = [...sources].map((source) => source.getBoundingClientRect());
    const left = Math.min(...rects.map((rect) => rect.left));
    const top = Math.min(...rects.map((rect) => rect.top));
    const right = Math.max(...rects.map((rect) => rect.right));
    const bottom = Math.max(...rects.map((rect) => rect.bottom));
    Object.assign(selection.style, {
      left: `${(left - stageRect.left) / scaleX}px`,
      top: `${(top - stageRect.top) / scaleY}px`,
      width: `${(right - left) / scaleX}px`,
      height: `${(bottom - top) / scaleY}px`,
    });
  };

  if (mode === 'multi') {
    // Observe artwork and canvas, not the selection we resize, to avoid feedback.
    const selectionObserver = new ResizeObserver(syncSelectionBounds);
    selectionObserver.observe(stage);
    sources.forEach((source) => selectionObserver.observe(source, { box: 'border-box' }));
    window.addEventListener('resize', syncSelectionBounds);
    syncSelectionBounds();
  }

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

  const selectSource = () => {
    closeIntentMenu();
    clearTimers();
    stopLibraryLoader();
    workingMark.replaceChildren();
    workingMark.classList.remove('is-done');
    board.removeAttribute('aria-busy');
    stage.dataset.state = 'selected';
    syncSelectionBounds();
    input.value = '';
    submit.disabled = true;
    announce(mode === 'single' ? 'Painting selected. Ask AI is available.' : 'Two paintings selected. Ask AI is available.');
  };

  const openPrompt = () => {
    if (stage.dataset.state !== 'selected') return;
    stage.dataset.state = 'prompt';
    announce(intent === 'generate' ? 'Describe the image you want to generate.' : 'Ask about the selected images in chat.');
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
    // Reuse Interaction A's logo-to-line renderer, starting at the brand mark.
    const workingLogo = document.createElement('canvas');
    workingLogo.className = 'ai-working-logo';
    workingLogo.dataset.workingLogo = '';
    workingLogo.dataset.workingLogoStart = 'logo';
    workingMark.classList.remove('is-done');
    workingMark.replaceChildren(workingLogo);
    // Reveal the generated-content placeholder and deselect in the same frame.
    stage.dataset.state = 'generating';
    board.setAttribute('aria-busy', 'true');
    announce('Generating image. Selection highlight removed.');

    const finishGeneration = () => {
      if (stage.dataset.state !== 'generating') return;
      stopLibraryLoader();
      stage.dataset.state = 'done';
      workingMark.replaceChildren();
      workingMark.classList.add('is-done');
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
      selectSource();
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
    const images = [...sources].map((source) => {
      const image = source.querySelector('img');
      return { src: image.src, alt: image.alt };
    });
    // Send directly to the C-style conversation without overwriting a chat draft.
    if (!window.CanvasChat.send(message, images)) {
      announce('The prompt could not be sent. Your prompt has been kept.');
      return;
    }

    stage.dataset.state = 'selected';
    input.value = '';
    submit.disabled = true;
    window.requestAnimationFrame(() => {
      conversation.scrollTop = conversation.scrollHeight;
      syncSelectionBounds();
      chatInput.focus({ preventScroll: true });
    });
    announce('Prompt and selected images sent to chat.');
  };

  askButton.addEventListener('click', openPrompt);
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
  input.addEventListener('input', () => { submit.disabled = !input.value.trim(); });
  prompt.addEventListener('submit', (event) => {
    event.preventDefault();
    if (intent === 'chat') sendToChat();
    else startGeneration();
  });
  sources.forEach((source) => source.addEventListener('click', selectSource));

  stage.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;
    if (!intentMenu.hidden) {
      event.preventDefault();
      event.stopPropagation();
      closeIntentMenu(true);
      return;
    }
    if (stage.dataset.state === 'prompt') {
      stage.dataset.state = 'selected';
      askButton.focus({ preventScroll: true });
      announce('Prompt closed.');
    }
  });

  announce(mode === 'single' ? 'One painting is selected.' : 'Two paintings are selected as a group.');
})();
