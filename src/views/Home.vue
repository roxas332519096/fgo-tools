<template>
  <div class="home">
    <div>{{ msg }} Ver:{{ ver }} 作者:{{author}}</div>
    <div v-for="ver in update" :key="ver.ver">
      <div class="ver">
        日期:{{ver.data}},版本:{{ver.ver}},更新日志{{ver.msg}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      msg: "非洲Fgo计算工具",
      ver: "0.0.1",
      author:'不吃虫子的鸡',
      update: [
        {
          data: "2019-3-1",
          ver: "0.0.1",
          msg: "添加英灵材料计算"
        },
        {
          data: "2019-3-1",
          ver: "0.0.2",
          msg: "添加模拟抽卡"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
  .ver{
    margin: 20px;
  }
</style>

