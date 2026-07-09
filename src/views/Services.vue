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
              <div class="service-icon-wrap">
                <div class="service-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
              </div>
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
              <div class="service-icon-wrap">
                <div class="service-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
              </div>
              <div class="service-content">
                <h3 class="service-title">{{ i18n.t('services.list.service2') }}</h3>
                <p class="service-description">{{ i18n.t('services.list.service2Desc') }}</p>
              </div>
            </div>
          </div>

          <div class="service-card">
            <div class="service-left">
              <div class="service-icon-wrap">
                <div class="service-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
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
              <div class="service-icon-wrap">
                <div class="service-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
              <div class="service-content">
                <h3 class="service-title">{{ i18n.t('services.list.service4') }}</h3>
                <p class="service-description">{{ i18n.t('services.list.service4Desc') }}</p>
              </div>
            </div>
          </div>

          <div class="service-card">
            <div class="service-left">
              <div class="service-icon-wrap">
                <div class="service-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
              </div>
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
  display: flex;
  gap: 24px;
  align-items: flex-start;
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

.service-icon-wrap {
  margin-bottom: 0;
}

.service-icon {
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%);
  border-radius: var(--radius-xl);
  color: white;
  box-shadow: var(--shadow-md);
  flex-shrink: 0;
}

.service-icon svg {
  width: 24px;
  height: 24px;
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
