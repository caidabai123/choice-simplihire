<template>
  <div class="contact-us-page">
    <section class="page-header">
      <div class="container">
        <div class="page-tag">{{ i18n.t('contact.header.tag') }}</div>
        <h1>{{ i18n.t('contact.header.title') }}</h1>
        <p>{{ i18n.t('contact.header.subtitle') }}</p>
      </div>
    </section>

    <section class="contact-intro">
      <div class="container">
        <div class="intro-content">
          <h2>{{ i18n.t('contact.intro.title') }}</h2>
          <p>{{ i18n.t('contact.intro.content') }}</p>
        </div>
      </div>
    </section>

    <section class="contact-information">
      <div class="container">
        <div class="section-header">
          <div class="section-tag">{{ i18n.t('contact.info.tag') }}</div>
          <h2>{{ i18n.t('contact.info.title') }}</h2>
        </div>
        <div class="contact-card">
          <div class="contact-grid">
            <div class="contact-item">
              <div class="contact-content">
                <span class="contact-label">{{ i18n.t('contact.info.label4') }}</span>
                <a href="mailto:contact@datangcapital.com.au" class="contact-link">{{ i18n.t('contact.info.value4') }}</a>
              </div>
            </div>
            <div class="contact-item">
              <div class="contact-content">
                <span class="contact-label">{{ i18n.t('contact.info.label5') }}</span>
                <a href="tel:+61282110688" class="contact-link">{{ i18n.t('contact.info.value5') }}</a>
              </div>
            </div>
            <div class="contact-item">
              <div class="contact-content">
                <span class="contact-label">{{ i18n.t('contact.info.label6') }}</span>
                <span class="contact-value">{{ i18n.t('contact.info.value6') }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="contact-form-section">
      <div class="container">
        <div class="section-header">
          <div class="section-tag">{{ i18n.t('contact.form.tag') }}</div>
          <h2>{{ i18n.t('contact.form.title') }}</h2>
          <p>{{ i18n.t('contact.form.subtitle') }}</p>
        </div>
        <form @submit.prevent="handleSubmit" class="consultation-form">
          <div class="form-row">
            <div class="form-group">
              <label for="company">{{ i18n.t('contact.form.company') }}</label>
              <input type="text" id="company" v-model="formData.company" required :placeholder="i18n.t('contact.form.companyPlaceholder')">
            </div>
            <div class="form-group">
              <label for="countryIndustry">{{ i18n.t('contact.form.countryIndustry') }}</label>
              <input type="text" id="countryIndustry" v-model="formData.countryIndustry" required :placeholder="i18n.t('contact.form.countryIndustryPlaceholder')">
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label for="jobDemands">{{ i18n.t('contact.form.jobDemands') }}</label>
              <input type="text" id="jobDemands" v-model="formData.jobDemands" required :placeholder="i18n.t('contact.form.jobDemandsPlaceholder')">
            </div>
            <div class="form-group">
              <label for="contactPerson">{{ i18n.t('contact.form.contactPerson') }}</label>
              <input type="text" id="contactPerson" v-model="formData.contactPerson" required :placeholder="i18n.t('contact.form.contactPersonPlaceholder')">
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label for="email">{{ i18n.t('contact.form.email') }}</label>
              <input type="email" id="email" v-model="formData.email" required :placeholder="i18n.t('contact.form.emailPlaceholder')">
            </div>
            <div class="form-group">
              <label for="phone">{{ i18n.t('contact.form.phone') }}</label>
              <input type="tel" id="phone" v-model="formData.phone" :placeholder="i18n.t('contact.form.phonePlaceholder')">
            </div>
          </div>
          <div class="form-group full-width">
            <label for="additionalRequirements">{{ i18n.t('contact.form.additionalRequirements') }}</label>
            <textarea id="additionalRequirements" v-model="formData.additionalRequirements" rows="4" :placeholder="i18n.t('contact.form.additionalRequirementsPlaceholder')"></textarea>
          </div>
          <button type="submit" class="btn btn-primary btn-lg submit-btn">{{ i18n.t('contact.form.submit') }}</button>
        </form>
      </div>
    </section>

    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>{{ i18n.t('contact.cta.title') }}</h2>
          <p>{{ i18n.t('contact.cta.subtitle') }}</p>
          <div class="cta-actions">
            <a href="mailto:contact@datangcapital.com.au" class="btn btn-primary btn-lg">{{ i18n.t('contact.cta.email') }}</a>
            <a href="tel:+61282110688" class="btn btn-secondary btn-lg">{{ i18n.t('contact.cta.call') }}</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, inject } from 'vue'

