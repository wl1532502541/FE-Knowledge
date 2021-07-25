export const themeData = {
  "displayAllHeaders": true,
  "logo": "/logo/book.png",
  "nav": [
    {
      "text": "首页",
      "link": "/"
    },
    {
      "text": "Languages",
      "ariaLabel": "Language Menu",
      "items": [
        {
          "text": "Chinese",
          "link": "/language/chinese/"
        },
        {
          "text": "Japanese",
          "link": "/language/japanese/"
        }
      ]
    }
  ],
  "sidebar": [
    {
      "title": "HTTP",
      "children": [
        {
          "title": "HTTP报文格式.md",
          "path": "/HTTP/HTTP报文格式"
        }
      ]
    },
    {
      "title": "JS基础",
      "children": [
        {
          "title": "Promise面试题.md",
          "path": "/JS基础/Promise面试题"
        }
      ]
    },
    {
      "title": "浏览器",
      "children": [
        {
          "title": "浏览器内核的理解.md",
          "path": "/浏览器/浏览器内核的理解"
        }
      ]
    }
  ],
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "navbar": [],
  "darkMode": true,
  "repo": null,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebarDepth": 2,
  "editLink": true,
  "editLinkText": "Edit this page",
  "lastUpdated": true,
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
