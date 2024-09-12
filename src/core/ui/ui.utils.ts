// https://css-tricks.com/snippets/javascript/strip-html-tags-in-javascript/
export function stripHtml(content: string) {
  const strippedContent = content.replaceAll(/(<([^>]+)>)/gi, '');
  return strippedContent;
}
