<template>
  <div class="services-page">
    <section class="page-header">
      <div class="container">
        <div class="page-tag">{{ i18n.t('services.header.tag') }}</div>
        <h1>{{ i18n.t('services.header.title') }}</h1>
        <p>{{ i18n.t('services.header.subtitle') }}</p>
      </div>
    </section>

    <section class="services-list">
      <div class="container">
        <div class="section-header">
          <div class="section-tag">{{ i18n.t('services.list.tag') }}</div>
          <h2>{{ i18n.t('services.list.title') }}</h2>
        </div>
        <div class="services-grid">
          <div class="service-card">
            <div class="service-left">
              <div class="service-content">
                <h3 class="service-title">{{ i18n.t('services.list.service1') }}</h3>
                <p class="service-description">{{ i18n.t('services.list.service1Desc') }}</p>
              </div>
            </div>
            <div class="service-image">
              <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=300&fit=crop" alt="Global Talent Recruitment">
            </div>
          </div>

          <div class="service-card">
            <div class="service-image">
              <img src="https://images.unsplash.com/photo-1552581234-26160f608093?w=400&h=300&fit=crop" alt="Recruitment Process">
            </div>
            <div class="service-left">
              <div class="service-content">
                <h3 class="service-title">{{ i18n.t('services.list.service2') }}</h3>
                <p class="service-description">{{ i18n.t('services.list.service2Desc') }}</p>
              </div>
            </div>
          </div>

          <div class="service-card">
            <div class="service-left">
              <div class="service-content">
                <h3 class="service-title">{{ i18n.t('services.list.service3') }}</h3>
                <p class="service-description">{{ i18n.t('services.list.service3Desc') }}</p>
              </div>
            </div>
            <div class="service-image">
              <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop" alt="Visa Compliance">
            </div>
          </div>

          <div class="service-card">
            <div class="service-image">
              <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=300&fit=crop" alt="Overseas Onboarding">
            </div>
            <div class="service-left">
              <div class="service-content">
                <h3 class="service-title">{{ i18n.t('services.list.service4') }}</h3>
                <p class="service-description">{{ i18n.t('services.list.service4Desc') }}</p>
              </div>
            </div>
          </div>

          <div class="service-card">
            <div class="service-left">
              <div class="service-content">
                <h3 class="service-title">{{ i18n.t('services.list.service5') }}</h3>
                <p class="service-description">{{ i18n.t('services.list.service5Desc') }}</p>
              </div>
            </div>
            <div class="service-image">
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop" alt="Custom Solutions">
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="service-process">
      <div class="container">
        <div class="section-header">
          <div class="section-tag">{{ i18n.t('services.process.tag') }}</div>
          <h2>{{ i18n.t('services.process.title') }}</h2>
          <p>{{ i18n.t('services.process.subtitle') }}</p>
        </div>
        <div class="process-steps">
          <div class="process-step">
            <div class="step-icon-wrap">
              <div class="step-icon">1</div>
            </div>
            <h3>{{ i18n.t('services.process.step1') }}</h3>
            <p>{{ i18n.t('services.process.step1Desc') }}</p>
          </div>
          <div class="process-step">
            <div class="step-icon-wrap">
              <div class="step-icon">2</div>
            </div>
            <h3>{{ i18n.t('services.process.step2') }}</h3>
            <p>{{ i18n.t('services.process.step2Desc') }}</p>
          </div>
          <div class="process-step">
            <div class="step-icon-wrap">
              <div class="step-icon">3</div>
            </div>
            <h3>{{ i18n.t('services.process.step3') }}</h3>
            <p>{{ i18n.t('services.process.step3Desc') }}</p>
          </div>
          <div class="process-step">
            <div class="step-icon-wrap">
              <div class="step-icon">4</div>
            </div>
            <h3>{{ i18n.t('services.process.step4') }}</h3>
            <p>{{ i18n.t('services.process.step4Desc') }}</p>
          </div>
          <div class="process-step">
            <div class="step-icon-wrap">
              <div class="step-icon">5</div>
            </div>
            <h3>{{ i18n.t('services.process.step5') }}</h3>
            <p>{{ i18n.t('services.process.step5Desc') }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>{{ i18n.t('services.cta.title') }}</h2>
          <p>{{ i18n.t('services.cta.subtitle') }}</p>
          <div class="cta-actions">
            <router-link to="/contact-us" class="btn btn-primary btn-lg">{{ i18n.t('services.cta.getStarted') }}</router-link>
            <router-link to="/for-employers" class="btn btn-secondary btn-lg">{{ i18n.t('services.cta.learnMore') }}</router-link>
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
.services-page {
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

.services-list {
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

.services-grid {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.service-card {
  display: flex;
  gap: 48px;
  background-color: var(--color-white);
  border-radius: var(--radius-2xl);
  padding: 48px;
  transition: all var(--transition-base);
  align-items: center;
  border: 1px solid transparent;
}

.service-card:hover {
  background-color: var(--color-white);
  border-color: var(--color-gray-100);
  box-shadow: var(--shadow-xl);
  transform: translateY(-8px);
}

.service-left {
  flex: 1;
}

.service-image {
  width: 350px;
  height: 250px;
  border-radius: var(--radius-xl);
  overflow: hidden;
  flex-shrink: 0;
}

.service-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.service-content {
  flex: 1;
}

.service-title {
  font-family: var(--font-family-display);
  font-size: var(--text-xl);
  font-weight: var(--font-semibold);
  color: var(--color-text-primary);
  margin-bottom: 16px;
}

.service-description {
  font-size: var(--text-base);
  color: var(--color-text-secondary);
  line-height: 1.8;
}

.service-process {
  background-color: var(--color-white);
  padding: 120px 0;
}

.process-steps {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 24px;
}

.process-step {
  text-align: center;
  background-color: var(--color-white);
  padding: 32px 20px;
  border-radius: var(--radius-xl);
  transition: all var(--transition-base);
  border: 1px solid var(--color-gray-100);
}

.process-step:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
}

.step-icon-wrap {
  margin-bottom: 20px;
}

.step-icon {
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%);
  border-radius: 50%;
  color: white;
  font-size: var(--text-lg);
  font-weight: var(--font-bold);
  margin: 0 auto;
  box-shadow: var(--shadow-md);
}

.process-step h3 {
  font-family: var(--font-family-display);
  font-size: var(--text-base);
  font-weight: var(--font-semibold);
  color: var(--color-text-primary);
  margin-bottom: 10px;
}

.process-step p {
  color: var(--color-text-secondary);
  font-size: var(--text-sm);
  line-height: 1.6;
}

.cta-section {
  background: linear-gradient(180deg, var(--color-white) 0%, var(--color-page-bg) 100%);
  color: var(--color-text-primary);
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
  .service-card {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .service-left {
    flex-direction: column;
    align-items: center;
  }

  .service-image {
    width: 100%;
    max-width: 400px;
    height: auto;
  }

  .process-steps {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .page-header {
    padding: 80px 0 60px;
  }

  .services-list,
  .service-process,
  .cta-section {
    padding: 80px 0;
  }

  .page-header h1 {
    font-size: 1.75rem;
  }

  .service-card {
    padding: 32px;
    gap: 24px;
  }

  .service-image {
    width: 100%;
    height: auto;
  }

  .process-steps {
    grid-template-columns: 1fr;
  }

  .cta-content h2 {
    font-size: 1.75rem;
  }
}
</style>
