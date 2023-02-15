<template>
    <H1>Наши работы</H1>
    <div class="csrd">
        <div class="item_card" v-for="item in products" :key="item.id">
            <img width="200" :src="item.image" alt="">
            <NuxtLink :to="'/Portfolio/${item.id}'">
                <div class="item_card_ds">
                    <p>{{ item.title }}</p>
                    <p>{{ item.price }}</p>
                </div>
            </NuxtLink>
        </div>
    </div>
</template>
    
<script setup>

   const {data: products} = await useFetch('https://fakestoreapi.com/products?limit=5')
</script>

<style>
.csrd {
    display: flex;
    flex-wrap: wrap;
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