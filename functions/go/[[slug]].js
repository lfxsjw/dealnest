// /go/ 中间层 —— Cloudflare Pages Functions（边缘函数）
// 作用：用户点按钮 → 打开 /go/pw-xxx → 这里瞬间 302 跳转到亚马逊（自动带上你的联盟 tag）
// 好处：① 换 tag 只改 config.json 一处 ② 以后想统计点击数，在这一个文件里加计数逻辑就行
// 注意：这个文件只在部署到 Cloudflare Pages 后生效，本地预览时 /go/ 是 404 属正常现象
// 注意：JSON 导入不能带 with 语法（Cloudflare 的打包器不支持），esbuild 打包时自动内联
import deals from '../../src/data/deals.json';
import config from '../../src/data/config.json';

export function onRequest(context) {
  // 从路径取出商品编号，比如 /go/pw-b0g6d3tntj 里的 "pw-b0g6d3tntj"
  const slug = context.params.slug;
  const deal = deals.deals.find((d) => d.id === slug);

  // 找不到商品：返回 404（调试期附带现场信息，稳定后删除 paramsDump）
  if (!deal) {
    const paramsDump = JSON.stringify({ slug, params: context.params, dealCount: deals.deals.length, url: context.request.url });
    return new Response('Deal not found ' + paramsDump, { status: 404 });
  }

  // 跳转目标两级策略：
  // ① 商品带 trackingUrl（第三方联盟平台如 PartnerBoost 拿到的专属推广链接）→ 优先跳它，佣金走该平台
  // ② 没有的 → 用亚马逊官方联盟链接（ASIN + 你的 Associates tag），佣金走亚马逊
  const url =
    deal.trackingUrl ||
    `https://www.amazon.com/dp/${deal.asin}/?tag=${config.affiliateTag}`;

  // 302 临时跳转（用 302 而不是 301：以后想改跳转规则不会被浏览器缓存卡住）
  return new Response(null, {
    status: 302,
    headers: { Location: url },
  });
}
