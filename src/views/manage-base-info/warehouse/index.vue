<template>
  <div>
    <div class="top_bar">
      <div>
        <span>仓库编号</span>
        <el-input v-model="input" placeholder="请输入内容" />
      </div>
      <div>
        <span>仓库名称</span>
        <el-input v-model="input" placeholder="请输入内容" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      input: ''
    }
  },
  computed: {},
  watch: {},
  created() {

  },
  mounted() {

  },
  methods: {

  }
}
</script>
<style scoped lang="scss">
.top_bar{
  width: 1080px;
  height: 127px;
  background-color: pink;
  margin: 30px;
  ::v-deep.el-input__inner{
    width: 223px;
  }
}
</style>
