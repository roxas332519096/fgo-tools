<template>
  <div>
    <el-row type="flex" justify="center">
      <el-col :xs="12" :xl="3">
        <label>已有呼符</label>
        <el-input v-model="charm" placeholder="已有呼符"></el-input>
      </el-col>
      <el-col :xs="12" :xl="3">
        <label>已有石头</label>
        <el-input v-model="stone" placeholder="已有圣晶石"></el-input>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center">
      <el-col :xs="8" :xl="3">
        <span>剩余石头{{stone}}</span>
      </el-col>
      <el-col :xs="8" :xl="3">
        <span>已充{{money}}元</span>
      </el-col>
      <el-col :xs="8" :xl="3">
        <el-button @click="pay">充一单</el-button>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center">
      <el-col :xs="12" :xl="3">已抽 {{box.length}} 次</el-col>
      <el-col :xs="12" :xl="3">已出SSR{{hasSSR}}</el-col>
      <el-col :xs="12" :xl="3">当期SSR{{hasSSRUP}}</el-col>
      <el-col :xs="12" :xl="3">歪SSR{{hasSSRNOUP}}</el-col>
      <el-col :xs="12" :xl="3">已出SR{{hasSR}}</el-col>
    </el-row>
    <el-row type="flex" justify="center">
      <el-col :xs="8" :xl="3">
        <el-button @click="charmOrStone" :disabled="stone < 3 && charm < 1">召唤1次</el-button>
      </el-col>
      <el-col :xs="8" :xl="3">
        <el-button @click="drawTen" :disabled="stone < 30">召唤10次</el-button>
      </el-col>
      <el-col :xs="8" :xl="3">
        <el-button @click="clear">清空</el-button>
      </el-col>
    </el-row>
    <div class="box">
      <div v-for="(card,index) in previewbox" class="card" :class="card" :key="index">{{card}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Draw",
  data() {
    return {
      box: [],
      charm: 0,
      stone: 0,
      money: 0
    };
  },
  methods: {
    pay() {
      this.stone += 167;
      this.money += 518;
    },
    clear() {
      this.stone = 0;
      this.money = 0;
      this.charm = 0;
      this.box = [];
    },
    charmOrStone() {
      if (this.charm >= 1) {
        this.charm--;
        this.drawOnce();
      } else if (this.stone >= 3) {
        this.stone -= 3;
        this.drawOnce();
      }
    },
    drawOnce() {
      let once = Math.random() * 100;
      if (once <= 1) {
        this.drawSSR();
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
      if (this.stone < 30) return;
      this.stone -= 30;
      for (let i = 0; i < 10; i++) {
        this.drawOnce();
      }
      // this.underDraw();
    },
    // underDraw() {
    //   let draw = Math.random() * 100;
    //   if (draw <= 1) {
    //     this.drawSSR();
    //   } else if (draw <= 5) {
    //     this.box.push("五星礼装");
    //   } else if (draw <= 8) {
    //     this.box.push("sr");
    //   } else {
    //     this.box.push("四星礼装");
    //   }
    // },
    drawSSR() {
      let rang = Math.random() * 100;
      if (rang < 60) {
        this.box.push("ssr up");
      } else {
        this.box.push("ssr noup");
      }
    }
  },
  computed: {
    hasSSR() {
      return this.hasSSRUP + this.hasSSRNOUP;
    },
    hasSSRUP() {
      return this.box.filter(card => {
        return card === "ssr up";
      }).length;
    },
    hasSSRNOUP() {
      return this.box.filter(card => {
        return card === "ssr noup";
      }).length;
    },
    hasSR() {
      return this.box.filter(card => {
        return card === "sr";
      }).length;
    },
    previewbox(){
      return this.box.reverse();
    }
  }
};
</script>

<style lang="scss" scope>

.box {
  margin-top: 20px;
  display: flex;
  width: 80vw;
  max-height: 50vh;
  justify-content: center;
  flex-wrap: wrap;
}
.card {
  margin: 10px;
  width: 80px;
  height: 100px;
  background: gray;
  &.ssr {
    background: yellow;
  }
  &.sr {
    background: green;
  }
  &.up{
      background: red;
  }
}
</style>


