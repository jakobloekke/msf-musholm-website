import { storyblokEditable } from '@storyblok/react';
import type { TeaserStoryblok } from '../../component-types-sb';

const Teaser = ({ blok }: { blok: TeaserStoryblok }) => {
  return (
    <div
      {...storyblokEditable(blok)}
      key={blok._uid}
      className="py-32 text-6xl text-[#50b0ae] font-bold text-center"
    >
      {blok.headline}

      <div className="flex justify-center">
        <div className="w-1/2">
          <img
            sizes="(min-width: 50em) 50em, 100vw"
            srcSet={`${blok.image?.filename.replace('/upload/', '/upload/f_auto/q_auto/c_scale,w_256/')} 256w,
                    ${blok.image?.filename.replace('/upload/', '/upload/f_auto/q_auto/c_scale,w_512/')} 512w,
                    ${blok.image?.filename.replace('/upload/', '/upload/f_auto/q_auto/c_scale,w_768/')} 768w,
                    ${blok.image?.filename.replace('/upload/', '/upload/f_auto/q_auto/c_scale,w_1024/')} 1024w,
                    ${blok.image?.filename.replace('/upload/', '/upload/f_auto/q_auto/c_scale,w_1280/')} 1280w`}
            src={`${blok.image?.filename.replace('/upload/', '/upload/f_auto/q_auto/c_scale,w_512/')}`}
            alt={blok.image?.alt || ''}
          />
        </div>
      </div>
    </div>
  );
};

export default Teaser;
