<template>
    <div class="flex gap-12">
        <div class="flex flex-col w-2/3">
            <div class="relative mt-4 h-72 overflow-ellipsis w-full" ref="el">
                <Pane :targetPosition="{
                    x: 0, y: 0
                }" class="h-full" :top="y" direction="bottom-left" style="width: 49%">
                </Pane>

                <Pane :targetPosition="{
                    x: 51, y: 0
                }" class="h-full" :top="y" direction="bottom-right" style="width: 49%"></Pane>
            </div>
            <div class="relative mt-6 h-72 overflow-ellipsis w-full" ref="el">
                <Pane :targetPosition="{
                    x: 0, y: 0
                }" class="h-full" :top="y" direction="bottom-left" style="width: 49%">
                </Pane>

                <Pane :targetPosition="{
                    x: 51, y: 0
                }" class="h-full" :top="y" direction="bottom-right" style="width: 49%"></Pane>
            </div>
        </div>
        <div class="w-1/3 relative mt-32">
            <Pane direction="slide-right" :targetPosition="{ x: 0, y: 0 }" :multiplier="{ y: 0.3 }" :top="y"
                class="p-8 flex items-center text-rose-200 text-2xl w-full">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus atque excepturi reprehenderit sint
                repudiandae nemo in praesentium vel culpa quisquam, assumenda nostrum? </Pane>
        </div>
    </div>
</template>

<script setup lang="ts">
const el = ref<HTMLElement | null>(null)
const { y } = useElementBounding(el)
</script>