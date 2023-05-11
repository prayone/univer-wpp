<template>
  <div class="test">
    <div
      id="luckysheet"
      style="
        margin: 0px;
        padding: 0px;
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0px;
        top: 0px;
      "
    ></div>
  </div>
</template>
<script>
import data1 from "utils/test";
export default {
  components: {},
  data() {
    return {
      lucky_data: [],
    };
  },
  created() {},
  mounted() {
    //配置项
    // window.$.getJSON("https://resource.xdfgk.cn/excel_json.json", (e) => {
    var options = {
      title: "高考研究院",
      container: "luckysheet", //luckysheet为容器id
      data: data1,
      hook: {
        cellUpdated(r, c, oldValue, newValue) {
          console.log(r);
          console.log(c);
          console.log(newValue.id);
          console.log(newValue.v);
        },
      },
    };
    window.luckysheet.create(options);
    // });
  },
  methods: {},
};
</script>
<style lang="less">
.test {
}
</style>
