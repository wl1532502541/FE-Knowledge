import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/","",["/index.html","/README.md"]],
  ["v-5286cf3c","/CSS/link%E5%92%8C@import.html","link和@import",["/CSS/link和@import.html","/CSS/link%E5%92%8C@import","/CSS/link和@import.md","/CSS/link%E5%92%8C@import.md"]],
  ["v-7d79ae92","/HTTP/HTTP%E6%8A%A5%E6%96%87%E6%A0%BC%E5%BC%8F.html","HTTP报文格式",["/HTTP/HTTP报文格式.html","/HTTP/HTTP%E6%8A%A5%E6%96%87%E6%A0%BC%E5%BC%8F","/HTTP/HTTP报文格式.md","/HTTP/HTTP%E6%8A%A5%E6%96%87%E6%A0%BC%E5%BC%8F.md"]],
  ["v-05028e6b","/HTTP/HTTP%E7%89%88%E6%9C%AC.html","HTTP 各版本",["/HTTP/HTTP版本.html","/HTTP/HTTP%E7%89%88%E6%9C%AC","/HTTP/HTTP版本.md","/HTTP/HTTP%E7%89%88%E6%9C%AC.md"]],
  ["v-1b6cc663","/HTTP/HTTP%E7%8A%B6%E6%80%81%E7%A0%81.html","HTTP状态码",["/HTTP/HTTP状态码.html","/HTTP/HTTP%E7%8A%B6%E6%80%81%E7%A0%81","/HTTP/HTTP状态码.md","/HTTP/HTTP%E7%8A%B6%E6%80%81%E7%A0%81.md"]],
  ["v-4db0c930","/JS%E5%9F%BA%E7%A1%80/Promise%E9%9D%A2%E8%AF%95%E9%A2%98.html","Promise面试题",["/JS基础/Promise面试题.html","/JS%E5%9F%BA%E7%A1%80/Promise%E9%9D%A2%E8%AF%95%E9%A2%98","/JS基础/Promise面试题.md","/JS%E5%9F%BA%E7%A1%80/Promise%E9%9D%A2%E8%AF%95%E9%A2%98.md"]],
  ["v-67de011e","/JS%E5%9F%BA%E7%A1%80/script%20%E6%A0%87%E7%AD%BE%E4%B8%AD%E7%9A%84%20async%20%E5%92%8C%20defer%20%E5%B1%9E%E6%80%A7.html","script 标签中的 async 和 defer 属性",["/JS基础/script 标签中的 async 和 defer 属性.html","/JS%E5%9F%BA%E7%A1%80/script%20%E6%A0%87%E7%AD%BE%E4%B8%AD%E7%9A%84%20async%20%E5%92%8C%20defer%20%E5%B1%9E%E6%80%A7","/JS基础/script 标签中的 async 和 defer 属性.md","/JS%E5%9F%BA%E7%A1%80/script%20%E6%A0%87%E7%AD%BE%E4%B8%AD%E7%9A%84%20async%20%E5%92%8C%20defer%20%E5%B1%9E%E6%80%A7.md"]],
  ["v-defdb5b8","/TCP/TCP%E4%B8%89%E6%AC%A1%E6%8F%A1%E6%89%8B%E5%9B%9B%E6%AC%A1%E6%8C%A5%E6%89%8B.html","TCP三次握手四次挥手",["/TCP/TCP三次握手四次挥手.html","/TCP/TCP%E4%B8%89%E6%AC%A1%E6%8F%A1%E6%89%8B%E5%9B%9B%E6%AC%A1%E6%8C%A5%E6%89%8B","/TCP/TCP三次握手四次挥手.md","/TCP/TCP%E4%B8%89%E6%AC%A1%E6%8F%A1%E6%89%8B%E5%9B%9B%E6%AC%A1%E6%8C%A5%E6%89%8B.md"]],
  ["v-5941be8e","/TCP/TCP%E6%8A%A5%E6%96%87%E6%A0%BC%E5%BC%8F.html","TCP报文格式",["/TCP/TCP报文格式.html","/TCP/TCP%E6%8A%A5%E6%96%87%E6%A0%BC%E5%BC%8F","/TCP/TCP报文格式.md","/TCP/TCP%E6%8A%A5%E6%96%87%E6%A0%BC%E5%BC%8F.md"]],
  ["v-84d1ba32","/TCP/TCP%E9%87%8D%E4%BC%A0%E3%80%81%E6%B5%81%E9%87%8F%E6%8E%A7%E5%88%B6%E4%B8%8E%E6%8B%A5%E5%A1%9E%E6%8E%A7%E5%88%B6.html","TCP重传、流量控制与拥塞控制",["/TCP/TCP重传、流量控制与拥塞控制.html","/TCP/TCP%E9%87%8D%E4%BC%A0%E3%80%81%E6%B5%81%E9%87%8F%E6%8E%A7%E5%88%B6%E4%B8%8E%E6%8B%A5%E5%A1%9E%E6%8E%A7%E5%88%B6","/TCP/TCP重传、流量控制与拥塞控制.md","/TCP/TCP%E9%87%8D%E4%BC%A0%E3%80%81%E6%B5%81%E9%87%8F%E6%8E%A7%E5%88%B6%E4%B8%8E%E6%8B%A5%E5%A1%9E%E6%8E%A7%E5%88%B6.md"]],
  ["v-096164bd","/Vue2/Vuex.html","Vuex",["/Vue2/Vuex","/Vue2/Vuex.md"]],
  ["v-438f4e38","/%E5%89%8D%E5%90%8E%E7%AB%AF%E9%80%9A%E4%BF%A1/ajax.html","ajax",["/前后端通信/ajax.html","/%E5%89%8D%E5%90%8E%E7%AB%AF%E9%80%9A%E4%BF%A1/ajax","/前后端通信/ajax.md","/%E5%89%8D%E5%90%8E%E7%AB%AF%E9%80%9A%E4%BF%A1/ajax.md"]],
  ["v-9953bb46","/%E5%89%8D%E5%90%8E%E7%AB%AF%E9%80%9A%E4%BF%A1/%E8%B7%A8%E5%9F%9F.html","跨域",["/前后端通信/跨域.html","/%E5%89%8D%E5%90%8E%E7%AB%AF%E9%80%9A%E4%BF%A1/%E8%B7%A8%E5%9F%9F","/前后端通信/跨域.md","/%E5%89%8D%E5%90%8E%E7%AB%AF%E9%80%9A%E4%BF%A1/%E8%B7%A8%E5%9F%9F.md"]],
  ["v-44637a10","/%E6%89%8B%E5%86%99/%E5%B0%81%E8%A3%85ajax.html","封装ajax",["/手写/封装ajax.html","/%E6%89%8B%E5%86%99/%E5%B0%81%E8%A3%85ajax","/手写/封装ajax.md","/%E6%89%8B%E5%86%99/%E5%B0%81%E8%A3%85ajax.md"]],
  ["v-3ee2c5ca","/%E6%89%8B%E5%86%99/%E6%B7%B1%E6%B5%85%E6%8B%B7%E8%B4%9D.html","深浅拷贝",["/手写/深浅拷贝.html","/%E6%89%8B%E5%86%99/%E6%B7%B1%E6%B5%85%E6%8B%B7%E8%B4%9D","/手写/深浅拷贝.md","/%E6%89%8B%E5%86%99/%E6%B7%B1%E6%B5%85%E6%8B%B7%E8%B4%9D.md"]],
  ["v-7d89afa6","/%E6%B5%8F%E8%A7%88%E5%99%A8/%E4%BB%8E%E8%BE%93%E5%85%A5url%E5%88%B0%E6%98%BE%E7%A4%BA%E5%8F%91%E7%94%9F%E4%BA%86%E4%BB%80%E4%B9%88.html","从输入url到显示发生了什么",["/浏览器/从输入url到显示发生了什么.html","/%E6%B5%8F%E8%A7%88%E5%99%A8/%E4%BB%8E%E8%BE%93%E5%85%A5url%E5%88%B0%E6%98%BE%E7%A4%BA%E5%8F%91%E7%94%9F%E4%BA%86%E4%BB%80%E4%B9%88","/浏览器/从输入url到显示发生了什么.md","/%E6%B5%8F%E8%A7%88%E5%99%A8/%E4%BB%8E%E8%BE%93%E5%85%A5url%E5%88%B0%E6%98%BE%E7%A4%BA%E5%8F%91%E7%94%9F%E4%BA%86%E4%BB%80%E4%B9%88.md"]],
  ["v-a1f65422","/%E6%B5%8F%E8%A7%88%E5%99%A8/%E6%B5%8F%E8%A7%88%E5%99%A8%E5%86%85%E6%A0%B8%E7%9A%84%E7%90%86%E8%A7%A3.html","浏览器内核的理解",["/浏览器/浏览器内核的理解.html","/%E6%B5%8F%E8%A7%88%E5%99%A8/%E6%B5%8F%E8%A7%88%E5%99%A8%E5%86%85%E6%A0%B8%E7%9A%84%E7%90%86%E8%A7%A3","/浏览器/浏览器内核的理解.md","/%E6%B5%8F%E8%A7%88%E5%99%A8/%E6%B5%8F%E8%A7%88%E5%99%A8%E5%86%85%E6%A0%B8%E7%9A%84%E7%90%86%E8%A7%A3.md"]],
  ["v-0aa21b7c","/%E7%AE%97%E6%B3%95/%E5%8D%81%E5%A4%A7%E7%BB%8F%E5%85%B8%E6%8E%92%E5%BA%8F%E7%AE%97%E6%B3%95.html","十大经典排序算法",["/算法/十大经典排序算法.html","/%E7%AE%97%E6%B3%95/%E5%8D%81%E5%A4%A7%E7%BB%8F%E5%85%B8%E6%8E%92%E5%BA%8F%E7%AE%97%E6%B3%95","/算法/十大经典排序算法.md","/%E7%AE%97%E6%B3%95/%E5%8D%81%E5%A4%A7%E7%BB%8F%E5%85%B8%E6%8E%92%E5%BA%8F%E7%AE%97%E6%B3%95.md"]],
  ["v-3706649a","/404.html","",["/404"]],
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
