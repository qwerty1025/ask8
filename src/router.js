import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  // mode: "history",
  routes: [
     
    {
      path: "/asaskAdd5",
      name: "asaskAdd5",
      component: () => import("./components/asaskAdd5")
    },
    {
      path: "/adPlayer",
      name: "adPlayer",
      component: () => import("./components/asask5_AddPlayer")
    }, 
    // {
    //   path: "/",
    //   name: "asaskAdd5",
    //   component: () => import("./components/asaskAdd5")
    // }, 
    {
      path: "/adPList",
      name: "asaak5_List",
      component: () => import("./components/asask5_PlayerList")
    },
    {
      path: "/asaak5_List",
      name: "asaak5_List",
      component: () => import("./components/asaak5_List")
    },
    {
      path: "/tst_Dpy",
      name: "tst_Dpy",
      component: () => import("./components/tst_Dpy")
    },
    {
      path: "/tst_List",
      name: "tst_List",
      component: () => import("./components/tst_List")
    },
    {
      path: "/tst_List2",
      name: "tst_List",
      component: () => import("./components/tst_List2")
    },
    {
      path: "/tst_Email",
      name: "tst_Email",
      component: () => import("./components/tst_Email")
    },
    // {
    //   path: "/tst_Dpy",
    //   name: "tst_Dpy",
    //   component: () => import("./components/tst_Dpy")
    // },  
     
  ]
});
