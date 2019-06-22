# hugo-theme-even

A super concise theme for Hugo

> 该主题移植自 [hexo-theme-even](https://github.com/ahonn/hexo-theme-even)

[在线预览 Demo](https://factory011.github.io/)

## Screenshots

![even-showcase](https://raw.githubusercontent.com/olOwOlo/hugo-theme-even/master/images/showcase.png)

## Installation Hugo（windows）

1. 转到[Hugo Releases](https://github.com/gohugoio/hugo/releases)页面下载exe执行文件。
2. 最新版本在顶部公布。滚动到发布公告的底部以查看下载。找到底部附近的Windows文件（它们按字母顺序排列，因此Windows是最后一个） - 根据您是否具有32位或64位Windows，下载32位或64位文件，例如我下载的文件名称为`hugo_0.55.6_Windows-64bit.zip`。
3. 将ZIP文件解压移动到您的`D:\Hugo\bin`文件夹中。
4. 现在应该有一个新文件：hugo可执行文件`hugo.exe`。
5. 将执行文件目录`D:\Hugo\bin`添加到电脑系统环境变量`path`中。
6. 打开cmd命令窗口输入`hugo version`，得到类似如下结果`Hugo Static Site Generator v0.55.6-A5D4C82D windows/amd64 BuildDate: 2019-05-18T07:57:00Z`，说明Hugo安装成功。

## Installation Theme（windows）

1、创建blog文件，在上一步的`D:\Hugo`目录中执行

```JS
hugo new site blog
```

2、添加主题（需[安装git](<https://git-scm.com/downloads>)）

```bash
// 进入D:\Hugo\blog\themes目录中
cd blog/themes
// 将hugo-theme-even主题克隆到本地，文件名称由hugo-theme-even改成even
$ git clone https://github.com/olOwOlo/hugo-theme-even themes/even
```

**重要:**在 `D:\Hugo\blog\themes\even\exampleSite`目录下有一个 [`config.toml`](https://github.com/olOwOlo/hugo-theme-even/blob/master/exampleSite/config.toml) 文件，**将这个 `config.toml` 文件复制到你的站点目录下（blog目录）**，根据自己的需求更改即可。

**注意:** 对于这个主题，你应该使用 **post** 而不是 **posts**，即新建文章的执行命令是`hugo new post/some-content.md`。

## Language Support

> 翻译资源在 [`themes/even/i18n/`](https://github.com/olOwOlo/hugo-theme-even/tree/master/i18n) 文件夹（内置在主题中），以及站点根目录下的 `i18n/` 文件夹中。两个文件夹下的翻译资源将会被合并，且根目录下的优先级大于内置于主题中的。

只需要正确的设置 [`defaultContentLanguage`](https://github.com/olOwOlo/hugo-theme-even/blob/master/exampleSite/config.toml#L3) 的值即可使用翻译资源。

```toml
defaultContentLanguage = "en"  # en / zh-cn / other...
```

同样也支持其他语言。举例来说，为支持德语，在站点根目录下创建 `/i18n/de.yaml` 文件。参考 [`en.yaml`](https://github.com/olOwOlo/hugo-theme-even/tree/master/i18n/en.yaml) 文件查看如何编写翻译资源。

附：在多语言模式下，当前正被用于渲染网站的语言会被用于匹配翻译资源。

## Favicon

为了定制 favicon，你需要在站点根目录的 `static` 文件夹下放置下述**所有**文件，这将覆盖 [`themes/even/static/`](https://github.com/olOwOlo/hugo-theme-even/tree/master/static) 文件夹下的那些文件。

- android-chrome-192x192.png
- android-chrome-512x512.png
- apple-touch-icon.png
- browserconfig.xml
- favicon.ico
- favicon-16x16.png
- favicon-32x32.png
- manifest.json
- mstile-150x150.png
- safari-pinned-tab.svg

[favicon generator (Google)](https://www.google.com/search?q=favicon+generator) 能够帮助你生成这些文件。

## Front Matter

你可以通过 front-matter 针对每一篇文章单独进行设置。[`themes/even/archetypes/default.md`](https://github.com/olOwOlo/hugo-theme-even/tree/master/archetypes/default.md) 文件陈列了所有可用的参数。将该文件复制到站点根目录的 `archetypes` 文件夹下将会有所帮助。

## Shortcodes

主题提供了 `center`,` right`, `left`,` music`, `admonition` 这些 shortcodes，并支持为内置的 `figure` 设置 `center`,` right`, `left` 这三种 class 值。点击[这里](https://blog.olowolo.com/example-site/post/shortcodes/)查看详细内容。

## Theme Color 

主题内置了五种颜色 ( Default | Mint Green | Cobalt Blue | Hot Pink | Dark Violet )，你可以通过改变 [`/src/css/_variable.scss`](https://github.com/olOwOlo/hugo-theme-even/blob/master/src/css/_variables.scss#L5-L8) 文件中 `$theme-color-config` 的值来改变主题的颜色。
    
## Build

如果你更改了 `/src/` 目录下的任意文件，你需要重新编译它们。
```bash
cd ./themes/even/
# install dependencies
yarn install
# build
yarn build
```

_你需要先安装 **[Yarn](https://yarnpkg.com/)** 和 **[Node.js](https://nodejs.org/)**。_

## Update Theme

```bash
cd ./themes/even/
git pull
```

## Host on Github

1、在Github上创建一个名称为`xxxxxx.github.io`的仓库（xxxxxx为你的Github账号名称）。

2、在`D:\Hugo\blog\themes`目录执行

```JS
$ git init
$ git remote add origin git@github.com:xxxxxxx/factory011.github.io.git
```

3、在`D:\Hugo\blog`目录新建脚本文件`deploy.sh`。

4、在站点根目录右键打开`git bash`窗口执行脚本文件或者选中脚本文件右键属性，打开方式选择`git bash`执行程序，然后双击脚本文件即可将`public`一键部署到Github上。

```JS
#!/bin/bash

echo -e "\033[0;32mDeploying updates to GitHub...\033[0m"

# Build the project.
hugo # if using a theme, replace by `hugo -t <yourtheme>`

# Go To Public folder
cd public
# Add changes to git.
git add -A

# Commit changes.
msg="rebuilding site `date`"
if [ $# -eq 1 ]
  then msg="$1"
fi
git commit -m "$msg"

# Push source and build repos.
git push origin master

# Come Back
cd ..
```

5、打开`xxxxxx.github.io`仓库的setting配置，往下找到Github Pages，选择master branch开启page服务，访问page地址，出现页面即完成。

## License

Released under the [MIT](https://github.com/olOwOlo/hugo-theme-even/blob/master/LICENSE.md) License.https://github.com/laozhu/hugo-nuo)
