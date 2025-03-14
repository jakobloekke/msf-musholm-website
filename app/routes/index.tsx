import type { Route } from './+types/splat';
import { useStoryblokState, StoryblokComponent } from '@storyblok/react';
import { getStory } from '../../../../packages/storyblok/src/utils/storyblok';

export const loader = async () => {
  return getStory('');
};

export default function Index({ loaderData }: Route.ComponentProps) {
  let { story } = loaderData;
  story = useStoryblokState(story);
  return <StoryblokComponent blok={story.content} />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  return <div>Error: {error instanceof Error ? error.message : 'Unknown error'}</div>;
}
