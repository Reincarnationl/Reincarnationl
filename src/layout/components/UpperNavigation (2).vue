<template>
  <div class="upperNavigation">
    <el-row class="bar">
      <el-col  class="title">
        <svg-icon icon-class="windmill" id="photo"></svg-icon><span class="text">风场智能报警检测系统</span>
        <span class="nav-text">
          <span><svg-icon icon-class="notice"></svg-icon>通知<span class="line">|</span></span>
          <span><svg-icon icon-class="upload"></svg-icon>上传<span class="line">|</span></span>
          <span><svg-icon icon-class="photo" id="user"></svg-icon>用户名</span>
        </span>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "UpperNavigation",

}
</script>

<style scoped>
.upperNavigation{
  padding: 14px;
  background-color: #0BB976;
  margin-bottom: 3px;
  width: 100%;
  position:fixed;
  z-index: 999;
  top: 0;
}
.title{
  margin-left:20px;
}
#photo{
  height: 20px;
  width:20px;
}
.text{
  margin-left:20px;
  color: rgba(255, 255, 255, 100);
  font-size: 18px;
  text-align: left;
  font-family: SourceHanSansSC-bold;
}
.more{
  font-size: 18px;
  margin-left: 80px;
}
.nav-text{
  font-size: 15px;
  color: rgba(255, 255, 255, 100);
  margin-right: 20px;
  float: right;
}
.line{
  color: #0e0300;
  margin-left: 15px;
  margin-right: 15px;
}
#user{
  height: 18px;
  width:18px;
  margin-right: 3px;
}


</style>
