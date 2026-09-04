import { BINDING, OPTS, frameLogoWork, paintFrame } from './assets/figma/working-logo-geometry.js';

const LOGO_SIZE = 20;
const LOGO_SPEED = 1.7;
const canvases = new Set();

function prepareCanvas(canvas) {
  if (!(canvas instanceof HTMLCanvasElement) || canvases.has(canvas)) return;
  canvas.width = LOGO_SIZE;
  canvas.height = LOGO_SIZE;
  canvases.add(canvas);
}

function discoverCanvases(root = document) {
  if (root instanceof HTMLCanvasElement && root.matches('[data-working-logo]')) prepareCanvas(root);
  root.querySelectorAll?.('canvas[data-working-logo]').forEach(prepareCanvas);
}

function paintCanvas(canvas, time) {
  const dpr = Math.min(2, window.devicePixelRatio || 1);
  const pixelSize = Math.round(LOGO_SIZE * dpr);
  if (canvas.width !== pixelSize || canvas.height !== pixelSize) {
    canvas.width = pixelSize;
    canvas.height = pixelSize;
  }
  const context = canvas.getContext('2d');
  if (!context) return;
  context.setTransform(dpr, 0, 0, dpr, 0, 0);
  context.clearRect(0, 0, LOGO_SIZE, LOGO_SIZE);
  paintFrame(context, frameLogoWork(LOGO_SIZE, time, OPTS, BINDING), false);
}

const observer = new MutationObserver((records) => {
  records.forEach((record) => record.addedNodes.forEach((node) => {
    if (node instanceof Element) discoverCanvases(node);
  }));
});

observer.observe(document.body, { childList: true, subtree: true });
discoverCanvases();

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

function render(now) {
  const time = reducedMotion.matches ? 5.35 : (now / 1000) * LOGO_SPEED;
  canvases.forEach((canvas) => {
    if (!canvas.isConnected) {
      canvases.delete(canvas);
      return;
    }
    paintCanvas(canvas, time);
  });
  window.requestAnimationFrame(render);
}

window.requestAnimationFrame(render);
