<template>
  <div class="app-container">
    <aside>
      基础参数信息
    </aside>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="equipmentModel" label="设备型号" align="center">
      </el-table-column>
      <el-table-column prop="equipmentName" label="设备名称" align="center">
      </el-table-column>
      <el-table-column prop="cursorEmissionInterval" label="光标发射间隔" align="center">
      </el-table-column>
      <el-table-column prop="equipmentMaintenanceTime" label="设备维护时间" align="center">
      </el-table-column>
    </el-table>
    <div style="margin-top: 30px;">
      <aside>
        设备位移情况
      </aside>
      <span>
        <el-button type="primary" plain @click="getTodayData">今天</el-button>
            <el-button type="primary" plain @click="getYesterdayData">昨天</el-button>
            <el-button type="primary" plain @click="getLastSevenDaysData">近七天</el-button>
      </span>
      <span style="margin-left: 20px;">
        <el-date-picker v-model="value1" type="date" placeholder="选择日期">
        </el-date-picker>
      </span>
    </div>
    <!--    <div id="myChart" class="chart" style="float: left;"></div>-->

    <line-chart :chart-data="lineChartData" class="chart" style="float: left;"></line-chart>

    <div style="float: left;" class="box">
      <div>
        <span style="float: left;">警报时间</span>
        <span style="float: right;"><a>查询更多</a></span>
      </div>
      <br/>
      <div style="margin-top: 20px;">
        <!-- <el-table :data="tableData1" style="width: 100%">
          <el-table-column prop="number" label="序号" width="80">
          </el-table-column>
          <el-table-column prop="date" label="时间" width="150">
          </el-table-column>
          <el-table-column prop="offset" label="偏移量" width="100">
          </el-table-column>
        </el-table> -->
        <el-table :data="tableData1" ref="dragTable" v-loading="listLoading" row-key="id" border fit
                  highlight-current-row style="width: 100%">
          <el-table-column width="65px" align="center" label="序号" prop="number">

          </el-table-column>

          <el-table-column width="200px" align="center" label="时间" prop="date">

          </el-table-column>

          <el-table-column width="143px" label="偏移量" prop="offset">

          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
import {getGuideTable1Data, getGuideTableData, getLastSevenDaysData, getTodayData, getYesterdayData} from '@/api/guide'
import LineChart from "@/views/guide/components/LineChart";

// 引入基本模板
let echarts = require('echarts/lib/echarts')
// 引入柱状图组件
require('echarts/lib/chart/bar')
// 引入提示框和title组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')


export default {
  components: {LineChart},
  created() {
    this.getGuideData();
    this.getGuideTableData();
    this.getTodayData();
  },
  name: '设备信息3',
  data() {
    return {
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [{
          text: '今天',
          onClick(picker) {
            picker.$emit('pick', new Date());
          }
        }, {
          text: '昨天',
          onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24);
            picker.$emit('pick', date);
          }
        }, {
          text: '一周前',
          onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', date);
          }
        }]
      },
      value1: '',
      value2: '',
      tableData: [],
      radio: '昨日',
      tableData1: [],
      lineChartData: {},
    }
  },
  mounted() {
  },
  methods: {
    async getGuideData() {
      const response = await getGuideTable1Data()

      this.tableData1 = response.data.expectedData

    },
    async getGuideTableData() {
      const response = await getGuideTableData()

      this.tableData = response.data.expectedData

    },
    async getYesterdayData() {
      const response = await getYesterdayData()

      this.lineChartData = response.data.expectedData.newVisitis
    },
    async getTodayData() {
      const response = await getTodayData()

      this.lineChartData = response.data.expectedData.newVisitis
    },
    async getLastSevenDaysData() {
      const response = await getLastSevenDaysData()

      this.lineChartData = response.data.expectedData.newVisitis

    },
  }
}
</script>

<style lang="scss" scoped>
.box {
  padding: 20px;
  //padding-bottom: 0;
  margin-left: 15%;
  //width: 500px;
  //height: 500px;
  width: 25%;
  height: 30%;
}

.chart {
  width: 50%;
  height: 800px;
  //width: 60%;
  //height: 30%;
}
</style>
