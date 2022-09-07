<template>
  <div :class="{'has-logo':showLogo}">
    <Logo v-if="showLogo" :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="false"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
        mode="vertical"
      >
        <sidebar-item v-for="route in routes" :key="route.path" :item="route" :base-path="route.path" />
      </el-menu>
    </el-scrollbar>
    <div class="sidebar-tools">
      <img class="icon" src="http://www-wms-java.itheima.net/img/avatar@2x.4f4a758f.png" alt="">
      <div class="title"> admin </div>
      <div class="divSplit" />
      <img class="quit" src="@/assets/common/logout.png" alt="">
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'
import variables from '@/styles/variables.scss'
import Logo from './Logo'

export default {
  components: { SidebarItem, Logo },
  computed: {
    ...mapGetters([
      'sidebar'
    ]),
    routes() {
      return this.$router.options.routes
    },
    activeMenu() {
      const route = this.$route
      const { meta, path } = route
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
    showLogo() {
      return this.$store.state.settings.sidebarLogo
    },
    variables() {
      return variables
    },
    isCollapse() {
      return !this.sidebar.opened
    }
  }
}
</script>

<style lang="scss" scoped>
  .el-scrollbar{
    margin-top: 100px;
    // max-height: calc(100vh - 100px - 62px);
  //   // 设置内容的滚动条
  // overflow: hidden;
  // overflow-y: auto;
   height: 574px;
  }
  .sidebar-tools{
    position: fixed;
    bottom: 0;
    height: 62px;
    width: 226px;
    background-color: #fff;
    border-top: 1px solid #f5efee;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .icon{
    width: 32px;
    height: 32px;
    margin-left: 41px;
    margin-right: 14px;
  }
  .title{
    height: 20px;
    font-size: 14px;
    font-family: PingFangSC,PingFangSC-Regular;
    font-weight: 400;
    text-align: left;
    color: #332929;
    line-height: 20px;
  }
  .divSplit{
        height: 17px;
    border-left: 1px solid #d9d0cf;
    border-right: 0;
    margin-left: 17px;
    margin-right: 17px;
  }
  .quit{
        width: 21px;
    height: 21px;
    cursor: pointer;
    color: #b5abab;
  }
</style>
