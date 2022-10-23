import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  // mode: "history",
  routes: [ 
    // {
    //   path: "/RRT",
    //   name: "RRT",
    //   component: () => import("./components/RRT")
    // },
    {
      path: "/TPH",
      name: "quizHomepage",
      component: () => import("./components/playerTempHub")
    },

    {
      path: "/",
      name: "quizHomepage",
      component: () => import("./components/playerLoading")
    },
     
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

     // path: '/users/:id',
    //  {
    //   path: '/111', name: '',
    //   component: () => import("./components/tst_RadioBtn112") 
    // },

    {
      path: "/qH",
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
      path: '/fbList', name: 'fbList',
      component: () => import("./components/fbList") 
    },  

    {
      path: '/quiz1/:id', name: 'Quiz_1',
      component: () => import("./components/tst_RadioBtn112") 
    }, 
    {
      path: '/quiz2/:id', name: 'Quiz_2',
      component: () => import("./components/tst_RadioBtn22") 
    }, 
    {
      path: '/quiz3/:id', name: 'Quiz_3',
      component: () => import("./components/tst_RadioBtn33") 
    }, 

    {
      path: '/quiz4/:id', name: 'Quiz_4',
      component: () => import("./components/tst_RadioBtn44") 
    }, 
    {
      path: '/quiz5/:id', name: 'Quiz_5',
      component: () => import("./components/tst_RadioBtn5") 
    }, 

    {
      path: '/quiz6/:id', name: 'Quiz_6',
      component: () => import("./components/tst_RadioBtn66") 
    }, 
    {
      path: '/quiz7/:id', name: 'Quiz_7',
      component: () => import("./components/tst_RadioBtn77") 
    },   
    {
      path: '/quiz8/:id', name: 'Quiz_8',
      component: () => import("./components/tst_RadioBtn88") 
    }, 


    {
      path: '/quiz1/', name: 'Quiz_1',
      component: () => import("./components/tst_RadioBtn1") 
    }, 

    {
      path: '/quiz2', name: 'Quiz_2',
      component: () => import("./components/tst_RadioBtn2") 
    }, 
    {
      path: '/quiz3', name: 'Quiz_3',
      component: () => import("./components/tst_RadioBtn3") 
    }, 

    {
      path: '/quiz4', name: 'Quiz_4',
      component: () => import("./components/tst_RadioBtn4") 
    }, 
    {
      path: '/quiz5', name: 'Quiz_5',
      component: () => import("./components/tst_RadioBtn5") 
    }, 

    {
      path: '/quiz6', name: 'Quiz_6',
      component: () => import("./components/tst_RadioBtn6") 
    }, 
    {
      path: '/quiz7', name: 'Quiz_7',
      component: () => import("./components/tst_RadioBtn7") 
    },   
    {
      path: '/quiz8', name: 'Quiz_8',
      component: () => import("./components/tst_RadioBtn8") 
    }, 
    


    {
      path: '/FQA', name: 'Quiz_8',
      component: () => import("./components/FQA") 
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
