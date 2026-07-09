<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-brand">
          <div class="brand-logo">
            <img src="/images/logo.png" alt="Choice SimpliHire Logo" class="logo-image">
          </div>
          <h3 class="brand-title">Choice SimpliHire</h3>
          <p class="brand-slogan">{{ i18n.t('footer.subtitle') }}</p>
          <div class="social-links">
            <a href="#" class="social-link" title="WeChat">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </a>
            <a href="#" class="social-link" title="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </a>
            <a href="#" class="social-link" title="Email">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>

        <div class="footer-section">
          <h4>{{ i18n.t('footer.quickLinks') }}</h4>
          <ul>
            <li><router-link to="/">{{ i18n.t('nav.home') }}</router-link></li>
            <li><router-link to="/about-us">{{ i18n.t('nav.about') }}</router-link></li>
            <li><router-link to="/services">{{ i18n.t('nav.services') }}</router-link></li>
            <li><router-link to="/why-choose-us">{{ i18n.t('nav.whyChoose') }}</router-link></li>
            <li><router-link to="/talent-pool">{{ i18n.t('nav.talentPool') }}</router-link></li>
          </ul>
        </div>

        <div class="footer-section">
          <h4>{{ i18n.t('footer.services') }}</h4>
          <ul>
            <li><router-link to="/for-employers">{{ i18n.t('nav.forEmployers') }}</router-link></li>
            <li><router-link to="/contact-us">{{ i18n.t('nav.contact') }}</router-link></li>
            <li><router-link to="/privacy-policy">{{ i18n.t('footer.privacy') }}</router-link></li>
          </ul>
        </div>

        <div class="footer-contact">
          <h4>{{ i18n.t('footer.contact') }}</h4>
          <div class="contact-item">
            <span>contact@datangcapital.com.au</span>
          </div>
          <div class="contact-item">
            <span>+61 2 8211 0688</span>
          </div>
          <div class="contact-item">
            <span>Level 17, 123 Pitt St, Sydney Australia 2000</span>
          </div>
        </div>
      </div>

      <div class="footer-divider"></div>

      <div class="footer-bottom">
        <p>{{ i18n.t('footer.copyright') }}</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useI18n } from '../i18n'

const i18n = useI18n()
</script>

<style scoped>
.footer {
  background-color: var(--color-white);
  color: var(--color-text-primary);
  padding: 60px 0 30px;
  border-top: 1px solid var(--color-gray-100);
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  margin-bottom: 40px;
}

.footer-brand {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.brand-logo {
  margin-bottom: 8px;
}

.logo-image {
  width: 180px;
  height: auto;
  display: block;
}

.brand-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-text-primary);
  margin: 0;
}

.brand-slogan {
  color: var(--color-primary);
  font-size: 0.875rem;
  margin: 0;
}

.social-links {
  display: flex;
  gap: 12px;
  margin-top: 8px;
}

.social-link {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-gray-100);
  border-radius: 50%;
  color: var(--color-text-secondary);
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-link:hover {
  background-color: var(--color-primary);
  color: white;
}

.footer-section h4 {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 20px;
  color: var(--color-text-primary);
  position: relative;
  padding-bottom: 8px;
}

.footer-section h4::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 30px;
  height: 2px;
  background-color: var(--color-accent);
}

.footer-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-section li {
  margin-bottom: 12px;
}

.footer-section a {
  color: var(--color-text-secondary);
  text-decoration: none;
  font-size: 0.875rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
}

.footer-section a:hover {
  color: var(--color-primary);
  padding-left: 4px;
}

.footer-section a i {
  color: var(--color-primary);
  font-size: 1rem;
  min-width: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer-contact h4 {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 20px;
  color: var(--color-text-primary);
  position: relative;
  padding-bottom: 8px;
}

.footer-contact h4::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 30px;
  height: 2px;
  background-color: var(--color-primary);
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 14px;
  color: var(--color-text-secondary);
  font-size: 0.875rem;
  line-height: 1.5;
}

.contact-item:last-child {
  margin-bottom: 0;
}

.contact-item i {
  color: var(--color-primary);
  flex-shrink: 0;
  margin-top: 2px;
  font-size: 1.1rem;
  min-width: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer-divider {
  height: 1px;
  background-color: var(--color-gray-100);
  margin-bottom: 30px;
}

.footer-bottom {
  text-align: center;
}

.footer-bottom p {
  color: var(--color-text-muted);
  font-size: 0.875rem;
  margin: 0;
}

@media (max-width: 992px) {
  .footer-content {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .footer {
    padding: 48px 0 24px;
  }

  .footer-content {
    grid-template-columns: 1fr;
    gap: 32px;
  }
}
</style>