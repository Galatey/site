<template>
    <div class="">
        <p>Наши работы</p>
    </div>
    <div class="card">
        <div class="item_card" v-for="item in products" :key="item.id">
            <img width="200" :src="item.image" alt="">
            <NuxtLink :to="`/Portfolio/&{item.image}`">
                {{ item.image }}
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const products = ref([
  { id: 1, image: "https://avatars.mds.yandex.net/i?id=0440b1bed4fc89f11a85a15ce6f66e6792d63e12-7546644-images-thumbs&n=13" },
  { id: 2, image: "https://avatars.mds.yandex.net/i?id=f1be1d0bdf24700090478f21ca719288daced805-8497203-images-thumbs&n=13" },
  { id: 1, image: "https://avatars.mds.yandex.net/i?id=f1f6d9a5dbc28778b8423f9ad69b9f23dddb0304-7464698-images-thumbs&n=13" },
])
// const { data: products } = await useFetch('https://fakestoreapi.com/products?limit=5')
</script>

<style>
.card {
    display: flex;
    flex-wrap: wrap;
    max-width: 1536px;
    margin: 0 auto;
    padding: 40px;
}

.item_card {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    width: 200px;
    justify-content: space-between;
    margin: 20px;
}

.item_card_ds {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>