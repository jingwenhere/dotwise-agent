# BoardUI Composer Loader

Official component source retrieved on 2026-09-23:

- Docs: https://www.boardui.com/components/composer-loader
- Registry: https://www.boardui.com/r/composer-loader.json
- Upstream path: `components/application/composer-loader/composer-loader.tsx`
- Upstream source SHA-256: `81536d56d4858487defced6ad3e61f792fe20b4e47c877bc020e41562c3ae10b`
- License: MIT; exact upstream notice in `LICENSE`, retrieved from https://raw.githubusercontent.com/BoardUI/boardui/main/LICENSE

`composer-loader.tsx` is the original registry component. Its only source
change is importing `cx` from `./cx` instead of `@/utils/cx`. This project
uses a minimal class-name joiner because the component only joins `relative`
and its optional custom class; it does not use Tailwind conflict resolution.

`composer-loader.css` maps the component's small set of utility classes to
scoped vanilla CSS under `.canvas-ai-library-mount`. It includes the original
`bui-composer-loader-dash` keyframes and reduced-motion rule from
https://www.boardui.com/r/globals.json, plus disables the opacity transition
for reduced motion. It does not import BoardUI's global reset or theme.

## Canvas integration

Load the scoped CSS, then render inside the existing loading frame:

```tsx
<ComposerLoader
  active={loading}
  radius={0}
  surface={false}
  className="canvas-ai-composer-loader"
>
  <div style={{ width: '100%', height: '100%' }} />
</ComposerLoader>
```

The host `.canvas-ai-library-mount` must have nonzero width and height.
`radius={0}` preserves Canvas E's square shape; `surface={false}` keeps its
existing background. Children must not paint an opaque surface over the light.
The default colors, speed, arc, line, and bloom are unchanged from BoardUI.

`active` controls a 450 ms opacity fade, not progress. The animation continues
while hidden; unmount the React root once loading ends or is cancelled to
stop it and disconnect its ResizeObserver. Do not leave hidden roots alive.
