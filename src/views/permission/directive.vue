<template>
  <div class="app-container">
    <div class="parameter">
      <div class="table">
        <div class="basicMessage">
          <span class="scribe"></span>基础参数信息
        </div>
        <el-row v-for="item in tables" class="row">
          <el-col :span="5" class="column">
            <div class="text">
              {{item.columnFirst}}
            </div>
          </el-col>
          <el-col :span="7" class="content">
            <div class="text">
                {{item.columnSecond}}
            </div>
          </el-col>
          <el-col :span="5" class="column">
            <div class="text">
              {{item.columnThird}}
            </div>
          </el-col>
          <el-col :span="7" class="content">
            <div class="text">
             {{item.columnFourth}}
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="displacement">
      <div class="basicMessage">
        <span class="scribe"></span>设备位移情况
      </div>
      <el-row class="chartMessage">
        <el-col :span="18" class="chart">
          <div>
            <el-row>
              <label class="title">设备使用情况</label>
              <el-date-picker v-model="dateValue" type="date" placeholder="选择日期" class="datePicker"></el-date-picker>
              <el-button @click="getBarLately">最近7日</el-button>
              <el-button @click="getBarToday">今日</el-button>
              <el-button type="success" @click="getBarYesterday">昨日</el-button>
            </el-row>
          </div>
          <line-chart :chart-data="BarChartData" class="echarts"/>
        </el-col>
        <el-col :span="6">
          <div class="forecast">
            <div class="forecastContent">
              <div>报警原因预测</div>
              <div class="forceText" v-for="season in seasons">
                <div class="season">
                  <span class="icon"></span><span class="seasonContent">{{season}}</span>
                </div>
              </div>
            </div>
          </div>
        </el-col>

      </el-row>
    </div>
  </div>
</template>

<script>

import LineChart from "./components/LineChartMessage";
import {getBarData ,getTableData,getSeasonData,getBarYesterday,getBarLately} from "@/api/directive";




export default {
  name: 'DirectivePermission',
  components:{
    LineChart
  },
  data() {
    return {
      BarChartData:{},
      seasons:[],
      tables:[],
      dateValue:''
    }
  },
 created() {
   this.getTableData()
   this.getSeason()
   this.getBarData()
 },
  methods: {
    async getTableData(){
      const response=await getTableData()
      const tableData=response.data.tableData
      const tables=[
        {
          columnFirst:"润滑剂充足",
          columnSecond:tableData.rowFirst.columnSecond,
          columnThird:"注入时间",
          columnFourth:tableData.rowFirst.columnFourth
        },
        {
          columnFirst:"设备名称",
          columnSecond:tableData.rowSecond.columnSecond,
          columnThird:"预估耗尽时间",
          columnFourth:tableData.rowSecond.columnFourth
        },
        {
          columnFirst:"设备型号",
          columnSecond:tableData.rowThird.columnSecond,
          columnThird:"XXXXXXXXXX",
          columnFourth:tableData.rowThird.columnFourth
        }
      ]
      this.tables=tables
    },
    async getSeason(){
      const response=await getSeasonData()
      this.seasons=response.data.seasons
    },
    async getBarData(){
      const response=await getBarData()
      this.barData(response.data.expectedData)
    },
    barData(expectedData){
      const BarChartDatat={
        newVisitis:{
          expectedData:expectedData
        }
      }
      this.BarChartData=BarChartDatat.newVisitis
    },
    async getBarYesterday(){
      const response=await getBarYesterday();
      this.barData(response.data.barYesterday)
    },
    async getBarLately(){
      const response=await getBarLately()
      this.barData(response.data.barLately)
    },
    getBarToday(){
      this.getBarData()
    },
  }
}
</script>

<style lang="scss" scoped>
  .parameter{
    margin-top: 20px;
  }
  .displacement{
    margin-top: 40px;
  }
  .row{
    position: relative;
    width:auto;
    text-align: center;
  }
  .basicMessage{
    margin-left: 5px;
    margin-bottom:10px;
  }
  .column{
    height: 48px;
    background-color: #E7E7E7;
  }
  .content{
    position: relative;
    height: 48px;
    border: 1px solid rgba(187, 187, 187, 100);
  }
  .text{
    text-align: center;
    padding: 15px;
  }
  .scribe{
    text-align: center;
    border: 4px solid rgba(9, 126, 81, 100);
    margin-right: 10px;
  }
  .el-button{
    float:right;
  }
  .datePicker{
    float:right;
  }
  .chartMessage{
    margin-top: 50px;
    height: 400px;
  }
  .title{
    color: rgba(16, 16, 16, 100);
    font-size: 16px;
    text-align: left;
    font-family: SourceHanSansSC-bold;
  }
  .forecast{
    margin-left:20px;
    height:450px ;
    border: 1px solid rgba(9, 126, 81, 100);
  }
  .echarts{
    margin-top: 10px;
  }
  .forecastContent{
    margin:30px;
  }
  .icon{
    color: #0BB976;
    display: inline-block;
    width: 15px;
    height: 15px;
    border-radius: 18px;
    background-color: #0BB976;
  }
  .season{
    margin-top: 15px;
  }
  .seasonContent{
    margin-left: 10px;
  }

</style>

