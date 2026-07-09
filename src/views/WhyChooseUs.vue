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
            <div class="card-icon-wrap">
              <div class="card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
            </div>
            <h3 class="reason-title">{{ i18n.t('whyChoose.reasons.reason1') }}</h3>
            <p class="reason-description">{{ i18n.t('whyChoose.reasons.reason1Desc') }}</p>
          </div>

          <div class="reason-card">
            <div class="card-icon-wrap">
              <div class="card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
            </div>
            <h3 class="reason-title">{{ i18n.t('whyChoose.reasons.reason2') }}</h3>
            <p class="reason-description">{{ i18n.t('whyChoose.reasons.reason2Desc') }}</p>
          </div>

          <div class="reason-card">
            <div class="card-icon-wrap">
              <div class="card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
            </div>
            <h3 class="reason-title">{{ i18n.t('whyChoose.reasons.reason3') }}</h3>
            <p class="reason-description">{{ i18n.t('whyChoose.reasons.reason3Desc') }}</p>
          </div>

          <div class="reason-card">
            <div class="card-icon-wrap">
              <div class="card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
            </div>
            <h3 class="reason-title">{{ i18n.t('whyChoose.reasons.reason4') }}</h3>
            <p class="reason-description">{{ i18n.t('whyChoose.reasons.reason4Desc') }}</p>
          </div>

          <div class="reason-card">
            <div class="card-icon-wrap">
              <div class="card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
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

.card-icon-wrap {
  margin-bottom: 24px;
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
