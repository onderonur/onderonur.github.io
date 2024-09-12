import type { Thing, WithContext } from 'schema-dts';

type JsonLdProps<T extends Thing> = {
  content: WithContext<T>;
};

export function JsonLd<T extends Thing>({ content }: JsonLdProps<T>) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(content) }}
    />
  );
}
