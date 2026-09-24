const assert = require('node:assert/strict');
const { Scene, intersects } = require('../canvas-scene.js');

for (const [mode, effect] of [['single', 'glow'], ['multi', 'composer'], ['single', 'glass'], ['single', 'pixels']]) {
  const scene = new Scene(mode, effect);
  const initialCount = scene.nodes.size;
  const first = scene.createJob([...scene.nodes.keys()], 'First generation');
  assert.equal(first.file, mode === 'multi' ? 'blue-abstract.png' : 'water-lilies.png');
  if (effect === 'pixels') assert.equal(first.loadingWidth, first.outputWidth);
  const second = scene.createJob(['source-1'], 'Parallel generation');
  assert(!intersects(first, second));
  scene.complete(first.id);
  const third = scene.createJob([first.id], 'Continue from the generated image');
  assert.deepEqual(third.parentIds, [first.id]);
  assert.notEqual(third.file, first.file);
  assert.equal(scene.nodes.size, initialCount + 3);
  scene.complete(second.id);
  scene.complete(third.id);
  const mixed = scene.createJob(['source-1', first.id, second.id], 'Mix originals and generated images');
  assert.equal(mixed.parentIds.length, 3);
  scene.fail(mixed.id);
  assert.equal(scene.retry(mixed.id).status, 'generating');
  scene.cancel(mixed.id);
  assert.equal(scene.complete(mixed.id), null, 'Cancelled tasks cannot reappear through late callbacks');
  assert.equal(scene.nodes.size, initialCount + 3);
  let parent = third.id;
  for (let i = 0; i < 20; i++) {
    const next = scene.createJob([parent], `Generation ${i}`);
    for (const node of scene.nodes.values()) {
      if (node !== next) assert(!intersects(next, node), `${next.id} overlaps ${node.id}`);
    }
    scene.complete(next.id);
    parent = next.id;
  }
  assert.throws(() => scene.createJob([], 'No selection'));
  assert.throws(() => scene.createJob(['source-1'], '   '));
  assert.throws(() => scene.createJob(['missing'], 'Unknown image'));
  console.log(`${effect}: chaining, parallel jobs, mixed selection, retry, cancel, and non-overlap passed`);
}
