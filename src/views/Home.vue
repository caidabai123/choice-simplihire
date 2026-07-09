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
            <router-link to="/contact-us" class="btn btn-primary btn-lg">{{ i18n.t('home.hero.cta') }}</router-link>
            <router-link to="/services" class="btn btn-secondary btn-lg">{{ i18n.t('home.hero.learnMore') }}</router-link>
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

    <section class="team-showcase">
      <div class="container">
        <div class="showcase-content">
          <div class="showcase-text">
            <div class="section-tag">{{ i18n.t('home.team.tag') }}</div>
            <h2 class="showcase-title">{{ i18n.t('home.team.title') }}</h2>
            <p class="showcase-description">{{ i18n.t('home.team.description') }}</p>
            <div class="showcase-highlights">
              <div class="highlight-item">
                <div class="highlight-number">100+</div>
                <div class="highlight-text">{{ i18n.t('home.team.highlight1') }}</div>
              </div>
              <div class="highlight-item">
                <div class="highlight-number">50+</div>
                <div class="highlight-text">{{ i18n.t('home.team.highlight2') }}</div>
              </div>
            </div>
          </div>
          <div class="showcase-images">
            <div class="image-grid">
              <div class="image-item image-item-1">
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=800&fit=crop&auto=format" alt="Team Collaboration">
              </div>
              <div class="image-item image-item-2">
                <img src="https://images.unsplash.com/photo-1551009175-8a6597d642ba?w=600&h=400&fit=crop&auto=format" alt="Professional Woman">
              </div>
              <div class="image-item image-item-3">
                <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop&auto=format" alt="Team Celebration">
              </div>
            </div>
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
            <h3 class="card-title">{{ i18n.t('home.advantages.card1') }}</h3>
            <p class="card-description">{{ i18n.t('home.advantages.card1Desc') }}</p>
          </div>
          <div class="advantage-card">
            <h3 class="card-title">{{ i18n.t('home.advantages.card2') }}</h3>
            <p class="card-description">{{ i18n.t('home.advantages.card2Desc') }}</p>
          </div>
          <div class="advantage-card">
            <h3 class="card-title">{{ i18n.t('home.advantages.card3') }}</h3>
            <p class="card-description">{{ i18n.t('home.advantages.card3Desc') }}</p>
          </div>
          <div class="advantage-card">
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
  padding: 180px 0 160px;
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
  filter: opacity(0.15);
}

.hero-decoration {
  position: absolute;
  top: -250px;
  right: -150px;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(107, 127, 215, 0.15) 0%, transparent 70%);
  border-radius: 50%;
  pointer-events: none;
}

.hero-decoration-2 {
  top: 250px;
  left: -200px;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(139, 156, 237, 0.12) 0%, transparent 70%);
}

.hero-content {
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 1;
}

