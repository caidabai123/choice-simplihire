<template>
  <div class="for-employers-page">
    <section class="page-header">
      <div class="container">
        <h1>For Employers</h1>
        <p>Tailored solutions for your hiring needs</p>
      </div>
    </section>

    <section class="service-concept">
      <div class="container">
        <div class="concept-content">
          <h2>Our Service Concept for Employers</h2>
          <p>
            We focus on solving employers' three core pain points: difficult overseas recruitment, 
            high labor costs and heavy employment management pressure. With simplified processes, 
            professional services and compliant operation, we let every corporate hiring be 
            labor-saving, efficient and reassuring.
          </p>
          <div class="pain-points">
            <div class="pain-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg>
              <span>Difficult Overseas Recruitment</span>
            </div>
            <div class="pain-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>High Labor Costs</span>
            </div>
            <div class="pain-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
              <span>Heavy Management Pressure</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="process-flow">
      <div class="container">
        <div class="section-title">
          <h2>Cooperation Process</h2>
        </div>
        <div class="process-steps">
          <div v-for="(step, index) in processSteps" :key="index" class="process-step">
            <div class="step-number">{{ index + 1 }}</div>
            <h3>{{ step.title }}</h3>
            <p>{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="faq-section">
      <div class="container">
        <div class="section-title">
          <h2>Employer Common FAQ</h2>
        </div>
        <div class="faq-list">
          <div v-for="(faq, index) in faqs" :key="index" class="faq-item">
            <button class="faq-question" @click="toggleFaq(index)">
              <span class="faq-label">Q{{ index + 1 }}:</span>
              <span>{{ faq.question }}</span>
              <svg v-if="activeFaq === index" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div class="faq-answer" :class="{ 'active': activeFaq === index }">
              <span class="answer-label">A{{ index + 1 }}:</span>
              <p>{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>Ready to Reduce Your Hiring Costs?</h2>
          <p>Get a personalized solution for your business needs</p>
          <router-link to="/contact-us" class="btn btn-primary">Get Started</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activeFaq = ref(null)

const toggleFaq = (index) => {
  activeFaq.value = activeFaq.value === index ? null : index
}

const processSteps = [
  {
    title: 'Demand Communication',
    description: 'Confirm corporate job demands, talent standards and hiring cycles'
  },
  {
    title: 'Talent Matching',
    description: 'Screen and deliver matched global young talents'
  },
  {
    title: 'Interview Arrangement',
    description: 'Arrange interviews and follow up interview feedback'
  },
  {
    title: 'Compliance Processing',
    description: 'Complete cross-border employment and visa procedures'
  },
  {
    title: 'Talent Onboarding',
    description: 'Assist talents in overseas landing and smooth onboarding'
  },
  {
    title: 'After-Sales Service',
    description: 'Follow up employment status and provide continuous support to reduce corporate management pressure'
  }
]

const faqs = [
  {
    question: 'What kind of talents can you provide?',
    answer: 'We provide all types of high-quality young professional talents from worldwide, covering various industries and posts to meet different corporate staffing needs and solve your recruitment difficulties.'
  },
  {
    question: 'How to ensure the accuracy of talent matching?',
    answer: 'We formulate exclusive talent screening standards according to corporate job demands, and conduct multi-dimensional evaluation to ensure high matching degree between talents and posts, reduce talent turnover and cut down long-term employment costs.'
  },
  {
    question: 'Are all cross-border hiring procedures compliant?',
    answer: 'Yes. We strictly abide by the local laws and policy requirements of all service countries, and all procedures are fully compliant and traceable, helping enterprises avoid legal risks and management troubles.'
  },
  {
    question: 'Can you help reduce corporate hiring costs and management pressure?',
    answer: 'Definitely. Our simplified recruitment mode effectively shortens the hiring cycle, reduces human investment and talent trial and error costs, comprehensively optimizes corporate employment expenditure, and takes over tedious recruitment and management work to relieve your operational pressure.'
  }
]
</script>

<style scoped>
.for-employers-page {
  padding-top: 70px;
}

.page-header {
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-light) 100%);
  color: white;
  padding: 60px 0;
}

.page-header h1 {
  font-size: 2.5rem;
  margin-bottom: 8px;
}

.page-header p {
  opacity: 0.9;
}

.service-concept {
  background-color: white;
  padding: 80px 0;
}

.concept-content {
  max-width: 900px;
  margin: 0 auto;
}

.concept-content h2 {
  color: var(--primary-color);
  font-size: 1.75rem;
  margin-bottom: 20px;
}

.concept-content > p {
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 32px;
}

.pain-points {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
}

.pain-item {
  background-color: var(--bg-light);
  border-radius: 12px;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 12px;
  transition: all 0.3s ease;
}

.pain-item:hover {
  background-color: var(--primary-color);
  color: white;
}

.pain-item i {
  font-size: 1.5rem;
  color: var(--primary-color);
}

.pain-item:hover i {
  color: white;
}

.pain-item span {
  font-weight: 500;
}

.process-flow {
  background-color: var(--bg-light);
  padding: 80px 0;
}

.process-steps {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.process-step {
  background-color: white;
  border-radius: 12px;
  padding: 24px;
  text-align: center;
  transition: all 0.3s ease;
}

.process-step:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-4px);
}

.step-number {
  width: 48px;
  height: 48px;
  background-color: var(--primary-color);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0 auto 16px;
}

.process-step h3 {
  color: var(--primary-color);
  font-size: 1rem;
  margin-bottom: 8px;
}

.process-step p {
  color: var(--text-secondary);
  font-size: 0.875rem;
  line-height: 1.5;
}

.faq-section {
  background-color: white;
  padding: 80px 0;
}

.faq-list {
  max-width: 800px;
  margin: 0 auto;
}

.faq-item {
  background-color: var(--bg-light);
  border-radius: 12px;
  margin-bottom: 16px;
  overflow: hidden;
}

.faq-question {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 20px 24px;
  background-color: transparent;
  border: none;
  text-align: left;
  cursor: pointer;
  font-weight: 500;
  color: var(--primary-color);
}

.faq-question:hover {
  background-color: white;
}

.faq-label {
  background-color: var(--primary-color);
  color: white;
  padding: 4px 12px;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 600;
}

.faq-question span:not(.faq-label) {
  flex: 1;
}

.faq-question i {
  color: var(--primary-color);
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
  padding: 0 24px;
}

.faq-answer.active {
  max-height: 200px;
  padding: 16px 24px 24px;
  background-color: white;
}

.answer-label {
  background-color: var(--success-color);
  color: white;
  padding: 4px 12px;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 600;
  display: inline-block;
  margin-bottom: 12px;
}

.faq-answer p {
  color: var(--text-secondary);
  line-height: 1.8;
}

.cta-section {
  background: linear-gradient(135deg, var(--primary-dark) 0%, var(--primary-color) 100%);
  color: white;
  padding: 80px 0;
}

.cta-content {
  text-align: center;
}

.cta-content h2 {
  font-size: 2rem;
  margin-bottom: 12px;
}

.cta-content p {
  font-size: 1.125rem;
  opacity: 0.9;
  margin-bottom: 24px;
}

@media (max-width: 768px) {
  .page-header h1 {
    font-size: 1.75rem;
  }

  .cta-content h2 {
    font-size: 1.5rem;
  }
}
</style>