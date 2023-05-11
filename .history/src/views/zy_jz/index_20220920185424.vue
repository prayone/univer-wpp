<template>
  <div class="zyjz_box">
    <div class="bg_img">
      <img src="./img/zyjb_bg1.jpg" />
    </div>
    <div class="zyjz-cont-box">
      <img src="./img/zyjb_bg2.jpg" />

      <div class="zyjz-cont-">
        <div
          class="course_1"
          v-for="item in courseList"
          :key="item.url"
          @click="gotoDetail(item)"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import { getCourseListApi } from "./api";
export default {
  components: {},
  data() {
    return {
      courseList: [],
    };
  },
  created() {
    getCourseListApi({ key: "learn_career_plan" }).then((res) => {
      if (res.data) {
        this.courseList = res.data;
      }
    });
  },
  mounted() {},
  computed: {},
  watch: {},
  methods: {
    gotoDetail(item) {
      window.location.href = item.url;
    },
  },
};
</script>

<style scoped lang="less">
.zyjz_box {
  background: #619bff;
  min-height: 100vh;
  position: relative;
  .bg_img {
    img {
      vertical-align: top;
    }
  }
  .zyjz-cont-box {
  }
  .zyjz-cont {
    position: absolute;
    top: 525px;
    width: 100%;
    height: 92px;
    padding: 0 20px;
    display: flex;

    align-items: center;
    justify-content: space-between;
    .course_1 {
      width: 31%;
      height: 100%;
      font-size: 0;
    }
  }
}
</style>
