<template>
<div class="all Container" >
  <!-- 基本信息 -->
  <div class="basicinfo" style=" " >
  <div class="key keynum">设备编号</div>
  <div class="key keyname">设备名称</div>
  <div class="key keytime">检测时间</div>
  <div class="key keyarea">所属区域</div>
  <div class="value valuenum">{{valuenum}}</div>
  <div class="value valuename">{{valuename}}</div>
  <div class="value valuetime">{{valuetime}}</div>
  <div class="value valuearea">{{valuearea}}</div>
</div>
  <!-- 设备信息 -->
  <div class="equipmentInfo Container">
      <svg-icon icon-class="chart" class-name="parameter-icon icon"/>
      <div class="parameter info" @click="getParameter()">设备参数</div>
      <div class="parameter-tab tab">数据标签</div>
      <img src="../../assets/warn-icon/infofill.png" class="parameter-tab-icon tab-icon">
      <div class="border01 border"></div>
      <svg-icon icon-class="chart" class-name="Ltesting-icon icon"/>
      <div class="Ltesting info" @click="getLtesing()">润滑剂检测</div>
      <div class="Ltesting-tab tab">数据标签</div>
      <img src="../../assets/warn-icon/infofill.png" class="Ltesting-tab-icon tab-icon">
      <!-- <svg-icon icon-class="eye-open" class-name="Ltesting-tab-icon tab-icon"/> -->
      <div class="border02 border"></div>
      <svg-icon icon-class="chart" class-name="abrastion-icon icon"/>
      <div class="abrastion info" @click="getLtesing()">设备磨损</div>
      <!-- <svg-icon icon-class="eye-open" class-name="abrastion-warn "/> -->
      <img src="../../assets/warn-icon/warning-full.png" class="abrastion-warn">
      <div class="abrastion-tab tab">数据标签</div>
      <img src="../../assets/warn-icon/infofill.png" class="abrastion-tab-icon tab-icon">
      <!-- <svg-icon icon-class="eye-open" class-name="abrastion-tab-icon tab-icon"/> -->
      <div class="border03 border"></div>
      <svg-icon icon-class="chart" class-name="shift-icon icon"/>
      <div class="shift info" @click="getshift()">设备位移</div>
      <div class="shift-tab tab">数据标签</div>
      <img src="../../assets/warn-icon/infofill.png" class="shift-tab-icon tab-icon">
  </div>
<!-- 使用情况 -->
  <div class="useInfo Container" style="width: 1145px ; height: 400px;">
        <div style="width: 96px ; height: 24px;" class="title">设备使用情况</div>
        <button style="width: 60px ; height: 30px;" class="day">今日</button>
        <button style="width: 60px ; height: 30px;" class="yesterday">昨日</button>
        <button style="width: 60px ; height: 30px;" class="days">最近七日</button>
        <button class="date">2017-08-08</button>
        <div style="width: 1102px ;height:1px;" class="link"></div>
        <div id="main" :style="{height:height,width:width}" class="tabularStatistics"></div>
  </div>
<!-- 开机时间 -->
  <div class="start-time Box Container">
        <div class="start-time-icon-wrapper Box-icon-wrapper">
          <!-- <svg-icon icon-class="chart" class-name="start-time-icon Box-icon" /> -->
          <i class="el-icon-time" class-name="start-time-icon Box-icon"/>
        </div>
          <div class="start-time-text Box-textBig">
            {{time}}
          </div>
         <div class="true-time Box-textSmall">
            开机时长
         </div>
  </div>
  <!-- 打印 -->
  <div class="put-a-seal Box Container">
        <div class="put-a-seal-icon-wrapper Box-icon-wrapper">
          <!-- <svg-icon icon-class="chart" class-name="put-a-seal-icon Box-icon" /> -->
          <i class="el-icon-document" class-name="put-a-seal-icon Box-icon"/>
        </div>
          <div class="put-a-seal-text Box-textBig">
            报告打印
          </div>
         <div class="put-a-seal-go Box-textSmall">
           生成报告
         </div>
  </div>

