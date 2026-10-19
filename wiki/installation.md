# 安装与升级

PanMVP 提供两种运行方式，任选其一：**Windows 本机运行（推荐）** 与 **Docker 镜像运行（可选）**。两种方式使用同一套应用和 SQLite 数据结构，数据始终保存在你自己的电脑或数据卷里。

## 环境要求

本机运行（推荐）：

- Windows 10 / 11
- Python 3.12+
- Node.js 20+
- 可选：FFmpeg / FFprobe

Docker 运行（可选）：

- Docker Desktop，或 Docker Engine 24+
- 无需在本机安装 Python、Node 和 FFmpeg，镜像内已包含

## 快速启动（本机）

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

## Docker 镜像部署（可选）

官方镜像：`xxoo520zls/panmvp:0.2.4`，滚动标签 `xxoo520zls/panmvp:latest`。

### 启动容器

```powershell
docker run -d --name panmvp `
  --restart unless-stopped `
  -p 8787:8787 `
  -v panmvp-data:/data `
  -e PANMVP_SECRET_KEY="<32 位以上随机字符串>" `
  -e PANMVP_PUBLIC_BASE_URL="http://localhost:8787" `
  xxoo520zls/panmvp:0.2.4
```

浏览器打开 `http://localhost:8787`，首次运行同样会引导创建管理员账号。

- `/data` 是唯一必须持久化的目录，保存 `panmvp.db`、`local.secret` 和 `logs/`。
- 未设置 `PANMVP_SECRET_KEY` 时，容器首次启动会在 `/data/local.secret` 生成随机密钥并复用；一旦设置就不要再更换，否则旧密文无法解密。
- `PANMVP_PUBLIC_BASE_URL` 用于生成 STRM 播放地址和分享链接，局域网访问请改成 `http://<宿主机 IP>:8787`。
- 镜像内已包含 Python 3.12、FFmpeg、Vulkan 软件驱动（lavapipe）和构建好的前端静态文件；杜比 Vision 的 <code>libplacebo</code> 色调映射无需额外安装驱动。

### 挂载 STRM 输出目录

STRM 生成写入的是容器内的“本地输出目录”，需要把它映射到宿主机磁盘：

```powershell
docker run -d --name panmvp `
  -p 8787:8787 `
  -v panmvp-data:/data `
  -v D:\Media\strm:/strm `
  xxoo520zls/panmvp:0.2.4
```

然后在“系统设置 → STRM 生成”里把本地输出目录填成容器内路径 `/strm`，不要填宿主机路径 `D:\Media\strm`。

### 运维命令

```powershell
docker logs -f panmvp     # 查看应用与容器日志
docker restart panmvp     # 重启
docker stop panmvp        # 停止
docker rm -f panmvp       # 删除容器，数据卷保留
```

### 升级

```powershell
docker pull xxoo520zls/panmvp:0.2.4
docker rm -f panmvp
# 使用相同的 docker run 参数重新创建容器，数据卷 panmvp-data 继续复用
```

### 备份数据卷

```powershell
docker run --rm -v panmvp-data:/data -v ${PWD}:/backup alpine `
  tar czf /backup/panmvp-data.tgz -C /data .
```

## 首次配置

1. 登录 115 网盘并检查真实头像、用户名、账号 ID、会员到期、总容量、已用和剩余空间；永久 VIP 显示金色“永久会员”。
2. 设置默认转存目录。默认目录未设置时，首次添加资源会先打开默认目录设置窗口；之后默认直接使用该目录转存。
3. 配置 TMDB API Key。
4. 进入“系统设置 → STRM 生成”配置 115 来源目录和本地输出目录映射。
5. 配置 STRM 根目录、FFmpeg、FFprobe 和通知渠道。
6. 在“系统设置 → 基础设置”确认“资源添加时显示目录选择弹窗”默认关闭；需要逐次选择目录时再开启。
