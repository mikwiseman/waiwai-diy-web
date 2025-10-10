<template>
  <div class="smooth-scroll">
    <div class="hero-section">
      <a href="https://calendly.com/mikwiseman/hi" target="_blank" class="contact-button down w-inline-block">
        <div class="button-text">{{ t('header.discussProject') }}</div>
      </a>
      <a :href="locale === 'en' ? 'https://pitch.waiwai.diy/v/waiwai-vpcmxx' : 'https://pitch.waiwai.diy/v/waiwai-z5fmqd'" target="_blank" class="contact-button down w-inline-block" style="right: 1.75rem; bottom: 12rem;">
        <div class="button-text">{{ t('header.presentation') }}</div>
      </a>
      <div class="header">
        <a href="#" class="contact-button top w-inline-block">
          <div class="button-text">{{ t('header.discussProject') }}</div>
        </a>
        <img src="@/assets/images/logo_01.svg" loading="lazy" height="92" alt="" class="hero-logo-horizontal">
        <img src="@/assets/images/logo_01.svg" loading="lazy" height="92" alt="" class="hero-logo-vertical">
      </div>
      <div class="mobile-buttons">
        <a href="https://calendly.com/mikwiseman/hi" target="_blank" class="contact-button mobile w-inline-block">
          <div class="button-text">{{ t('header.discussProject') }}</div>
        </a>
        <a :href="locale === 'en' ? 'https://pitch.waiwai.diy/v/waiwai-vpcmxx' : 'https://pitch.waiwai.diy/v/waiwai-z5fmqd'" target="_blank" class="contact-button mobile w-inline-block">
          <div class="button-text">{{ t('header.presentation') }}</div>
        </a>
      </div>
      <div class="bottom-text">
        <h1 class="heading">
          <span class="alpha-50">{{ t('hero.title') }}<br></span>
          <span>{{ t('hero.subtitle') }}</span>
        </h1>
      </div>
    </div>
    
    <div class="sliding-content" v-if="locale !== 'en'">
      <div class="capabilities-section">
        <div class="title-container">
          <h2 class="title">{{ t('capabilities.title') }}</h2>
        </div>
        <div class="capabilities-content">
          <div class="capability-item">
            <div class="feature-icon"></div>
            <div class="capability-text">
              <h3 class="section-subtitle">{{ t('capabilities.leads.title') }}</h3>
              <p>{{ t('capabilities.leads.description') }}</p>
            </div>
          </div>
          <div class="capability-item">
            <div class="feature-icon"></div>
            <div class="capability-text">
              <h3 class="section-subtitle">{{ t('capabilities.outreach.title') }}</h3>
              <p>{{ t('capabilities.outreach.description') }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="proj-section">
        <div class="title-container">
          <h2 class="title">{{ t('cases.title') }}</h2>
        </div>
        <div class="cases-grid">
          <div
            class="case-card"
            v-for="caseItem in caseCards"
            :key="caseItem.key"
          >
            <div class="case-header">
              <h3 class="section-subtitle">{{ caseItem.title }}</h3>
              <p>{{ caseItem.description }}</p>
            </div>
            <div class="case-stats">
              <div class="case-stat" v-for="stat in caseItem.stats" :key="stat.label">
                <span class="case-stat-value">{{ stat.value }}</span>
                <span class="case-stat-label">{{ stat.label }}</span>
              </div>
            </div>
            <div class="case-tags">
              <span class="case-tag" v-for="(tag, index) in caseItem.tags" :key="`tag-${caseItem.key}-${index}`">
                {{ tag }}
              </span>
            </div>
          </div>
          <div class="case-card placeholder">
            <div class="case-header">
              <h3 class="section-subtitle">{{ t('cases.yourProject') }}</h3>
              <p>{{ t('cases.invite') }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="recognition-section" v-if="locale !== 'en'">
        <div class="title-container">
          <h2 class="title">{{ t('recognition.title') }}</h2>
        </div>
        <div class="recognition-grid">
          <div
            class="recognition-item"
            v-for="(item, index) in recognitionItems"
            :key="`recognition-${index}`"
          >
            <div class="feature-icon"></div>
            <div class="recognition-text">
              <h3 class="section-subtitle">{{ item.title }}</h3>
            </div>
          </div>
        </div>
      </div>

      <div class="pricing-section">
        <div class="title-container">
          <h2 class="title">{{ t('pricing.title') }}</h2>
        </div>
        <div class="pricing-grid">
          <div
            class="pricing-card"
            :class="{ 'is-highlighted': plan.highlight }"
            v-for="plan in pricingPlans"
            :key="plan.key"
          >
            <div class="pricing-icon"></div>
            <div class="pricing-name">{{ plan.name }}</div>
            <div class="pricing-price">{{ plan.price }}</div>
            <ul class="pricing-features">
              <li v-for="(feature, index) in plan.features" :key="`feature-${plan.key}-${index}`">
                {{ feature }}
              </li>
            </ul>
            <a
              href="https://calendly.com/mikwiseman/hi"
              target="_blank"
              rel="noopener"
              class="pricing-button"
            >
              {{ plan.button }}
            </a>
          </div>
          <div class="pricing-card enterprise-card">
            <div class="pricing-icon"></div>
            <div class="pricing-name">{{ enterprisePlan.name }}</div>
            <div class="pricing-note">{{ enterprisePlan.description }}</div>
            <ul class="pricing-features">
              <li v-for="(feature, index) in enterprisePlan.features" :key="`enterprise-${index}`">
                {{ feature }}
              </li>
            </ul>
            <a
              href="https://calendly.com/mikwiseman/hi"
              target="_blank"
              rel="noopener"
              class="pricing-button outline"
            >
              {{ enterprisePlan.button }}
            </a>
          </div>
        </div>
        <p class="pricing-footnote">
          {{ t('pricing.footnote') }}
        </p>
      </div>
    </div>

    <!-- Team Section -->
    <div class="team-section" v-if="locale !== 'en'">
      <div class="title-container">
        <h2 class="title">{{ t('team.title') }}</h2>
      </div>
      <div class="team-grid">
        <div class="team-card" v-for="member in teamMembers" :key="member.key">
          <div class="team-photo-wrapper">
            <img v-if="member.image" :src="member.image" :alt="member.name" class="team-photo">
            <div v-else class="team-avatar">{{ member.initials }}</div>
          </div>
          <div class="team-name">{{ member.name }}</div>
          <div class="team-role">{{ member.role }}</div>
          <p class="team-description">{{ member.description }}</p>
        </div>
      </div>
    </div>

    <!-- Media Mentions Section -->
    <div class="media-mentions" v-if="locale !== 'en'">
      <h2 class="media-title">{{ t('media.title') }}</h2>
      <div class="media-logos">
        <a href="https://rb.ru/opinion/it-gumanitarii/" target="_blank" class="media-logo-link">
          <img src="@/assets/images/rb.svg" alt="RB.RU" class="media-logo bw">
          <img src="@/assets/images/rb.svg" alt="RB.RU" class="media-logo color">
        </a>
        <a href="https://pro.rbc.ru/demo/65df21019a79476a26d4cedb" target="_blank" class="media-logo-link">
          <img src="@/assets/images/rbc.svg" alt="RBC" class="media-logo bw">
          <img src="@/assets/images/rbc.svg" alt="RBC" class="media-logo color">
        </a>
        <a href="https://secretmag.ru/practice/kak-rabotat-s-inostrannymi-partnyorami-laifkhaki-rossiiskikh-biznesmenov.htm" target="_blank" class="media-logo-link">
          <img src="@/assets/images/sf.svg" alt="Secret Firmy" class="media-logo bw">
          <img src="@/assets/images/sf.svg" alt="Secret Firmy" class="media-logo color">
        </a>
        <a href="https://hightech.fm/2024/01/23/ai-kills" target="_blank" class="media-logo-link">
          <img src="@/assets/images/hitech.svg" alt="Hightech" class="media-logo bw">
          <img src="@/assets/images/hitech.svg" alt="Hightech" class="media-logo color">
        </a>
        <a href="https://www.it-world.ru/cionews/practice/214762.html" target="_blank" class="media-logo-link">
          <img src="@/assets/images/itworld.svg" alt="IT World" class="media-logo bw">
          <img src="@/assets/images/itworld.svg" alt="IT World" class="media-logo color">
        </a>
        <a href="https://www.cnews.ru/news/line/2025-04-23_ceo_trinity_monsters_zapustil_startap" target="_blank" class="media-logo-link">
          <img src="@/assets/images/cnews.svg" alt="CNews" class="media-logo bw">
          <img src="@/assets/images/cnews.svg" alt="CNews" class="media-logo color">
        </a>
        <a href="https://secrets.tbank.ru/startapnaya-elegiya" target="_blank" class="media-logo-link">
          <img src="@/assets/images/biznes-sekrety.svg" alt="Secrets Tbank" class="media-logo bw">
          <img src="@/assets/images/biznes-sekrety.svg" alt="Secrets Tbank" class="media-logo color">
        </a>
        <a href="https://aitoolz.ru/news/ai-agenty-ot-khajpa-k-realnym-biznes-instrumentam-stoimostyu-do-20-000-v-mesyats@215" target="_blank" class="media-logo-link">
          <img src="@/assets/images/ai-toolz.svg" alt="AI Toolz" class="media-logo bw">
          <img src="@/assets/images/ai-toolz.svg" alt="AI Toolz" class="media-logo color">
        </a>
      </div>
    </div>

    <!-- Awards section -->
    <div class="awards" v-if="locale !== 'en'">
      <div class="dot-block">
        <div class="icon-container"></div>
      </div>
      <h1 class="heading-awards">{{ t('awards.title') }}</h1>
      <div class="awards-container">
        <div class="award-name">
          <div class="awards-title">{{ t('awards.ethGlobalSf.title') }}</div>
        </div>
        <div class="award-collection">
          <div class="award-entry">
            <div class="medal-gold"></div>
            <div class="awards-subtitle">
              <a href="https://ethglobal.com/showcase/benderbite-331m7">{{ t('awards.ethGlobalSf.award') }}</a>
            </div>
          </div>
        </div>
      </div>
      <div class="awards-container">
        <div class="award-name">
          <div class="awards-title">{{ t('awards.ethGlobalBrussels.title') }}</div>
        </div>
        <div class="award-collection">
          <div class="award-entry">
            <div class="medal-gold"></div>
            <div class="awards-subtitle">
              <a href="https://ethglobal.com/showcase/llamarally-52jka">{{ t('awards.ethGlobalBrussels.award') }}</a>
            </div>
          </div>
        </div>
      </div>
      <div class="awards-container">
        <div class="award-name">
          <div class="awards-title">{{ t('awards.ethGlobalSingapore.title') }}</div>
        </div>
        <div class="award-collection">
          <div class="award-entry">
            <div class="medal-bronze"></div>
            <div class="awards-subtitle">
              <a href="https://ethglobal.com/showcase/veretha-pskzp">{{ t('awards.ethGlobalSingapore.award') }}</a>
            </div>
          </div>
        </div>
      </div>
      <div class="awards-container">
        <div class="award-name">
          <div class="awards-title">{{ t('awards.aiConversations.title') }}</div>
        </div>
        <div class="award-collection">
          <div class="award-entry">
            <div class="medal-gold"></div>
            <div class="awards-subtitle">
              {{ t('awards.aiConversations.award') }}
            </div>
          </div>
        </div>
      </div>
      <div class="awards-container">
        <div class="award-name">
          <div class="awards-title">{{ t('awards.aiDigitalLeaders.title') }}</div>
        </div>
        <div class="award-collection">
          <div class="award-entry">
            <div class="medal-gold"></div>
            <div class="awards-subtitle">
              {{ t('awards.aiDigitalLeaders.award') }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Blog Section -->
    <div class="blog" v-if="locale !== 'en'">
      <h2 class="blog-title">{{ t('blog.title') }}</h2>
      <div id="dib-posts"></div>
    </div>

    <div class="contact-section" v-if="locale !== 'en'">
      <div class="contacts">
        <div class="contacts-container">
          <div class="form-title">{{ t('contact.title') }}</div>
          <div class="contacts-wrapper">
            <div class="contact-block">
              <div class="link-container">
                <div class="contact-text label">{{ t('contact.email') }}</div>
                <a href="mailto:hi@mikwiseman.com" class="contact-text link">hi@mikwiseman.com</a>
              </div>
              <div class="link-container">
                <div class="contact-text label">{{ t('contact.telegram') }}</div>
                <a href="https://t.me/mikwiseman" target="_blank" class="contact-text link">@MIKWISEMAN</a>
              </div>
            </div>
            <div class="divider"></div>
            <div class="address-block">
              <div class="link-container">
                <div class="contact-text label">{{ t('contact.phone') }}</div>
                <p class="address-text">+7 (936) 316-39-61 <br></p>
              </div>
              <div class="link-container">
                <div class="contact-text label">{{ t('contact.address') }}</div>
                <p class="address-text">г.Москва, ул. Большая Садовая, 5/1, 4 этаж</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="form-container">
        <div class="form-title white">{{ t('contact.leaveRequest') }}</div>
        <div id="w-node-c93d6324-cde1-923f-b9c7-dece9dafa6f3-b9cd35b6" class="foot-logo-container">
          <img src="@/assets/images/logo_02.svg" loading="lazy" width="246" alt="" class="image-2">
          <div class="footer-bottom">
            <p class="footer-copyright">{{ t('contact.copyright') }}</p>
            <a :href="$i18n.locale === 'ru' ? 'https://docs.google.com/document/d/1Xh5HF6y-1nSrwcg6mxpdzgU_uz3Q9DNy' : 'https://docs.google.com/document/d/1wAv1IuOxSROJ8Vr4aRrxPFLmZvnWeyIu'" 
               target="_blank" 
               class="footer-copyright footer-link">
              {{ t('offer.viewOffer') }}
            </a>
            <p class="footer-copyright">{{ t('contact.inn') }}</p>
          </div>
        </div>
        <div class="contact-button-circle">
          <a href="https://calendly.com/mikwiseman/hi" target="_blank" class="contact-button-circle-link">
            <div class="button-text-circle">{{ t('header.discussProject') }}</div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: 'HomePage',
  setup() {
    const { t, tm, locale } = useI18n()

    const teamImages = [
      new URL('../assets/images/team/1.jpeg', import.meta.url).href,
      new URL('../assets/images/team/2.jpg', import.meta.url).href,
      new URL('../assets/images/team/3.jpg', import.meta.url).href,
      new URL('../assets/images/team/4.jpeg', import.meta.url).href,
      new URL('../assets/images/team/5.jpeg', import.meta.url).href,
      new URL('../assets/images/team/6.jpeg', import.meta.url).href,
      new URL('../assets/images/team/7.jpeg', import.meta.url).href,
      new URL('../assets/images/team/8.png', import.meta.url).href
    ]

    const membersConfig = [
      { key: 'egor', image: teamImages[0] },
      { key: 'pavel', image: teamImages[1] },
      { key: 'anastasiaM', image: teamImages[2] },
      { key: 'aleksey', image: teamImages[3] },
      { key: 'vyacheslav', image: teamImages[4] },
      { key: 'anastasiaS', image: teamImages[5] },
      { key: 'mik', image: teamImages[6] },
      { key: 'waiComputer', image: teamImages[7] }
    ]

    const teamMembers = computed(() =>
      membersConfig.map((member) => {
        const name = t(`team.members.${member.key}.name`)
        const initials = name
          .split(' ')
          .filter(Boolean)
          .map((part) => part[0])
          .join('')
          .slice(0, 2)
          .toUpperCase() || name.slice(0, 2).toUpperCase()

        return {
          key: member.key,
          name,
          role: t(`team.members.${member.key}.role`),
          description: t(`team.members.${member.key}.description`),
          initials,
          image: member.image
        }
      })
    )

    const pricingConfig = [
      { key: 'basic', highlight: false },
      { key: 'standard', highlight: true },
      { key: 'premium', highlight: false }
    ]

    const pricingPlans = computed(() =>
      pricingConfig.map((plan) => {
        const features = tm(`pricing.plans.${plan.key}.features`)
        return {
          key: plan.key,
          name: t(`pricing.plans.${plan.key}.name`),
          price: t(`pricing.plans.${plan.key}.price`),
          features: Array.isArray(features) ? features : [],
          button: t('pricing.buyButton'),
          highlight: plan.highlight
        }
      })
    )

    const enterprisePlan = computed(() => {
      const features = tm('pricing.enterprise.features')
      return {
        name: t('pricing.enterprise.name'),
        description: t('pricing.enterprise.description'),
        features: Array.isArray(features) ? features : [],
        button: t('pricing.enterprise.button')
      }
    })

    const casesConfig = [
      {
        key: 'falcone',
        stats: [
          { value: '21%', labelKey: 'cases.stats.salesGrowth' },
          { value: '5.7x', labelKey: 'cases.stats.responseIncrease' }
        ]
      },
      {
        key: 'akBarsBank',
        stats: [
          { value: '61%', labelKey: 'cases.stats.timeReduction' },
          { value: '48%', labelKey: 'cases.stats.timeFreed' }
        ]
      },
      {
        key: 'ontico',
        stats: [
          { value: '16%', labelKey: 'cases.stats.salesGrowth' },
          { value: '2.4x', labelKey: 'cases.stats.responseIncrease' }
        ]
      },
      {
        key: 'kodix',
        stats: [
          { value: '8-10', labelKey: 'cases.kodix.messages' },
          { value: '2970', labelKey: 'cases.kodix.reach' },
          { value: '12', labelKey: 'cases.kodix.meetings' }
        ]
      }
    ]

    const caseCards = computed(() =>
      casesConfig.map((item) => {
        const tags = tm(`cases.${item.key}.tags`)
        return {
          key: item.key,
          title: t(`cases.${item.key}.title`),
          description: t(`cases.${item.key}.description`),
          stats: item.stats.map((stat) => ({
            value: stat.value,
            label: t(stat.labelKey)
          })),
          tags: Array.isArray(tags) ? tags : []
        }
      })
    )

    const recognitionItems = computed(() => {
      const items = tm('recognition.items')
      if (!Array.isArray(items)) {
        return []
      }
      return items.map((item) => ({
        title: item.title ?? item
      }))
    })

    return { t, locale, teamMembers, pricingPlans, enterprisePlan, caseCards, recognitionItems }
  }
})
</script>

<style scoped>
.copyright-text {
  position: absolute;
  right: 24px;
  bottom: 24px;
  font-family: 'Courier', monospace;
  font-size: 14px;
  color: #E5FF32;
  opacity: 0.8;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: 400;
}

.contact-button-circle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 600px;
  background-color: #E5FF32;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.5s ease;
}

