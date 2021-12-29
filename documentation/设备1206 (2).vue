<template>
  <div class="dashboard-editor-container">
      <line-chart  />
      <basic-content class="rowone"/>
    <el-row :gutter="32" class="rowtwo">
      <el-col :xs="24" :sm="24" :lg="18" class="Use">
        <div class="echarts">
          <div class="tag">设备使用情况</div>
          <div>
            <el-row>
              <el-date-picker v-model="value1"  type="date" placeholder="选择日期" class="datePicker"></el-date-picker>
              <el-button type="success" plain @click="getUsageToday">今天</el-button>
              <el-button type="success" plain @click="getUsageYesterday">昨天</el-button>
              <el-button type="success" plain @click="getUsageFewdays">近七天</el-button>
            </el-row>
          </div>
          <my-chart :chart-data="BarChartData"/>
        </div>
      </el-col>
       <el-col :xs="24" :sm="24" :lg="6">
        <div>
          <green-card />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import LineChart from './tab'
import MyChart from './Myecharts'
import GreenCard from './Greencard'
import BasicContent from './Basic_Content'
import Basic_Content from './Basic_Content.vue'
import {giveUsageToday,giveUsageYesterday,giveUsageFewdays} from "@/api/equipmentInfo";
export default {
  name: 'DashboardAdmin',
  components: {
      LineChart,
      MyChart,
      GreenCard,
      BasicContent
  },

  data() {
    return {
      // radio: '今天',
      BarChartData:{},
      value1:''
    }
  },
  created(){
    this.getUsageToday();
    // this.getUsageYesterday();
    // this.getUsageFewdays();
  },
  methods: {
    barData(expectedData){
      const BarChartDatat={
        newVisitis:{
          expectedData:expectedData
        }
      }
      this.BarChartData=BarChartDatat.newVisitis
    },
    async getUsageToday(){
      const response=await giveUsageToday();
      this.barData(response.data.today)
    },
    async getUsageYesterday(){
      const response=await giveUsageYesterday();
      this.test=response.data.yesterday
      this.barData(response.data.yesterday)
    },
    async getUsageFewdays(){
      const response=await giveUsageFewdays();
      this.barData(response.data.fewdays)
    }
  }
}
</script>

<style lang="scss" scoped>
.echarts{
  //background-color: #ffffff;
}
.tag{
font-size: 16px;
font-family: SourceHanSansSC-bold;
padding-top: 20px;
margin-left: 30px;
}

.rowone{
  margin-top: 50px;
}
.rowtwo{
  margin-top: 60px;
}
.dashboard-editor-container {
  padding: 32px;
  //background-color: rgb(240, 242, 245);
  position: relative;

  .github-corner {
    position: absolute;
    top: 0px;
    border: 0;
    right: 0;
  }

  .chart-wrapper {
    //background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
  .el-button{
    float:right;
    margin-left: 0;
  }
  .datePicker{
    float: right;
  }
}

@media (max-width:1024px) {
  .chart-wrapper {
    padding: 8px;
  }
}
</style>
