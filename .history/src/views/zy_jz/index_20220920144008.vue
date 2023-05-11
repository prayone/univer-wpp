<template>
  <div class="zyjz_box">
    <div class="bg_img">
      <img src="https://resource.xdfgk.cn/zyjb_bg1.png" />
    </div>
    <div class="zyjz-cont">
      <div class="course_1"></div>
      <div class="course_1"></div>
      <div class="course_1"></div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  created() {},
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
    background: red;
    width: 100%;
    height: 88px;
    padding: 0 20px;
    display: flex;
    align-items: center;
    .course_1{
      width: 33%;
    }
  }
}
</style>
