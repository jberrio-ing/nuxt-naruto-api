<template>
    <Card class="card-ninja">
        <template #header>
            <img alt="ninja-picture" :src="imageSrc" />
        </template>
        <template #title>
            <Tag severity="success" :value="status" />
            <span class="block text-truncate">{{ ninja?.name || "NN" }}</span>
        </template>
        <template #subtitle>
            <b>Clan:</b> {{ clan }}
        </template>
    </Card>
</template>
<script setup>
const defaultImgSrc = "https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg";
const props = defineProps({
    ninja: {
        required: true,
        type: Object
    }
})

const imageSrc = computed(() => props?.ninja?.images?.[0] ?? defaultImgSrc)
const clan = computed(() => props?.ninja?.personal?.clan ?? "NN")
const status = computed(() => props?.ninja?.personal?.status ?? "NN")

</script>
<style>
.card-ninja {
    width: 220px;
    cursor: pointer;
    transition: all 0.6s;
}

.card-ninja:hover {
    transform: scale(1.1);
}

.card-ninja .p-card-header img {
    width: 100% !important;
    height: 160px !important;
}

.card-ninja .p-card-body {
    padding: 8px !important;
}

.card-ninja .p-card-content {
    padding: 0px !important;
}
</style>