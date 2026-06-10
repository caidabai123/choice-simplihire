<template>
  <div class="home-page">
    <section class="hero-banner">
      <div class="hero-background">
        <img src="/images/hero-bg.svg" alt="Hero Background" class="hero-bg-image">
      </div>
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">Your choice for a simplified hiring process</h1>
          <p class="hero-subtitle">
            Ease Your Recruitment Burden. We solve core corporate pain points including difficult overseas staffing, 
            high labor costs and heavy management pressure, source qualified young talents worldwide, 
            and streamline your full-cycle hiring process across US, UK, Ireland, Australia, New Zealand, Canada and Singapore.
          </p>
          <div class="hero-actions">
            <router-link to="/contact-us" class="btn btn-primary">Get Free Hiring Solution</router-link>
            <router-link to="/services" class="btn btn-secondary">Learn More</router-link>
          </div>
        </div>
        <div class="hero-stats">
          <div class="stat-item">
            <div class="stat-number">7+</div>
            <div class="stat-label">Countries</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">10,000+</div>
            <div class="stat-label">Talents</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">500+</div>
            <div class="stat-label">Employers</div>
          </div>
        </div>
      </div>
    </section>

    <section class="core-advantages">
      <div class="container">
        <div class="section-title">
          <h2>Core Advantages</h2>
          <p>Why employers trust us with their hiring needs</p>
        </div>
        <div class="grid grid-4">
          <div class="card">
            <div class="card-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 class="card-title">Simplified & Cost-Effective Hiring</h3>
            <p class="card-description">
              We cut redundant recruitment procedures, shorten hiring cycles, and effectively solve enterprises' core pain points of difficult overseas recruitment, excessive time consumption and high comprehensive labor costs, greatly saving company's time cost, human resource cost and overall staffing expenditure.
            </p>
          </div>
          <div class="card">
            <div class="card-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 class="card-title">Full Burden Relief & Trusted Service</h3>
            <p class="card-description">
              We take over all tedious work including talent sourcing, screening, interview arrangement and overseas onboarding, thoroughly reduce corporate daily employment management pressure, solve your staffing pain points and acting as your reliable long-term hiring partner.
            </p>
          </div>
          <div class="card">
            <div class="card-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 class="card-title">Precise Global Talent Matching</h3>
            <p class="card-description">
              Based on your job requirements, we select suitable young global talents accurately, reduce hiring trial and error, and improve team matching stability.
            </p>
          </div>
          <div class="card">
            <div class="card-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 class="card-title">100% Compliant Operation</h3>
            <p class="card-description">
              We strictly abide by local labor laws, visa policies and employment regulations of all served countries, helping enterprises avoid cross-border employment legal risks.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="service-coverage">
      <div class="container">
        <div class="section-title">
          <h2>Service Coverage</h2>
          <p>We provide recruitment services across 7 major developed countries</p>
        </div>
        <div class="countries-grid">
          <div v-for="country in countries" :key="country.name" class="country-card">
            <div class="country-flag">{{ country.flag }}</div>
            <div class="country-name">{{ country.name }}</div>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>Simplify Every Hiring Process, Support Your Business Growth</h2>
          <p>Let us help you find the right talent and grow your business globally</p>
          <div class="cta-actions">
            <router-link to="/contact-us" class="btn btn-primary">Get Started Now</router-link>
            <router-link to="/for-employers" class="btn btn-outline">Learn More</router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const countries = [
  { name: 'United States', flag: 'US' },
  { name: 'United Kingdom', flag: 'UK' },
  { name: 'Ireland', flag: 'IE' },
  { name: 'Australia', flag: 'AU' },
  { name: 'New Zealand', flag: 'NZ' },
  { name: 'Canada', flag: 'CA' },
  { name: 'Singapore', flag: 'SG' }
]
</script>

<style scoped>
.home-page {
  padding-top: 70px;
}

.hero-banner {
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-light) 100%);
  color: white;
  padding: 120px 0 100px;
  position: relative;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.hero-bg-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.3;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 1;
}

.hero-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 24px;
  line-height: 1.2;
}

.hero-subtitle {
  font-size: 1.125rem;
  line-height: 1.8;
  margin-bottom: 32px;
  opacity: 0.95;
}

.hero-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

.hero-stats {
  display: flex;
  justify-content: center;
  gap: 80px;
  margin-top: 60px;
  padding-top: 40px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--accent-color);
}

.stat-label {
  font-size: 0.875rem;
  opacity: 0.8;
  margin-top: 4px;
}

.core-advantages {
  background-color: var(--bg-light);
}

.card {
  background-color: white;
  border-radius: 12px;
  padding: 32px;
  text-align: left;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.card-icon {
  width: 64px;
  height: 64px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--primary-color);
  border-radius: 12px;
  color: white;
}

.card-icon svg {
  width: 32px;
  height: 32px;
}

.card-title {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 12px;
  color: var(--text-primary);
}

.card-description {
  font-size: 0.875rem;
  line-height: 1.7;
  color: var(--text-secondary);
}

.service-coverage {
  background-color: white;
}

.countries-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 24px;
}

.country-card {
  background-color: var(--bg-light);
  border-radius: 12px;
  padding: 24px;
  text-align: center;
  transition: all 0.3s ease;
}

.country-card:hover {
  background-color: var(--primary-color);
  color: white;
}

.country-flag {
  font-size: 2.5rem;
  margin-bottom: 12px;
}

.country-name {
  font-size: 0.875rem;
  font-weight: 500;
}

.cta-section {
  background: linear-gradient(135deg, var(--primary-dark) 0%, var(--primary-color) 100%);
  color: white;
  padding: 80px 0;
}

.cta-content {
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
}

.cta-content h2 {
  font-size: 2rem;
  margin-bottom: 16px;
}

.cta-content p {
  font-size: 1.125rem;
  opacity: 0.9;
  margin-bottom: 32px;
}

.cta-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-outline {
  border-color: white;
  color: white;
}

.btn-outline:hover {
  background-color: white;
  color: var(--primary-color);
}

@media (max-width: 768px) {
  .hero-banner {
    padding: 80px 0 60px;
  }

  .hero-title {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }

  .hero-stats {
    gap: 32px;
    margin-top: 40px;
  }

  .stat-number {
    font-size: 1.75rem;
  }

  .cta-content h2 {
    font-size: 1.5rem;
  }
}
</style>
