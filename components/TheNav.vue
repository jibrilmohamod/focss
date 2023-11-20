<template>
 <div class="z-30">
  <!-- Desktop nav -->
  <div
   class="hidden md:block absolute h-fit inset-0 z-50 container mx-auto text-white"
  >
   <!-- location , email and phone -->
   <div
    class="font-jost border-b border-gray-500 flex justify-between rounded-sm text-base"
   >
    <!-- location  -->
    <div
     class="py-2 border-x border-gray-500 rounded-sm px-5 grow flex justify-center items-center w-fit gap-3"
    >
     <!-- icon  -->
     <Icon name="mdi:location" class="text-gray-500" />
     <!-- text  -->
     <a class="text-sm text-gray-400" href=""> Pangani , Nairobi , Kenya </a>
    </div>
    <!-- phone  -->
    <div
     class="py-2 border-r border-gray-500 rounded-sm px-5 grow flex justify-center items-center w-fit gap-3"
    >
     <!-- icon  -->
     <Icon name="mdi:phone" class="text-gray-500" />
     <!-- text  -->
     <a class="text-sm text-gray-400" href="tel:0745015869">
      +254 745 015 869
     </a>
    </div>
    <!-- email  -->
    <div
     class="py-2 border-r border-gray-500 rounded-sm px-5 grow flex justify-center items-center w-fit gap-3"
    >
     <!-- icon  -->
     <Icon name="mdi:email" class="text-gray-500" />
     <!-- text  -->
     <a class="text-sm text-gray-400" href="mailto:info@focalfoods.co.ke">
      info@focalfoods.co.ke
     </a>
    </div>
    <!-- socials -->
    <div
     class="py-2 border-r border-gray-500 rounded-sm px-5 grow flex justify-center items-center w-fit"
    >
     <!-- icon  -->
     <Icon name="mdi:facebook" class="text-white grow hover:text-blue-700" />
     <!-- icon  -->
     <Icon name="mdi:instagram" class="text-white grow hover:text-pink-700" />
     <!-- icon  -->
     <Icon name="mdi:twitter" class="text-white grow hover:text-sky-600" />
     <!-- tiktok -->
     <Icon
      name="akar-icons:tiktok-fill"
      class="text-white grow hover:text-fuchsia-600"
     />
    </div>
   </div>
   <!-- navigation and logo -->
   <div class="flex items-center py-5">
    <!-- logo -->
    <h1 class="w-fit">
     <NuxtLink to="/">
      <img src="/Logo.svg" alt="logo" class="object-contain h-16 w-fit" />
     </NuxtLink>
    </h1>
    <!-- navigation -->
    <div class="flex-grow flex justify-end items-center gap-5">
     <!-- nav items -->
     <div class="flex-grow flex justify-end items-center gap-5">
      <NuxtLink to="/" class="text-lg border-button font-Lexend">
       Home
      </NuxtLink>
      <NuxtLink to="/about" class="text-lg border-button font-Lexend">
       About
      </NuxtLink>
      <NuxtLink to="/account" class="text-lg border-button font-Lexend">
       Account
      </NuxtLink>
      <NuxtLink to="/contactus" class="border-button text-lg font-Lexend">
       Contact
      </NuxtLink>
     </div>
     <!-- button -->
     <div class="flex justify-end items-center gap-5">
      <a href="mailto:info@focalfoods.co.ke" class="text-lg font-Lexend hover:">
      </a>
     </div>
    </div>
   </div>
  </div>

  <!-- mobile nav -->

  <div class="md:hidden">
   <NuxtLink to="/">
    <!-- site name and logo -->
    <div class="text-wh border-buttonite absolute z-20 top-5 left-4">
     <h1 class="h-12 py-2 px-4 text-4xl font-Lexend">
      <img src="/Logo.svg" alt="logo" class="object-contain h-14 w-full" />
     </h1>
    </div>
   </NuxtLink>

   <!-- Hambuger menu -->
   <button
    class="absolute top-8 right-4 z-20 p-2 bg-white rounded-full text-black"
    @click="toggleMobileNav()"
   >
    <Icon name="ci:menu-alt-01" class="text-3xl text-black" />

    <div class="hidden">
     {{ showMobile }}
    </div>
   </button>

   <transition
    mode="out-in"
    enter-to-class="animate__animated animate__fadeInRight"
    leave-to-class="animate__animated animate__fadeOutRight"
   >
    <MobileNav v-if="showMobile" @toggleMobileNav="toggleMobileNav()" />
   </transition>
  </div>
 </div>
</template>

<script setup>
 const showMobile = ref(false)

 const toggleMobileNav = () => {
  showMobile.value = !showMobile.value
 }
</script>

<style scoped>
 .border-button {
  padding: 10px 20px;
  background-color: transparent;
  border: none;
  position: relative;
  overflow: hidden;
  font-size: 16px;
  cursor: pointer;
  transition: color 0.3s ease;
 }

 .border-button::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  /* Height of the bottom border */
  background-color: #f6e088;
  /* Color of the animated border */
  transition: width 0.3s ease;
  z-index: -1;
 }

 .border-button:hover::before {
  width: 100%;
 }
</style>
