<template>
  <div class="lx_znd">
    <div class="img"><img src="../assets/img/lx_znd/1.png" alt="" /></div>
    <div class="bg">
      <div class="w-list">
        <div
          class="w-item"
          v-for="(item, index) in list"
          :key="index"
          @click="go_detail(item)"
        >
          <img :src="item.img" />
        </div>
      </div>
    </div>
    <div class="img"><img src="../assets/img/lx_znd/3.png" alt="" /></div>
  </div>
</template>
<script>
import { share_conf } from "api";
export default {
  data() {
    return {
      // flag代表是否需要带key值recommender
      list: [
        {
          img: require("../assets/img/lx_znd/b1.png"),
          flag: "lx",
        },
        {
          img: require("../assets/img/lx_znd/b2.png"),
        },
      ],
    };
  },
  mounted() {
    this.get_links();
  },
  methods: {
    // 获取链接
    async get_links() {
      let res = await share_conf({ key: "lx_zznd" });
      if (res.status == 1) {
        this.list.map((item, index) => {
          item.url = res.data[index]?.url;
        });
      }
    },
    go_detail(item) {
      // 有推广人id recommender
      let recommender = this.$route.query.recommender;
      if (item.flag) {
        window.location.href = recommender ? item.url + recommender : item.url;
        return;
      } else {
        window.location.href = recommender
          ? `${item.url}&recommender=${recommender}`
          : item.url;
      }
    },
  },
};
</script>
<style lang="less" scoped>
.lx_znd {
  .bg {
    padding-top: 18px;
    width: 100%;
    height: 241px;
    background: url(../assets/img/lx_znd/2.png) center center no-repeat;
    background-size: 100% 100%;
  }
  .w-list {
    display: flex;
    align-items: center;
    justify-content: center;
    .w-item {
      width: 131px;
      margin: 0 5px;
    }
  }
}
</style>
