<template>
  <el-divider class="divider" />
  <div class="baner">
    <div class="baner_info">
      <p>Наша компания оказывает широкий спектр строительных и инженерных работ</p>
    </div>
    <el-divider class="divider" />
    <div class="container_carusel">
      <div class="carusel">
        <el-carousel :interval="4000" type="card" >
          <el-carousel-item v-for="item in products" :key="item.id">
            <img @click="modalwindow = true" :src="item.image" alt=""> 
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </div>
  <el-divider class="divider" />
  <div class="stroy">
    <div class="stroy_info">
      <p>Строительство домов и коттеджей</p>
    </div>
    <div class="stroy_foto">
      <div class="carusel_block">
        <el-carousel indicator-position="outside" >
          <el-carousel-item v-for="item in products" :key="item.id">
            <img @click="modalwindow = true" :src="item.image" alt=""> 
          </el-carousel-item>
        </el-carousel>
      </div>
      <!-- <el-image style="width: 100%; height: 100%" src="https://avatars.mds.yandex.net/i?id=0440b1bed4fc89f11a85a15ce6f66e6792d63e12-7546644-images-thumbs&n=13" fit="cover" /> -->
      <!-- <img src="https://avatars.mds.yandex.net/i?id=0440b1bed4fc89f11a85a15ce6f66e6792d63e12-7546644-images-thumbs&n=13" alt=""> -->
    </div>
  </div>
  <el-divider class="divider" />
  <div class="otdelka">
    <div class="ottdelka_foto">
      <el-image style="width: 100%; height: 100%" src="https://avatars.mds.yandex.net/i?id=0440b1bed4fc89f11a85a15ce6f66e6792d63e12-7546644-images-thumbs&n=13" fit="cover" />
    </div>
    <div class="otdelka_info">
      <p>Внешняя и внутренняя отделка домов и квартир</p>
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

.stroy {
  display: flex;
  max-width: 1536px;
  margin: 0 auto;
  justify-content: space-between;
  padding: 40px;
}

.stroy_info {
  width: 50%;
  font-size: 38px;
  padding-top: 45px;
}

.stroy_foto {
  display: flex;
  justify-content: flex-end;
}

.otdelka {
  display: flex;
  max-width: 1536px;
  margin: 0 auto;
  justify-content: space-between;
  padding: 40px;
}

.ottdelka_foto {
  display: flex;
  justify-content: flex-end;
  width: 50%;
}

.otdelka_info {
  width: 50%;
  font-size: 38px;
  padding-top: 45px;
  margin-left: 35px;
}

.carusel {
  max-width: 1536px;
  margin: 0 auto;
  padding: 10px;
}

.carusel_block {
  display: flex;
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

@media screen and (max-width: 400px) {
  .stroy_info {
    font-size: 16px;
  padding-top: 80px;
}
}
</style>