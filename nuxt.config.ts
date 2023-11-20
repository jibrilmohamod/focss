// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
 devtools: { enabled: true },

 modules: [
  "@nuxtjs/google-fonts",
  "@pinia-plugin-persistedstate/nuxt",
  "@pinia/nuxt",
  "@nuxt/image",
  "nuxt-icon",
  "@nuxtjs/tailwindcss",
 ],

 hooks: {
  "components:dirs": (dirs) => {
   dirs.unshift({
    path: "~/components/ui",
    // this is required else Nuxt will autoImport `.ts` file
    extensions: [".vue"],
    // prefix for your components, eg: UiButton
    prefix: "Ui",
    // prevent adding another prefix component by it's path.
    pathPrefix: false,
   })
  },
 },
 googleFonts: {
  display: "swap",
  families: {
   "Abhaya Libre": true,
   Montserrat: true,
   "Josefin Sans": true,
  },
 },

 pinia: {
  storesDirs: ["./stores"],
 },

 //  Nuxt Image
 image: {
  cloudinary: {
   baseURL: "https://res.cloudinary.com/dckmlqzgd/image/upload/",
  },
 },
 extends: ["nuxt-seo-kit"],
})
