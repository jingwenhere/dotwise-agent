(() => {
  const cuelume = import('https://cdn.jsdelivr.net/npm/cuelume@0.2.2/dist/index.js')
    .catch(() => null);

  const documentSurface = document.getElementById('documentSurface');
  const documentPage = document.getElementById('documentPage');
  const documentWorkspace = document.querySelector('.document-workspace');
  const selectableCopy = document.getElementById('selectableCopy');
  const aiCopyRow = document.getElementById('aiCopyRow');
  const aiCopyContinuation = document.getElementById('aiCopyContinuation');
  const subagentDiarySection = document.getElementById('subagentDiarySection');
  const subagentDiaryCopy = document.getElementById('subagentDiaryCopy');
  const reviewStatus = document.getElementById('reviewStatus');
  const agentPanel = document.querySelector('.agent-panel');
  const agentConversation = document.getElementById('agentConversation');
  const mainAgentTab = document.getElementById('mainAgentTab');
  const subagentPanelTab = document.getElementById('subagentPanelTab');
  const reviewSuggestionCard = document.getElementById('reviewSuggestionCard');
  const reviewSuggestionCount = document.getElementById('reviewSuggestionCount');
  const reviewSuggestionCopy = document.getElementById('reviewSuggestionCopy');
  const sendAllReview = document.getElementById('sendAllReview');
  const closeReviewSuggestion = document.getElementById('closeReviewSuggestion');
  const reviewChatBlock = document.getElementById('reviewChatBlock');

  const mainPrompt = document.getElementById('mainPrompt');
  const mainPromptInput = document.getElementById('mainPromptInput');
  const mainPromptSubmit = mainPrompt.querySelector('.prompt-submit');
  const selectionPrompt = document.getElementById('selectionPrompt');
  const selectionPromptInput = document.getElementById('selectionPromptInput');
  const selectionReview = document.getElementById('selectionReview');
  const selectionReviewCopy = document.getElementById('selectionReviewCopy');
  const confirmSelection = document.getElementById('confirmSelection');
  const revertSelection = document.getElementById('revertSelection');

  const subagentEntry = document.getElementById('subagentEntry');
  const subagentMenu = document.getElementById('subagentMenu');
  const subagentMenuActiveCount = document.getElementById('subagentMenuActiveCount');
  const subagentMenuDoneCount = document.getElementById('subagentMenuDoneCount');
  const subagentMenuActiveList = document.getElementById('subagentMenuActiveList');
  const subagentMenuDoneList = document.getElementById('subagentMenuDoneList');
  const subagentMenuEmptyActive = document.getElementById('subagentMenuEmptyActive');
  const subagentMenuEmptyDone = document.getElementById('subagentMenuEmptyDone');
  const subagentPopover = document.getElementById('subagentPopover');
  const agentCount = document.getElementById('agentCount');
  const activeCount = document.getElementById('activeCount');
  const activeTaskList = document.getElementById('activeTaskList');
  const emptyActive = document.getElementById('emptyActive');
  const doneCount = document.getElementById('doneCount');
  const doneTaskList = document.getElementById('doneTaskList');
  const emptyDone = document.getElementById('emptyDone');
  const subagentListView = document.getElementById('subagentListView');
  const subagentDetailView = document.getElementById('subagentDetailView');
  const subagentBack = document.getElementById('subagentBack');
  const closeSubagentDetail = document.getElementById('closeSubagentDetail');
  const subagentDetailIdentity = document.getElementById('subagentDetailIdentity');
  const subagentRuntime = document.getElementById('subagentRuntime');
  const subagentDetailContent = document.getElementById('subagentDetailContent');

  const interactionGuide = document.getElementById('interactionGuide');
  const toast = document.getElementById('toast');
  const mainAgentResult = 'A useful note helps you capture the signal, connect it to context, and turn it into a next move. It keeps enough texture to make the thought recognizable later, while leaving enough space for new connections to change its meaning. Over time, those small connections become a direction you can act on.';

  let lastDocumentPoint = { x: 390, y: 390 };
  let mainPromptAnchorBlock = null;
  let storedRange = null;
  let selectionMarker = null;
  let generatedPreview = null;
  let selectionAnchor = null;
  let selectionRequest = '';
  let selectionPromptEngaged = false;
  let documentSelectionPointerActive = false;
  let documentSelectionKeyboardActive = false;
  let selectionReviewPositionFrame = 0;
  let selectionRun = 0;
  let toastTimer = null;
  let cancelSelectionStream = null;
  let activeTabSuggestion = null;
  let tabSuggestionTimer = null;
  let highlightTimer = null;
  const subagentTasks = new Map();
  let subagentTaskSequence = 0;
  let latestSubagentTaskId = null;
  let activeSubagentDetailId = null;
  let selectedSubagentTaskId = null;
  let reviewRemaining = 0;
  let pendingReviewSuggestions = [];
  let reviewHighlightTimer = null;
  let activeReviewDiff = null;
  let autoReviewTimer = null;

  const reviewDefinitions = [
    {
      id: 'quote',
      target: document.getElementById('reviewTargetQuote'),
      label: 'Clarity',
      doneTitle: 'The sentence has been revised',
      rationale: 'Tighten the quote so the main idea lands faster.',
      chatSummary: 'I tightened the pull quote so its central idea lands more directly.',
      suggestion: '“A useful note gives an unfinished thought somewhere to go.”',
      diffParts: [
        { type: 'same', text: '“A useful note ' },
        { type: 'delete', text: 'does not preserve a thought. It gives the ' },
        { type: 'insert', text: 'gives an unfinished ' },
        { type: 'same', text: 'thought somewhere to go.”' },
      ],
    },
    {
      id: 'heading',
      target: document.getElementById('reviewTargetHeading'),
      label: 'Structure',
      doneTitle: 'The spelling corrected',
      rationale: 'Make the heading describe both capture and the next action.',
      chatSummary: 'I made the section heading more specific and action-oriented.',
      suggestion: '1. Capture, then connect',
      diffParts: [
        { type: 'same', text: '1. Capture' },
        { type: 'delete', text: ' the dots' },
        { type: 'insert', text: ', then connect' },
      ],
    },
    {
      id: 'lead',
      target: document.getElementById('reviewTargetLead'),
      label: 'Conciseness',
      doneTitle: 'Optimize the statement',
      rationale: 'Remove repetition while preserving the practical guidance.',
      chatSummary: 'I removed repetition from the opening while preserving its practical tone.',
      suggestion: 'Capture first; refine later. Save the fragment before it becomes a polished story, then add context when you return.',
      diffParts: [
        { type: 'delete', text: 'The best capture system is deliberately incomplete. ' },
        { type: 'insert', text: 'Capture first; refine later. ' },
        { type: 'same', text: 'Save the fragment before ' },
        { type: 'delete', text: 'your brain turns it into a polished story; context can come later.' },
        { type: 'insert', text: 'it becomes a polished story, then add context when you return.' },
      ],
    },
  ];

  const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

  function showToast(message) {
    window.clearTimeout(toastTimer);
    toast.textContent = message;
    toast.hidden = false;
    toastTimer = window.setTimeout(() => { toast.hidden = true; }, 2200);
  }

  function dismissGuide() {
    interactionGuide.classList.add('is-dismissed');
  }

  window.setTimeout(dismissGuide, 7000);

  function titleFromPrompt(prompt) {
    const cleaned = prompt.replace(/\s+/g, ' ').trim();
    return cleaned.length > 34 ? `${cleaned.slice(0, 34)}…` : cleaned;
  }

  const subagentAccents = ['violet', 'blue', 'orange', 'mint', 'pink'];

  function elapsedLabel(task) {
    const end = task.completedAt || Date.now();
    const seconds = Math.max(0, Math.floor((end - task.startedAt) / 1000));
    if (seconds < 4) return 'now';
    if (seconds < 60) return `${seconds}s`;
    const minutes = Math.floor(seconds / 60);
    return `${minutes}m ${String(seconds % 60).padStart(2, '0')}s`;
  }

  function completedAgoLabel(task) {
    const seconds = Math.max(0, Math.floor((Date.now() - (task.completedAt || Date.now())) / 1000));
    if (seconds < 4) return 'now';
    if (seconds < 60) return `${seconds}s ago`;
    if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
    return `${Math.floor(seconds / 3600)}h ago`;
  }

  function createWorkingLogoCanvas() {
    const canvas = document.createElement('canvas');
    canvas.className = 'ai-working-logo';
    canvas.dataset.workingLogo = '';
    canvas.setAttribute('role', 'img');
    canvas.setAttribute('aria-label', 'AI working');
    return canvas;
  }

  function createSubagentOrb(task) {
    const orb = document.createElement('span');
    orb.className = `subagent-orb orb-${task.accent || 'violet'}`;
    if (task.state !== 'done') orb.classList.add('is-working');
    if (task.state === 'thinking') orb.classList.add('is-thinking');
    orb.setAttribute('aria-hidden', 'true');
    const fallback = document.createElement('span');
    fallback.className = 'ai-orb-fallback';
    ['ai-orb-base', 'ai-orb-blue', 'ai-orb-green'].forEach((className) => {
      const layer = document.createElement('span');
      layer.className = className;
      fallback.append(layer);
    });
    orb.append(fallback);
    return orb;
  }

  function highlightSubagentTargets(task, closePanel = false) {
    const targets = task.targets.filter((target) => target?.isConnected);
    if (!targets.length) return;
    clearCompletedSubagentHighlight();
    targets.forEach((target) => target.classList.add('subagent-result-highlight'));
    targets[0].scrollIntoView({ behavior: 'smooth', block: 'center' });
    if (closePanel) closeSubagentWorkspace();
    highlightTimer = window.setTimeout(clearCompletedSubagentHighlight, 1800);
  }

  function createTaskRow(task) {
    const row = document.createElement('button');
    row.type = 'button';
    row.className = `task-status${task.state === 'done' ? ' is-done' : ''}`;
    row.dataset.taskId = task.id;
    row.dataset.state = task.state;
    row.classList.toggle('is-selected', selectedSubagentTaskId === task.id || activeSubagentDetailId === task.id);
    row.append(createSubagentOrb(task));

    const copy = document.createElement('div');
    const title = document.createElement('strong');
    title.textContent = task.title;
    const detail = document.createElement('small');
    detail.className = 'subagent-phase';
    const phase = task.state === 'thinking' ? 'Thinking' : task.state === 'working' ? 'Working' : 'Done';
    if (task.state === 'done') {
      detail.textContent = task.detail;
    } else {
      const phaseLabel = document.createElement('span');
      phaseLabel.className = 'subagent-phase-label';
      phaseLabel.textContent = phase;
      phaseLabel.dataset.text = phase;
      if (task.state === 'working') phaseLabel.classList.add('t-shimmer');
      detail.append(phaseLabel, document.createTextNode(` · ${task.detail}`));
    }
    copy.append(title);
    if (task.state !== 'done' || task.detail) copy.append(detail);

    const time = document.createElement('time');
    time.dataset.taskTime = task.id;
    time.textContent = elapsedLabel(task);
    row.append(copy, time);
    row.addEventListener('click', () => {
      highlightSubagentTargets(task);
      openSubagentDetail(task.id);
    });
    return row;
  }

  function createSubagentMenuTask(task, isCurrent = false) {
    const row = document.createElement('button');
    row.type = 'button';
    row.className = `subagent-menu-task${task.state === 'done' ? ' is-done' : ''}${isCurrent ? ' is-current' : ''}`;
    row.dataset.taskId = task.id;
    const main = document.createElement('span');
    main.className = 'subagent-menu-task-main';
    const title = document.createElement('span');
    title.className = 'subagent-menu-task-title';
    title.textContent = task.title;
    const time = document.createElement('time');
    time.dataset.menuTaskTime = task.id;
    time.textContent = task.state === 'done' ? completedAgoLabel(task) : elapsedLabel(task);
    main.append(title, time);
    row.append(main);
    if (task.state !== 'done') {
      const detail = document.createElement('span');
      detail.className = 'subagent-menu-task-detail';
      detail.textContent = task.detail;
      row.append(detail);
    }
    row.addEventListener('click', () => {
      highlightSubagentTargets(task);
      openSubagentDetail(task.id);
    });
    return row;
  }

  function renderSubagentMenu() {
    const tasks = [...subagentTasks.values()];
    const active = tasks.filter((task) => task.state !== 'done').reverse();
    const done = tasks.filter((task) => task.state === 'done').reverse();
    subagentMenuActiveCount.textContent = String(active.length);
    subagentMenuDoneCount.textContent = String(done.length);
    subagentMenuActiveList.replaceChildren(...active.map((task, index) => createSubagentMenuTask(task, index === 0)));
    subagentMenuDoneList.replaceChildren(...done.map((task) => createSubagentMenuTask(task)));
    subagentMenuEmptyActive.hidden = active.length > 0;
    subagentMenuEmptyDone.hidden = done.length > 0;
  }

  function renderSubagentLists() {
    const tasks = [...subagentTasks.values()];
    const active = tasks.filter((task) => task.state !== 'done').reverse();
    const done = tasks.filter((task) => task.state === 'done').reverse();
    activeTaskList.replaceChildren(...active.map(createTaskRow));
    doneTaskList.replaceChildren(...done.map(createTaskRow));
    activeCount.textContent = String(active.length);
    doneCount.textContent = String(done.length);
    emptyActive.hidden = active.length > 0;
    emptyDone.hidden = done.length > 0;
    agentCount.textContent = String(active.length);
    agentCount.hidden = active.length === 0;
    renderSubagentMenu();
  }

  function renderSubagentDetail(task) {
    if (!task) return;
    subagentDetailIdentity.replaceChildren();
    const identity = document.createElement('div');
    identity.className = 'subagent-detail-identity';
    const title = document.createElement('strong');
    title.textContent = task.title;
    identity.append(title);
    subagentDetailIdentity.append(identity);
    const phase = task.state === 'done' ? 'Worked' : task.state === 'thinking' ? 'Thinking' : 'Working';
    subagentRuntime.innerHTML = `${phase} for ${elapsedLabel(task)} <span aria-hidden="true">›</span>`;
    subagentDetailContent.replaceChildren();
    const status = document.createElement('p');
    status.className = 'subagent-detail-status';
    status.textContent = task.state === 'done' && task.detail === 'Completed in the document'
      ? 'Completed in From Dots to Direction'
      : task.detail;
    subagentDetailContent.append(status);
    if (task.state === 'done' && task.resultTitle) {
      const heading = document.createElement('h3');
      heading.textContent = task.resultTitle;
      subagentDetailContent.append(heading);
    }
    if (task.state === 'done' && task.resultText) {
      const result = document.createElement('p');
      result.textContent = task.resultText;
      subagentDetailContent.append(result);
    }
  }

  function syncAgentViewTabs(view) {
    const showSubagents = view === 'subagent';
    subagentPanelTab.hidden = true;
    mainAgentTab.setAttribute('aria-selected', 'true');
    mainAgentTab.tabIndex = 0;
    mainAgentTab.classList.add('is-active');
    subagentPanelTab.setAttribute('aria-selected', 'false');
    subagentPanelTab.tabIndex = -1;
    subagentPanelTab.classList.remove('is-active');
    agentConversation.setAttribute('aria-hidden', String(showSubagents));
  }

  function openSubagentDetail(taskId) {
    const task = subagentTasks.get(taskId);
    if (!task) return;
    activeSubagentDetailId = taskId;
    selectedSubagentTaskId = taskId;
    subagentMenu.hidden = true;
    subagentPopover.hidden = false;
    agentPanel.classList.add('has-subagent-view');
    syncAgentViewTabs('subagent');
    subagentListView.hidden = true;
    subagentDetailView.hidden = false;
    subagentEntry.setAttribute('aria-expanded', 'false');
    renderSubagentDetail(task);
    renderSubagentLists();
  }

  function showSubagentList(taskId = selectedSubagentTaskId) {
    activeSubagentDetailId = null;
    selectedSubagentTaskId = taskId || null;
    subagentDetailView.hidden = true;
    subagentListView.hidden = false;
    renderSubagentLists();
  }

  function openSubagentPage(taskId) {
    openSubagentDetail(taskId || latestSubagentTaskId);
  }

  function closeSubagentWorkspace() {
    subagentPopover.hidden = true;
    agentPanel.classList.remove('has-subagent-view');
    syncAgentViewTabs('main');
    subagentMenu.hidden = true;
    subagentEntry.setAttribute('aria-expanded', 'false');
    activeSubagentDetailId = null;
    selectedSubagentTaskId = null;
  }

  function attachDocumentTaskState(task, target, state, label) {
    if (!(target instanceof Element)) return;
    task.documentMarker?.remove();
    task.documentTarget?.classList.remove('subagent-doc-target', 'is-thinking', 'is-working', 'is-done');
    target.classList.add('subagent-doc-target');
    if (!(task.kind === 'selection-edit' && state === 'done')) {
      target.classList.add(`is-${state}`);
    }
    task.documentTarget = target;
    if (state === 'done') {
      task.documentMarker = null;
      return;
    }
    const marker = document.createElement('span');
    marker.className = `document-subagent-state is-${state}`;
    marker.contentEditable = 'false';
    marker.append(createWorkingLogoCanvas());
    target.prepend(marker);
    task.documentMarker = marker;
    const anchor = task.documentAnchor;
    if (anchor instanceof Element && anchor.isConnected && anchor !== target) {
      const targetRect = target.getBoundingClientRect();
      const anchorRect = anchor.getClientRects()[0] || anchor.getBoundingClientRect();
      const lineHeight = Math.min(anchorRect.height || 16, 24);
      const markerTop = Math.max(0, anchorRect.top - targetRect.top + Math.max(0, (lineHeight - 20) / 2));
      marker.style.top = `${markerTop}px`;
    }
  }

  function clearDocumentTaskState(task, delay = 0) {
    const clear = () => {
      task.documentMarker?.remove();
      task.documentTarget?.classList.remove('subagent-doc-target', 'is-thinking', 'is-working', 'is-done');
      task.documentMarker = null;
    };
    if (delay) window.setTimeout(clear, delay);
    else clear();
  }

  function setSubagentActive(title, detail = 'Preparing the task', config = {}) {
    const id = `subagent-${++subagentTaskSequence}`;
    const task = {
      id,
      kind: config.kind || 'generic',
      title,
      detail,
      state: 'thinking',
      accent: config.accent || subagentAccents[subagentTaskSequence % subagentAccents.length],
      startedAt: Date.now(),
      completedAt: null,
      targets: (Array.isArray(config.targets) ? config.targets : [config.targets]).filter((target) => target instanceof Element),
      resultTitle: config.resultTitle || '',
      resultText: config.resultText || '',
      documentTarget: null,
      documentAnchor: config.documentAnchor instanceof Element ? config.documentAnchor : null,
      documentMarker: null,
      aiBlock: config.aiBlock || null,
      cancelStream: null,
    };
    subagentTasks.set(id, task);
    latestSubagentTaskId = id;
    clearCompletedSubagentHighlight();
    const documentTarget = config.documentTarget === false
      ? null
      : config.documentTarget instanceof Element ? config.documentTarget : task.targets[0];
    if (documentTarget) attachDocumentTaskState(task, documentTarget, 'thinking', 'Thinking');
    renderSubagentLists();
    return id;
  }

  function updateSubagentTask(taskId, updates = {}) {
    const task = subagentTasks.get(taskId);
    if (!task) return null;
    Object.assign(task, updates);
    if (updates.state && task.documentTarget) {
      const label = updates.state === 'thinking' ? 'Thinking' : updates.state === 'working' ? 'Working' : 'Done';
      attachDocumentTaskState(task, task.documentTarget, updates.state, label);
    }
    renderSubagentLists();
    if (activeSubagentDetailId === taskId) renderSubagentDetail(task);
    return task;
  }

  function setSubagentDone(title, detail = 'Completed successfully', targets = [], taskId = null) {
    let task = taskId ? subagentTasks.get(taskId) : null;
    if (!task) {
      task = [...subagentTasks.values()].reverse().find((item) => item.state !== 'done' && item.title === title)
        || subagentTasks.get(latestSubagentTaskId);
    }
    if (!task) return null;
    const wasDone = task.state === 'done';
    task.cancelStream?.();
    task.cancelStream = null;
    task.title = title;
    task.detail = detail;
    task.state = 'done';
    task.completedAt = Date.now();
    task.targets = (Array.isArray(targets) ? targets : [targets]).filter((target) => target instanceof Element);
    const documentTarget = task.aiBlock ? null : task.documentTarget || task.targets[0];
    if (documentTarget) attachDocumentTaskState(task, documentTarget, 'done', 'Done');
    clearDocumentTaskState(task, 1600);
    renderSubagentLists();
    if (activeSubagentDetailId === task.id) renderSubagentDetail(task);
    if (!wasDone) {
      void cuelume.then((module) => module?.play('scan'));
    }
    return task;
  }

  function clearCompletedSubagentHighlight() {
    window.clearTimeout(highlightTimer);
    document.querySelectorAll('.subagent-result-highlight').forEach((target) => {
      target.classList.remove('subagent-result-highlight');
    });
  }

  function hideReviewSuggestion() {
    reviewSuggestionCard.hidden = true;
    agentPanel.classList.remove('has-review-suggestion');
  }

  function clearReviewHighlight() {
    window.clearTimeout(reviewHighlightTimer);
    document.querySelectorAll('.review-target-focus').forEach((target) => target.classList.remove('review-target-focus'));
    document.querySelectorAll('.review-done-card.is-targeted').forEach((card) => card.classList.remove('is-targeted'));
  }

  function restoreActiveReviewDiff() {
    if (!activeReviewDiff) return;
    const { review, button } = activeReviewDiff;
    review.target.textContent = review.state === 'dismissed' ? review.before : review.suggestion;
    review.target.classList.remove('review-inline-diff');
    button.textContent = 'Show changes';
    button.setAttribute('aria-expanded', 'false');
    activeReviewDiff = null;
  }

  function showReviewSuggestion(suggestions) {
    reviewSuggestionCount.textContent = String(suggestions.length);
    reviewSuggestionCopy.textContent = `You've received ${suggestions.length} suggestions from Dotwise.`;
    reviewSuggestionCard.hidden = false;
    agentPanel.classList.add('has-review-suggestion');
  }

  function highlightReviewTarget(review, card) {
    if (!review.target?.isConnected) return;
    clearReviewHighlight();
    review.target.classList.add('review-target-focus');
    card?.classList.add('is-targeted');
    review.target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    reviewHighlightTimer = window.setTimeout(clearReviewHighlight, 2200);
  }

  function showReviewDiffInDocument(review, card, button) {
    if (activeReviewDiff?.review === review) {
      restoreActiveReviewDiff();
      clearReviewHighlight();
      reviewStatus.textContent = `Hidden the ${review.label.toLowerCase()} change.`;
      showToast('Changes hidden');
      return;
    }
    restoreActiveReviewDiff();
    clearReviewHighlight();
    const fragment = document.createDocumentFragment();
    review.diffParts.forEach((part) => {
      const span = document.createElement('span');
      span.className = `review-inline-${part.type}`;
      span.textContent = part.text;
      fragment.append(span);
    });
    review.target.replaceChildren(fragment);
    review.target.classList.add('review-inline-diff');
    card.classList.add('is-targeted');
    button.textContent = 'Hide changes';
    button.setAttribute('aria-expanded', 'true');
    activeReviewDiff = { review, card, button };
    review.target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    reviewStatus.textContent = `Showing the ${review.label.toLowerCase()} change in the document.`;
    showToast('Showing changes in the document');
  }

  function dismissReviewCard(review, card) {
    if (activeReviewDiff?.review === review) restoreActiveReviewDiff();
    review.state = 'dismissed';
    review.target.textContent = review.before;
    card.classList.add('is-dismissed');
    card.querySelector('.review-done-card-title').textContent = 'Change dismissed';
    highlightReviewTarget(review, card);
    showToast('Review change dismissed');
  }

  function createReviewDoneCard(review) {
    const card = document.createElement('article');
    card.className = 'review-done-card';
    card.tabIndex = 0;
    card.dataset.reviewId = review.id;
    card.setAttribute('aria-label', `${review.doneTitle}. Open its document location.`);

    const shell = document.createElement('div');
    shell.className = 'review-done-card-shell';
    const title = document.createElement('strong');
    title.className = 'review-done-card-title';
    title.textContent = review.doneTitle;

    const actions = document.createElement('div');
    actions.className = 'review-done-actions';
    const showChanges = document.createElement('button');
    showChanges.type = 'button';
    showChanges.className = 'show-review-changes';
    showChanges.textContent = 'Show changes';
    showChanges.setAttribute('aria-expanded', 'false');
    const undo = document.createElement('button');
    undo.type = 'button';
    undo.className = 'undo-review-change';
    undo.setAttribute('aria-label', 'Dismiss and revert this change');
    const undoIcon = document.createElement('img');
    undoIcon.src = 'assets/figma/review-undo.svg';
    undoIcon.alt = '';
    undo.append(undoIcon);
    actions.append(showChanges, undo);
    shell.append(title, actions);
    card.append(shell);

    showChanges.addEventListener('click', (event) => {
      event.stopPropagation();
      if (review.state === 'dismissed') return;
      showReviewDiffInDocument(review, card, showChanges);
    });
    undo.addEventListener('click', (event) => {
      event.stopPropagation();
      if (review.state === 'dismissed') return;
      dismissReviewCard(review, card);
    });
    card.addEventListener('click', (event) => {
      if (event.target.closest('button')) return;
      highlightReviewTarget(review, card);
    });
    card.addEventListener('keydown', (event) => {
      if (event.key !== 'Enter' && event.key !== ' ') return;
      event.preventDefault();
      highlightReviewTarget(review, card);
    });
    return card;
  }

  function sendReviewSuggestionsToChat() {
    if (!pendingReviewSuggestions.length) return;
    restoreActiveReviewDiff();
    const sentReviews = pendingReviewSuggestions.map((review) => ({
      ...review,
      before: review.target.textContent.trim(),
      state: 'applied',
    }));
    sentReviews.forEach((review) => { review.target.textContent = review.suggestion; });

    const request = document.createElement('div');
    request.className = 'user-message review-user-message';
    request.textContent = 'Apply all review suggestions';

    const introduction = document.createElement('div');
    introduction.className = 'assistant-message review-assistant-copy';
    const introOpening = document.createElement('p');
    introOpening.textContent = 'I’ve finished reviewing the document. The central idea is strong, so I kept the structure and voice intact.';
    const introDetail = document.createElement('p');
    introDetail.textContent = `I focused on ${sentReviews.length} small changes that improve clarity, flow, and precision:`;
    introduction.append(introOpening, introDetail);

    const changeList = document.createElement('div');
    changeList.className = 'review-change-list';
    sentReviews.forEach((review, index) => {
      const entry = document.createElement('section');
      entry.className = 'review-change-entry';
      const context = document.createElement('p');
      context.className = 'review-change-context';
      context.textContent = `${index + 1}. ${review.chatSummary}`;
      entry.append(context, createReviewDoneCard(review));
      changeList.append(entry);
    });

    const conclusion = document.createElement('div');
    conclusion.className = 'assistant-message review-assistant-copy review-assistant-conclusion';
    const conclusionText = document.createElement('p');
    conclusionText.textContent = 'That’s all I’d change for now. The draft reads more cleanly without losing its reflective tone. You can inspect or undo each edit above.';
    conclusion.append(conclusionText);

    const messageActions = document.createElement('div');
    messageActions.className = 'message-actions review-message-actions';
    [
      ['agent-refresh.svg', 'Regenerate review response'],
      ['agent-thumbs-up.svg', 'Helpful response'],
      ['agent-thumbs-down.svg', 'Unhelpful response'],
      ['agent-copy.svg', 'Copy review response'],
    ].forEach(([icon, label]) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.setAttribute('aria-label', label);
      const image = document.createElement('img');
      image.src = `assets/figma/${icon}`;
      image.alt = '';
      button.append(image);
      button.addEventListener('click', () => showToast(label));
      messageActions.append(button);
    });

    reviewChatBlock.replaceChildren(request, introduction, changeList, conclusion, messageActions);
    reviewChatBlock.hidden = false;
    hideReviewSuggestion();
    pendingReviewSuggestions = [];
    reviewRemaining = 0;
    reviewStatus.textContent = `AI review applied ${sentReviews.length} changes. Use Show changes to inspect each diff in the document.`;
    window.requestAnimationFrame(() => {
      agentConversation.scrollTo({ top: 0, behavior: 'smooth' });
    });
    showToast('Review suggestions sent to Agent Chat');
  }

  function showAutomaticReviewSuggestion() {
    if (!reviewSuggestionCard.hidden || !reviewChatBlock.hidden) return;
    const suggestions = reviewDefinitions.filter(({ target, suggestion }) => target.textContent.trim() !== suggestion.trim());
    if (!suggestions.length) return;
    pendingReviewSuggestions = suggestions;
    reviewRemaining = suggestions.length;
    showReviewSuggestion(suggestions);
    reviewStatus.textContent = `Dotwise found ${suggestions.length} review suggestions.`;
  }

  function placeMainPrompt() {
    const workspaceRect = documentWorkspace.getBoundingClientRect();
    const top = clamp(lastDocumentPoint.y - workspaceRect.top - 28, 342, workspaceRect.height - 72);
    mainPrompt.style.top = `${top}px`;
  }

  function positionSubagentMenu() {
    const shell = document.querySelector('.content-shell');
    if (!shell || subagentMenu.hidden) return;
    const shellRect = shell.getBoundingClientRect();
    const triggerRect = subagentEntry.getBoundingClientRect();
    const menuWidth = Math.min(340, shellRect.width - 16);
    const left = clamp(triggerRect.right - shellRect.left - menuWidth + 10, 8, shellRect.width - menuWidth - 8);
    const top = clamp(triggerRect.bottom - shellRect.top + 6, 44, shellRect.height - 120);
    subagentMenu.style.left = `${left}px`;
    subagentMenu.style.right = 'auto';
    subagentMenu.style.top = `${top}px`;
  }

  function syncMainPromptState() {
    const isReady = Boolean(mainPromptInput.value.trim());
    mainPromptSubmit.disabled = !isReady;
    mainPromptSubmit.classList.toggle('is-ready', isReady);
  }

  function openMainPrompt(anchorBlock = null) {
    if (!selectionPrompt.hidden || !selectionReview.hidden) return;
    mainPromptAnchorBlock = anchorBlock instanceof Element ? anchorBlock : null;
    dismissGuide();
    placeMainPrompt();
    mainPrompt.hidden = false;
    mainPromptInput.value = '';
    syncMainPromptState();
    window.requestAnimationFrame(() => mainPromptInput.focus());
  }

  function closeMainPrompt() {
    mainPrompt.hidden = true;
    mainPromptInput.value = '';
    mainPromptAnchorBlock = null;
    syncMainPromptState();
    documentSurface.focus({ preventScroll: true });
  }

  function readCssTime(variable, fallback) {
    const value = getComputedStyle(document.documentElement).getPropertyValue(variable).trim();
    if (value.endsWith('ms')) return Number.parseFloat(value) || fallback;
    if (value.endsWith('s')) return (Number.parseFloat(value) || fallback / 1000) * 1000;
    return fallback;
  }

  function replayStream(element, text, isCurrent) {
    const timers = [];
    const words = text.match(/\S+\s*/g) || [];
    const fragment = document.createDocumentFragment();
    const spans = words.map((word) => {
      const span = document.createElement('span');
      span.className = 't-stream-w';
      span.textContent = word;
      span.style.transition = 'none';
      fragment.append(span);
      return span;
    });

    element.replaceChildren(fragment);
    void element.offsetWidth;

    const gap = readCssTime('--stream-gap', 60);
    spans.forEach((span, index) => {
      span.style.removeProperty('transition');
      const timer = window.setTimeout(() => {
        if (isCurrent()) span.classList.add('is-in');
      }, index * gap);
      timers.push(timer);
    });

    return () => timers.forEach((timer) => window.clearTimeout(timer));
  }

  function startReasoningStream(block, text, isCurrent) {
    const root = block.copy;
    const viewport = document.createElement('div');
    const scroll = document.createElement('div');
    const transcript = document.createElement('div');
    const paragraph = document.createElement('p');
    viewport.className = 't-reason-viewport';
    scroll.className = 't-reason-scroll';
    transcript.className = 't-reason-text';
    paragraph.textContent = text;
    transcript.append(paragraph);
    scroll.append(transcript);
    viewport.append(scroll);
    root.classList.add('t-reason');
    root.replaceChildren(viewport);

    let intervalId = 0;
    let wrapTimerId = 0;
    let frameId = 0;
    let cancelled = false;

    frameId = window.requestAnimationFrame(() => {
      if (cancelled || !isCurrent()) return;
      const copyHeight = transcript.getBoundingClientRect().height;
      const viewportHeight = viewport.getBoundingClientRect().height;
      if (!copyHeight || copyHeight <= viewportHeight) return;

      const clone = transcript.cloneNode(true);
      clone.setAttribute('aria-hidden', 'true');
      scroll.append(clone);

      const styles = getComputedStyle(document.documentElement);
      const lineHeight = Number.parseFloat(getComputedStyle(paragraph).lineHeight) || 24;
      const lines = Number.parseFloat(styles.getPropertyValue('--reason-lines')) || 2;
      const hold = readCssTime('--reason-hold', 840);
      const step = readCssTime('--reason-step', 500);
      const distance = lineHeight * lines;
      let offset = 0;

      intervalId = window.setInterval(() => {
        if (cancelled || !isCurrent()) return;
        offset += distance;
        scroll.style.transition = 'transform var(--reason-step) var(--reason-ease)';
        scroll.style.transform = `translateY(-${offset}px)`;

        if (offset >= copyHeight) {
          window.clearTimeout(wrapTimerId);
          wrapTimerId = window.setTimeout(() => {
            if (cancelled || !isCurrent()) return;
            offset -= copyHeight;
            scroll.style.transition = 'none';
            scroll.style.transform = `translateY(-${offset}px)`;
            void scroll.offsetHeight;
          }, step);
        }
      }, hold);
    });

    return () => {
      cancelled = true;
      window.cancelAnimationFrame(frameId);
      window.clearInterval(intervalId);
      window.clearTimeout(wrapTimerId);
    };
  }

  function animateAiWorkingBlockResize(block, shouldExpand) {
    if (!block?.container?.isConnected) return;
    block.cancelResize?.();

    const { container, card, controls, logoButton } = block;
    const startingHeight = card.getBoundingClientRect().height;
    card.style.height = `${startingHeight}px`;
    controls.hidden = false;
    container.classList.toggle('is-expanded', shouldExpand);
    logoButton.setAttribute('aria-expanded', String(shouldExpand));
    logoButton.setAttribute('aria-label', shouldExpand ? 'Collapse generated content' : 'Expand generated content');

    const targetHeight = shouldExpand ? card.scrollHeight : 82;
    let frameId = 0;
    let fallbackId = 0;
    let finished = false;

    const clearListeners = () => {
      card.removeEventListener('transitionend', handleTransitionEnd);
      window.cancelAnimationFrame(frameId);
      window.clearTimeout(fallbackId);
      block.cancelResize = null;
    };

    const finish = () => {
      if (finished) return;
      finished = true;
      clearListeners();
      card.style.removeProperty('height');
      if (!shouldExpand) controls.hidden = true;
    };

    const handleTransitionEnd = (event) => {
      if (event.target === card && event.propertyName === 'height') finish();
    };

    block.cancelResize = () => {
      if (finished) return;
      finished = true;
      clearListeners();
    };

    card.addEventListener('transitionend', handleTransitionEnd);
    void card.offsetHeight;
    frameId = window.requestAnimationFrame(() => {
      card.style.height = `${targetHeight}px`;
      if (shouldExpand) container.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
    fallbackId = window.setTimeout(finish, readCssTime('--resize-dur', 300) + 80);
  }

  function createAiWorkingBlock(kind) {
    const container = document.createElement('section');
    container.className = `ai-working-block ai-working-block-${kind}`;
    container.dataset.state = 'thinking';
    container.contentEditable = 'false';

    const logoButton = document.createElement('button');
    logoButton.type = 'button';
    logoButton.className = 'ai-working-block-logo';
    logoButton.disabled = true;
    logoButton.setAttribute('aria-label', 'AI is working');
    logoButton.setAttribute('aria-expanded', 'false');
    logoButton.append(createWorkingLogoCanvas());

    const card = document.createElement('div');
    card.className = 'ai-working-block-card t-resize';
    const copy = document.createElement('div');
    copy.className = 'ai-working-block-copy';
    card.append(copy);

    const controls = document.createElement('div');
    controls.className = 'ai-working-block-controls';
    controls.hidden = true;

    const actions = document.createElement('div');
    actions.className = 'ai-working-block-actions';
    const chat = document.createElement('button');
    chat.type = 'button';
    chat.className = 'ai-working-block-chat';
    chat.innerHTML = '<img src="assets/figma/selection-chat.svg" alt=""><span>Chat</span>';
    const divider = document.createElement('span');
    divider.className = 'ai-working-block-divider';
    const dismiss = document.createElement('button');
    dismiss.type = 'button';
    dismiss.className = 'ai-working-block-dismiss';
    dismiss.setAttribute('aria-label', 'Discard generated content');
    dismiss.innerHTML = '<img src="assets/figma/selection-undo.svg" alt="">';
    const accept = document.createElement('button');
    accept.type = 'button';
    accept.className = 'ai-working-block-accept';
    accept.setAttribute('aria-label', 'Insert generated content');
    accept.innerHTML = '<img src="assets/figma/ai-block-check.svg" alt="">';
    actions.append(chat, divider, dismiss, accept);
    controls.append(actions);
    card.append(controls);
    container.append(logoButton, card);

    const block = { container, logoButton, card, copy, controls, chat, dismiss, accept, text: '', taskId: null };
    logoButton.addEventListener('click', () => {
      if (container.dataset.state !== 'done') return;
      animateAiWorkingBlockResize(block, !container.classList.contains('is-expanded'));
    });
    chat.addEventListener('click', () => {
      closeSubagentWorkspace();
      showToast('Continue this result in Agent Chat');
    });
    dismiss.addEventListener('click', () => dismissAiWorkingBlock(block));
    accept.addEventListener('click', () => acceptAiWorkingBlock(block));
    return block;
  }

  function setAiWorkingBlockState(block, state, text = block.text) {
    if (!block?.container?.isConnected) return;
    block.text = text;
    block.container.dataset.state = state;
    if (state === 'done') {
      block.copy.classList.remove('t-reason');
      block.copy.textContent = text.replace(/\n\s*\n/g, '\n');
      block.logoButton.replaceChildren();
      const logo = document.createElement('img');
      logo.src = 'assets/figma/agent-document.svg';
      logo.alt = '';
      block.logoButton.append(logo);
      block.logoButton.disabled = false;
      block.logoButton.setAttribute('aria-label', 'Expand generated content');
      block.logoButton.setAttribute('aria-expanded', 'false');
    }
  }

  function createInsertedParagraphs(text) {
    return text.split(/\n\s*\n/).filter(Boolean).map((part) => {
      const paragraph = document.createElement('p');
      paragraph.textContent = part.trim();
      return paragraph;
    });
  }

  function acceptAiWorkingBlock(block) {
    if (!block?.container?.isConnected || block.container.dataset.state !== 'done') return;
    block.cancelResize?.();
    const task = subagentTasks.get(block.taskId);
    const paragraphs = createInsertedParagraphs(block.text);
    if (!paragraphs.length) return;
    const fragment = document.createDocumentFragment();
    paragraphs.forEach((paragraph) => fragment.append(paragraph));
    block.container.replaceWith(fragment);
    if (task) {
      task.detail = 'Completed in the document';
      task.targets = paragraphs;
      task.documentTarget = paragraphs[0];
      task.aiBlock = null;
      renderSubagentLists();
      if (activeSubagentDetailId === task.id) renderSubagentDetail(task);
    }
    placeCaretAfter(paragraphs.at(-1));
    showToast('AI content inserted into the document');
  }

  function dismissAiWorkingBlock(block) {
    if (!block?.container?.isConnected) return;
    block.cancelResize?.();
    const task = subagentTasks.get(block.taskId);
    block.container.remove();
    if (task) {
      task.cancelStream?.();
      task.cancelStream = null;
      task.detail = 'Dismissed';
      task.targets = [];
      task.documentTarget = null;
      task.aiBlock = null;
      renderSubagentLists();
      if (activeSubagentDetailId === task.id) renderSubagentDetail(task);
    }
    documentPage.focus({ preventScroll: true });
    showToast('AI content dismissed');
  }

  const diaryResult = `Today felt less like a sequence of finished events and more like a collection of small signals. A phrase from the morning meeting stayed with me, then resurfaced while I was walking home. I wrote it down before I could make it sound more certain than it really was.\n\nBy evening, the fragments had started to connect: the unfinished sketch, the question in the margin, and the conversation I almost forgot. None of them is an answer yet, but together they point toward a calmer, more deliberate next step.`;
  const grammarResult = 'The best capture system is deliberately incomplete. Save the fragment before polishing it; you can add context later.';

  const demoTaskDefinitions = {
    diary: {
      title: 'Write a diary',
      accent: 'blue',
      thinkingDetail: 'Collecting moments from the day',
      workingDetail: 'Drafting a reflective diary entry',
      resultTitle: 'Tuesday evening notes',
      resultText: diaryResult,
      insertText: diaryResult,
      target: () => subagentDiarySection,
      anchor: () => subagentDiaryCopy,
      duration: 7200,
    },
    summary: {
      title: 'Expand the summary',
      accent: 'orange',
      thinkingDetail: 'Reading the document structure',
      workingDetail: 'Expanding the opening summary',
      resultTitle: 'Expanded summary',
      resultText: mainAgentResult,
      insertText: mainAgentResult,
      target: () => aiCopyRow,
      anchor: () => aiCopyContinuation,
      duration: 8000,
    },
    grammar: {
      title: 'Check grammar',
      accent: 'pink',
      thinkingDetail: 'Scanning syntax and sentence flow',
      workingDetail: 'Refining grammar and sentence flow',
      resultTitle: 'Grammar check complete',
      resultText: 'Refined the lead sentence for clarity and corrected its sentence flow.',
      insertText: grammarResult,
      target: () => document.getElementById('reviewTargetLead'),
      anchor: () => document.getElementById('reviewTargetLead'),
      duration: 6600,
    },
  };

  function detectDemoTasks(prompt) {
    const normalized = prompt.toLowerCase();
    const matches = [];
    if (/日记|diary|journal/.test(normalized)) matches.push('diary');
    if (/摘要|summary|abstract|扩写|expand/.test(normalized)) matches.push('summary');
    if (/语病|语法|grammar|proofread|校对/.test(normalized)) matches.push('grammar');
    if (/同时|三个|全部|all three|all tasks/.test(normalized) && matches.length < 2) {
      return ['diary', 'summary', 'grammar'];
    }
    return matches.length ? [...new Set(matches)] : ['summary'];
  }

  function startDemoSubagent(kind, customTitle = '', insertionTarget = null) {
    const definition = demoTaskDefinitions[kind];
    if (!definition) return null;
    const existing = [...subagentTasks.values()].find((task) => task.kind === kind && task.state !== 'done');
    if (existing) {
      showToast(`${existing.title} is already working`);
      return existing.id;
    }

    const isBlockResult = Boolean(insertionTarget?.container?.classList.contains('ai-working-block'));
    const target = insertionTarget?.container || definition.target();
    const outputTarget = insertionTarget?.copy || (
      kind === 'summary' ? aiCopyContinuation : kind === 'diary' ? subagentDiaryCopy : target
    );
    const outputText = definition.insertText || definition.resultText;
    if (kind === 'diary' && !insertionTarget) subagentDiarySection.hidden = false;
    const taskId = setSubagentActive(customTitle || definition.title, definition.thinkingDetail, {
      kind,
      accent: definition.accent,
      targets: isBlockResult ? target : outputTarget,
      documentTarget: isBlockResult ? false : target,
      documentAnchor: insertionTarget?.copy || definition.anchor?.() || target,
      resultTitle: definition.resultTitle,
      resultText: definition.resultText,
      aiBlock: isBlockResult ? insertionTarget : null,
    });
    if (isBlockResult) insertionTarget.taskId = taskId;

    window.setTimeout(() => {
      const task = subagentTasks.get(taskId);
      if (!task || task.state === 'done') return;
      updateSubagentTask(taskId, { state: 'working', detail: definition.workingDetail });
      if (isBlockResult) {
        setAiWorkingBlockState(insertionTarget, 'working', outputText);
        task.cancelStream = startReasoningStream(insertionTarget, outputText, () => task.state === 'working');
      } else if (insertionTarget) {
        target.classList.add('is-working');
        task.cancelStream = replayStream(outputTarget, outputText, () => task.state === 'working');
      } else if (kind === 'summary') {
        aiCopyRow.classList.add('is-working');
        task.cancelStream = replayStream(aiCopyContinuation, mainAgentResult, () => task.state === 'working');
      } else if (kind === 'diary') {
        task.cancelStream = replayStream(subagentDiaryCopy, diaryResult, () => task.state === 'working');
      }
    }, 450);

    window.setTimeout(() => {
      const task = subagentTasks.get(taskId);
      if (!task || task.state === 'done') return;
      task.cancelStream?.();
      task.cancelStream = null;
      if (isBlockResult) {
        setAiWorkingBlockState(insertionTarget, 'done', outputText);
      } else if (insertionTarget) {
        outputTarget.textContent = outputText;
        target.classList.remove('is-working');
        target.classList.add('is-done');
      } else if (kind === 'summary') {
        aiCopyContinuation.textContent = mainAgentResult;
        aiCopyRow.classList.remove('is-working');
        aiCopyRow.classList.add('is-done');
      } else if (kind === 'diary') {
        subagentDiaryCopy.textContent = diaryResult;
      } else if (kind === 'grammar') {
        target.textContent = grammarResult;
      }
      setSubagentDone(
        task.title,
        isBlockResult ? 'Waiting for your confirmation' : 'Completed in the document',
        isBlockResult ? target : insertionTarget ? outputTarget : target,
        taskId,
      );
      showToast(`${task.title} finished`);
    }, definition.duration);
    return taskId;
  }

  function createAnchoredTaskTargets(kinds, anchorBlock) {
    const targets = new Map();
    if (!(anchorBlock instanceof Element) || !anchorBlock.isConnected) return targets;

    const fragment = document.createDocumentFragment();
    kinds.forEach((kind) => {
      const block = createAiWorkingBlock(kind);
      fragment.append(block.container);
      targets.set(kind, block);
    });
    anchorBlock.replaceWith(fragment);
    return targets;
  }

  function placeCaretAfter(element) {
    if (!(element instanceof Element) || !element.isConnected) return;
    const range = document.createRange();
    range.setStartAfter(element);
    range.collapse(true);
    const selection = window.getSelection();
    selection?.removeAllRanges();
    selection?.addRange(range);
    documentPage.focus({ preventScroll: true });
  }

  function runMainAgent(prompt) {
    const anchorBlock = mainPromptAnchorBlock?.isConnected ? mainPromptAnchorBlock : null;
    mainPromptAnchorBlock = null;
    mainPrompt.hidden = true;
    mainPromptInput.value = '';
    syncMainPromptState();
    const kinds = detectDemoTasks(prompt);
    const anchoredTargets = createAnchoredTaskTargets(kinds, anchorBlock);
    kinds.forEach((kind) => startDemoSubagent(
      kind,
      kinds.length === 1 && kind === 'summary' ? titleFromPrompt(prompt) : '',
      anchoredTargets.get(kind) || null,
    ));
    subagentMenu.hidden = true;
    subagentEntry.setAttribute('aria-expanded', 'false');
    const lastAnchoredTarget = [...anchoredTargets.values()].at(-1)?.container;
    if (lastAnchoredTarget) placeCaretAfter(lastAnchoredTarget);
    else documentSurface.focus({ preventScroll: true });
    showToast(kinds.length > 1 ? `${kinds.length} subagents started` : 'Subagent started');
  }

  function positionFloating(element, viewportRect, preferredWidth) {
    const workspaceRect = documentWorkspace.getBoundingClientRect();
    const width = Math.min(preferredWidth, workspaceRect.width - 32);
    const left = clamp(viewportRect.left - workspaceRect.left + viewportRect.width / 2 - width / 2, 16, workspaceRect.width - width - 16);
    const top = clamp(viewportRect.bottom - workspaceRect.top + 8, 332, workspaceRect.height - 52);
    element.style.left = `${left}px`;
    element.style.top = `${top}px`;
    element.style.width = `${width}px`;
  }

  function positionSelectionReview() {
    if (selectionReview.hidden || !generatedPreview?.isConnected) return;
    const targetRect = generatedPreview.getBoundingClientRect();
    const workspaceRect = documentWorkspace.getBoundingClientRect();
    const scrollerRect = documentSurface.getBoundingClientRect();
    const width = Math.min(457, workspaceRect.width - 32);
    const left = clamp(
      targetRect.left - workspaceRect.left + targetRect.width / 2 - width / 2,
      16,
      workspaceRect.width - width - 16,
    );
    const preferredTop = targetRect.bottom - workspaceRect.top + 8;
    const visibleTop = scrollerRect.top - workspaceRect.top + 8;
    const visibleBottom = scrollerRect.bottom - workspaceRect.top - 48;
    selectionReview.style.left = `${left}px`;
    selectionReview.style.top = `${clamp(preferredTop, visibleTop, visibleBottom)}px`;
    selectionReview.style.width = `${width}px`;
    selectionReview.classList.toggle(
      'is-anchor-outside',
      targetRect.bottom < scrollerRect.top || targetRect.top > scrollerRect.bottom,
    );
  }

  function scheduleSelectionReviewPosition() {
    window.cancelAnimationFrame(selectionReviewPositionFrame);
    selectionReviewPositionFrame = window.requestAnimationFrame(positionSelectionReview);
  }

  function selectionBelongsToDocument(range) {
    const ancestor = range.commonAncestorContainer.nodeType === Node.ELEMENT_NODE
      ? range.commonAncestorContainer
      : range.commonAncestorContainer.parentElement;
    return ancestor && documentPage.contains(ancestor) && !ancestor.closest?.('[contenteditable="false"]');
  }

  function detectSelection() {
    if (!mainPrompt.hidden || !selectionReview.hidden) return;
    if (selectionPromptEngaged) return;
    if (document.activeElement === selectionPromptInput) return;

    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0 || selection.isCollapsed) {
      return;
    }

    const text = selection.toString().trim();
    if (text.length < 2) return;
    const range = selection.getRangeAt(0);
    if (!selectionBelongsToDocument(range)) return;

    const rect = range.getBoundingClientRect();
    if (!rect.width && !rect.height) return;
    if (selectionMarker && !generatedPreview) unwrapMarker();
    storedRange = range.cloneRange();
    selectionRequest = text;
    selectionMarker = markStoredSelection();
    selectionAnchor = selectionMarker;
    window.getSelection()?.removeAllRanges();
    selectionPromptInput.value = '';
    selectionPrompt.hidden = false;
    positionFloating(selectionPrompt, rect, 375);
  }

  function scheduleSelectionDetection(delay = 140) {
    window.clearTimeout(detectSelection.timer);
    detectSelection.timer = window.setTimeout(detectSelection, delay);
  }

  function unwrapMarker() {
    if (!selectionMarker) return;
    if (selectionMarker.matches('.agent-selection') && selectionMarker.parentNode) {
      selectionMarker.replaceWith(...selectionMarker.childNodes);
    } else {
      selectionMarker.classList.remove('agent-selection', 'is-working');
    }
    selectionMarker = null;
  }

  function markStoredSelection(isWorking = false) {
    if (!storedRange) return null;
    const marker = document.createElement('span');
    marker.className = `agent-selection${isWorking ? ' is-working' : ''}`;
    try {
      storedRange.surroundContents(marker);
      return marker;
    } catch (error) {
      const startElement = storedRange.startContainer.nodeType === Node.ELEMENT_NODE
        ? storedRange.startContainer
        : storedRange.startContainer.parentElement;
      const endElement = storedRange.endContainer.nodeType === Node.ELEMENT_NODE
        ? storedRange.endContainer
        : storedRange.endContainer.parentElement;
      const startBlock = startElement?.closest('p, blockquote, li, h1, h2');
      const endBlock = endElement?.closest('p, blockquote, li, h1, h2');
      if (startBlock && startBlock === endBlock) {
        try {
          marker.append(storedRange.extractContents());
          storedRange.insertNode(marker);
          return marker;
        } catch (rangeError) {
          // Fall back to block highlighting when the browser cannot extract the range.
        }
      }
      const fallback = startBlock;
      if (fallback && documentPage.contains(fallback)) {
        fallback.classList.add('agent-selection');
        fallback.classList.toggle('is-working', isWorking);
        return fallback;
      }
      return null;
    }
  }

  function generateSelectionText(request) {
    const lower = request.toLowerCase();
    if (lower.includes('short') || lower.includes('concise')) {
      return ' It captures the signal and gives the idea a clear next step.';
    }
    if (lower.includes('中文')) {
      return ' 它把零散的信号连接到具体语境中，让尚未成形的想法获得继续生长的方向。';
    }
    return ' The best capture system is deliberately incomplete. Save the fragment before your brain turns it into a polished story, then return when a new connection gives it direction.';
  }

  function beginSelectionEdit(request) {
    const runId = ++selectionRun;
    const completionText = generateSelectionText(request);
    const taskTitle = titleFromPrompt(request) || 'Expand the selected text';
    selectionPrompt.hidden = true;
    selectionMarker = selectionMarker?.isConnected ? selectionMarker : markStoredSelection();
    selectionMarker?.classList.add('is-working');
    selectionAnchor = selectionMarker || selectableCopy;
    window.getSelection()?.removeAllRanges();

    generatedPreview = document.createElement('span');
    generatedPreview.className = 'generated-preview is-working t-stream';
    generatedPreview.contentEditable = 'false';
    if (selectionMarker && selectionMarker.matches('span.agent-selection')) {
      selectionMarker.insertAdjacentElement('afterend', generatedPreview);
    } else {
      selectionAnchor.append(generatedPreview);
    }
    cancelSelectionStream?.();
    cancelSelectionStream = replayStream(generatedPreview, completionText, () => runId === selectionRun);
    const selectionStateTarget = (selectionMarker?.matches?.('p, blockquote, li, h1, h2') ? selectionMarker : selectionMarker?.closest?.('p, blockquote, li, h1, h2'))
      || (selectionAnchor?.matches?.('p, blockquote, li, h1, h2') ? selectionAnchor : selectionAnchor?.closest?.('p, blockquote, li, h1, h2'));
    const taskId = setSubagentActive(taskTitle, 'Understanding the selected passage', {
      kind: 'selection-edit',
      accent: 'violet',
      targets: generatedPreview,
      documentTarget: selectionStateTarget,
      documentAnchor: selectionMarker || selectionAnchor,
      resultTitle: 'Selected text updated',
      resultText: completionText.trim(),
    });

    window.setTimeout(() => {
      if (runId !== selectionRun) return;
      updateSubagentTask(taskId, { state: 'working', detail: 'Writing and checking the edit' });
    }, 700);

    window.setTimeout(() => {
      if (runId !== selectionRun) return;
      cancelSelectionStream?.();
      cancelSelectionStream = null;
      generatedPreview.textContent = completionText;
      generatedPreview.classList.remove('is-working');
      selectionMarker?.classList.remove('is-working');
      selectionReviewCopy.textContent = "I've finished updating the content.";
      selectionReview.hidden = false;
      positionSelectionReview();
      setSubagentDone(taskTitle, 'Waiting for your confirmation', generatedPreview, taskId);
    }, 2200);
  }

  function clearSelectionReview() {
    cancelSelectionStream?.();
    cancelSelectionStream = null;
    window.cancelAnimationFrame(selectionReviewPositionFrame);
    selectionReview.hidden = true;
    selectionReview.classList.remove('is-anchor-outside');
    storedRange = null;
    selectionAnchor = null;
    selectionRequest = '';
  }

  function acceptSelectionEdit() {
    if (!generatedPreview) return;
    generatedPreview.classList.add('accepted');
    generatedPreview.classList.remove('t-stream');
    generatedPreview.removeAttribute('contenteditable');
    unwrapMarker();
    generatedPreview = null;
    clearSelectionReview();
    showToast('AI edit added to the document');
  }

  function revertSelectionEdit() {
    selectionRun += 1;
    generatedPreview?.remove();
    generatedPreview = null;
    unwrapMarker();
    clearSelectionReview();
    showToast('AI edit reverted');
  }

  function chooseSuggestion(text) {
    const normalized = text.toLowerCase().replace(/[‘’]/g, "'").trimEnd();
    if (/how'?s the$/.test(normalized)) return ' weather today?';
    if (/\bidea$/.test(normalized)) return ' rarely arrives complete; follow the signal until it finds a useful direction.';
    if (/\bnote$/.test(normalized)) return ' can turn a fragment into a direction.';
    if (/\bquestion$/.test(normalized)) return ' can become a map when you keep enough context to return to it.';
    const words = normalized.match(/[\p{L}\p{N}']+/gu) || [];
    return words.length >= 2 ? ' — then let the next connection give it direction.' : '';
  }

  function removeTabSuggestion() {
    window.clearTimeout(tabSuggestionTimer);
    tabSuggestionTimer = null;
    activeTabSuggestion?.remove();
    activeTabSuggestion = null;
  }

  function currentEditableCaret() {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0 || !selection.isCollapsed) return null;
    const range = selection.getRangeAt(0);
    const container = range.startContainer.nodeType === Node.ELEMENT_NODE
      ? range.startContainer
      : range.startContainer.parentElement;
    if (!container || !documentPage.contains(container) || container.closest?.('[contenteditable="false"]')) return null;
    const block = container.closest?.('p, blockquote, li, h1, h2, figcaption');
    if (!block) return null;

    const before = document.createRange();
    before.selectNodeContents(block);
    before.setEnd(range.startContainer, range.startOffset);
    const after = document.createRange();
    after.selectNodeContents(block);
    after.setStart(range.startContainer, range.startOffset);
    if (after.toString().trim()) return null;
    return { range: range.cloneRange(), text: before.toString().replace(/[\n\r]+/g, ' ') };
  }

  function showTabSuggestion() {
    removeTabSuggestion();
    const caret = currentEditableCaret();
    if (!caret) return;
    const completion = chooseSuggestion(caret.text);
    if (!completion) return;

    const suggestion = document.createElement('span');
    suggestion.className = 'ai-tab-suggestion';
    suggestion.contentEditable = 'false';
    suggestion.dataset.completion = completion;
    const copy = document.createElement('span');
    copy.className = 'ai-tab-copy';
    copy.textContent = completion;
    const hint = document.createElement('kbd');
    hint.textContent = 'Tab';
    suggestion.append(copy, hint);
    caret.range.insertNode(suggestion);
    activeTabSuggestion = suggestion;

    const selection = window.getSelection();
    const restored = document.createRange();
    restored.setStartBefore(suggestion);
    restored.collapse(true);
    selection.removeAllRanges();
    selection.addRange(restored);
  }

  function scheduleTabSuggestion() {
    window.clearTimeout(tabSuggestionTimer);
    tabSuggestionTimer = window.setTimeout(showTabSuggestion, 180);
  }

  function acceptTabSuggestion() {
    if (!activeTabSuggestion) return false;
    const textNode = document.createTextNode(activeTabSuggestion.dataset.completion || '');
    activeTabSuggestion.replaceWith(textNode);
    activeTabSuggestion = null;
    const range = document.createRange();
    range.setStartAfter(textNode);
    range.collapse(true);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    showToast('AI completion accepted');
    return true;
  }

  documentSurface.addEventListener('pointerdown', (event) => {
    lastDocumentPoint = { x: event.clientX, y: event.clientY };
    if (event.target === documentSurface) {
      documentSurface.focus({ preventScroll: true });
    }
  });

  documentSurface.addEventListener('click', (event) => {
    const selection = window.getSelection();
    const isCollapsed = !selection || selection.isCollapsed;

    if (event.target === documentSurface && isCollapsed) {
      documentSurface.focus({ preventScroll: true });
    }

    if (documentPage.contains(event.target) && isCollapsed && !selectionPrompt.hidden && storedRange) {
      selectionPrompt.hidden = true;
      unwrapMarker();
      storedRange = null;
      selectionAnchor = null;
    }
  });

  function emptyEditableLine(selection) {
    if (!selection || selection.rangeCount === 0 || !selection.isCollapsed) return null;
    const range = selection.getRangeAt(0);
    const container = range.startContainer.nodeType === Node.ELEMENT_NODE
      ? range.startContainer
      : range.startContainer.parentElement;
    if (!container || !documentPage.contains(container) || container.closest?.('[contenteditable="false"]')) return null;

    let block = container.closest?.('p, blockquote, li, h1, h2, div:not([class])');
    if (!block && container === documentPage) {
      const beforeCaret = container.childNodes[Math.max(0, range.startOffset - 1)];
      const afterCaret = container.childNodes[range.startOffset];
      block = [beforeCaret, afterCaret]
        .map((node) => node?.nodeType === Node.ELEMENT_NODE ? node : node?.parentElement)
        .find((node) => node?.matches?.('p, blockquote, li, h1, h2, div:not([class])')) || null;
    }
    if (!block || block.textContent.replace(/\u200b/g, '').trim()) return null;
    if (block.querySelector('img, button, iframe, figure, ul, ol, hr')) return null;
    return { range, block };
  }

  function rememberCaretPoint({ range, block }) {
    const rect = range.getClientRects()[0] || block.getBoundingClientRect();
    if (!rect) return;
    lastDocumentPoint = {
      x: rect.left || block.getBoundingClientRect().left,
      y: rect.bottom || block.getBoundingClientRect().bottom,
    };
  }

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Shift' && (event.target === documentPage || documentPage.contains(event.target))) {
      documentSelectionKeyboardActive = true;
    }

    if (event.key === 'Escape') {
      if (!mainPrompt.hidden) closeMainPrompt();
      if (!selectionPrompt.hidden) {
        selectionPrompt.hidden = true;
        unwrapMarker();
        storedRange = null;
        selectionAnchor = null;
      }
      if (!subagentMenu.hidden) {
        subagentMenu.hidden = true;
        subagentEntry.setAttribute('aria-expanded', 'false');
      } else if (!subagentPopover.hidden) {
        closeSubagentWorkspace();
      }
      return;
    }

    const target = event.target;
    const isTypingTarget = target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement || target?.isContentEditable;
    const selection = window.getSelection();
    const hasSelection = selection && !selection.isCollapsed && selection.toString().trim();
    const inDocument = target === documentSurface || documentSurface.contains(target);
    const emptyLine = isTypingTarget ? emptyEditableLine(selection) : null;
    const canSummonAgent = !isTypingTarget || Boolean(emptyLine);
    if (event.code === 'Space' && inDocument && canSummonAgent && !hasSelection && mainPrompt.hidden) {
      event.preventDefault();
      if (emptyLine) rememberCaretPoint(emptyLine);
      openMainPrompt(emptyLine?.block || null);
    }
  });

  mainPrompt.addEventListener('submit', (event) => {
    event.preventDefault();
    const prompt = mainPromptInput.value.trim();
    if (!prompt) {
      mainPromptInput.focus();
      return;
    }
    runMainAgent(prompt);
  });

  mainPromptInput.addEventListener('input', syncMainPromptState);

  selectionPrompt.addEventListener('submit', (event) => {
    event.preventDefault();
    const request = selectionPromptInput.value.trim();
    if (!request) {
      selectionPromptInput.focus();
      return;
    }
    beginSelectionEdit(request);
  });

  selectionPrompt.addEventListener('pointerdown', () => {
    selectionPromptEngaged = true;
    window.setTimeout(() => { selectionPromptEngaged = false; }, 180);
  });

  confirmSelection.addEventListener('click', acceptSelectionEdit);
  revertSelection.addEventListener('click', revertSelectionEdit);

  document.addEventListener('selectionchange', () => {
    if (documentSelectionPointerActive || documentSelectionKeyboardActive) return;
    scheduleSelectionDetection();
  });

  document.addEventListener('keyup', (event) => {
    if (event.key !== 'Shift' || !documentSelectionKeyboardActive) return;
    documentSelectionKeyboardActive = false;
    scheduleSelectionDetection(0);
  });

  sendAllReview.addEventListener('click', sendReviewSuggestionsToChat);
  closeReviewSuggestion.addEventListener('click', () => {
    hideReviewSuggestion();
    reviewStatus.textContent = `${reviewRemaining} review suggestions are waiting.`;
  });

  documentPage.addEventListener('pointerdown', (event) => {
    if (event.isPrimary) documentSelectionPointerActive = true;
    removeTabSuggestion();
  });

  const finishDocumentSelection = () => {
    if (!documentSelectionPointerActive) return;
    documentSelectionPointerActive = false;
    scheduleSelectionDetection(0);
  };

  document.addEventListener('pointerup', finishDocumentSelection, true);
  document.addEventListener('pointercancel', finishDocumentSelection, true);

  documentPage.addEventListener('beforeinput', () => {
    removeTabSuggestion();
    if (!selectionPrompt.hidden) {
      selectionPrompt.hidden = true;
      unwrapMarker();
      storedRange = null;
      selectionAnchor = null;
    }
  });

  documentPage.addEventListener('input', () => {
    dismissGuide();
    scheduleTabSuggestion();
  });

  documentPage.addEventListener('keydown', (event) => {
    if (event.key === 'Tab' && activeTabSuggestion) {
      event.preventDefault();
      acceptTabSuggestion();
      return;
    }
    if (event.key !== 'Shift' && event.key !== 'Control' && event.key !== 'Alt' && event.key !== 'Meta') {
      removeTabSuggestion();
    }
  });

  subagentEntry.addEventListener('click', (event) => {
    event.stopPropagation();
    const willOpen = subagentMenu.hidden;
    if (willOpen) {
      renderSubagentMenu();
      subagentMenu.hidden = false;
      subagentEntry.setAttribute('aria-expanded', 'true');
      positionSubagentMenu();
    } else {
      subagentMenu.hidden = true;
      subagentEntry.setAttribute('aria-expanded', 'false');
    }
    dismissGuide();
  });

  window.addEventListener('resize', positionSubagentMenu);
  window.addEventListener('resize', scheduleSelectionReviewPosition);
  documentSurface.addEventListener('scroll', scheduleSelectionReviewPosition, { passive: true });

  mainAgentTab.addEventListener('click', () => {
    closeSubagentWorkspace();
    mainAgentTab.focus({ preventScroll: true });
  });

  subagentBack.addEventListener('click', closeSubagentWorkspace);
  closeSubagentDetail?.addEventListener('click', closeSubagentWorkspace);

  document.addEventListener('pointerdown', (event) => {
    if (!subagentMenu.hidden && !subagentMenu.contains(event.target) && !subagentEntry.contains(event.target)) {
      subagentMenu.hidden = true;
      subagentEntry.setAttribute('aria-expanded', 'false');
    }
  });

  document.getElementById('chatComposer').addEventListener('submit', (event) => {
    event.preventDefault();
    showToast('Demo composer is ready');
  });

  document.querySelectorAll('.workspace-tabs button').forEach((button) => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.workspace-tabs button').forEach((item) => item.classList.remove('active'));
      button.classList.add('active');
    });
  });

  autoReviewTimer = window.setTimeout(showAutomaticReviewSuggestion, 10000);
  renderSubagentLists();
  window.setInterval(() => {
    document.querySelectorAll('[data-task-time]').forEach((node) => {
      const task = subagentTasks.get(node.dataset.taskTime);
      if (task) node.textContent = elapsedLabel(task);
    });
    document.querySelectorAll('[data-menu-task-time]').forEach((node) => {
      const task = subagentTasks.get(node.dataset.menuTaskTime);
      if (task) node.textContent = task.state === 'done' ? completedAgoLabel(task) : elapsedLabel(task);
    });
    const detailTask = subagentTasks.get(activeSubagentDetailId);
    if (detailTask) {
      const phase = detailTask.state === 'done' ? 'Worked' : detailTask.state === 'thinking' ? 'Thinking' : 'Working';
      subagentRuntime.innerHTML = `${phase} for ${elapsedLabel(detailTask)} <span aria-hidden="true">›</span>`;
    }
  }, 1000);
})();
