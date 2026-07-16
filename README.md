# Chang Liu | 刘畅 — Personal Homepage

This repository hosts the source code for my personal homepage, built with Jekyll and deployed with GitHub Pages.

Public site: https://changliu-weiyu.github.io/

这是我的综合个人主页源码仓库，基于 Jekyll 构建，并通过 GitHub Pages 部署。

公网访问地址：https://changliu-weiyu.github.io/

## Site Structure / 网站结构

- `_config.yml` — site-wide settings and author profile / 全站配置与作者信息
- `_pages/about.md` — homepage content with bilingual language switching / 带中英文切换的首页正文
- `_data/navigation.yml` — top navigation / 顶部导航
- `_includes/` — shared layout snippets, including sidebar and header / 共享布局片段，包括侧边栏和页头
- `_sass/` — site styling / 网站样式
- `assets/` — JavaScript and compiled CSS entry files / JavaScript 与 CSS 入口文件
- `images/` — avatar, favicon, and project images / 头像、网站图标和项目图片
- `files/` — public downloadable files such as CV / 可公开下载的文件，例如简历

## Private Materials / 私有材料

The local `Reference/` directory contains private resume and experience source files used only for drafting content. It is ignored by Git and should not be committed or uploaded.

本地 `Reference/` 目录包含用于整理主页内容的个人简历和经历材料，仅供本地参考。该目录已加入 `.gitignore`，不应提交或上传到 GitHub。

Runtime logs under `logs/` and generated Jekyll output under `_site/` are also ignored.

`logs/` 下的运行日志和 `_site/` 下的 Jekyll 构建产物也不会提交。

## Local Preview / 本地预览

This project currently uses Ruby 3.1 from `D:\Ruby31-x64` on Windows because the GitHub Pages dependency set is older.

当前 Windows 本地环境使用 `D:\Ruby31-x64` 下的 Ruby 3.1，因为 GitHub Pages 依赖版本较旧。

Run:

```powershell
$env:Path = "D:\Ruby31-x64\bin;$env:Path"
bundle _2.2.19_ install
bundle _2.2.19_ exec jekyll serve --host 127.0.0.1 --port 4000 --livereload
```

Open:

```text
http://127.0.0.1:4000
```

If `_config.yml` changes, restart the Jekyll server. Browser refresh alone is not enough for config changes.

如果修改了 `_config.yml`，需要重启 Jekyll 服务；只刷新浏览器不会重新加载配置。

## Deployment / 部署

For the user homepage repository `ChangLiu-weiyu.github.io`, push this repository to GitHub and enable GitHub Pages from the `main` branch, root folder.

对于用户主页仓库 `ChangLiu-weiyu.github.io`，推送到 GitHub 后，在仓库设置中启用从 `main` 分支根目录部署 GitHub Pages。

Recommended pre-commit check:

```powershell
git status --short
```

Make sure `Reference/`, `logs/`, and `_site/` are not staged.

提交前请确认 `Reference/`、`logs/` 和 `_site/` 没有被暂存。

## Credits / 致谢

This site is customized from the AcadHomepage Jekyll template.