.contact-button-circle:hover {
  transform: translate(-50%, -50%) scale(1.05);
}

.contact-button-circle:hover .button-text-circle {
  transform: rotate(5deg);
}

.button-text-circle {
  font-family: 'Courier', monospace;
  font-size: 20px;
  font-weight: 400;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 2px;
  transition: transform 0.5s ease;
  color: #002713;
}

.form-container {
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: #002713;
  overflow: hidden;
}

.foot-logo-container {
  position: absolute;
  left: 24px;
  bottom: 24px;
}

.offer-section {
  padding: 40px 0;
  text-align: center;
  background: rgba(255, 255, 255, 0.05);
}

.offer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.offer-link {
  display: inline-block;
  padding: 16px 32px;
  background: #fff;
  color: #000;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.offer-link:hover {
  background: rgba(255, 255, 255, 0.9);
  transform: translateY(-2px);
}

.footer-bottom {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
  margin-top: 10px;
  flex-wrap: wrap;
}

.footer-copyright {
  color: rgba(255, 255, 255, 0.5);
  font-size: 14px;
  margin: 0;
}

.footer-link {
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-link:hover {
  color: rgba(255, 255, 255, 0.8);
}

/* Blog styles */
.blog {
  padding: 4rem 2rem;
  background-color: #fff;
}

.blog-title {
  font-family: Inter Tight, sans-serif;
  font-size: 2rem;
  font-weight: 400;
  line-height: 2rem;
  margin-bottom: 2rem;
  color: #000;
}

/* DropInBlog custom styles */
:deep(.dib-posts) {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

:deep(.dib-post) {
  background: #fff;
  border-radius: 1rem;
  overflow: hidden;
  transition: transform 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

:deep(.dib-post:hover) {
  transform: translateY(-4px);
}

:deep(.dib-post-image) {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

:deep(.dib-post-content) {
  padding: 1.5rem;
}

:deep(.dib-post-title) {
  font-family: Inter Tight, sans-serif;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.8rem;
  margin-bottom: 1rem;
  color: #000;
}

:deep(.dib-post-excerpt) {
  font-family: Inter, sans-serif;
  font-size: 1rem;
  line-height: 1.5;
  color: #666;
  margin-bottom: 1rem;
}

:deep(.dib-post-meta) {
  font-family: Inter, sans-serif;
  font-size: 0.875rem;
  color: #999;
}

@media screen and (max-width: 767px) {
  .blog {
    padding: 2rem 1rem;
  }
  
  .blog-title {
    font-size: 1.5rem;
    line-height: 1.5rem;
  }
  
  :deep(.dib-posts) {
    grid-template-columns: 1fr;
  }
}

.nav-link {
  position: absolute;
  right: 2rem;
  top: 50%;
  transform: translateY(-50%);
  color: #fff;
  text-decoration: none;
  font-family: Inter, sans-serif;
  font-size: 1rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.nav-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

@media screen and (max-width: 767px) {
  .nav-link {
    right: 1rem;
    font-size: 0.875rem;
  }
}

/* Capabilities & Scenarios */
.capabilities-section {
  background-color: #fff;
  border-radius: 2rem;
  padding: 3rem 2.5rem;
  margin-top: 2rem;
  color: #0b0b0b;
  border: 1px solid rgba(0, 39, 19, 0.08);
  box-shadow: 0 24px 58px rgba(0, 39, 19, 0.08);
}

.capabilities-section .title {
  color: #04170e;
}

.pricing-section .title {
  color: #04170e;
}

.recognition-section .title {
  color: #04170e;
}

.capabilities-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.capability-item {
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;
  padding: 1.75rem 1.5rem;
  background: #f6fbf7;
  border-radius: 1.5rem;
  border: 1px solid rgba(0, 39, 19, 0.05);
  box-shadow: 0 16px 36px rgba(0, 39, 19, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.capability-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 22px 48px rgba(0, 39, 19, 0.1);
}

.capability-text {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.recognition-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
  margin-top: 1.75rem;
}

.recognition-item {
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;
  padding: 1.75rem 1.5rem;
  background: #f6fbf7;
  border-radius: 1.5rem;
  border: 1px solid rgba(0, 39, 19, 0.05);
  box-shadow: 0 16px 36px rgba(0, 39, 19, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.recognition-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 22px 48px rgba(0, 39, 19, 0.1);
}

.recognition-text {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.section-subtitle {
  font-family: "Inter Tight", sans-serif;
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 1.5rem;
  margin: 0;
  color: #04170e;
}

.capability-text p,
.scenario-text p {
  font-family: Inter, sans-serif;
  font-size: 1rem;
  line-height: 1.65;
  color: rgba(0, 0, 0, 0.7);
  margin: 0;
}

.feature-icon {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #002713;
  box-shadow: 0 0 0 10px rgba(0, 39, 19, 0.12);
  flex-shrink: 0;
  margin-top: 0.35rem;
}

.feature-icon.small {
  width: 14px;
  height: 14px;
  box-shadow: 0 0 0 8px rgba(0, 39, 19, 0.1);
}

.pricing-section {
  margin-top: 3rem;
  background: #fff;
  border-radius: 2rem;
  padding: 3rem 2.5rem;
  border: 1px solid rgba(0, 39, 19, 0.08);
  box-shadow: 0 24px 58px rgba(0, 39, 19, 0.08);
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.pricing-card {
  background: #f6fbf7;
  border: 1px solid rgba(0, 39, 19, 0.05);
  border-radius: 1.5rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-shadow: 0 16px 36px rgba(0, 39, 19, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.pricing-card.is-highlighted {
  transform: translateY(-4px);
  box-shadow: 0 24px 48px rgba(0, 39, 19, 0.12);
}

.pricing-card:hover {
  transform: translateY(-6px);
}

.pricing-icon {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #002713;
  box-shadow: 0 0 0 10px rgba(0, 39, 19, 0.12);
  margin-bottom: 0.5rem;
}

.pricing-name {
  font-family: "Inter Tight", sans-serif;
  font-size: 1.25rem;
  font-weight: 600;
  color: #04170e;
  text-align: left;
}

.pricing-price {
  font-family: "Inter Tight", sans-serif;
  font-size: 2rem;
  font-weight: 600;
  color: #002713;
  text-align: left;
}

.pricing-note {
  font-family: Inter, sans-serif;
  font-size: 0.95rem;
  color: rgba(0, 0, 0, 0.65);
  text-align: left;
}

.pricing-features {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  font-family: Inter, sans-serif;
  font-size: 0.95rem;
  color: rgba(0, 0, 0, 0.7);
  text-align: left;
}

.pricing-features li {
  padding-left: 0;
}

.pricing-button {
  margin-top: auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.85rem 1.75rem;
  border-radius: 999px;
  background: #002713;
  color: #e5ff32;
  text-decoration: none;
  font-family: "Inter Tight", sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.pricing-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 24px rgba(0, 39, 19, 0.16);
}

.pricing-button.outline {
  background: rgba(0, 39, 19, 0.08);
  border: 1px solid rgba(0, 39, 19, 0.2);
  color: #002713;
}

.pricing-button.outline:hover {
  border-color: #002713;
  color: #002713;
  box-shadow: none;
}

.enterprise-card {
  background: #ffffff;
}

.pricing-footnote {
  margin-top: 2.5rem;
  font-family: Inter, sans-serif;
  font-size: 0.95rem;
  line-height: 1.6;
  color: #04170e;
  max-width: 720px;
  text-align: left;
  margin-left: auto;
  margin-right: auto;
}

.cases-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.case-card {
  background: #f6fbf7;
  border-radius: 1.5rem;
  border: 1px solid rgba(0, 39, 19, 0.05);
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  box-shadow: 0 16px 36px rgba(0, 39, 19, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.case-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 22px 48px rgba(0, 39, 19, 0.1);
}

.case-card.placeholder {
  justify-content: center;
  text-align: center;
  background: #ffffff;
  border-style: dashed;
}

.case-card.placeholder .case-header p {
  color: rgba(0, 0, 0, 0.6);
}

.case-header p {
  font-family: Inter, sans-serif;
  font-size: 0.95rem;
  line-height: 1.6;
  color: rgba(0, 0, 0, 0.7);
  margin: 0;
}

.case-stats {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.case-stat {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.case-stat-value {
  font-family: "Inter Tight", sans-serif;
  font-size: 1.75rem;
  font-weight: 600;
  color: #002713;
}

.case-stat-label {
  font-family: Inter, sans-serif;
  font-size: 0.9rem;
  color: rgba(0, 0, 0, 0.6);
}

.case-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.case-tag {
  padding: 0.4rem 0.85rem;
  border-radius: 999px;
  background: #002713;
  color: #e5ff32;
  font-family: Inter, sans-serif;
  font-size: 0.85rem;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

.team-section {
  padding: 4rem 2rem;
  background-color: #fff;
}

.team-section .title {
  color: #04170e;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 2rem;
  margin-top: 2.5rem;
  justify-items: center;
}

.team-card {
  width: 100%;
  max-width: 360px;
  background: #ffffff;
  border-radius: 1.75rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border: 1px solid rgba(0, 27, 15, 0.06);
  box-shadow: 0 20px 40px rgba(0, 39, 19, 0.08);
  transition: transform 0.35s ease, box-shadow 0.35s ease;
}

.team-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 28px 60px rgba(0, 39, 19, 0.12);
}

.team-photo-wrapper {
  width: 100%;
  aspect-ratio: 3 / 4;
  border-radius: 1.25rem;
  overflow: hidden;
  background: #0f0428;
  display: flex;
  align-items: center;
  justify-content: center;
}

.team-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.35s ease;
}

.team-card:hover .team-photo {
  transform: scale(1.05);
}

.team-avatar {
  width: 88px;
  height: 88px;
  border-radius: 50%;
  background: #120025;
  color: #e5ff32;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Inter Tight", sans-serif;
  font-size: 1.25rem;
  font-weight: 600;
  letter-spacing: 1px;
}

.team-name {
  font-family: "Inter Tight", sans-serif;
  font-size: 1.25rem;
  font-weight: 500;
  color: #040404;
}

.team-role {
  font-family: Inter, sans-serif;
  font-size: 0.95rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: rgba(8, 12, 54, 0.65);
}

.team-description {
  font-family: Inter, sans-serif;
  font-size: 0.95rem;
  line-height: 1.6;
  color: rgba(0, 0, 0, 0.72);
  margin: 0;
}

.recognition-section {
  margin-top: 3rem;
  padding: 3rem 2.5rem;
  background-color: #fff;
  border-radius: 2rem;
  border: 1px solid rgba(0, 39, 19, 0.08);
  box-shadow: 0 24px 58px rgba(0, 39, 19, 0.08);
}

@media screen and (max-width: 991px) {
  .capabilities-section,
  .scenarios-section {
    padding: 2.5rem 1.75rem;
  }

  .capabilities-content {
    grid-template-columns: 1fr;
  }
  
  .scenarios-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .capability-item,
  .scenario-module {
    padding: 1.5rem 1.25rem;
  }

  .cases-grid {
    grid-template-columns: 1fr;
  }

  .pricing-section {
    padding: 2.5rem 1.5rem;
  }

  .pricing-grid {
    grid-template-columns: 1fr;
  }

  .recognition-grid {
    grid-template-columns: 1fr;
  }

  .faq-section {
    padding: 2.5rem 1.5rem;
  }

  .faq-grid {
    grid-template-columns: 1fr;
  }

  .team-section {
    padding: 3rem 1.5rem;
  }

  .team-grid {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }

  .team-card {
    padding: 1.75rem;
    max-width: 320px;
  }

  .team-photo-wrapper {
    aspect-ratio: 1 / 1;
  }

  .recognition-section {
    padding: 2.5rem 1.5rem;
  }
}

/* Media Mentions Section */
.media-mentions {
  padding: 4rem 2rem;
  background-color: #fff;
  border-bottom: 1px solid var(--border);
}

.media-title {
  font-family: Inter Tight, sans-serif;
  font-size: 2rem;
  font-weight: 400;
  line-height: 2rem;
  margin-bottom: 3rem;
  color: #000;
}

.media-logos {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2rem;
  align-items: center;
  justify-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.media-logo-link {
  position: relative;
  display: block;
  width: 100%;
  text-align: center;
}

.media-logo {
  max-width: 100%;
  height: auto;
  transition: opacity 0.3s ease;
}

.media-logo.bw {
  filter: grayscale(100%);
  opacity: 0.5;
}

.media-logo.color {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
}

.media-logo-link:hover .media-logo.bw {
  opacity: 0;
}

.media-logo-link:hover .media-logo.color {
  opacity: 1;
}

@media screen and (max-width: 991px) {
  .media-logos {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }
}

@media screen and (max-width: 767px) {
  .media-mentions {
    padding: 2rem 1rem;
  }

  .media-title {
    font-size: 1.5rem;
    line-height: 1.5rem;
    margin-bottom: 2rem;
  }

  .media-logos {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
}

/* Mobile layout styles */
.mobile-buttons {
  display: none;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
}

.contact-button.mobile {
  background-color: var(--secondary);
  position: static;
  margin: 0;
}

.hero-logo-vertical {
  display: none;
  object-position: 50% 50%;
  flex: 1;
  height: auto;
  width: 100%;
  margin: 0 auto;
}

@media screen and (max-width: 991px) {
  .hero-logo-horizontal {
    display: none;
  }
  
  .hero-logo-vertical {
    display: block;
  }
  
  .header {
    flex-direction: column;
    align-items: center;
    padding: 1rem;
  }
  
  .contact-button.top {
    display: none;
  }
  
  .contact-button.down {
    display: none;
  }
  
  .mobile-buttons {
    display: flex;
  }
  
  .mobile-buttons .contact-button.mobile {
    width: 16rem;
    height: 4rem;
    border-radius: 2rem;
    justify-content: center;
    align-items: center;
  }
  
  .mobile-buttons .button-text {
    font-size: 1rem;
    line-height: 1rem;
    position: static;
  }
}

@media screen and (max-width: 479px) {
  .hero-logo-vertical {
    width: 100%;
  }
  
  .mobile-buttons .contact-button.mobile {
    width: 14rem;
    height: 3.5rem;
  }
  
  .mobile-buttons .button-text {
    font-size: 0.875rem;
    line-height: 0.875rem;
  }
}
</style> 
