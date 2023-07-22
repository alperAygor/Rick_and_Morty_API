import {createRouter, createWebHistory} from 'vue-router';
import Home from '../components/home/home.vue'
import detailsPage from '../components/home/details/details.vue'
import locationPage from '../components/locationPage/locationPage.vue'
import episodePage from '../components/episodePage/episodePage.vue'
 export const router =createRouter({
    
    history:createWebHistory(),
    routes: [
        { 
           
            path: "/", 
            component: Home },
             { 
                 path: '/detail/:cardid', 
                 name:"detailsPage",
            component: detailsPage
        },
              { 
                 path: '/episodes', 
                 name:"episodePage",
                 component: episodePage },
             { 
                 path: '/locations', 
                 name:"locationPage",
                 component: locationPage },
            
    ]
 });

