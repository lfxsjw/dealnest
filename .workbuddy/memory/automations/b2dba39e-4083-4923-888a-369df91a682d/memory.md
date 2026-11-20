# DealWillow 每日测评自动化 — 执行记录

## 2026-11-19（首次运行）
- 选题：视频门铃（video doorbells），分类沿用 `cameras`；理由=站上在售 REOLINK PoE 摄像头，可自然导流
- 产出：`src/pages/review/best-video-doorbells.astro`，slug `best-video-doorbells`
- 已写品类进度：tvs、cameras（摄像头 + 门铃）、smart-home（智能灯）、accessories（便携电源）
- 待写候选：手机、平板、洗衣机、扫地机器人、吸尘器、空气炸锅、咖啡机、mesh 路由器、显示器、蓝牙耳机、智能手表
- 三家推荐：Google Nest Doorbell (Wired, 3rd Gen) $199.99 / Tapo D130 ~$55–60 / Tapo D225 ~$85–100
- 构建通过，违规亲测表述 0 次，线上 HTTP 200，sitemap 已收录
- 遗留：Tapo D130 是否复用原有机械门铃，来源冲突未解决（TP-Link 装箱单列 jumpers，某榜单称不复用）；Reolink PoE 门铃价格三处不一致（$119.99 / $94.99 / $75.99）
- 经验：`grep -c` 校验违规词比 `grep -o` 直观；h1 带 astro 属性，需用 `<h1[^>]*>` 匹配
