import { build } from 'esbuild';
import { cp, mkdtemp, readFile, rm, symlink, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const project = resolve(dirname(fileURLToPath(import.meta.url)), '..');
// Isolate module resolution from unrelated (possibly cloud-only) parent files.
const workspace = await mkdtemp(join(tmpdir(), 'dotwise-loader-build-'));
try {
  await Promise.all([
    cp(join(project, 'canvas-library-loaders.tsx'), join(workspace, 'canvas-library-loaders.tsx')),
    cp(join(project, 'vendor'), join(workspace, 'vendor'), { recursive: true }),
    cp(join(project, 'package.json'), join(workspace, 'package.json')),
    symlink(join(project, 'node_modules'), join(workspace, 'node_modules'), 'junction'),
  ]);
  await build({
    absWorkingDir: workspace,
    entryPoints: ['canvas-library-loaders.tsx'],
    outfile: join(project, 'canvas-library-loaders.bundle.js'),
    preserveSymlinks: true,
    bundle: true,
    minify: true,
    format: 'iife',
    platform: 'browser',
    target: ['es2020'],
    jsx: 'automatic',
    tsconfigRaw: { compilerOptions: { jsx: 'react-jsx' } },
    define: { 'process.env.NODE_ENV': '"production"' },
    legalComments: 'linked',
    logLevel: 'info',
  });
  // Preserve complete upstream notices, including packages without @license tags.
  const notices = await Promise.all([
    ['BoardUI', 'vendor/boardui/LICENSE'],
    ...['react', 'react-dom', 'scheduler', 'three', 'img-fx'].map(name => [name, `node_modules/${name}/LICENSE`]),
  ].map(async ([name, path]) => `${name}\n${await readFile(join(project, path), 'utf8')}`));
  await writeFile(join(project, 'canvas-library-loaders.bundle.js.LEGAL.txt'), notices.join('\n\n'));
} finally {
  await rm(workspace, { recursive: true, force: true });
}
