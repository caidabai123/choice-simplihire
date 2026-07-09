<template>
  <div class="about-us-page">
    <section class="page-header">
      <div class="container">
        <div class="page-tag">{{ i18n.t('about.header.tag') }}</div>
        <h1>{{ i18n.t('about.header.title') }}</h1>
        <p>{{ i18n.t('about.header.subtitle') }}</p>
      </div>
    </section>

    <section class="company-intro">
      <div class="container">
        <div class="section-header">
          <div class="section-tag">{{ i18n.t('about.company.tag') }}</div>
          <h2>{{ i18n.t('about.company.title') }}</h2>
        </div>
        <div class="intro-content">
          <div class="intro-text">
            <p>{{ i18n.t('about.company.content1') }}</p>
            <p>{{ i18n.t('about.company.content2') }}</p>
            <p>{{ i18n.t('about.company.content3') }}</p>
          </div>
          <div class="intro-image">
            <div class="image-card">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div class="address-badge">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{{ i18n.t('about.company.address') }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="mission-vision">
      <div class="container">
        <div class="section-header">
          <div class="section-tag">{{ i18n.t('about.missionVision.tag') }}</div>
          <h2>{{ i18n.t('about.missionVision.title') }}</h2>
        </div>
        <div class="mv-grid">
          <div class="mv-card mission-card">
            <div class="card-icon-wrap">
              <div class="card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
            </div>
            <h3>{{ i18n.t('about.missionVision.missionTitle') }}</h3>
            <p>{{ i18n.t('about.missionVision.missionContent') }}</p>
          </div>
          <div class="mv-card vision-card">
            <div class="card-icon-wrap">
              <div class="card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
            </div>
            <h3>{{ i18n.t('about.missionVision.visionTitle') }}</h3>
            <p>{{ i18n.t('about.missionVision.visionContent') }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="core-values">
      <div class="container">
        <div class="section-header">
          <div class="section-tag">{{ i18n.t('about.values.tag') }}</div>
          <h2>{{ i18n.t('about.values.title') }}</h2>
          <p>{{ i18n.t('about.values.subtitle') }}</p>
        </div>
        <div class="values-grid">
          <div class="value-card">
            <div class="value-icon-wrap">
              <div class="value-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
            </div>
            <h3>{{ i18n.t('about.values.value1') }}</h3>
            <p>{{ i18n.t('about.values.value1Desc') }}</p>
          </div>
          <div class="value-card">
            <div class="value-icon-wrap">
              <div class="value-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
            </div>
            <h3>{{ i18n.t('about.values.value2') }}</h3>
            <p>{{ i18n.t('about.values.value2Desc') }}</p>
          </div>
          <div class="value-card">
            <div class="value-icon-wrap">
              <div class="value-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
            </div>
            <h3>{{ i18n.t('about.values.value3') }}</h3>
            <p>{{ i18n.t('about.values.value3Desc') }}</p>
          </div>
          <div class="value-card">
            <div class="value-icon-wrap">
              <div class="value-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
            </div>
            <h3>{{ i18n.t('about.values.value4') }}</h3>
            <p>{{ i18n.t('about.values.value4Desc') }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="service-regions">
      <div class="container">
        <div class="section-header">
          <div class="section-tag">{{ i18n.t('about.regions.tag') }}</div>
          <h2>{{ i18n.t('about.regions.title') }}</h2>
          <p>{{ i18n.t('about.regions.subtitle') }}</p>
        </div>
        <div class="regions-grid">
          <div v-for="region in regions" :key="region.name" class="region-card">
            <div class="region-flag">{{ region.flag }}</div>
            <div class="region-name">{{ i18n.t('home.countries.' + region.name) }}</div>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>{{ i18n.t('about.cta.title') }}</h2>
          <p>{{ i18n.t('about.cta.subtitle') }}</p>
          <div class="cta-buttons">
            <router-link to="/contact-us" class="btn btn-primary">{{ i18n.t('about.cta.contact') }}</router-link>
            <router-link to="/services" class="btn btn-outline">{{ i18n.t('about.cta.learnMore') }}</router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { inject } from 'vue'

const i18n = inject('i18n')

const regions = [
  { name: 'United States', flag: 'US' },
  { name: 'United Kingdom', flag: 'UK' },
  { name: 'Ireland', flag: 'IE' },
  { name: 'Australia', flag: 'AU' },
  { name: 'New Zealand', flag: 'NZ' },
  { name: 'Canada', flag: 'CA' },
  { name: 'Singapore', flag: 'SG' }
]
</script>

<style scoped>
.about-us-page {
  padding-top: 80px;
}

.page-header {
  background-color: var(--color-page-bg);
  color: var(--color-text-primary);
  padding: 100px 0 80px;
  border-bottom: 1px solid var(--color-gray-100);
  text-align: center;
}

.page-tag {
  display: inline-block;
  padding: 8px 20px;
  margin-bottom: 16px;
  font-size: var(--text-xs);
  font-weight: var(--font-semibold);
  color: var(--color-primary);
  background-color: var(--color-primary-50);
  border-radius: var(--radius-full);
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.page-header h1 {
  font-family: var(--font-family-display);
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: var(--font-bold);
  margin-bottom: 20px;
  line-height: 1.2;
}

.page-header p {
  font-size: var(--text-lg);
  color: var(--color-text-secondary);
  max-width: 600px;
  margin: 0 auto;
}

.company-intro {
  padding: 120px 0;
  background: linear-gradient(180deg, var(--color-page-bg) 0%, var(--color-white) 15%);
}

.section-header {
  text-align: center;
  max-width: 600px;
  margin: 0 auto 60px;
}

.section-tag {
  display: inline-block;
  padding: 6px 16px;
  margin-bottom: 14px;
  font-size: var(--text-xs);
  font-weight: var(--font-semibold);
  color: var(--color-primary);
  background-color: var(--color-primary-50);
  border-radius: var(--radius-full);
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.section-header h2 {
  font-family: var(--font-family-display);
  font-size: clamp(1.75rem, 3.5vw, 2.5rem);
  font-weight: var(--font-bold);
  margin-bottom: 16px;
  line-height: 1.2;
}

.section-header p {
  font-size: var(--text-lg);
  color: var(--color-text-secondary);
  line-height: 1.7;
}

.intro-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 60px;
  align-items: flex-start;
}

.intro-text p {
  font-size: var(--text-lg);
  color: var(--color-text-secondary);
  line-height: 1.8;
  margin-bottom: 24px;
}

.intro-text p:last-child {
  margin-bottom: 0;
}

.intro-image {
  display: flex;
  justify-content: center;
}

.image-card {
  background-color: var(--color-white);
  border-radius: var(--radius-2xl);
  width: 100%;
  max-width: 380px;
  height: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  color: var(--color-primary);
  padding: 40px;
}

.address-badge {
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: var(--color-primary);
  color: white;
  padding: 14px 24px;
  border-radius: var(--radius-lg);
  font-size: 0.75rem;
  margin-top: 24px;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
}

.mission-vision {
  padding: 120px 0;
  background-color: var(--color-white);
}

.mv-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
}

.mv-card {
  background-color: var(--color-white);
  border-radius: var(--radius-2xl);
  padding: 48px;
  transition: all var(--transition-base);
  border: 1px solid var(--color-gray-100);
}

.mv-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-xl);
}

.card-icon-wrap {
  margin-bottom: 28px;
}

.card-icon {
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%);
  border-radius: var(--radius-xl);
  color: white;
  box-shadow: var(--shadow-md);
}

