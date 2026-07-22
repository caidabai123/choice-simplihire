﻿﻿﻿﻿﻿<template>
  <div class="for-employers-page">
    <section class="page-header">
      <div class="container">
        <div class="page-tag">{{ i18n.t('forEmployers.header.tag') }}</div>
        <h1>{{ i18n.t('forEmployers.header.title') }}</h1>
        <p>{{ i18n.t('forEmployers.header.subtitle') }}</p>
      </div>
    </section>

    <section class="service-concept">
      <div class="container">
        <div class="section-header">
          <div class="section-tag">{{ i18n.t('forEmployers.concept.tag') }}</div>
          <h2>{{ i18n.t('forEmployers.concept.title') }}</h2>
        </div>
        <div class="concept-content">
          <p>{{ i18n.t('forEmployers.concept.content') }}</p>
          <div class="pain-points">
            <div class="pain-item">
              <span>{{ i18n.t('forEmployers.concept.pain1') }}</span>
            </div>
            <div class="pain-item">
              <span>{{ i18n.t('forEmployers.concept.pain2') }}</span>
            </div>
            <div class="pain-item">
              <span>{{ i18n.t('forEmployers.concept.pain3') }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="process-flow">
      <div class="container">
        <div class="section-header">
          <div class="section-tag">{{ i18n.t('forEmployers.process.tag') }}</div>
          <h2>{{ i18n.t('forEmployers.process.title') }}</h2>
          <p>{{ i18n.t('forEmployers.process.subtitle') }}</p>
        </div>
        <div class="process-steps">
          <div class="process-step">
            <div class="step-icon-wrap">
              <div class="step-icon">1</div>
            </div>
            <h3>{{ i18n.t('forEmployers.process.step1') }}</h3>
            <p>{{ i18n.t('forEmployers.process.step1Desc') }}</p>
          </div>
          <div class="process-step">
            <div class="step-icon-wrap">
              <div class="step-icon">2</div>
            </div>
            <h3>{{ i18n.t('forEmployers.process.step2') }}</h3>
            <p>{{ i18n.t('forEmployers.process.step2Desc') }}</p>
          </div>
          <div class="process-step">
            <div class="step-icon-wrap">
              <div class="step-icon">3</div>
            </div>
            <h3>{{ i18n.t('forEmployers.process.step3') }}</h3>
            <p>{{ i18n.t('forEmployers.process.step3Desc') }}</p>
          </div>
          <div class="process-step">
            <div class="step-icon-wrap">
              <div class="step-icon">4</div>
            </div>
            <h3>{{ i18n.t('forEmployers.process.step4') }}</h3>
            <p>{{ i18n.t('forEmployers.process.step4Desc') }}</p>
          </div>
          <div class="process-step">
            <div class="step-icon-wrap">
              <div class="step-icon">5</div>
            </div>
            <h3>{{ i18n.t('forEmployers.process.step5') }}</h3>
            <p>{{ i18n.t('forEmployers.process.step5Desc') }}</p>
          </div>
          <div class="process-step">
            <div class="step-icon-wrap">
              <div class="step-icon">6</div>
            </div>
            <h3>{{ i18n.t('forEmployers.process.step6') }}</h3>
            <p>{{ i18n.t('forEmployers.process.step6Desc') }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="faq-section">
      <div class="container">
        <div class="section-header">
          <div class="section-tag">{{ i18n.t('forEmployers.faq.tag') }}</div>
          <h2>{{ i18n.t('forEmployers.faq.title') }}</h2>
          <p>{{ i18n.t('forEmployers.faq.subtitle') }}</p>
        </div>
        <div class="faq-list">
          <div v-for="index in 4" :key="index" class="faq-item">
            <button class="faq-question" @click="toggleFaq(index - 1)">
              <span class="faq-label">Q{{ index }}</span>
              <span>{{ i18n.t(`forEmployers.faq.q${index}`) }}</span>
              <span class="faq-toggle">{{ activeFaq === index - 1 ? '-' : '+' }}</span>
            </button>
            <div class="faq-answer" :class="{ 'active': activeFaq === index - 1 }">
              <span class="answer-label">A{{ index }}</span>
              <p>{{ i18n.t(`forEmployers.faq.a${index}`) }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>{{ i18n.t('forEmployers.cta.title') }}</h2>
          <p>{{ i18n.t('forEmployers.cta.subtitle') }}</p>
          <div class="cta-actions">
            <router-link to="/contact-us" class="btn btn-primary btn-lg">{{ i18n.t('forEmployers.cta.getStarted') }}</router-link>
            <router-link to="/services" class="btn btn-secondary btn-lg">{{ i18n.t('forEmployers.cta.learnMore') }}</router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, inject } from 'vue'

const i18n = inject('i18n')
const activeFaq = ref(null)

const toggleFaq = (index) => {
  activeFaq.value = activeFaq.value === index ? null : index
}
</script>

<style scoped>
.for-employers-page {
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

.service-concept {
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

.concept-content {
  max-width: 900px;
  margin: 0 auto;
}

.concept-content > p {
  font-size: var(--text-lg);
  color: var(--color-text-secondary);
  line-height: 1.8;
  margin-bottom: 48px;
}

.pain-points {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.pain-item {
  background-color: var(--color-white);
  border-radius: var(--radius-xl);
  padding: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--transition-base);
  border: 1px solid transparent;
}

.pain-item:hover {
  background-color: var(--color-primary);
  color: white;
  border-color: var(--color-primary);
  transform: translateY(-8px);
  box-shadow: var(--shadow-xl);
}



.pain-item span {
  font-weight: var(--font-semibold);
  color: var(--color-text-primary);
  text-align: center;
}

.pain-item:hover span {
  color: white;
}

.process-flow {
  background-color: var(--color-white);
  padding: 120px 0;
}

.process-steps {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.process-step {
  background-color: var(--color-white);
  border-radius: var(--radius-xl);
  padding: 40px 32px;
  text-align: center;
  transition: all var(--transition-base);
  border: 1px solid var(--color-gray-100);
}

.process-step:hover {
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

.faq-section {
  background-color: var(--color-white);
  padding: 120px 0;
}

.faq-list {
  max-width: 800px;
  margin: 0 auto;
}

.faq-item {
  background-color: var(--color-white);
  border-radius: var(--radius-xl);
  margin-bottom: 16px;
  overflow: hidden;
  border: 1px solid transparent;
  transition: all var(--transition-base);
}

.faq-item:hover {
  border-color: var(--color-gray-100);
}

.faq-question {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 24px;
  background-color: transparent;
  border: none;
  text-align: left;
  cursor: pointer;
  font-weight: var(--font-semibold);
  color: var(--color-text-primary);
  transition: all var(--transition-fast);
}

.faq-question:hover {
  background-color: var(--color-white);
}

.faq-label {
  background-color: var(--color-primary);
  color: white;
  padding: 6px 14px;
  border-radius: var(--radius-full);
  font-size: var(--text-xs);
  font-weight: var(--font-semibold);
  flex-shrink: 0;
}

.faq-question span:not(.faq-label) {
  flex: 1;
  font-size: var(--text-base);
}

.faq-toggle {
  color: var(--color-primary);
  font-size: var(--text-xl);
  font-weight: var(--font-bold);
  transition: transform var(--transition-fast);
  flex-shrink: 0;
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  opacity: 0;
  padding: 0 24px;
  transform: translateY(-10px);
  transition: opacity var(--transition-base), transform var(--transition-base), padding var(--transition-base);
}

.faq-answer.active {
  max-height: 500px;
  opacity: 1;
  padding: 0 24px 24px;
  transform: translateY(0);
}

.answer-label {
  background-color: var(--color-primary);
  color: white;
  padding: 6px 14px;
  border-radius: var(--radius-full);
  font-size: var(--text-xs);
  font-weight: var(--font-semibold);
  display: inline-block;
  margin-bottom: 12px;
}

.faq-answer p {
  color: var(--color-text-secondary);
  line-height: 1.8;
  font-size: var(--text-base);
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
  .pain-points {
    grid-template-columns: repeat(2, 1fr);
  }

  .process-steps {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .page-header {
    padding: 80px 0 60px;
  }

  .service-concept,
  .process-flow,
  .faq-section,
  .cta-section {
    padding: 80px 0;
  }

  .page-header h1 {
    font-size: 1.75rem;
  }

  .pain-points {
    grid-template-columns: 1fr;
  }

  .pain-item {
    padding: 28px;
  }

  .process-steps {
    grid-template-columns: 1fr;
  }

  .process-step {
    padding: 32px 24px;
  }

  .cta-content h2 {
    font-size: 1.75rem;
  }
}
</style>