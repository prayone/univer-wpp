<template>
  <div class="box-wrap">
    <div><img src="@/assets/img/popularize_law.jpg" /></div>

    <div class="grades-btn">
      <div
        v-for="item in goazhong"
        :key="item.type"
        class="item"
        @click="gotDetail(item)"
      >
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script>
import { getLink } from "api";
export default {
  components: {},
  data() {
    return {
      goazhong: [],
    };
  },
  created() {
    this.getLinkApi();
  },
  mounted() {},
  computed: {},
  watch: {},
  methods: {
    gotDetail(item) {
      const href =
        "https://m.xdfgk.cn/camp/?product_id=" +
        item.name +
        "&sale_platform=7&recommender=" +
        this.$route.query.recommender;
      window.location.href = href;
    },
    getLinkApi() {
      getLink({ key: "popularize_law" }).then((res) => {
        if (res.data) {
          res.data.map((item) => {
            if (item.type >= 10) {
              this.goazhong.push(item);
            }
          });
        }
      });
    },
  },
};
</script>

<style scoped lang="less">
.box-wrap {
  position: relative;
  height: 100vh;
  background: #005a49;
}
.grades-btn {
  position: absolute;
  width: 100%;
  top: 270px;
  display: flex;
  align-items: center;
  padding-left: 50px;
  .item {
    height: 60px;
    width: 84px;
    margin-right: 10px;
    font-size: 0;
  }
}
</style>
