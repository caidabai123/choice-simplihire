<template>
  <div class="why-choose-us-page">
    <section class="page-header">
      <div class="container">
        <div class="page-tag">{{ i18n.t('whyChoose.header.tag') }}</div>
        <h1>{{ i18n.t('whyChoose.header.title') }}</h1>
        <p>{{ i18n.t('whyChoose.header.subtitle') }}</p>
      </div>
    </section>

    <section class="reasons-list">
      <div class="container">
        <div class="section-header">
          <div class="section-tag">{{ i18n.t('whyChoose.reasons.tag') }}</div>
          <h2>{{ i18n.t('whyChoose.reasons.title') }}</h2>
          <p>{{ i18n.t('whyChoose.reasons.subtitle') }}</p>
        </div>
        <div class="reasons-grid">
          <div class="reason-card">
            <div class="card-image">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=350&h=200&fit=crop" alt="Deep Industry">
            </div>
            <h3 class="reason-title">{{ i18n.t('whyChoose.reasons.reason1') }}</h3>
            <p class="reason-description">{{ i18n.t('whyChoose.reasons.reason1Desc') }}</p>
          </div>

          <div class="reason-card">
            <div class="card-image">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=350&h=200&fit=crop" alt="Talent Network">
            </div>
            <h3 class="reason-title">{{ i18n.t('whyChoose.reasons.reason2') }}</h3>
            <p class="reason-description">{{ i18n.t('whyChoose.reasons.reason2Desc') }}</p>
          </div>

          <div class="reason-card">
            <div class="card-image">
              <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=350&h=200&fit=crop" alt="Quality">
            </div>
            <h3 class="reason-title">{{ i18n.t('whyChoose.reasons.reason3') }}</h3>
            <p class="reason-description">{{ i18n.t('whyChoose.reasons.reason3Desc') }}</p>
          </div>

          <div class="reason-card">
            <div class="card-image">
              <img src="https://images.unsplash.com/photo-1543286386-713bdd548da4?w=350&h=200&fit=crop" alt="Speed">
            </div>
            <h3 class="reason-title">{{ i18n.t('whyChoose.reasons.reason4') }}</h3>
            <p class="reason-description">{{ i18n.t('whyChoose.reasons.reason4Desc') }}</p>
          </div>

          <div class="reason-card">
            <div class="card-image">
              <img src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=350&h=200&fit=crop" alt="Transparent">
            </div>
            <h3 class="reason-title">{{ i18n.t('whyChoose.reasons.reason5') }}</h3>
            <p class="reason-description">{{ i18n.t('whyChoose.reasons.reason5Desc') }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>{{ i18n.t('whyChoose.cta.title') }}</h2>
          <p>{{ i18n.t('whyChoose.cta.subtitle') }}</p>
          <div class="cta-actions">
            <router-link to="/contact-us" class="btn btn-primary btn-lg">{{ i18n.t('whyChoose.cta.contact') }}</router-link>
            <router-link to="/services" class="btn btn-secondary btn-lg">{{ i18n.t('whyChoose.cta.services') }}</router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { inject } from 'vue'

const i18n = inject('i18n')
</script>

<style scoped>
.why-choose-us-page {
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

.reasons-list {
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

.reasons-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}

.reason-card {
  background-color: var(--color-white);
  border-radius: var(--radius-2xl);
  padding: 40px;
  transition: all var(--transition-base);
  border: 1px solid transparent;
}

.reason-card:hover {
  background-color: var(--color-white);
  border-color: var(--color-gray-100);
  transform: translateY(-8px);
  box-shadow: var(--shadow-xl);
}

.reason-card .card-image {
  width: 100%;
  height: 160px;
  border-radius: var(--radius-lg);
  overflow: hidden;
  margin-bottom: 20px;
}

.reason-card .card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-base);
}

.reason-card:hover .card-image img {
  transform: scale(1.05);
}

.reason-title {
  font-family: var(--font-family-display);
  font-size: var(--text-lg);
  font-weight: var(--font-semibold);
  color: var(--color-text-primary);
  margin-bottom: 16px;
}

.reason-description {
  font-size: var(--text-base);
  color: var(--color-text-secondary);
  line-height: 1.75;
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

.cta-actions {
  display: flex;
  gap: 24px;
  justify-content: center;
  flex-wrap: wrap;
}

@media (max-width: 1024px) {
  .reasons-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .page-header {
    padding: 80px 0 60px;
  }

  .reasons-list,
  .cta-section {
    padding: 80px 0;
  }

  .page-header h1 {
    font-size: 1.75rem;
  }

  .reasons-grid {
    grid-template-columns: 1fr;
  }

  .reason-card {
    padding: 28px;
  }

  .cta-content h2 {
    font-size: 1.75rem;
  }
}
</style>
