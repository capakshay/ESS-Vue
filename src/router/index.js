import { createRouter, createWebHistory } from 'vue-router' 
import HomeComponent from '../components/esslists/homeComponent.vue'
import TimesheetForAll from '../components/esslists/timesheetForall.vue'
import LoginForm from '../components/Login/loginForm.vue'
const routes = [
   {
    path:'/',
    component:LoginForm
   }, 
   {
    path:'/homeComponent',
    component:HomeComponent,
    children:[
      {
        path:'/homeComponent/timesheet',
        component:TimesheetForAll
       }
      ]
   }, 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
