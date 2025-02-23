type ShowcaseProps = {
  children: React.ReactNode;
};

export function Showcase({ children }: ShowcaseProps) {
  return (
    <div className="bg-accent flex items-center justify-center rounded-md border p-4">
      <div>{children}</div>
    </div>
  );
}
