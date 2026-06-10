<template>
  <div class="talent-pool-page">
    <section class="page-header">
      <div class="container">
        <h1>Global Talent Pool</h1>
        <p>Access to thousands of qualified young talents worldwide</p>
      </div>
    </section>

    <section class="talent-overview">
      <div class="container">
        <div class="overview-content">
          <h2>Global Young Talent Pool Overview</h2>
          <p>
            Our talent pool covers high-quality young professionals from all over the world, focusing on 
            young talents with international vision, professional competence and cross-border adaptability. 
            We serve all industries and provide continuous talent support for overseas corporate team 
            expansion and post replacement, helping enterprises solve long-term talent shortage problems.
          </p>
        </div>
      </div>
    </section>

    <section class="talent-source">
      <div class="container">
        <div class="section-title">
          <h2>Talent Source & Coverage</h2>
        </div>
        <div class="source-content">
          <p>
            Talents are sourced from global mainstream industries and professional fields, covering 
            technical posts, administrative posts, business operation posts, service posts and other 
            all-round talent types, meeting the diversified staffing demands of different overseas enterprises.
          </p>
          <div class="talent-types">
            <div class="type-item">
              <i class="bi bi-code-square"></i>
              <span>Technical Posts</span>
            </div>
            <div class="type-item">
              <i class="bi bi-clipboard-data"></i>
              <span>Administrative Posts</span>
            </div>
            <div class="type-item">
              <i class="bi bi-graph-up-arrow"></i>
              <span>Business Operation Posts</span>
            </div>
            <div class="type-item">
              <i class="bi bi-headset"></i>
              <span>Service Posts</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="screening-standards">
      <div class="container">
        <div class="section-title">
          <h2>Strict Talent Screening Standards</h2>
        </div>
        <div class="screening-content">
          <p>
            We implement multi-level screening including resume preliminary review, professional competence 
            verification, background check and cross-border adaptation evaluation. Only qualified talents 
            can enter the talent pool, ensuring high-quality and high-matching candidate resources for employers.
          </p>
          <div class="screening-steps">
            <div class="screening-step">
              <div class="step-number">1</div>
              <h3>Resume Preliminary Review</h3>
              <p>Initial screening of candidate qualifications and experience</p>
            </div>
            <div class="screening-step">
              <div class="step-number">2</div>
              <h3>Professional Competence Verification</h3>
              <p>Validation of skills and professional capabilities</p>
            </div>
            <div class="screening-step">
              <div class="step-number">3</div>
              <h3>Background Check</h3>
              <p>Comprehensive verification of credentials and history</p>
            </div>
            <div class="screening-step">
              <div class="step-number">4</div>
              <h3>Cross-Border Adaptation Evaluation</h3>
              <p>Assessment of international work readiness</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="talent-advantage">
      <div class="container">
        <div class="section-title">
          <h2>Talent Pool Advantage</h2>
        </div>
        <div class="advantage-content">
          <p>
            Real-time updated talent resources, fast matching response, short hiring cycle and low trial 
            and error cost. We help overseas enterprises quickly seize global high-quality talent resources, 
            solve recruitment difficulties and optimize employment costs.
          </p>
          <div class="advantages-grid">
            <div class="advantage-item">
              <div class="advantage-icon">
                <i class="bi bi-arrow-repeat"></i>
              </div>
              <h3>Real-Time Updated</h3>
              <p>Continuous talent pool updates</p>
            </div>
            <div class="advantage-item">
              <div class="advantage-icon">
                <i class="bi bi-lightning"></i>
              </div>
              <h3>Fast Matching</h3>
              <p>Quick response to employer needs</p>
            </div>
            <div class="advantage-item">
              <div class="advantage-icon">
                <i class="bi bi-hourglass-split"></i>
              </div>
              <h3>Short Hiring Cycle</h3>
              <p>Efficient recruitment timeline</p>
            </div>
            <div class="advantage-item">
              <div class="advantage-icon">
                <i class="bi bi-piggy-bank"></i>
              </div>
              <h3>Low Trial Cost</h3>
              <p>Minimized hiring risk</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>Find Your Ideal Talent Today</h2>
          <p>Let us help you discover the perfect candidates for your business</p>
          <router-link to="/contact-us" class="btn btn-primary">Start Your Search</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
</script>

<style scoped>
.talent-pool-page {
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

.talent-overview {
  background-color: white;
  padding: 80px 0;
}

.overview-content {
  max-width: 900px;
  margin: 0 auto;
}

.overview-content h2 {
  color: var(--primary-color);
  font-size: 1.75rem;
  margin-bottom: 20px;
}

.overview-content p {
  color: var(--text-secondary);
  line-height: 1.8;
}

.talent-source {
  background-color: var(--bg-light);
  padding: 80px 0;
}

.source-content {
  max-width: 900px;
  margin: 0 auto;
}

.source-content p {
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 32px;
}

.talent-types {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
}

.type-item {
  background-color: white;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 12px;
  transition: all 0.3s ease;
}

.type-item:hover {
  background-color: var(--primary-color);
  color: white;
}

.type-item i {
  font-size: 1.5rem;
  color: var(--primary-color);
}

.type-item:hover i {
  color: white;
}

.type-item span {
  font-weight: 500;
}

.screening-standards {
  background-color: white;
  padding: 80px 0;
}

.screening-content {
  max-width: 900px;
  margin: 0 auto;
}

.screening-content > p {
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 40px;
}

.screening-steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 24px;
}

.screening-step {
  background-color: var(--bg-light);
  border-radius: 12px;
  padding: 24px;
  text-align: center;
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

.screening-step h3 {
  color: var(--primary-color);
  font-size: 1rem;
  margin-bottom: 8px;
}

.screening-step p {
  color: var(--text-secondary);
  font-size: 0.875rem;
  line-height: 1.5;
}

.talent-advantage {
  background-color: var(--bg-light);
  padding: 80px 0;
}

.advantage-content {
  max-width: 900px;
  margin: 0 auto;
}

.advantage-content > p {
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 40px;
}

.advantages-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
}

.advantage-item {
  background-color: white;
  border-radius: 12px;
  padding: 24px;
  text-align: center;
  transition: all 0.3s ease;
}

.advantage-item:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-4px);
}

.advantage-icon {
  width: 56px;
  height: 56px;
  background-color: var(--primary-color);
  color: white;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px;
  font-size: 1.5rem;
}

.advantage-item h3 {
  color: var(--primary-color);
  font-size: 1rem;
  margin-bottom: 8px;
}

.advantage-item p {
  color: var(--text-secondary);
  font-size: 0.875rem;
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