</div>
</template>
<script>
	import echarts from 'echarts'
  
	export default {
		name: '设备使用情况',
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
				charts: 'axios',
        time:'186.2h',
        valuenum:'2101XXX',
        valuetime:'2021-10-05  12:00',
        valuename:'发电机01XLL',
        valuearea:'XX-A区'
			}
		},
		methods: {
			drawLine(main) {
				this.charts = echarts.init(document.getElementById(main))
				this.charts.setOption({
					tooltip: {
						trigger: 'axis',
            axisPointer:{type:'cross'}, //触碰到点时会有显示
            crossStype:{
              color:'#fff'
            }
					},
					legend: {
					
					},
					// toolbox: {   //工具包
					//  feature: {
          // dataView: { show: true, readOnly: false },
          // magicType: { show: true, type: ['line', 'bar'] },
          // restore: { show: true },
          // saveAsImage: { show: true }
          //   }
					// },
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
            data: [0.9, 0.6, 0.7 ,0.65, 0.6, 0.55, 0.35,0.03,0.03, 0.03, 0.03, 0.03,0.03],
            barWidth:10,
            color: 'rgba(174, 174, 178, 100)',
            barBorderRadius:50
          },
          {
            // name:'数据源1',
            type: 'line',
            yAxisIndex: 0,
            data: [0.9, 0.6, 0.7 ,0.65, 0.6, 0.55, 0.35,0.03,0.03, 0.03, 0.03, 0.03,0.03],
            color: ' rgba(52, 199, 88, 100)'
          },
        ]
				})
			}
		},
		//调用
		mounted() {
			this.$nextTick(function() {
				this.drawLine('main')
			})
		}
	}
</script>
<style scoped>
	* {
		margin: 0;
		padding: 0;
		list-style: none;
	}
  .Container{
    display: flex;
  }
  .all{
    background-color:#FCFCFC 100%;overflow: auto;
  }
  .useInfo{
    position:absolute;
    left: 62px;
    top: 397px;
    width: 1145px;
   height: 400px;
  }
  .link{
    position: absolute;
    left: 32px;
    top: 65px;
    border: 1px solid rgba(238, 238, 238, 100);
  }
  /* .tabularStatistics{
    position: relative;
    left: ;
  } */
  .title{
    position: absolute;
    left: 76px;
    top:24px;
    color: rgba(16, 16, 16, 100);
    font-size: 16px;
    text-align: center;
    font-family: SourceHanSansSC-bold;
  }
  .tabularStatistics{
     position: absolute;
      left: 13px;
      top:104px;
  }
  .day{
      position: absolute;
      left: 860px;
      top:13px;
      line-height: 20px;
      padding: 4px;
      background-color: rgba(255, 255, 255, 100);
      text-align: center;
      border: 1px solid rgba(225, 225, 225, 100);
      font-size: 12px;
      text-align: center;
      font-family: SourceHanSansSC-regular;
      cursor: pointer;
  }
  .yesterday{
     position: absolute;
      left: 800px;
      top:13px;
      padding: 4px;
      color: rgba(255, 255, 255, 100);
      line-height: 20px;
      border-radius: 3px 0px 0px 3px;
      background-color: rgba(11, 185, 118, 100);
      text-align: center;
      border: 1px solid rgba(255, 0, 0, 0);
      font-size: 12px;
      text-align: center;
      font-family: SourceHanSansSC-regular;
      cursor: pointer;
  }
  .date{
      position: absolute;
      left: 990px;
      top:13px;
      line-height: 20px;
      padding: 4px;
      border-radius: 4px 4px 4px 4px;
      background-color: rgba(255, 255, 255, 100);
      text-align: center;
      border: 1px solid rgba(217, 217, 217, 100);
      font-size: 12px;
      text-align: center;
      font-family: SourceHanSansSC-regular;
      cursor: pointer;
  }
  .days{
      position: absolute;
      left:919px;
      top:13px;
      padding: 4px;
      line-height: 20px;
      background-color: rgba(255, 255, 255, 100);
      text-align: center;
      border: 1px solid rgba(225, 225, 225, 100);
      font-size: 12px;
      text-align: center;
      font-family: SourceHanSansSC-regular;
      cursor: pointer;
  }



  .Box{
width: 364px;
height: 180px;
border-radius: 20px;
background-color: rgba(255, 255, 255, 100);
text-align: center;
border: 1px solid rgba(11, 185, 118, 100);
}
.start-time{
 position: absolute;
 left: 1231px;
 top: 398px;
}
.put-a-seal{
 position: absolute;
 left: 1231px;
 top: 614px;
}
.Box-icon-wrapper{
color: rgba(11, 185, 118, 100);; 
float: left;
font-size: 48px;
padding: 16px;
width: 71px;
height: 71px;
border-radius: 6px;
margin: 47px 0 0 75px;
}
.start-time-text{
  width: 120px;
  height: 52px;
  cursor: pointer;
}
.put-a-seal-text{
  width: 144px;
  height: 52px;
  cursor: pointer;
}
.Box-textBig{
position: absolute;
left: 163px;
top: 64px;
color: rgba(16, 16, 16, 100);
font-size: 36px;
text-align: left;
font-family: SourceHanSansSC-regular;
}
.Box-textSmall{
position: absolute;
left: 165px;
top: 47px;
color: rgba(16, 16, 16, 100);
text-align: left;
font-family: SourceHanSansSC-regular;
}
.put-a-seal-go{
width: 56px;
height: 20px;
font-size: 14px;
}
.true-time{
width: 86px;
height: 24px;
font-size: 16px;
}

