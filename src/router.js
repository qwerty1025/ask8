import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  // mode: "history",
  routes: [
    // {
    //   path: "/",
    //   alias: "/tutorials",
    //   name: "tutorials",
    //   component: () => import("./components/TutorialsList")
    // },
    // {
    //   path: "/p",
    //   name: "p",
    //   component: () => import("./components/p")
    // }, 
    // {
    //   path: "/bkadd",
    //   name: "bkadd",
    //   component: () => import("./components/bkAdd")
    // },
    // {
    //   path: "/",
    //   name: "bkadd",
    //   component: () => import("./components/bkAdd")
    // },  
    {
      path: "/rg",
      name: "setRgDta3",
      component: () => import("./components/setRgDta3")
    },
    {
      path: "/gd",
      name: "getReDta",
      component: () => import("./components/getReDta")
    },
    
    {
      path: "/gd2",
      name: "getReDta2",
      component: () => import("./components/getReDta2")
    },
    {
      path: "/supsetting",
      name: "supsetting",
      component: () => import("./components/supsetting")
    }, 
    {
      path: "/asaskAdd5",
      name: "asaskAdd5",
      component: () => import("./components/asaskAdd5")
    },
    {
      path: "/",
      name: "asaskAdd5",
      component: () => import("./components/asaskAdd5")
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
    }, 
    
    {
      path: "/bkadd2",
      name: "bkadd2",
      component: () => import("./components/bkAdd2")
    },
    {
      path: "/bkaddv2",
      name: "bkaddv2",
      component: () => import("./components/bkAddv2")
    },
    {
      path: "/bkList",
      name: "bkList",
      component: () => import("./components/bkList")
    }, 
    {
      path: "/posGM_0",
      name: "posGM",
      component: () => import("./components/posGM")
    },
    {
      path: "/WordList",
      name: "WordList",
      component: () => import("./components/WordList")
    }, 
    // {
    //   path: "/drag",
    //   name: "drag",
    //   component: () => import("./components/drag")
    // },
    // {
    //   path: "/pd3",
    //   name: "pd3",
    //   component: () => import("./components/pd3")
    // },
    {
      path: "/pd",
      name: "pd",
      component: () => import("./components/posGMdrop")
    },
     
    {
      path: "/vvv",
      name: "vvv",
      component: () => import("./components/vvv")
    }, 
    {
      path: "/ppp",
      name: "ppp",
      component: () => import("./components/ppp")
    }, 
    
    {
      path: "/printa",
      name: "printa",
      component: () => import("./components/printa")
    }, 
    {
      path: "/add",
      name: "add",
      component: () => import("./components/TutorialAdd")
    },
    {
      path: "/v3",
      name: "v3",
      component: () => import("./components/v3")
    },
    {
      path: "/PMNAdd",
      name: "PMNAdd",
      component: () => import("./components/PMNAdd")
    },
    {
      path: "/PMSAdd",
      name: "PMSAdd",
      component: () => import("./components/PMSAdd")
    },
    {
      path: "/PMSList",
      name: "PMSList",
      component: () => import("./components/PMSList")
    }, 
    {
      path: "/PMNAdd",
      name: "PMNAdd",
      component: () => import("./components/PMNAdd")
    }, 
    {
      path: "/Tadd",
      name: "TutorialsList",
      component: () => import("./components/TutorialAdd")
    },
    {
      path: "/TutorialsList",
      name: "TutorialsList",
      component: () => import("./components/TutorialsList")
    },
    {
      path: "/PMNList",
      name: "PMNList",
      component: () => import("./components/PMNList")
    },
    {
      path: "/cardDisplay",
      name: "cardDisplay",
      component: () => import("./components/cardDisplay")
    },
  ]
});
