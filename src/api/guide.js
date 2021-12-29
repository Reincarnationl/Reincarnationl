import request from '@/utils/request'

export function getGuideTable1Data() {
  return request({
    url: '/vue-element-admin/guide/getGuideTable1Data',
    method: 'post'
  })
}

export function getGuideTableData() {
  return request({
    url: '/vue-element-admin/guide/getGuideTableData',
    method: 'post'
  })
}
export function getYesterdayData() {
  return request({
    url: '/vue-element-admin/guide/getYesterdayData',
    method: 'post'
  })
}
export function getTodayData() {
  return request({
    url: '/vue-element-admin/guide/getTodayData',
    method: 'post'
  })
}
export function getLastSevenDaysData() {
  return request({
    url: '/vue-element-admin/guide/getLastSevenDaysData',
    method: 'post'
  })
}
