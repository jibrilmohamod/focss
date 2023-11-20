<template>
 <div
  class="flex justify-center items-center text-center flex-col rounded-t-xl font-Josefinsans"
 >
  <!-- <NuxtImg
   provider="cloudinary"
   src="v1699995574/drizzle-honey-hero_qbw5rs.webp"
   format="webp"
   sizes="xl:100vw"
   class="h-[60vh] w-full object-cover rounded-t-xl"
   :modifiers="{ effect: 'colorize:20', color: 'black' }"
  /> -->

  <TheCarousel />

  <!-- Overlay with text -->
  <div
   class="absolute inset flex items-center text-white flex-col px-5 justify-center h-[70vh]"
  >
   <div class="w-full flex flex-col items-center gap-5">
    <h2 class="text-lg font-bold uppercase">100% PURE , Kenyan HONEY</h2>

    <h3 class="text-5xl font-bold leading-normal">
     When only the best will do
    </h3>

    <button class="px-4 bg-[#F6E088] py-3 w-fit">
     <nuxt-link to="/products" class="text-xl text-black">
      Shop Honey
     </nuxt-link>
    </button>
   </div>
  </div>
 </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