.hero-tag {
  display: inline-block;
  padding: 10px 30px;
  margin-bottom: 32px;
  font-size: var(--text-sm);
  font-weight: 700;
  color: var(--color-primary);
  background-color: rgba(107, 127, 215, 0.06);
  border-radius: var(--radius-full);
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.hero-title {
  font-family: var(--font-family-display);
  font-size: clamp(3rem, 6vw, 5rem);
  font-weight: 800;
  margin-bottom: 40px;
  line-height: 1.05;
  letter-spacing: -0.03em;
  color: var(--color-text-primary);
}

.text-primary {
  color: var(--color-primary);
}

.hero-subtitle {
  font-size: 1.25rem;
  line-height: 1.9;
  margin-bottom: 56px;
  color: rgba(26, 32, 44, 0.7);
  max-width: 750px;
  margin-left: auto;
  margin-right: auto;
}

.hero-actions {
  display: flex;
  gap: 32px;
  justify-content: center;
  flex-wrap: wrap;
}

.hero-stats {
  display: flex;
  justify-content: center;
  gap: 120px;
  margin-top: 100px;
  padding-top: 60px;
  border-top: 1px solid rgba(107, 127, 215, 0.1);
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-family: var(--font-family-display);
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 800;
  color: var(--color-primary);
  margin-bottom: 12px;
  letter-spacing: -0.02em;
}

.stat-divider {
  width: 50px;
  height: 3px;
  background: linear-gradient(90deg, transparent, var(--color-primary), transparent);
  margin: 16px auto;
}

.stat-label {
  font-size: var(--text-sm);
  font-weight: 600;
  color: rgba(74, 85, 104, 0.8);
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.team-showcase {
  background-color: var(--color-white);
  padding: 160px 0;
}

.showcase-content {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 80px;
  align-items: center;
}

.showcase-text {
  padding-right: 40px;
}

.showcase-title {
  font-family: var(--font-family-display);
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  margin-bottom: 24px;
  line-height: 1.15;
  letter-spacing: -0.02em;
}

.showcase-description {
  font-size: 1.125rem;
  line-height: 1.8;
  color: rgba(74, 85, 104, 0.85);
  margin-bottom: 48px;
}

.showcase-highlights {
  display: flex;
  gap: 48px;
}

.highlight-item {
  display: flex;
  flex-direction: column;
}

.highlight-number {
  font-family: var(--font-family-display);
  font-size: clamp(1.75rem, 3vw, 2.5rem);
  font-weight: 800;
  color: var(--color-primary);
  margin-bottom: 8px;
}

.highlight-text {
  font-size: var(--text-sm);
  font-weight: 600;
  color: rgba(74, 85, 104, 0.75);
  letter-spacing: 0.02em;
}

.showcase-images {
  position: relative;
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.image-item {
  overflow: hidden;
  border-radius: var(--radius-2xl);
  box-shadow: var(--shadow-lg);
  transition: transform var(--transition-base), box-shadow var(--transition-base);
}

.image-item:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: var(--shadow-2xl);
}

.image-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.image-item:hover img {
  transform: scale(1.05);
}

.image-item-1 {
  grid-row: span 2;
  height: 400px;
}

.image-item-2 {
  height: 190px;
}

.image-item-3 {
  height: 190px;
}

.core-advantages {
  background: linear-gradient(180deg, var(--color-page-bg) 0%, var(--color-white) 15%);
  padding: 140px 0;
}

.section-header {
  text-align: center;
  max-width: 700px;
  margin: 0 auto 80px;
}

.section-tag {
  display: inline-block;
  padding: 8px 24px;
  margin-bottom: 20px;
  font-size: var(--text-xs);
  font-weight: 700;
  color: var(--color-primary);
  background-color: rgba(107, 127, 215, 0.06);
  border-radius: var(--radius-full);
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.section-title {
  font-family: var(--font-family-display);
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  margin-bottom: 24px;
  line-height: 1.15;
  letter-spacing: -0.02em;
}

.section-description {
  font-size: 1.25rem;
  line-height: 1.8;
  color: rgba(74, 85, 104, 0.8);
}

.advantages-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
}

.advantage-card {
  background-color: var(--color-white);
  border-radius: var(--radius-2xl);
  padding: 48px;
  transition: all var(--transition-base);
  border: 1px solid transparent;
}

.advantage-card:hover {
  background-color: var(--color-white);
  border-color: rgba(107, 127, 215, 0.1);
  transform: translateY(-10px);
  box-shadow: var(--shadow-2xl);
}

.card-title {
  font-family: var(--font-family-display);
  font-size: var(--text-2xl);
  font-weight: 700;
  margin-bottom: 20px;
  color: var(--color-text-primary);
  letter-spacing: -0.01em;
}

.card-description {
  font-size: 1.125rem;
  line-height: 1.85;
  color: rgba(74, 85, 104, 0.75);
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
  font-size: var(--text-base);
  font-weight: 600;
  color: rgba(74, 85, 104, 0.85);
}

.country-card:hover .country-name {
  color: white;
}

.cta-section {
  background: linear-gradient(180deg, var(--color-white) 0%, var(--color-page-bg) 100%);
  padding: 160px 0;
}

.cta-content {
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
}

.cta-title {
  font-family: var(--font-family-display);
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  margin-bottom: 28px;
  line-height: 1.15;
  letter-spacing: -0.02em;
}

.cta-description {
  font-size: 1.25rem;
  line-height: 1.8;
  color: rgba(74, 85, 104, 0.8);
  margin-bottom: 56px;
}

.cta-actions {
  display: flex;
  gap: 32px;
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
  
  .showcase-content {
    grid-template-columns: 1fr;
    gap: 60px;
  }
  
  .showcase-text {
    padding-right: 0;
    text-align: center;
  }
  
  .showcase-highlights {
    justify-content: center;
  }
  
  .image-item-1 {
    height: 300px;
  }
}

@media (max-width: 768px) {
  .hero-banner {
    padding: 100px 0 80px;
  }
  
  .hero-title {
    font-size: 2.25rem;
  }
  
  .hero-subtitle {
    font-size: var(--text-lg);
  }
  
  .hero-stats {
    gap: 40px;
    margin-top: 50px;
  }
  
  .stat-number {
    font-size: 1.75rem;
  }
  
  .team-showcase {
    padding: 80px 0;
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
