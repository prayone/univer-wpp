<template>
  <div class="zyjz_box">
    <div class="bg_img">
      <img src="https://resource.xdfgk.cn/zyjb_bg1.png" />
    </div>
    <div class="zyjz-cont">
      <div class="course_1">高一</div>
      <div class="course_1">高二</div>
      <div class="course_1">高三</div>
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
    
  },
  mounted() {},
  computed: {},
  watch: {},
  methods: {},
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
