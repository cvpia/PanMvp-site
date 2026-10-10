# 任务、日志与运维

## 任务中心

- 查看排队、执行中、已完成、失败和暂停任务。
- 影院 STRM / 刮削支持断点继续。
- STRM 映射任务显示全量或增量模式、生成数、跳过数和清理数。
- 订阅任务支持重试。
- 一键删除会停止运行中任务并删除当前账号任务记录。

## 运行日志

日志按日保存，记录：

- 按钮动作
- API 请求、状态码、耗时和请求 ID
- 任务开始、完成和失败
- 影院图片、刮削和播放事件

可在日志页面设置保留天数和每日清理时间。

## 备份

建议定期备份：

- `data/panmvp.db`
- `data/local.secret`
- 自定义 STRM 根目录和媒体元数据
- 本地输出目录中的 `.panmvp/directory-tree.json` 目录树清单
- Docker 部署时持久化数据卷 `panmvp-data`（包含数据库、密钥和日志）

Docker 部署可用下面的命令导出数据卷：

```powershell
docker run --rm -v panmvp-data:/data -v ${PWD}:/backup alpine `
  tar czf /backup/panmvp-data.tgz -C /data .
```

不要将备份文件上传到公开 GitHub 仓库。
