<template>
  <div>
    <el-card class="box-card1" style='margin:20px 30px 20px 30px;'>
    <el-form>
        <el-form-item>
                 <div class='kuang1' >
              <div class='kiang11' style='font-size:12px;color:#887e7e'>库区名称</div>
          <el-input type='text'  style='width:260px' placeholder="请输入"></el-input>
      </div>
        </el-form-item>
     <el-form-item>
            <div class='kuang2' >
           <div class='kiang22' style='font-size:12px;color:#887e7e'>库位名称</div>
          <el-input type='text'  style='width:260px' placeholder="请输入"></el-input>
      </div>
     </el-form-item>
       <el-form-item>
          <div class='kuang3' >
           <div class='kiang33' style='font-size:12px;color:#887e7e'>库位状态</div>
            <el-select  placeholder="请选择" style='width:260px'>
      <el-option v-for='item in hireType' :key='item.id' :label="item.value" :value="item.id"></el-option>
    </el-select>
    <el-button round class='btn1'>搜索</el-button>
    <el-button round class='btn2'>重置</el-button>
      </div>
       </el-form-item>
    </el-form>
</el-card>
<el-card style='margin:20px 30px 20px 30px;height:670px' class='cd1'>
   <div class='big' style='display:flex;justify-content:space-between;padding-left:30px;padding-right:30px;height:60px;padding-top:20px;margin-bottom:20px'>
    <div class='left'>
      <el-button class='lbtn1' round style='border:unset;color:#fff'>新增库位</el-button>
    </div>
    <div class='right'>
      <el-button round class='rbtn1' style='border:unset;color:black'>下载库位模板</el-button>
      <el-button round class='rbtn1' style='border:unset;color:black'>导入库位信息</el-button>
    </div>
   </div>
   <!-- 表格 -->
    <el-table
    :data='list'
    border
    max-height="500"
    style="width: 100%;">
    <el-table-column
      type="index"
      width="68">
    </el-table-column>
    <el-table-column
      prop="warehouseName"
      label="所属仓库"
      width="160">
    </el-table-column>
    <el-table-column
      prop="areaCode"
      label="库区编号"
      width="150">
    </el-table-column>
    <el-table-column
      prop="areaName"
      label="库区名称"
      width="160">
    </el-table-column>
    <el-table-column
      prop="code"
      label="库位编号"
      width="160">
    </el-table-column>
    <el-table-column
      prop="name"
      label="库位名称"
      width="160">
    </el-table-column>
      <el-table-column
      prop="常温"
      label="温度类型"
      width="120">
      <template slot-scope="scope">
        {{}}
      </template>
    </el-table-column>
      <el-table-column
      prop="zip"
      label="承重类型"
      width="160">
    </el-table-column>
      <el-table-column
      prop="zip"
      label="用途属性"
      width="160">
    </el-table-column>
      <el-table-column
      prop="zip"
      label="停用状态"
      width="160">
    </el-table-column>
      <el-table-column
      prop="maxVolume"
      label="承载上限"
      width="160">
    </el-table-column>
      <el-table-column
      prop="updateTime"
      label="更新时间"
      width="160">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="180">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
        <el-button type="text" size="small">停用</el-button>
        <el-button type="text" size="small">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</el-card>
  </div>
</template>

<script>
/* eslint-disable */
import {chaXunKuWeiApi} from '@/api/kuWeiGuanLi'
export default {
  name: '',
  components: {},
  data() {
    return {
       hireType: [ {id: 0,value: '正式'},{id: 1,value: '非正式'}],
       temperatureType:{cw:'常温'},
       page:{
        areaName:'',
        name:'',
        current:1,
        size:10
       },
       list:[]
    }
  },
  computed: {},
  watch: {},
  created() {
  
  },
  mounted() {
     this.chaXunKuWeiApi()
  },
  methods: {
   async chaXunKuWeiApi(){
    const res =await chaXunKuWeiApi(this.page)
    console.log(res);
    this.list=res.data.data.records
   },
   getLabel()
  }
}
</script>
<style scoped lang='scss'>
::v-deep .box-card1 .el-card__body{
  height: 127px;
  // display: flex;
}
.el-form{
  display: flex;
}
.el-card{
  border-radius:15px;
}
::v-deep .el-input__inner:focus{

  border:1px solid #ffb200;
  border-radius:6px;
  outline: none;
}
::v-deep .el-input__inner{
  background-color: #f8f5f5;
   border:1px solid #fff;
}
.kuang1{
  margin-left:10px;
  margin-right:30px;
}
.kuang2{
  margin-right:30px;
}
::v-deep .el-select .el-input.is-focus .el-input__inner{
  border-color: #ffb200;
}
.btn1{
  background-color: #ffb200;
  border: unset;
  margin-left: 57px;
    margin-right: 13px;
}
.btn1:hover{
  background-color: #ff8e00;
  color: #332929;
}
.btn2{
   background-color: #f8f5f5;
  border: unset;
}
.btn2:hover{
   background-color: #ffb200;
   color: #332929;
}
.lbtn1{
background-color:#00be76;
}
.lbtn1:hover{
  background-color: #007a4c;
}
.rbtn1{
background-color:#f8f5f5;
}
.rbtn1:hover{
   background-color: #ffb200;
}
::v-deep .cd1 .el-card__body{
  padding:unset;
}
::v-deep .el-table th.is-leaf{
  text-align: center;
  font-size:13px;
  font-weight: normal;
  color:#7c7b7b;
  padding:10px 0;
  background-color: #f9f6ee;
}
::v-deep .el-table--border th, .el-table--group{
  border-color: #f5efee!important;
}
.el-button--text{
  color: #ffb200;
  font-size:13px;
}
::v-deep .el-table td, .el-table th{
  padding:6px 0;
}
</style>
