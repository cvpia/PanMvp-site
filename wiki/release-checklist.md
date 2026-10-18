# 版本发布检查

每个面向用户的功能版本必须完成：

- [ ] 每次代码改动递增补丁版本（默认 patch；用户指定时按 minor/major），同步更新 `VERSION`、`frontend/package.json`、`frontend/package-lock.json`、`backend/pyproject.toml`。
- [ ] 确认登录页、初始化页和控制台顶栏显示同一版本号。
- [ ] 更新 `docs/changelog.html`。
- [ ] 更新 `docs/guide.html` 和 Wiki Markdown。
- [ ] 更新官网首页功能介绍。
- [ ] 运行 `.\scripts\publish-site.ps1`，把 `docs/` 同步到 GitHub Pages 仓库 `cvpia/PanMvp-site` 并确认线上页面已更新。
- [ ] 使用桌面端和移动端浏览器验收。
- [ ] 验证所有导航、按钮、复制命令和链接。
- [ ] 确认 Pages artifact 不包含源码、数据库、Cookie、密钥或日志。
- [ ] 如需分发镜像，运行 `.\scripts\docker-release.ps1` 并确认 Docker Hub 标签。
