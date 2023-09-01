<template>
    <div class="grid">
        <div class="col-12" style="background-color: #000;">
            <h1 class="py-5 text-center" style="color: #f59e0b;font-size: 50px;">Naruto Character Universe</h1>
        </div>
        <div class="col-12">
            <ProgressBar v-if="isLoading" mode="indeterminate" style="height: 6px; width: 200px; margin: auto;" />
            <div class="flex flex-wrap justify-content-center">
                <CardNinja class="mx-2 mb-2" v-for="(item, i) in list" :ninja="item" :key="i"
                    @click="$router.push({ name: 'detail', params: { id: item.id } })" />
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default defineComponent({
    name: 'index-page',
    data: () => ({
        isLoading: false,
        list: [],
        url: "https://www.narutodb.xyz/api/character?page=1&limit=20",
    }),
    async created() {
        this.isLoading = true
        const { status, data } = await axios.get(this.url).catch(e => e.response ?? {})
        this.isLoading = false
        if (status == 200)
            this.list = data.characters
    },
})
</script>