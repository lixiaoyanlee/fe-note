#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add .
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:lixiaoyanlee/lixiaoyanlee.github.io.git main

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f https://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@github.com/lixiaoyanlee/fe-note.git master:gh-pages

cd - 

