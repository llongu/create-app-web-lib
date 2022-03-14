/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const orderManage = {
  path: '/orderManage',
  component: Layout,
  redirect: 'noRedirect',
  name: 'orderManage',
  meta: {
    title: '订单列表',
    icon: 'el-iconfont el-charge',
    noCache: false
  },
  // alwaysShow: true, // 一直显示根路由
  children: [
    {
      path: 'list',
      component: () => import('@/views/orderManage/index'),
      name: 'List',
      meta: { title: '订单列表', noCache: true }
    },
    {
      path: 'addOrder',
      component: () => import('@/views/orderManage/addOrder'),
      name: 'AddOrder',
      hidden: true,
      meta: { title: '新增', noCache: false }
    }
  ]
}

export default orderManage
