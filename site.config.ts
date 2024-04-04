import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '307c59ae4b82454faf5c7bf8f5cc291f',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Jiaxiang Sun',
  domain: 'https://hssh.notion.site/hssh/Jiaxiang-Sun-Kyle-Suen-307c59ae4b82454faf5c7bf8f5cc291f',
  author: 'Jiaxiang Sun',

  // open graph metadata (optional)
  description: 'Jiaxiang Sun\'s Academic Page',

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
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages. To use `navigationLinks`, set `navigationStyle` to `custom`.
  navigationStyle: 'default'
  // navigationStyle: 'custom',
  // navigationLinks: [
  //   {
  //     title: 'About',
  //     pageId: '307c59ae4b82454faf5c7bf8f5cc291f'
  //   },
  //   {
  //     title: 'Notes',
  //     pageId: '1b847722adeb41efa942b35d08fcd524'
  //   },
  //   {
  //     title: 'Blog',
  //     pageId: 'd799df365d68473c8f4c32adacb71d5b'
  //   },
  // ]
})
