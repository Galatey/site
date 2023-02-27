<template>
  <el-divider class="divider" />
  <div class="baner">
    <div class="baner_info">
      <p>Строим дома и котеджи по вашим проектам</p>
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
    <el-carousel :interval="4000" type="card" >
      <el-carousel-item v-for="item in products" :key="item.id">
          <img :src="item.image" alt="" 
            style=""> 
      </el-carousel-item>
    </el-carousel>
  </div>
  <el-divider class="divider" />
</template>

<script setup>
// const product = defineProps ({
//   products: {
//     image
//   }
// })
import { ref } from 'vue'
const products = ref([
  { id: 1, image: "https://avatars.mds.yandex.net/i?id=0440b1bed4fc89f11a85a15ce6f66e6792d63e12-7546644-images-thumbs&n=13" },
  { id: 2, image: "https://avatars.mds.yandex.net/i?id=f1be1d0bdf24700090478f21ca719288daced805-8497203-images-thumbs&n=13" },
  { id: 1, image: "https://avatars.mds.yandex.net/i?id=f1f6d9a5dbc28778b8423f9ad69b9f23dddb0304-7464698-images-thumbs&n=13" },
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