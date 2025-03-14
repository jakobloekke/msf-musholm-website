import "./app.css";

import initializeRoot from "@msf/shared-core/initializeRoot";
import Layout from "@msf/shared-core/RootLayout";
import ErrorBoundary from "@msf/shared-core/RootErrorBoundary";

import Page from './components/Page';
import Teaser from './components/Teaser';
import RichTextBlock from './components/RichTextBlock';

const components = {
  page: Page,
  teaser: Teaser,
  RichTextBlock: RichTextBlock,
}

export default initializeRoot({
  components,
  accessToken: import.meta.env.VITE_STORYBLOK_ACCESS_TOKEN,
});

export { Layout, ErrorBoundary };