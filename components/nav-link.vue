<template>
    <NuxtLink :to="to"
        class="hover:text-white transition cursor-pointer hover:shadow-inner border border-transparent rounded-md hover:border-rose-400 px-2 py-1 active:bg-rose-700"
        :class="doesMatch ? 'shadow-inner border-rose-400 bg-rose-700' : ''">
        <slot />
    </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps<{
    to: string
}>()

const route = useRoute()
const doesMatch = computed(() =>
    `/${route.hash}` === props.to
)
</script>

<style scoped>

</style>