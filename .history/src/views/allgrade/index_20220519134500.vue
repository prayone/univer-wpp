<template>
  <div class="all-greads">
    <div><img src="@/assets/img/allgrade/top.png" /></div>
    <div class="gread-content">
      <img src="@/assets/img/allgrade/content.png" />

      <div class="grades">
        <div class="item"></div>
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

  .gread-content {
    margin-top: -2px;
    position: relative;
    .grades {
      position: absolute;
      left: 0;
      padding:
      width: 100%;
      .item {

      }
    }
  }
}
</style>
