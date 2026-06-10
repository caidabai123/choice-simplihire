<template>
  <div class="why-choose-us-page">
    <section class="page-header">
      <div class="container">
        <h1>Why Choose Us</h1>
        <p>Discover why we are the preferred recruitment partner for global employers</p>
      </div>
    </section>

    <section class="reasons-list">
      <div class="container">
        <div class="reasons-grid">
          <div class="reason-card">
            <div class="reason-number">1</div>
            <div class="reason-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <div class="reason-content">
              <h3 class="reason-title">Global Talent Resources, Rich Young Talent Pool</h3>
              <p class="reason-description">We connect high-quality young professional talents from all industries around the world, break regional talent restrictions, and provide sufficient and high-quality candidate reserves for overseas enterprises, thoroughly solving the problem of difficult overseas staffing.</p>
            </div>
          </div>

          <div class="reason-card">
            <div class="reason-number">2</div>
            <div class="reason-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <div class="reason-content">
              <h3 class="reason-title">Simplified Hiring, Significant Cost Reduction</h3>
              <p class="reason-description">Optimize traditional complicated cross-border recruitment processes, eliminate invalid links, greatly shorten hiring cycles, and effectively reduce enterprises' time cost, human cost and talent trial and error cost, helping enterprises control overall labor expenditure efficiently.</p>
            </div>
          </div>

          <div class="reason-card">
            <div class="reason-number">3</div>
            <div class="reason-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div class="reason-content">
              <h3 class="reason-title">Employer-Oriented, Full Process Burden Relief</h3>
              <p class="reason-description">We always take corporate employment demands as the core, undertake all trivial and complicated recruitment and employment management work, completely ease enterprises' staffing pressure and daily management burden, and practice the service concept of relieving corporate hiring burdens.</p>
            </div>
          </div>

          <div class="reason-card">
            <div class="reason-number">4</div>
            <div class="reason-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div class="reason-content">
              <h3 class="reason-title">Multi-Country Service Experience, Full Compliance Guarantee</h3>
              <p class="reason-description">We are familiar with the labor policies, visa rules and employment laws of the US, UK, Ireland, Australia, New Zealand, Canada and Singapore. All services operate in full compliance to avoid legal and operational risks for enterprises.</p>
            </div>
          </div>

          <div class="reason-card">
            <div class="reason-number">5</div>
            <div class="reason-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div class="reason-content">
              <h3 class="reason-title">Precise Matching, Improve Employment Stability</h3>
              <p class="reason-description">Through multi-dimensional talent evaluation and job demand matching, we deliver highly consistent talents for enterprises, reduce post-hiring adaptation problems and turnover rate, stabilize corporate team construction, and further reduce long-term employment costs and management pressure.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>Ready to Experience the Difference?</h2>
          <p>Join hundreds of employers who trust us with their hiring needs</p>
          <router-link to="/contact-us" class="btn btn-primary">Contact Us Today</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const reasons = [
  {
    icon: 'bi bi-globe',
    title: 'Global Talent Resources, Rich Young Talent Pool',
    description: 'We connect high-quality young professional talents from all industries around the world, break regional talent restrictions, and provide sufficient and high-quality candidate reserves for overseas enterprises, thoroughly solving the problem of difficult overseas staffing.'
  },
  {
    icon: 'bi bi-zap',
    title: 'Simplified Hiring, Significant Cost Reduction',
    description: 'Optimize traditional complicated cross-border recruitment processes, eliminate invalid links, greatly shorten hiring cycles, and effectively reduce enterprises\' time cost, human cost and talent trial and error cost, helping enterprises control overall labor expenditure efficiently.'
  },
  {
    icon: 'bi bi-shield-check',
    title: 'Employer-Oriented, Full Process Burden Relief',
    description: 'We always take corporate employment demands as the core, undertake all trivial and complicated recruitment and employment management work, completely ease enterprises\' staffing pressure and daily management burden, and practice the service concept of relieving corporate hiring burdens.'
  },
  {
    icon: 'bi bi-file-check',
    title: 'Multi-Country Service Experience, Full Compliance Guarantee',
    description: 'We are familiar with the labor policies, visa rules and employment laws of the US, UK, Ireland, Australia, New Zealand, Canada and Singapore. All services operate in full compliance to avoid legal and operational risks for enterprises.'
  },
  {
    icon: 'bi bi-target',
    title: 'Precise Matching, Improve Employment Stability',
    description: 'Through multi-dimensional talent evaluation and job demand matching, we deliver highly consistent talents for enterprises, reduce post-hiring adaptation problems and turnover rate, stabilize corporate team construction, and further reduce long-term employment costs and management pressure.'
  }
]
</script>

<style scoped>
.why-choose-us-page {
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

.reasons-list {
  padding: 80px 0;
  background-color: white;
}

.reasons-grid {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.reason-card {
  display: flex;
  gap: 24px;
  padding: 32px;
  background-color: var(--bg-light);
  border-radius: 12px;
  transition: all 0.3s ease;
  align-items: flex-start;
}

.reason-card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-4px);
}

.reason-number {
  width: 48px;
  height: 48px;
  background-color: var(--primary-color);
  color: white;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 600;
  flex-shrink: 0;
}

.reason-icon {
  width: 70px;
  height: 70px;
  background-color: var(--primary-light);
  color: white;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  flex-shrink: 0;
}

.reason-content {
  flex: 1;
}

.reason-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--primary-color);
  margin-bottom: 12px;
}

.reason-description {
  color: var(--text-secondary);
  font-size: 0.9375rem;
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

  .reason-card {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .cta-content h2 {
    font-size: 1.5rem;
  }
}
</style>