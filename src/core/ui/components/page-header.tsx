type PageHeaderProps = {
  children: React.ReactNode;
};

export function PageHeader({ children }: PageHeaderProps) {
  return <div className="flex flex-col gap-2">{children}</div>;
}

type PageHeaderTitleProps = {
  children: React.ReactNode;
};

export function PageHeaderTitle({ children }: PageHeaderTitleProps) {
  return <h1 className="text-3xl font-black md:text-4xl">{children}</h1>;
}

type PageHeaderDescriptionProps = {
  children: React.ReactNode;
};

export function PageHeaderDescription({
  children,
}: PageHeaderDescriptionProps) {
  return <p className="text-muted-foreground text-lg">{children}</p>;
}
