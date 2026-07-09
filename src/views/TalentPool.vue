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
              <div class="type-image">
                <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=engineering%20software%20developer%20tech%20professional&image_size=landscape_4_3" alt="Engineering">
              </div>
              <span>{{ i18n.t('talentPool.source.type1') }}</span>
            </div>
            <div class="type-item">
              <div class="type-image">
                <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=product%20manager%20business%20strategy%20professional&image_size=landscape_4_3" alt="Product">
              </div>
              <span>{{ i18n.t('talentPool.source.type2') }}</span>
            </div>
            <div class="type-item">
              <div class="type-image">
                <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=UI%20UX%20designer%20creative%20art%20professional&image_size=landscape_4_3" alt="Design">
              </div>
              <span>{{ i18n.t('talentPool.source.type3') }}</span>
            </div>
            <div class="type-item">
              <div class="type-image">
                <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=data%20analyst%20science%20analytics%20professional&image_size=landscape_4_3" alt="Data">
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
              <div class="item-image">
                <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=verified%20talent%20background%20check%20certified&image_size=landscape_4_3" alt="Verified">
              </div>
              <h3>{{ i18n.t('talentPool.advantage.item1') }}</h3>
              <p>{{ i18n.t('talentPool.advantage.item1Desc') }}</p>
            </div>
            <div class="advantage-item">
              <div class="item-image">
                <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=experienced%20professional%20career%20expertise&image_size=landscape_4_3" alt="Experience">
              </div>
              <h3>{{ i18n.t('talentPool.advantage.item2') }}</h3>
              <p>{{ i18n.t('talentPool.advantage.item2Desc') }}</p>
            </div>
            <div class="advantage-item">
              <div class="item-image">
                <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=excellent%20communication%20skills%20team%20collaboration&image_size=landscape_4_3" alt="Communication">
              </div>
              <h3>{{ i18n.t('talentPool.advantage.item3') }}</h3>
              <p>{{ i18n.t('talentPool.advantage.item3Desc') }}</p>
            </div>
            <div class="advantage-item">
              <div class="item-image">
                <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=flexible%20work%20arrangement%20remote%20employment&image_size=landscape_4_3" alt="Flexible">
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

.type-image {
  width: 100%;
  height: 120px;
  border-radius: var(--radius-lg);
  overflow: hidden;
}

.type-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-base);
}

.type-item:hover .type-image img {
  transform: scale(1.05);
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

.item-image {
  width: 100%;
  height: 120px;
  border-radius: var(--radius-lg);
  overflow: hidden;
  margin-bottom: 16px;
}

.item-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-base);
}

.advantage-item:hover .item-image img {
  transform: scale(1.05);
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
