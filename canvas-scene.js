/* The canvas reuses this local image collection; no image-generation API is called. */
((root) => {
  const images = [
    { file: 'water-lilies.png', alt: 'Pastel water lilies painting', width: 336, height: 199 },
    { file: 'blue-abstract.png', alt: 'Blue abstract painting', width: 267, height: 267 },
    { file: 'winter-landscape.png', alt: 'Snowy winter landscape painting', width: 282, height: 199 },
  ];
  const union = (rects) => {
    if (!rects.length) return { x: 0, y: 0, width: 1, height: 1 };
    const x = Math.min(...rects.map((r) => r.x));
    const y = Math.min(...rects.map((r) => r.y));
    return {
      x, y,
      width: Math.max(...rects.map((r) => r.x + r.width)) - x,
      height: Math.max(...rects.map((r) => r.y + r.height)) - y,
    };
  };
  const intersects = (a, b, gap = 0) => a.x < b.x + b.width + gap
    && a.x + a.width + gap > b.x && a.y < b.y + b.height + gap && a.y + a.height + gap > b.y;

  class Scene {
    constructor(mode, effect) {
      this.mode = mode;
      this.effect = effect;
      this.nodes = new Map();
      this.sequence = 0;
      const add = (id, file, x, y, width, height) => {
        const image = images.find((item) => item.file === file);
        this.nodes.set(id, { ...image, id, name: file, x, y, width, height, status: 'ready', parentIds: [] });
      };
      if (mode === 'multi') {
        add('source-1', 'water-lilies.png', 0, 0, 266, 266);
        add('source-2', 'winter-landscape.png', 300, 285, 282, 199);
      } else add('source-1', 'winter-landscape.png', 0, 0, 266, 266);
    }

    createJob(parentIds, prompt) {
      const parents = [...new Set(parentIds)].map((id) => this.nodes.get(id));
      if (!parents.length || parents.some((node) => !node || node.status !== 'ready')) throw new Error('Select a completed image first.');
      if (!prompt.trim()) throw new Error('Enter a prompt first.');
      const number = ++this.sequence;
      // Cycle the same assets, but prefer a different image from the selected inputs.
      const offset = this.mode === 'multi' ? 1 : 0;
      const ordered = images.map((_, index) => images[(number - 1 + offset + index) % images.length]);
      const image = ordered.find((item) => !parents.some((parent) => parent.file === item.file)) || ordered[0];
      const square = this.mode === 'multi' ? 267 : 266;
      const loadingWidth = this.effect === 'pixels' ? image.width : square;
      const loadingHeight = this.effect === 'pixels' ? image.height : square;
      const bounds = union(parents);
      const gap = this.mode === 'multi' ? 38 : 14;
      const rect = {
        x: bounds.x + bounds.width + gap, y: bounds.y,
        width: Math.max(loadingWidth, image.width), height: Math.max(loadingHeight, image.height),
      };
      // Reserve both the loading and final bounds so branches and concurrent jobs never overlap.
      let collision;
      while ((collision = [...this.nodes.values()].find((node) => intersects(rect, node, gap)))) {
        rect.y = collision.y + collision.height + gap;
      }
      const node = {
        ...image, ...rect, id: `image-${number}`, name: `${image.file.replace('.png', '')}-${number}.png`,
        status: 'generating', prompt: prompt.trim(), parentIds: parents.map((parent) => parent.id),
        loadingWidth, loadingHeight, outputWidth: image.width, outputHeight: image.height,
      };
      this.nodes.set(node.id, node);
      return node;
    }

    complete(id) {
      const node = this.nodes.get(id);
      if (!node || node.status !== 'generating') return null;
      Object.assign(node, { status: 'ready', width: node.outputWidth, height: node.outputHeight });
      return node;
    }
    fail(id) {
      const node = this.nodes.get(id);
      if (node?.status === 'generating') node.status = 'error';
    }
    retry(id) {
      const node = this.nodes.get(id);
      if (node?.status !== 'error') return null;
      node.status = 'generating';
      return node;
    }
    cancel(id) {
      const node = this.nodes.get(id);
      if (node && node.status !== 'ready') this.nodes.delete(id);
    }
    bounds() { return union([...this.nodes.values()]); }
  }
  const api = { Scene, images, union, intersects };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.CanvasScene = api;
})(globalThis);
