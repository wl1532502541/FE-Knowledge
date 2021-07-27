export const themeData = {
  "logo": "/logo/book.png",
  "repo": "https://github.com/wl1532502541/FE-Knowledge",
  "editLink": false,
  "navbar": [
    {
      "text": "首页",
      "link": "/"
    }
  ],
  "sidebar": [
    {
      "text": "HTTP",
      "children": [
        "/HTTP/HTTP报文格式.md"
      ]
    },
    {
      "text": "JS基础",
      "children": [
        "/JS基础/Promise面试题.md"
      ]
    },
    {
      "text": "TCP",
      "children": [
        "/TCP/TCP三次握手四次挥手.md",
        "/TCP/TCP报文格式.md"
      ]
    },
    {
      "text": "浏览器",
      "children": [
        "/浏览器/浏览器内核的理解.md"
      ]
    }
  ],
  "sidebarDepth": 3,
  "lastUpdatedText": "上次更新",
  "contributorsText": "贡献者",
  "tip": "提示",
  "warning": "注意",
  "danger": "警告",
  "notFound": [
    "这里什么都没有",
    "我们怎么到这来了？",
    "这是一个 404 页面",
    "看起来我们进入了错误的链接"
  ],
  "darkmode": true,
  "toggleDarkMode": "切换夜间模式",
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "darkMode": true,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "editLinkText": "Edit this page",
  "lastUpdated": true,
  "contributors": true,
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
