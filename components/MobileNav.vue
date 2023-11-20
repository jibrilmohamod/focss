<template>
 <div class="bg-black z-50 fixed h-[100vh] w-full text-white">
  <!-- logo here and close button -->
  <div class="flex justify-between px-5 pb-10 pt-5 border-b border-gray-800">
   <NuxtLink to="/">
    <img src="/kogo.svg" class="object-contain h-12" alt="Focal Foods" />
   </NuxtLink>

   <button
    class="p-2 bg-white rounded-full text-black"
    @click="$emit('toggleMobileNav')"
   >
    <IconCSS name="ic:baseline-close" class="text-3xl text-black" />
   </button>
  </div>

  <!-- nav links -->
  <nav class="flex flex-col gap-5 py-8 font-jost px-5">
   <NuxtLink
    to="/"
    class="text-2xl focus:text-orange-500"
    aria-label="Nav link"
   >
    Home
   </NuxtLink>

   <NuxtLink
    to="/about"
    class="text-2xl focus:text-orange-500"
    aria-label="Nav link"
   >
    About
   </NuxtLink>

   <NuxtLink
    to="/account"
    class="text-2xl focus:text-orange-500"
    aria-label="Nav link"
   >
    Account
   </NuxtLink>

   <NuxtLink
    to="/contactus"
    class="text-2xl focus:text-orange-500"
    aria-label="Nav link"
   >
    Contact
   </NuxtLink>

   <NuxtLink
    to="/"
    class="text-2xl focus:text-orange-500"
    aria-label="Nav link"
   >
    Order Now
   </NuxtLink>
  </nav>

  <!-- social media icons and copyright -->
  <div class="px-5">
   <div class="flex">
    <!-- instagram -->
    <IconCSS name="akar-icons:instagram-fill" class="text-xl mr-5" />
    <!-- facebook -->
    <IconCSS name="akar-icons:facebook-fill" class="text-xl mr-5" />
    <!-- twitter -->
    <IconCSS name="akar-icons:twitter-fill" class="text-xl mr-5" />
    <!-- tiktok -->
    <IconCSS name="akar-icons:tiktok-fill" class="text-xl mr-5" />
    <!-- youtube -->
    <IconCSS name="akar-icons:youtube-fill" class="text-xl mr-5" />
   </div>

   <div class="py-4">
    <p class="font-jost text-sm">
     &copy; 2023 Focal Foods All Rights Reserved.
    </p>
   </div>
  </div>

  <div class="px-5 text-sm border-t border-gray-800">
   <!-- address with icon -->

   <div class="flex py-2">
    <div class="pr-3">
     <IconCSS name="mdi:location" class="text-xl" />
    </div>
    <p class="font-jost">1234, Nairobi, Kenya</p>
   </div>
   <!-- phone with icon -->

   <div class="flex py-2">
    <div class="pr-3">
     <IconCSS name="mdi:phone" class="text-xl" />
    </div>
    <p class="font-jost">+254 123 456 789</p>
   </div>
   <!-- email with icon -->

   <div class="flex py-2">
    <div class="pr-3">
     <IconCSS name="mdi:email" class="text-xl" />
    </div>
    <p class="font-jost">
     <a href="mailto:info@zaman.co.ke"> info@zaman.co.ke </a>
    </p>
   </div>
  </div>
 </div>
</template>

<script setup>
 defineEmits(["toggleMobileNav"])
</script>

<style lang="scss" scoped></style>