const i18n = inject('i18n')

const formData = ref({
  company: '',
  countryIndustry: '',
  jobDemands: '',
  contactPerson: '',
  email: '',
  phone: '',
  additionalRequirements: ''
})

const handleSubmit = () => {
  alert(i18n.t('contact.success'))
  formData.value = {
    company: '',
    countryIndustry: '',
    jobDemands: '',
    contactPerson: '',
    email: '',
    phone: '',
    additionalRequirements: ''
  }
}
</script>

<style scoped>
.contact-us-page {
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

.contact-intro {
  background: linear-gradient(180deg, var(--color-page-bg) 0%, var(--color-white) 15%);
  padding: 120px 0;
}

.intro-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.intro-content h2 {
  font-family: var(--font-family-display);
  font-size: clamp(1.75rem, 3.5vw, 2.5rem);
  font-weight: var(--font-bold);
  color: var(--color-text-primary);
  margin-bottom: 24px;
  line-height: 1.2;
}

.intro-content p {
  font-size: var(--text-lg);
  color: var(--color-text-secondary);
  line-height: 1.8;
}

.contact-information {
  background-color: var(--color-white);
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

.contact-card {
  background: linear-gradient(135deg, var(--color-white) 0%, var(--color-gray-50) 100%);
  border-radius: var(--radius-2xl);
  padding: 60px;
  border: 1px solid var(--color-gray-100);
  box-shadow: var(--shadow-xl);
  max-width: 1000px;
  margin: 0 auto;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
}

.contact-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 16px;
  padding: 40px 24px;
  background-color: var(--color-white);
  border-radius: var(--radius-xl);
  border: 1px solid var(--color-gray-100);
  transition: all var(--transition-base);
}

.contact-item:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-lg);
  border-color: var(--color-primary-100);
}

.contact-content {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
}

.contact-label {
  font-size: var(--text-xs);
  font-weight: var(--font-semibold);
  color: var(--color-primary);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.contact-value {
  font-size: var(--text-base);
  color: var(--color-text-secondary);
  line-height: 1.6;
}

.contact-link {
  font-size: var(--text-base);
  color: var(--color-text-primary);
  font-weight: var(--font-medium);
  text-decoration: none;
  transition: all var(--transition-fast);
}

.contact-link:hover {
  color: var(--color-primary);
}

.contact-form-section {
  background-color: var(--color-white);
  padding: 120px 0;
}

.consultation-form {
  max-width: 900px;
  margin: 0 auto;
  background-color: var(--color-white);
  border-radius: var(--radius-2xl);
  padding: 60px;
  border: 1px solid var(--color-gray-100);
}

.form-row {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-bottom: 24px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group.full-width {
  margin-bottom: 32px;
}

.form-group label {
  font-weight: var(--font-semibold);
  color: var(--color-text-primary);
  margin-bottom: 10px;
  font-size: var(--text-sm);
}

.form-group input,
.form-group textarea {
  padding: 14px 18px;
  border: 1px solid var(--color-gray-200);
  border-radius: var(--radius-lg);
  font-size: var(--text-base);
  transition: all var(--transition-fast);
  background-color: var(--color-white);
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(107, 127, 215, 0.1);
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}

.submit-btn {
  width: 100%;
  padding: 16px 24px;
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

@media (max-width: 768px) {
  .page-header {
    padding: 80px 0 60px;
  }

  .contact-card {
    padding: 32px;
  }

  .contact-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .contact-item {
    padding: 28px 20px;
  }

  .contact-intro,
  .contact-information,
  .contact-form-section,
  .cta-section {
    padding: 80px 0;
  }

  .page-header h1 {
    font-size: 1.75rem;
  }

  .consultation-form {
    padding: 32px;
  }

  .form-row {
    grid-template-columns: 1fr;
  }

  .cta-content h2 {
    font-size: 1.75rem;
  }
}
</style>