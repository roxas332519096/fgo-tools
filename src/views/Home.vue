<template>
  <div class="home">
    {{ msg }} Ver:{{ ver }}
  </div>
</template>

<script>

export default {
  name: 'home',
  data(){
    return{
      msg:'非洲Fgo计算工具',
      ver:'0.0.1'
    }
  }
}
</script>
