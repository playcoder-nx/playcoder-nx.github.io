
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
git branch -m master main
git add -A
git commit -m 'deploy'

# 如果发布到 https://playcoder-nx.github.io
# git push -f git@github.com:playcoder-nx.github.io.git main

# 如果发布到 https://playcoder-nx.github.io/<REPO>

git push -f git@github.com:playcoder-nx.git main

cd -

