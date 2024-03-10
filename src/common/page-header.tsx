type PageHeaderProps = React.PropsWithChildren;

export function PageHeader({ children }: PageHeaderProps) {
  return <div className="flex flex-col gap-2">{children}</div>;
}

type PageHeaderTitleProps = React.PropsWithChildren;

export function PageHeaderTitle({ children }: PageHeaderTitleProps) {
  return <h1 className="text-3xl font-black md:text-4xl">{children}</h1>;
}

type PageHeaderDescriptionProps = React.PropsWithChildren;

export function PageHeaderDescription({
  children,
}: PageHeaderDescriptionProps) {
  return <p className="text-lg text-muted-foreground">{children}</p>;
}
