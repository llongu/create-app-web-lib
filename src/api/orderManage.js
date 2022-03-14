import request from '@/utils/request'

export function addList (data) {
  return request({
    url: '/api/form/orderList',
    method: 'post',
    data
  });
}
export function getList (params) {
  return request({
    url: '/api/orderList',
    method: 'get',
    params
  });
}

