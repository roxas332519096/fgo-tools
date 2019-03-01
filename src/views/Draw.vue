<template>
  <div>
    <el-row type="flex" justify="center">
      <el-col :span="3">已抽 {{box.length}} 次</el-col>
      <el-col :span="3">已出SSR{{hasSSR}}</el-col>
      <el-col :span="3">已出SR{{hasSR}}</el-col>
    </el-row>
    <el-row type="flex" justify="center">
      <el-col :span="6">
        <el-button @click="drawOnce">召唤1次</el-button>
        <el-button @click="drawTen">召唤10次</el-button>
        <el-button @click="box=[]">清空</el-button>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center">
      <el-col :span="10">
        <el-row class="box">
          <el-col :span="2" v-for="(card,index) in box" :key="index">
            <div class="card" :class="card">{{card}}</div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Draw",
  data() {
    return {
      box: []
    };
  },
  methods: {
    drawOnce() {
      let once = Math.random() * 100;
      if (once <= 1) {
        this.box.push("ssr");
      } else if (once <= 5) {
        this.box.push("五星礼装");
      } else if (once <= 8) {
        this.box.push("sr");
      } else if (once <= 20) {
        this.box.push("四星礼装");
      } else if (once <= 60) {
        this.box.push("三星从者");
      } else {
        this.box.push("三星礼装");
      }
    },
    drawTen() {
      for (let i = 0; i < 9; i++) {
        this.drawOnce();
      }
      this.underDraw();
    },
    underDraw() {
        let draw = Math.random() * 20;
        console.log(draw)
        if (draw <= 1) {
        this.box.push("ssr");
      } else if (draw <= 5) {
        this.box.push("五星礼装");
      } else if (draw <= 8) {
        this.box.push("sr");
      }else{
          this.box.push('四星礼装')
      }
    }
  },
  computed: {
    hasSSR() {
      return this.box.filter(card => {
        return card === "ssr";
      }).length;
    },
    hasSR() {
      return this.box.filter(card => {
        return card === "sr";
      }).length;
    }
  }
};
</script>

<style lang="scss" scope>
span,
div {
  box-sizing: border-box;
}

.box {
  margin-top: 20px;
  min-height: 200px;
}
.card {
  margin: 10px;
  width: 50px;
  height: 100px;
  background: gray;
  &.ssr {
    background: yellow;
  }
  &.sr {
    background: green;
  }
}
</style>


