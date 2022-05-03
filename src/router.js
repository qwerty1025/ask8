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
    {
      path: "/",
      name: "asaskAdd5",
      component: () => import("./components/asaskAdd5")
    },
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
      path: "/asaak5_Display",
      name: "asaak5_Display",
      component: () => import("./components/asask5_Display")
    } 
     
  ]
});
