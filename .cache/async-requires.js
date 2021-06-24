// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---src-pages-404-js": () => import("./../../../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-blog-js": () => import("./../../../src/pages/blog.js" /* webpackChunkName: "component---src-pages-blog-js" */),
  "component---src-pages-collection-js": () => import("./../../../src/pages/collection.js" /* webpackChunkName: "component---src-pages-collection-js" */),
  "component---src-pages-home-js": () => import("./../../../src/pages/home.js" /* webpackChunkName: "component---src-pages-home-js" */),
  "component---src-pages-index-js": () => import("./../../../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-index-old-js": () => import("./../../../src/pages/indexOld.js" /* webpackChunkName: "component---src-pages-index-old-js" */),
  "component---src-templates-blog-post-js": () => import("./../../../src/templates/blog-post.js" /* webpackChunkName: "component---src-templates-blog-post-js" */)
}

