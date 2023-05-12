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
        top: 20px;
      "
    ></div>
  </div>
</template>
<script>
// import data1 from "utils/test";
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
    window.$.getJSON("https://resource.xdfgk.cn/excel_json.json", (e) => {
      var options = {
        title: "高考研究院",
        container: "luckysheet", //luckysheet为容器id
        column: 20,
        allowUpdate: true,
        data: e,
        hook: {
          workbookCreateAfter: function () {
            // 冻结行列
            window.luckysheet.setBothFrozen(false);
          },
          updated(operate){
            console.log(operate)
            if(operate.range&&operate.range.length){
              let c = operate.range[0].column
              let r = operate.range[0].row
              console.log(c)
              console.log(r)
              for(let i = r[0] ;i<=r[1]; i++){
                // let s_val = window.luckysheet.getCellValue(i,c[0],{type:'id'});
                let id = operate.curdata[i][0].id
                let v = operate.curdata[i][c[0]].v
                console.log("r:"+i+",c:"+c[0]+",value:"+id+v)
              }
            }
          },
          cellUpdated() {
            // console.log(r);
            // console.log(c);
            // console.log(newValue.id);
            // console.log(newValue.v);
          },

        },
      };
      window.luckysheet.create(options);
      this.data_ver()
    });
  },
  methods: {
    data_ver(){
        window.luckysheet.setDataVerification(
            {
              type: 'dropdown',
              type2: 'null',
              value1: '0,1',
              prohibitInput: true,
            },
            {
              range: { row: [0, 1000], column: [4, 4] }
            }
          )
          window.luckysheet.setDataVerification(
              {
                type: 'dropdown',
                type2: 'null',
                value1: '0,1',
                prohibitInput: true,
              },
              {
                range: { row: [0, 1000], column: [5, 5] }
              }
            )
          window.luckysheet.setDataVerification(
              {
                type: 'dropdown',
                type2: 'null',
                value1: '0,1',
                prohibitInput: true,
              },
              {
                range: { row: [0, 1000], column: [6, 6] }
              }
            )
    }
  },
};
</script>
<style lang="less" scoped>
.test {
}
</style>
