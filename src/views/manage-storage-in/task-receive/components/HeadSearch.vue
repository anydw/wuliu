<template>
  <div class="Headsearch">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item>
        <span>任务编号</span>
        <el-input v-model="formInline.user" placeholder="请输入" />
      </el-form-item>
      <el-form-item>
        <span>货主名称</span>
        <el-input v-model="formInline.user" placeholder="请输入" />
      </el-form-item>
      <el-form-item>
        <div class="receiptStatus ">
          <span>收货状态</span>
          <el-select v-model="formInline.region" placeholder="请选择">
            <el-option label="区域一" value="shanghai" />
            <el-option label="区域二" value="beijing" />
          </el-select>
        </div>
      </el-form-item>
      <el-form-item class="btnClick">
        <el-button type="warning" round @click="onSubmit">搜索</el-button>
        <el-button round @click="onSubmit">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formInline: {
        user: '',
        region: ''
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    }
  }
}
</script>

<style  lang="scss">
.Headsearch {
  background-color: #fff;
  margin: 20px 30px;
  padding: 30px;
  border-radius: 15px;
  // border: 1px solid red;
  .el-form-item {
    margin-left: 30px;
    span {
      font-size: 12px;
      color: #887e7e;
    }
    .receiptStatus {
      // border: 1px solid green;
      display: flex;
      flex-direction: column;
    }
  }
  .btnClick {
    margin-top: 40px;
    float: right;
  }
}
</style>
