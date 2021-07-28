export const siteData = {
  "base": "/",
  "lang": "en-US",
  "title": "前端知识整理",
  "description": "Just playing around",
  "head": [
    [
      "meta",
      {
        "name": "referrer",
        "content": "never"
      }
    ],
    [
      "link",
      {
        "href": "/logo/klee.ico",
        "rel": "SHORTCUT ICON"
      }
    ]
  ],
  "locales": {}
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
