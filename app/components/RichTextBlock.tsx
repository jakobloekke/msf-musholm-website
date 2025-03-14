import { storyblokEditable } from '@storyblok/react';
import { MarkTypes, richTextResolver } from '@storyblok/richtext';
import type { RichTextBlockStoryblok } from '@msf/storyblok/types';
import parseUrl from '@msf/storyblok/utils/parseUrl';

const RichTextBlock = ({ blok }: { blok: RichTextBlockStoryblok }) => {
  const resolver = richTextResolver({
    resolvers: {
      [MarkTypes.LINK]: node => {
        return `<a href="${parseUrl(node.attrs?.href)}" target="${node.attrs?.target}" 
            class="text-blue-500 hover:text-blue-700 underline transition-colors duration-200 ease-in-out">
            ${node.text}
          </a>`;
      },
    },
  });

  if (!blok.rte_content) {
    return null;
  }

  // @ts-expect-error - Type issues with Storyblok Richtext package
  const renderedContent = resolver.render(blok.rte_content) as string;

  return (
    <div {...storyblokEditable(blok)} key={blok._uid} className="prose max-w-none">
      <div dangerouslySetInnerHTML={{ __html: renderedContent }} />
    </div>
  );
};

export default RichTextBlock;
