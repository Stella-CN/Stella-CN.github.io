# Stella-CN 的开源项目主页

这是 Stella-CN 的 GitHub Pages 个人主页。当前定位为：**以开源项目展示为主，同时补充个人介绍与兴趣方向**。

首页使用星夜主题背景、GitHub 头像个人卡片、三段式板块跳转和滚动进入动效，方便快速浏览个人介绍、项目介绍和关注方向。

## 在线访问

部署成功后可访问：

```text
https://stella-cn.github.io
```

## 当前结构

```text
.
├── index.html              # 首页结构：首屏、个人介绍、项目介绍、兴趣方向、联系入口
├── data/
│   └── projects.json       # 项目数据，后续主要维护这里
├── assets/
│   ├── css/
│   │   └── main.css        # 页面样式、星夜主题和滚动动效
│   ├── images/
│   │   └── star-night.jpg  # 页面背景图
│   └── js/
│       └── main.js         # 导航交互、板块动效和项目列表渲染
├── content/
│   └── notes/              # 后续可放项目日志或文章
└── README.md
```

## 页面功能

- 首屏标题为“技术宅拯救世界”，下方提供三个紧凑跳转按钮：个人介绍、项目介绍、关注方向。
- 个人卡片使用 GitHub 头像，并提供 GitHub 主页入口。
- 项目卡片来自 `data/projects.json`，维护项目时只需要更新数据文件。
- 个人介绍、项目介绍和兴趣方向板块在滚动进入或点击跳转时会播放进入动效。
- 页面背景图位于 `assets/images/star-night.jpg`，样式通过 `assets/css/main.css` 控制。

## 如何新增或修改项目

项目卡片来自 `data/projects.json`。新增项目时，在数组中添加一个对象即可：

```json
{
  "name": "项目名称",
  "summary": "一句话介绍项目背景、用途或亮点。",
  "repoUrl": "https://github.com/Stella-CN/项目仓库名",
  "homepage": "",
  "language": "主要技术栈",
  "status": "Active",
  "featured": true,
  "tags": ["标签1", "标签2"]
}
```

字段说明：

- `name`：项目名称
- `summary`：项目简介，会显示在项目卡片中
- `repoUrl`：项目仓库链接，必填
- `homepage`：项目在线演示地址，没有就留空字符串
- `language`：主要语言或技术栈
- `status`：项目状态，例如 `Active`、`Planning`、`Paused`
- `featured`：是否优先展示，`true` 会排在更前面
- `tags`：项目标签数组

## 已收录项目

- [Hermes](https://github.com/Stella-CN/Hermes)
- [hermes_body](https://github.com/Stella-CN/hermes_body)
- [hermes_ros](https://github.com/Stella-CN/hermes_ros)

## 后续建议

1. 为每个项目仓库补充 `README.md`，说明项目背景、安装方式、使用方式和截图。
2. 在 `data/projects.json` 中补充更准确的项目简介与技术栈。
3. 如果有在线 demo，把地址写入 `homepage` 字段。
4. 后续可以在 `content/notes/` 下添加项目日志，再在首页增加文章入口。
5. 如果继续扩展为完整博客，可以考虑引入 Gridea、Jekyll 或 Hugo 管理文章、标签和归档。
