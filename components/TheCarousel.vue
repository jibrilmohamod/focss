<template>
 <div id="app" class="h-screen">
  <div class="relative slide overflow-hidden">
   <div class="carousel-inner relative overflow-hidden w-full">
    <div
     v-for="(img, i) in images"
     :id="`slide-${i}`"
     :key="i"
     :class="`${active === i ? 'active' : 'left-full'}`"
     class="carousel-item inset-0 relative w-full transform transition-all duration-1000 ease-in-out"
    >
     <NuxtImg
      class="block w-full h-screen object-cover"
      :src="img"
      provider="cloudinary"
      format="webp"
      sizes="sm:800px md:50vw xl:1200px"
      :modifiers="{ effect: 'colorize:40', color: 'black' }"
      alt="First slide"
     />
    </div>
   </div>
  </div>
 </div>
</template>

<script setup>
 const images = ref([
  "v1700048068/front-view-honey-jar-with-wooden-spoon-green-grapes-wooden-background_rjjbnq.jpg",
  "v1700048034/5046_gi5uy1.jpg",
  "v1700049220/close-up-view-cup-tea-with-lemon-honey-gray_ixymlr.jpg",
  "v1700048068/front-view-honey-jar-with-wooden-spoon-green-grapes-wooden-background_rjjbnq.jpg",
 ])

 let active = ref(0)

 onMounted(() => {
  let i = 0
  setInterval(() => {
   if (i > images.value.length - 1) {
    i = 0
   }
   active.value = i
   i++
  }, 5000)
 })
</script>

<style scoped>
 .left-full {
  left: -100%;
 }

 .carousel-item {
  float: left;
  position: relative;
  display: block;
  width: 100%;
  margin-right: -100%;
  backface-visibility: hidden;
 }

 .carousel-item.active {
  left: 0;
 }
</style>
