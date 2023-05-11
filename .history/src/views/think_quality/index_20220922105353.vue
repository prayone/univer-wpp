<template>
  <div class="poly">
    <div class="setion1">
      <img src="../../assets/img/think_quality/think_quality_1.jpg" alt="" />
    </div>
    <div class="section2">
      <div class="section2-bg">
        <img src="../../assets/img/think_quality/think_quality_2.jpg" alt="" />
      </div>
      <div class="section2-ct">
        <div class="img1" @click="go_course('gaoyi')">
          <img src="../../assets/img/poly/btn1.png" alt="" />
        </div>
        <div class="img2" @click="go_course('gaoer')">
          <img src="../../assets/img/poly/btn2.png" alt="" />
        </div>
        <div class="img3" @click="go_course('gaosan')">
          <img src="../../assets/img/poly/btn3.png" alt="" />
        </div>
      </div>
    </div>
    <div class="setion1">
      <img src="../../assets/img/think_quality/think_quality_1.jpg" alt="" />
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
      let res = await getLink({ key: "think_quality" });
      if (res.status == 1) {
        this.list = res.data;
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
  background: url(../../assets/img/poly/4.jpg) left center repeat-y;
  background-size: 100% 4px;
  min-height: 100vh;
}
img {
  vertical-align: middle;
}
.setion1 {
}
.section2 {
  
  // width: 100%;
  // height: 232px;
  // background: url(../../assets/img/poly/2.jpg) center center no-repeat;
  // background-size: 100% 100%;
  // padding-top: 65px;
  // display: flex;
  // justify-content: center;
  // img {
  //   width: 100%;
  //   height: 100%;
  // }
  // .img1 {
  //   width: 90.3px;
  //   height: 82.6px;
  // }
  // .img2 {
  //   width: 90.3px;
  //   height: 82.6px;
  //   margin: 0 12px;
  // }
  // .img3 {
  //   width: 90.3px;
  //   height: 82.6px;
  // }
}
</style>
