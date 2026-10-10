# PanMVP Wiki

PanMVP 是本地优先的 115 网盘媒体网关。本目录同时作为静态官网说明书源文件和 GitHub Wiki 导入建议内容。

## 目录

- [安装与升级](installation.md)
- [目录树与 STRM 生成](strm.md)
- [影院与 TMDB 刮削](cinema.md)
- [任务、日志与运维](operations.md)
- [故障排查](troubleshooting.md)
- [版本发布检查](release-checklist.md)

## 发布边界

GitHub Pages 只发布 `docs/` 下的静态网站和说明文档。请勿把以下内容发布到 Pages、Wiki 或 Issue：

- 后端源码和运行环境
- `.env` 与 `PANMVP_SECRET_KEY`
- 115 Cookie、API Key、通知凭据
- SQLite 数据库、日志和本机路径截图
