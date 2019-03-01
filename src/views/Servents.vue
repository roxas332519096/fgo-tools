<template>
  <div>
    <el-table :data="Servents" border @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="50"></el-table-column>
      <el-table-column prop="id" label="id" width="50"></el-table-column>
      <el-table-column prop="photo" label="头像"></el-table-column>
      <el-table-column
        prop="class"
        label="职介"
        column-key="id"
        :filters="filters"
        :filter-method="filterHandler"
      ></el-table-column>
      <el-table-column prop="name" label="名称"></el-table-column>
      <!-- <el-table-column prop="LimitBreak.curlevel" label="灵基再临">
        <template slot-scope="scope">
          <el-slider v-model="scope.row.LimitBreak.curlevel" :max="4" show-stops show-tooltip></el-slider>
        </template>
      </el-table-column>-->
      <!-- <el-table-column prop="skills[0].curlevel" label="技能1" width="300">
        <template slot-scope="scope">
          <el-slider v-model="scope.row.skills[0].curlevel" show-input :min="1" :max="10"></el-slider>
        </template>
      </el-table-column>
      <el-table-column prop="skills[0].curlevel" label="技能2" width="300">
        <template slot-scope="scope">
          <el-slider v-model="scope.row.skills[0].curlevel" show-input :min="1" :max="10"></el-slider>
        </template>
      </el-table-column>
      <el-table-column prop="skills[0].curlevel" label="技能3" width="300">
        <template slot-scope="scope">
          <el-slider v-model="scope.row.skills[0].curlevel" show-input :min="1" :max="10"></el-slider>
        </template>
      </el-table-column>-->
      <el-table-column prop="prop" label="突破/技能1/技能2/技能3" width="300">
        <template slot-scope="scope">
          {{ scope.row.LimitBreak.curlevel}}/{{ scope.row.skills[0].curlevel }}/{{ scope.row.skills[0].curlevel }}/{{ scope.row.skills[0].curlevel }}
        </template>
      </el-table-column>
      <el-table-column type="expand" label="详情">
        <template slot-scope="props">
          <el-row :gutter="30">
            <el-col :span="4">
              <span>灵基再临</span>
              <el-slider v-model="props.row.LimitBreak.curlevel" :max="4" show-stops show-tooltip></el-slider>
            </el-col>
            <el-col :span="6">
              <span>技能1:</span>
              <el-slider v-model="props.row.skills[0].curlevel" show-input :min="1" :max="10"></el-slider>
            </el-col>
            <el-col :span="6">
              <span>技能2:</span>
              <el-slider v-model="props.row.skills[0].curlevel" show-input :min="1" :max="10"></el-slider>
            </el-col>
            <el-col :span="6">
              <span>技能3:</span>
              <el-slider v-model="props.row.skills[0].curlevel" show-input :min="1" :max="10"></el-slider>
            </el-col>
          </el-row>
        </template>
      </el-table-column>
      <el-table-column label="计算" width="200">
        <template slot-scope="scope">
          <el-button @click="computeItem(scope.row)">计算</el-button>
          <el-button @click="one310(scope.row)">310</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-row type="flex" :style="{'margin-top':'20px'}" justify="center">
      <el-button @click="computeAllItems">计算总材料</el-button>
      <el-button @click="All310">所选全部变310</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Servents",
  data() {
    return {
      multipleSelection: [],
      Servents: [
        {
          id: 1,
          name: "玛修",
          photo: "",
          class: "Ex",
          LimitBreak: {
            curlevel: 1,
            LimitBreakItemlist: [
              { name: "材料名称1", num: 5 },
              { name: "材料名称2", num: 10 },
              { name: "材料名称3", num: 5 },
              { name: "材料名称4", num: 10 }
            ]
          },
          skills: [
            {
              skillName: "技能1",
              curlevel: 1,
              skillItem: [
                {
                  name: "材料名称1",
                  num: 4
                },
                {
                  name: "材料名称2",
                  num: 4
                },
                {
                  name: "材料名称3",
                  num: 4
                },
                {
                  name: "材料名称4",
                  num: 4
                },
                {
                  name: "材料名称5",
                  num: 4
                },
                {
                  name: "材料名称6",
                  num: 4
                },
                {
                  name: "材料名称7",
                  num: 4
                },
                {
                  name: "材料名称8",
                  num: 4
                },
                {
                  name: "结晶",
                  num: 1
                }
              ]
            }
          ]
        }
      ],
      filters: [
        { text: "Saber", value: "Saber" },
        { text: "Archer", value: "Archer" },
        { text: "Lancer", value: "Lancer" },
        { text: "Rider", value: "Rider" },
        { text: "Caster", value: "Caster" },
        { text: "Assian", value: "Assian" },
        { text: "Ex", value: "Ex" }
      ]
    };
  },
  methods: {
    filterHandler(value, row, column) {
      const property = column["property"];
      return row[property] === value;
    },
    computeItem(row) {
      let curLimitBreakLevel = row.LimitBreak.curlevel;
      let curskill1 = row.skills[0].curlevel;
      let curskill2 = row.skills[0].curlevel;
      let curskill3 = row.skills[0].curlevel;
      let needLimitBreakItems = "";
      let needSkillItems1 = "";
      let needSkillItems2 = "";
      let needSkillItems3 = "";
      let needSkillItems = "";

      //计算开始
      //灵基再临计算
      let LimitBreakItem = row.LimitBreak.LimitBreakItemlist.slice(
        0,
        curLimitBreakLevel
      );
      needLimitBreakItems = LimitBreakItem.map(item => {
        return item.name + ":" + item.num + "\n";
      });
      //技能1计算
      let skillItem1 = row.skills[0].skillItem.slice(1, curskill1);
      let skillItem2 = row.skills[0].skillItem.slice(1, curskill2);
      let skillItem3 = row.skills[0].skillItem.slice(1, curskill3);
      needSkillItems1 = skillItem1.map(item => {
        return item.name + ":" + item.num;
      });
      needSkillItems2 = skillItem2.map(item => {
        return item.name + ":" + item.num;
      });
      needSkillItems3 = skillItem3.map(item => {
        return item.name + ":" + item.num;
      });
      needSkillItems = needSkillItems1 + needSkillItems2 + needSkillItems3;

      //打开信息提示框
      this.$alert(needSkillItems + needLimitBreakItems, "所需材料", {
        confirmButtonText: "确定"
      });
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    computeAllItems() {
      this.$alert(this.multipleSelection, "总所需材料", {
        confirmButtonText: "确定"
      });
    },
    one310(row) {
      row.LimitBreak.curlevel = 4;
      row.skills.forEach(skill => {
        skill.curlevel = 10;
      });
    },
    All310() {
      this.multipleSelection.forEach(item => {
        item.LimitBreak.curlevel = 4;
        item.skills.forEach(skill => {
          skill.curlevel = 10;
        });
      });
    }
  }
};
</script>

