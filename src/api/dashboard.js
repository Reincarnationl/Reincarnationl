import request from '@/utils/request'

export function getDashboardData() {
  return request({
    url: '/vue-element-admin/dashboard/getData',
    method: 'get',
  })
}
