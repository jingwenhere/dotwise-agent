(() => {
  const cuelume = import('https://cdn.jsdelivr.net/npm/cuelume@0.2.2/dist/index.js')
    .catch(() => null);

  const requestedInteraction = new URLSearchParams(window.location.search).get('interaction');
  const interaction = requestedInteraction === 'a' || requestedInteraction === 'b'
    ? requestedInteraction
    : document.documentElement.dataset.defaultInteraction || 'a';
  const isInteractionB = interaction === 'b';
  document.documentElement.dataset.interaction = interaction;
  document.querySelectorAll('[data-interaction-link]').forEach((link) => {
    if (link.dataset.interactionLink === interaction) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });

  const documentSurface = document.getElementById('documentSurface');
  const documentPage = document.getElementById('documentPage');
  const documentWorkspace = document.querySelector('.document-workspace');
  const selectableCopy = document.getElementById('selectableCopy');
  const aiCopyRow = document.getElementById('aiCopyRow');
  const aiCopyContinuation = document.getElementById('aiCopyContinuation');
  const subagentDiarySection = document.getElementById('subagentDiarySection');
  const subagentDiaryCopy = document.getElementById('subagentDiaryCopy');
  const reviewStatus = document.getElementById('reviewStatus');
  const contentShell = document.querySelector('.content-shell');
  const agentPanel = document.querySelector('.agent-panel');
  const openAgentPanelButton = document.getElementById('openAgentPanel');
  const collapseAgentPanelButton = document.getElementById('collapseAgentPanel');
  const agentConversation = document.getElementById('agentConversation');
  const mainAgentTab = document.getElementById('mainAgentTab');
  const subagentTabShell = document.getElementById('subagentTabShell');
  const subagentPanelTab = document.getElementById('subagentPanelTab');
  const subagentTabLabel = document.getElementById('subagentTabLabel');
  const closeSubagentTab = document.getElementById('closeSubagentTab');
  const agentNewTab = document.getElementById('agentNewTab');
  const newSessionTabShell = document.getElementById('newSessionTabShell');
  const newSessionTab = document.getElementById('newSessionTab');
  const newSessionTabLabel = document.getElementById('newSessionTabLabel');
  const closeNewSessionTab = document.getElementById('closeNewSessionTab');
  const newSessionConversation = document.getElementById('newSessionConversation');
  const reviewSuggestionCard = document.getElementById('reviewSuggestionCard');
  const reviewSuggestionCount = document.getElementById('reviewSuggestionCount');
  const reviewSuggestionCopy = document.getElementById('reviewSuggestionCopy');
  const sendAllReview = document.getElementById('sendAllReview');
  const closeReviewSuggestion = document.getElementById('closeReviewSuggestion');
  const reviewChatBlock = document.getElementById('reviewChatBlock');
  const agentAskChatBlock = document.getElementById('agentAskChatBlock');
  const chatComposer = document.getElementById('chatComposer');
  const composerQuoteChip = document.getElementById('composerQuoteChip');
  const composerQuoteLabel = document.getElementById('composerQuoteLabel');

  const mainPrompt = document.getElementById('mainPrompt');
  const mainPromptInput = document.getElementById('mainPromptInput');
  const mainPromptIntent = document.getElementById('mainPromptIntent');
  const mainPromptSubmit = mainPrompt.querySelector('.prompt-submit');
  const selectionPrompt = document.getElementById('selectionPrompt');
  const selectionPromptInput = document.getElementById('selectionPromptInput');
  const selectionPromptIntent = document.getElementById('selectionPromptIntent');
  const selectionReview = document.getElementById('selectionReview');
  const selectionReviewCopy = document.getElementById('selectionReviewCopy');
  const confirmSelection = document.getElementById('confirmSelection');
  const revertSelection = document.getElementById('revertSelection');
  const agentShortcutHint = document.getElementById('agentShortcutHint');
  const inlineSubagentTooltip = document.getElementById('inlineSubagentTooltip');
  const inlineSubagentTooltipLabel = document.getElementById('inlineSubagentTooltipLabel');
  const inlineSubagentResolve = document.getElementById('inlineSubagentResolve');

  const subagentEntry = document.getElementById('subagentEntry');
  if (!isInteractionB) document.querySelector('.agent-tabs').prepend(subagentEntry);
  const subagentMenu = document.getElementById('subagentMenu');
  const subagentMenuActiveCount = document.getElementById('subagentMenuActiveCount');
  const subagentMenuDoneCount = document.getElementById('subagentMenuDoneCount');
  const subagentMenuActiveList = document.getElementById('subagentMenuActiveList');
  const subagentMenuDoneList = document.getElementById('subagentMenuDoneList');
  const subagentMenuEmptyActive = document.getElementById('subagentMenuEmptyActive');
  const subagentMenuEmptyDone = document.getElementById('subagentMenuEmptyDone');
  const subagentPopover = document.getElementById('subagentPopover');
  const agentCount = document.getElementById('agentCount');
  if (isInteractionB) subagentEntry.append(agentCount);
  else document.querySelector('.agent-tabs').append(agentCount);
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
  let mainPromptInsertionRange = null;
  let mainPromptReplacedBlock = null;
  let mainPromptIntentOverride = null;
  let storedRange = null;
  let selectionMarker = null;
  let generatedPreview = null;
  let selectionAnchor = null;
  let selectionRequest = '';
  let selectionPromptEngaged = false;
  let selectionPromptIntentOverride = null;
  let documentSelectionPointerActive = false;
  let documentSelectionKeyboardActive = false;
  let selectionReviewPositionFrame = 0;
  let selectionRun = 0;
  let selectionTaskId = null;
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
  let activeAgentQuote = null;
  let quoteHighlightTimer = null;
  let activeShortcutBlock = null;
  let tooltipTaskId = null;
  let tooltipHideTimer = null;

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

  function setAgentPanelCollapsed(collapsed, { focus = true } = {}) {
    contentShell.classList.toggle('is-agent-collapsed', collapsed);
    agentPanel.setAttribute('aria-hidden', String(collapsed));
    agentPanel.inert = collapsed;
    openAgentPanelButton.hidden = !collapsed;
    openAgentPanelButton.setAttribute('aria-expanded', String(!collapsed));

    if (collapsed) {
      subagentMenu.hidden = true;
      subagentEntry.setAttribute('aria-expanded', 'false');
      if (focus && agentPanel.contains(document.activeElement)) documentPage.focus({ preventScroll: true });
      window.setTimeout(updateAgentShortcutHint, 260);
      return;
    }

    window.requestAnimationFrame(() => {
      if (focus) mainAgentTab.focus({ preventScroll: true });
      positionSubagentMenu();
    });
    window.setTimeout(updateAgentShortcutHint, 260);
  }

  function hideAgentShortcutHint() {
    activeShortcutBlock?.classList.remove('is-ai-hint-anchor');
    activeShortcutBlock = null;
    agentShortcutHint.hidden = true;
  }

  function updateAgentShortcutHint() {
    if (!mainPrompt.hidden || !selectionPrompt.hidden || !selectionReview.hidden) {
      hideAgentShortcutHint();
      return;
    }

    const emptyLine = emptyEditableLine(window.getSelection());
    if (!emptyLine) {
      hideAgentShortcutHint();
      return;
    }

    const blockRect = emptyLine.block.getBoundingClientRect();
    const workspaceRect = documentWorkspace.getBoundingClientRect();
    const scrollerRect = documentSurface.getBoundingClientRect();
    if (blockRect.bottom < scrollerRect.top || blockRect.top > scrollerRect.bottom) {
      hideAgentShortcutHint();
      return;
    }

    if (activeShortcutBlock !== emptyLine.block) {
      activeShortcutBlock?.classList.remove('is-ai-hint-anchor');
      activeShortcutBlock = emptyLine.block;
      activeShortcutBlock.classList.add('is-ai-hint-anchor');
    }
    agentShortcutHint.style.left = `${blockRect.left - workspaceRect.left}px`;
    agentShortcutHint.style.top = `${blockRect.top - workspaceRect.top}px`;
    agentShortcutHint.hidden = false;
  }

  window.setTimeout(dismissGuide, 7000);

  function titleFromPrompt(prompt) {
    const cleaned = prompt.replace(/\s+/g, ' ').trim();
    return cleaned.length > 34 ? `${cleaned.slice(0, 34)}…` : cleaned;
  }

  function chipLabelFromPrompt(prompt) {
    const cleaned = String(prompt || '').replace(/\s+/g, ' ').trim();
    if (!cleaned) return 'Ask AI';

    const normalized = cleaned.toLowerCase();
    const fixedTopics = [
      [/(?:\b(?:papers?|research papers?|academic papers?|studies|articles?)\b|论文|文献)/i, 'Search for Papers'],
      [/(?:\b(?:competitors?|competition|competitive)\b|竞品|竞争对手)/i, 'Search for Competitors'],
      [/(?:\b(?:grammar|proofread)\b|语法|语病|校对)/i, 'Check Grammar'],
      [/(?:\b(?:diary|journal)\b|日记)/i, 'Write a Diary'],
      [/(?:\b(?:translate|translation)\b|翻译)/i, 'Translate Text'],
      [/(?:\b(?:summary|summarize|abstract)\b|摘要|总结)/i, 'Summarize Text'],
      [/(?:\b(?:rewrite|rephrase|polish)\b|润色|改写)/i, 'Rewrite Text'],
    ];
    const fixedMatch = fixedTopics.find(([pattern]) => pattern.test(normalized));
    if (fixedMatch) return fixedMatch[1];

    if (/[^\u0000-\u00ff]/.test(cleaned)) {
      return cleaned.length > 12 ? `${cleaned.slice(0, 12)}…` : cleaned;
    }

    let topic = cleaned
      .replace(/^(?:can|could|would|will)\s+you\s+/i, '')
      .replace(/^(?:please\s+)?(?:help\s+me\s+)?/i, '')
      .replace(/^(?:find|search(?:\s+for)?|look\s+up|research|browse\s+for|tell\s+me\s+about)\s+/i, '')
      .replace(/^(?:some|any|the|a|an)\s+/i, '')
      .replace(/[?.!,;:]+$/g, '')
      .trim();
    if (!topic) topic = cleaned;

    const words = topic.split(/\s+/).slice(0, 4);
    const titledTopic = words.map((word) => (
      /^(?:a|an|and|for|in|of|on|the|to)$/i.test(word)
        ? word.toLowerCase()
        : `${word.charAt(0).toUpperCase()}${word.slice(1).toLowerCase()}`
    )).join(' ');
    const isSearch = /\b(search|find|look up|research|browse)\b/i.test(cleaned);
    const label = isSearch ? `Search for ${titledTopic}` : titledTopic;
    return label.length > 28 ? `${label.slice(0, 27).trimEnd()}…` : label;
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

  function taskDurationLabel(task) {
    const end = task.completedAt || Date.now();
    const seconds = Math.max(0, Math.floor((end - task.startedAt) / 1000));
    if (seconds < 60) return `${seconds}s`;
    return `${Math.floor(seconds / 60)}m ${String(seconds % 60).padStart(2, '0')}s`;
  }

  function createWorkingLogoCanvas() {
    const canvas = document.createElement('canvas');
    canvas.className = 'ai-working-logo';
    canvas.dataset.workingLogo = '';
    canvas.setAttribute('role', 'img');
    canvas.setAttribute('aria-label', 'AI working');
    return canvas;
  }

  function createAiTaskStatus() {
    const status = document.createElement('span');
    status.className = 'ai-task-status';
    status.contentEditable = 'false';
    status.setAttribute('aria-hidden', 'true');
    status.append(createWorkingLogoCanvas());
    return status;
  }

  function completeAiTaskStatus(status) {
    if (!status?.isConnected) return;
    status.replaceChildren();
    status.classList.add('is-done');
  }

  function clearAiTaskStatusDot(status) {
    status?.classList.add('is-seen');
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
    subagentEntry.setAttribute('aria-label', isInteractionB && active.length > 0
      ? `Open subagent menu, ${active.length} active`
      : 'Open subagent menu');
    renderSubagentMenu();
  }

  function renderSubagentDetail(task) {
    if (!task) return;
    subagentDetailIdentity.replaceChildren();
    const identity = document.createElement('div');
    identity.className = 'subagent-detail-identity';
    const title = document.createElement('strong');
    title.textContent = isInteractionB ? chipLabelFromPrompt(task.sourcePrompt || task.title) : task.title;
    identity.append(title);
    subagentDetailIdentity.append(identity);
    const phase = task.state === 'done' ? 'worked' : task.state === 'thinking' ? 'thinking' : 'working';
    subagentRuntime.innerHTML = `${phase} for ${taskDurationLabel(task)} <span aria-hidden="true">›</span>`;
    subagentDetailContent.replaceChildren();
    const status = document.createElement('p');
    status.className = 'subagent-detail-status';
    status.textContent = task.state === 'done' && task.detail === 'Completed in the document'
      ? 'Completed in From Dots to Direction'
      : task.detail;
    if (task.state !== 'done' || !task.resultTitle) subagentDetailContent.append(status);
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
    if (isInteractionB) {
      const showMain = view === 'main';
      const showNewSession = view === 'new';
      mainAgentTab.setAttribute('aria-selected', String(showMain));
      mainAgentTab.tabIndex = showMain ? 0 : -1;
      mainAgentTab.classList.toggle('is-active', showMain);
      subagentPanelTab.setAttribute('aria-selected', String(showSubagents));
      subagentPanelTab.tabIndex = showSubagents ? 0 : -1;
      subagentPanelTab.classList.toggle('is-active', showSubagents);
      subagentTabShell.classList.toggle('is-active', showSubagents);
      newSessionTab.setAttribute('aria-selected', String(showNewSession));
      newSessionTab.tabIndex = showNewSession ? 0 : -1;
      newSessionTabShell.classList.toggle('is-active', showNewSession);
      agentConversation.setAttribute('aria-hidden', String(!showMain));
      newSessionConversation.setAttribute('aria-hidden', String(!showNewSession));
      return;
    }
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
    setAgentPanelCollapsed(false, { focus: false });
    activeSubagentDetailId = taskId;
    selectedSubagentTaskId = taskId;
    subagentMenu.hidden = true;
    subagentPopover.hidden = false;
    agentPanel.classList.add('has-subagent-view');
    agentPanel.classList.remove('has-new-session-view');
    newSessionConversation.hidden = true;
    if (isInteractionB) {
      const tabTitle = chipLabelFromPrompt(task.sourcePrompt || task.title);
      subagentTabLabel.textContent = tabTitle;
      subagentPanelTab.title = tabTitle;
      subagentTabShell.hidden = false;
    }
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

  function closeSubagentWorkspace({ closeTab = !isInteractionB } = {}) {
    subagentPopover.hidden = true;
    agentPanel.classList.remove('has-subagent-view');
    agentPanel.classList.remove('has-new-session-view');
    newSessionConversation.hidden = true;
    syncAgentViewTabs('main');
    subagentMenu.hidden = true;
    subagentEntry.setAttribute('aria-expanded', 'false');
    if (closeTab) {
      activeSubagentDetailId = null;
      selectedSubagentTaskId = null;
      if (isInteractionB) {
        subagentTabShell.hidden = true;
        subagentTabShell.classList.remove('is-active');
        subagentTabLabel.textContent = 'Subagent';
        subagentPanelTab.removeAttribute('title');
      }
    }
  }

  function activateNewSession() {
    if (!isInteractionB) return;
    setAgentPanelCollapsed(false, { focus: false });
    newSessionTabShell.hidden = false;
    subagentPopover.hidden = true;
    agentPanel.classList.remove('has-subagent-view');
    agentPanel.classList.add('has-new-session-view');
    newSessionConversation.hidden = false;
    syncAgentViewTabs('new');
    chatComposer.querySelector('textarea')?.focus({ preventScroll: true });
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
    const marker = createAiTaskStatus();
    marker.classList.add('document-subagent-state', `is-${state}`);
    target.prepend(marker);
    task.documentMarker = marker;
    positionStatusAtDocumentGutter(marker, target);
    const anchor = task.documentAnchor;
    if (anchor instanceof Element && anchor.isConnected && anchor !== target) {
      const targetRect = target.getBoundingClientRect();
      const anchorRect = anchor.getClientRects()[0] || anchor.getBoundingClientRect();
      const lineHeight = Math.min(anchorRect.height || 16, 24);
      const markerTop = Math.max(0, anchorRect.top - targetRect.top + Math.max(0, (lineHeight - 24) / 2));
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
      sourcePrompt: config.sourcePrompt || '',
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
    showSubagentStartInMainChat(task);
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
    const documentTarget = task.aiBlock || task.inlineAnchor ? null : task.documentTarget || task.targets[0];
    if (task.kind === 'selection-edit' && task.documentMarker?.isConnected) {
      task.documentTarget?.classList.remove('is-thinking', 'is-working');
      completeAiTaskStatus(task.documentMarker);
    } else {
      if (documentTarget) attachDocumentTaskState(task, documentTarget, 'done', 'Done');
      clearDocumentTaskState(task, 1600);
    }
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
    if (isInteractionB) return;
    if (!reviewSuggestionCard.hidden || !reviewChatBlock.hidden) return;
    const suggestions = reviewDefinitions.filter(({ target, suggestion }) => target.textContent.trim() !== suggestion.trim());
    if (!suggestions.length) return;
    pendingReviewSuggestions = suggestions;
    reviewRemaining = suggestions.length;
    showReviewSuggestion(suggestions);
    reviewStatus.textContent = `Dotwise found ${suggestions.length} review suggestions.`;
  }

  function placeMainPrompt() {
    mainPrompt.scrollIntoView({ behavior: 'smooth', block: 'center' });
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
    syncPromptIntent(mainPromptInput, mainPromptIntent, mainPromptIntentOverride);
  }

  function openMainPrompt(anchorBlock = null, insertionRange = null) {
    if (!selectionPrompt.hidden || !selectionReview.hidden) return;
    hideAgentShortcutHint();
    const host = document.createElement('section');
    host.className = 'agent-ask-inline-host';
    host.contentEditable = 'false';
    const validAnchor = anchorBlock instanceof Element && anchorBlock.isConnected && documentPage.contains(anchorBlock)
      ? anchorBlock
      : null;
    if (validAnchor && !validAnchor.textContent.replace(/\u200b/g, '').trim()) {
      mainPromptReplacedBlock = validAnchor;
      validAnchor.replaceWith(host);
    } else {
      mainPromptReplacedBlock = null;
      if (validAnchor) validAnchor.after(host);
      else documentPage.append(host);
    }
    mainPromptAnchorBlock = host;
    mainPromptInsertionRange = isInteractionB && insertionRange ? insertionRange.cloneRange() : null;
    host.append(mainPrompt);
    dismissGuide();
    mainPromptIntentOverride = null;
    mainPrompt.hidden = false;
    mainPromptInput.value = '';
    syncMainPromptState();
    window.requestAnimationFrame(() => {
      placeMainPrompt();
      mainPromptInput.focus();
    });
  }

  function closeMainPrompt() {
    const host = mainPromptAnchorBlock;
    mainPrompt.hidden = true;
    documentWorkspace.append(mainPrompt);
    if (host?.isConnected && mainPromptReplacedBlock) host.replaceWith(mainPromptReplacedBlock);
    else host?.remove();
    mainPromptInput.value = '';
    mainPromptIntentOverride = null;
    mainPromptAnchorBlock = null;
    mainPromptInsertionRange = null;
    const restoredBlock = mainPromptReplacedBlock;
    mainPromptReplacedBlock = null;
    syncMainPromptState();
    if (restoredBlock?.isConnected) {
      const range = document.createRange();
      range.selectNodeContents(restoredBlock);
      range.collapse(true);
      const selection = window.getSelection();
      selection?.removeAllRanges();
      selection?.addRange(range);
      documentPage.focus({ preventScroll: true });
      window.requestAnimationFrame(updateAgentShortcutHint);
    } else {
      documentSurface.focus({ preventScroll: true });
    }
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

  function animateAiWorkingBlockResize(block, shouldExpand) {
    if (!block?.container?.isConnected) return;
    block.cancelResize?.();

    const { container, card, controls, anchorButton, logoButton, statusElement } = block;
    const startingHeight = card.getBoundingClientRect().height;
    card.style.height = `${startingHeight}px`;
    container.classList.toggle('is-expanded', shouldExpand);
    controls.hidden = !shouldExpand;
    anchorButton.setAttribute('aria-expanded', String(shouldExpand));
    anchorButton.setAttribute('aria-label', shouldExpand ? 'Collapse generated content' : 'Review generated content');
    logoButton.setAttribute('aria-expanded', String(shouldExpand));
    logoButton.setAttribute('aria-label', shouldExpand ? 'Collapse generated content' : 'Review generated content');
    if (shouldExpand) clearAiTaskStatusDot(statusElement);

    card.style.height = 'auto';
    const targetHeight = card.scrollHeight;
    card.style.height = `${startingHeight}px`;
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
    logoButton.className = 'ai-working-block-logo ai-task-status';
    logoButton.setAttribute('aria-label', 'Open associated subagent');
    logoButton.setAttribute('aria-expanded', 'false');
    logoButton.append(createWorkingLogoCanvas());

    const card = document.createElement('div');
    card.className = 'ai-working-block-card t-resize';
    const anchorButton = document.createElement('button');
    anchorButton.type = 'button';
    anchorButton.className = 'ai-working-block-anchor inline-subagent-anchor';
    anchorButton.setAttribute('aria-label', 'Open associated subagent');
    anchorButton.setAttribute('aria-expanded', 'false');
    const statusElement = isInteractionB ? createAiTaskStatus() : logoButton;
    if (isInteractionB) {
      populateAiChip(anchorButton);
      anchorButton.append(statusElement);
    }
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
    chat.innerHTML = `<img src="assets/figma/selection-chat.svg" alt=""><span>${isInteractionB ? 'Ask in chat' : 'Expand to chat'}</span>`;
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
    if (!isInteractionB) container.append(logoButton);
    container.append(anchorButton, card);

    const block = { container, logoButton, statusElement, anchorButton, card, copy, controls, chat, dismiss, accept, text: '', taskId: null };
    const openBlock = () => {
      hideInlineSubagentTooltip();
      if (block.taskId) openSubagentDetail(block.taskId);
      if (container.dataset.state === 'done') {
        animateAiWorkingBlockResize(block, !container.classList.contains('is-expanded'));
      }
    };
    anchorButton.addEventListener('click', openBlock);
    logoButton.addEventListener('click', openBlock);
    chat.addEventListener('click', () => {
      expandAiWorkingBlockToChat(block);
    });
    dismiss.addEventListener('click', () => dismissAiWorkingBlock(block));
    accept.addEventListener('click', () => acceptAiWorkingBlock(block));
    return block;
  }

  function setAiWorkingBlockState(block, state, text = block.text) {
    if (!block?.container?.isConnected) return;
    block.text = text;
    block.container.dataset.state = state;
    if (state === 'working') {
      block.copy.textContent = text.replace(/\n\s*\n/g, '\n');
      if (!isInteractionB) block.anchorButton.textContent = text.replace(/\s+/g, ' ').trim();
    }
    if (state === 'done') {
      block.copy.textContent = text.replace(/\n\s*\n/g, '\n');
      if (!isInteractionB) block.anchorButton.textContent = text.replace(/\s+/g, ' ').trim();
      completeAiTaskStatus(block.statusElement);
      if (!isInteractionB) block.logoButton.setAttribute('aria-label', 'Review generated content');
      block.anchorButton.setAttribute('aria-label', 'Review generated content');
      block.anchorButton.setAttribute('aria-expanded', 'false');
    }
  }

  function expandAiWorkingBlockToChat(block) {
    if (!block?.container?.isConnected || block.container.dataset.state !== 'done') return;
    const task = subagentTasks.get(block.taskId);
    const prompt = task?.sourcePrompt || task?.title || 'Continue working with this draft';
    const result = block.text || task?.resultText || '';

    closeSubagentWorkspace();
    syncComposerQuote(null);

    const request = document.createElement('div');
    request.className = 'user-message';
    request.textContent = prompt;

    const response = document.createElement('div');
    response.className = 'assistant-message agent-expanded-result';
    const introduction = document.createElement('p');
    introduction.textContent = `I finished the ${task?.title ? `“${task.title}” draft` : 'draft'} in the document. Here’s the current version—we can keep refining it in this chat.`;
    const resultCopy = document.createElement('div');
    resultCopy.className = 'agent-expanded-result-copy';
    createInsertedParagraphs(result).forEach((paragraph) => resultCopy.append(paragraph));
    response.append(introduction, resultCopy);

    const entry = document.createElement('article');
    entry.className = 'agent-chat-task';
    entry.append(request, response, createAgentMessageActions('Regenerate response'));
    agentAskChatBlock.append(entry);
    agentAskChatBlock.hidden = false;
    window.requestAnimationFrame(() => {
      agentConversation.scrollTo({ top: agentConversation.scrollHeight, behavior: 'smooth' });
      chatComposer.querySelector('textarea')?.focus({ preventScroll: true });
    });
    showToast('Conversation sent to Agent Chat');
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
      if (tooltipTaskId === task.id) hideInlineSubagentTooltip();
      task.detail = 'Completed in the document';
      task.targets = paragraphs;
      task.documentTarget = paragraphs[0];
      task.aiBlock = null;
      task.inlineAnchor = null;
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
      if (tooltipTaskId === task.id) hideInlineSubagentTooltip();
      task.cancelStream?.();
      task.cancelStream = null;
      task.detail = 'Dismissed';
      task.targets = [];
      task.documentTarget = null;
      task.aiBlock = null;
      task.inlineAnchor = null;
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
      duration: 11000,
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
      duration: 12000,
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
      duration: 10500,
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

  function startDemoSubagent(kind, customTitle = '', insertionTarget = null, sourcePrompt = '') {
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
      sourcePrompt,
      aiBlock: isBlockResult ? insertionTarget : null,
    });
    if (isBlockResult) {
      insertionTarget.taskId = taskId;
      if (isInteractionB) updateAiChipLabel(insertionTarget.anchorButton, sourcePrompt || customTitle || definition.title);
      else insertionTarget.anchorButton.textContent = sourcePrompt || customTitle || definition.title;
      const task = subagentTasks.get(taskId);
      task.inlineAnchor = insertionTarget.anchorButton;
      insertionTarget.anchorButton.addEventListener('mouseenter', () => showInlineSubagentTooltip(taskId));
      insertionTarget.anchorButton.addEventListener('mouseleave', scheduleInlineSubagentTooltipHide);
      insertionTarget.anchorButton.addEventListener('focus', () => showInlineSubagentTooltip(taskId));
      insertionTarget.anchorButton.addEventListener('blur', scheduleInlineSubagentTooltipHide);
    }

    window.setTimeout(() => {
      const task = subagentTasks.get(taskId);
      if (!task || task.state === 'done') return;
      updateSubagentTask(taskId, { state: 'working', detail: definition.workingDetail });
      if (isBlockResult) {
        setAiWorkingBlockState(insertionTarget, 'working', outputText);
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

  function hideInlineSubagentTooltip() {
    window.clearTimeout(tooltipHideTimer);
    inlineSubagentTooltip.hidden = true;
    tooltipTaskId = null;
  }

  function scheduleInlineSubagentTooltipHide() {
    window.clearTimeout(tooltipHideTimer);
    tooltipHideTimer = window.setTimeout(hideInlineSubagentTooltip, 140);
  }

  function showInlineSubagentTooltip(taskId) {
    const task = subagentTasks.get(taskId);
    if (!task?.inlineAnchor?.isConnected) return;
    window.clearTimeout(tooltipHideTimer);
    tooltipTaskId = taskId;
    inlineSubagentTooltipLabel.textContent = task.sourcePrompt || task.title;
    inlineSubagentResolve.hidden = task.state !== 'done' || Boolean(task.aiBlock);
    inlineSubagentTooltip.hidden = false;
    const anchorRect = task.inlineAnchor.getBoundingClientRect();
    const workspaceRect = documentWorkspace.getBoundingClientRect();
    const maxLeft = workspaceRect.width - inlineSubagentTooltip.offsetWidth - 12;
    const preferredLeft = anchorRect.left - workspaceRect.left
      + (anchorRect.width - inlineSubagentTooltip.offsetWidth) / 2;
    inlineSubagentTooltip.style.left = `${clamp(preferredLeft, 12, maxLeft)}px`;
    inlineSubagentTooltip.style.top = `${anchorRect.top - workspaceRect.top - inlineSubagentTooltip.offsetHeight - 8}px`;
  }

  function resolveInlineSubagent(taskId) {
    const task = subagentTasks.get(taskId);
    if (!task || task.state !== 'done' || !task.inlineAnchor?.isConnected) return;
    const anchor = task.inlineAnchor;
    task.statusElement?.remove();
    task.statusElement = null;
    if (!task.statusHost?.querySelector('.inline-subagent-margin-status')) {
      task.statusHost?.classList.remove('inline-subagent-status-host');
    }
    task.statusHost = null;
    if (isInteractionB && anchor.classList.contains('ai-chip')) {
      anchor.remove();
    } else if (anchor.classList.contains('is-selection-anchor')) {
      if (anchor.matches('span')) anchor.replaceWith(...anchor.childNodes);
      else anchor.classList.remove('inline-subagent-anchor', 'is-selection-anchor');
    } else {
      anchor.closest('.inline-subagent-placeholder')?.remove();
    }
    task.inlineAnchor = null;
    task.targets = [];
    hideInlineSubagentTooltip();
    showToast('AI task resolved');
  }

  function positionStatusAtDocumentGutter(status, host) {
    if (isInteractionB || !status?.isConnected || !host?.isConnected) return;
    const pageRect = documentPage.getBoundingClientRect();
    const pagePadding = Number.parseFloat(getComputedStyle(documentPage).paddingLeft) || 0;
    const contentLeft = pageRect.left + pagePadding;
    status.style.left = `${contentLeft - host.getBoundingClientRect().left - 34}px`;
  }

  function positionInlineSubagentMarginStatus(task) {
    const anchor = task.inlineAnchor;
    const status = task.statusElement;
    const host = task.statusHost;
    if (!anchor?.isConnected || !status?.isConnected || !host?.isConnected) return;
    const lineRect = anchor.getClientRects()[0] || anchor.getBoundingClientRect();
    const hostRect = host.getBoundingClientRect();
    positionStatusAtDocumentGutter(status, host);
    status.style.top = `${Math.max(0, lineRect.top - hostRect.top + (lineRect.height - 24) / 2)}px`;
  }

  function positionInlineSubagentMarginStatuses() {
    subagentTasks.forEach((task) => {
      positionInlineSubagentMarginStatus(task);
      positionStatusAtDocumentGutter(task.documentMarker, task.documentTarget);
    });
  }

  function linkInlineSubagentAnchor(anchor, taskId) {
    const task = subagentTasks.get(taskId);
    anchor.classList.add('inline-subagent-anchor');
    anchor.dataset.taskId = taskId;
    anchor.tabIndex = 0;
    anchor.setAttribute('role', 'button');
    anchor.setAttribute('aria-label', 'Open associated subagent');
    const status = createAiTaskStatus();
    const statusHost = !isInteractionB && anchor.matches('span')
      ? anchor.closest('p, li, blockquote, h1, h2, figcaption')
      : null;
    if (statusHost) {
      status.classList.add('inline-subagent-margin-status');
      statusHost.classList.add('inline-subagent-status-host');
      statusHost.append(status);
      if (task) task.statusHost = statusHost;
      positionInlineSubagentMarginStatus({ inlineAnchor: anchor, statusElement: status, statusHost });
    } else if (isInteractionB && anchor.classList.contains('ai-chip')) anchor.append(status);
    else {
      anchor.prepend(status);
      positionStatusAtDocumentGutter(status, anchor);
    }
    if (task) task.statusElement = status;
    anchor.addEventListener('pointerdown', (event) => event.preventDefault());
    anchor.addEventListener('mouseenter', () => showInlineSubagentTooltip(taskId));
    anchor.addEventListener('mouseleave', scheduleInlineSubagentTooltipHide);
    anchor.addEventListener('focus', () => showInlineSubagentTooltip(taskId));
    anchor.addEventListener('blur', scheduleInlineSubagentTooltipHide);
    anchor.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      hideInlineSubagentTooltip();
      if (task?.state === 'done') clearAiTaskStatusDot(status);
      openSubagentDetail(taskId);
    });
    anchor.addEventListener('keydown', (event) => {
      if (event.key !== 'Enter' && event.key !== ' ') return;
      event.preventDefault();
      if (task?.state === 'done') clearAiTaskStatusDot(status);
      openSubagentDetail(taskId);
    });
  }

  function updateAiChipLabel(chip, prompt) {
    const label = chip?.querySelector('.ai-chip-label');
    if (label) label.textContent = chipLabelFromPrompt(prompt);
  }

  function populateAiChip(chip, prompt = '') {
    chip.classList.add('ai-chip');
    const icon = document.createElement('img');
    icon.src = 'assets/figma/ai-chip-icon.svg?v=20260918-b4';
    icon.alt = '';
    const label = document.createElement('span');
    label.className = 'ai-chip-label';
    label.textContent = chipLabelFromPrompt(prompt);
    chip.replaceChildren(icon, label);
  }

  function createAiChip(prompt = '') {
    const chip = document.createElement('span');
    chip.contentEditable = 'false';
    populateAiChip(chip, prompt);
    return chip;
  }

  function launchLinkedSubagent(prompt, anchor, selectedText = '') {
    const resultText = searchAnswerFor(prompt, selectedText).summary;
    const title = titleFromPrompt(prompt);
    const taskId = setSubagentActive(title, 'Understanding the request', {
      kind: 'research',
      accent: 'blue',
      targets: anchor,
      documentTarget: false,
      documentAnchor: anchor,
      resultTitle: /competitor|竞品/i.test(prompt) ? 'Competitor Search Results' : 'Research findings',
      resultText,
      sourcePrompt: prompt,
    });
    const task = subagentTasks.get(taskId);
    task.inlineAnchor = anchor;
    linkInlineSubagentAnchor(anchor, taskId);
    window.setTimeout(() => {
      if (task.state !== 'thinking') return;
      updateSubagentTask(taskId, { state: 'working', detail: 'Working on your request' });
    }, 450);
    window.setTimeout(() => {
      if (task.state === 'done') return;
      setSubagentDone(title, 'Ready to review', anchor, taskId);
      completeAiTaskStatus(task.statusElement);
      anchor.classList.add('is-complete');
      if (tooltipTaskId === taskId) showInlineSubagentTooltip(taskId);
    }, 3200);
    return taskId;
  }

  function runMainLinkedSubagent(prompt) {
    const host = mainPromptAnchorBlock?.isConnected ? mainPromptAnchorBlock : null;
    const replacedBlock = mainPromptReplacedBlock;
    const insertionRange = mainPromptInsertionRange;
    mainPromptAnchorBlock = null;
    mainPromptReplacedBlock = null;
    mainPromptInsertionRange = null;
    mainPrompt.hidden = true;
    documentWorkspace.append(mainPrompt);
    mainPromptInput.value = '';
    mainPromptIntentOverride = null;
    closePromptIntentMenus();
    syncMainPromptState();
    let anchor;
    if (isInteractionB) {
      anchor = createAiChip(prompt);
      if (host && replacedBlock) {
        replacedBlock.replaceChildren(anchor);
        host.replaceWith(replacedBlock);
      } else if (insertionRange?.startContainer?.isConnected && documentPage.contains(insertionRange.startContainer)) {
        host?.remove();
        insertionRange.insertNode(anchor);
      } else {
        const paragraph = document.createElement('p');
        paragraph.className = 'inline-subagent-chip-line';
        paragraph.append(anchor);
        if (host) host.replaceWith(paragraph);
        else documentPage.append(paragraph);
      }
    } else {
      const paragraph = document.createElement('p');
      paragraph.className = 'inline-subagent-placeholder';
      anchor = document.createElement('span');
      anchor.textContent = prompt;
      anchor.contentEditable = 'false';
      paragraph.append(anchor);
      if (host) host.replaceWith(paragraph);
      else documentPage.append(paragraph);
    }
    const taskId = launchLinkedSubagent(prompt, anchor);
    routeSearchToAgentSession(taskId);
    showToast('Subagent started');
  }

  function runMainInlineEdit(prompt) {
    const anchorBlock = mainPromptAnchorBlock?.isConnected ? mainPromptAnchorBlock : null;
    mainPromptAnchorBlock = null;
    mainPromptReplacedBlock = null;
    mainPromptInsertionRange = null;
    mainPrompt.hidden = true;
    documentWorkspace.append(mainPrompt);
    mainPromptInput.value = '';
    mainPromptIntentOverride = null;
    closePromptIntentMenus();
    syncMainPromptState();
    const kinds = detectDemoTasks(prompt);
    const anchoredTargets = createAnchoredTaskTargets(kinds, anchorBlock);
    kinds.forEach((kind) => startDemoSubagent(
      kind,
      kinds.length === 1 && kind === 'summary' ? titleFromPrompt(prompt) : '',
      anchoredTargets.get(kind) || null,
      prompt,
    ));
    subagentMenu.hidden = true;
    subagentEntry.setAttribute('aria-expanded', 'false');
    const lastAnchoredTarget = [...anchoredTargets.values()].at(-1)?.container;
    if (lastAnchoredTarget) placeCaretAfter(lastAnchoredTarget);
    else documentSurface.focus({ preventScroll: true });
    showToast(kinds.length > 1 ? `${kinds.length} subagents started` : 'Subagent started');
  }

  function classifyAgentIntent(prompt) {
    const normalized = prompt.trim().toLowerCase();
    const searchSignals = [
      /\b(search|find|look up|research|browse|source|cite|citation|latest|current|news|online|web)\b/,
      /(搜索|搜一下|查找|查询|检索|调研|资料|来源|引用|最新|新闻|网上|网页)/,
    ];
    const writingSignals = [
      /\b(write|draft|rewrite|expand|continue|summarize|polish|edit|journal|diary|grammar|proofread)\b/,
      /(写|改写|扩写|续写|摘要|总结|润色|日记|语病|校对|编辑)/,
    ];
    if (searchSignals.some((pattern) => pattern.test(normalized))) return 'search';
    if (writingSignals.some((pattern) => pattern.test(normalized))) return 'writing';
    return 'writing';
  }

  function syncPromptIntent(input, button, override = null) {
    const hasInput = Boolean(input.value.trim());
    const intent = override || classifyAgentIntent(input.value);
    const isSearch = intent === 'search';
    button.hidden = !hasInput;
    button.dataset.intent = intent;
    button.classList.toggle('is-overridden', Boolean(override));
    button.querySelector('span').textContent = isSearch ? 'Ask in chat' : 'Write here';
    button.setAttribute('aria-label', `${isSearch ? 'Ask in Agent Chat' : 'Write in document'}. Click to switch destination.`);
    button.title = override ? 'Destination selected manually' : 'Destination detected from your request';
    button.parentElement.querySelectorAll('[data-intent-option]').forEach((option) => {
      option.setAttribute('aria-selected', String(option.dataset.intentOption === intent));
    });
    return intent;
  }

  function closePromptIntentMenus() {
    [mainPromptIntent, selectionPromptIntent].forEach((button) => {
      button.parentElement.querySelector('.prompt-intent-menu').hidden = true;
      button.setAttribute('aria-expanded', 'false');
    });
  }

  function bindPromptIntentMenu(input, button, kind) {
    const menu = button.parentElement.querySelector('.prompt-intent-menu');
    button.addEventListener('click', () => {
      const opening = menu.hidden;
      closePromptIntentMenus();
      menu.hidden = !opening;
      button.setAttribute('aria-expanded', String(opening));
    });
    menu.querySelectorAll('[data-intent-option]').forEach((option) => {
      option.addEventListener('click', () => {
        const intent = option.dataset.intentOption;
        if (kind === 'selection') selectionPromptIntentOverride = intent;
        else mainPromptIntentOverride = intent;
        syncPromptIntent(input, button, intent);
        closePromptIntentMenus();
        input.focus({ preventScroll: true });
      });
    });
  }

  function quoteLabel(text) {
    return text.replace(/\s+/g, ' ').trim();
  }

  function revealAgentQuote(target = activeAgentQuote?.target) {
    if (!(target instanceof Element) || !target.isConnected) {
      showToast('The quoted text is no longer in the document');
      return;
    }
    closeSubagentWorkspace();
    window.clearTimeout(quoteHighlightTimer);
    target.classList.remove('quote-target-highlight');
    target.getBoundingClientRect();
    target.classList.add('quote-target-highlight');
    target.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
    quoteHighlightTimer = window.setTimeout(() => target.classList.remove('quote-target-highlight'), 1400);
    showToast('Jumped to quoted text');
  }

  function createAgentQuoteChip(text, target) {
    const chip = document.createElement('button');
    chip.type = 'button';
    chip.className = 'quote-chip message-quote-chip';
    chip.setAttribute('aria-label', 'Jump to quoted text');
    chip.title = text;
    chip.innerHTML = '<span class="quote-reference-icon" aria-hidden="true"><img src="assets/figma/quote-reference-base.svg" alt=""></span><span class="quote-chip-label"></span>';
    chip.querySelector('.quote-chip-label').textContent = quoteLabel(text);
    chip.addEventListener('click', () => revealAgentQuote(target));
    return chip;
  }

  function syncComposerQuote(quote = null) {
    activeAgentQuote = quote?.text && quote?.target ? quote : null;
    composerQuoteChip.hidden = !activeAgentQuote;
    composerQuoteLabel.textContent = activeAgentQuote ? quoteLabel(activeAgentQuote.text) : '';
    composerQuoteChip.title = activeAgentQuote?.text || '';
  }

  function createAgentMessageActions(primaryActionLabel = 'Search again') {
    const actions = document.createElement('div');
    actions.className = 'message-actions';
    [
      ['agent-refresh.svg', primaryActionLabel],
      ['agent-thumbs-up.svg', 'Helpful response'],
      ['agent-thumbs-down.svg', 'Unhelpful response'],
      ['agent-copy.svg', 'Copy response'],
    ].forEach(([icon, label]) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.setAttribute('aria-label', label);
      button.innerHTML = `<img src="assets/figma/${icon}" alt="">`;
      button.addEventListener('click', () => showToast(label));
      actions.append(button);
    });
    return actions;
  }

  function showSubagentStartInMainChat(task) {
    const entry = document.createElement('article');
    entry.className = 'agent-chat-task';
    entry.dataset.taskId = task.id;
    if (task.sourcePrompt) {
      const requestGroup = document.createElement('div');
      requestGroup.className = 'agent-search-request';
      const request = document.createElement('div');
      request.className = 'user-message';
      request.textContent = task.sourcePrompt;
      requestGroup.append(request);
      entry.append(requestGroup);
    }

    const message = document.createElement('div');
    message.className = 'assistant-message subagent-start-message';
    const link = document.createElement('button');
    link.type = 'button';
    link.className = 'subagent-chat-link';
    const taskLabel = isInteractionB ? chipLabelFromPrompt(task.sourcePrompt || task.title) : 'Dotwise';
    link.setAttribute('aria-label', `Open ${isInteractionB ? taskLabel : task.title} subagent`);
    const icon = document.createElement('img');
    icon.src = 'assets/figma/ai-chip-icon.svg?v=20260918-b4';
    icon.alt = '';
    const name = document.createElement('span');
    name.textContent = taskLabel;
    link.append(icon, name);
    link.addEventListener('click', () => openSubagentDetail(task.id));
    const copy = document.createElement('span');
    copy.textContent = 'subagent begins working';
    message.append(link, copy);
    entry.append(message, createAgentMessageActions());
    agentAskChatBlock.append(entry);
    agentAskChatBlock.hidden = false;
    task.chatEntry = entry;
  }

  function searchAnswerFor(prompt, quotedText = '') {
    const lower = prompt.toLowerCase();
    if (/(notion|笔记|note)/.test(lower)) {
      return {
        summary: quotedText
          ? 'Using the selected passage as context, I found a useful pattern across current note-taking guidance: capture the smallest meaningful unit first, then add context only when it helps the idea move forward.'
          : 'I found a useful pattern across current note-taking guidance: capture the smallest meaningful unit first, then add context only when it helps the idea move forward.',
        points: ['Keep capture friction low.', 'Separate collecting from organizing.', 'Turn recurring notes into a concrete next action.'],
      };
    }
    return {
      summary: quotedText
        ? 'I carried the selected passage into this search so the findings stay grounded in the part of the document you were working on. Here is a concise research pass you can continue in this session.'
        : 'I reviewed this request in a separate subagent so the document draft stays uninterrupted. Here is a concise research pass you can continue exploring.',
      points: ['Start with the most recent primary sources.', 'Compare at least two independent references.', 'Bring only the verified findings back into the document.'],
    };
  }

  function routeSearchToAgentSession(taskId, quote = null) {
    setAgentPanelCollapsed(false, { focus: false });
    closeSubagentWorkspace();
    const anchorBlock = mainPromptAnchorBlock?.isConnected ? mainPromptAnchorBlock : null;
    mainPromptAnchorBlock = null;
    mainPromptReplacedBlock = null;
    mainPrompt.hidden = true;
    documentWorkspace.append(mainPrompt);
    anchorBlock?.remove();
    mainPromptInput.value = '';
    mainPromptIntentOverride = null;
    syncMainPromptState();
    syncComposerQuote(quote);
    const task = subagentTasks.get(taskId);
    const requestGroup = task?.chatEntry?.querySelector('.agent-search-request');
    if (quote && requestGroup) requestGroup.prepend(createAgentQuoteChip(quote.text, quote.target));
    agentPanel.classList.add('is-receiving-search');
    window.setTimeout(() => agentPanel.classList.remove('is-receiving-search'), 520);
    agentConversation.scrollTo({ top: agentConversation.scrollHeight, behavior: 'smooth' });
  }

  function routeSelectionSearchToAgentSession(prompt) {
    selectionPrompt.hidden = true;
    selectionPromptInput.value = '';
    selectionPromptIntentOverride = null;
    closePromptIntentMenus();
    selectionMarker = selectionMarker?.isConnected ? selectionMarker : markStoredSelection();
    selectionMarker?.classList.remove('agent-selection', 'is-working', 'quote-target-highlight');
    selectionMarker?.classList.add('agent-quote-anchor', 'is-selection-anchor');
    window.getSelection()?.removeAllRanges();
    const quote = {
      text: selectionRequest,
      target: selectionMarker || selectionAnchor || selectableCopy,
    };
    let chip = null;
    if (isInteractionB) {
      chip = createAiChip(prompt);
      if (selectionMarker?.matches('span')) selectionMarker.insertAdjacentElement('afterend', chip);
      else quote.target.append(chip);
    }
    storedRange = null;
    selectionAnchor = null;
    selectionMarker = null;
    selectionRequest = '';
    const taskId = launchLinkedSubagent(prompt, chip || quote.target, quote.text);
    routeSearchToAgentSession(taskId, quote);
  }

  function submitMainAgentPrompt(prompt, intent = classifyAgentIntent(prompt)) {
    if (intent === 'search') runMainLinkedSubagent(prompt);
    else runMainInlineEdit(prompt);
  }

  function positionFloating(element, viewportRect, preferredWidth) {
    const workspaceRect = documentWorkspace.getBoundingClientRect();
    const width = Math.min(preferredWidth, workspaceRect.width - 32);
    const height = element.offsetHeight || 56;
    const left = clamp(viewportRect.left - workspaceRect.left + viewportRect.width / 2 - width / 2, 16, workspaceRect.width - width - 16);
    const top = clamp(viewportRect.bottom - workspaceRect.top + 8, 332, workspaceRect.height - height - 12);
    element.style.left = `${left}px`;
    element.style.top = `${top}px`;
    element.style.width = `${width}px`;
  }

  function positionSelectionReview() {
    if (selectionReview.hidden || !generatedPreview?.isConnected) return;
    const targetRect = generatedPreview.getBoundingClientRect();
    const workspaceRect = documentWorkspace.getBoundingClientRect();
    const scrollerRect = documentSurface.getBoundingClientRect();
    const width = Math.min(395, workspaceRect.width - 32);
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
    selectionPromptIntentOverride = null;
    syncPromptIntent(selectionPromptInput, selectionPromptIntent, null);
    selectionPrompt.hidden = false;
    positionFloating(selectionPrompt, rect, 480);
  }

  function scheduleSelectionDetection(delay = 140) {
    window.clearTimeout(detectSelection.timer);
    detectSelection.timer = window.setTimeout(detectSelection, delay);
  }

  function unwrapMarker() {
    if (!selectionMarker) return;
    if (selectionMarker.matches('span.agent-selection, span.agent-quote-anchor') && selectionMarker.parentNode) {
      selectionMarker.replaceWith(...selectionMarker.childNodes);
    } else {
      selectionMarker.classList.remove('agent-selection', 'agent-quote-anchor', 'is-working', 'quote-target-highlight');
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
    selectionPromptIntentOverride = null;
    closePromptIntentMenus();
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
      documentTarget: isInteractionB ? false : selectionStateTarget,
      documentAnchor: selectionMarker || selectionAnchor,
      resultTitle: 'Selected text updated',
      resultText: completionText.trim(),
      sourcePrompt: request,
    });
    selectionTaskId = taskId;

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
    if (selectionTaskId) {
      const task = subagentTasks.get(selectionTaskId);
      if (task) {
        clearDocumentTaskState(task);
        task.inlineAnchor = null;
        task.statusElement = null;
      }
      selectionTaskId = null;
    }
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
    hideAgentShortcutHint();
    if (event.target === documentSurface) {
      documentSurface.focus({ preventScroll: true });
    }
  });

  document.addEventListener('pointerdown', (event) => {
    if (event.target.closest?.('.ai-working-block')) return;
    subagentTasks.forEach((task) => {
      const block = task.aiBlock;
      if (block?.container?.isConnected && block.container.classList.contains('is-expanded')) {
        animateAiWorkingBlockResize(block, false);
      }
    });
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

    if (documentPage.contains(event.target) && isCollapsed) {
      window.requestAnimationFrame(updateAgentShortcutHint);
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

  function consumeAtAgentCommand(selection = window.getSelection()) {
    if (!selection || selection.rangeCount === 0 || !selection.isCollapsed) return null;
    const range = selection.getRangeAt(0);
    let textNode = range.startContainer;
    let offset = range.startOffset;

    if (textNode.nodeType === Node.ELEMENT_NODE) {
      const candidate = textNode.childNodes[Math.max(0, offset - 1)];
      if (!candidate || candidate.nodeType !== Node.TEXT_NODE) return null;
      textNode = candidate;
      offset = candidate.data.length;
    }
    if (textNode.nodeType !== Node.TEXT_NODE || !textNode.parentElement) return null;
    const parent = textNode.parentElement;
    if (!documentPage.contains(parent) || parent.closest('[contenteditable="false"]')) return null;

    const textBeforeCaret = textNode.data.slice(0, offset);
    if (!textBeforeCaret.endsWith('@@')) return null;
    const beforeCommand = textBeforeCaret.slice(0, -2);
    if (beforeCommand && !/\s$/.test(beforeCommand)) return null;

    const block = parent.closest('p, blockquote, li, h1, h2, div:not([class])');
    if (!block || !documentPage.contains(block)) return null;
    textNode.deleteData(offset - 2, 2);
    const caret = document.createRange();
    caret.setStart(textNode, offset - 2);
    caret.collapse(true);
    selection.removeAllRanges();
    selection.addRange(caret);
    return { range: caret, block };
  }

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Shift' && (event.target === documentPage || documentPage.contains(event.target))) {
      documentSelectionKeyboardActive = true;
    }

    if (event.key === 'Escape') {
      closePromptIntentMenus();
      hideInlineSubagentTooltip();
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

  });

  mainPrompt.addEventListener('submit', (event) => {
    event.preventDefault();
    const prompt = mainPromptInput.value.trim();
    if (!prompt) {
      mainPromptInput.focus();
      return;
    }
    submitMainAgentPrompt(prompt, mainPromptIntent.dataset.intent || classifyAgentIntent(prompt));
  });

  mainPromptInput.addEventListener('input', syncMainPromptState);
  bindPromptIntentMenu(mainPromptInput, mainPromptIntent, 'main');
  bindPromptIntentMenu(selectionPromptInput, selectionPromptIntent, 'selection');
  document.addEventListener('pointerdown', (event) => {
    if (!event.target.closest?.('.prompt-intent-control')) closePromptIntentMenus();
  });
  selectionPromptInput.addEventListener('input', () => {
    syncPromptIntent(selectionPromptInput, selectionPromptIntent, selectionPromptIntentOverride);
  });

  [mainPromptInput, selectionPromptInput].forEach((input) => {
    input.addEventListener('keydown', (event) => {
      if (event.key !== 'Enter' || !event.metaKey || event.ctrlKey || event.altKey) return;
      event.preventDefault();
      input.form?.requestSubmit();
    });
  });

  selectionPrompt.addEventListener('submit', (event) => {
    event.preventDefault();
    const request = selectionPromptInput.value.trim();
    if (!request) {
      selectionPromptInput.focus();
      return;
    }
    if ((selectionPromptIntent.dataset.intent || classifyAgentIntent(request)) === 'search') routeSelectionSearchToAgentSession(request);
    else beginSelectionEdit(request);
  });

  selectionPrompt.addEventListener('pointerdown', () => {
    selectionPromptEngaged = true;
    window.setTimeout(() => { selectionPromptEngaged = false; }, 180);
  });

  confirmSelection.addEventListener('click', acceptSelectionEdit);
  revertSelection.addEventListener('click', revertSelectionEdit);
  inlineSubagentTooltip.addEventListener('mouseenter', () => window.clearTimeout(tooltipHideTimer));
  inlineSubagentTooltip.addEventListener('mouseleave', scheduleInlineSubagentTooltipHide);
  inlineSubagentResolve.addEventListener('click', (event) => {
    event.stopPropagation();
    if (tooltipTaskId) resolveInlineSubagent(tooltipTaskId);
  });
  documentSurface.addEventListener('scroll', hideInlineSubagentTooltip, { passive: true });

  document.addEventListener('selectionchange', () => {
    if (documentSelectionPointerActive || documentSelectionKeyboardActive) return;
    scheduleSelectionDetection();
    window.requestAnimationFrame(updateAgentShortcutHint);
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
    window.requestAnimationFrame(updateAgentShortcutHint);
  };

  document.addEventListener('pointerup', finishDocumentSelection, true);
  document.addEventListener('pointercancel', finishDocumentSelection, true);

  documentPage.addEventListener('beforeinput', () => {
    hideAgentShortcutHint();
    removeTabSuggestion();
    if (!selectionPrompt.hidden) {
      selectionPrompt.hidden = true;
      unwrapMarker();
      storedRange = null;
      selectionAnchor = null;
    }
  });

  documentPage.addEventListener('input', () => {
    hideAgentShortcutHint();
    dismissGuide();
    const atInvocation = consumeAtAgentCommand();
    if (atInvocation && mainPrompt.hidden && selectionPrompt.hidden && selectionReview.hidden) {
      removeTabSuggestion();
      rememberCaretPoint(atInvocation);
      openMainPrompt(atInvocation.block, atInvocation.range);
      return;
    }
    scheduleTabSuggestion();
  });

  documentPage.addEventListener('keydown', (event) => {
    if (event.key === 'Tab' && activeTabSuggestion) {
      event.preventDefault();
      acceptTabSuggestion();
      return;
    }
    if (event.key !== 'Shift' && event.key !== 'Control' && event.key !== 'Alt' && event.key !== 'Meta') {
      if (event.key !== '@') hideAgentShortcutHint();
      removeTabSuggestion();
    }
  });

  openAgentPanelButton.addEventListener('click', () => {
    setAgentPanelCollapsed(false);
    dismissGuide();
  });

  collapseAgentPanelButton.addEventListener('click', () => {
    setAgentPanelCollapsed(true);
    dismissGuide();
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
  window.addEventListener('resize', positionInlineSubagentMarginStatuses);
  documentPage.addEventListener('input', () => window.requestAnimationFrame(positionInlineSubagentMarginStatuses));
  const inlineSubagentStatusObserver = new ResizeObserver(() => {
    window.requestAnimationFrame(positionInlineSubagentMarginStatuses);
  });
  inlineSubagentStatusObserver.observe(documentPage);
  window.addEventListener('resize', scheduleSelectionReviewPosition);
  window.addEventListener('resize', updateAgentShortcutHint);
  documentSurface.addEventListener('scroll', scheduleSelectionReviewPosition, { passive: true });
  documentSurface.addEventListener('scroll', updateAgentShortcutHint, { passive: true });

  mainAgentTab.addEventListener('click', () => {
    closeSubagentWorkspace();
    mainAgentTab.focus({ preventScroll: true });
  });

  agentNewTab.addEventListener('click', activateNewSession);
  newSessionTab.addEventListener('click', activateNewSession);
  closeNewSessionTab.addEventListener('click', (event) => {
    event.stopPropagation();
    const wasActive = newSessionTab.getAttribute('aria-selected') === 'true';
    newSessionTabShell.hidden = true;
    newSessionConversation.replaceChildren();
    newSessionTabLabel.textContent = 'New chat';
    if (wasActive) {
      closeSubagentWorkspace();
      mainAgentTab.focus({ preventScroll: true });
    }
  });

  subagentPanelTab.addEventListener('click', () => {
    const taskId = activeSubagentDetailId || selectedSubagentTaskId || latestSubagentTaskId;
    if (taskId) openSubagentDetail(taskId);
  });

  closeSubagentTab.addEventListener('click', (event) => {
    event.stopPropagation();
    closeSubagentWorkspace({ closeTab: true });
    mainAgentTab.focus({ preventScroll: true });
  });

  subagentBack.addEventListener('click', () => {
    closeSubagentWorkspace();
    mainAgentTab.focus({ preventScroll: true });
  });
  closeSubagentDetail?.addEventListener('click', closeSubagentWorkspace);

  document.addEventListener('pointerdown', (event) => {
    if (!subagentMenu.hidden && !subagentMenu.contains(event.target) && !subagentEntry.contains(event.target)) {
      subagentMenu.hidden = true;
      subagentEntry.setAttribute('aria-expanded', 'false');
    }
  });

  composerQuoteChip.addEventListener('click', () => revealAgentQuote());

  chatComposer.addEventListener('submit', (event) => {
    event.preventDefault();
    if (isInteractionB && newSessionTab.getAttribute('aria-selected') === 'true') {
      const input = chatComposer.querySelector('textarea');
      const message = input.value.trim();
      if (!message) return;
      const bubble = document.createElement('p');
      bubble.className = 'user-message';
      bubble.textContent = message;
      newSessionConversation.append(bubble);
      if (newSessionTabLabel.textContent === 'New chat') {
        newSessionTabLabel.textContent = message.length > 24 ? `${message.slice(0, 24)}…` : message;
      }
      input.value = '';
      newSessionConversation.scrollTop = newSessionConversation.scrollHeight;
      input.focus({ preventScroll: true });
      return;
    }
    showToast('Demo composer is ready');
  });

  document.querySelectorAll('.workspace-tabs button').forEach((button) => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.workspace-tabs button').forEach((item) => item.classList.remove('active'));
      button.classList.add('active');
    });
  });

  if (isInteractionB) reviewSuggestionCard.remove();
  else autoReviewTimer = window.setTimeout(showAutomaticReviewSuggestion, 10000);
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
      const phase = detailTask.state === 'done' ? 'worked' : detailTask.state === 'thinking' ? 'thinking' : 'working';
      subagentRuntime.innerHTML = `${phase} for ${taskDurationLabel(detailTask)} <span aria-hidden="true">›</span>`;
    }
  }, 1000);
})();
