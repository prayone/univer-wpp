<template>
  <div class="poly">
    <div class="setion1">
      <img src="https://resource.xdfgk.cn/txhbc_1.jpg" alt="" />
    </div>
    <div class="section2">
      <div class="section2-bg">
        <img src="https://resource.xdfgk.cn/txhbc_2.jpg" alt="" />
      </div>
      <div class="section2-ct">
        <!-- <div class="btn img1" @click="go_course('gaoyi')">
          <img src="../../assets/img/poly/btn1.png" alt="" />
        </div>
        <div class="btn img2" @click="go_course('gaoer')">
          <img src="../../assets/img/poly/btn2.png" alt="" />
        </div> -->
        <div
          class="btn"
          @click="go_course('gaosan')"
          v-for="(item, index) in list"
          :key="index"
        >
          <img src="../../assets/img/poly/btn3.png" alt="" />
        </div>
      </div>
    </div>
    <div class="setion1">
      <img src="https://resource.xdfgk.cn/txhbc_3.jpg" alt="" />
    </div>
  </div>
</template>
<script>
import { getLink } from "api";
export default {
  data() {
    return {
      list: [],
    };
  },
  mounted() {
    this.get_link();
  },
  methods: {
    async get_link() {
      let res = await getLink({ key: "popularize_law" });
      if (res.status == 1) {
        this.list = res.data.splice(0, 6);
      }
    },
    go_course(info) {
      let obj = {
        gaoyi: this.list[0].url,
        gaoer: this.list[1].url,
        gaosan: this.list[2].url,
      };
      window.location.href =
        obj[info] +
        "&sale_platform=7&recommender=" +
        this.$route.query.recommender;
    },
  },
};
</script>
<style lang="less" scoped>
.poly {
  background: #0846f1;
  background-size: 100% 4px;
  min-height: 100vh;
}
img {
  vertical-align: middle;
}
.setion1 {
}
.section2 {
  position: relative;
  margin: -1px 0 -1px;
  .section2-ct {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 0 40px;
    .btn {
      width: 33%;
      img {
        opacity: 0;
      }
    }
  }
}
</style>
