import { mock } from 'mockjs';
mock(RegExp('/api/orderList' + '.*'), 'get', () => {
  return mock({
    'data|5': [
      { 'code|+1': 0, time: '2021-1-1', progress: 0, status: '暂停', num: 111, name: 'test', phone: 15214777877 },
      { code: '897987', time: '2021-1-2', progress: 1, status: '', num: 0, phone: 15214777877, cz: 'slot的取值' },
      { code: '0012312', time: '2021-1-3', progress: 4, status: '关闭', num: 111, phone: 15214777877 }
    ]
  });
});
