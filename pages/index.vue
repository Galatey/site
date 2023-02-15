<template>
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
  <div class="carusel">
    <el-carousel :interval="4000" type="card" height="400px">
      <el-carousel-item v-for="item in products" :key="item.id">
        <nuxt-link to="/Portfolio" :product="item"><img width="500" :src="item.image" alt=""
            style="width:100%; height:100% "></nuxt-link>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup>
const { data: products } = await useFetch('https://fakestoreapi.com/products?limit=5')
</script>
  
<style scoped>
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

}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>