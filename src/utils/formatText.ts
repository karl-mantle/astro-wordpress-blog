export function cleanParagraphTags(input: string): string {
    if (!input) return '';
    return input.replace(/<\/?p>/g, '');
  }
 