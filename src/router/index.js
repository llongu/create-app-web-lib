import { createRouter, createWebHashHistory } from "vue-router"
import Main from "../layout/main"
import NoteFound from "../views/noteFound"

import Home from "../views/home"
const routerHistory = createWebHashHistory()

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: "/",
      component: Main,
      children: [
        //Main page...
        {
          path: "/",
          component: Home
        }
      ]
    },

    { path: "/:pathMatch(.*)*", name: "NotFound", component: NoteFound }
  ],
  scrollBehavior: () => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }
})

export default router
