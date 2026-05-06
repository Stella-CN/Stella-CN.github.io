# Stella-CN 的开源项目主页

这是 Stella-CN 的 GitHub Pages 个人主页。当前定位已经调整为：**以开源项目展示为主，个人介绍为辅**。

## 在线访问

部署成功后可访问：

```text
https://stella-cn.github.io
```

## 当前结构

```text
.
├── index.html              # 首页结构：项目展示、简短介绍、更新计划、联系入口
├── data/
│   └── projects.json       # 项目数据，后续主要维护这里
├── assets/
│   ├── css/
│   │   └── main.css        # 页面样式
│   └── js/
│       └── main.js         # 导航交互和项目列表渲染
├── content/
│   └── notes/              # 后续可放项目日志或文章
└── README.md
```

> 说明：如果仓库根目录里还保留旧版 `styles.css`、`script.js`，当前页面已经不再引用它们。后续可以删除，或保留作为历史版本参考。

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
- [Stella-CN.github.io](https://github.com/Stella-CN/Stella-CN.github.io)

## 后续建议

1. 为每个项目仓库补充 `README.md`，说明项目背景、安装方式、使用方式和截图。
2. 在 `data/projects.json` 中补充更准确的项目简介与技术栈。
3. 如果有在线 demo，把地址写入 `homepage` 字段。
4. 后续可以在 `content/notes/` 下添加项目日志，再在首页增加文章入口。
