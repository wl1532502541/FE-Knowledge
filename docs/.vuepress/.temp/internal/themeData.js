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
      "text": "CSS",
      "children": [
        "/CSS/link和@import.md"
      ]
    },
    {
      "text": "HTTP",
      "children": [
        "/HTTP/HTTP报文格式.md",
        "/HTTP/HTTP版本.md",
        "/HTTP/HTTP状态码.md"
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
        "/TCP/TCP报文格式.md",
        "/TCP/TCP重传、流量控制与拥塞控制.md"
      ]
    },
    {
      "text": "前后端通信",
      "children": [
        "/前后端通信/跨域.md"
      ]
    },
    {
      "text": "浏览器",
      "children": [
        "/浏览器/浏览器内核的理解.md"
      ]
    },
    {
      "text": "算法",
      "children": [
        "/算法/十大经典排序算法.md"
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
