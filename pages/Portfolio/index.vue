<!-- <template>
    <div class="">
        <p>Наши работы</p>
    </div>
    <div class="csrd">
        <div class="item_card" v-for="item in products" :key="item.id">
            <img width="400" :src="item.image" alt="">
            {{ item.title }}
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const products = ref([
    { id: 1, image: "https://avatars.mds.yandex.net/i?id=0440b1bed4fc89f11a85a15ce6f66e6792d63e12-7546644-images-thumbs&n=13", title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quibusdam modi doloribus esse expedita voluptatum illo suscipit veniam. Quas, voluptatibus sunt. Quibusdam a inventore qui totam vitae, facilis eaque et est, libero ipsum impedit! Deleniti magni cupiditate ipsa odio officiis autem, repellendus doloribus voluptatum dolorem ad. Cum maxime optio dolorem quo blanditiis rerum soluta quis at explicabo harum unde adipisci aliquid accusamus ipsa nam ullam eveniet doloribus voluptas, sunt necessitatibus ratione obcaecati. Debitis consectetur officiis, quo repellat, distinctio vitae reiciendis at magni sapiente hic odit quis aliquam dignissimos similique temporibus iusto beatae fugiat quos culpa ex dolorem ratione nostrum. Eum nostrum sapiente officia delectus laboriosam suscipit voluptatibus a. Sequi voluptatem quis ratione perspiciatis mollitia vel maiores asperiores quisquam animi eos eligendi consequuntur, dolores sint inventore dolore alias temporibus minima iste incidunt accusamus vero sit! Exercitationem, ullam. Commodi perspiciatis a magni dolore ducimus sequi iure similique, tempora quos ipsum, aperiam assumenda?" },
    { id: 2, image: "https://avatars.mds.yandex.net/i?id=f1be1d0bdf24700090478f21ca719288daced805-8497203-images-thumbs&n=13", title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quibusdam modi doloribus esse expedita voluptatum illo suscipit veniam. Quas, voluptatibus sunt. Quibusdam a inventore qui totam vitae, facilis eaque et est, libero ipsum impedit! Deleniti magni cupiditate ipsa odio officiis autem, repellendus doloribus voluptatum dolorem ad. Cum maxime optio dolorem quo blanditiis rerum soluta quis at explicabo harum unde adipisci aliquid accusamus ipsa nam ullam eveniet doloribus voluptas, sunt necessitatibus ratione obcaecati. Debitis consectetur officiis, quo repellat, distinctio vitae reiciendis at magni sapiente hic odit quis aliquam dignissimos similique temporibus iusto beatae fugiat quos culpa ex dolorem ratione nostrum. Eum nostrum sapiente officia delectus laboriosam suscipit voluptatibus a. Sequi voluptatem quis ratione perspiciatis mollitia vel maiores asperiores quisquam animi eos eligendi consequuntur, dolores sint inventore dolore alias temporibus minima iste incidunt accusamus vero sit! Exercitationem, ullam. Commodi perspiciatis a magni dolore ducimus sequi iure similique, tempora quos ipsum, aperiam assumenda?" },
    { id: 1, image: "https://avatars.mds.yandex.net/i?id=f1f6d9a5dbc28778b8423f9ad69b9f23dddb0304-7464698-images-thumbs&n=13", title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quibusdam modi doloribus esse expedita voluptatum illo suscipit veniam. Quas, voluptatibus sunt. Quibusdam a inventore qui totam vitae, facilis eaque et est, libero ipsum impedit! Deleniti magni cupiditate ipsa odio officiis autem, repellendus doloribus voluptatum dolorem ad. Cum maxime optio dolorem quo blanditiis rerum soluta quis at explicabo harum unde adipisci aliquid accusamus ipsa nam ullam eveniet doloribus voluptas, sunt necessitatibus ratione obcaecati. Debitis consectetur officiis, quo repellat, distinctio vitae reiciendis at magni sapiente hic odit quis aliquam dignissimos similique temporibus iusto beatae fugiat quos culpa ex dolorem ratione nostrum. Eum nostrum sapiente officia delectus laboriosam suscipit voluptatibus a. Sequi voluptatem quis ratione perspiciatis mollitia vel maiores asperiores quisquam animi eos eligendi consequuntur, dolores sint inventore dolore alias temporibus minima iste incidunt accusamus vero sit! Exercitationem, ullam. Commodi perspiciatis a magni dolore ducimus sequi iure similique, tempora quos ipsum, aperiam assumenda?" },
])
// const { data: products } = await useFetch('https://fakestoreapi.com/products?limit=5')
</script>

<style>
.csrd {
    display: flex;
    flex-wrap: wrap;
    max-width: 1536px;
    margin: 0 auto;
    padding: 40px;
}

.item_card {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    width: 440px;
    height: 300px;
    justify-content: space-between;
    margin: 20px;
    overflow: hidden;
    /* Обрезаем всё за пределами блока */
    text-overflow: ellipsis;
}

.item_card_ds {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style> -->
<template>
    <el-row>
        <el-col v-for="(o, index) in 2" :key="o" :span="8" :offset="index > 0 ? 2 : 0">
            <el-card :body-style="{ padding: '0px' }">
                <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                    class="image" />
                <div style="padding: 14px">
                    <span>Yummy hamburger</span>
                    <div class="bottom">
                        <time class="time">{{ currentDate }}</time>
                        <el-button text class="button">Operating</el-button>
                    </div>
                </div>
            </el-card>
        </el-col>
    </el-row>
</template>
  
<script lang="ts" setup>
import { ref } from 'vue'

const currentDate = ref(new Date())
</script>
  
<style>
.time {
    font-size: 12px;
    color: #999;
}

.bottom {
    margin-top: 13px;
    line-height: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.button {
    padding: 0;
    min-height: auto;
}

.image {
    width: 100%;
    display: block;
}
</style>