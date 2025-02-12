import { defineConfig } from 'vitepress'
import fs from 'fs-extra';
import path from 'path';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "CPOS",
  description: "CPOS",
  base: process.env.NODE_ENV === 'production' ? '/your-repo-name/' : '/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' }
    ],
    
    sidebar: [
      {
        text: '用户部分',
        items: [
          { text: '开始', link: '/usr/install.md' },
          { text: '使用方法', link: '/usr/usage.md' },
          
        ]
      },
      {
        text: '开发部分',
        items: [
          { text: '开发索引', link: '/dev/model.md' },
        ]
      },
      {
        text: '番外',
        items: [
          { text: '文档名词定义', link: '/usr/token.md' },
          { text: '贡献者', link: '/contributor.md' }
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    footer: {
			message: '本文档采用 知识共享 署名-相同方式共享 4.0 协议 进行许可。',
			copyright: 'Copyright © 2024-2025 plos-clan',
		}
  },
  async buildEnd() {
    const publicDir = path.join(process.cwd(), 'docs/public');
    const outDir = path.join(process.cwd(), 'docs/.vitepress/dist');
    await fs.copy(publicDir, outDir);
  },
  vite: {
    server: {
      historyApiFallback: true // 开发模式生效
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {}
        }
      }
    },
    preview: {
      middlewareMode: true, // 启用中间件模式
      appType: 'spa'        // 声明为 SPA
    }
  },
  async configurePreviewServer(server) {
    // 添加 History API Fallback 中间件
    const history = require('connect-history-api-fallback')
    server.middlewares.use(history())
  }
})
