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
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=450&fit=crop" alt="Our Office">
              <div class="address-badge">
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
            <h3>{{ i18n.t('about.missionVision.missionTitle') }}</h3>
            <p>{{ i18n.t('about.missionVision.missionContent') }}</p>
          </div>
          <div class="mv-card vision-card">
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
            <h3>{{ i18n.t('about.values.value1') }}</h3>
            <p>{{ i18n.t('about.values.value1Desc') }}</p>
          </div>
          <div class="value-card">
            <h3>{{ i18n.t('about.values.value2') }}</h3>
            <p>{{ i18n.t('about.values.value2Desc') }}</p>
          </div>
          <div class="value-card">
            <h3>{{ i18n.t('about.values.value3') }}</h3>
            <p>{{ i18n.t('about.values.value3Desc') }}</p>
          </div>
          <div class="value-card">
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
  overflow: hidden;
  box-shadow: var(--shadow-lg);
}

.image-card img {
  width: 100%;
  height: 280px;
  object-fit: cover;
}

.address-badge {
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: var(--color-primary);
  color: white;
  padding: 16px 24px;
  font-size: 0.75rem;
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
    max-width: 100%;
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
