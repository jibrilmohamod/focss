<template>
    <div class="main">
        <TheHeader title="Contact Us">
            <template #image>
                <NuxtImg provider="cloudinary"
                         format="webp"
                         loading="lazy"
                         alt="bg image"
                         sizes="sm:100vw md:50vw lg:1200px"
                         :modifiers="{ effect: 'colorize:30', color: 'black' }"
                         src="v1700453168/honeycomb-piece-honey-pot-with-wooden-dipper-black-backdrop_zm8ob7.jpg"
                         class="w-full h-full object-cover object-center" />
            </template>
        </TheHeader>
        <!-- our location -->
        <UiComp smallText="Come join us"
                header="Order Our Authentic Honey Today"
                paragraph="We offer authentic honey from the Kenyan forests. Our honey is 100% natural and pure. We do not add any additives or preservatives. It is dark in color and has a rich taste. It is also rich in antioxidants and has many health benefits. We offer honey in different sizes and packaging. We also offer honey in bulk. Try our honey today and you will not be disappointed.">
            <template #button> </template>
            <!-- Image slot -->
            <template #image>
                <div class="pt-8 h-64 md:h-96 2xl:h-[40vh] md:w-10/12"
                     data-aos="fade-up"
                     data-aos-duration="1000">
                    <NuxtImg loading="lazy"
                             format="webp"
                             alt="Image"
                             sizes="sm:100vw md:50vw lg:800px"
                             provider="cloudinary"
                             src="v1700453174/biscuits-honey-pot-with-wooden-dipper-cork-coaster-granite-backdrop_nakv7x.jpg"
                             class="w-full h-full object-cover object-center rounded-md" />
                </div>
            </template>

            <template #image2>
                <div class="w-full px-2 flex gap-2"
                     data-aos="fade-up"
                     data-aos-duration="1000">
                    <NuxtImg loading="lazy"
                             format="webp"
                             alt="image"
                             :modifiers="{ effect: 'colorize:10', color: 'black' }"
                             sizes="sm:100px md:50vw lg:600px"
                             provider="cloudinary"
                             src="v1700454184/honey-comb-pieces-with-spices-bee-pollens-jar-knife-backdrop_r3yo5u.jpg"
                             class="w-1/2 h-[70vh] object-cover md:object-cover shadow-2xl shadow-black" />
                    <NuxtImg loading="lazy"
                             format="webp"
                             alt="image"
                             :modifiers="{ effect: 'colorize:10', color: 'black' }"
                             sizes="sm:100vw md:50vw lg:800px"
                             provider="cloudinary"
                             src="v1700454181/close-up-honeycomb-piece-white-plate_ldamf4.jpg"
                             class="w-1/2 h-[50vh] m-auto object-cover shadow-xl shadow-black" />
                </div>
            </template>
        </UiComp>
        <!-- contact form -->
        <UiComp smallText="Get in touch with us"
                header="Contact Us"
                paragraph="For general inquiries please email: info@focalfoods.co.ke">
            <template #button>
                <div class="py-6">
                    <button class="px-10 bg-amber-200 py-3 w-fit">
                        <nuxt-link to=""
                                   class="text-xl text-black font-Josefinsans">
                            Email Us
                        </nuxt-link>
                    </button>
                </div>

                <!-- social media icons here -->
                <div class="flex justify-between pt-6 pb-5">
                    <div class="flex">
                        <!-- instagram -->
                        <IconCSS name="akar-icons:instagram-fill"
                                 class="text-xl mr-5" />
                        <!-- facebook -->
                        <IconCSS name="akar-icons:facebook-fill"
                                 class="text-xl mr-5" />
                        <!-- twitter -->
                        <IconCSS name="akar-icons:twitter-fill"
                                 class="text-xl mr-5" />
                        <!-- tiktok -->
                        <IconCSS name="akar-icons:tiktok-fill"
                                 class="text-xl mr-5" />
                        <!-- youtube -->
                        <IconCSS name="akar-icons:youtube-fill"
                                 class="text-xl mr-5" />
                    </div>
                </div>
                <!-- Working Hours  -->
                <div class="py-2">
                    <h4 class="font-Lexend font-semibold uppercase">Working Hours</h4>
                    <div class="py-2">
                        <p class="font-jost">Monday - Friday: 9am - 10pm</p>
                        <p class="font-jost">Saturday - Sunday: 9am - 11pm</p>
                    </div>
                </div>
                <!-- Location and Contact info with icons  -->
                <div class="">
                    <h4 class="font-Lexend font-semibold uppercase">Location & Contact</h4>
                    <div class="py-2">
                        <!-- address with icon -->
                        <div class="flex py-2">
                            <div class="pr-3">
                                <IconCSS name="mdi:location"
                                         class="text-xl" />
                            </div>
                            <p class="font-jost">1234, Nairobi, Kenya</p>
                        </div>
                        <!-- phone with icon -->
                        <div class="flex py-2">
                            <div class="pr-3">
                                <IconCSS name="mdi:phone"
                                         class="text-xl" />
                            </div>
                            <p class="font-jost">+254 712 99 55 22</p>
                        </div>
                        <!-- email with icon -->
                        <div class="flex py-2">
                            <div class="pr-3">
                                <IconCSS name="mdi:email"
                                         class="text-xl" />
                            </div>
                            <p class="font-jost">
                                <a href="mailto:info@focalfoods.co.ke"> info@focalfoods.co.ke </a>
                            </p>
                        </div>
                    </div>
                </div>
            </template>

            <!-- image slot -->
            <template #image>
                <div class="pt-8 h-64 md:h-96 2xl:h-[40vh] md:w-10/12"
                     data-aos="fade-up"
                     data-aos-duration="1000">
                    <NuxtImg loading="lazy"
                             format="webp"
                             alt="Image"
                             sizes="sm:100vw md:50vw lg:800px"
                             provider="cloudinary"
                             src="v1700454023/milk-pot-honey-pot-bee-pollens-stack-biscuits-textured-backdrop_qy1imf.jpg"
                             class="w-full h-full object-cover rounded-md" />
                </div>
                <div class="pt-8 h-64 md:h-96 2xl:h-[40vh] md:w-10/12 md:hidden"
                     data-aos="fade-up"
                     data-aos-duration="1000">
                    <NuxtImg loading="lazy"
                             format="webp"
                             alt="Image"
                             sizes="sm:100vw md:50vw lg:800px"
                             provider="cloudinary"
                             src="v1700454180/honey-pot-with-honey-dipper-honey-comb-floral-tray_cxdnnj.jpg"
                             :modifiers="{ effect: 'colorize:30', color: 'black' }"
                             class="w-full h-full object-cover object-top rounded-md" />
                </div>
            </template>
            <template #image2>
                <div class="w-full px-2 flex gap-2"
                     data-aos="fade-up"
                     data-aos-duration="1000">
                    <NuxtImg loading="lazy"
                             format="webp"
                             alt="image"
                             :modifiers="{ effect: 'colorize:10', color: 'black' }"
                             sizes="sm:100px md:50vw lg:600px"
                             provider="cloudinary"
                             src="v1700453990/overhead-view-honey-dipper-with-honey-pot-wooden-table_gqhpww.jpg"
                             class="w-1/2 h-[70vh] object-cover md:object-cover shadow-2xl shadow-black" />
                    <NuxtImg loading="lazy"
                             format="webp"
                             alt="image"
                             :modifiers="{ effect: 'colorize:10', color: 'black' }"
                             sizes="sm:100vw md:50vw lg:800px"
                             provider="cloudinary"
                             src="v1700453174/biscuits-honey-pot-with-wooden-dipper-cork-coaster-granite-backdrop_nakv7x.jpg"
                             class="w-1/2 h-[50vh] m-auto object-cover shadow-xl shadow-black" />
                </div>
            </template>
        </UiComp>
    </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
