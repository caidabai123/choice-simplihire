<template>
  <div class="home-page">
    <section class="hero-banner">
      <div class="hero-background">
        <img src="/images/hero-bg.svg" alt="Hero Background" class="hero-bg-image">
      </div>
      <div class="hero-decoration"></div>
      <div class="hero-decoration hero-decoration-2"></div>
      <div class="container">
        <div class="hero-content">
          <div class="hero-tag">{{ i18n.t('home.hero.tag') }}</div>
          <h1 class="hero-title">{{ i18n.t('home.hero.title') }}</h1>
          <p class="hero-subtitle">{{ i18n.t('home.hero.subtitle') }}</p>
          <div class="hero-actions">
            <router-link to="/contact-us" class="btn btn-hero-primary">
              <span>{{ i18n.t('home.hero.cta') }}</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </router-link>
            <router-link to="/services" class="btn btn-hero-secondary">{{ i18n.t('home.hero.learnMore') }}</router-link>
          </div>
          <div class="hero-scroll-hint">
            <span>{{ i18n.t('home.hero.scrollHint') }}</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="scroll-arrow">
              <path d="M12 5v14M5 12l7 7 7-7"/>
            </svg>
          </div>
        </div>
        <div class="hero-stats">
          <div class="stat-item">
            <div class="stat-number">{{ i18n.t('home.stats.countries') }}</div>
            <div class="stat-divider"></div>
            <div class="stat-label">{{ i18n.t('home.stats.countriesLabel') }}</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">{{ i18n.t('home.stats.talents') }}</div>
            <div class="stat-divider"></div>
            <div class="stat-label">{{ i18n.t('home.stats.talentsLabel') }}</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">{{ i18n.t('home.stats.employers') }}</div>
            <div class="stat-divider"></div>
            <div class="stat-label">{{ i18n.t('home.stats.employersLabel') }}</div>
          </div>
        </div>
      </div>
    </section>

    <section class="core-advantages">
      <div class="container">
        <div class="section-header">
          <div class="section-tag">{{ i18n.t('home.advantages.tag') }}</div>
          <h2 class="section-title">{{ i18n.t('home.advantages.title') }}</h2>
          <p class="section-description">{{ i18n.t('home.advantages.description') }}</p>
        </div>
        <div class="advantages-grid">
          <div class="advantage-card">
            <div class="card-image">
              <img src="https://images.unsplash.com/photo-1551009175-8a6734857c02?w=400&h=250&fit=crop" alt="Simplified Hiring">
            </div>
            <h3 class="card-title">{{ i18n.t('home.advantages.card1') }}</h3>
            <p class="card-description">{{ i18n.t('home.advantages.card1Desc') }}</p>
          </div>
          <div class="advantage-card">
            <div class="card-image">
              <img src="https://images.unsplash.com/photo-1543286386-713bdd548da4?w=400&h=250&fit=crop" alt="Trusted Service">
            </div>
            <h3 class="card-title">{{ i18n.t('home.advantages.card2') }}</h3>
            <p class="card-description">{{ i18n.t('home.advantages.card2Desc') }}</p>
          </div>
          <div class="advantage-card">
            <div class="card-image">
              <img src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=250&fit=crop" alt="Global Talent">
            </div>
            <h3 class="card-title">{{ i18n.t('home.advantages.card3') }}</h3>
            <p class="card-description">{{ i18n.t('home.advantages.card3Desc') }}</p>
          </div>
          <div class="advantage-card">
            <div class="card-image">
              <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=250&fit=crop" alt="Compliance">
            </div>
            <h3 class="card-title">{{ i18n.t('home.advantages.card4') }}</h3>
            <p class="card-description">{{ i18n.t('home.advantages.card4Desc') }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="service-coverage">
      <div class="container">
        <div class="section-header">
          <div class="section-tag">{{ i18n.t('home.coverage.tag') }}</div>
          <h2 class="section-title">{{ i18n.t('home.coverage.title') }}</h2>
          <p class="section-description">{{ i18n.t('home.coverage.description') }}</p>
        </div>
        <div class="countries-grid">
          <div v-for="country in countries" :key="country.name" class="country-card">
            <div class="country-flag">{{ country.flag }}</div>
            <div class="country-name">{{ i18n.t('home.countries.' + country.name) }}</div>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2 class="cta-title">{{ i18n.t('home.cta.title') }}</h2>
          <p class="cta-description">{{ i18n.t('home.cta.description') }}</p>
          <div class="cta-actions">
            <router-link to="/contact-us" class="btn btn-primary btn-lg">{{ i18n.t('home.cta.getStarted') }}</router-link>
            <router-link to="/for-employers" class="btn btn-secondary btn-lg">{{ i18n.t('home.cta.learnMore') }}</router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted, inject } from 'vue'

