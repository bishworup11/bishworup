const siteUrl = 'https://bishworup.vercel.app'
const siteName = 'Bishworup Mollik'
const siteDescription = 'Software Engineer specializing in Vue 3, Nuxt, and full-stack JavaScript. Currently building production web applications at AppsCode. ICPC regionalist and competitive programmer with 1500+ problems solved.'
const ogImage = `${siteUrl}/og-image.png`

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  ssr: true,
  runtimeConfig: {
    public: { siteUrl },
  },
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: `${siteName} — Software Engineer`,
      titleTemplate: `%s`,
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'canonical', href: siteUrl },
      ],
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: siteDescription },
        { name: 'author', content: siteName },
        { name: 'google-site-verification', content: 'QXSn9ioAiqrhar2tUZhcNZKvSI5ZJ8rJyYqPhjdMRmE' },
        { name: 'theme-color', content: '#0a0a0a' },
        { name: 'robots', content: 'index, follow, max-image-preview:large' },

        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: siteName },
        { property: 'og:title', content: `${siteName} — Software Engineer` },
        { property: 'og:description', content: siteDescription },
        { property: 'og:url', content: siteUrl },
        { property: 'og:image', content: ogImage },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:locale', content: 'en_US' },

        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: `${siteName} — Software Engineer` },
        { name: 'twitter:description', content: siteDescription },
        { name: 'twitter:image', content: ogImage },
      ],
    },
  },
  nitro: {
    preset: 'static',
    prerender: {
      crawlLinks: true,
      routes: ['/', '/cv', '/sitemap.xml', '/robots.txt'],
    },
  },
})
