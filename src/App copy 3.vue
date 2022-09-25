
   
<template>
    <!-- <v-app id="inspire">
    
        <v-navigation-drawer 
                v-model="drawer" color="lime lighten-4" 
                mini-variant 
                permanent 
                app
                right
                >
    
            <ul class="pt-10 ">  

              <li class="my-2">
                    <a href="#" class="w-full block py-2 text-center hover:bg-yellow-300 ">
                        <router-link to="/quiz/1" class="text-black text-xs">
                            <svg  xmlns="http://www.w3.org/2000/svg" class="w-5 h-5   mx-auto  " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg> 模擬填答
                        </router-link>
                    </a>
                </li> 

                <li class="my-2">
                    <a href="#" class="w-full block py-2 text-center hover:bg-yellow-300 ">
                        <router-link to="/quiz/2" class="text-black text-xs">
                            <svg  xmlns="http://www.w3.org/2000/svg" class="w-5 h-5   mx-auto  " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg> 模擬填答
                        </router-link>
                    </a>
                </li> 

                <li class="my-2">
                    <a href="#" class="w-full block py-2 text-center hover:bg-yellow-300 ">
                        <router-link to="/tst_Dpy" class="text-black text-xs">
                            <svg  xmlns="http://www.w3.org/2000/svg" class="w-5 h-5   mx-auto  " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg> 模擬填答
                        </router-link>
                    </a>
                </li> 
    
                <li class="my-2">
                    <a href="#" class="w-full block py-2 text-center hover:bg-yellow-300 ">
                        <router-link to="/tst_List" class="text-black text-xs">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5   mx-auto  " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg> 填答 結果
                        </router-link>
                    </a>
                </li>

                <v-divider></v-divider>

                <li class="my-2">
                    <a href="#" class="w-full block py-2 text-center hover:bg-yellow-300 ">
                        <router-link to="/adPlayer" class="text-black text-xs">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5   mx-auto  " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg> 預約玩家
                        </router-link>
                    </a>
                </li>

                 <v-divider></v-divider>


                <li class="my-2">
                    <a href="#" class="w-full block py-2 text-center hover:bg-yellow-300 ">
                        <router-link to="/asaskAdd5" class="text-black text-xs">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5  mx-auto " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg> 增修題本
                        </router-link>
                    </a>
                </li> 
                <li class="my-2">
                    <a href="#" class="w-full block py-2 text-center hover:bg-yellow-300 ">
                        <router-link to="/asaak5_List" class="text-black text-xs ">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5  mx-auto  " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg> 修改題本
                        </router-link>
                    </a> 
                </li>
    
                
    
    
            </ul>
        </v-navigation-drawer>
    
        <v-content class="ml-2">
            <router-view></router-view>
        </v-content>
     
    </v-app> -->

    <v-card
    class="mx-auto overflow-hidden h-screen"
    height="mx-auto"
    width="mx-auto"
  > 
  <!-- #311B92 紫色 -->
    <v-app-bar 
      color="#dc2626"
      dense 
      dark
    > 
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"> 
      </v-app-bar-nav-icon>
      <v-spacer></v-spacer> 
 
            <!-- <v-btn  icon 
                    class="mx-6" 
                    to="/"> 
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              首頁
            </v-btn>  -->

            <v-btn  icon
                    class="mx-9 text-xs" 
                    to="/">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              首頁
            </v-btn> 

            <v-btn  icon
                    class="mx-9 text-xs" 
                    to="/bk7">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg> 
              簡易服務台
            </v-btn> 
      
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute  
      temporary 
      app
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >  

          <br>
          問卷清單
          <br> 

          <v-list-item> 
              <v-btn to="/quiz/1" class="ma-2" color="primary" dark >
                Q-{{ pLv_N[1] }}
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5  mx-auto  " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </v-btn>  
          </v-list-item>

          <v-list-item> 
              <v-btn to="/quiz/2" class="ma-2" color="primary" dark >
                Q-{{ pLv_N[2] }}
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5  mx-auto  " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </v-btn>  
          </v-list-item>

          <v-list-item> 
              <v-btn to="/quiz/3" class="ma-2" color="primary" dark >
                Q-{{ pLv_N[3] }}
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5  mx-auto  " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </v-btn>  
          </v-list-item>

          <v-list-item> 
              <v-btn to="/quiz/4" class="ma-2" color="primary" dark >
                Q-{{ pLv_N[4] }}
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5  mx-auto  " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </v-btn>  
          </v-list-item>

          <v-list-item> 
              <v-btn to="/quiz/5" class="ma-2" color="primary" dark >
                Q-{{ pLv_N[5] }}
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5  mx-auto  " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </v-btn>  
          </v-list-item>

          <v-list-item> 
              <v-btn to="/quiz/6" class="ma-2" color="primary" dark >
                Q-{{ pLv_N[6] }}
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5  mx-auto  " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </v-btn>  
          </v-list-item> 

          <v-list-item> 
              <v-btn to="/quiz/7" class="ma-2" color="primary" dark >
                Q-{{ pLv_N[7] }}
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5  mx-auto  " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </v-btn>  
          </v-list-item>

          <v-list-item> 
              <v-btn to="/quiz/8" class="ma-2" color="primary" dark >
                Q-{{ pLv_N[8] }}
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5  mx-auto  " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </v-btn>  
          </v-list-item> 

          <br>
          系統資料下載
          <br> 

          <v-list-item> 
              <v-btn
                class="ma-2"
                color="primary"
                dark
                to="/tst_Dpy"
              >
                綜合測試版本
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5  mx-auto  " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </v-btn> 
          </v-list-item>

          <v-list-item> 
              <v-btn
                class="ma-2"
                color="primary"
                dark
                to="/OD6"
              >
                系統登入（下載資料）
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5  mx-auto  " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </v-btn> 
          </v-list-item> 
           
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
 
    <v-content class="bg-gray-100" > 
         <router-view/> 
      </v-content>
  </v-card>
 
</template>
 
<script>
export default {
    data() {
        return {
            pLv:['','/Quiz/1','/Quiz/2','/Quiz/3','/Quiz/4','/Quiz/5','/Quiz/6','/Quiz/7','/Quiz/8'], 
            pLv_N:['','1.生活品質量表','2.簡式症狀表(BSRS)','3.上肢功能評估問卷(DASH)','4.上肢功能評估問卷(Quick-DASH)','5.MICHIGAN HAND OUTCOMES ','6.波士頓量表','7.SF-36','8.SF-12'],
            // cards: ['Today', 'Yesterday'],
            drawer: null,
            links: [
                ['mdi-inbox-arrow-down', 'Inbox'],
                ['mdi-send', 'Send'],
                ['mdi-delete', 'Trash'],
                ['mdi-alert-octagon', 'Spam'],
            ],
        }
    },
}
</script>

<style scoped>
 .bg_k{
      color: rgb(238, 238, 238);
      background: #f0ebdc;
    }
</style>>