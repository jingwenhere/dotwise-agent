# Canvas F / G loading studies

Both pages reuse Canvas E's single-selection layout and the shared five-step
prototype. Only the generated image's loading region is replaced; E is preserved.

- **F:** BoardUI's official ComposerLoader, vendored from its component registry.
  It uses the original SVG stroke/bloom animation with square corners and no
  additional surface. See `vendor/boardui/README.md` for source and license.
- **G:** `img-fx@0.5.1` ImageGeneration with `preset="pixels-organic"`, the local
  result image, and `autoReveal`. Uses React 19 and Three.js.

## Rebuild

```sh
npm install
npm run build:canvas-loaders
```

Serve this directory with the existing static preview server and open
`canvas-f.html` or `canvas-g.html`. The checked-in bundle lets previews run
without a separate React dev server. The build uses a temporary directory to
avoid resolving unrelated cloud-only files in parent directories.

`canvas-library-loaders.tsx` mounts a small React island only while generating.
The original canvas UI stays in `canvas-ai.js`. Completion, source reselection,
and page exit unmount the island and clean up timers/observers/renderers. Hidden
pages pause library animation; reduced motion uses a static loading label.
Renderer failures show a fallback label and cannot leave the prototype stuck.

F completes after the existing 4.1-second prototype delay. G completes when the
library reports that its image reveal has finished, with a 15-second safety
timeout. The generated image and its original dimensions remain unchanged.

Dependencies are bundled locally; the preview does not fetch library code from
a CDN. Complete upstream notices are generated beside the bundle in
`canvas-library-loaders.bundle.js.LEGAL.txt`.
