import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AboutUs from '../views/AboutUs.vue'
import Services from '../views/Services.vue'
import WhyChooseUs from '../views/WhyChooseUs.vue'
import TalentPool from '../views/TalentPool.vue'
import ForEmployers from '../views/ForEmployers.vue'
import ContactUs from '../views/ContactUs.vue'
import PrivacyPolicy from '../views/PrivacyPolicy.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about-us', name: 'AboutUs', component: AboutUs },
  { path: '/services', name: 'Services', component: Services },
  { path: '/why-choose-us', name: 'WhyChooseUs', component: WhyChooseUs },
  { path: '/talent-pool', name: 'TalentPool', component: TalentPool },
  { path: '/for-employers', name: 'ForEmployers', component: ForEmployers },
  { path: '/contact-us', name: 'ContactUs', component: ContactUs },
  { path: '/privacy-policy', name: 'PrivacyPolicy', component: PrivacyPolicy }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 }
  }
})

export default router
