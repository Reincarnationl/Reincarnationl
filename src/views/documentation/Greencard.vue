<template>
<div id="app">
    <el-row :gutter="40">
        <div class="Box ">
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
      </el-row>
    <el-row :gutter="40" class="panel-group">
       <div class="Box">
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
      </el-row>
</div>
</template>

<script>
import CountTo from 'vue-count-to'
import {giveBootTime} from "@/api/equipmentInfo";
export default {
  data() {
    return {
      time:''
    }
  },
  components: {
    CountTo
  },
   created(){
    this.giveBootTime()
  },
		methods: {
      async giveBootTime(){
        const response = await giveBootTime()
        const useTime = response.data.useTime
        this.time=useTime
      }
		},
}
</script>

<style lang="scss" scoped>
.panel-group{
  // margin-top:70px;
  margin-top:30px;
}
.el-row{
 margin-bottom: 30px;
}
.Box{
height: 180px;
border-radius: 20px;
background-color: rgba(255, 255, 255, 100);
// text-align: center;
border: 1px solid rgba(11, 185, 118, 100);
}
.Box-icon-wrapper{
color: rgba(11, 185, 118, 100);
float: left;
font-size: 70px;
// padding: 16px;
border-radius: 6px;
// margin: 47px 0 0 75px;
padding-left:15%;
padding-top: 47px;
}
.Box-textBig{
color: rgba(16, 16, 16, 100);
font-size: 36px;
padding-top: 64px;
// padding-left:-17px ;
text-align: center;
// text-align: left;
font-family: SourceHanSansSC-regular;
}
.Box-textSmall{
padding-top: 5px;
color: rgba(16, 16, 16, 100);
text-align: center;
font-family: SourceHanSansSC-regular;
}
.Box{
  cursor:pointer;
  margin-right: 18px;
}
.put-a-seal-go{
font-size: 14px;
}
.true-time{
font-size: 16px;
}
</style>
