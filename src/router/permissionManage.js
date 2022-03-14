/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const orderManage = {
  path: '/permissionManage',
  component: Layout,
  redirect: 'noRedirect',
  name: 'permissionManage',
  meta: {
    title: '权限管理',
    icon: 'el-iconfont el-charge',
    noCache: false
  },
  // alwaysShow: true, // 一直显示根路由
  children: [
    {
      path: 'userManage',
      component: () => import('@/views/permissionManage/userManage'),
      name: 'userManage',
      meta: { title: '用户管理', noCache: true }
    },
    {
      path: 'roleManage',
      component: () => import('@/views/permissionManage/roleManage'),
      name: 'roleManage',
      meta: { title: '角色管理', noCache: false }
    },
    {
      path: 'menuManage',
      component: () => import('@/views/permissionManage/menuManage'),
      name: 'menuManage',
      meta: { title: '菜单管理', noCache: false }
    }

  ]
}

export default orderManage
