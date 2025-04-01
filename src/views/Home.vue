<template>
  <div class="smooth-scroll">
    <div class="hero-section">
      <a href="https://calendly.com/mikwiseman/hi" target="_blank" class="contact-button down w-inline-block">
        <div class="button-text">{{ $t('header.discussProject') }}</div>
      </a>
      <div class="header">
        <a href="#" class="contact-button top w-inline-block">
          <div class="button-text">{{ $t('header.discussProject') }}</div>
        </a>
        <img src="@/assets/images/logo_01.svg" loading="lazy" height="92" alt="" class="hero-logo-vertical">
        <img src="@/assets/images/logo_01.svg" loading="lazy" height="92" alt="" class="hero-logo-horizontal">
      </div>
      <div class="bottom-text">
        <h1 class="heading">
          <span class="alpha-50">{{ $t('hero.title') }}<br></span>
          <span>{{ $t('hero.subtitle') }}</span>
        </h1>
      </div>
    </div>
    
    <div class="sliding-content">
      <div class="proj-section">
        <div class="title-container">
          <h2 class="title">{{ $t('cases.title') }}</h2>
        </div>
        <div class="project-container">
          <!-- Falcone Card -->
          <div class="project-card falcone">
            <div class="project-header">
              <img src="@/assets/images/falcone-logo-card.svg" loading="lazy" alt="" class="project-logo small">
              <div class="chip on-color hide">{{ $t('cases.comingSoon') }}</div>
            </div>
            <div class="project-info card-stat">
              <div class="w-layout-hflex project-card for-you statistic">
                <div class="proj-title">21%</div>
                <div class="proj-description">{{ $t('cases.stats.salesGrowth') }}</div>
              </div>
              <div class="w-layout-hflex project-card for-you statistic">
                <div class="proj-title">5.7x</div>
                <div class="proj-description">{{ $t('cases.stats.responseIncrease') }}</div>
              </div>
            </div>
            <div class="project-content">
              <div class="project-info">
                <div class="project-title">
                  <div class="proj-title">{{ $t('cases.falcone.title') }}</div>
                  <div class="proj-description">{{ $t('cases.falcone.description') }}</div>
                </div>
                <div class="project-chips-container">
                  <div v-for="(tag, index) in $t('cases.falcone.tags')" :key="index" class="chip on-color dark">
                    {{ tag }}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Ak Bars Bank Card -->
          <div class="project-card">
            <div class="project-header">
              <img src="@/assets/images/02_logo.svg" loading="lazy" alt="" class="project-logo small">
              <div class="chip on-color hide">{{ $t('cases.comingSoon') }}</div>
            </div>
            <div class="project-info card-stat">
              <div class="w-layout-hflex project-card for-you statistic">
                <div class="proj-title">41%</div>
                <div class="proj-description">{{ $t('cases.stats.timeReduction') }}</div>
              </div>
              <div class="w-layout-hflex project-card for-you statistic">
                <div class="proj-title">28%</div>
                <div class="proj-description">{{ $t('cases.stats.timeFreed') }}</div>
              </div>
            </div>
            <div class="project-content">
              <div class="project-info">
                <div class="project-title">
                  <div class="proj-title">{{ $t('cases.akBarsBank.title') }}</div>
                  <div class="proj-description">{{ $t('cases.akBarsBank.description') }}</div>
                </div>
                <div class="project-chips-container">
                  <div v-for="(tag, index) in $t('cases.akBarsBank.tags')" :key="index" class="chip on-color dark">
                    {{ tag }}
                  </div>
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
              <div class="chip on-color hide">{{ $t('cases.comingSoon') }}</div>
            </div>
            <div class="project-info card-stat">
              <div class="w-layout-hflex project-card for-you statistic">
                <div class="proj-title">16%</div>
                <div class="proj-description">{{ $t('cases.stats.salesGrowth') }}</div>
              </div>
              <div class="w-layout-hflex project-card for-you statistic">
                <div class="proj-title">2.4x</div>
                <div class="proj-description">{{ $t('cases.stats.responseIncrease') }}</div>
              </div>
            </div>
            <div class="project-content">
              <div class="project-info">
                <div class="project-title">
                  <div class="proj-title">{{ $t('cases.ontico.title') }}</div>
                  <div class="proj-description">{{ $t('cases.ontico.description') }}</div>
                </div>
                <div class="project-chips-container">
                  <div v-for="(tag, index) in $t('cases.ontico.tags')" :key="index" class="chip on-color dark">
                    {{ tag }}
                  </div>
                  <div class="chip on-color dark">LinkedIn</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Hotel Rossi Card -->
          <div class="project-card light">
            <div class="project-header">
              <img src="@/assets/images/03_logo.svg" loading="lazy" alt="" class="project-logo extra-small">
              <div class="chip on-color light hide">{{ $t('cases.comingSoon') }}</div>
            </div>
            <div class="project-info card-stat">
              <div class="w-layout-hflex project-card for-you statistic-copy">
                <div class="proj-title-copy">12%</div>
                <div class="proj-description-copy">{{ $t('cases.stats.salesGrowth') }}</div>
              </div>
              <div class="w-layout-hflex project-card for-you statistic-copy">
                <div class="proj-title-copy">2.1x</div>
                <div class="proj-description-copy">{{ $t('cases.stats.responseIncrease') }}</div>
              </div>
            </div>
            <div class="project-content">
              <div class="project-info">
                <div class="project-title">
                  <div class="proj-title light">{{ $t('cases.rossi.title') }}</div>
                  <div class="proj-description light">{{ $t('cases.rossi.description') }}</div>
                </div>
                <div class="project-chips-container">
                  <div v-for="(tag, index) in $t('cases.rossi.tags')" :key="index" class="chip on-color light">
                    {{ tag }}
                  </div>
                  <div class="chip on-color light">LinkedIn</div>
                  <div class="chip on-color light">Email</div>
                </div>
              </div>
            </div>
          </div>

          <div id="w-node-_08623629-3b20-0b06-c339-773cfed96f73-b9cd35b6" class="project-card for-you">
            <img src="@/assets/images/favorite.svg" loading="lazy" alt="" class="image">
            <div class="text-block">{{ $t('cases.yourProject') }}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="swag-section">
      <div class="title-centered">
        <br>
        <span>{{ $t('cta.title') }}</span>
        <br>‍<br>‍
        <a href="https://calendly.com/wisemik/hi" target="_blank" class="heding-link">{{ $t('cta.bookCall') }}</a>
      </div>
      <img src="@/assets/images/line.svg" loading="lazy" alt="" class="illustration-info">
    </div>

    <!-- Awards section -->
    <div class="awards">
      <div class="dot-block">
        <div class="icon-container"></div>
      </div>
      <h1 class="heading-awards">{{ $t('awards.title') }}</h1>
      <div class="awards-container">
        <div class="award-name">
          <div class="awards-title">{{ $t('awards.ethGlobalSf.title') }}</div>
        </div>
        <div class="award-collection">
          <div class="award-entry">
            <div class="medal-gold"></div>
            <div class="awards-subtitle">
              <a href="https://ethglobal.com/showcase/benderbite-331m7">{{ $t('awards.ethGlobalSf.award') }}</a>
            </div>
          </div>
        </div>
      </div>
      <div class="awards-container">
        <div class="award-name">
          <div class="awards-title">{{ $t('awards.ethGlobalBrussels.title') }}</div>
        </div>
        <div class="award-collection">
          <div class="award-entry">
            <div class="medal-gold"></div>
            <div class="awards-subtitle">
              <a href="https://ethglobal.com/showcase/llamarally-52jka">{{ $t('awards.ethGlobalBrussels.award') }}</a>
            </div>
          </div>
        </div>
      </div>
      <div class="awards-container">
        <div class="award-name">
          <div class="awards-title">{{ $t('awards.ethGlobalSingapore.title') }}</div>
        </div>
        <div class="award-collection">
          <div class="award-entry">
            <div class="medal-bronze"></div>
            <div class="awards-subtitle">
              <a href="https://ethglobal.com/showcase/veretha-pskzp">{{ $t('awards.ethGlobalSingapore.award') }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="contact-section">
      <div class="contacts">
        <div class="contacts-container">
          <div class="form-title">{{ $t('contact.title') }}</div>
          <div class="contacts-wrapper">
            <div class="contact-block">
              <div class="link-container">
                <div class="contact-text label">{{ $t('contact.email') }}</div>
                <a href="mailto:hi@mikwiseman.com" class="contact-text link">hi@mikwiseman.com</a>
              </div>
              <div class="link-container">
                <div class="contact-text label">{{ $t('contact.telegram') }}</div>
                <a href="https://t.me/mikwiseman" target="_blank" class="contact-text link">@MIKWISEMAN</a>
              </div>
            </div>
            <div class="divider"></div>
            <div class="address-block">
              <div class="link-container">
                <div class="contact-text label">{{ $t('contact.phone') }}</div>
                <p class="address-text">+7 (499) 391-20-14 <span class="dimmed">{{ $t('contact.russia') }}</span><br></p>
              </div>
              <div class="link-container">
                <div class="contact-text label">{{ $t('contact.address') }}</div>
                <p class="address-text">5/1 Bolshaya Sadovaya St., 4th floor</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="w-node-f7b89fee-4fa0-a52e-d7a5-9d0145ca1cf9-b9cd35b6" class="form-container">
        <div id="w-node-f7b89fee-4fa0-a52e-d7a5-9d0145ca1cfd-b9cd35b6" class="form-title white">{{ $t('contact.leaveRequest') }}</div>
        <div id="w-node-c93d6324-cde1-923f-b9c7-dece9dafa6f3-b9cd35b6" class="foot-logo-container">
          <img src="@/assets/images/logo_02.svg" loading="lazy" width="246" alt="" class="image-2">
          <p class="footer-copyright">{{ $t('contact.copyright') }}</p>
        </div>
        <div class="absolute-container">
          <a href="https://calendly.com/mikwiseman/hi" target="_blank" class="contact-button-footer w-inline-block">
            <div class="button-text footer">{{ $t('header.discussProject') }}</div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script> 