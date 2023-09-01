<template>
    <div>
        <Button label="Volver al inicio" @click="$router.go(-1)"></Button>
        <CardNinja :ninja="ninja" class="m-auto mt-5"></CardNinja>
    </div>
</template>

<script setup>
import axios from 'axios'
definePageMeta({
    name: 'detail',
})

const route = useRoute()
const ninja = ref({})

onMounted(async () => {
    const { status, data } = await axios.get(`https://www.narutodb.xyz/api/character/${route.params.id}`).catch(e => e.response ?? {})
    ninja.value = data
})
</script>