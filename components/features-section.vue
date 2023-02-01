<template>
    <div class="flex flex-col">
        <div class="relative mt-6 h-72" ref="el">
            <Pane :targetPosition="{
                x: 0, y: 0
            }" class="w-full h-full" :top="y" direction="bottom">
                <div class="text-5xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit doloribus.
                </div>
                <div class="text-xl mt-10 text-rose-200 font-normal">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia a, vitae illum, qui unde pariatur
                    quisquam doloribus mollitia nam alias sapiente suscipit voluptatibus rerum! Nisi rem, dignissimos
                    hic dicta ducimus, voluptate incidunt aliquid ad atque numquam doloremque earum quidem harum fuga
                    sed delectus deserunt quo architecto ex qui aut ea libero cumque. Voluptatibus beatae ut, quam
                    assumenda rerum nulla officia ratione explicabo vel minus dignissimos earum tempore reiciendis
                    aspernatur eaque architecto officiis cumque! Magnam rem deleniti accusamus adipisci, veniam a!
                </div>
            </Pane>
        </div>
        <div class="relative mt-5 h-40 overflow-ellipsis" ref="el">
            <Pane :targetPosition="{
                x: 0, y: 0
            }" class="h-full" :top="y" direction="bottom-left" style="width: 32.5%" :multiplier="{ y: 0.7 }">
                <div class="text-xl">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore.
                </div>
                <div class="text-sm mt-8 text-rose-200 font-normal">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi repellat beatae, minus fugit et
                    dolorem explicabo vitae libero in accusamus.
                </div>
            </Pane>
            <Pane :targetPosition="{ x: 33.8, y: 0 }" class="h-full" :top="y" direction="bottom" style="width: 32.5%"
                :multiplier="{ y: 0.7 }">
                <div class="text-xl">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore.
                </div>
                <div class="text-sm mt-8 text-rose-200 font-normal">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi repellat beatae, minus fugit et
                    dolorem explicabo vitae libero in accusamus.
                </div>
            </Pane>
            <Pane :targetPosition="{
                x: 67.5, y: 0
            }" class="h-full" :top="y" direction="bottom-right" style="width: 32.5%" :multiplier="{ y: 0.7 }">
                <div class="text-xl">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore.
                </div>
                <div class="text-sm mt-8 text-rose-200 font-normal">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi repellat beatae, minus fugit et
                    dolorem explicabo vitae libero in accusamus.
                </div>
            </Pane>
        </div>
        <div class="relative mt-5 h-32" ref="el">
            <Pane :targetPosition="{ x: 0, y: 0 }" class="h-full w-full" :top="y" direction="bottom"
                :multiplier="{ y: 0.5 }">
            </Pane>
        </div>
        <div class="relative mt-5 h-72 overflow-ellipsis" ref="el">
            <Pane :targetPosition="{
                x: 0, y: 0
            }" class="h-full" :top="y" direction="bottom-left" style="width: 49%" :multiplier="{ y: 0.2 }">
            </Pane>

            <Pane :targetPosition="{
                x: 51, y: 0
            }" class="h-full" :top="y" direction="bottom-right" style="width: 49%" :multiplier="{ y: 0.2 }">
            </Pane>
        </div>
    </div>
</template>

<script setup lang="ts">
const el = ref<HTMLElement | null>(null)
const { y } = useElementBounding(el)
</script>