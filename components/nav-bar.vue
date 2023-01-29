<template>
    <div class=" text-rose-100 fixed top-0 w-full backdrop-blur-sm backdrop-filter z-10">
        <div class="flex justify-between items-center container mx-auto py-6 px-2">
            <div class="text-2xl w-12 whitespace-pre">
                <NuxtLink to="https://www.sweet-suite.com"
                    class="text-sky-300 drop-shadow-none hover:text-sky-100 transition hover:drop-shadow-xl">
                    sweet
                </NuxtLink>
                <NuxtLink to="/#welcome" class="text-rose-100 hover:text-rose-300 transition hover:drop-shadow-xl">todos
                </NuxtLink>
            </div>
            <div class="flex gap-2 justify-self-center">
                <nav-link to="/#features">features</nav-link>
                <nav-link to="/#contributing">contributing</nav-link>
                <nav-link to="/#other-apps">other apps</nav-link>
            </div>
            <div class="justify-end">
                Social
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const route = useRoute()

watch(route, () => {
    const { hash } = route
})
</script>

<style scoped>

</style>