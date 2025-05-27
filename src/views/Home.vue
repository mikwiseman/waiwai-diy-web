<template>
  <div class="smooth-scroll">
    <div class="hero-section">
      <a href="https://calendly.com/mikwiseman/hi" target="_blank" class="contact-button down w-inline-block">
        <div class="button-text">{{ t('header.discussProject') }}</div>
      </a>
      <div class="header">
        <a href="#" class="contact-button top w-inline-block">
          <div class="button-text">{{ t('header.discussProject') }}</div>
        </a>
        <img src="@/assets/images/logo_01.svg" loading="lazy" height="92" alt="" class="hero-logo-horizontal">        
      </div>
      <div class="bottom-text">
        <h1 class="heading">
          <span class="alpha-50">{{ t('hero.title') }}<br></span>
          <span>{{ t('hero.subtitle') }}</span>
        </h1>
      </div>
    </div>
    
    <div class="sliding-content">
      <div class="proj-section">
        <div class="title-container">
          <h2 class="title">{{ t('cases.title') }}</h2>
        </div>
        <div class="project-container">
          <!-- Falcone Card -->
          <div class="project-card falcone">
            <div class="project-header">
              <img src="@/assets/images/falcone-logo-card.svg" loading="lazy" alt="" class="project-logo small">
              <div class="chip on-color hide">{{ t('cases.comingSoon') }}</div>
            </div>
            <div class="project-info card-stat">
              <div class="w-layout-hflex project-card for-you statistic">
                <div class="proj-title">21%</div>
                <div class="proj-description">{{ t('cases.stats.salesGrowth') }}</div>
              </div>
              <div class="w-layout-hflex project-card for-you statistic">
                <div class="proj-title">5.7x</div>
                <div class="proj-description">{{ t('cases.stats.responseIncrease') }}</div>
              </div>
            </div>
            <div class="project-content">
              <div class="project-info">
                <div class="project-title">
                  <div class="proj-title">{{ t('cases.falcone.title') }}</div>
                  <div class="proj-description">{{ t('cases.falcone.description') }}</div>
                </div>
                <div class="project-chips-container">
                  <div class="chip on-color dark">Логистика</div>
                  <div class="chip on-color dark">Маркетплейсы</div>
                  <div class="chip on-color dark">Продажи</div>
                  <div class="chip on-color dark">Email</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Ak Bars Bank Card -->
          <div class="project-card">
            <div class="project-header">
              <img src="@/assets/images/02_logo.svg" loading="lazy" alt="" class="project-logo small">
              <div class="chip on-color hide">{{ t('cases.comingSoon') }}</div>
            </div>
            <div class="project-info card-stat">
              <div class="w-layout-hflex project-card for-you statistic">
                <div class="proj-title">61%</div>
                <div class="proj-description">{{ t('cases.stats.timeReduction') }}</div>
              </div>
              <div class="w-layout-hflex project-card for-you statistic">
                <div class="proj-title">48%</div>
                <div class="proj-description">{{ t('cases.stats.timeFreed') }}</div>
              </div>
            </div>
            <div class="project-content">
              <div class="project-info">
                <div class="project-title">
                  <div class="proj-title">{{ t('cases.akBarsBank.title') }}</div>
                  <div class="proj-description">{{ t('cases.akBarsBank.description') }}</div>
                </div>
                <div class="project-chips-container">
                  <div class="chip on-color dark">Финансы</div>
                  <div class="chip on-color dark">Рекрутмент</div>
                  <div class="chip on-color dark">Рассылки</div>
                  <div class="chip on-color dark">HH.ru</div>
                  <div class="chip on-color dark">LinkedIn</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Ontico Conferences Card -->
          <div class="project-card bork">
            <div class="project-header">
              <img src="@/assets/images/04_logo.svg" loading="lazy" alt="" class="project-logo extra-small bork">
              <div class="chip on-color hide">{{ t('cases.comingSoon') }}</div>
            </div>
            <div class="project-info card-stat">
              <div class="w-layout-hflex project-card for-you statistic">
                <div class="proj-title">16%</div>
                <div class="proj-description">{{ t('cases.stats.salesGrowth') }}</div>
              </div>
              <div class="w-layout-hflex project-card for-you statistic">
                <div class="proj-title">2.4x</div>
                <div class="proj-description">{{ t('cases.stats.responseIncrease') }}</div>
              </div>
            </div>
            <div class="project-content">
              <div class="project-info">
                <div class="project-title">
                  <div class="proj-title">{{ t('cases.ontico.title') }}</div>
                  <div class="proj-description">{{ t('cases.ontico.description') }}</div>
                </div>
                <div class="project-chips-container">
                  <div class="chip on-color dark">Мероприятия</div>
                  <div class="chip on-color dark">Продажи</div>
                  <div class="chip on-color dark">LinkedIn</div>
                  <div class="chip on-color dark">Email</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Hotel Rossi Card -->
          <div class="project-card light">
            <div class="project-header">
              <img src="@/assets/images/03_logo.svg" loading="lazy" alt="" class="project-logo extra-small">
              <div class="chip on-color light hide">{{ t('cases.comingSoon') }}</div>
            </div>
            <div class="project-info card-stat">
              <div class="w-layout-hflex project-card for-you statistic-copy">
                <div class="proj-title-copy">12%</div>
                <div class="proj-description-copy">{{ t('cases.stats.salesGrowth') }}</div>
              </div>
              <div class="w-layout-hflex project-card for-you statistic-copy">
                <div class="proj-title-copy">2.1x</div>
                <div class="proj-description-copy">{{ t('cases.stats.responseIncrease') }}</div>
              </div>
            </div>
            <div class="project-content">
              <div class="project-info">
                <div class="project-title">
                  <div class="proj-title light">{{ t('cases.rossi.title') }}</div>
                  <div class="proj-description light">{{ t('cases.rossi.description') }}</div>
                </div>
                <div class="project-chips-container">
                  <div class="chip on-color light">Туризм</div>
                  <div class="chip on-color light">Продажи</div>
                  <div class="chip on-color light">LinkedIn</div>
                  <div class="chip on-color light">Email</div>
                </div>
              </div>
            </div>
          </div>

          <div id="w-node-_08623629-3b20-0b06-c339-773cfed96f73-b9cd35b6" class="project-card for-you">
            <img src="@/assets/images/favorite.svg" loading="lazy" alt="" class="image">
            <div class="text-block">{{ t('cases.yourProject') }}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="swag-section">
      <div class="title-centered">
        <br>
        <span>{{ t('cta.title') }}</span>
        <br>‍<br>‍
        <a href="https://calendly.com/wisemik/hi" target="_blank" class="heding-link">{{ t('cta.bookCall') }}</a>
      </div>
      <img src="@/assets/images/line.svg" loading="lazy" alt="" class="illustration-info">
    </div>

    <!-- Media Mentions Section -->
    <div class="media-mentions">
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
    <div class="awards">
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
    </div>

    <!-- Blog Section -->
    <div class="blog">
      <h2 class="blog-title">{{ t('blog.title') }}</h2>
      <div id="dib-posts"></div>
    </div>

    <div class="contact-section">
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
                <p class="address-text">+7 (499) 391-20-14 <br></p>
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
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: 'HomePage',
  setup() {
    const { t } = useI18n()
    return { t }
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
</style> 