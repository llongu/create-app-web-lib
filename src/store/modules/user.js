// import { logout } from '@/api/user';
// import { login, logout, getInfo } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth';
import router, { resetRouter } from '@/router';

const state = {
  token: getToken(),
  loginName: '' || localStorage.getItem('loginName'),
  name: '',
  avatar: '',
  introduction: '',
  roles: [],
  btns: [],
  menus: []
};

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
  SET_INTRODUCTION: (state, introduction) => {
    state.introduction = introduction;
  },
  SET_LOGINNAME: (state, loginName) => {
    state.loginName = loginName;
  },
  SET_NAME: (state, name) => {
    state.name = name;
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar;
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles;
  },
  SET_MENUS: (state, menus) => {
    state.menus = menus;
  },
  SET_BTNS: (state, btns) => {
    state.btns = btns;
  }

};

const actions = {
  // user login
  login ({ commit }, userInfo) {
    // const { userName, password } = userInfo
    return new Promise((resolve, reject) => {
      // login({ userName: userName.trim(), password: password }).then(response => {
      // const { data } =  response
      // commit('SET_TOKEN', data.token)
      // setToken(data.token)

      // should remove
      commit('SET_TOKEN', 'mocktoken');
      commit('SET_LOGINNAME', userInfo.userName);
      localStorage.setItem('loginName', userInfo.userName);
      setToken('mocktoken');

      resolve();
      // }).catch(error => {
      //   reject(error)
      // })
    });
  },

  // get user info
  getInfo ({ commit, state }) {
    return new Promise((resolve, reject) => {
      // getInfo(state.token).then(response => {
      // const { data } = response

      // if (!data) {
      //   reject('Verification failed, please Login again.')
      // }

      // const { roles, name, avatar, introduction } = data

      const { roles, name, avatar, introduction, btns, menus } = {
        roles: state.loginName === 'admin' ? ['admin'] : ['user'], // store/permission use
        name: state.loginName,
        avatar: 'https://lh3.googleusercontent.com/proxy/DPjLRgc3J_etbbty-SN6ZB6fUjwtEtNN0RmC4eoo9-_2LokGSaj1G5znSwM350M7ayA3Yzk62TTq6F0SUC_dlAbKZGD5efaPX4FZ',
        introduction: '介绍2333',
        btns: state.loginName === 'admin' ? [
          'orderAdd',
          'orderDispatch',
          'orderPuse',
          'orderExe',
          'hiddenBtn'
        ] : [
          'orderAdd',
          'orderDispatch',
          'orderPuse',
          'orderExe'
        ],
        menus: [
          {
            path: '/orderManage',
            name: '订单列表',
            children: [
              {
                path: 'list',
                name: '订单列表'
              },
              {
                path: 'addOrder',
                name: '新增'
              }
              // {
              //   path: 'hide',
              //   name: '菜单权限隐藏'
              // }
            ]
          }
        ]
      };

      // roles must be a non-empty array
      if (!roles || roles.length <= 0) {
        reject('getInfo: roles must be a non-null array!');
      }

      commit('SET_ROLES', roles);
      commit('SET_NAME', name);
      commit('SET_AVATAR', avatar);
      commit('SET_INTRODUCTION', introduction);
      commit('SET_MENUS', menus);
      commit('SET_BTNS', btns);

      // resolve(data)
      resolve({ roles, name, avatar, introduction, btns, menus });
      // }).catch(error => {
      //   reject(error)
      // })
    });
  },

  // user logout
  logout ({ commit, state, dispatch }) {
    return new Promise((resolve, reject) => {
      // logout(state.token).then(() => {
      commit('SET_TOKEN', '');
      commit('SET_ROLES', []);
      removeToken();
      resetRouter();

      // reset visited views and cached views
      // to fixed https://github.com/PanJiaChen/vue-element-admin/issues/2485
      dispatch('tagsView/delAllViews', null, { root: true });

      resolve();
      // }).catch(error => {
      //   reject(error);
      // });
    });
  },

  // remove token
  resetToken ({ commit }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '');
      commit('SET_ROLES', []);
      removeToken();
      resolve();
    });
  },

  // dynamically modify permissions
  async changeRoles ({ commit, dispatch }, role) {
    const token = role + '-token';

    commit('SET_TOKEN', token);
    setToken(token);

    const { roles } = await dispatch('getInfo');

    resetRouter();

    // generate accessible routes map based on roles
    const accessRoutes = await dispatch('permission/generateRoutes', roles, { root: true });
    // dynamically add accessible routes
    router.addRoutes(accessRoutes);

    // reset visited views and cached views
    dispatch('tagsView/delAllViews', null, { root: true });
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
