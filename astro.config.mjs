// Astro 配置文件：site 填你部署后的最终域名（影响 SEO 的 canonical 链接）
// 现在先用 Cloudflare Pages 的默认域名占位，绑定自定义域名后改这里
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://dealnest.pages.dev',
});
