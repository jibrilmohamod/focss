<template>
 <div class="h-fit">
  <TheHeader>
   <template #image>
    <NuxtImg
     provider="cloudinary"
     loading="lazy"
     format="webp"
     alt="image"
     sizes="sm:100vw md:50vw lg:1500px"
     :modifiers="{ effect: 'colorize:30', color: 'black' }"
     src="v1700453168/honeycomb-piece-honey-pot-with-wooden-dipper-black-backdrop_zm8ob7.jpg"
     class="w-full h-full object-cover object-center"
    />
   </template>
  </TheHeader>

  <!-- introduction  -->

  <UiComp
   header="Focal Foods Honey"
   small-text="Refreshing and delicious"
   paragraph="Introducing Focal Foods' Honey – golden, creamy, and packed with the goodness of Kenyan superfood. Our honey is sourced from the forests of Kenya, and is 100% natural, raw, and unprocessed. Bee well with every drop."
  >
   <!-- button slot  -->
   <template #button>
    <div class="py-6">
     <button class="px-10 bg-amber-200 py-3 w-fit">
      <nuxt-link to="/products" class="text-xl text-black font-Josefinsans">
       About Us
      </nuxt-link>
     </button>
    </div>
   </template>

   <!-- Image slot -->
   <template #image>
    <div
     class="pt-8 h-64 md:h-96 2xl:h-[40vh] md:w-10/12"
     data-aos="fade-up"
     data-aos-duration="1000"
    >
     <NuxtImg
      loading="lazy"
      format="webp"
      alt="image"
      sizes="sm:100vw md:50vw lg:800px"
      provider="cloudinary"
      :modifiers="{ effect: 'colorize:30', color: 'black' }"
      src="v1700453168/honeycomb-piece-honey-pot-with-wooden-dipper-black-backdrop_zm8ob7.jpg"
      class="w-full h-full object-cover object-top rounded-md"
     />
    </div>
    <div
     class="pt-8 h-64 md:h-96 2xl:h-[40vh] md:w-10/12 md:hidden"
     data-aos="fade-up"
     data-aos-duration="1000"
    >
     <NuxtImg
      loading="lazy"
      format="webp"
      alt="image"
      sizes="sm:100vw md:50vw lg:800px"
      provider="cloudinary"
      :modifiers="{ effect: 'colorize:30', color: 'black' }"
      src="v1700453170/honey-glass-pots-with-spoon-bee-pollen-cork-coasters_ww8vk1.jpg"
      class="w-full h-full object-cover object-top rounded-md"
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
      src="v1700453170/honey-glass-pots-with-spoon-bee-pollen-cork-coasters_ww8vk1.jpg"
      class="w-1/2 h-[60vh] object-cover md:object-cover shadow-2xl shadow-black"
     />
     <NuxtImg
      loading="lazy"
      format="webp"
      alt="image"
      :modifiers="{ effect: 'colorize:20', color: 'black' }"
      sizes="sm:100vw md:50vw lg:800px"
      provider="cloudinary"
      src="v1700452973/delicious-bread-honey-wooden-plate_e6fx7w.jpg"
      class="w-1/2 h-[40vh] m-auto object-cover shadow-xl shadow-black"
     />
    </div>
   </template>
  </UiComp>

  <!-- food philosophy -->

  <UiComp
   small-text="quality & balance"
   header="Did You Know?"
   paragraph="Honey is a natural sweetener that is rich in antioxidants, vitamins, and minerals. It is also a great source of energy and can be used as a natural remedy for many ailments. Honey is a great addition to your diet, and can be used in many ways."
  >
   <template #button>
    <div class="py-6">
     <button class="px-10 bg-amber-200 py-3 w-fit">
      <nuxt-link to="/products" class="text-xl text-black font-Josefinsans">
       About Us
      </nuxt-link>
     </button>
    </div>
   </template>

   <template #image>
    <div
     class="pt-8 h-[80vh] md:hidden"
     data-aos="fade-up"
     data-aos-duration="1000"
    >
     <NuxtImg
      loading="lazy"
      format="webp"
      alt="image"
      sizes="sm:100vw md:50vw lg:800px"
      provider="cloudinary"
      :modifiers="{ effect: 'colorize:30', color: 'black' }"
      src="v1694095332/2O0A2488_1_a8ds1k.webp"
      class="w-full h-full object-cover rounded-md"
     />
    </div>

    <div
     class="pt-8 h-64 md:h-96 2xl:h-[40vh] md:w-10/12"
     data-aos="fade-up"
     data-aos-duration="1000"
    >
     <NuxtImg
      loading="lazy"
      format="webp"
      alt="image"
      sizes="sm:100vw md:50vw lg:800px"
      provider="cloudinary"
      :modifiers="{ effect: 'colorize:30', color: 'black' }"
      src="v1700049220/close-up-view-cup-tea-with-lemon-honey-gray_ixymlr.jpg"
      class="w-full h-full object-cover object-top rounded-md"
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
      src="v1700049267/vertical-view-classic-american-pancakes-honey-bowl-gray_zrkew4.jpg"
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
  </UiComp>

  <UiComp
   small-text="Right here waiting"
   header="Try Our Honey Today"
   paragraph="Order our honey today and have it delivered to your doorstep. We promise you will love it!.We Deliver to all parts of Kenya."
  >
   <!-- button slot  -->
   <template #button>
    <div class="py-6">
     <button class="px-10 bg-amber-200 py-3 w-fit">
      <nuxt-link to="/products" class="text-xl text-black font-Josefinsans">
       About Us
      </nuxt-link>
     </button>
    </div>
   </template>

   <!-- Image slot -->
   <template #image>
    <div
     class="pt-8 h-64 md:h-96 2xl:h-[40vh] md:w-10/12"
     data-aos="fade-up"
     data-aos-duration="1000"
    >
     <NuxtImg
      loading="lazy"
      format="webp"
      alt="image"
      sizes="sm:100vw md:50vw lg:800px"
      provider="cloudinary"
      src="v1700048034/5046_gi5uy1.jpg"
      class="w-full h-full object-cover object-top rounded-md"
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
      src="v1700049521/wooden-honey-dipper-with-honeycomb-beeswax_yes5th.jpg"
      class="w-1/2 h-[60vh] object-cover md:object-cover shadow-2xl shadow-black"
     />
     <NuxtImg
      loading="lazy"
      format="webp"
      alt="image"
      :modifiers="{ effect: 'colorize:10', color: 'black' }"
      sizes="sm:100vw md:50vw lg:800px"
      provider="cloudinary"
      src="v1700452969/43488_yghoj0.jpg"
      class="w-1/2 h-[40vh] m-auto object-cover shadow-xl shadow-black"
     />
    </div>
   </template>
  </UiComp>
 </div>
</template>

<script setup>
 useHead({
  title: "About Us | Focal Foods",
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
