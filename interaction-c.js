(() => {
  const contentShell = document.getElementById('contentShell');
  const agentPanel = document.getElementById('agentPanel');
  const collapseAgentPanel = document.getElementById('collapseAgentPanel');
  const panelClosedLabel = document.getElementById('panelClosedLabel');
  const documentPage = document.getElementById('documentPage');
  const documentSurface = document.getElementById('documentSurface');
  const introCopy = document.getElementById('introCopy');
  const captureLead = document.getElementById('captureLead');
  const conversation = document.getElementById('conversation');
  const emptySuggestions = document.getElementById('emptySuggestions');
  const chatComposer = document.getElementById('chatComposer');
  const composerInput = document.getElementById('composerInput');
  const contextBar = document.getElementById('contextBar');
  const modeTrigger = document.getElementById('modeTrigger');
  const modeLabel = document.getElementById('modeLabel');
  const modeMenu = document.getElementById('modeMenu');
  const sessionTrigger = document.getElementById('sessionTrigger');
  const sessionTitle = document.getElementById('sessionTitle');
  const newChatButton = document.getElementById('newChatButton');
  const completionDot = document.getElementById('completionDot');
  const subagentMenu = document.getElementById('subagentMenu');
  const activeTaskList = document.getElementById('activeTaskList');
  const doneTaskList = document.getElementById('doneTaskList');
  const activeTaskCount = document.getElementById('activeTaskCount');
  const doneTaskCount = document.getElementById('doneTaskCount');
  const toast = document.getElementById('toast');

  const taskStore = new Map();
  const messageStore = [];
  let mode = 'edit';
  let taskSequence = 0;
  let messageSequence = 0;
  let activeTaskId = null;
  let selectionText = '';
  let selectionRange = null;
  let panelCollapsed = false;
  let toastTimer = null;
  const targetFlashTimers = new WeakMap();
  const WORKING_PREVIEW_MS = 2400;

  const copy = {
    summaryResponse: 'Absolutely. We could add something to summarize this paragraph and make the intro easier for people to understand.',
    summaryEdit: 'Ideas can flow with you freely in dotwise, making your ideas visible and clear.',
    shorterResponse: 'We could edit this paragraph by making it more compact and remove repeated information to make it shorter.',
    shorterEdit: 'Capture the fragment, then return with context.',
    longerResponse: 'Absolutely. We can expand this idea while keeping the original document structure and formatting intact.',
    longerEdit: 'Capture the fragment first, then return with context so the idea remains clear, useful, and easy to build on when you revisit it.',
    researchResult: 'Search query: AI editing tools for documents and visual workspaces\nResults found: 24 · Most relevant: 4\n\nNotion AI\nNotion places AI actions close to the text users are working on. After selecting a passage, users can ask AI to rewrite, shorten, translate, or change its tone. The proposed text appears in context, with controls to accept it, discard it, or request another version. This keeps the original document visible while the user reviews the change.\n\nMiro AI\nMiro brings AI into a shared visual workspace. Users can turn a prompt into sticky notes, diagrams, or grouped ideas, then move and edit the generated objects on the board. Its approach is useful when the output needs to become part of a spatial workflow rather than remain in a chat response.\n\nFigJam AI\nFigJam focuses on helping teams start and organize collaborative sessions. AI can generate an initial board structure and assist with sorting ideas. The resulting content is presented as editable canvas objects, so users can continue working with familiar board interactions.\n\nCanva Magic Write\nCanva offers writing assistance inside a broader design workflow. Users can generate or revise copy while building visual content, reducing the need to switch between a writing tool and a design tool. The AI output still needs review for tone, accuracy, and fit within the layout.\n\nWhat this suggests for Dotwise\nThe strongest pattern is a short path from intent to editable content: invoke AI near the selected object, show progress without hiding the workspace, and let users inspect the result before applying it. For documents, a clear before-and-after review may matter most. For canvas objects, the generated result should remain movable and editable. In both cases, users should be able to reject an output without losing their original work.\n\nThis is mock search-result copy for UI design, not a verified competitor analysis.',
  };

  function switchToAskIntent() {
    return [{
      label: 'Switch to Ask mode',
      action: (record, button) => {
        if (record.switchingToAsk) return;
        // Subagent messages are rendered from task-scoped copies. Update the
        // canonical message as well so reopening the task keeps the Ask result.
        const sourceRecord = messageStore.find((item) => item.id === record.id) || record;
        sourceRecord.switchingToAsk = true;
        sourceRecord.intent = null;
        button.closest('.intent-actions')?.remove();
        setMode('ask');

        // Keep the existing result in place while the Ask-mode continuation is generated.
        const working = addWorkingMessage();
        window.setTimeout(() => {
          working.remove();
          sourceRecord.mode = 'ask';
          sourceRecord.text = copy.researchResult;
          sourceRecord.undo = null;
          sourceRecord.undone = false;
          const article = conversation.querySelector(`[data-message-id="${record.id}"]`);
          article?.replaceWith(renderMainRecord({ ...sourceRecord, subagentTaskId: null }));
          scrollConversation();
        }, WORKING_PREVIEW_MS);
      },
    }];
  }

  function switchToEditIntent() {
    return [{
      label: 'Switch to Edit mode',
      action: (record, button) => {
        if (record.switchingToEdit) return;
        const sourceRecord = messageStore.find((item) => item.id === record.id) || record;
        const recordIndex = messageStore.indexOf(sourceRecord);
        const userRecord = messageStore.slice(0, recordIndex).reverse().find((item) => item.role === 'user');
        const prompt = userRecord?.text || '';
        const lower = prompt.toLowerCase();
        const sourceText = userRecord?.context || captureLead.textContent;
        const range = userRecord?.anchor && documentPage.contains(userRecord.anchor) ? (() => {
          const nextRange = document.createRange();
          nextRange.selectNodeContents(userRecord.anchor);
          return nextRange;
        })() : null;
        sourceRecord.switchingToEdit = true;
        sourceRecord.intent = null;
        button.closest('.intent-actions')?.remove();
        setMode('edit');

        const working = addWorkingMessage();
        window.setTimeout(() => {
          working.remove();
          const edit = lower.includes('long')
            ? (userRecord?.context ? replaceSelectedEdit(range, longerDocumentText(sourceText)) : replaceTextEdit(captureLead, longerDocumentText(sourceText)))
            : (userRecord?.context ? replaceSelectedEdit(range, shorterDocumentText(sourceText)) : replaceTextEdit(captureLead, shorterDocumentText(sourceText)));
          sourceRecord.mode = 'edit';
          sourceRecord.text = lower.includes('long') ? copy.longerResponse : copy.shorterResponse;
          sourceRecord.undo = edit?.undo || null;
          sourceRecord.undone = false;
          const article = conversation.querySelector(`[data-message-id="${record.id}"]`);
          article?.replaceWith(renderMainRecord({ ...sourceRecord, subagentTaskId: activeTaskId ? null : sourceRecord.subagentTaskId }));
          if (edit?.anchor) bindAgentAnchor(edit.anchor, sourceRecord);
          scrollConversation();
        }, WORKING_PREVIEW_MS);
      },
    }];
  }

  function showToast(message) {
    window.clearTimeout(toastTimer);
    toast.textContent = message;
    toast.hidden = false;
    toastTimer = window.setTimeout(() => { toast.hidden = true; }, 1800);
  }

  function scrollConversation() {
    window.requestAnimationFrame(() => {
      conversation.scrollTo({ top: conversation.scrollHeight, behavior: 'smooth' });
    });
  }

  function bindExpandableContext(chip, text) {
    if (!chip || !text) return chip;
    chip.setAttribute('role', 'button');
    chip.setAttribute('tabindex', '0');
    chip.setAttribute('aria-expanded', 'false');
    chip.querySelector('.message-context-preview').textContent = text.length > 30
      ? `“${text.slice(0, 30)}…”`
      : `“${text}”`;
    chip.querySelector('.message-context-full').textContent = `“${text}”`;
    const toggle = (event) => {
      if (event.type === 'keydown' && event.key !== 'Enter' && event.key !== ' ') return;
      const expanded = chip.getAttribute('aria-expanded') === 'true';
      // A click is also emitted when a user finishes dragging to select text.
      // Keep the expanded card open in that case so its context can be copied.
      const selection = window.getSelection();
      const selectingChipText = event.type === 'click'
        && expanded
        && selection
        && !selection.isCollapsed
        && selection.rangeCount > 0
        && selection.getRangeAt(0).intersectsNode(chip);
      if (selectingChipText) return;
      event.preventDefault();
      chip.setAttribute('aria-expanded', String(!expanded));
    };
    chip.addEventListener('click', toggle);
    chip.addEventListener('keydown', toggle);
    return chip;
  }

  function focusAgentMessage(recordId, taskId = null) {
    const recordIndex = messageStore.findIndex((record) => record.id === recordId);
    const sourceRecord = recordIndex >= 0 ? messageStore[recordIndex] : null;
    // A dotted document reference represents the user's original instruction.
    // Generated document text is stored against an assistant reply, so walk
    // back to that instruction and replay the grey user bubble instead.
    const targetRecord = sourceRecord?.role === 'assistant'
      ? messageStore.slice(0, recordIndex).reverse().find((record) => record.role === 'user')
      : sourceRecord;
    const targetId = targetRecord?.id || recordId;
    if (taskId && taskStore.has(taskId)) {
      showTask(taskId);
    } else {
      showMainSession();
    }
    window.requestAnimationFrame(() => {
      const message = conversation.querySelector(`[data-message-id="${targetId}"]`);
      if (!message) return;
      message.scrollIntoView({ behavior: 'smooth', block: 'center' });
      window.clearTimeout(targetFlashTimers.get(message));
      message.classList.remove('is-targeted');
      // Force a fresh animation even when several document references are
      // clicked in quick succession.
      void message.offsetWidth;
      message.classList.add('is-targeted');
      targetFlashTimers.set(message, window.setTimeout(() => {
        message.classList.remove('is-targeted');
        targetFlashTimers.delete(message);
      }, 900));
    });
  }

  function bindAgentAnchor(anchor, record) {
    if (!anchor || !record) return anchor;
    // Document references always replay the originating user instruction,
    // including references created from the assistant's generated edit.
    anchor.dataset.messageId = record.sourceUserId || record.id;
    if (activeTaskId) anchor.dataset.taskId = activeTaskId;
    anchor.setAttribute('role', 'link');
    anchor.setAttribute('tabindex', '0');
    anchor.setAttribute('aria-label', 'Open this interaction in the agent session');
    if (anchor.dataset.agentBound === 'true') return anchor;
    const open = (event) => {
      event.preventDefault();
      event.stopPropagation();
      focusAgentMessage(anchor.dataset.messageId, anchor.dataset.taskId || null);
    };
    anchor.addEventListener('click', open);
    anchor.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') open(event);
    });
    anchor.dataset.agentBound = 'true';
    return anchor;
  }

  function wrapRangeAsAgentAnchor(range) {
    if (!range || range.collapsed) return null;
    const container = range.commonAncestorContainer.nodeType === Node.ELEMENT_NODE
      ? range.commonAncestorContainer
      : range.commonAncestorContainer.parentElement;
    const existing = container?.closest?.('.agent-anchor');
    if (existing && documentPage.contains(existing)) return existing;
    const anchor = document.createElement('span');
    anchor.className = 'agent-anchor agent-anchor-pending';
    anchor.append(range.extractContents());
    range.insertNode(anchor);

    const selected = document.createRange();
    selected.selectNodeContents(anchor);
    const selection = window.getSelection();
    selection?.removeAllRanges();
    selection?.addRange(selected);
    return anchor;
  }

  function bindPendingAnchor(anchor, record) {
    if (!anchor || !record) return;
    anchor.classList.remove('agent-anchor-pending');
    bindAgentAnchor(anchor, record);
  }

  function setPanelCollapsed(collapsed) {
    panelCollapsed = collapsed;
    contentShell.classList.toggle('panel-collapsed', collapsed);
    agentPanel.setAttribute('aria-hidden', String(collapsed));
    panelClosedLabel.hidden = !collapsed;
    if (!collapsed) window.setTimeout(() => composerInput.focus({ preventScroll: true }), 240);
  }

  function setMode(nextMode, { silent = false } = {}) {
    mode = nextMode;
    modeLabel.textContent = nextMode === 'edit' ? 'Edit' : 'Ask';
    modeTrigger.dataset.mode = nextMode;
    modeMenu.querySelectorAll('[data-mode]').forEach((button) => {
      button.querySelector('.mode-check').textContent = button.dataset.mode === nextMode ? '✓' : '';
    });
    modeMenu.hidden = true;
    modeTrigger.setAttribute('aria-expanded', 'false');
    if (!silent) showToast(`${modeLabel.textContent} mode`);
  }

  function toolButton(icon, label, handler) {
    const button = document.createElement('button');
    button.type = 'button';
    button.setAttribute('aria-label', label);
    const image = document.createElement('img');
    image.src = icon;
    image.alt = '';
    button.append(image);
    if (handler) button.addEventListener('click', handler);
    return button;
  }

  function createToolbox(record) {
    const actions = document.createElement('div');
    actions.className = 'message-actions';
    actions.append(
      toolButton('assets/figma/agent-refresh.svg', 'Regenerate answer', () => showToast('Response regenerated')),
      toolButton('assets/figma/agent-thumbs-up.svg', 'Good response', () => showToast('Feedback saved')),
      toolButton('assets/figma/agent-thumbs-down.svg', 'Poor response', () => showToast('Feedback saved')),
      toolButton('assets/figma/agent-copy.svg', 'Copy answer', async () => {
        await navigator.clipboard?.writeText(record.text);
        showToast('Copied');
      }),
    );

    if (record.mode === 'edit') {
      actions.append(toolButton('assets/figma/selection-review-undo.svg', 'Undo edit', () => undoRecord(record)));
    }
    actions.append(toolButton('assets/figma/subagent-open.svg', 'Work in new subagent', () => openSubagentForRecord(record)));
    return actions;
  }

  function addUserMessage(text, options = {}) {
    emptySuggestions.hidden = true;
    const record = {
      id: `message-${++messageSequence}`,
      role: 'user',
      text,
      mode,
      context: options.context || '',
      anchor: options.anchor || null,
      subagentTaskId: options.subagentTaskId || null,
    };
    messageStore.push(record);
    const article = document.createElement('article');
    article.className = 'message user';
    article.dataset.messageId = record.id;
    const body = document.createElement('div');
    body.className = 'message-copy';
    body.textContent = text;
    if (record.context) {
      const context = document.createElement('div');
      context.className = 'message-context';
      context.innerHTML = '<img src="assets/figma/agent-file-text.svg" alt="" /><span class="message-context-preview"></span><span class="message-context-full"></span>';
      bindExpandableContext(context, record.context);
      article.prepend(context);
    }
    article.append(body);
    conversation.append(article);
    bindPendingAnchor(options.anchor, record);
    scrollConversation();
    return record;
  }

  function addWorkingMessage() {
    emptySuggestions.hidden = true;
    const article = document.createElement('article');
    article.className = 'message assistant working-message';
    article.textContent = 'Working...';
    conversation.append(article);
    scrollConversation();
    return article;
  }

  function addAssistantMessage(text, options = {}) {
    // The edit sentence belongs in the document. It must never become a second
    // assistant message in the main or subagent conversation.
    if (text === copy.summaryEdit) return null;

    const sourceUser = options.sourceUserId
      ? messageStore.find((item) => item.id === options.sourceUserId)
      : [...messageStore].reverse().find((item) => {
        if (item.role !== 'user') return false;
        const taskId = options.subagentTaskId || options.taskId || activeTaskId;
        return taskId ? item.subagentTaskId === taskId : !item.subagentTaskId;
      });
    const record = {
      id: `message-${++messageSequence}`,
      role: 'assistant',
      text,
      mode: options.mode || mode,
      undo: options.undo || null,
      undone: false,
      taskId: options.taskId || null,
      subagentTaskId: options.subagentTaskId || options.taskId || null,
      title: options.title || '',
      meta: options.meta || '',
      intent: options.intent || null,
      anchor: options.anchor || null,
      sourceUserId: sourceUser?.id || null,
    };
    if (options.persist !== false) messageStore.push(record);

    const article = document.createElement('article');
    article.className = 'message assistant';
    article.dataset.messageId = record.id;
    if (record.meta) {
      const meta = document.createElement('div');
      meta.className = 'message-meta';
      meta.textContent = record.meta;
      article.append(meta);
    }
    const body = document.createElement('div');
    body.className = 'message-copy';
    if (record.title) {
      const title = document.createElement('strong');
      title.textContent = record.title;
      body.append(title);
    }
    body.append(document.createTextNode(text));
    article.append(body);

    if (record.intent || (record.subagentTaskId && !activeTaskId)) article.append(createIntentActions(record));

    article.append(createToolbox(record));
    conversation.append(article);
    bindPendingAnchor(options.anchor, record);
    scrollConversation();
    return record;
  }

  function renderMainRecord(record) {
    const article = document.createElement('article');
    article.className = `message ${record.role}`;
    article.dataset.messageId = record.id;
    if (record.role === 'user') {
      if (record.context) {
        const context = document.createElement('div');
        context.className = 'message-context';
        context.innerHTML = '<img src="assets/figma/agent-file-text.svg" alt="" /><span class="message-context-preview"></span><span class="message-context-full"></span>';
        bindExpandableContext(context, record.context);
        article.append(context);
      }
      const body = document.createElement('div');
      body.className = 'message-copy';
      body.textContent = record.text;
      article.append(body);
      return article;
    }

    if (record.meta) {
      const meta = document.createElement('div');
      meta.className = 'message-meta';
      meta.textContent = record.meta;
      article.append(meta);
    }
    const body = document.createElement('div');
    body.className = 'message-copy';
    if (record.title) {
      const title = document.createElement('strong');
      title.textContent = record.title;
      body.append(title);
    }
    body.append(document.createTextNode(record.text));
    article.append(body);
    if (record.intent || (record.subagentTaskId && !activeTaskId)) article.append(createIntentActions(record));
    article.append(createToolbox(record));
    if (record.undone) article.classList.add('is-undone');
    return article;
  }

  function createIntentActions(record) {
    const actions = document.createElement('div');
    actions.className = 'intent-actions';

    // Once the user starts a subagent, the action becomes a link to that
    // session when the main session is rendered again.
    // The main session uses this as a link back into a task. Inside the task
    // itself, render the record's actual intent instead of another session link.
    if (record.subagentTaskId && !activeTaskId) {
      const task = taskStore.get(record.subagentTaskId);
      if (task) {
        const sessionLink = document.createElement('button');
        sessionLink.type = 'button';
        sessionLink.className = 'subagent-session-link';
        sessionLink.setAttribute('aria-label', `Open subagent session ${task.title}`);
        const icon = document.createElement('img');
        icon.src = 'assets/figma/agent-document.svg';
        icon.alt = '';
        const title = document.createElement('span');
        title.textContent = task.title;
        sessionLink.append(icon, title);
        sessionLink.addEventListener('click', () => showTask(task.id));
        actions.append(sessionLink);
        return actions;
      }
    }

    const intents = Array.isArray(record.intent) ? record.intent : [record.intent];
    intents.forEach((intent) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = `intent-button${intent.primary ? ' primary' : ''}`;
      button.textContent = intent.label;
      button.addEventListener('click', () => intent.action(record, button));
      actions.append(button);
    });
    return actions;
  }

  function undoRecord(record) {
    const sourceRecord = messageStore.find((item) => item.id === record.id) || record;
    if (sourceRecord.undone) {
      showToast('This edit is already undone');
      return;
    }
    sourceRecord.undo?.();
    sourceRecord.undone = true;
    const article = conversation.querySelector(`[data-message-id="${record.id}"]`);
    article?.classList.add('is-undone');
    showToast('Edit undone');
  }

  function preserveDocumentTextStyle(span, source) {
    if (!span || !source) return span;
    const style = window.getComputedStyle(source);
    span.style.fontFamily = style.fontFamily;
    span.style.fontSize = style.fontSize;
    span.style.fontWeight = style.fontWeight;
    span.style.fontStyle = style.fontStyle;
    span.style.lineHeight = style.lineHeight;
    span.style.letterSpacing = style.letterSpacing;
    return span;
  }

  function restoreEditOrigin(origin, span) {
    if (!origin) return;
    if (origin.target) {
      origin.target.innerHTML = origin.html;
      return;
    }
    if (origin.node) span.replaceWith(origin.node);
  }

  function setEditOrigin(span, origin) {
    // Keep the first unedited version with each generated span. Subsequent
    // rewrites inherit it so every Undo returns to the original document.
    span.dotwiseEditOrigin = origin;
    return span;
  }

  function makeTextEdit(target, text) {
    const previous = target.innerHTML;
    const span = document.createElement('span');
    span.className = 'document-edit agent-anchor';
    span.textContent = text;
    preserveDocumentTextStyle(span, target);
    setEditOrigin(span, { target, html: previous });
    target.append(document.createTextNode(' '), span);
    target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    return { undo: () => restoreEditOrigin(span.dotwiseEditOrigin, span), anchor: span };
  }

  function replaceTextEdit(target, text) {
    const previous = target.innerHTML;
    const priorOrigin = target.querySelector('.document-edit')?.dotwiseEditOrigin;
    target.innerHTML = '';
    const span = document.createElement('span');
    span.className = 'document-edit agent-anchor';
    span.textContent = text;
    preserveDocumentTextStyle(span, target);
    setEditOrigin(span, priorOrigin || { target, html: previous });
    target.append(span);
    target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    return { undo: () => restoreEditOrigin(span.dotwiseEditOrigin, span), anchor: span };
  }

  function replaceSelectedEdit(range, text) {
    if (!range) return null;
    const container = range.commonAncestorContainer.nodeType === Node.ELEMENT_NODE
      ? range.commonAncestorContainer
      : range.commonAncestorContainer.parentElement;
    const selectedAnchor = container?.closest?.('.agent-anchor');
    if (selectedAnchor && documentPage.contains(selectedAnchor)) {
      const span = document.createElement('span');
      span.className = 'document-edit agent-anchor';
      span.textContent = text;
      preserveDocumentTextStyle(span, selectedAnchor);
      setEditOrigin(span, selectedAnchor.dotwiseEditOrigin || { node: selectedAnchor });
      selectedAnchor.replaceWith(span);
      span.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return {
        undo: () => restoreEditOrigin(span.dotwiseEditOrigin, span),
        anchor: span,
      };
    }
    const target = editableBlockForRange(range) || introCopy;
    if (!target) return null;
    const previous = target.innerHTML;
    range.deleteContents();
    const span = document.createElement('span');
    span.className = 'document-edit agent-anchor';
    span.textContent = text;
    preserveDocumentTextStyle(span, target);
    setEditOrigin(span, { target, html: previous });
    range.insertNode(span);
    span.scrollIntoView({ behavior: 'smooth', block: 'center' });
    return { undo: () => restoreEditOrigin(span.dotwiseEditOrigin, span), anchor: span };
  }

  function editableBlockForRange(range) {
    if (!range) return null;
    const container = range.commonAncestorContainer.nodeType === Node.ELEMENT_NODE
      ? range.commonAncestorContainer
      : range.commonAncestorContainer.parentElement;
    return container?.closest?.('p, h1, h2, li, blockquote') || null;
  }

  function shorterDocumentText(source) {
    const text = source.trim().replace(/\s+/g, ' ');
    const words = text.split(' ');
    if (words.length <= 9) return text;
    return `${words.slice(0, Math.max(7, Math.ceil(words.length * 0.55))).join(' ').replace(/[,:;]$/, '')}.`;
  }

  function longerDocumentText(source) {
    const text = source.trim().replace(/\s+/g, ' ');
    const ending = /[.!?]$/.test(text) ? '' : '.';
    return `${text}${ending} This adds useful context while keeping the original idea clear and easy to revisit.`;
  }

  function titleFromPrompt(prompt) {
    const clean = String(prompt || '').replace(/\s+/g, ' ').trim();
    const lower = clean.toLowerCase();
    if (lower.includes('short')) return 'Make the intro shorter';
    if (lower.includes('long')) return 'Make the intro longer';
    if (lower.includes('research') || lower.includes('competitor')) return 'Competitor Search Results';
    if (lower.includes('format')) return 'Check document formats';
    if (lower.includes('add a sentence') || lower.includes('add one sentence')) return 'Add a sentence to the intro';
    if (lower.includes('summar')) return 'Summarize the intro';
    if (clean) {
      // Keep the task name grounded in the user's own request instead of
      // assigning every new subagent the same generic summary title.
      if (clean.length <= 48) return clean;
      const shortened = clean.slice(0, 48).replace(/\s+\S*$/, '').trim();
      return `${shortened || clean.slice(0, 48)}…`;
    }
    return 'New subagent';
  }

  function intentActions(prompt) {
    return [
      {
        label: 'Work in new subagent',
        primary: true,
        action: (record) => openSubagentForRecord(record, prompt),
      },
    ];
  }

  function originatingUserRecord(record, prompt = '') {
    if (record.sourceUserId) {
      const source = messageStore.find((item) => item.id === record.sourceUserId);
      if (source?.role === 'user') return source;
    }
    const recordIndex = messageStore.indexOf(record);
    if (recordIndex < 0) return null;
    const normalizedPrompt = prompt.trim().toLowerCase();
    return messageStore.slice(0, recordIndex).reverse().find((item) => (
      item.role === 'user' && (!normalizedPrompt || item.text.trim().toLowerCase() === normalizedPrompt)
    )) || null;
  }

  // Both entry points—the intent button and the final response-toolbar icon—
  // use this single transition so a task always inherits the same prompt,
  // document context, anchors, and main-session state.
  function openSubagentForRecord(record, requestedPrompt = '') {
    const sourceRecord = messageStore.find((item) => item.id === record.id) || record;
    if (sourceRecord.subagentTaskId) {
      const existingTask = taskStore.get(sourceRecord.subagentTaskId);
      if (existingTask) {
        showTask(existingTask.id);
        return;
      }
    }

    const userRecord = originatingUserRecord(sourceRecord, requestedPrompt);
    const prompt = userRecord?.text || requestedPrompt || record.text;
    const context = userRecord?.context || '';
    const task = createTask(titleFromPrompt(prompt), prompt, context);
    // Keep the original main-session response as the task entry point. Any
    // later messages created inside this task must stay out of the main feed.
    task.entryMessageId = sourceRecord.id;
    sourceRecord.subagentTaskId = task.id;
    record.subagentTaskId = task.id;
    userRecord?.anchor?.setAttribute('data-task-id', task.id);

    // Research conversations move into the subagent. Regular edit
    // conversations stay visible in main as the entry point to that task.
    if (userRecord && (prompt.toLowerCase().includes('research') || prompt.toLowerCase().includes('competitor'))) {
      userRecord.subagentTaskId = task.id;
    }
    record.anchor?.setAttribute('data-task-id', task.id);
    showTask(task.id);
  }

  function resetComposerContext() {
    selectionText = '';
    selectionRange = null;
    contextBar.querySelector('.selection-context')?.remove();
  }

  function submitSubagentPrompt(prompt) {
    const taskId = activeTaskId;
    const context = selectionText;
    const range = selectionRange?.cloneRange?.() || null;
    const anchor = wrapRangeAsAgentAnchor(range);
    addUserMessage(prompt, { context, anchor, subagentTaskId: taskId });
    resetComposerContext();
    const working = addWorkingMessage();
    const lower = prompt.toLowerCase();

    window.setTimeout(() => {
      working.remove();
      if (mode === 'ask' && (lower.includes('research') || lower.includes('competitor'))) {
          addAssistantMessage(copy.researchResult, {
            mode: 'ask',
            title: 'Competitor Search Results',
            meta: 'worked for 1m 47s  ›',
            subagentTaskId: taskId,
        });
        return;
      }
      if (mode === 'edit' && (lower.includes('research') || lower.includes('competitor'))) {
        addAssistantMessage(copy.researchResult.split('\n\nNotion AI')[0], {
          mode: 'edit',
          title: 'Competitor Search Results',
          meta: 'worked for 1m 47s  ›',
          intent: switchToAskIntent(),
          subagentTaskId: taskId,
        });
        return;
      }
      if (mode === 'ask') {
        addAssistantMessage('I can discuss the document, compare alternatives, or research a direction without changing the page.', { mode: 'ask', subagentTaskId: taskId });
        return;
      }
      addAssistantMessage(copy.summaryResponse, { mode: 'edit', subagentTaskId: taskId });
    }, WORKING_PREVIEW_MS);
  }

  function submitPrompt(prompt) {
    const context = selectionText;
    const range = selectionRange?.cloneRange?.() || null;
    const lower = prompt.toLowerCase();
    // Any selected document text sent to the agent is now an interacted region,
    // regardless of whether the response is an Ask explanation or an Edit.
    const anchor = context ? wrapRangeAsAgentAnchor(range) : null;
    addUserMessage(prompt, { context, anchor });
    selectionText = '';
    selectionRange = null;
    contextBar.querySelector('.selection-context')?.remove();
    sessionTitle.textContent = 'Edit dotwise introduction';
    const working = addWorkingMessage();
    window.setTimeout(() => {
      working.remove();
      if (mode === 'edit' && (lower.includes('research') || lower.includes('competitor'))) {
        addAssistantMessage('This looks like a research task. I can keep it in the main conversation or open a separate subagent session.', {
          mode: 'edit',
          intent: intentActions(prompt),
        });
        return;
      }

      if (mode === 'ask') {
        if (lower.includes('research') || lower.includes('competitor')) {
          addAssistantMessage(copy.researchResult, { mode: 'ask', title: 'Competitor Search Results', meta: 'worked for 1m 47s  ›' });
        } else if (context) {
          addAssistantMessage(`I’m looking at the selected text: “${context}”\n\nI can explain it, compare alternatives, or help you decide what to change without editing the document.`, {
            mode: 'ask',
            intent: lower.includes('short') || lower.includes('long') ? switchToEditIntent() : null,
          });
        } else {
          addAssistantMessage('I can discuss the document, compare alternatives, or research a direction without changing the page.', {
            mode: 'ask',
            intent: lower.includes('short') || lower.includes('long') ? switchToEditIntent() : null,
          });
        }
        return;
      }

      if (lower.includes('longer')) {
        const editText = longerDocumentText(context || captureLead.textContent);
        const edit = context ? replaceSelectedEdit(range, editText) : replaceTextEdit(captureLead, editText);
        const record = addAssistantMessage(copy.longerResponse, { mode: 'edit', undo: edit?.undo });
        if (edit?.anchor) bindAgentAnchor(edit.anchor, record);
      } else if (lower.includes('short')) {
        const editText = shorterDocumentText(context || captureLead.textContent);
        const edit = context ? replaceSelectedEdit(range, editText) : replaceTextEdit(captureLead, editText);
        const record = addAssistantMessage(copy.shorterResponse, { mode: 'edit', undo: edit?.undo });
        if (edit?.anchor) bindAgentAnchor(edit.anchor, record);
      } else if (lower.includes('format')) {
        addAssistantMessage('I checked the visible document structure. The heading, body, quote, list, and gallery follow a consistent hierarchy.', { mode: 'edit', intent: intentActions(prompt), anchor });
      } else {
        // Adding a sentence never replaces the selected/caret paragraph. It
        // appends the generated sentence to that paragraph and preserves it.
        const edit = makeTextEdit(editableBlockForRange(range) || introCopy, copy.summaryEdit);
        const record = addAssistantMessage(copy.summaryResponse, { mode: 'edit', undo: edit?.undo, intent: intentActions(prompt) });
        if (edit?.anchor) bindAgentAnchor(edit.anchor, record);
      }
    }, WORKING_PREVIEW_MS);
  }

  function createTask(title, prompt, context = '') {
    const task = {
      id: `task-${++taskSequence}`,
      title,
      prompt,
      context,
      state: 'active',
      startedAt: Date.now(),
      completedAt: null,
      unseen: false,
      result: title.includes('Research') ? copy.researchResult : title.includes('shorter') ? copy.shorterResponse : copy.summaryResponse,
    };
    taskStore.set(task.id, task);
    renderTasks();
    window.setTimeout(() => completeTask(task.id), 5200 + taskSequence * 800);
    return task;
  }

  function completeTask(taskId) {
    const task = taskStore.get(taskId);
    if (!task || task.state === 'done') return;
    task.state = 'done';
    task.completedAt = Date.now();
    task.unseen = true;
    completionDot.hidden = false;
    renderTasks();
    showToast(`${task.title} completed`);
    if (activeTaskId === task.id) showTask(task.id, false);
  }

  function elapsed(task) {
    const end = task.completedAt || Date.now();
    const seconds = Math.max(1, Math.floor((end - task.startedAt) / 1000));
    if (task.state === 'done') return '1m ago';
    const minutes = Math.floor(seconds / 60);
    const remainder = seconds % 60;
    return minutes ? `${minutes}m ${remainder}s` : `${remainder}s`;
  }

  function renderTasks() {
    const tasks = [...taskStore.values()];
    const active = tasks.filter((task) => task.state === 'active');
    const done = tasks.filter((task) => task.state === 'done');
    activeTaskCount.textContent = String(active.length);
    doneTaskCount.textContent = String(done.length);
    activeTaskList.replaceChildren(...active.map(createTaskRow));
    doneTaskList.replaceChildren(...done.map(createTaskRow));
    completionDot.hidden = !tasks.some((task) => task.unseen);
  }

  function createTaskRow(task) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `task-row${activeTaskId === task.id ? ' current' : ''}`;
    const title = document.createElement('strong');
    title.textContent = task.title;
    const time = document.createElement('time');
    time.textContent = task.state === 'done' ? '1m ago' : elapsed(task);
    button.append(title, time);
    button.addEventListener('click', () => showTask(task.id));
    return button;
  }

  function showTask(taskId, markSeen = true) {
    const task = taskStore.get(taskId);
    if (!task) return;
    activeTaskId = task.id;
    agentPanel.classList.add('subagent-view');
    if (markSeen) task.unseen = false;
    subagentMenu.hidden = true;
    sessionTrigger.setAttribute('aria-expanded', 'false');
    sessionTitle.textContent = 'Edit dotwise introduction';
    conversation.replaceChildren();

    const heading = document.createElement('div');
    heading.className = 'subagent-detail-heading';
    const back = document.createElement('button');
    back.type = 'button';
    back.setAttribute('aria-label', 'Back to main session');
    back.innerHTML = '<img src="assets/figma/chevron-down.svg" alt="">';
    back.addEventListener('click', showMainSession);
    const title = document.createElement('span');
    title.textContent = task.title;
    heading.append(back, title);
    conversation.append(heading);

    messageStore.filter((record) => (
      record.subagentTaskId === task.id
      || (record.role === 'user' && record.text === task.prompt)
    )).slice(-8).forEach((record) => {
      if (record.text === copy.summaryEdit) return;
      const isResearchResult = record.title === 'Competitor Search Results'
        || record.text.startsWith('Search query:');
      const taskRecord = {
        ...record,
        // A task detail is already inside the subagent. It must never render
        // the session-entry link that belongs to the main session.
        subagentTaskId: null,
        intent: isResearchResult && record.mode === 'edit'
          ? (record.intent || switchToAskIntent())
          : null,
      };
      conversation.append(renderMainRecord(taskRecord));
    });
    contextBar.querySelector('.selection-context')?.remove();
    if (task.context) pushSelectionContext(task.context);
    renderTasks();
  }

  function showMainSession() {
    activeTaskId = null;
    agentPanel.classList.remove('subagent-view');
    contextBar.querySelector('[data-task-context]')?.remove();
    conversation.replaceChildren();
    const mainRecords = messageStore.filter((record) => {
      if (record.role === 'user' && record.subagentTaskId) return false;
      if (record.role === 'assistant' && record.subagentTaskId) {
        const task = taskStore.get(record.subagentTaskId);
        // The response that opened the task remains as the clickable entry
        // component; all subsequent subagent responses belong only in its
        // session view.
        return task?.entryMessageId === record.id;
      }
      return true;
    }).slice(-8);
    if (!mainRecords.length) {
      conversation.append(emptySuggestions);
      emptySuggestions.hidden = false;
    } else {
      emptySuggestions.hidden = true;
      mainRecords.forEach((record) => {
        if (record.text === copy.summaryEdit) return;
        conversation.append(renderMainRecord(record));
      });
    }
    sessionTitle.textContent = messageStore.length ? 'Edit dotwise introduction' : 'New Chat';
    renderTasks();
  }

  function pushSelectionContext(text) {
    selectionText = text.trim();
    const selection = window.getSelection();
    if (selection && !selection.isCollapsed && selection.rangeCount) {
      selectionRange = selection.getRangeAt(0).cloneRange();
    } else {
      const block = contextBlockAtCaret(selection);
      if (block && block.textContent.trim() === selectionText) {
        selectionRange = document.createRange();
        selectionRange.selectNodeContents(block);
      } else {
        selectionRange = null;
      }
    }
    contextBar.querySelector('.selection-context')?.remove();
    if (!selectionText || panelCollapsed) return;
    const chip = document.createElement('div');
    chip.className = 'selection-context';
    chip.setAttribute('role', 'button');
    chip.setAttribute('aria-expanded', 'false');
    chip.innerHTML = '<img src="assets/figma/agent-file-text.svg" alt="" /><span class="selection-context-preview"></span><span class="selection-context-full"></span>';
    chip.querySelector('.selection-context-preview').textContent = selectionText.length > 62 ? `“${selectionText.slice(0, 62)}…”` : `“${selectionText}”`;
    chip.querySelector('.selection-context-full').textContent = `“${selectionText}”`;
    chip.addEventListener('click', () => {
      const expanded = chip.getAttribute('aria-expanded') === 'true';
      chip.setAttribute('aria-expanded', String(!expanded));
    });
    contextBar.append(chip);
  }

  function selectionInsideDocument() {
    const selection = window.getSelection();
    if (!selection || !selection.rangeCount) return '';
    const range = selection.getRangeAt(0);
    if (!documentPage.contains(range.commonAncestorContainer)) return '';
    if (!selection.isCollapsed) return selection.toString();
    return contextBlockAtCaret(selection)?.textContent.trim() || '';
  }

  function contextBlockAtCaret(selection = window.getSelection()) {
    if (!selection || !selection.isCollapsed || !selection.rangeCount) return null;
    const node = selection.anchorNode;
    if (!node || !documentPage.contains(node)) return null;
    const element = node.nodeType === Node.ELEMENT_NODE ? node : node.parentElement;
    const block = element?.closest?.('p, h1, h2, li, blockquote');
    return block && documentPage.contains(block) && block.textContent.trim() ? block : null;
  }

  function removeAtInvocation() {
    const selection = window.getSelection();
    const node = selection?.anchorNode;
    if (!node || node.nodeType !== Node.TEXT_NODE || !node.textContent.includes('@@')) return false;
    const index = node.textContent.lastIndexOf('@@');
    node.textContent = `${node.textContent.slice(0, index)}${node.textContent.slice(index + 2)}`;
    const range = document.createRange();
    range.setStart(node, index);
    range.collapse(true);
    selection.removeAllRanges();
    selection.addRange(range);
    return true;
  }

  chatComposer.addEventListener('submit', (event) => {
    event.preventDefault();
    const prompt = composerInput.value.trim();
    if (!prompt) return;
    composerInput.value = '';
    if (activeTaskId) {
      submitSubagentPrompt(prompt);
    } else {
      submitPrompt(prompt);
    }
  });

  modeTrigger.addEventListener('click', () => {
    const open = modeMenu.hidden;
    modeMenu.hidden = !open;
    modeTrigger.setAttribute('aria-expanded', String(open));
  });
  modeMenu.addEventListener('click', (event) => {
    const button = event.target.closest('[data-mode]');
    if (button) setMode(button.dataset.mode);
  });

  collapseAgentPanel.addEventListener('click', () => setPanelCollapsed(true));
  documentPage.addEventListener('input', () => {
    if (removeAtInvocation()) {
      setPanelCollapsed(false);
      showToast('AI panel opened');
    }
  });
  documentPage.addEventListener('keyup', () => pushSelectionContext(selectionInsideDocument()));
  documentPage.addEventListener('mouseup', () => window.setTimeout(() => pushSelectionContext(selectionInsideDocument()), 0));
  // Anchors created before a panel re-render keep their data attributes. This
  // delegated fallback keeps every dotted document reference navigable.
  documentPage.addEventListener('click', (event) => {
    const anchor = event.target.closest?.('.agent-anchor[data-message-id]');
    // Restoring an edit from HTML recreates the anchor markup but not its
    // per-node listener. Always keep this delegated route available.
    if (!anchor) return;
    event.preventDefault();
    focusAgentMessage(anchor.dataset.messageId, anchor.dataset.taskId || null);
  });
  documentPage.addEventListener('keydown', (event) => {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    const anchor = event.target.closest?.('.agent-anchor[data-message-id]');
    if (!anchor) return;
    event.preventDefault();
    focusAgentMessage(anchor.dataset.messageId, anchor.dataset.taskId || null);
  });
  document.addEventListener('selectionchange', () => {
    const text = selectionInsideDocument();
    if (text) pushSelectionContext(text);
  });

  sessionTrigger.addEventListener('click', () => {
    const unseen = [...taskStore.values()].reverse().find((task) => task.unseen);
    if (unseen) {
      showTask(unseen.id);
      // The completion indicator is an entry point into the finished session.
      // Keep the task menu open after navigating so the user can see its status
      // alongside the other active and completed subagents.
      subagentMenu.hidden = false;
      sessionTrigger.setAttribute('aria-expanded', 'true');
      renderTasks();
      return;
    }
    const open = subagentMenu.hidden;
    subagentMenu.hidden = !open;
    sessionTrigger.setAttribute('aria-expanded', String(open));
    if (open) renderTasks();
  });
  sessionTitle.addEventListener('click', showMainSession);
  newChatButton.addEventListener('click', () => {
    messageStore.length = 0;
    selectionText = '';
    selectionRange = null;
    contextBar.querySelector('.selection-context')?.remove();
    showMainSession();
    composerInput.value = '';
    composerInput.focus();
  });

  document.addEventListener('pointerdown', (event) => {
    if (!modeMenu.hidden && !modeMenu.contains(event.target) && !modeTrigger.contains(event.target)) {
      modeMenu.hidden = true;
      modeTrigger.setAttribute('aria-expanded', 'false');
    }
    if (!subagentMenu.hidden && !subagentMenu.contains(event.target) && !sessionTrigger.contains(event.target)) {
      subagentMenu.hidden = true;
      sessionTrigger.setAttribute('aria-expanded', 'false');
    }
  });

  window.setInterval(() => {
    if (!subagentMenu.hidden) renderTasks();
  }, 1000);

  setMode('edit', { silent: true });
  documentSurface.scrollTop = 0;
})();
