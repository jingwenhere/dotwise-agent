import { Component, useEffect, useState, type ReactNode } from 'react';
import { createRoot } from 'react-dom/client';
import { flushSync } from 'react-dom';
import { ImageGeneration } from 'img-fx';
import { ComposerLoader } from './vendor/boardui/composer-loader';

type Effect = 'composer' | 'pixels';
type Options = { effect: Effect; imageUrl: string; onComplete: () => void };

function StillLoader({ label }: { label: string }) {
  return <div className="canvas-ai-library-still"><span>{label}</span></div>;
}

class LoaderBoundary extends Component<{
  children: ReactNode;
  onError: (error: Error) => void;
}, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  componentDidCatch(error: Error) { this.props.onError(error); }
  render() {
    return this.state.failed
      ? <StillLoader label="Animation unavailable" />
      : this.props.children;
  }
}

function Loader({ effect, imageUrl, onComplete, onReducedMotion }: Options & { onReducedMotion: (reduced: boolean) => void }) {
  const [reduced, setReduced] = useState(() => matchMedia('(prefers-reduced-motion: reduce)').matches);
  const [paused, setPaused] = useState(document.hidden);
  useEffect(() => {
    const media = matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(media.matches);
    const visibility = () => setPaused(document.hidden);
    media.addEventListener('change', update);
    document.addEventListener('visibilitychange', visibility);
    return () => {
      media.removeEventListener('change', update);
      document.removeEventListener('visibilitychange', visibility);
    };
  }, []);
  useEffect(() => onReducedMotion(reduced), [reduced, onReducedMotion]);

  if (reduced) return <StillLoader label="Generating image…" />;
  if (effect === 'composer') {
    return <div className="canvas-ai-composer-host" data-paused={paused}>
      <ComposerLoader active radius={0} surface={false} className="canvas-ai-composer-loader">
        <div style={{ width: '100%', height: '100%' }} />
      </ComposerLoader>
    </div>;
  }
  return <ImageGeneration
    preset="pixels-organic"
    theme="light"
    images={[imageUrl]}
    autoReveal
    revealInitialDelay={1.1}
    revealDelayRange={[1.1, 1.1]}
    revealHoldMs={60000}
    borderRadius={0}
    paused={paused}
    style={{ width: '100%', height: '100%' }}
    onCycle={({ phase }) => { if (phase === 'visible') onComplete(); }}
  >
    <div style={{ width: '100%', height: '100%', borderRadius: 0 }} />
  </ImageGeneration>;
}

function mount(host: HTMLElement, options: Options) {
  let disposed = false;
  let completed = false;
  let completionTimer: number | undefined;
  let staticTimer: number | undefined;
  const root = createRoot(host);
  const finish = () => {
    if (disposed || completed) return;
    completed = true;
    // Library phase callbacks may run during a React commit. Unmount next task.
    completionTimer = window.setTimeout(() => {
      if (!disposed) options.onComplete();
    }, 0);
  };
  const staticCompletion = (reduced: boolean) => {
    window.clearTimeout(staticTimer);
    if (options.effect === 'composer' || reduced) {
      staticTimer = window.setTimeout(finish, 4100);
    }
  };
  const error = (failure: Error) => {
    console.warn('Canvas loading animation unavailable:', failure);
    host.dataset.renderer = 'fallback';
    window.clearTimeout(staticTimer);
    staticTimer = window.setTimeout(finish, 4100);
  };
  host.dataset.renderer = options.effect;
  flushSync(() => root.render(
    <LoaderBoundary onError={error}>
      <Loader {...options} onComplete={finish} onReducedMotion={staticCompletion} />
    </LoaderBoundary>,
  ));
  // A failed image decode/context restore must not leave the prototype stuck.
  const watchdog = window.setTimeout(finish, 15000);
  return () => {
    disposed = true;
    window.clearTimeout(staticTimer);
    window.clearTimeout(completionTimer);
    window.clearTimeout(watchdog);
    root.unmount();
    delete host.dataset.renderer;
  };
}

Object.assign(window, { CanvasLibraryLoaders: { mount } });
