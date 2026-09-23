/**
 * Local class-name adapter for BoardUI's ComposerLoader.
 * Its only call joins "relative" and an optional custom class name; no Tailwind
 * conflict resolution is needed in this vanilla-CSS project.
 */
export function cx(...classes: Array<string | undefined | null | false>): string {
  return classes.filter(Boolean).join(" ");
}
