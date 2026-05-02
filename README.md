# Finance+AI Course and AI4S Research Platform

北京邮电大学经济管理学院 Finance+AI 课程与 AI4S 学术成果综合网站。项目使用 Astro 生成纯静态页面，内容以 Markdown 文件维护，适合通过 Cloudflare Pages 部署到 `www.papersreview.com`。

## 技术栈

- Astro 6
- Tailwind CSS
- Markdown / MDX content collections
- Pagefind 全文搜索
- RSS：`/rss.xml`
- 中英双语路由：`/zh/`、`/en/`

## 目录结构

```text
content/
  publications/   论文、会议、专著、报告
  news/           新闻动态
  talks/          会议报告与受邀演讲
  projects/       项目案例
  team/           团队成员
  resources/      课程与项目资源
public/img/       图片素材
src/pages/        页面路由
src/components/   通用组件
dist/             静态部署产物
```

## 本地运行

```bash
npm install
npm run dev
```

默认开发地址：

```text
http://127.0.0.1:4321/zh/
```

## 生成静态产物

```bash
npm run build
```

构建命令会完成三件事：

1. `astro check` 类型检查
2. `astro build` 生成静态页面到 `dist/`
3. `pagefind --site dist --output-subdir pagefind` 生成搜索索引

构建完成后，`dist/` 可直接拖拽上传到 Cloudflare Pages，也可用 Wrangler 部署。

## Cloudflare Pages 部署

当前 Cloudflare Pages 项目名：

```text
ai4bupt2
```

部署命令：

```bash
npm run build
npx wrangler pages deploy ./dist --project-name=ai4bupt2
```

如果需要使用项目脚本：

```bash
npm run deploy
```

## 域名

当前源码中的 canonical / Open Graph 站点地址在 `src/lib/site.ts` 中维护：

```ts
url: "https://www.papersreview.com"
```

如需换回旧域名，只需同步修改 `src/lib/site.ts` 和 `astro.config.mjs`。

## 内容更新

常规更新不需要修改 HTML。新增论文、新闻、报告、项目、团队成员或资源时，只需在 `content/` 对应目录新增一个 `.md` 文件，然后重新构建部署。

详细说明见：

- `内容更新指南.md`
- `内容缺口清单.md`

## 已验证

- `npm run build` 通过
- 生成 40 个静态页面
- Pagefind 已生成中英双语索引
- `/zh/search/` 可搜索论文、新闻、项目、团队和资源
