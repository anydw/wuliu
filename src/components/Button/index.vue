<template>
  <el-row type="flex" justify="center" style="margin-top:20px">
    <el-button style="background-color: #fbf4f0" size="medium" @click="dialog">取 消</el-button>
    <el-button style="background-color: #ff5e20;color: #fff;border:transparent" size="medium" type="primary" @click="getCencalTask">确 定</el-button>
  </el-row>
</template>

<script>
export default {
  name: 'Button',
  methods: {
    // 取消
    dialog() {
      this.$emit('dialog', false)
    },
    // 确认
    getCencalTask() {
      this.$emit('getCencalTask')
    }
  }
}
</script>

<style>

</style>
