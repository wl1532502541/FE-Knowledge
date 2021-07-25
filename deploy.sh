#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
yarn run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.yourwebsite.com' > CNAME

git init 
git add -A
git commit -m 'deploy'
git branch -M main
git remote add origin https://github.com/wl1532502541/wl1532502541.github.io.git
git pull origin main --allow-unrelated-histories
git push -u origin main
# 如果你想要部署到 https://USERNAME.github.io
# git push -f git@github.com:wl1532502541/wl1532502541.github.io.git main

# 如果发布到 https://USERNAME.github.io/<REPO>  REPO=github上的项目
# git push -f git@github.com:USERNAME/<REPO>.git master:gh-pages


cd -