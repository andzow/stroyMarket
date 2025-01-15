// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  css: ["~/assets/style/main.css"],
  devtools: { enabled: false },
  ssr: true,
  app: {
    head: {
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/UI/logo.svg",
        },
      ],
    },
  },
})
