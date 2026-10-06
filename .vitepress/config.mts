import { defineConfig } from 'vitepress'
import { readFileSync, readdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

const travelBookDirectory = fileURLToPath(new URL('../travel_book/', import.meta.url))

const travelBookSidebarItems = readdirSync(travelBookDirectory)
  .filter((fileName) => fileName.endsWith('.md') && fileName !== 'index.md')
  .sort((left, right) => right.localeCompare(left, 'en'))
  .map((fileName) => {
    const source = readFileSync(`${travelBookDirectory}/${fileName}`, 'utf8')
    const title = source.match(/^#\s+(.+)$/m)?.[1] ?? fileName.replace(/\.md$/, '')

    return {
      text: title,
      link: `/travel_book/${fileName.replace(/\.md$/, '.html')}`
    }
  })

// https://vitepress.dev/reference/site-config
export default defineConfig({
  outDir: './dist',
  title: "Hammer's Travel Log",
  description: "飛行與旅遊記錄",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首頁', link: '/index.html' },
      {
        text: '飛行記錄',
        items: [
          { text: '中文版', link: '/flight-history-zh.html' },
          { text: 'English', link: '/flight-history-en.html' }
        ]
      },
      { text: '旅遊手札', link: '/travel_book/index.html' }
    ],

    sidebar: [
      {
        text: '飛行記錄',
        items: [
          { text: '中文版', link: '/flight-history-zh.html' },
          { text: 'English Version', link: '/flight-history-en.html' }
        ]
      },
      {
        text: '旅遊手札',
        items: [
          { text: '旅遊手札總覽', link: '/travel_book/index.html' },
          ...travelBookSidebarItems
        ]
      }
    ]
  }
})