const i18n = inject('i18n')

const countries = [
  { name: 'United States', flag: 'US' },
  { name: 'United Kingdom', flag: 'UK' },
  { name: 'Ireland', flag: 'IE' },
  { name: 'Australia', flag: 'AU' },
  { name: 'New Zealand', flag: 'NZ' },
  { name: 'Canada', flag: 'CA' },
  { name: 'Singapore', flag: 'SG' }
]

onMounted(() => {
  setTimeout(() => {
    const routesToPrefetch = [
      '../views/AboutUs.vue',
      '../views/Services.vue',
      '../views/WhyChooseUs.vue',
      '../views/TalentPool.vue',
      '../views/ForEmployers.vue',
      '../views/ContactUs.vue'
    ]
    
    routesToPrefetch.forEach((route, index) => {
      setTimeout(() => {
        try {
          import(route)
        } catch (e) {
          console.warn('Prefetch failed for:', route)
        }
      }, index * 300)
    })
  }, 1000)
})
</script>

<style scoped>
.home-page {
  padding-top: 80px;
}

.hero-banner {
  background-color: var(--color-page-bg);
  color: var(--color-text-primary);
  padding: 160px 0 140px;
  position: relative;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
}

.hero-bg-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: opacity(0.2);
}

.hero-decoration {
  position: absolute;
  top: -200px;
  right: -100px;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(30, 58, 95, 0.1) 0%, transparent 70%);
  border-radius: 50%;
  pointer-events: none;
}

.hero-decoration-2 {
  top: 200px;
  left: -150px;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(49, 130, 206, 0.08) 0%, transparent 70%);
}

.hero-content {
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 1;
}

.hero-tag {
  display: inline-block;
  padding: 8px 24px;
  margin-bottom: 24px;
  font-size: var(--text-sm);
  font-weight: var(--font-semibold);
  color: var(--color-primary);
  background-color: var(--color-primary-50);
  border-radius: var(--radius-full);
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.hero-title {
  font-family: var(--font-family-display);
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: var(--font-bold);
  margin-bottom: 32px;
  line-height: 1.15;
  letter-spacing: -0.02em;
}

.text-primary {
  color: var(--color-primary);
}

.hero-subtitle {
  font-size: var(--text-lg);
  line-height: 1.8;
  margin-bottom: 40px;
  color: var(--color-text-secondary);
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.hero-actions {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 40px;
}

.btn-hero-primary {
  background: linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%);
  color: white;
  border: none;
  padding: 18px 40px;
  font-size: 1.125rem;
  font-weight: 600;
  border-radius: var(--radius-xl);
  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(37, 99, 235, 0.35);
  transform: translateY(0);
}

.btn-hero-primary:hover {
  background: linear-gradient(135deg, #1D4ED8 0%, #1E40AF 100%);
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(37, 99, 235, 0.45);
}

.btn-hero-primary:active {
  transform: translateY(0);
}

.btn-hero-secondary {
  background: transparent;
  color: var(--color-text-secondary);
  border: 1.5px solid var(--color-gray-200);
  padding: 18px 32px;
  font-size: 1rem;
  font-weight: 500;
  border-radius: var(--radius-xl);
  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
}

.btn-hero-secondary:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
  background-color: var(--color-primary-50);
}

.hero-scroll-hint {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin-top: 20px;
  color: var(--color-text-muted);
  font-size: var(--text-sm);
}

.scroll-arrow {
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
    opacity: 0.6;
  }
  50% {
    transform: translateY(8px);
    opacity: 1;
  }
}

.hero-stats {
  display: flex;
  justify-content: center;
  gap: 100px;
  margin-top: 80px;
  padding-top: 50px;
  border-top: 1px solid var(--color-gray-100);
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-family: var(--font-family-display);
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: var(--font-bold);
  color: var(--color-primary);
  margin-bottom: 8px;
}

.stat-divider {
  width: 40px;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--color-primary), transparent);
  margin: 12px auto;
}

