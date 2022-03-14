import { asyncRoutes, constantRoutes } from '@/router';

import { FloatArray } from '@/utils/index';

/**
 * Filter asynchronous routing tables by recursion
 * @param routes asyncRoutes
 * @param floatMenus
 */
export function filterAsyncRoutes (routes, floatMenus) {
  const res = [];

  routes.forEach(route => {
    const tmp = { ...route };

    if (floatMenus.includes(tmp.path) || tmp.path === '*') {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, floatMenus);
      }
      res.push(tmp);
    }
  });

  return res;
}

const state = {
  routes: [],
  addRoutes: []
};

const mutations = {
  SET_ROUTES: (state, routes) => {
    state.addRoutes = routes;
    const sortRoutes = constantRoutes.concat(routes);
    // dev
    if (sortRoutes.length && sortRoutes[0].name === 'componentsLib') {
      sortRoutes.push(sortRoutes.splice(0, 1)[0]);
    }
    state.routes = sortRoutes;
  }
};

const actions = {
  generateRoutes ({ commit }, { roles, menus }) {
    return new Promise(resolve => {
      let accessedRoutes;
      if (roles.includes('admin')) {
        accessedRoutes = asyncRoutes || [];
      } else {
        const floatMenus = FloatArray(menus)
        accessedRoutes = filterAsyncRoutes(asyncRoutes, floatMenus);
      }
      commit('SET_ROUTES', accessedRoutes);
      resolve(accessedRoutes);
    });
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
