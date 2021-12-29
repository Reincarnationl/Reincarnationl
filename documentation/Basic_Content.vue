<template>
  <div id="app">
    <el-row class="panel-group" style="height:164px">
      <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
        <router-link to="/documentation/设备1206">
          <div class="card-panel">
            <div class="card-panel-icon-wrapper">
              <svg-icon icon-class="chart" class-name="card-panel-icon ONe"/>
            </div>
            <div class="parameter_textOne textOne">
              设备参数
            </div>
<!--            <div class="parameter_textTwo textTwo">
              数据标签
              <img src="infofill.png" class="tab-icon">
            </div> -->
          </div>
        </router-link>

      </el-col>
      <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
        <router-link to="/permission/directive">

        <div class="card-panel">
          <div class="card-panel-icon-wrapper ">
              <svg-icon icon-class="chart" class-name="card-panel-icon TWo"/>
          </div>
          <div class="testing_textOne textOne">
            润滑剂检测
          </div>
<!--          <div class="testing_textTwo textTwo">
            数据标签
            <img src="infofill.png" class="tab-icon">

          </div> -->
        </div>
        </router-link>

      </el-col>
      <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
        <router-link to="/permission/page">

        <div class="card-panel">
          <div class="card-panel-icon-wrapper ">
              <svg-icon icon-class="chart" class-name="card-panel-icon THree"/>
          </div>
          <div class="abrasion_textOne textOne">
            设备磨损
            <!-- <img src="warning-full.png" class="abrastion-warn"> -->
          </div>
 <!--         <div class="abrasion_textTwo textTwo">
            数据标签
            <img src="infofill.png" class="tab-icon">
          </div> -->
        </div>
        </router-link>

      </el-col>
      <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
        <router-link to="/guide/index">

        <div class="card-panel">
          <div class="card-panel-icon-wrapper">
              <svg-icon icon-class="chart" class-name="card-panel-icon FOur"/>
          </div>
          <div class="shift_textOne textOne">
            设备位移
          </div>
<!--          <div class="shift_textTwo textTwo">
            数据标签
            <img src="infofill.png" class="tab-icon">
          </div> -->
        </div>
        </router-link>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import echarts from 'echarts'

export default {

  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.panel-group {
  .card-panel {
    border-right: 1px solid rgba(187, 187, 187, 100);
    height: 164px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    color: #666;
    background: #fff;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
    // border-color: rgba(0, 0, 0, .05);

    &:hover {
      .ONe {
        color: #fff;
        background: rgba(0, 122, 255, 100);
      }

      .TWo {
        color: #fff;
        background: rgba(11, 185, 118, 100);
      }

      .THree {
        color: #fff;
        background: rgba(255, 149, 2, 100);
      }

      .FOur {
        color: #fff;
        background: rgba(11, 173, 185, 100);
      }
    }

    .ONe {
      color: rgba(0, 122, 255, 100);
    }

    .TWo {
      color: rgba(11, 185, 118, 100);
    }

    .THree {
      color: rgba(255, 149, 2, 100);
    }

    .FOur {
      color: rgba(11, 173, 185, 100)
    }

    .card-panel-icon-wrapper {
      padding-top: 48px;
      padding-left: 46px;
      // font-size: 60px;
      float: left;
      border-radius: 6px;
    }

    .textOne {
      text-align: center;
      font-size: 28px;
      // padding-top: 57px;
       padding-top: 67px;
      font-family: SourceHanSansSC-regular;
      text-shadow: 5px 5px 5px orangered;
    }

    // .textTwo {
    //   text-align: center;
    //   font-size: 18px;
    //   padding-top: 4px;
    // }

    .card-panel-icon {
      transition: all 0.38s ease-out;
      width: 80px;
      height: 80px;
      padding: 16px;
      border-radius: 20px;
      cursor: pointer;
    }

    .card-panel-description {
      float: right;
      font-weight: bold;
      margin: 26px;
      margin-left: 0px;
    }

    .abrastion-warn {
      width: 32px;
      height: 32px;
    }

    .tab-icon {
      color: #fff;
      width: 14px;
      height: 14px;
    }

    .abrasion_textOne {
      color: red;
    }
  }
}

@media (max-width: 550px) {
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
