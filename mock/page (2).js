
const scatterData = {
  expectedData:[10, 52, 200, 334, 390, 330, 220],
  actualData:[120, 200, 150, 80, 70, 110, 130]
}
const scatterYesterday={
  expectedData:[263,356,164,259,30],
  actualData:[23,56,234,27,586],
}
const scatterLately={
  expectedData:[263,256,194,359,330],
  actualData:[263,526,134,217,386],
}
const barChartData={
  expectedData:[10, 52, 23],
  actualData:[90, 10, 90]
}
const barYesterday={
  expectedData:[10, 52,78],
  actualData:[90, 10,45]
}
const barLately={
  expectedData:[100, 52, 23],
  actualData:[40, 10, 50]
}

const parameter=[
  {
    id:1,
    name:"设备名称",
    salesVolume:"5000"
  },
  {
    id:2,
    name:"设备名称",
    salesVolume:"5000"
  },
  {
    id:3,
    name:"设备名称",
    salesVolume:"5000"
  }
]
const trendData=[234,4534,2345,5453,454]

module.exports = [
  {
    url: '/vue-element-admin/permission/scatterData',
    type: 'post',
    response: (config)=> {
      return {
        code: 20000,
        data:{
          scatterData:scatterData
        }
      }
    }
  },
  {
    url: '/vue-element-admin/permission/barData',
    type: 'post',
    response: (config)=> {
      return {
        code: 20000,
        data:{
          barChartData:barChartData
        }
      }
    }
  },
  {
    url:'/vue-element-admin/permission/parameter',
    type:'post',
    response:(config => {
      return {
        code:20000,
        data:{
          parameter:parameter
        }
      }
    })
  },
  {
    url:'/vue-element-admin/permission/trendData',
    type:'post',
    response:(config=>{
      return {
        code:20000,
        data:{
          trendData:trendData
        }
      }
    })
  },
  {
    url:'/vue-element-admin/permission/scatterYesterday',
    type:'post',
    response:(config=>{
      return {
        code:20000,
        data:{
          scatterYesterday:scatterYesterday
        }
      }
    })
  },
  {
    url:'/vue-element-admin/permission/scatterLately',
    type:'post',
    response:(config=>{
      return {
        code:20000,
        data:{
          scatterLately:scatterLately
        }
      }
    })
  },
  {
    url:'/vue-element-admin/permission/barYesterday',
    type:'post',
    response:(config=>{
      return {
        code:20000,
        data:{
          barYesterday:barYesterday
        }
      }
    })
  },


  {
    url:'/vue-element-admin/permission/barLately',
    type:'post',
    response:(config=>{
      return {
        code:20000,
        data:{
          barLately:barLately
        }
      }
    })
  }

]
