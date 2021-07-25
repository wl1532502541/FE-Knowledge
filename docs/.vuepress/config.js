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
      const current = { text: file };
      const subPath = `${path}/${file}`;
      if (fs.statSync(subPath).isDirectory()) {
        current.children = buildChildren(subPath, `${parentName}/${file}`);
      } else {
        if (file === "README.md") {
          current.path = `${parentName}/`;
        } else {
          const suffixName = file.slice(-3);
          if (suffixName !== ".md") return;
          current.link = `${parentName}/${file}`;
          // current.link = `${parentName}/${file.slice(0, -3)}`;
        }
      }
      return current;
    })
    .filter((item) => item);
}

const sidebar = buildChildren(workPath);

module.exports = {
    title:"前端知识整理",
    description:'Just playing around',
    head:[['meta',{name:'referrer',content:'never'}]],//会出现在html的head里，用来绕过语雀的图片防盗链
    themeConfig:{
        // displayAllHeaders:true,
        logo:'/logo/book.png',
        darkmode:true,
        repo:'https://github.com/wl1532502541/FE-Knowledge',
        navbar:[
            {text:"首页",link:'/'},
            {
                text: 'Languages',
                ariaLabel: 'Language Menu',
                children: [
                  { text: 'Chinese', link: '/language/chinese/' },
                  { text: 'Japanese', link: '/language/japanese/' }
                ]
              }
        ],
        sidebar,
        locales:{
          
        }
    }
}