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
    // {
    //   path: "/",
    //   name: "tst_Dpy",
    //   component: () => import("./components/tst_Dpy")
    // },
    {
      path: "/tst_RadioBtn",
      name: "tst_RadioBtn",
      component: () => import("./components/tst_RadioBtn")
    },

    {
      path: "/",
      name: "quizHomepage",
      component: () => import("./components/quizHomepage")
    },

    {
      path: "/quizHomepage",
      name: "quizHomepage",
      component: () => import("./components/quizHomepage")
    },

    // {
    //   path: "/",
    //   name: "tst_RadioBtn",
    //   component: () => import("./components/tst_RadioBtn")
    // },
    // GetQuiz
    {
      path: '/quiz/:play_lv',
      name: 'Quiz',
      component: () => import("./components/tst_RadioBtn")
      // component: () => import("./components/Quiz/quizHere")
    }, 

    {
      path: '/quiz2',
      name: 'Quiz',
      component: () => import("./components/tst_RadioBtn")
      // component: () => import("./components/Quiz/quizHere")
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
