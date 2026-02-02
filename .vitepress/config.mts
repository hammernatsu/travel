import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  outDir: './dist',
  title: "Hammer's Travel Log",
  description: "飛行與旅遊記錄",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首頁', link: '/' },
      { text: '飛行記錄', link: '/flight-history-zh' },
      { text: '旅遊手札', link: '/travel_book/2026.02niigata' }
    ],

    sidebar: [
      {
        text: '飛行記錄',
        items: [
          { text: '中文版', link: '/flight-history-zh' },
          { text: 'English Version', link: '/flight-history-en' }
        ]
      },
      {
        text: '旅遊手札',
        items: [
          { text: '2026.02 新潟草津', link: '/travel_book/2026.02niigata' },
          { text: '2026.01 沖繩快閃', link: '/travel_book/2026.01okinawa' }
        ]
      }
    ]
  }
})
