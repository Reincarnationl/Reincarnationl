import request from '@/utils/request'

export function getBarData() {
  return request({
    url: '/vue-element-admin/directive/barData',
    method: 'post',
  })
}

export function getSeasonData(){
  return request({
    url:'/vue-element-admin/directive/season',
    method:'post',
  })
}

export function getTableData(){
  return request({
    url:'/vue-element-admin/directive/tableData',
    method:'post',
  })
}

export function getBarYesterday(){
  return request({
    url:'/vue-element-admin/directive/barYesterday',
    method:'post'
  })
}

export function getBarLately(){
  return request({
    url:'/vue-element-admin/directive/barLately',
    method:'post'
  })
}
