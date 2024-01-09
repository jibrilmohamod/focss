<template>
    <div class="bg-[#09080E] text-white px-5 py-5">
        <div class="md:flex md:container m-auto md:justify-between gap-10">
            <div class="md:w-2/5">
                <div class="flex">
                    <NuxtLink to="/">
                        <img src="/Logo.svg"
                             alt="logo"
                             class="object-contain h-16 w-full" />
                    </NuxtLink>
                </div>

                <!-- brief description of the restaurant here  -->
                <div class="py-5">
                    <p class="text-sm font-jost md:text-base">
                        Experience the taste of Kenya with Focal Foods' Honey – golden, creamy,
                        and packed with the goodness of Kenyan superfoods. Beyond sweet, it's a
                        health elixir rich in nutrients and antioxidants. Bee well with every drop
                        – good for you, good for the bees. Elevate your honey game with Focal
                        Foods.
                    </p>
                </div>

                <!-- social media icons here -->
                <div class="flex justify-between pb-5">
                    <div class="flex">
                        <!-- instagram -->
                        <Icon name="akar-icons:instagram-fill"
                              class="text-xl mr-5" />
                        <!-- facebook -->
                        <Icon name="akar-icons:facebook-fill"
                              class="text-xl mr-5" />
                        <!-- twitter -->
                        <Icon name="akar-icons:twitter-fill"
                              class="text-xl mr-5" />
                        <!-- tiktok -->
                        <Icon name="akar-icons:tiktok-fill"
                              class="text-xl mr-5" />
                        <!-- youtube -->
                        <Icon name="akar-icons:youtube-fill"
                              class="text-xl mr-5" />
                    </div>
                </div>
            </div>
            <!-- logo here -->

            <!-- Working Hours  -->
            <div class="py-5 md:py-0">
                <h4 class="font-jost md:text-xl font-semibold uppercase">Working Hours</h4>

                <div class="py-2 text-base">
                    <p class="font-jost">Monday - Friday: 9am - 10pm</p>
                    <p class="font-jost">Saturday - Sunday: 9am - 11pm</p>
                </div>
            </div>

            <!-- Location and Contact info with icons  -->
            <div class="md:py-0">
                <h4 class="font-jost md:text-xl font-semibold uppercase">
                    Location & Contact
                </h4>
                <div class="text-base">
                    <!-- address with icon -->
                    <div class="flex py-2 text-base">
                        <div class="pr-3">
                            <Icon name="mdi:location"
                                  class="text-xl" />
                        </div>
                        <p class="font-jost">1234, Nairobi, Kenya</p>
                    </div>
                    <!-- phone with icon -->

                    <div class="flex py-2 text-base">
                        <div class="pr-3">
                            <Icon name="mdi:phone"
                                  class="text-xl" />
                        </div>
                        <p class="font-jost">+254 712 99 55 22</p>
                    </div>
                    <!-- email with icon -->

                    <div class="flex py-2 text-base">
                        <div class="pr-3">
                            <Icon name="mdi:email"
                                  class="text-xl" />
                        </div>
                        <p class="font-jost">
                            <a href="mailto:info@focalfoods.co.ke"> info@focalfoods.co.ke </a>
                        </p>
                    </div>
                </div>
            </div>
            <!-- Newsletter -->
            <div></div>
        </div>

        <hr />

        <!-- footer bottom -->
        <div class="text-gray-400 py-6">
            <div class="py-5">
                <p class="font-jost text-center">
                    &copy; 2023 focalfoods Restaurant & Cafe. All Rights Reserved.
                </p>
            </div>

            <!-- additonal links to privacy policy, terms and conditions, etc -->

            <div class="flex">
                <div class="flex-1">
                    <p class="font-jost text-center">
                        <NuxtLink to="/"> Privacy Policy </NuxtLink>
                    </p>
                </div>
                <div class="flex-1">
                    <p class="font-jost text-center">
                        <NuxtLink to="/"> Terms & Conditions </NuxtLink>
                    </p>
                </div>
                <div class="flex-1">
                    <p class="font-jost text-center">
                        <NuxtLink to="/"> Contact Us </NuxtLink>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup></script>

<style lang="s" scoped></style>
