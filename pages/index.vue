<template>
 <div class="">
  <TheHero2 />
  <div>
   <ui-comp
    header="Your Daily Dose Of Honey"
    paragraph="Discover the Sweetness of Kenya!  Indulge in the pure, natural goodness of Focal Foods Honey. Elevate your taste buds with the finest honey sourced from local beekeepers in Nairobi. Unwrap the essence of Kenya in every jar. Click below to experience the rich and delightful world of Focal Foods Honey. Your journey to sweet satisfaction starts here!"
   >
    <template #image>
     <div
      class="h-64 md:h-96 2xl:h-[40vh] md:w-10/12 duration-1000 ease-in-out"
     >
      <NuxtImg
       provider="cloudinary"
       src="v1700452972/dripping-honey-glass-jar_ov4ooz.jpg"
       format="webp"
       sizes="xl:100vw"
       class="w-full h-full object-cover rounded-xl"
       :modifiers="{ effect: 'colorize:20', color: 'black' }"
      />
     </div>
    </template>

    <template #image2>
     <div
      class="w-full px-2 flex gap-2"
      data-aos="fade-up"
      data-aos-duration="1000"
     >
      <NuxtImg
       loading="lazy"
       format="webp"
       alt="image"
       :modifiers="{ effect: 'colorize:10', color: 'black' }"
       sizes="sm:100px md:50vw lg:600px"
       provider="cloudinary"
       src="v1700453990/overhead-view-honey-dipper-with-honey-pot-wooden-table_gqhpww.jpg"
       class="w-1/2 h-[60vh] object-cover md:object-cover shadow-2xl shadow-black"
      />
      <NuxtImg
       loading="lazy"
       format="webp"
       alt="image"
       :modifiers="{ effect: 'colorize:10', color: 'black' }"
       sizes="sm:100vw md:50vw lg:800px"
       provider="cloudinary"
       src="v1700453170/honey-glass-pots-with-spoon-bee-pollen-cork-coasters_ww8vk1.jpg"
       class="w-1/2 h-[40vh] m-auto object-cover shadow-xl shadow-black"
      />
     </div>
    </template>

    <template #button>
     <div class="py-6">
      <button class="px-10 bg-amber-200 py-3 w-fit">
       <nuxt-link to="" class="text-xl text-black font-Josefinsans">
        About Us
       </nuxt-link>
      </button>
     </div>
    </template>
   </ui-comp>

   <TheProducts />
   <ui-comp
    header="Browse Our Products"
    paragraph=""
    small-text="Bee well with every drop"
   >
    <template #image>
     <div
      class="h-64 md:h-96 2xl:h-[40vh] md:w-10/12 duration-1000 ease-in-out"
     >
      <NuxtImg
       provider="cloudinary"
       src="v1700048068/front-view-honey-jar-with-wooden-spoon-green-grapes-wooden-background_rjjbnq.jpg"
       format="webp"
       sizes="xl:100vw"
       class="w-full h-full object-cover rounded-xl"
       :modifiers="{ effect: 'colorize:20', color: 'black' }"
      />
     </div>
    </template>

    <template #image2>
     <div
      class="w-full px-2 flex gap-2"
      data-aos="fade-up"
      data-aos-duration="1000"
     >
      <NuxtImg
       loading="lazy"
       format="webp"
       alt="image"
       :modifiers="{ effect: 'colorize:10', color: 'black' }"
       sizes="sm:100px md:50vw lg:600px"
       provider="cloudinary"
       src="v1700049462/wooden-honey-dipper-with-dripping-honey_cvb4s2.jpg"
       class="w-1/2 h-[60vh] object-cover md:object-cover shadow-2xl shadow-black"
      />
      <NuxtImg
       loading="lazy"
       format="webp"
       alt="image"
       :modifiers="{ effect: 'colorize:10', color: 'black' }"
       sizes="sm:100vw md:50vw lg:800px"
       provider="cloudinary"
       src="v1700048068/front-view-honey-jar-with-wooden-spoon-green-grapes-wooden-background_rjjbnq.jpg"
       class="w-1/2 h-[40vh] m-auto object-cover shadow-xl shadow-black"
      />
     </div>
    </template>

    <template #button>
     <div class="py-6">
      <button class="px-10 bg-amber-200 py-3 w-fit">
       <nuxt-link to="" class="text-xl text-black font-Josefinsans">
        About Us
       </nuxt-link>
      </button>
     </div>
    </template>
   </ui-comp>
  </div>
 </div>
</template>

<script setup>
 useHead({
  title: "Home | Focal Foods",
  meta: [
   {
    name: "keywords",
    content:
     "Focal Foods, Focal Foods Nairobi, Focal Foods Kenya, Focal Foods Banda Street, Focal Foods Menu, Focal Foods Contact, Focal Foods Location, Focal Foods About Us, Focal Foods Food, Focal Foods Cuisine, Focal Foods Dining, Focal Foods Ambiance, Focal Foods Menu, Focal Foods Food Philosophy, Focal Foods Come and Visit Us Today",
   },
   //   description
   {
    name: "description",
    content:
     "Focal Foods is located in the heart of Nairobi city, surrounded by the most popular tourist attractions. We are open every day from 9am to 11pm.",
   },
   {
    name: "robots",
    content: "index, follow",
   },
   {
    name: "googlebot",
    content: "index, follow",
   },
   {
    name: "author",
    content: "Focal Foods",
   },
   {
    name: "page-topic",
    content: "Focal Foods",
   },
   {
    name: "page-type",
    content: "Restaurant",
   },
   {
    name: "audience",
    content: "all",
   },
   {
    name: "distribution",
    content: "global",
   },
   {
    name: "rating",
    content: "general",
   },
   {
    name: "revisit-after",
    content: "7 days",
   },
   {
    name: "language",
    content: "en-us",
   },
   // og meta
   {
    name: "og:title",
    content: "About Us | Focal Foods",
   },
   {
    name: "og:url",
    content: "https://zaman-restaurant.vercel.app/aboutus",
   },
   {
    name: "og:description",
    content:
     "Focal Foods is located in the heart of Nairobi city, surrounded by the most popular tourist attractions. We are open every day from 9am to 11pm.",
   },
   {
    name: "og:image",
    content:
     "https://res.cloudinary.com/dq6hflqwx/image/upload/v1629277449/2O0A8677_x3a9xc.webp",
   },
   {
    name: "og:site_name",
    content: "Focal Foods",
   },
   {
    name: "og:type",
    content: "website",
   },
   {
    name: "og:locale",
    content: "en_US",
   },
  ],
 })
</script>

<style lang="scss" scoped></style>
