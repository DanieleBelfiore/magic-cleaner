import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Home Magic Cleaner',
        short_name: 'Macchia',
        description: 'Rimuovi le macchie dai tuoi vestiti',
        theme_color: '#e4ded0',
        background_color: '#f3ede2',
        display: 'standalone',
        start_url: '/',
        icons: [
          { src: '/favicon/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
          { src: '/favicon/android-chrome-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
          { src: '/favicon/android-chrome-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
        ],
      },
    }),
  ],
})
