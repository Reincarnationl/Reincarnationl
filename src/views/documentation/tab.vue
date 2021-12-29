<template>
<div id="app">
<el-row>
    <el-col :span="4"><div class="grid-content bg-purple-dark">设备编号</div></el-col>
    <el-col :span="8"><div class="grid-content bg-purple-white">{{valuenum}}</div></el-col>
    <el-col :span="4"><div class="grid-content bg-purple-dark">检测时间</div></el-col>
    <el-col :span="8"><div class="grid-content bg-purple-white">{{valuetime}}</div></el-col>
</el-row>
<el-row>
  <el-col :span="4"><div class="grid-content bg-purple-dark">设备名称</div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple-white">{{valuename}}</div></el-col>
    <el-col :span="4"><div class="grid-content bg-purple-dark">所属区域</div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple-white">{{valuearea}}</div></el-col>
</el-row>
</div>
</template>

<script>
import {giveBasicInfo} from "@/api/equipmentInfo";
export default {
  data() {
    return {
        valuenum:'',
        valuetime:'',
        valuename:'',
        valuearea:''
    }
  },
  created(){
    this.giveBasicInfo()
  },
		methods: {
      async giveBasicInfo(){
        const response = await giveBasicInfo()
        const BasicInfo = response.data.BasicInfo
        this.valuenum = BasicInfo.valuenum;
        this.valuetime = BasicInfo.valuetime;
        this.valuename = BasicInfo.valuename;
        this.valuearea = BasicInfo.valuearea
      }
		},
		//调用
		mounted() {
		}
	}
</script>

<style lang="scss" scoped>

.el-row {
    margin-bottom: 0px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: rgba(231, 231, 231, 100);
  }
  .bg-purple-white{
    border:1px solid rgba(231, 231, 231, 100) ;
    background: rgba(255, 255, 255, 100);   
  }
  .grid-content {
    height: 48px;
    font-size: 18px;
    border-radius: 4px;
    min-height: 48px;
    text-align: center;
    font-family: SourceHanSansSC-regular;
    padding-top:10px;
    line-height: 30px;
  }
</style>
