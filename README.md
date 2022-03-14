
## Description

基于 vue-element-admin (Vue2.6 + Eement-ui2.13) 增加以下功能：

1. 更换ui
2. 基于业务封装表单，表格，弹窗，按钮
3. 登录增加验证码
4. 增加按钮验证权限
5. 增加菜单验证权限
6. 增加权限管理（用户管理，角色管理,菜单/按钮管理）
7. 增加Mcokjs
8. IE11 兼容


## admin

![admin](/admin.png)

## user

![user](/user.png)


## Build

```bash
# 本地运行
npm run dev
# 测试环境
npm run build:test
# 预发布环境
npm run build:stage
# 生产环境
npm run build:prod
```

## Advanced

```bash
# preview the release environment effect
npm run preview

# preview the release environment effect + static resource analysis
npm run preview -- --report

# code format check
npm run lint

# code format check and auto fix
npm run lint -- --fix
```

Refer to [Documentation](https://panjiachen.github.io/vue-element-admin-site/guide/essentials/deploy.html) for more information

## Changelog

Detailed changes for each release are documented in the [release notes](https://github.com/PanJiaChen/vue-element-admin/releases).