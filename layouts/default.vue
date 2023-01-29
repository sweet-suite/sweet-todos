<template>
    <div class="bg-rose-900 font-bold">
        <div class="flex flex-col min-h-screen relative">
            <nav-bar></nav-bar>
            <NuxtPage class="sticky top" />
            <div class="mt-auto text-center text-rose-100 my-8">
                <div class="flex flex-col">
                    <div>sweet suite</div>
                    <div class="text-sm text-rose-200">copyright @ 2022</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss">
body {
    @apply bg-rose-900
}
</style>