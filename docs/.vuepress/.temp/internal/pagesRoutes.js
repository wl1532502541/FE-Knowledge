import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/","",["/index.html","/README.md"]],
  ["v-7d79ae92","/HTTP/HTTP%E6%8A%A5%E6%96%87%E6%A0%BC%E5%BC%8F.html","",["/HTTP/HTTP报文格式.html","/HTTP/HTTP报文格式.md","/HTTP/HTTP%E6%8A%A5%E6%96%87%E6%A0%BC%E5%BC%8F.md"]],
  ["v-4db0c930","/JS%E5%9F%BA%E7%A1%80/Promise%E9%9D%A2%E8%AF%95%E9%A2%98.html","",["/JS基础/Promise面试题.html","/JS基础/Promise面试题.md","/JS%E5%9F%BA%E7%A1%80/Promise%E9%9D%A2%E8%AF%95%E9%A2%98.md"]],
  ["v-a1f65422","/%E6%B5%8F%E8%A7%88%E5%99%A8/%E6%B5%8F%E8%A7%88%E5%99%A8%E5%86%85%E6%A0%B8%E7%9A%84%E7%90%86%E8%A7%A3.html","",["/浏览器/浏览器内核的理解.html","/浏览器/浏览器内核的理解.md","/%E6%B5%8F%E8%A7%88%E5%99%A8/%E6%B5%8F%E8%A7%88%E5%99%A8%E5%86%85%E6%A0%B8%E7%9A%84%E7%90%86%E8%A7%A3.md"]],
  ["v-3706649a","/404.html","",[]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, title, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta: { title },
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
