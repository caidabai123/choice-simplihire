<template>
  <div class="contact-us-page">
    <section class="page-header">
      <div class="container">
        <h1>Contact Us</h1>
        <p>Get in touch with our team for your recruitment needs</p>
      </div>
    </section>

    <section class="contact-intro">
      <div class="container">
        <div class="intro-content">
          <h2>Get In Touch With Us</h2>
          <p>
            If your enterprise has cross-border staffing demands or any consultation about global 
            recruitment services, please feel free to contact us. We will provide you with exclusive 
            customized hiring solutions and professional one-stop support to solve your recruitment 
            difficulties, high labor costs and management pressure.
          </p>
        </div>
      </div>
    </section>

    <section class="contact-information">
      <div class="container">
        <div class="section-title">
          <h2>Contact Information</h2>
        </div>
        <div class="info-grid">
          <div class="info-item">
            <div class="info-label">Company Name</div>
            <div class="info-value">Choice SimpliHire Pty Ltd</div>
          </div>
          <div class="info-item">
            <div class="info-label">Headquarters</div>
            <div class="info-value">Level 17, 123 Pitt St, Sydney Australia 2000</div>
          </div>
          <div class="info-item">
            <div class="info-label">Service Coverage</div>
            <div class="info-value">US, UK, Ireland, Australia, New Zealand, Canada, Singapore</div>
          </div>
          <div class="info-item">
            <div class="info-label">Email</div>
            <div class="info-value">[Reserved for official email]</div>
          </div>
          <div class="info-item">
            <div class="info-label">Phone</div>
            <div class="info-value">[Reserved for official phone]</div>
          </div>
          <div class="info-item">
            <div class="info-label">Address</div>
            <div class="info-value">Level 17, 123 Pitt St, Sydney Australia 2000</div>
          </div>
        </div>
      </div>
    </section>

    <section class="contact-form-section">
      <div class="container">
        <div class="section-title">
          <h2>Free Hiring Consultation Form</h2>
        </div>
        <form @submit.prevent="handleSubmit" class="consultation-form">
          <div class="form-row">
            <div class="form-group">
              <label for="company">Company Name</label>
              <input type="text" id="company" v-model="formData.company" required placeholder="Enter your company name">
            </div>
            <div class="form-group">
              <label for="countryIndustry">Country & Industry</label>
              <input type="text" id="countryIndustry" v-model="formData.countryIndustry" required placeholder="e.g., Australia - Technology">
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label for="jobDemands">Job Demands</label>
              <input type="text" id="jobDemands" v-model="formData.jobDemands" required placeholder="e.g., Software Engineer, 5 positions">
            </div>
            <div class="form-group">
              <label for="contactPerson">Contact Person</label>
              <input type="text" id="contactPerson" v-model="formData.contactPerson" required placeholder="Enter contact person name">
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" v-model="formData.email" required placeholder="Enter email address">
            </div>
            <div class="form-group">
              <label for="phone">Phone</label>
              <input type="tel" id="phone" v-model="formData.phone" placeholder="Enter phone number">
            </div>
          </div>
          <div class="form-group full-width">
            <label for="additionalRequirements">Additional Requirements</label>
            <textarea id="additionalRequirements" v-model="formData.additionalRequirements" rows="4" placeholder="Describe any additional requirements or questions"></textarea>
          </div>
          <button type="submit" class="btn btn-primary submit-btn">Submit Demand</button>
        </form>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

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
  alert('Thank you for your submission! Our team will contact you within 24 hours.')
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

.contact-intro {
  background-color: white;
  padding: 60px 0;
}

.intro-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.intro-content h2 {
  color: var(--primary-color);
  font-size: 1.75rem;
  margin-bottom: 20px;
}

.intro-content p {
  color: var(--text-secondary);
  line-height: 1.8;
}

.contact-information {
  background-color: var(--bg-light);
  padding: 60px 0;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  max-width: 900px;
  margin: 0 auto;
}

.info-item {
  background-color: white;
  border-radius: 12px;
  padding: 20px 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.info-label {
  color: var(--primary-color);
  font-weight: 600;
  font-size: 0.875rem;
}

.info-value {
  color: var(--text-secondary);
  font-size: 0.9375rem;
}

.contact-form-section {
  background-color: white;
  padding: 60px 0;
}

.consultation-form {
  max-width: 800px;
  margin: 0 auto;
  background-color: var(--bg-light);
  border-radius: 12px;
  padding: 40px;
}

.form-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-bottom: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group.full-width {
  margin-bottom: 20px;
}

.form-group label {
  font-weight: 500;
  color: var(--text-primary);
  margin-bottom: 8px;
}

.form-group input,
.form-group textarea {
  padding: 12px 16px;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  background-color: white;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--primary-color);
}

.form-group textarea {
  resize: vertical;
}

.submit-btn {
  width: 100%;
  padding: 14px 24px;
  font-size: 1rem;
}

@media (max-width: 768px) {
  .page-header h1 {
    font-size: 1.75rem;
  }

  .consultation-form {
    padding: 24px;
  }

  .form-row {
    grid-template-columns: 1fr;
  }
}
</style>