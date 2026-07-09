import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { 
    path: '/', 
    name: 'Home', 
    component: () => import('../views/Home.vue')
  },
  { 
    path: '/about-us', 
    name: 'AboutUs', 
    component: () => import('../views/AboutUs.vue')
  },
  { 
    path: '/services', 
    name: 'Services', 
    component: () => import('../views/Services.vue')
  },
  { 
    path: '/why-choose-us', 
    name: 'WhyChooseUs', 
    component: () => import('../views/WhyChooseUs.vue')
  },
  { 
    path: '/talent-pool', 
    name: 'TalentPool', 
    component: () => import('../views/TalentPool.vue')
  },
  { 
    path: '/for-employers', 
    name: 'ForEmployers', 
    component: () => import('../views/ForEmployers.vue')
  },
  { 
    path: '/contact-us', 
    name: 'ContactUs', 
    component: () => import('../views/ContactUs.vue')
  },
  { 
    path: '/privacy-policy', 
    name: 'PrivacyPolicy', 
    component: () => import('../views/PrivacyPolicy.vue')
  }
]

const router = createRouter({
  history: createWebHistory('/choice-simplihire/'),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 }
  }
})

export default router
