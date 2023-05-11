<template>
  <div class="index-wrap-box">
    <img src="@/assets/img/gk_lh/index_bg.png" style="vertical-align: top" />
    <div class="index-wrap">
      <div class="logo"><img src="@/assets/img/gk_lh/logo.png/" /></div>

      <div class="content_1">
        <p>———— 即可领取丰富资料包 ————</p>
        <div>
          2022年高考真题视频解析/学习思维课/教师寄语
          全息投影使用教程/其他已公布真题/高考志愿规划指导课 /职业性格线上测评
        </div>
      </div>

      <div class="content_2">
        <p>扫码添加专属班主任老师</p>

        <div class="wx_img">
          <img src="@/assets/img/gk_lh/wx_img.png" />
        </div>
      </div>
    </div>
    <div class="content_3">
      <a href="https://m.xdfgk.cn/to_class/">点击去上课 </a>
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
.index-wrap-box {
  position: relative;
}
.index-wrap {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  //background: url("../../assets/index_bg.png") no-repeat;
  background-size: 100% auto;
  padding-top: 40px;
  .logo {
    margin: 0px 72px 10px;
    img {
      height: 100%;
      text-align: center;
    }
  }
  .content_1 {
    height: 179px;
    width: 312px;
    margin: 0 auto;
    background: url("../../assets/img/gk_lh/bg_1.png") 5px 0 no-repeat;
    background-size: 307px 100%;
    padding: 85px 32px 0 18px;
    color: #fff;
    font-size: 12px;
    text-align: justify;
    line-height: 1.6;
    p {
      text-align: center;
    }
  }

  .content_2 {
    margin-top: 24px;
    text-align: center;
    p {
      font-size: 14px;
      font-weight: 500;
      color: #ffffff;
    }
    .wx_img {
      width: 130px;
      height: 130px;
      background: #fff;
      margin: 10px auto;
    }
  }
}
.content_3 {
  position: absolute;
  width: 100%;
  bottom: 30px;
  text-align: center;
  a {
    font-size: 16px;
    color: #22c5af;
    //text-decoration: none;
  }
}
</style>
