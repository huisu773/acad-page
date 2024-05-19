import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '8cfcd636457e461281ff7d59540af1f1',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: '绘素的主页',
  domain: 'https://hssh.notion.site/8cfcd636457e461281ff7d59540af1f1',
  author: '绘素',

  // open graph metadata (optional)
  description: '绘素的主页',

  // social usernames (optional)
  // twitter: 'huisui773',
  // github: 'huisui773',
  // linkedin: 'fisch2',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  pageUrlOverrides: {
    '/notes': 'fedae8b128a447f993dfce6db9642e72',
    '/blog': '71dfa4d6c9814ce3963398a5b36a5104'
  },
  // pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages. To use `navigationLinks`, set `navigationStyle` to `custom`.
  // navigationStyle: 'default'
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'About',
      pageId: '8cfcd636457e461281ff7d59540af1f1'
    },
    {
      title: 'Notes',
      pageId: 'fedae8b128a447f993dfce6db9642e72'
    },
    {
      title: 'Blog',
      pageId: '71dfa4d6c9814ce3963398a5b36a5104'
    },
  ]
})
