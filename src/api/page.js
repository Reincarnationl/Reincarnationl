import request from '@/utils/request'

export function getScatterData() {
  return request({
    url: '/vue-element-admin/permission/scatterData',
    method: 'post',
  })
}

export function getBarData(){
  return request({
    url:'/vue-element-admin/permission/barData',
    method:'post',
  })
}
export function getParameter(){
  return request({
    url:'/vue-element-admin/permission/parameter',
    method:'post'
  })
}
export function getTrendData(){
  return request({
    url:'/vue-element-admin/permission/trendData',
    method:'post'
  })
}
export function getScatterYesterday(){
  return request({
      url:'/vue-element-admin/permission/scatterYesterday',
      method:'post'
  })
}
export function getScatterLately(){
  return request({
    url:'/vue-element-admin/permission/scatterLately',
    method:'post'
  })
}
export function getBarYesterday(){
  return request({
    url:'/vue-element-admin/permission/barYesterday',
    method:'post'
  })
}

export function getBarLately(){
  return request({
    url:'/vue-element-admin/permission/barLately',
    method:'post'
  })
}
