# Chang Liu | 刘畅 — Personal Homepage

This repository hosts the source code for my personal homepage, built with Jekyll and deployed with GitHub Pages.

这是我的综合个人主页源码仓库，基于 Jekyll 构建，并计划通过 GitHub Pages 部署。

## Site Structure / 网站结构

- `_config.yml` — site-wide settings and author profile / 全站配置与作者信息
- `_pages/about.md` — homepage content / 首页正文内容
- `_data/navigation.yml` — top navigation / 顶部导航
- `images/` — avatar, favicon, and project images / 头像、网站图标和项目图片
- `files/` — downloadable files such as CV / 简历等下载文件

## Local Preview / 本地预览

Install Ruby first, then run:

```powershell
bundle install
bundle exec jekyll liveserve
```

Open:

```text
http://127.0.0.1:4000
```

如果 Windows 上还没有 Ruby，建议安装 RubyInstaller with Devkit，然后重新打开终端再运行上面的命令。

## Deployment / 部署

For a user homepage repository named `ChangLiu-weiyu.github.io`, push this repository to GitHub and enable GitHub Pages from the `main` branch.

对于名为 `ChangLiu-weiyu.github.io` 的用户主页仓库，推送到 GitHub 后，在仓库设置中启用从 `main` 分支部署 GitHub Pages。

## Credits / 致谢

This site is customized from the AcadHomepage Jekyll template.