.equipmentInfo{
position: absolute;
left: 63px;
top: 185px;
width: 1533px;
height: 164px;
line-height: 20px;
border-radius: 4px;
background-color: rgba(255, 255, 255, 100);
 /* background-color:aquamarine; */
color: rgba(16, 16, 16, 100);
font-size: 14px;
 /* text-align: center; */
font-family: Roboto;
}
.icon{
width: 80px;
height: 80px;
color: #fff;
padding: 16px;
border-radius: 20px;
cursor: pointer;
}
.parameter-icon{
  position: absolute;
  left:66px;
  top: 48px;
background-color: rgba(0, 122, 255, 100);
}
.Ltesting-icon{
position: absolute;
left:452px ;
top: 47px;
background-color: rgba(11, 185, 118, 100);
}
.abrastion-icon{
position: absolute;
left:836px ;
top: 47px;
background-color: rgba(255, 149, 2, 100);
}
.shift-icon{
position: absolute;
left:1234px ;
top: 48px;
background-color: rgba(11, 173, 185, 100);
}
.info{
  color: rgba(16, 16, 16, 100);
  font-size: 28px;
  text-align: left;
  font-family: SourceHanSansSC-regular;
  cursor: pointer;
}
.parameter{
position: absolute;
left:158px ;
top: 47px;
width: 112px;
height: 41px;
}
.Ltesting
{
position: absolute;
left:544px ;
top: 47px;
width: 140px;
height: 41px;
}
.abrastion{
position: absolute;
left:928px ;
top: 46px;
width: 112px;
height: 41px;
color: red;
}
.shift{
position: absolute;
left:1326px ;
top: 47px;
width: 112px;
height: 41px;
}
.tab{
width: 72px;
height: 27px;
color: rgba(174, 174, 178, 100);
font-size: 18px;
text-align: left;
font-family: SourceHanSansSC-regular;
}
.parameter-tab{
position: absolute;
left: 162px;
top: 92px;
font-family: SourceHanSansSC-regular;
}
.Ltesting-tab{
position: absolute;
left:548px ;
top: 91px;
}
.abrastion-tab{
position: absolute;
left:932px ;
top: 91px;
}
.shift-tab{
position: absolute;
left:1330px ;
top: 92px;
}
.Ltesting-tab-icon{
position: absolute;
left:641px ;
top: 100px;
}
.parameter-tab-icon{
position: absolute;
left: 255px;
top: 101px;
}
.abrastion-tab-icon{
position: absolute;
left:1025px ;
top: 100px;
}
.abrastion-warn{
position: absolute;
left:1054px ;
top: 43px;
width: 32px;
height: 32px;
/* background-color: rgba(248, 0, 0, 100); */
}
.shift-tab-icon{
position: absolute;
left:1423px ;
top: 101px;
}
.tab-icon{
color: #fff;
width: 14px;
height: 14px;
cursor: pointer;
/* background-color: rgba(174, 174, 178, 100); */
}
.border{
width: 1px;
height: 104px;
border: 1px solid rgba(187, 187, 187, 100);
}
.border01{
position: absolute;
left:382px ;
top: 34px;
}
.border02{
position: absolute;
left:764px ;
top: 34px;
}
.border03{
position: absolute;
left:1145px ;
top: 34px;
}
.key{
width: 236px;
height: 48px;
line-height: 20px;
background-color: rgba(231, 231, 231, 100);
text-align: center;
padding-top: 14px;
color: rgba(16, 16, 16, 100);
font-size: 18px;
font-family: SourceHanSansSC-regular;
    /* background: #fff; */
    /* // color: blueviolet; */
    box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
    border-color: rgba(0, 0, 0, .05);
}
.keynum{
  position: absolute;
  left: 67px;
  top: 39px;
}
.keyname{
  position: absolute;
  left: 67px;
  top: 87px;
}
.keytime{
  position: absolute;
  left: 839px;
  top: 39px;
}
.keyarea{
  position: absolute;
  left:839px ;
  top: 87px;
}
.value{
width: 536px;
height: 48px;
line-height: 20px;
background-color: rgba(255, 255, 255, 100);
/* // background-color: blue; */
text-align: center;
padding-top: 14px;
color: rgba(16, 16, 16, 100);
font-size: 18px;
font-family: SourceHanSansSC-regular;
    background: #fff;
    /* // color: blueviolet; */
    box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
    border-color: rgba(0, 0, 0, .05);
}
.valuenum{
  position: absolute;
  left: 303px;
  top: 39px;
  border:1px;
  border-top-color:rgba(231, 231, 231, 100);
}
.valuename{
  position: absolute;
  left: 303px;
  top: 87px;
}
.valuetime{
  position: absolute;
  left: 1059px;
  top: 39px;
}
.valuearea{
  position: absolute;
  left:1059px ;
  top: 87px;
}
</style>
