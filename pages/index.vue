<template>
  <el-divider class="divider" />
  <div class="baner">
    <div class="baner_info">
      <p>Строим дома и коттеджи по вашим проектам</p>
    </div>
    <div class="baner_price">
      <p>Конкурентные цены</p>
    </div>
    <div class="baner_info1">
      <p>Сопровождение от выбора участка до регистрации</p>
    </div>
  </div>
  <el-divider class="divider" />
  <div class="carusel">
    <el-carousel :interval="8000" type="card">
      <el-carousel-item v-for="item in products" :key="item.id">
        <img @click="show = true" v-on:click="pic = item" :src="item.image" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
  <el-divider class="divider" />
  <div class="content">
    <span></span>
  </div>
  <el-divider class="divider" />
  <ModalWindow @close="show = false" :show="show" :pic="pic" />
</template>

<script setup>
import { ref } from 'vue'
import ModalWindow from '@/components/ModalWindow.vue';
const show = ref(false)
const pic = ref({})
const products = ref([
  { id: 1, image: "https://avatars.mds.yandex.net/i?id=0440b1bed4fc89f11a85a15ce6f66e6792d63e12-7546644-images-thumbs&n=13", title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quibusdam modi doloribus esse expedita voluptatum illo suscipit veniam. Quas, voluptatibus sunt. Quibusdam a inventore qui totam vitae, facilis eaque et est, libero ipsum impedit! Deleniti magni cupiditate ipsa odio officiis autem, repellendus doloribus voluptatum dolorem ad. Cum maxime optio dolorem quo blanditiis rerum soluta quis at explicabo harum unde adipisci aliquid accusamus ipsa nam ullam eveniet doloribus voluptas, sunt necessitatibus ratione obcaecati. Debitis consectetur officiis, quo repellat, distinctio vitae reiciendis at magni sapiente hic odit quis aliquam dignissimos similique temporibus iusto beatae fugiat quos culpa ex dolorem ratione nostrum. Eum nostrum sapiente officia delectus laboriosam suscipit voluptatibus a. Sequi voluptatem quis ratione perspiciatis mollitia vel maiores asperiores quisquam animi eos eligendi consequuntur, dolores sint inventore dolore alias temporibus minima iste incidunt accusamus vero sit! Exercitationem, ullam. Commodi perspiciatis a magni dolore ducimus sequi iure similique, tempora quos ipsum, aperiam assumenda?" },
  { id: 2, image: "https://avatars.mds.yandex.net/i?id=f1be1d0bdf24700090478f21ca719288daced805-8497203-images-thumbs&n=13", title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quibusdam modi doloribus esse expedita voluptatum illo suscipit veniam. Quas, voluptatibus sunt. Quibusdam a inventore qui totam vitae, facilis eaque et est, libero ipsum impedit! Deleniti magni cupiditate ipsa odio officiis autem, repellendus doloribus voluptatum dolorem ad. Cum maxime optio dolorem quo blanditiis rerum soluta quis at explicabo harum unde adipisci aliquid accusamus ipsa nam ullam eveniet doloribus voluptas, sunt necessitatibus ratione obcaecati. Debitis consectetur officiis, quo repellat, distinctio vitae reiciendis at magni sapiente hic odit quis aliquam dignissimos similique temporibus iusto beatae fugiat quos culpa ex dolorem ratione nostrum. Eum nostrum sapiente officia delectus laboriosam suscipit voluptatibus a. Sequi voluptatem quis ratione perspiciatis mollitia vel maiores asperiores quisquam animi eos eligendi consequuntur, dolores sint inventore dolore alias temporibus minima iste incidunt accusamus vero sit! Exercitationem, ullam. Commodi perspiciatis a magni dolore ducimus sequi iure similique, tempora quos ipsum, aperiam assumenda?" },
  { id: 1, image: "https://avatars.mds.yandex.net/i?id=f1f6d9a5dbc28778b8423f9ad69b9f23dddb0304-7464698-images-thumbs&n=13", title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quibusdam modi doloribus esse expedita voluptatum illo suscipit veniam. Quas, voluptatibus sunt. Quibusdam a inventore qui totam vitae, facilis eaque et est, libero ipsum impedit! Deleniti magni cupiditate ipsa odio officiis autem, repellendus doloribus voluptatum dolorem ad. Cum maxime optio dolorem quo blanditiis rerum soluta quis at explicabo harum unde adipisci aliquid accusamus ipsa nam ullam eveniet doloribus voluptas, sunt necessitatibus ratione obcaecati. Debitis consectetur officiis, quo repellat, distinctio vitae reiciendis at magni sapiente hic odit quis aliquam dignissimos similique temporibus iusto beatae fugiat quos culpa ex dolorem ratione nostrum. Eum nostrum sapiente officia delectus laboriosam suscipit voluptatibus a. Sequi voluptatem quis ratione perspiciatis mollitia vel maiores asperiores quisquam animi eos eligendi consequuntur, dolores sint inventore dolore alias temporibus minima iste incidunt accusamus vero sit! Exercitationem, ullam. Commodi perspiciatis a magni dolore ducimus sequi iure similique, tempora quos ipsum, aperiam assumenda?" },
])
// const { data: products } = await useFetch('https://fakestoreapi.com/products?limit=5')
</script>

  
<style scoped>
.divider {
  display: flex;
  max-width: 1536px;
  margin: 0 auto;
}

.baner {
  max-width: 1536px;
  margin: 0 auto;
  padding: 40px;
}

.baner_info {
  max-width: 768px;
  font-size: 38px;
  margin-bottom: 20px;
}

.baner_price {
  max-width: 768px;
  font-size: 28px;
  margin-bottom: 20px;
  color: red;
}

.baner_info1 {
  max-width: 768px;
  font-size: 28px;
  margin-bottom: 20px;
}

.carusel {
  max-width: 1536px;
  margin: 0 auto;
  padding: 10px;
}

.el-carousel__item img {
  height: 100%;
  width: 100%;
  object-fit: contain;
}

.el-carousel__item:nth-child(2n) {
  background-color: transparent;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: transparent;
}
</style>