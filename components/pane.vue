<template>
    <div class="shadow-xl rounded-md p-4 flex-1 bg-rose-800 absolute transition hover:bg-rose-700 hover:shadow-2xl transform hover:-translate-y-2 duration-200 cursor-pointer"
        ref="el" :style="`top: ${elTop}px; left: ${elLeft}%;`">
        <slot />
    </div>
</template>

<script setup lang="ts">

const props = defineProps<{
    targetPosition: {
        x: number,
        y: number
    },
    top: number,
    direction: 'bottom' | 'left' | 'bottom-left' | 'bottom-right' | 'slide-right',
    multiplier?: {
        x?: number,
        y?: number
    }
}>()
const el = ref<HTMLElement | null>(null)
let elTop = ref(props.targetPosition.y)
let elLeft = ref(props.targetPosition.x)
// const { y } = useElementBounding(el)
watch(() => props.top, () => {
    // console.log(props.top)
    if (el.value) {
        let multi = {
            x: props.multiplier?.x ?? 1,
            y: props.multiplier?.y ?? 1
        }
        let screenOffset = screen.height / 1.7;
        let xTransform = Math.pow(Math.max(0, props.top - screenOffset), 1.2)
        let t = 1 / Math.sqrt(Math.max(1, xTransform))
        // el.value.style.opacity = `${t}`
        // el.value.style.transform = 'scale(' + t + ')'
        switch (props.direction) {
            case 'bottom': {
                elTop.value = xTransform / (4.0 * multi.y)
                break
            }
            case 'bottom-left': {
                elTop.value = xTransform / (4.0 * multi.y)
                elLeft.value = (-xTransform / 100.0) + props.targetPosition.x
                el.value.style.rotate = `${-(xTransform) / 50}deg`
                break
            }
            case 'bottom-right': {
                elTop.value = xTransform / (4.0 * multi.y)
                elLeft.value = ((xTransform / 100.0 * multi.x) + props.targetPosition.x)
                el.value.style.rotate = `${(xTransform) / 50}deg`
                break
            }
            case 'slide-right': {
                elLeft.value = ((xTransform / 10.0 * multi.x) + props.targetPosition.x)
            }
        }
    }
})
</script>

<style scoped>

</style>