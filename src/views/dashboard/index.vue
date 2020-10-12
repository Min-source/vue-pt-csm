<template>
  <div class="dashboard-container">
    <div class="dashboard-text" style="font-family:'STHupo'">
      校园二手平台是是校园内的个人闲置物品交易平台,可以快速发布商品，满足同学和老师查询和发布二手商品的需求。
    </div>
    <el-carousel indicator-position="outside" height="450px">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Dashboard",
  data:{
  },
  computed: {
    ...mapGetters(["name"]),
  },
};
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 20px;
  }
  &-text {
    font-size: 15px;
    line-height: 46px;
  }
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  // background-color: #99a9bf;
  background-size:100% 100%; 
  background-image: url("../../assets/404_images/疯狂开学季.jpg");
}

.el-carousel__item:nth-child(2n + 1) {
  // background-color: #d3dce6;
  background-size:100% 100%; 
  background-image: url("../../assets/404_images/洗手.jpg");
}
</style>
