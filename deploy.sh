###
 # @Description: 
 # @Version: 2.0
 # @Autor: yangsen
 # @Date: 2022-01-05 09:14:00
 # @LastEditors: yangsen
 # @LastEditTime: 2022-02-20 20:19:54
### 
#!/usr/bin/env sh

# 忽略错误
set -e
#先推送master分支到远程master分支
git add -A
git commit -m '增加配置'
git push git@github.com:linghuchong-123/asen.git master:master

# 构建
yarn docs:build

# 进入待发布的目录

cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

# git 能在一个文件夹中新建一个
git init
git add -A
git commit -m 'deploy'

# 如果是部署到 https://<USERNAME>.github.io/<REPO>  git@github.com:linghuchong-123/qiangsen.git
git push -f git@github.com:linghuchong-123/asen.git master:blog

cd -