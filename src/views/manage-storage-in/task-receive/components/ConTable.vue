<template>
  <div class="conTable">
    <el-button type="success" round class="btnReceipt">收货完成</el-button>
    <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" />
      <el-table-column label="日期" width="120">
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="120" />
      <el-table-column prop="address" label="地址" show-overflow-tooltip />
    </el-table>
    <div style="margin: 20px auto 0;border: 1px solid red;">
      <page-tool />
    </div>
  </div>
</template>

<script>
import pageTool from './pageTool.vue'
export default {
  components: { pageTool },
  data() {
    return {
      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-08',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-06',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-07',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
      multipleSelection: []
    }
  },

  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val
    }
  }
}
</script>
<style scoped lang="scss">
.conTable {
  background-color: #fff;
  margin: 20px 30px;
  padding: 30px;
  border-radius: 15px;
  // border: 1px solid red;
  .btnReceipt {
    // margin: 10px 0;
    margin-bottom: 20px;
  }
}
</style>
