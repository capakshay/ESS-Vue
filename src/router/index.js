import { createRouter, createWebHistory } from 'vue-router' 
import HomeComponent from '../components/esslists/homeComponent.vue'
import TimesheetForAll from '../components/esslists/timesheetForall.vue'
const routes = [
   {
    path:'/',
    component:HomeComponent
   },
   {
    path:'/timesheet',
    component:TimesheetForAll
   },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
