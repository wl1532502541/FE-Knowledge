const fs = require("fs");
const path = require("path");
const process = require("process");

const ignoreList = [".vuepress","README.md"];

const workPath = path.join(process.cwd() + "/docs");

function buildChildren(path, parentName = "") {
  const files = fs.readdirSync(path);
  return files
    .map((file) => {
      if (ignoreList.includes(file)) return;
      // const current = { text: file };
      let current = { text: file };
      const subPath = `${path}/${file}`;
      if (fs.statSync(subPath).isDirectory()) {
        current.children = buildChildren(subPath, `${parentName}/${file}`);
      } else {
        if (file === "README.md") {
          current.link = `${parentName}/`;
        } else {
          // const suffixName = file.slice(-3);
          // if (suffixName !== ".md") return;
          // current.link = `${parentName}/${file}`;
          // current.link = `${parentName}/${file.slice(0, -3)}`;
          current=`${parentName}/${file}`
        }
      }
      return current;
    })
    .filter((item) => item);
}

const sidebar = buildChildren(workPath);
console.log(sidebar)
module.exports = {
    title:"前端知识整理",
    description:'Just playing around',
    head:[
      ['meta',{name:'referrer',content:'never'}],//会出现在html的head里，用来绕过语雀的图片防盗链
      ['link',{href:'/logo/klee.ico',rel:'SHORTCUT ICON'}]
    ],
    base:"/FE-Knowledge/",
    dest:"dist",
    themeConfig:{
        logo:'/logo/book.png',
        repo:'https://github.com/wl1532502541/FE-Knowledge',
        editLink:false,
        //navbar 
        navbar:[
            {text:"首页",link:'/'},
        ],
        //sidebar
        sidebar,
        sidebarDepth:3,
        // page meta
        lastUpdatedText: '上次更新',
        contributorsText: '贡献者',
        // custom containers
        tip: '提示',
        warning: '注意',
        danger: '警告',
        // 404 page
        notFound: [
          '这里什么都没有',
          '我们怎么到这来了？',
          '这是一个 404 页面',
          '看起来我们进入了错误的链接',
        ],
        //darkmode
        darkmode:true,
        toggleDarkMode: '切换夜间模式',
    }
}