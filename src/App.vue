<template>
  <div id="app">
    <el-container>
        <index-menu />
      <el-container>
        <el-main>
            <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import indexMenu from '@/components/indexMenu.vue'

export default {
  name:'app',
  components:{
    indexMenu,
  },
}
</script>


<style lang="scss">
</style>
