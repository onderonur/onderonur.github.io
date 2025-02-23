import { twMerge } from 'tailwind-merge';

type ProseProps = {
  className?: string;
  children: React.ReactNode;
};

export function Prose({ className, children }: ProseProps) {
  return (
    <div
      className={twMerge(
        'prose prose-invert mx-auto',
        // TODO: `prose-invert` not working with `prose-rose` somehow with tailwindcss v4.
        // So, we set link colors manually.
        'prose-a:text-rose-400',
        'non-rehype-code:whitespace-nowrap non-rehype-code:rounded-sm non-rehype-code:border non-rehype-code:border-primary non-rehype-code:bg-primary/20 non-rehype-code:p-1 non-rehype-code:text-[0.85em] non-rehype-code:font-medium non-rehype-code:before:hidden non-rehype-code:after:hidden',
        'prose-pre:px-0 prose-pre:py-4',
        '**:data-highlighted-line:bg-foreground/10 **:data-line:px-4',
        'rehype-code-title:rounded-t-md rehype-code-title:bg-accent rehype-code-title:p-2 rehype-code-with-title:rounded-t-none',
        className,
      )}
    >
      {children}
    </div>
  );
}
