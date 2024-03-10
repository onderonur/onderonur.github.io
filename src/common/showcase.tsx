type ShowcaseProps = React.PropsWithChildren;

export function Showcase({ children }: ShowcaseProps) {
  return (
    <div className="flex items-center justify-center rounded-md border bg-accent p-4">
      <div>{children}</div>
    </div>
  );
}
