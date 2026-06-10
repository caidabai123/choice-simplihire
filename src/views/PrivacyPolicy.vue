<template>
  <div class="privacy-policy-page">
    <section class="page-header">
      <div class="container">
        <h1>Privacy Policy</h1>
        <p>Your privacy is our priority</p>
      </div>
    </section>

    <section class="policy-content">
      <div class="container">
        <div class="policy-card">
          <p>
            Choice SimpliHire Pty Ltd is committed to protecting the privacy and personal information 
            security of all corporate clients and candidate users.
          </p>
          <p>
            We will strictly keep confidential all corporate business information, recruitment demands 
            and talent personal information obtained in the service process, and will not disclose, sell 
            or transmit any private information to third parties without official authorization.
          </p>
          <p>
            All user information is only used for internal service matching, business communication and 
            after-sales support. We abide by the privacy laws and regulations of all service countries 
            and continuously optimize information security management to ensure the legitimate rights 
            and interests of employers and talents.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
</script>

<style scoped>
.privacy-policy-page {
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

.policy-content {
  padding: 80px 0;
  background-color: white;
}

.policy-card {
  max-width: 800px;
  margin: 0 auto;
  background-color: var(--bg-light);
  border-radius: 12px;
  padding: 40px;
}

.policy-card p {
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 20px;
}

.policy-card p:last-child {
  margin-bottom: 0;
}

@media (max-width: 768px) {
  .page-header h1 {
    font-size: 1.75rem;
  }

  .policy-content {
    padding: 40px 0;
  }

  .policy-card {
    padding: 24px;
  }
}
</style>