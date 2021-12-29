<template>
  <div>
    <el-radio-group v-model="radio" >
      <el-radio-button label="今天"  @click="fun1"></el-radio-button>
      <el-radio-button label="昨天" @click="fun2"></el-radio-button>
      <el-radio-button label="最近七天" @click="fun3"></el-radio-button>
    </el-radio-group>
    <el-date-picker
      v-model="value1"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
        <el-button type="success" @click="fun4">今天</el-button>
        <el-button type="success" @click="fun3">昨天</el-button>
        <el-button type="success" @click="fun2">近七天</el-button>
    <div>
      {{test}}
    </div>
  </div>
</template>

<script>
import resize from './mixins/resize'

export default {
  data() {
    return {
      radio: '今天',
      test:'1'
    }
  },
  methods:{
    async fun4(){
      this.test = '4';
    },
     async fun3(){
      this.test = '3';
    }, async fun2(){
      this.test = '2';
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
