<template>
 <div
  class="pt-8 pl-6 pr-3 md:px-2 pb-4 md:container md:m-auto md:pt-16 md:flex md:gap-x-6 2xl:px-0"
 >
  <div class="md:basis-1/2 md:flex md:flex-col h-full">
   <!-- small text with line to its right -->
   <div class="flex items-center justify-between md:justify-normal md:gap-10">
    <h5
     class="font-jost uppercase text-[13px] font-[600] tracking-widest text-[#BF926B] w-fit md:text-lg"
     id="p"
    >
     {{ smallText }}
    </h5>
    <div
     class="w-20 outline outline-1 outline-[#BF926B] justify-self-end mr-5"
    ></div>
   </div>

   <!-- section header -->
   <div class="py-4">
    <h4
     class="text-[40px] font-semibold leading-tight md:text-5xl md:font-[600] md:leading-[60px] md:tracking-wider 2xl:text-6xl font-Josefinsans"
    >
     {{ header }}
    </h4>
   </div>

   <!-- section body -->
   <div class="">
    <!-- paragraph -->
    <p
     class="font-jost text-[18px] leading-relaxed tracking-wide text-black 2xl:w-3/4 2xl:pb-7"
    >
     {{ paragraph }}
    </p>

    <!-- button and image slots -->
    <div>
     <!-- Button slot -->
     <slot name="button"> </slot>

     <!-- Image slot -->
     <slot name="image"> </slot>
    </div>
   </div>
  </div>

  <!-- image slot -->
  <div class="hidden md:flex basis-1/2 m-auto">
   <slot name="image2"> </slot>
  </div>
 </div>
</template>

<script setup>
 // define props with default values and types
 defineProps({
  smallText: {
   type: String,
   default: "Refresh your taste buds",
  },
  header: {
   type: String,
   default: "",
  },
  paragraph: {
   type: String,
   default: " .",
  },
 })
</script>

<style scoped></style>
