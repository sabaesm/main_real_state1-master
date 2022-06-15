export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "homeland",
    htmlAttrs: {
      lang: "fa",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    script: [],
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["./assets/css/global.css", "./swiper/css/swiper.css"],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "./plugins/vuetify.js",
    { src: "./plugins/vue-awesome-swiper", mode: "client" },
  ],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify",
    "nuxt-moment-jalaali",
  ],
  env:{
    baseURL:'https://real.iran.liara.run/'
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
};
