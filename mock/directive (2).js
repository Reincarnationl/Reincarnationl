
const tableData={
  rowFirst:{
    columnSecond:"2435350ml",
    columnFourth:"2021-10-16"
  },
  rowSecond:{
    columnSecond:"设备1",
    columnFourth:"2021-11-23"
  },
  rowThird: {
    columnSecond:"型号3",
    columnFourth:"待定"
  }
}
const seasons=["润滑剂充足","管道5601-w堵塞","待定数据"]
const expectedData=[110, 20, 100, 80, 70, 110, 130]
const barYesterday=[160, 220, 10, 180, 270, 10, 130]
const barLately=[210, 250, 100, 180, 270, 190, 130]

module.exports = [

  {
    url: '/vue-element-admin/directive/barData',
    type: 'post',
    response: (config)=> {
      return {
        code: 20000,
        data:{
          expectedData:expectedData
        }
      }
    }
  },
  {
    url: '/vue-element-admin/directive/season',
    type: 'post',
    response: (config)=> {
      return {
        code: 20000,
        data:{
          seasons:seasons
        }
      }
    }
  },

  {
    url: '/vue-element-admin/directive/tableData',
    type: 'post',
    response: (config)=> {
      return {
        code: 20000,
        data:{
          tableData:tableData
        }
      }
    }
  },
  {
    url:'/vue-element-admin/directive/barYesterday',
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
    url:'/vue-element-admin/directive/barLately',
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
