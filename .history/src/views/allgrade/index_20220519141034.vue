<template>
  <div class="all-greads">
    <div><img src="@/assets/img/allgrade/top.png" /></div>
    <div class="gread-content">
      <!-- <img src="@/assets/img/allgrade/content.png" /> -->

      <div class="grades">
        <div class="item">
          <p>我是</p>
          <h4>高一</h4>
        </div>
        <div class="item item-2">
          <p>我是</p>
          <h4>高一</h4>
        </div>
        <div class="item">
          <p>我是</p>
          <h4>高一</h4>
        </div>
        <div class="item item-chu">
          <p>我是</p>
          <h4>初一</h4>
        </div>
        <div class="item item-chu item-2">
          <p>我是</p>
          <h4>初一</h4>
        </div>
        <div class="item item-chu">
          <p>我是</p>
          <h4>初一</h4>
        </div>

        <div class="item item-xiao">
          <p>我是</p>
          <h4>一年级</h4>
        </div>
        <div class="item item-xiao item-2">
          <p>我是</p>
          <h4>二年级</h4>
        </div>

        <div class="item item-xiao">
          <p>我是</p>
          <h4>三年级</h4>
        </div>

        <div class="item item-xiao">
          <p>我是</p>
          <h4>四年级</h4>
        </div>

        <div class="item item-xiao item-2">
          <p>我是</p>
          <h4>五年级</h4>
        </div>

        <div class="item item-xiao">
          <p>我是</p>
          <h4>六年级</h4>
        </div>
      </div>
    </div>
    <div><img src="@/assets/img/allgrade/footer.png" /></div>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {};
  },
  created () { },
  mounted () { },
  computed: {},
  watch: {},
  methods: {},
};
</script>

<style scoped lang="less">
.all-greads {
  img {
    vertical-align: top;
  }

//#015949
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
    }
  }
}
</style>
