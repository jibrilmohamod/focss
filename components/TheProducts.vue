<template>
 <div
  class="pt-2 pl-6 pr-3 md:px-2 pb-4 md:container md:m-auto md:pt-16 md:flex md:gap-x-6 2xl:px-0 flex-col flex"
 >
  <!-- header  -->
  <div class="flex items-center justify-between md:justify-normal md:gap-10">
   <h5
    class="font-jost uppercase text-[13px] font-[600] tracking-widest text-[#BF926B] w-fit md:text-lg"
    id="p"
   >
    Bee well with every drop
   </h5>
   <div
    class="w-20 outline outline-1 outline-[#BF926B] justify-self-end mr-5"
   ></div>
  </div>
  <div class="py-4">
   <h4
    class="text-[40px] font-semibold leading-tight md:text-5xl md:font-[600] md:leading-[60px] md:tracking-wider 2xl:text-6xl font-Josefinsans"
   >
    Our Store
   </h4>
  </div>

  <!-- body -->
  <div>
   <p
    class="font-jost text-[18px] leading-relaxed tracking-wide text-black 2xl:w-3/4 2xl:pb-7"
   >
    Experience the taste of Kenya with Focal Foods' Honey – golden, creamy, and
    packed with the goodness of Kenyan superfoodChoose from our range of
    products below.
   </p>
  </div>
  <!-- product card carousel -->
  <div class="">
   <section class="bg-gray-2 dark:bg-dark pt-6 lg:pt-6 font-Montserrat">
    <div class="container mx-auto">
     <div class="flex flex-wrap -mx-12">
      <div
       class="w-full px-4 md:w-1/2 xl:w-1/3"
       v-for="(prod, index) in products.Products"
       :key="index"
      >
       <div
        class="mb-4 overflow-hidden duration-300 bg-white rounded-lg dark:bg-dark-2 shadow-1 hover:shadow-3 dark:shadow-card dark:hover:shadow-3"
       >
        <NuxtImg
         provider="cloudinary"
         :src="prod.src"
         format="webp"
         sizes="xl:100vw"
         class="w-full h-full object-cover rounded-xl bg-amber-200"
         :modifiers="{ effect: 'colorize:20', color: 'black' }"
        />
        <div class="py-8 sm:p-9 md:px-7 xl:p-9">
         <h3>
          <a
           href="javascript:void(0)"
           class="text-dark dark:text-white hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
          >
           {{ prod.name }}
          </a>
         </h3>
         <p
          class="text-base leading-relaxed text-body-color dark:text-dark-6 mb-7"
         >
          {{ prod.details }}
         </p>
         <!-- product size -->

         <div class="">
          <button class="px-10 bg-amber-200 py-3 w-fit">
           <nuxt-link
            to="/products"
            class="text-xl text-black font-Josefinsans"
           >
            Buy Now
           </nuxt-link>
          </button>
         </div>
        </div>
       </div>
      </div>
     </div>
    </div>
   </section>
   <!-- ====== Cards Section End -->
  </div>
 </div>
</template>

<script setup>
 const productStore = useProductsStore()

 const { fetchProducts } = productStore

 const { products } = storeToRefs(productStore)

 const prods = ref(
  {
   name: "Natural Forest Honey",
   price: 300,
   size: "500g",
   src: "v1694008262/mads-eneqvist-zqiE16q_Ju0-unsplash_da5rtx.jpg",
  },
  //    1kg honey
  {
   name: "Natural Forest Honey",
   price: 600,
   size: "1kg",
   src: "v1694008262/mads-eneqvist-zqiE16q_Ju0-unsplash_da5rtx.jpg",
  },
  //    5kg honey
  {
   name: "Natural Forest Honey",
   price: 3000,
   size: "5kg",
   src: "v1694008262/mads-eneqvist-zqiE16q_Ju0-unsplash_da5rtx.jpg",
  }
 )

 onMounted(() => {
  fetchProducts()
 })
</script>

<style lang="scss" scoped></style>
