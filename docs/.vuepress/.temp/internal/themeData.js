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
      "text": "HTTP",
      "children": [
        {
          "text": "HTTP报文格式.md",
          "link": "/HTTP/HTTP报文格式.md"
        }
      ]
    },
    {
      "text": "JS基础",
      "children": [
        {
          "text": "Promise面试题.md",
          "link": "/JS基础/Promise面试题.md"
        }
      ]
    },
    {
      "text": "浏览器",
      "children": [
        {
          "text": "浏览器内核的理解.md",
          "link": "/浏览器/浏览器内核的理解.md"
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
