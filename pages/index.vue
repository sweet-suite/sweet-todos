<template>
    <div class="text-rose-100 container mx-auto px-2">
        <div id="welcome" class="">
            <div class="min-h-screen flex items-center justify-center flex-col text-center">
                <h1 class="text-8xl -mt-24 text-white">
                    <span class="text-sky-300 drop-shadow-xl">sweet</span> todos.
                    <br>
                    free <span class="text-rose-400 drop-shadow-xl">forever</span>.
                </h1>
                <p class="mt-8 text-rose-200 text-lg">
                    As passionate developers, we believe in the importance and power of Open Source.
                    <br>
                    As the first of <i>hopefully</i> many projects, this collection will contain everything you could
                    need.
                </p>
                <div class="flex gap-8 mt-8 items-center">
                    <NuxtLink to="/register-interest" class="px-6 py-2 bg-rose-300 text-rose-900 text-xl rounded-md">
                        register interest
                    </NuxtLink>
                    <NuxtLink to="/app">
                        <button class="px-6 py-2 bg-sky-300 text-sky-900 text-xl rounded-md">the collection</button>
                    </NuxtLink>
                </div>
            </div>
        </div>

        <div class="mt-96">hello</div>
        <div class="">hello</div>
        <div class="py-24 pt-44" id="features">
            <div class="">
                <h2 class="text-6xl -mt-24 text-white">
                    features
                </h2>
                <FeaturesSection />
                <!-- <div class="mt-8 relative">
                    <div class="shadow-inner rounded-md p-4 h-40 bg-rose-800"></div>
                    <div class="flex gap-4 mt-4">
                        <pane />
                        <div class="shadow-inner rounded-md p-4 flex-1 bg-rose-800 transition transform"></div>
                        <div class="shadow-inner rounded-md p-4 flex-1 bg-rose-800"></div>
                    </div>
                    <div class="shadow-inner rounded-md p-4 mt-4 bg-rose-800 h-28"></div>
                </div> -->
            </div>
        </div>
        <div class="py-24 pt-44" id="contributing">
            <div class="">
                <h2 class="text-6xl -mt-24 text-white">
                    contributing
                </h2>
                <div class="mt-8">
                    <div class="shadow-inner border rounded-md p-4">1</div>
                    <div class="flex gap-4 mt-4">
                        <div class="shadow-inner border rounded-md p-4 flex-1">2.1</div>
                        <div class="shadow-inner border rounded-md p-4 flex-1">2.1</div>
                        <div class="shadow-inner border rounded-md p-4 flex-1">2.1</div>
                    </div>
                    <div class="shadow-inner border rounded-md p-4 mt-4">1</div>
                </div>
            </div>
        </div>
        <div class="py-24 pt-44" id="other-apps">
            <h2 class="text-6xl -mt-24 text-white">
                other apps
            </h2>
            <AppsSection />
            <!-- <div class="">
                <div class="text-2xl text-rose-200 mt-2">some text goes here</div>
                <div class="mt-8">
                    <div class="flex">
                        <div class="flex flex-col border-2 rounded-md p-4 text-2xl text-center w-48">
                            <div class="h-28"></div>
                            <div> sweet <br /> <span class="text-yellow-300">finance</span> </div>
                        </div>
                    </div>
                </div>
            </div> -->
        </div>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    middleware: 'remove-hash'
})
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>