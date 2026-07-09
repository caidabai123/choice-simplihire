﻿﻿﻿﻿<template>
  <nav class="navbar" :class="{ 'navbar-scrolled': isScrolled }">
    <div class="container">
      <div class="navbar-brand">
        <router-link to="/" class="brand-link">
          <img src="/images/logo.png" alt="Choice SimpliHire Logo" class="brand-logo">
          <div class="brand-text">
            <span class="brand-name">Choice SimpliHire</span>
            <span class="brand-sub">CHOICE SIMPLIHIRE</span>
          </div>
        </router-link>
      </div>
      
      <div class="navbar-links" :class="{ 'navbar-links-active': isMobileMenuOpen }">
        <router-link to="/" class="nav-link">{{ i18n.t('nav.home') }}</router-link>
        <router-link to="/about-us" class="nav-link">{{ i18n.t('nav.about') }}</router-link>
        <router-link to="/services" class="nav-link">{{ i18n.t('nav.services') }}</router-link>
        <router-link to="/why-choose-us" class="nav-link">{{ i18n.t('nav.whyChoose') }}</router-link>
        <router-link to="/talent-pool" class="nav-link">{{ i18n.t('nav.talentPool') }}</router-link>
        <router-link to="/for-employers" class="nav-link">{{ i18n.t('nav.forEmployers') }}</router-link>
        <router-link to="/contact-us" class="nav-link">{{ i18n.t('nav.contact') }}</router-link>
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
        <router-link to="/contact-us" class="btn btn-primary btn-sm">
          {{ i18n.t('actions.getStarted') }}
        </router-link>
        <button class="mobile-menu-toggle" @click="toggleMobileMenu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useI18n } from '../i18n'

const i18n = useI18n()
const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const currentLang = computed(() => i18n.getLocale())

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const selectLang = (lang) => {
  i18n.setLocale(lang)
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
  z-index: var(--z-fixed);
  background-color: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(226, 232, 240, 0.6);
  transition: all var(--transition-base);
}

.navbar-scrolled {
  background-color: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: var(--shadow-md);
}

.navbar .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
}

.navbar-brand {
  flex-shrink: 0;
}

.brand-link {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  text-decoration: none;
}

.brand-logo {
  width: 50px;
  height: auto;
  object-fit: contain;
}

.brand-text {
  display: flex;
  flex-direction: column;
}

.brand-name {
  font-family: var(--font-family-display);
  font-size: var(--text-xl);
  font-weight: var(--font-bold);
  color: var(--color-text-primary);
  line-height: 1.2;
}

.brand-sub {
  font-size: var(--text-xs);
  color: var(--color-text-muted);
  letter-spacing: 0.05em;
}

.navbar-links {
  display: flex;
  align-items: center;
  gap: var(--space-1);
}

.nav-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--space-2) var(--space-3);
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  color: var(--color-text-secondary);
  text-decoration: none;
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);
  text-align: center;
}

.nav-link:hover,
.nav-link.router-link-active {
  color: var(--color-primary);
  background-color: var(--color-primary-50);
}

.navbar-actions {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  flex-shrink: 0;
}

.lang-switcher {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-1) var(--space-2);
  background-color: var(--color-gray-50);
  border: 1px solid var(--color-gray-200);
  border-radius: var(--radius-full);
}

.lang-btn {
  padding: var(--space-1) var(--space-3);
  font-size: var(--text-xs);
  font-weight: var(--font-semibold);
  color: var(--color-text-secondary);
  background: none;
  border: none;
  border-radius: var(--radius-full);
  cursor: pointer;
  transition: all var(--transition-fast);
}

.lang-btn:hover {
  color: var(--color-primary);
}

.lang-btn-active {
  color: var(--color-primary);
  background-color: #ffffff;
  box-shadow: var(--shadow-sm);
}

.mobile-menu-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  padding: var(--space-2);
  background: none;
  border: none;
  cursor: pointer;
}

.mobile-menu-toggle span {
  display: block;
  width: 24px;
  height: 2px;
  background-color: var(--color-text-primary);
  transition: all var(--transition-fast);
}

@media (max-width: 1024px) {
  .navbar-links {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    display: none;
    flex-direction: column;
    background-color: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    padding: var(--space-4);
    gap: var(--space-2);
    border-bottom: 1px solid var(--color-gray-200);
    box-shadow: var(--shadow-lg);
  }
  
  .navbar-links-active {
    display: flex;
  }
  
  .mobile-menu-toggle {
    display: flex;
  }
  
  .navbar-actions {
    gap: var(--space-2);
  }
  
  .lang-switcher {
    padding: var(--space-1) var(--space-1);
  }
  
  .lang-btn {
    padding: var(--space-1) var(--space-2);
    font-size: var(--text-xs);
  }
}

@media (max-width: 768px) {
  .navbar .container {
    height: 72px;
  }
  
  .brand-logo {
    width: 48px;
  }
  
  .brand-name {
    font-size: var(--text-xl);
  }
  
  .brand-sub {
    font-size: var(--text-sm);
  }
  
  .navbar-actions .btn {
    padding: var(--space-2) var(--space-4);
    font-size: var(--text-sm);
  }
}

@media (max-width: 480px) {
  .navbar .container {
    height: 64px;
  }
  
  .brand-logo {
    width: 44px;
  }
  
  .brand-text {
    display: none;
  }
  
  .navbar-actions {
    gap: var(--space-2);
    flex-shrink: 0;
  }
  
  .lang-switcher {
    gap: 6px;
    padding: 4px 8px;
  }
  
  .lang-btn {
    padding: 4px 12px;
    font-size: 12px;
  }
  
  .navbar-actions .btn {
    padding: var(--space-2) var(--space-3);
    font-size: 12px;
    min-width: 80px;
  }
  
  .mobile-menu-toggle {
    padding: var(--space-2);
  }
  
  .mobile-menu-toggle span {
    width: 24px;
    height: 2px;
    gap: 4px;
  }
}
</style>
