<template>
    <div class="min-h-screen flex items-center justify-center flex-col text-center">
        <h1 class="text-8xl -mt-24 text-white">
            register interest
        </h1>
        <div class="">
            <input class="px-4 py-2 mt-10 rounded-md mr-4 placeholder:text-rose-400 text-rose-700" name="email"
                :size="size" v-model="email" placeholder="email" autofocus />
            <button class="px-4 py-2 mt-4 bg-rose-300 rounded-md text-rose-900" @click="onSubmit">submit</button>
        </div>
        <ClientOnly>
            <div v-if="storedEmails.length" class="mt-8 text-rose-200 text-center">
                <div class="text-rose-50">congrats!</div> you've successfully registed

                <div class="mt-4 text-rose-100">
                    {{ lastStoredEmail }}
                </div>

                <div v-if="storedEmails.length > 1" class="mt-8">
                    ...as well as
                    <ul class="mt-2 text-rose-100">
                        <li v-for="item in previouslyStoredEmails">
                            {{ item }}
                        </li>
                    </ul>
                </div>
            </div>
        </ClientOnly>
    </div>
</template>

<script setup lang="ts">

const email = ref('')
const size = computed(() => {
    return Math.max(email.value.length, 20) || 20
})

const storedEmails = useLocalStorage<string[]>('emails', [])
const length = computed(() => storedEmails.value.length)
const lastStoredEmail = computed(() => storedEmails.value[length.value - 1])
const previouslyStoredEmails = computed(() =>
    storedEmails.value.filter((_, i) => i !== length.value - 1))

const emailsSchema = z.coerce.string().email()

function onSubmit() {
    if (email.value === '') return
    try {
        emailsSchema.parse(email.value)
    } catch (e) {
        alert("email uses invalid format")
        return
    }
    if (storedEmails.value.includes(email.value)) {
        alert("you're already registered, we'll inform you when sweet todos is ready")
        return
    }

    storedEmails.value.push(email.value)
}
</script>

<style scoped>

</style>