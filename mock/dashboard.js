/**
 * 这里感觉不应该使用require函数加载图片
 *
 * */
const windmills =
  [
    {
      no: 1,
      src: "https://i.52112.com/icon/jpg/256/20191022/64262/2810965.jpg",
      state: "警报"
    },
    {
      no: 2,
      src: "https://i.52112.com/icon/jpg/256/20191015/62825/2755747.jpg",
      state: '良好'
    }, {
    no: 3,
    src: "https://i.52112.com/icon/jpg/256/20191015/62825/2755747.jpg",
    state: '良好'
  }, {
    no: 4,
    src: "https://i.52112.com/icon/jpg/256/20191015/62825/2755747.jpg",
    state: '良好'
  }, {
    no: 5,
    src: "https://i.52112.com/icon/jpg/256/20191022/64262/2810965.jpg",
    state: "警报"
  }, {
    no: 6,
    src: "https://i.52112.com/icon/jpg/256/20191022/64262/2810965.jpg",
    state: "警报"
  }, {
    no: 7,
    src: "https://i.52112.com/icon/jpg/256/20191022/64262/2810965.jpg",
    state: "警报"
  }, {
    no: 8,
    src: "https://i.52112.com/icon/jpg/256/20191022/64262/2810965.jpg",
    state: "警报"
  }
  ]

module.exports = [

  {
    url: '/vue-element-admin/dashboard/getData',
    type: 'get',
    response: (config) => {
      return {
        code: 20000,
        data: {
          expectedData: windmills
        }
      }
    }
  },


]
