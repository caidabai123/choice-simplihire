<template>
  <div class="talent-pool-page">
    <section class="page-header">
      <div class="container">
        <div class="page-tag">{{ i18n.t('talentPool.header.tag') }}</div>
        <h1>{{ i18n.t('talentPool.header.title') }}</h1>
        <p>{{ i18n.t('talentPool.header.subtitle') }}</p>
      </div>
    </section>

    <section class="talent-overview">
      <div class="container">
        <div class="section-header">
          <div class="section-tag">{{ i18n.t('talentPool.overview.tag') }}</div>
          <h2>{{ i18n.t('talentPool.overview.title') }}</h2>
          <p>{{ i18n.t('talentPool.overview.subtitle') }}</p>
        </div>
        <div class="overview-content">
          <p>{{ i18n.t('talentPool.overview.content') }}</p>
        </div>
      </div>
    </section>

    <section class="talent-source">
      <div class="container">
        <div class="section-header">
          <div class="section-tag">{{ i18n.t('talentPool.source.tag') }}</div>
          <h2>{{ i18n.t('talentPool.source.title') }}</h2>
          <p>{{ i18n.t('talentPool.source.subtitle') }}</p>
        </div>
        <div class="source-content">
          <p>{{ i18n.t('talentPool.source.content') }}</p>
          <div class="talent-types">
            <div class="type-item">
              <div class="type-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <span>{{ i18n.t('talentPool.source.type1') }}</span>
            </div>
            <div class="type-item">
              <div class="type-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <span>{{ i18n.t('talentPool.source.type2') }}</span>
            </div>
            <div class="type-item">
              <div class="type-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <span>{{ i18n.t('talentPool.source.type3') }}</span>
            </div>
            <div class="type-item">
              <div class="type-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <span>{{ i18n.t('talentPool.source.type4') }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="screening-standards">
      <div class="container">
        <div class="section-header">
          <div class="section-tag">{{ i18n.t('talentPool.screening.tag') }}</div>
          <h2>{{ i18n.t('talentPool.screening.title') }}</h2>
          <p>{{ i18n.t('talentPool.screening.subtitle') }}</p>
        </div>
        <div class="screening-content">
          <p>{{ i18n.t('talentPool.screening.content') }}</p>
          <div class="screening-steps">
            <div class="screening-step">
              <div class="step-icon-wrap">
                <div class="step-icon">1</div>
              </div>
              <h3>{{ i18n.t('talentPool.screening.step1') }}</h3>
              <p>{{ i18n.t('talentPool.screening.step1Desc') }}</p>
            </div>
            <div class="screening-step">
              <div class="step-icon-wrap">
                <div class="step-icon">2</div>
              </div>
              <h3>{{ i18n.t('talentPool.screening.step2') }}</h3>
              <p>{{ i18n.t('talentPool.screening.step2Desc') }}</p>
            </div>
            <div class="screening-step">
              <div class="step-icon-wrap">
                <div class="step-icon">3</div>
              </div>
              <h3>{{ i18n.t('talentPool.screening.step3') }}</h3>
              <p>{{ i18n.t('talentPool.screening.step3Desc') }}</p>
            </div>
            <div class="screening-step">
              <div class="step-icon-wrap">
                <div class="step-icon">4</div>
              </div>
              <h3>{{ i18n.t('talentPool.screening.step4') }}</h3>
              <p>{{ i18n.t('talentPool.screening.step4Desc') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="talent-advantage">
      <div class="container">
        <div class="section-header">
          <div class="section-tag">{{ i18n.t('talentPool.advantage.tag') }}</div>
          <h2>{{ i18n.t('talentPool.advantage.title') }}</h2>
          <p>{{ i18n.t('talentPool.advantage.subtitle') }}</p>
        </div>
        <div class="advantage-content">
          <p>{{ i18n.t('talentPool.advantage.content') }}</p>
          <div class="advantages-grid">
            <div class="advantage-item">
              <div class="advantage-icon-wrap">
                <div class="advantage-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
              </div>
              <h3>{{ i18n.t('talentPool.advantage.item1') }}</h3>
              <p>{{ i18n.t('talentPool.advantage.item1Desc') }}</p>
            </div>
            <div class="advantage-item">
              <div class="advantage-icon-wrap">
                <div class="advantage-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <h3>{{ i18n.t('talentPool.advantage.item2') }}</h3>
              <p>{{ i18n.t('talentPool.advantage.item2Desc') }}</p>
            </div>
            <div class="advantage-item">
              <div class="advantage-icon-wrap">
                <div class="advantage-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h3>{{ i18n.t('talentPool.advantage.item3') }}</h3>
              <p>{{ i18n.t('talentPool.advantage.item3Desc') }}</p>
            </div>
            <div class="advantage-item">
              <div class="advantage-icon-wrap">
                <div class="advantage-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h3>{{ i18n.t('talentPool.advantage.item4') }}</h3>
              <p>{{ i18n.t('talentPool.advantage.item4Desc') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>{{ i18n.t('talentPool.cta.title') }}</h2>
          <p>{{ i18n.t('talentPool.cta.subtitle') }}</p>
          <div class="cta-actions">
            <router-link to="/contact-us" class="btn btn-primary btn-lg">{{ i18n.t('talentPool.cta.startSearch') }}</router-link>
            <router-link to="/for-employers" class="btn btn-secondary btn-lg">{{ i18n.t('talentPool.cta.forEmployers') }}</router-link>
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
.talent-pool-page {
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

.talent-overview {
  background: linear-gradient(180deg, var(--color-page-bg) 0%, var(--color-white) 15%);
  padding: 120px 0;
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

.overview-content {
  max-width: 900px;
  margin: 0 auto;
}

.overview-content p {
  font-size: var(--text-lg);
  color: var(--color-text-secondary);
  line-height: 1.8;
}

.talent-source {
  background-color: var(--color-white);
  padding: 120px 0;
}

.source-content {
  max-width: 900px;
  margin: 0 auto;
}

.source-content p {
  font-size: var(--text-lg);
  color: var(--color-text-secondary);
  line-height: 1.8;
  margin-bottom: 40px;
}

.talent-types {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.type-item {
  background-color: var(--color-white);
  border-radius: var(--radius-xl);
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  transition: all var(--transition-base);
  border: 1px solid var(--color-gray-100);
}

.type-item:hover {
  background-color: var(--color-primary);
  color: white;
  border-color: var(--color-primary);
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.type-icon {
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

.type-icon svg {
  width: 24px;
  height: 24px;
}

.type-item:hover .type-icon {
  background-color: var(--color-white);
  color: var(--color-primary);
}

.type-item span {
  font-weight: var(--font-medium);
  color: var(--color-text-primary);
}

.type-item:hover span {
  color: white;
}

.screening-standards {
  background-color: var(--color-white);
  padding: 120px 0;
}

.screening-content {
  max-width: 900px;
  margin: 0 auto;
}

.screening-content > p {
  font-size: var(--text-lg);
  color: var(--color-text-secondary);
  line-height: 1.8;
  margin-bottom: 48px;
}

.screening-steps {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.screening-step {
  background-color: var(--color-white);
  border-radius: var(--radius-xl);
  padding: 32px 24px;
  text-align: center;
  transition: all var(--transition-base);
  border: 1px solid transparent;
}

.screening-step:hover {
  background-color: var(--color-white);
  border-color: var(--color-gray-100);
  transform: translateY(-8px);
  box-shadow: var(--shadow-xl);
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

.screening-step h3 {
  font-family: var(--font-family-display);
  font-size: var(--text-base);
  font-weight: var(--font-semibold);
  color: var(--color-text-primary);
  margin-bottom: 10px;
}

.screening-step p {
  color: var(--color-text-secondary);
  font-size: var(--text-sm);
  line-height: 1.6;
}

.talent-advantage {
  background-color: var(--color-white);
  padding: 120px 0;
}

.advantage-content {
  max-width: 900px;
  margin: 0 auto;
}

.advantage-content > p {
  font-size: var(--text-lg);
  color: var(--color-text-secondary);
  line-height: 1.8;
  margin-bottom: 48px;
}

.advantages-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.advantage-item {
  background-color: var(--color-white);
  border-radius: var(--radius-xl);
  padding: 32px 24px;
  text-align: center;
  transition: all var(--transition-base);
  border: 1px solid var(--color-gray-100);
}

.advantage-item:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-xl);
}

.advantage-icon-wrap {
  margin-bottom: 20px;
}

.advantage-icon {
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%);
  border-radius: var(--radius-xl);
  color: white;
  box-shadow: var(--shadow-md);
  margin: 0 auto;
}

.advantage-icon svg {
  width: 24px;
  height: 24px;
}

.advantage-item h3 {
  font-family: var(--font-family-display);
  font-size: var(--text-base);
  font-weight: var(--font-semibold);
  color: var(--color-text-primary);
  margin-bottom: 10px;
}

.advantage-item p {
  color: var(--color-text-secondary);
  font-size: var(--text-sm);
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
  .talent-types,
  .screening-steps,
  .advantages-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .page-header {
    padding: 80px 0 60px;
  }

  .talent-overview,
  .talent-source,
  .screening-standards,
  .talent-advantage,
  .cta-section {
    padding: 80px 0;
  }

  .page-header h1 {
    font-size: 1.75rem;
  }

  .talent-types,
  .screening-steps,
  .advantages-grid {
    grid-template-columns: 1fr;
  }

  .type-item,
  .screening-step,
  .advantage-item {
    padding: 24px;
  }

  .cta-content h2 {
    font-size: 1.75rem;
  }
}
</style>
