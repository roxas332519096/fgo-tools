<template>
  <div>
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical"
      :collapse="isCollapse"
      background-color="#ddd"
      router
    >
      <el-menu-item index="#"  @click="isCollapse = !isCollapse">
        <i class="el-icon-arrow-right" v-show="isCollapse"></i>
        <i class="el-icon-arrow-left" v-show="!isCollapse"></i>
        <span>收起</span>
      </el-menu-item>
      <el-menu-item index="/" router="true">
        <i class="el-icon-warning"></i>
        <span slot="title">首页</span>
      </el-menu-item>      
      <el-menu-item index="servents" router="true">
        <i class="el-icon-search"></i>
        <span slot="title">英灵材料计算</span>
      </el-menu-item>
      <el-menu-item index="5" disabled>
        <i class="el-icon-setting"></i>
        <span slot="title">宝具伤害计算</span>
      </el-menu-item>
      <el-menu-item index="6" disabled>
        <i class="el-icon-setting"></i>
        <span slot="title">卡牌伤害计算</span>
      </el-menu-item>
      <el-menu-item index="7" disabled>
        <i class="el-icon-setting"></i>
        <span slot="title">Np计算</span>
      </el-menu-item>
      <el-menu-item index="8" disabled>
        <i class="el-icon-setting"></i>
        <span slot="title">模拟战斗</span>
      </el-menu-item>               
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "indexMenu",
  data() {
    return {
      isCollapse: false
    };
  },
  methods:{
    BackToHomePage(){
      this.$router.push('/')
    },
    goToServnetsPage(){
      console.log(1)
      this.$router.push('servents')
    }
  }
};
</script>

<style lang="scss" scoped>
.el-menu-vertical{
    height: 100vh;
}
.el-menu-vertical:not(.el-menu--collapse) {
    width: 200px;
  }
</style>


