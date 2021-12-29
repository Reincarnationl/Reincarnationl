<template>
  <div class="app-container">
    <panel-group class="panelgroup"/>
    <el-row class="table-detail">
        <el-col :span="18">
            <div class="echarts-scatter">
                <div>
                    <el-row>
                        <label class="title">数据标题</label>
                        <el-date-picker v-model="dateValue" type="date" placeholder="选择日期" class="datePicker"></el-date-picker>
                        <el-button @click="getScatterLately">最近7日</el-button>
                        <el-button @click="getScatterToday">今日</el-button>
                        <el-button type="success" @click="getScatterYesterday">昨日</el-button>
                    </el-row>
                </div>
            <line-chart :chart-data="ScatterChartData" class="lineChart"/>
            </div>
             <div class="chart-container">
                 <div>
                    <el-row>
                        <label class="title">数据标题</label>
                      <el-date-picker v-model="dateValue" type="date" placeholder="选择日期" class="datePicker"></el-date-picker>
                      <el-button @click="getBarLately">最近7日</el-button>
                      <el-button @click="getBarToday">今日</el-button>
                        <el-button type="success" @click="getBarYesterday">昨日</el-button>
                    </el-row>
                </div>
                <bar-chart :chart-data="BarChartData" class="lineChart"/>
            </div>
        </el-col>
        <el-col :span="6">
            <div class="monitor-detail">
                <el-card class="monitor">
                    <div slot="header" class="monitor-header">
                        <span>设备磨损监测声音</span>
                    </div>
                    <div class="component-item">
                        <div class="sound">
                            <svg-icon id="sound" icon-class="sound" class-name="sound-icon" @click="dialogVisible=true" />
                        </div>
                        <el-dialog :visible.sync="dialogVisible" width="40%" class="soundDialog" title="监测声音回放">
                          <el-row>
                            <el-col :span="2">
                              <svg-icon id="play" icon-class="play"></svg-icon>
                            </el-col>
                            <el-col :span="20">
                              <el-progress :percentage="100" class="playProccess" color="#0BB976" :format="format"></el-progress>
                            </el-col>
                          </el-row>
                          <el-row class="soundButton">
                            <el-col :span="6">
                              <el-button type="success" style="background-color:#0BB976">回放</el-button>
                            </el-col>
                            <el-col :span="7">
                              <el-button type="success" style="background-color:#0BB976">回退10S</el-button>
                            </el-col>
                            <el-col :span="8">
                              <el-button type="success" style="background-color:#0BB976">快进10S</el-button>
                            </el-col>
                          </el-row>
                        </el-dialog>
                        <div class="sound-record">
                            <div class="sound-text">
                                检测声音回放
                            </div>
                            <div class="record-time">
                                记录时间:2021年11月8号
                            </div>
                        </div>
                    </div>
                </el-card>

                <el-card class="detail">
                    <div slot="header" class="detail-header">
                        <svg-icon icon-class="upward" class-name="upward-class"/>
                        <span>详细参数</span><span class="more">查看更多</span>
                    </div>
                    <div class="component-item">
                        <div class="table">
                            <span class="id">序号</span><span class="name">名称</span><span class="sell">销售额</span>
                        </div>
                        <div class="table" v-for="item in parameter">
                            <span class="number">{{item.id}}</span><span class="name">{{item.name}}</span><span class="sell">{{item.salesVolume}}</span>
                        </div>
                    </div>
                </el-card>
            </div>
        </el-col>
    </el-row>
  </div>
</template>

<script>
import PanelGroup from './components/PanelGroup.vue'
import LineChart from './components/LineChart.vue'
import BarChart from'./components/BarChart.vue'
import {getScatterData,getBarData,getParameter,getScatterYesterday,getScatterLately,getBarYesterday,getBarLately} from "@/api/page"


