<template>
  <nav class="navbar" :class="{ 'navbar-scrolled': isScrolled }">
    <div class="container">
      <div class="navbar-brand">
        <router-link to="/">
          <span class="brand-name">Choice SimpliHire</span>
        </router-link>
      </div>
      
      <div class="navbar-links" :class="{ 'navbar-links-active': isMobileMenuOpen }">
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/about-us" class="nav-link">About Us</router-link>
        <router-link to="/services" class="nav-link">Services</router-link>
        <router-link to="/why-choose-us" class="nav-link">Why Choose Us</router-link>
        <router-link to="/talent-pool" class="nav-link">Talent Pool</router-link>
        <router-link to="/for-employers" class="nav-link">For Employers</router-link>
        <router-link to="/contact-us" class="nav-link">Contact Us</router-link>
      </div>

      <div class="navbar-actions">
        <div class="lang-switcher">
          <button 
            class="lang-btn" 
            :class="{ 'lang-btn-active': currentLang === 'EN' }"
            @click="selectLang('EN')"
          >
            EN
          </button>
          <button 
            class="lang-btn" 
            :class="{ 'lang-btn-active': currentLang === '中文' }"
            @click="selectLang('中文')"
          >
            中文
          </button>
        </div>
        <router-link to="/contact-us" class="btn btn-primary">
          Get Started
        </router-link>
        <button class="mobile-menu-toggle" @click="toggleMobileMenu">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const currentLang = ref('EN')

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const selectLang = (lang) => {
  currentLang.value = lang
  // 中文版本预留，后期补充
  if (lang === '中文') {
    alert('中文版本即将上线，敬请期待！')
    currentLang.value = 'EN'
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.navbar-scrolled {
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.navbar .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
}

.navbar-brand {
  flex-shrink: 0;
}

.brand-name {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--primary-color);
  text-decoration: none;
}

.brand-name:hover {
  color: var(--primary-dark);
}

.navbar-links {
  display: flex;
  align-items: center;
  gap: 32px;
}

.nav-link {
  text-decoration: none;
  color: var(--text-secondary);
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-link:hover,
.nav-link.router-link-active {
  color: var(--primary-color);
}

.navbar-actions {
  display: flex;
  align-items: center;
  gap: 16px;
}

.lang-switcher {
  display: flex;
  background-color: var(--bg-light);
  border-radius: 100px;
  padding: 4px;
  gap: 4px;
}

.lang-btn {
  padding: 6px 16px;
  background-color: transparent;
  border: none;
  border-radius: 100px;
  color: #888;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.lang-btn:hover {
  color: var(--text-primary);
}

.lang-btn-active {
  background-color: white;
  color: var(--primary-color);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
}

.mobile-menu-toggle {
  display: none;
  background-color: transparent;
  border: none;
  font-size: 1.5rem;
  color: var(--primary-color);
  cursor: pointer;
}

@media (max-width: 992px) {
  .navbar-links {
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    background-color: white;
    flex-direction: column;
    padding: 24px;
    gap: 16px;
    box-shadow: var(--shadow-lg);
    transform: translateY(-150%);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
  }

  .navbar-links-active {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }

  .nav-link {
    font-size: 1.125rem;
  }

  .navbar-actions .btn {
    display: none;
  }

  .mobile-menu-toggle {
    display: block;
  }
}
</style>