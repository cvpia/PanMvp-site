# 安装与升级

## 环境要求

- Windows 10 / 11
- Python 3.12+
- Node.js 20+
- 可选：FFmpeg / FFprobe

## 快速启动

```powershell
Set-ExecutionPolicy -Scope Process Bypass
.\scripts\local.ps1 setup
.\scripts\local.ps1 start
```

访问 `http://localhost:8787`，首次运行创建管理员账号。

## 常用命令

```powershell
.\scripts\local.ps1 status
.\scripts\local.ps1 start -Reload
.\scripts\local.ps1 test
.\scripts\local.ps1 stop
```

## 首次配置

1. 登录 115 网盘并检查头像、用户名、VIP 和空间信息。
2. 设置默认转存目录。
3. 配置 TMDB API Key。
4. 配置 STRM 根目录、FFmpeg、FFprobe 和通知渠道。