.card-icon svg {
  width: 24px;
  height: 24px;
}

.mv-card h3 {
  font-family: var(--font-family-display);
  font-size: var(--text-xl);
  font-weight: var(--font-semibold);
  margin-bottom: 20px;
  color: var(--color-text-primary);
}

.mv-card p {
  font-size: var(--text-base);
  color: var(--color-text-secondary);
  line-height: 1.8;
}

.core-values {
  padding: 120px 0;
  background-color: var(--color-white);
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
}

.value-card {
  background-color: var(--color-white);
  border-radius: var(--radius-2xl);
  padding: 40px;
  transition: all var(--transition-base);
  border: 1px solid transparent;
}

.value-card:hover {
  background-color: var(--color-white);
  border-color: var(--color-gray-100);
  transform: translateY(-8px);
  box-shadow: var(--shadow-xl);
}

.value-icon-wrap {
  margin-bottom: 24px;
}

.value-icon {
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%);
  border-radius: var(--radius-xl);
  color: white;
  box-shadow: var(--shadow-md);
}

.value-icon svg {
  width: 24px;
  height: 24px;
}

.value-card h3 {
  font-family: var(--font-family-display);
  font-size: var(--text-lg);
  font-weight: var(--font-semibold);
  margin-bottom: 16px;
  color: var(--color-text-primary);
}

.value-card p {
  font-size: var(--text-base);
  color: var(--color-text-secondary);
  line-height: 1.75;
}

.service-regions {
  padding: 120px 0;
  background-color: var(--color-white);
}

.regions-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 20px;
}

.region-card {
  background-color: var(--color-white);
  border-radius: var(--radius-xl);
  padding: 32px 20px;
  text-align: center;
  transition: all var(--transition-base);
  border: 1px solid var(--color-gray-100);
}

.region-card:hover {
  background-color: var(--color-primary);
  color: white;
  border-color: var(--color-primary);
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.region-flag {
  font-size: 2.25rem;
  margin-bottom: 12px;
  font-weight: 700;
  color: var(--color-primary);
}

.region-card:hover .region-flag {
  color: white;
}

.region-name {
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  color: var(--color-text-secondary);
}

.region-card:hover .region-name {
  color: white;
}

.cta-section {
  background: linear-gradient(180deg, var(--color-white) 0%, var(--color-page-bg) 100%);
  padding: 120px 0;
}

.cta-content {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.cta-content h2 {
  font-family: var(--font-family-display);
  font-size: clamp(1.75rem, 3.5vw, 2.75rem);
  font-weight: var(--font-bold);
  margin-bottom: 20px;
  line-height: 1.25;
}

.cta-content p {
  font-size: var(--text-lg);
  color: var(--color-text-secondary);
  margin-bottom: 40px;
}

.cta-buttons {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

@media (max-width: 1024px) {
  .intro-content {
    grid-template-columns: 1fr;
    gap: 48px;
  }
  
  .mv-grid {
    grid-template-columns: 1fr;
  }
  
  .values-grid {
    grid-template-columns: 1fr;
  }
  
  .regions-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (max-width: 768px) {
  .page-header {
    padding: 80px 0 60px;
  }
  
  .company-intro,
  .mission-vision,
  .core-values,
  .service-regions {
    padding: 80px 0;
  }
  
  .page-header h1 {
    font-size: 1.75rem;
  }
  
  .image-card {
    height: 280px;
    padding: 32px;
  }
  
  .mv-card {
    padding: 32px;
  }
  
  .value-card {
    padding: 28px;
  }
  
  .regions-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 480px) {
  .regions-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .region-card {
    padding: 24px 16px;
  }
  
  .region-flag {
    font-size: 1.75rem;
  }
}
</style>