export default {
  name: 'PagePermission',
  components: {
    PanelGroup,
    LineChart,
    BarChart,
   },

  data(){
      return {
          dateValue:'',
          dialogVisible:false,
          format:"0.56s",
          ScatterChartData:{},
          BarChartData:{},
          parameter:[]
      }
  },
  created() {
    this.getScatterChartData()
    this.getBarChartData()
    this.getParameter()
  },
  methods:{
      async getScatterChartData(){
        const response=await getScatterData()
        this.scatterChartData(response.data.scatterData.expectedData,response.data.scatterData.actualData)
      },
      async getBarChartData(){
        const response=await getBarData()
        this.barChartData(response.data.barChartData.expectedData,response.data.barChartData.actualData)
      },
      async getParameter(){
         const response=await getParameter()
         this.parameter=response.data.parameter
      },
      scatterChartData(expectedData,actualData){
        const ScatterChartData={
          newVisitis:{
            expectedData:expectedData,
            actualData:actualData
          }
        }
        this.ScatterChartData=ScatterChartData.newVisitis
      },
      barChartData(expectedData,actualData){
        const barChartData={
          newVisitis:{
            expectedData:expectedData,
            actualData:actualData
          }
        }
        this.BarChartData=barChartData.newVisitis
      },
      async getScatterYesterday(){
        const response=await getScatterYesterday()
        this.scatterChartData(response.data.scatterYesterday.expectedData,response.data.scatterYesterday.actualData)
      },
      getScatterToday(){
        this.getScatterChartData()
      },
      async getScatterLately(){
        const response=await getScatterLately()
        this.scatterChartData(response.data.scatterLately.expectedData,response.data.scatterLately.actualData)
      },
     async getBarYesterday(){
        const response=await getBarYesterday();
        this.barChartData(response.data.barYesterday.expectedData,response.data.barYesterday.actualData)
     },
      async getBarLately(){
          const response=await getBarLately()
          this.barChartData(response.data.barLately.expectedData,response.data.barLately.actualData)
      },
      getBarToday(){
        this.getBarChartData()
      },
  }
}
</script>
<style lang="scss" scoped>
    .app-container{
        position: relative;
    }
    .panelgroup{
        width: 100%;

    }
    .clearfix{
        margin: 2px;
    }
    .table-detail{
        width:100%;
    }
    .monitor{
        height: 240px;
        width:auto;
        margin-bottom:25px;
    }
    .detail{
        height: 580px;
        width:auto;
    }
    .monitor-detail{
        position:relative;
        width:auto;
        margin-bottom:12px;
        margin-left:18px;
    }
    .echarts-scatter{
        position: relative;
        width: 100%;
        margin-bottom:18px;
    }
    .lineChart{
      margin-top: 10px;
    }
    .sound-record{
        float:right;
        margin-top:32px;
    }
    .more{
        float:right;
        width:  56px;
        height: 22px;
        color: rgba(0, 187, 122, 100);
        font-size: 14px;
        text-align: right;
    }
    .name{
        text-align:left;
        margin-left: 70px;
    }
    .sell{
        float:right;
    }
    .number{
        text-align:center;
        display:inline-block;
        border-radius:18px;
        width:20px;
        height:20px;
        margin-left: 5px;
        background-color:#FF3A30;
    }

    .record-time{
        font-size:14px;
        color:#9C9999;
    }

    .card-panel-description{
        float: right;
    }
    #sound{
        float: left;
        margin:10px;
        width:80px;
        height: 80px;
        fill: #0BB976;
    }
    .el-button{
        float:right;
    }
    .title{
        margin-left: 40px;
    }
    .datePicker{
        float: right;
    }
    .table{
        text-align:left;
        margin-bottom:10px;
    }
    .soundDialog{

    }
    #play{
      width: 25px;
      height: 25px;
    }
    .playProccess{
      margin-top: 5px;
    }
    .soundButton{
      margin-top: 30px;
      margin-bottom: 10px;
    }
</style>
