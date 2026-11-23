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

## 2026-11-20
- 选题：手机（候选池顺序第一个未写品类），分类沿用已存在的 `phones`，标题 "Best Cheap Phones That Survived the 2026 Price Hikes"
- 主线：2026-10-06 Google 将 Pixel 10a 由 $499 涨至 $599（内存涨价，DRAM $2.80→$12/GB）
- 产出：`src/pages/review/best-budget-phones.astro`，slug `best-budget-phones`
- 三家推荐：Pixel 10a $599 / Galaxy A37 5G $449.99 / Moto G Power (2026) $299.99
- 已写品类：phones、tvs、cameras（摄像头+门铃）、smart-home、accessories
- 待写候选：平板、洗衣机、扫地机器人、吸尘器、空气炸锅、咖啡机、mesh 路由器、显示器、蓝牙耳机、智能手表
- 构建通过、违规词 0、线上 200 + 首页/sitemap 已收录
- 遗留：Galaxy A37 的 IP 等级（Notebookcheck/三星称 IP68，brownstoneworldwide 写 IP67）与 Wi-Fi 代际（Wi-Fi 6 vs Wi-Fi 5）两处来源冲突未彻底解决，文中采用 IP68/Wi-Fi 6 并回避了后者；Moto G Power 无线充电（官方称取消，rank1one 仍写 15W）已在文内提示读者核对型号
- 工程：git push 走 HTTPS 反复失败（HTTP2 framing / 超时），改用 `git push ssh://git@ssh.github.com:443/lfxsjw/dealnest.git HEAD:main` 成功
