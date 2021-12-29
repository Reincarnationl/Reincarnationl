<template>
  <el-row :gutter="6" class="panel-group">
    <el-col :span="6" class="card-panel-col">
      <div class="card-panel">
        <div class="card-panel-description">
          <div class="card-panel-text">
            数据标题<i class="el-icon-warning"></i>
          </div>
          <count-to :start-val="0" :end-val="trendData[0]" :duration="2600" class="blueicon" /><svg-icon icon-class="upward" class-name="upward-class"/>
        </div>
        <div class="card-panel-icon-wrapper icon-blue">
          <svg-icon id="blueicon" icon-class="upper_and_lower" class-name="card-panel-icon" />
        </div>
      </div>
    </el-col>
    <el-col :span="6" class="card-panel-col">
      <div class="card-panel">
        <div class="card-panel-description">
          <div class="card-panel-text">
            数据标题<i class="el-icon-warning"></i>
          </div>
          <count-to :start-val="0" :end-val="trendData[1]" :duration="3000" class="redicon" /><svg-icon icon-class="upward" class-name="upward-class"/>
        </div>
        <div class="card-panel-icon-wrapper icon-red">
          <svg-icon id="redicon" icon-class="upper_and_lower" class-name="card-panel-icon" />
        </div>
      </div>
    </el-col>
    <el-col :span="6" class="card-panel-col">
      <div class="card-panel">
        <div class="card-panel-description">
          <div class="card-panel-text">
            数据标题<i class="el-icon-warning"></i>
          </div>
          <count-to :start-val="0" :end-val="trendData[2]" :duration="3200" class="orangeicon" /><svg-icon icon-class="upward" class-name="upward-class"/>
        </div>
         <div class="card-panel-icon-wrapper icon-orange">
          <svg-icon id="orangeicon" icon-class="upper_and_lower" class-name="card-panel-icon" />
        </div>
      </div>
    </el-col>
    <el-col :span="6" class="card-panel-col">
      <div class="card-panel">
        <div class="card-panel-description">
          <div class="card-panel-text">
            数据标题<i class="el-icon-warning"></i>
          </div>
          <count-to :start-val="0" :end-val="trendData[3]" :duration="3600" class="greenicon" /><svg-icon icon-class="upward" class-name="upward-class"/>
        </div>
         <div class="card-panel-icon-wrapper icon-green">
          <svg-icon id="greenicon" icon-class="upper_and_lower" class-name="card-panel-icon" />
        </div>
      </div>
    </el-col>
    <el-col :span="6" class="card-panel-col">
      <div class="card-panel">
        <div class="card-panel-description">
          <div class="card-panel-text">
            数据标题<i class="el-icon-warning"></i>
          </div>
          <count-to :start-val="0" :end-val="trendData[4]" :duration="3600" class="purpleicon" /><svg-icon icon-class="upward" class-name="upward-class"/>
        </div>
        <div class="card-panel-icon-wrapper icon-purple">
          <svg-icon id="purpleicon" icon-class="upper_and_lower" class-name="card-panel-icon" />
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import CountTo from 'vue-count-to'
import {getTrendData} from "@/api/page";
export default {
  components: {
    CountTo
  },
  data(){
    return {
      trendData:[]
    }
  },
  created(){
    this.getTrendData()
  },
  methods: {
     async getTrendData(){
       const response=await getTrendData();
       this.trendData=response.data.trendData
     }
  }
}
</script>

<style lang="scss" scoped>
.panel-group {
  margin-top: 12px;
  display: flex;
  .card-panel-col {
      margin-bottom: 25px;
  }

  .card-panel {
    cursor: pointer;
    font-size: 18px;
    position: relative;
    overflow: hidden;
    height: 90px;
    width: auto;
    background: #F2F2F7;

    #blueicon{
      fill: #007AFF;
    }
    .blueicon{
      color: #007AFF;
    }
    #redicon{
      fill: #FF3A30;
    }
    .redicon{
      color: #FF3A30;
    }
    #orangeicon{
      fill: #FF9502;
    }
    .orangeicon{
      color:#FF9502
    }
    #greenicon{
      fill:#34C758;
    }
    .greenicon{
      color:#34C758;
    }
    #purpleicon{
      fill:#5756D7;
    }
    .purpleicon{
      color:#5756D7;
    }

    .card-panel-icon-wrapper {
      float: right;
      width: 59px;
      height: 59px;
      margin: 14px 0 0 14px;
      padding: 16px;
      transition: all 0.38s ease-out;
      border-radius: 6px;
    }

    .card-panel-icon {
      float: right;
      font-size: 48px;
    }

    .card-panel-description {
      float: left;
      font-weight: bold;
      margin: 26px;
      margin-left: 10px;

      .card-panel-text {
        line-height: 18px;
        color: rgba(0, 0, 0, 0.45);
        font-size: 16px;
        margin-bottom: 12px;
      }

      .card-panel-num {
        font-size: 20px;
      }
    }
  }
}

@media (max-width:550px) {
  .card-panel-description {
    display: none;
  }

  .card-panel-icon-wrapper {
    float: none !important;
    width: 100%;
    height: 100%;
    margin: 0 !important;

    .svg-icon {
      display: block;
      margin: 14px auto !important;
      float: none !important;
    }
  }
}
</style>
