type SectionProps = {
  children: React.ReactNode;
};

export function Section({ children }: SectionProps) {
  return <section className="flex flex-col gap-4">{children}</section>;
}

type SectionTitleProps = {
  children: React.ReactNode;
};

export function SectionTitle({ children }: SectionTitleProps) {
  return <h2 className="text-2xl font-black">{children}</h2>;
}