.stat-label {
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  color: var(--color-text-muted);
  letter-spacing: 0.02em;
}

.core-advantages {
  background: linear-gradient(180deg, var(--color-page-bg) 0%, var(--color-white) 15%);
  padding: 140px 0;
}

.section-header {
  text-align: center;
  max-width: 600px;
  margin: 0 auto 60px;
}

.section-tag {
  display: inline-block;
  padding: 6px 20px;
  margin-bottom: 16px;
  font-size: var(--text-xs);
  font-weight: var(--font-semibold);
  color: var(--color-primary);
  background-color: var(--color-primary-50);
  border-radius: var(--radius-full);
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.section-title {
  font-family: var(--font-family-display);
  font-size: clamp(1.75rem, 3.5vw, 2.5rem);
  font-weight: var(--font-bold);
  margin-bottom: 20px;
  line-height: 1.2;
}

.section-description {
  font-size: var(--text-lg);
  line-height: 1.7;
  color: var(--color-text-secondary);
}

.advantages-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
}

.advantage-card {
  background-color: var(--color-white);
  border-radius: var(--radius-2xl);
  padding: 40px;
  transition: all var(--transition-base);
  border: 1px solid transparent;
}

.advantage-card:hover {
  background-color: var(--color-white);
  border-color: var(--color-gray-100);
  transform: translateY(-8px);
  box-shadow: var(--shadow-xl);
}

.card-image {
  width: 100%;
  height: 180px;
  border-radius: var(--radius-lg);
  overflow: hidden;
  margin-bottom: 20px;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-base);
}

.advantage-card:hover .card-image img {
  transform: scale(1.05);
}

.card-title {
  font-family: var(--font-family-display);
  font-size: var(--text-xl);
  font-weight: var(--font-semibold);
  margin-bottom: 16px;
  color: var(--color-text-primary);
}

.card-description {
  font-size: var(--text-base);
  line-height: 1.75;
  color: var(--color-text-secondary);
}

.service-coverage {
  background-color: var(--color-white);
  padding: 140px 0;
}

.countries-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 20px;
}

.country-card {
  background-color: var(--color-white);
  border-radius: var(--radius-xl);
  padding: 32px 24px;
  text-align: center;
  transition: all var(--transition-base);
  border: 1px solid var(--color-gray-100);
}

.country-card:hover {
  background-color: var(--color-primary);
  color: white;
  border-color: var(--color-primary);
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.country-flag {
  font-size: 2.25rem;
  margin-bottom: 14px;
}

.country-name {
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  color: var(--color-text-secondary);
}

.country-card:hover .country-name {
  color: white;
}

.cta-section {
  background: linear-gradient(180deg, var(--color-white) 0%, var(--color-page-bg) 100%);
  padding: 140px 0;
}

.cta-content {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.cta-title {
  font-family: var(--font-family-display);
  font-size: clamp(1.75rem, 3.5vw, 2.75rem);
  font-weight: var(--font-bold);
  margin-bottom: 24px;
  line-height: 1.25;
}

.cta-description {
  font-size: var(--text-lg);
  line-height: 1.7;
  color: var(--color-text-secondary);
  margin-bottom: 40px;
}

.cta-actions {
  display: flex;
  gap: 24px;
  justify-content: center;
  flex-wrap: wrap;
}

@media (max-width: 1024px) {
  .advantages-grid {
    grid-template-columns: 1fr;
  }
  
  .countries-grid {
    grid-template-columns: repeat(4, 1fr);
  }
  
  .hero-stats {
    gap: 60px;
  }
}

@media (max-width: 768px) {
  .hero-banner {
    padding: 100px 0 80px;
  }
  
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-subtitle {
    font-size: var(--text-base);
  }
  
  .hero-stats {
    gap: 40px;
    margin-top: 50px;
  }
  
  .stat-number {
    font-size: 1.75rem;
  }
  
  .core-advantages,
  .service-coverage,
  .cta-section {
    padding: 80px 0;
  }
  
  .countries-grid {
    grid-template-columns: repeat(3, 1fr);
  }
  
  .country-card {
    padding: 24px 16px;
  }
  
  .advantage-card {
    padding: 28px;
  }
  
  .cta-title {
    font-size: 1.75rem;
  }
}

@media (max-width: 480px) {
  .countries-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .hero-stats {
    flex-direction: column;
    gap: 32px;
  }
  
  .stat-divider {
    display: none;
  }
}
</style>
