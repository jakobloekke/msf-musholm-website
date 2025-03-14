import { storyblokEditable, StoryblokComponent } from '@storyblok/react';
import type { PageStoryblok } from '../../component-types-sb';

const Page = ({ blok }: { blok: PageStoryblok }) => (
  <main {...storyblokEditable(blok)} key={blok._uid} className="px-4">
    <h1>Page</h1>
    {blok.body?.map(nestedBlok => {
      return <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />;
    })}
  </main>
);

export default Page;
