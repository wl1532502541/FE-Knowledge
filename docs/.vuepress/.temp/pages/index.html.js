export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "",
  "lang": "en-US",
  "frontmatter": {
    "home": true,
    "heroImage": "/logo/keli.jpg",
    "heroText": "leinaldo",
    "tagline": "前端知识整理",
    "actions": [
      {
        "text": "I need offer →",
        "link": "/浏览器/浏览器内核的理解.md",
        "type": "primary"
      }
    ],
    "features": [
      {
        "title": "8小时工作",
        "details": "i need offer"
      },
      {
        "title": "8小时玩耍",
        "details": "和可莉去炸鱼"
      },
      {
        "title": "8小时休息",
        "details": "呼呼睡大觉"
      }
    ],
    "footer": "MIT Licensed | Copyright © 2018-present Evan You"
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": "README.md",
  "git": {
    "updatedTime": 1627219585000,
    "contributors": [
      {
        "name": "wl1532502541",
        "email": "1532502541@qq.com",
        "commits": 3
      }
    ]
  }
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
