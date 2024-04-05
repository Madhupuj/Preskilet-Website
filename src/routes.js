import MainContent from './components/MainContent.vue'
import StudentInfo from './components/StudentInfo.vue'
import TermCondition from './components/TermCondition.vue'
import TeacherInfo from'./components/TeacherInfo.vue'
import PrivacyApp from './components/PrivacyApp.vue'
import AboutUs from './components/AboutUS.vue'
import ContactUs from './components/ContactUs.vue'

import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    name: 'MainContent',
    component: MainContent,
    path: '/'
  },
  {
    name: 'StudentInfo',
    component: StudentInfo,
    path: '/StudentInfo'
  },
  {
    name:'TermCondition',
    component: TermCondition,
    path: '/TermCondition' 
  },
  {
    name:'TeacherInfo',
    component:TeacherInfo,
    path: '/TeacherInfo'
  },
  
  {
    name:'PrivacyApp',
    component:PrivacyApp,
    path: '/PrivacyApp'
  },

  {
    name:'AboutUs',
    component:AboutUs,
    path: '/AboutUs'
  },

  {
    name:'ContactUs',
    component:ContactUs,
    path: '/ContactUs'
  }



];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
