<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import resize from './mixins/resize'

export default {
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: 'auto'
    },
    height: {
      type: String,
      default: '450px'
    },
    autoResize: {
      type: Boolean,
      default: true
    },
    chartData: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      chart: null
    }
  },
  watch: {
    chartData: {
      deep: true,
      handler(val) {
        this.setOptions(val)
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart()
    })
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el, 'macarons')
      this.setOptions(this.chartData)
    },
    setOptions({ expectedData} = {}) {
      this.chart.setOption({
        title:{

        },
        xAxis: {
          type:'category',
          data: ['0','10', '20', '40', '60', '80', '100'],
          axisTick: {
            show: true
          }
        },
        grid: {
          left: 10,
          right: 10,
          bottom: 20,
          top: 30,
          containLabel: true,
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999'
            }
          }
        },
        yAxis: {
          type:'value',
          axisTick: {
            show: true
          }
        },
        legend: {
          data: ['数据源1'],
          right:20
        },
        series: [{
          name: '数据源1', itemStyle: {
            normal: {
              color: '#34C758',
            }
          },
          barWidth:'10%',
          smooth: true,
          type: 'bar',
          data: expectedData,
          animationDuration: 2800,
          animationEasing: 'cubicInOut'
        },
          {
            name: '数据源1', itemStyle: {
              normal: {
                color: '#34C758',
              }
            },
            smooth: true,
            type: 'line',
            data: expectedData,
            animationDuration: 2800,
            animationEasing: 'cubicInOut'
          },
        ]
      })
    }
  }
}
</script>
