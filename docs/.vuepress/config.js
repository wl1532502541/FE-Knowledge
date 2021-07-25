module.exports = {
  lang: 'zh-CN',
  title: '你好， VuePress ！',
  description: '这是我的第一个 VuePress 站点',
  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
  },
  plugins: [
    [
      'vuepress-plugin-yuque', {
        // 这里可以使用你自己的语雀 Repo
        repoUrl: 'https://www.yuque.com/wanglei-7ljle/ald1g0',
      }
    ]
  ]
}