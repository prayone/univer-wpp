<template>
  <div class="all-greads">
    <div><img src="@/assets/img/allgrade/top.png" /></div>
    <div class="gread-content">
      <!-- <img src="@/assets/img/allgrade/content.png" /> -->

      <div class="grades">
        <div
          class="item"
          v-for="(item, index) in gaozhong"
          :key="item.type"
          :class="index === 1 ? 'item-2' : ''"
          @click="() => gotoDetail(item)"
        >
          <p>我是</p>
          <h4>{{ grade[item.type] }}</h4>
        </div>
        <div
          class="item item-chu"
          v-for="(item, index) in chuzhong"
          :key="item.type"
          :class="index === 1 ? 'item-2' : ''"
          @click="() => gotoDetail(item)"
        >
          <p>我是</p>
          <h4>{{ grade[item.type] }}</h4>
        </div>

        <div
          class="item item-xiao"
          v-for="(item, index) in xiaoxue"
          :key="item.type"
          :class="index === 1 || index === 4 ? 'item-2' : ''"
          @click="() => gotoDetail(item)"
        >
          <p>我是</p>
          <h4>{{ grade[item.type] }}</h4>
        </div>
      </div>
    </div>
    <div><img src="@/assets/img/allgrade/footer.png" /></div>
  </div>
</template>

<script>
import { getLink } from "api";
export default {
  components: {},
  data() {
    return {
      gradeList: [],
      gaozhong: [],
      chuzhong: [],
      xiaoxue: [],
      grade: [
        "",
        "一年级",
        "二年级",
        "三年级",
        "四年级",
        "五年级",
        "六年级",
        "初一",
        "初二",
        "初三",
        "高一",
        "高二",
        "高三",
      ],
    };
  },
  created() {
    this.getLinkApi();
  },
  mounted() {},
  computed: {},
  watch: {},
  methods: {
    gotoDetail(item) {
      console.log("===item", item);
      const href =
        item.name +
        "&sale_platform=7&recommender=" +
        this.$route.query.recommender;
      console.log("--href", href);
      window.location.href = href;
    },
    getLinkApi() {
      getLink({ key: "allgrad" }).then((res) => {
        this.gradeList = res.data.reverse();
        const g = [];
        const c = [];
        const x = [];
        res.data.map((item) => {
          if (item.type >= 10) {
            g.push(item);
          } else if (item.type > 6) {
            c.push(item);
          } else {
            x.push(item);
          }
        });
        this.gaozhong = g.reverse();
        this.chuzhong = c.reverse();
        this.xiaoxue = x.reverse();
      });
    },
  },
};
</script>

<style scoped lang="less">
.all-greads {
  img {
    vertical-align: top;
  }
  min-height: 100vh;
  background: #015949;
  .gread-content {
    margin-top: -2px;
    position: relative;
    .grades {
      // position: absolute;
      // left: 0;
      // top: 0;
      padding: 68px 35px 0 35px;

      width: 100%;
      background: url("../../assets/img/allgrade/content.png");
      background-size: 100% auto;
      display: flex;
      flex-wrap: wrap;
      .item {
        width: 107px;
        height: 90px;
        background: url("../../assets/img/allgrade/gao.png");

        background-size: 100% auto;

        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding-bottom: 20px;
        p {
          font-size: 12px;
          color: #fff;
        }
        h4 {
          font-size: 16px;
        }
      }
      .item-2 {
        margin: 0 -9px;
      }
      .item-chu {
        background: url("../../assets/img/allgrade/chu.png");
        background-size: 100% auto;
      }
      .item-xiao {
        background: url("../../assets/img/allgrade/xiao.png");
        background-size: 100% auto;
      }
    }
  }
}
</style>
