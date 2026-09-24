# Canvas image interactions

Canvas A–D reuse the three bundled painting assets. No image-generation API,
credentials, or paid requests are involved. Prompts and image references are
recorded per generation, but do not change the contents of these local images.

- Click any completed image to select it. Drag from empty canvas space to select
  the intersected images, or Shift-click to add/remove individual images.
- Generate appends a new image without replacing its parents or earlier results.
  Any completed result can be used for the next generation.
- Pending jobs are independent: selecting another image, editing a prompt, sending
  to chat, or cancelling one job does not cancel other jobs.
- Hover a pending card (or focus its control with the keyboard) to cancel it.
  Image-load failures offer Retry and Remove.
- Ask in AI sends precisely the selected references to the local conversation.
  The composer retains the Canvas file and named image reference chips.
- Zoom/pan applies to the whole scene. New jobs reserve their loading and final
  bounds, so branching and concurrent generations do not overlap existing cards.
- Images and generation history live in the current page session; a page reload
  starts a fresh canvas. Chat replies are local sample responses.

## Implementation

`canvas-scene.js` owns image identity, parent references, result selection, job
states, bounds, and placement. `canvas-ai.js` manages DOM selection, the prompt,
marquee gestures, and one cleanup lifecycle per job. Loading variants remain
independent: edge glow, Composer, frosted glass, and pixel reveal.

The pixel loader uses the final image dimensions from the start. Finished or
cancelled jobs remove their timers and React/WebGL mounts; offscreen CSS motion
pauses. Completion does not steal another selection or prompt draft.

Run the dependency-free scene tests with `npm run test:canvas`. They cover all four
effects, chained and concurrent jobs, mixed references, retry/cancel, validation,
and collision-free placement across repeated generations.
