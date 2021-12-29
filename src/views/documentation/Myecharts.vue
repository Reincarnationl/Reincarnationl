<template>
    <div :style="{height:height,width:width}"/>
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
      default: '100%'
    },
    height: {
      type: String,
      default: '350px'
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
      chart: null,
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
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el, 'macarons')
      this.setOptions(this.chartData)
    },
    setOptions({ expectedData} = {}) {
      this.chart.setOption({
        grid: {
          left: 10,
          right: 10,
          bottom: 20,
          top: 30,
          containLabel: true
        },
       		tooltip: {
						trigger: 'axis',
            axisPointer:{type:'cross'}, //触碰到点时会有显示
            crossStype:{
              color:'#fff'
            }
					},
           xAxis: [//Y坐标系
            {
              type: 'category',
              // name:'当前时间',
              axisTick: {
                alignWithLabel: true
              },
              data: [
                '00:00',
                '02:00',
                '04:00',
                '06:00',
                '08:00',
                '10:00',
                '12:00',
                '14:00',
                '16:00',
                '18:00',
                '20:00',
                '22:00',
                '24:00'
              ]
            }
          ],
				 yAxis: [  //Y坐标系
            {
              type: 'value',
              // name: '设备使用情况',
              min: 0,
              max: 1.0,
              position: 'left',
              axisLabel: {
                formatter: '{value} '
              }
            }
          ],
					 series: [  //数据
          {
            // name: '设备使用情况',
            type: 'bar',
            yAxisIndex: 0,
            data: expectedData,
            barWidth:10,
            color: 'rgba(174, 174, 178, 100)',
            barBorderRadius:50
          },
          {
            // name:'数据源1',
            type: 'line',
            yAxisIndex: 0,
            data: expectedData,
            color: ' rgba(52, 199, 88, 100)'
          },
        ]
				}
)
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
