import {createRouter ,createWebHistory}from 'vue-router'
import Home from '../src/views/Home.vue'
const routes = [
    {
        path:'/',
        component:()=>import(/*webpackChunkName: "byName"*/ '../src/components/DefaultLayout.vue'),
        children:[
            {
        path:'/',
        name:'home',
        component:Home
    },{
        path:'/by-name/:name?',
        name:'byName',
        component:()=>import(/*webpackChunkName: "byName"*/ '../src/views/MealsByName.vue')
    },{
        path:'/by-letter/:letter?',
        name:'byLetter',
        component:()=>import(/*webpackChunkName: "byName"*/ '../src/views/MealsByLetter.vue')
    },{
        path:'/ingredients',
        name:'ingredients',
        component:()=>import(/*webpackChunkName: "byName"*/ '../src/views/Ingredients.vue')
    },{
        path:'/by-ingredient/:ingredient?',
        name:'byIngredient',
        component:()=>import(/*webpackChunkName: "byName"*/ '../src/views/MealsByIngredient.vue')
    },{
        path:'/meal/:id?',
        name:'mealDetails',
        component:()=>import(/*webpackChunkName: "byName"*/ '../src/views/MealDetails.vue')
    }
        ]
    },
    {
        path:'/guest',
        component:()=>import(/*webpackChunkName: "byName"*/ '../src/components/GuestLayout.vue'),
        children:[
        ]
    }
    
]
const router = createRouter({
    history:createWebHistory(),
    routes
})
export default router