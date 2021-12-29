import request from '@/utils/request'

export function giveBasicInfo() {
  return request({
    url: '/vue-element-admin/equipmentInfo/giveBasicInfo',
    method: 'post',
  })
}
export function giveUsageToday() {
  return request({
    url: '/vue-element-admin/equipmentInfo/giveUsageToday',
    method: 'post',
  })
}
export function giveUsageYesterday() {
  return request({
    url: '/vue-element-admin/equipmentInfo/giveUsageYesterday',
    method: 'post',
  })
}
export function giveUsageFewdays() {
  return request({
    url: '/vue-element-admin/equipmentInfo/giveUsageFewdays',
    method: 'post',
  })
}
export function giveBootTime() {
  return request({
    url: '/vue-element-admin/equipmentInfo/giveBootTime',
    method: 'post',
  })
}
