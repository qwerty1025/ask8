
   
<template>
    <v-app id="inspire">
    
        <v-navigation-drawer v-model="drawer" app color="light-blue darken-3" mini-variant permanent expand-on-hover>
    
            <ul class="pt-10 ">
    
    
                
    
                <li class="my-2">
                    <a href="#" class="w-full block py-2   text-center hover:bg-blue-700   hover:text-blue-800">
                        <router-link to="/tst_Dpy" class="text-white text-xs">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5   mx-auto  " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg> 題本模擬填答
                        </router-link>
                    </a>
                </li>
    
    
                <li class="my-2">
                    <a href="#" class="w-full block py-2   text-center hover:bg-blue-700   hover:text-blue-800">
                        <router-link to="/adPlayer" class="text-white text-xs">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5   mx-auto  " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg> 預約玩家
                        </router-link>
                    </a>
                </li>
    
                <li class="my-2">
                    <a href="#" class="w-full block py-2   text-center hover:bg-blue-700   hover:text-blue-800">
                        <router-link to="/tst_List" class="text-white text-xs">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5   mx-auto  " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg> 填答結果
                        </router-link>
                    </a>
                </li>

                <v-divider></v-divider>


                <li class="my-2">
                    <a href="#" class="w-full block py-2   text-center hover:bg-blue-700   hover:text-blue-800">
                        <router-link to="/asaskAdd5" class="text-white text-xs">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5  mx-auto " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg> 增修題本
                        </router-link>
                    </a>
                </li> 
                <li class="my-5">
                    <a href="#" class="w-full block py-2  text-center hover:bg-blue-700  hover:text-blue-800"> 
                        <router-link to="/asaak5_List" class="text-white text-xs ">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5  mx-auto  " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg> 修改題本
                        </router-link>
                    </a> 
                </li>
    
                <!-- <li class="my-2"> 
                            <a href="#" class="w-full block py-2   text-center hover:bg-blue-700   hover:text-blue-800">
                        <router-link to="/tst_List2" class="text-white text-xs"> 
                          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5   mx-auto  " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg>
                           2
                        </router-link>
                      </a> 
                        </li> -->
    
                <!-- <li class="my-2"> 
                            <a href="#" class="w-full block py-2   text-center hover:bg-blue-700   hover:text-blue-800">
                        <router-link to="/tst_Email" class="text-white text-xs"> 
                          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5   mx-auto  " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg>
                           tst_Email
                        </router-link>
                      </a> 
                        </li> -->
    
                <!-- <li class="my-2"> 
                            <a href="#" class="w-full block py-2   text-center hover:bg-blue-700   hover:text-blue-800">
                        <router-link to="/tst_Dpy" class="text-white text-xs"> 
                          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5   mx-auto  " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg>
                           tst_Dpy
                        </router-link>
                      </a> 
                        </li> -->
    
    
    
            </ul>
        </v-navigation-drawer>
    
        <v-content class="ml-10">
            <router-view></router-view>
        </v-content>
    
        <v-main>
    
        </v-main>
    </v-app>
</template>
 
<script>
export default {
    data() {
        return {
            cards: ['Today', 'Yesterday'],
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