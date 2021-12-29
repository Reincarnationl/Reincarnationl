/**
 * 这里感觉不应该使用require函数加载图片
 *
 * */
const tableData1 = [{
  number: '1',
  date: '2020-10-10 11:11',
  offset: '123'
}, {
  number: '2',
  date: '2020-10-10 11:11',
  offset: '123123'
}, {
  number: '3',
  date: '2020-10-10 11:11',
  offset: '123123'
}, {
  number: '4',
  date: '2020-10-10 11:11',
  offset: '123123'
}]

const tableData = [{
  equipmentModel: 'XLL-856',
  equipmentName: '发电机01XLL',
  cursorEmissionInterval: '5s',
  equipmentMaintenanceTime: '2021-10-25 12:00'
}]
const yesterday =
  {
    newVisitis: {
      expectedData: [100, 120, 161, 134, 105, 160, 165, 161, 134, 105, 160, 165, 200],
      actualData: [120, 82, 91, 154, 162, 140, 145, 91, 154, 162, 140, 145, 300]
    }
  }
const today =
  {
    newVisitis: {
      expectedData: [120, 82, 91, 154, 162, 140, 145, 91, 154, 162, 140, 145, 100],
      actualData: [100, 120, 161, 134, 105, 160, 165, 161, 134, 105, 160, 165, 150]
    }
  }
const lastSevenDays =
  {
    newVisitis: {
      expectedData: [100, 120, 161, 134, 105, 160, 165, 91, 154, 162, 140, 145, 400],
      actualData: [120, 82, 91, 154, 162, 140, 145, 161, 134, 105, 160, 165, 200]
    }
  }

module.exports = [

  {
    url: '/vue-element-admin/guide/getGuideTable1Data',
    type: 'post',
    response: (config) => {
      return {
        code: 20000,
        data: {
          expectedData: tableData1
        }
      }
    }
  }, {
    url: '/vue-element-admin/guide/getGuideTableData',
    type: 'post',
    response: (config) => {
      return {
        code: 20000,
        data: {
          expectedData: tableData
        }
      }
    }
  }, {
    url: '/vue-element-admin/guide/getTodayData',
    type: 'post',
    response: (config) => {
      return {
        code: 20000,
        data: {
          expectedData: today
        }
      }
    }
  },
  {
    url: '/vue-element-admin/guide/getYesterdayData',
    type: 'post',
    response: (config) => {
      return {
        code: 20000,
        data: {
          expectedData: yesterday
        }
      }
    }
  },
  {
    url: '/vue-element-admin/guide/getLastSevenDaysData',
    type: 'post',
    response: (config) => {
      return {
        code: 20000,
        data: {
          expectedData: lastSevenDays
        }
      }
    }
  }


]
