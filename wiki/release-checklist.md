# 版本发布检查

每个面向用户的功能版本必须完成：

- [ ] 更新 `VERSION`、前端和包版本。
- [ ] 更新 `docs/changelog.html`。
- [ ] 更新 `docs/guide.html` 和 Wiki Markdown。
- [ ] 更新官网首页功能介绍。
- [ ] 运行 `.\scripts\publish-site.ps1`，把 `docs/` 同步到 GitHub Pages 仓库 `cvpia/PanMvp-site` 并确认线上页面已更新。
- [ ] 使用桌面端和移动端浏览器验收。
- [ ] 验证所有导航、按钮、复制命令和链接。
- [ ] 确认 Pages artifact 不包含源码、数据库、Cookie、密钥或日志。
- [ ] 如需分发镜像，运行 `.\scripts\docker-release.ps1` 并确认 Docker Hub 标签。
