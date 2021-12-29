<template>
  <div class="app-container app-main">

    <div v-for="item in Data" :no="item.no" :state="item.state" class="windmill-box" @click="routeLink">
      <img :src="item.src"/><br/>
      <p class="text">编号: {{ item.no }}</p>
      <p class="text">状态: {{ item.state }}</p>
    </div>
  </div>
</template>

<script>
import { getDashboardData } from '@/api/dashboard'
import router from '@/router'
import path from 'path'

export default {
  name: 'Index',
  components: {},

  created() {
    this.getDashboardData()
  },

  methods: {
    async getDashboardData() {
      const response = await getDashboardData()
      // const Data = response.data.windmills.windmills
      //
      // this.Data=Data
      this.Data = response.data.expectedData
      console.log('this.Data', this.Data)
      console.log('this.Data.src', this.Data.src)
      // this.str=response.data.expectedData
      // this.List=Date
    },
    routeLink(){
      this.$router.push({path:'/documentation/设备1206'})
    }
  },

  // ready: function(){
  //   console.log('0000');
  //
  // },

  data() {
    return {
      Data: {
        // imgsrc: require('@/assets/401_images/401.gif'), //401_images
      },

      // List:{}
      // imgsrc: require('@/assets/windmill-abnormal.png'), //401_images

      // imgsrc: require('@/icons/svg/12.png'), //401_images
      imgsrc: ''

    }
  },
  computed: {}
}
</script>

<style lang="scss" scoped>
.app-main {
  margin: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}

.windmill-box {
  padding: 30px;
  margin: 30px;
  height: 400px;
  border-style: solid;
}

.text {
  text-align: center;
}
</style>
