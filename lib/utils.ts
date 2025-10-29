// A simplified version of shadcn's cn utility for merging Tailwind classes.
// In a real project, this would use `clsx` and `tailwind-merge`.
export function cn(...inputs: (string | undefined | null | false | 0)[]): string {
  return inputs.filter(Boolean).join(' ');
}
