<template>
  <div class="smooth-scroll">
    <div class="hero-section">
      <a
        href="https://calendly.com/mikwiseman/hi"
        target="_blank"
        class="contact-button down w-inline-block"
      >
        <div class="button-text">{{ t('header.discussProject') }}</div>
      </a>
      <div class="header">
        <a
          href="https://calendly.com/mikwiseman/hi"
          class="contact-button top w-inline-block"
        >
          <div class="button-text">{{ t('header.discussProject') }}</div>
        </a>
        <img
          src="@/assets/images/logo_01.svg"
          loading="lazy"
          height="92"
          alt=""
          class="hero-logo-horizontal"
        >
        <img
          src="@/assets/images/logo_01.svg"
          loading="lazy"
          height="92"
          alt=""
          class="hero-logo-vertical"
        >
      </div>
      <div class="mobile-buttons">
        <a
          href="https://calendly.com/mikwiseman/hi"
          target="_blank"
          class="contact-button mobile w-inline-block"
        >
          <div class="button-text">{{ t('header.discussProject') }}</div>
        </a>
      </div>
      <div class="bottom-text">
        <h1 class="heading">
          <span class="alpha-50">{{ t('hero.title') }}<br></span>
          <span>{{ t('hero.subtitle') }}</span>
        </h1>
      </div>
    </div>
    
    <div
      v-if="locale !== 'en'"
      class="sliding-content"
    >
      <div class="proj-section agents-section">
        <div class="title-container">
          <div class="section-label">
            {{ t('agents.title').toUpperCase() }}
          </div>
        </div>
        <div class="cases-grid">
          <div
            v-for="agent in agentCards"
            :key="agent.key"
            class="case-card"
          >
            <div class="case-header case-header--agent">
              <div class="case-header-content">
                <h3 class="section-subtitle">
                  {{ agent.title }}
                </h3>
                <p>{{ agent.description }}</p>
              </div>
              <a
                v-if="agent.presentationLink"
                :href="agent.presentationLink"
                target="_blank"
                rel="noopener noreferrer"
                class="contact-button-card"
              >
                <span class="contact-button-card-text">
                  {{ t('header.presentation') }}
                </span>
              </a>
            </div>
            <div class="case-stats">
              <div
                v-for="stat in agent.stats"
                :key="stat.statKey"
                class="case-stat"
              >
                <span class="case-stat-value">{{ stat.value }}</span>
                <span class="case-stat-label">{{ stat.label }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="faq-section">
        <div class="title-container">
          <div class="section-label">
            {{ t('faq.title').toUpperCase() }}
          </div>
        </div>
        <div class="cases-grid faq-grid">
          <div
            v-for="item in faqItems"
            :key="item.key"
            class="case-card faq-card"
          >
            <div class="case-header">
              <h3 class="section-subtitle">
                {{ item.question }}
              </h3>
              <p class="faq-answer">
                {{ item.answer }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="proj-section">
        <div class="title-container">
          <div class="section-label">
            {{ t('cases.title').toUpperCase() }}
          </div>
        </div>
        <div class="cases-grid">
          <div
            v-for="caseItem in caseCards"
            :key="caseItem.key"
            class="case-card"
          >
            <div class="case-header">
              <h3 class="section-subtitle">
                {{ caseItem.title }}
              </h3>
              <p>{{ caseItem.description }}</p>
            </div>
            <div class="case-stats">
              <div
                v-for="stat in caseItem.stats"
                :key="stat.label"
                class="case-stat"
              >
                <span class="case-stat-value">{{ stat.value }}</span>
                <span class="case-stat-label">{{ stat.label }}</span>
              </div>
            </div>
            <div class="case-tags">
              <span
                v-for="(tag, index) in caseItem.tags"
                :key="`tag-${caseItem.key}-${index}`"
                class="case-tag"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Team Section -->
    <div
      v-if="locale !== 'en'"
      class="team-section"
    >
      <div class="title-container">
        <h2 class="title">
          {{ t('team.title') }}
        </h2>
      </div>
      <div class="team-grid">
        <div
          v-for="member in teamMembers"
          :key="member.key"
          class="team-card"
        >
          <div class="team-photo-wrapper">
            <img
              v-if="member.image"
              :src="member.image"
              :alt="member.name"
              class="team-photo"
            >
            <div
              v-else
              class="team-avatar"
            >
              {{ member.initials }}
            </div>
          </div>
          <div class="team-name">
            {{ member.name }}
          </div>
          <div class="team-role">
            {{ member.role }}
          </div>
          <p class="team-description">
            {{ member.description }}
          </p>
        </div>
      </div>
    </div>

    <!-- Media Mentions Section -->
    <div
      v-if="locale !== 'en'"
      class="media-mentions"
    >
      <h2 class="media-title">
        {{ t('media.title') }}
      </h2>
      <div
        v-for="item in mediaMentions"
        :key="item.key"
        class="media-container"
      >
        <div class="media-name">
          <div class="media-name-title">
            <img
              :src="item.logo"
              :alt="t(`media.items.${item.key}.name`)"
              class="media-logo"
            >
            <span>{{ t(`media.items.${item.key}.name`) }}</span>
          </div>
        </div>
        <div class="media-collection">
          <div class="media-entry">
            <div class="media-article">
              <a
                :href="item.url"
                target="_blank"
                rel="noopener noreferrer"
              >
                {{ t(`media.items.${item.key}.articleTitle`) }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Awards section -->
    <div
      v-if="locale !== 'en'"
      class="awards"
    >
      <div class="dot-block">
        <div class="icon-container" />
      </div>
      <h1 class="heading-awards">
        {{ t('awards.title') }}
      </h1>
      <div class="awards-container">
        <div class="award-name">
          <div class="awards-title">
            {{ t('awards.ethGlobalSf.title') }}
          </div>
        </div>
        <div class="award-collection">
          <div class="award-entry">
            <div class="medal-gold" />
            <div class="awards-subtitle">
              <a href="https://ethglobal.com/showcase/benderbite-331m7">{{ t('awards.ethGlobalSf.award') }}</a>
            </div>
          </div>
        </div>
      </div>
      <div class="awards-container">
        <div class="award-name">
          <div class="awards-title">
            {{ t('awards.ethGlobalBrussels.title') }}
          </div>
        </div>
        <div class="award-collection">
          <div class="award-entry">
            <div class="medal-gold" />
            <div class="awards-subtitle">
              <a href="https://ethglobal.com/showcase/llamarally-52jka">{{ t('awards.ethGlobalBrussels.award') }}</a>
            </div>
          </div>
        </div>
      </div>
      <div class="awards-container">
        <div class="award-name">
          <div class="awards-title">
            {{ t('awards.ethGlobalSingapore.title') }}
          </div>
        </div>
        <div class="award-collection">
          <div class="award-entry">
            <div class="medal-bronze" />
            <div class="awards-subtitle">
              <a href="https://ethglobal.com/showcase/veretha-pskzp">{{ t('awards.ethGlobalSingapore.award') }}</a>
            </div>
          </div>
        </div>
      </div>
      <div class="awards-container">
        <div class="award-name">
          <div class="awards-title">
            {{ t('awards.aiConversations.title') }}
          </div>
        </div>
        <div class="award-collection">
          <div class="award-entry">
            <div class="medal-gold" />
            <div class="awards-subtitle">
              {{ t('awards.aiConversations.award') }}
            </div>
          </div>
        </div>
      </div>
      <div class="awards-container">
        <div class="award-name">
          <div class="awards-title">
            {{ t('awards.aiDigitalLeaders.title') }}
          </div>
        </div>
        <div class="award-collection">
          <div class="award-entry">
            <div class="medal-gold" />
            <div class="awards-subtitle">
              {{ t('awards.aiDigitalLeaders.award') }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Blog Section -->
    <div
      v-if="locale !== 'en'"
      class="blog"
    >
      <h2 class="blog-title">
        {{ t('blog.title') }}
      </h2>
      <div
        v-if="blogLoading"
        class="blog-status"
      >
        {{ t('blog.loading') }}
      </div>
      <div
        v-else-if="blogLoadFailed"
        class="blog-status blog-status--error"
      >
        {{ t('blog.error') }}
      </div>
      <div
        v-else-if="blogInitialized && featuredBlogPosts.length === 0"
        class="blog-status"
      >
        {{ t('blog.empty') }}
      </div>
      <div
        v-else
        class="blog-cards"
      >
        <article
          v-for="post in featuredBlogPosts"
          :key="post.path"
          class="blog-card"
        >
          <time class="blog-card-date">
            {{ post.formattedDate }}
          </time>
          <h3 class="blog-card-title">
            <a
              class="blog-card-link blog-card-title-link"
              :href="post.path"
            >
              {{ post.title }}
            </a>
          </h3>
          <p
            v-if="post.description"
            class="blog-card-description"
          >
            {{ post.description }}
          </p>
          <a
            class="blog-card-link blog-card-read-more"
            :href="post.path"
          >
            {{ t('blog.readMore') }}
          </a>
        </article>
        <router-link
          class="blog-card-link blog-card-read-more blog-card-read-more--cta"
          :to="{ name: 'blog' }"
        >
          {{ t('blog.readBlogButton') }}
        </router-link>
        <BlogChat />
      </div>
    </div>

    <div
      v-if="locale !== 'en'"
      class="contact-section"
    >
      <div class="contacts">
        <div class="contacts-container">
          <div class="form-title">
            {{ t('contact.title') }}
          </div>
          <div class="contacts-wrapper">
            <div class="contact-block">
              <div class="link-container">
                <div class="contact-text label">
                  {{ t('contact.email') }}
                </div>
                <a
                  href="mailto:hi@mikwiseman.com"
                  class="contact-text link"
                >hi@mikwiseman.com</a>
              </div>
              <div class="link-container">
                <div class="contact-text label">
                  {{ t('contact.telegram') }}
                </div>
                <a
                  href="https://t.me/mikwiseman"
                  target="_blank"
                  class="contact-text link"
                >@MIKWISEMAN</a>
              </div>
            </div>
            <div class="divider" />
            <div class="address-block">
              <div class="link-container">
                <div class="contact-text label">
                  {{ t('contact.phone') }}
                </div>
                <p class="address-text">
                  +7 (936) 316-39-61 <br>
                </p>
              </div>
              <div class="link-container">
                <div class="contact-text label">
                  {{ t('contact.address') }}
                </div>
                <p class="address-text">
                  г.Москва, ул. Большая Садовая, 5/1, 4 этаж
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="form-container">
        <div class="form-title white">
          {{ t('contact.leaveRequest') }}
        </div>
        <div
          id="w-node-c93d6324-cde1-923f-b9c7-dece9dafa6f3-b9cd35b6"
          class="foot-logo-container"
        >
          <img
            src="@/assets/images/logo_02.svg"
            loading="lazy"
            width="246"
            alt=""
            class="image-2"
          >
          <div class="footer-bottom">
            <p class="footer-copyright">
              {{ t('contact.copyright') }}
            </p>
            <a
              :href="$i18n.locale === 'ru' ? 'https://docs.google.com/document/d/1Xh5HF6y-1nSrwcg6mxpdzgU_uz3Q9DNy' : 'https://docs.google.com/document/d/1wAv1IuOxSROJ8Vr4aRrxPFLmZvnWeyIu'" 
              target="_blank" 
              class="footer-copyright footer-link"
            >
              {{ t('offer.viewOffer') }}
            </a>
            <p class="footer-copyright">
              {{ t('contact.inn') }}
            </p>
          </div>
        </div>
        <a
          href="https://calendly.com/mikwiseman/hi"
          target="_blank"
          class="contact-button-circle"
        >
          <div class="button-text-circle">{{ t('header.discussProject') }}</div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, defineComponent, onMounted, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import BlogChat from '@/components/BlogChat.vue'
import { fetchBlogPosts, formatBlogDate } from '@/utils/blogPosts'

export default defineComponent({
  name: 'HomePage',
  components: {
    BlogChat
  },
  setup() {
    const { t, tm, locale } = useI18n()

    const blogPosts = ref([])
    const blogLoading = ref(false)
    const blogLoadFailed = ref(false)
    const blogInitialized = ref(false)

    const loadBlogPosts = async () => {
      if (blogLoading.value) {
        return
      }

      blogLoading.value = true
      blogLoadFailed.value = false

      try {
        blogPosts.value = await fetchBlogPosts()
      } catch (error) {
        console.error('Failed to load blog posts', error)
        blogLoadFailed.value = true
      } finally {
        blogLoading.value = false
        blogInitialized.value = true
      }
    }

    onMounted(() => {
      if (locale.value !== 'en') {
        loadBlogPosts()
      }
    })

    watch(locale, (newLocale, oldLocale) => {
      if (newLocale === 'en') {
        return
      }

      if (oldLocale === 'en' || blogPosts.value.length === 0) {
        loadBlogPosts()
      }
    })

    const featuredBlogPosts = computed(() =>
      blogPosts.value
        .slice(0, 5)
        .map((post) => ({
          ...post,
          formattedDate: formatBlogDate(post?.date, locale.value)
        }))
    )

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

    const agentKeys = ['sales', 'hr', 'custom', 'training']

    const agentCards = computed(() =>
      agentKeys.map((key) => {
        const stats = tm(`agents.${key}.stats`)
        return {
          key,
          title: t(`agents.${key}.title`),
          description: t(`agents.${key}.description`),
          presentationLink: t(`agents.${key}.presentationLink`),
          stats: Array.isArray(stats)
            ? stats.map((stat, index) => ({
                value: stat?.value ?? '',
                label: stat?.labelKey ? t(stat.labelKey) : '',
                statKey: `stat-${key}-${index}`
              }))
            : []
        }
      })
    )

    const mediaConfig = [
      {
        key: 'rb',
        logo: new URL('../assets/images/rb.svg', import.meta.url).href,
        url: 'https://rb.ru/opinion/it-gumanitarii/'
      },
      {
        key: 'rbc',
        logo: new URL('../assets/images/rbc.svg', import.meta.url).href,
        url: 'https://pro.rbc.ru/demo/65df21019a79476a26d4cedb'
      },
      {
        key: 'secretmag',
        logo: new URL('../assets/images/sf.svg', import.meta.url).href,
        url: 'https://secretmag.ru/practice/kak-rabotat-s-inostrannymi-partnyorami-laifkhaki-rossiiskikh-biznesmenov.htm'
      },
      {
        key: 'hightech',
        logo: new URL('../assets/images/hitech.svg', import.meta.url).href,
        url: 'https://hightech.fm/2024/01/23/ai-kills'
      },
      {
        key: 'itworld',
        logo: new URL('../assets/images/itworld.svg', import.meta.url).href,
        url: 'https://www.it-world.ru/cionews/practice/214762.html'
      },
      {
        key: 'cnews',
        logo: new URL('../assets/images/cnews.svg', import.meta.url).href,
        url: 'https://www.cnews.ru/news/line/2025-04-23_ceo_trinity_monsters_zapustil_startap'
      },
      {
        key: 'tbank',
        logo: new URL('../assets/images/biznes-sekrety.svg', import.meta.url).href,
        url: 'https://secrets.tbank.ru/startapnaya-elegiya'
      },
      {
        key: 'aitoolz',
        logo: new URL('../assets/images/ai-toolz.svg', import.meta.url).href,
        url: 'https://aitoolz.ru/news/ai-agenty-ot-khajpa-k-realnym-biznes-instrumentam-stoimostyu-do-20-000-v-mesyats@215'
      }
    ]

    const mediaMentions = mediaConfig.map((item) => ({
      key: item.key,
      logo: item.logo,
      url: item.url
    }))

    const casesConfig = [
      {
        key: 'falcone',
        stats: [
          { value: '38', labelKey: 'cases.stats.positionsClosed' },
          { value: '62%', labelKey: 'cases.stats.replyRateGrowth' }
        ]
      },
      {
        key: 'akBarsBank',
        stats: [
          { value: '45%', labelKey: 'cases.stats.timeToHireCut' },
          { value: '120', labelKey: 'cases.stats.hoursSaved' }
        ]
      },
      {
        key: 'alphaBank',
        stats: [
          { value: '4', labelKey: 'cases.stats.workshopsRun' },
          { value: '48', labelKey: 'cases.stats.specialistsUpskilled' }
        ]
      },
      {
        key: 'ontico',
        stats: [
          { value: '27', labelKey: 'cases.stats.positionsClosed' },
          { value: '3.1x', labelKey: 'cases.stats.replyRateGrowth' }
        ]
      },
      {
        key: 'kodix',
        stats: [
          { value: '68%', labelKey: 'cases.stats.timeToHireCut' },
          { value: '18', labelKey: 'cases.stats.interviewsScheduled' },
          { value: '40', labelKey: 'cases.stats.hoursSaved' }
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

    const faqItems = computed(() => {
      const items = tm('faq.items')
      if (!Array.isArray(items)) {
        return []
      }

      return items.map((item, index) => ({
        key: `faq-${index}`,
        question: item?.question ?? '',
        answer: item?.answer ?? ''
      }))
    })

    return {
      t,
      locale,
      teamMembers,
      agentCards,
      mediaMentions,
      caseCards,
      faqItems,
      featuredBlogPosts,
      blogLoading,
      blogLoadFailed,
      blogInitialized
    }
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
  text-decoration: none;
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
  padding: 4rem clamp(1rem, 3vw, 2.25rem);
  background-color: #fff;
}

.blog-title {
  font-family: Inter Tight, sans-serif;
  font-size: 2rem;
  font-weight: 400;
  line-height: 2rem;
  margin: 0 auto 2rem;
  max-width: 1520px;
  width: 100%;
  color: #000;
}

.blog-status {
  font-family: Inter Tight, sans-serif;
  font-size: 1rem;
  color: #475569;
}

.blog-status--error {
  color: #dc2626;
}

.blog-cards {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 1520px;
  width: 100%;
  margin: 0 auto;
}

.blog-card {
  background: #fff;
  border-radius: 1.75rem;
  padding: 2.25rem;
  box-shadow: 0 20px 40px rgba(0, 39, 19, 0.08);
  border: 1px solid rgba(0, 27, 15, 0.08);
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  font-family: 'Roboto Mono', monospace;
  color: #000;
}

.blog-card-date {
  font-size: 0.95rem;
  color: #000;
  opacity: 0.8;
}

.blog-card-title {
  font-family: inherit;
  font-size: 1.5rem;
  font-weight: 500;
  margin: 0;
  color: #000;
}

.blog-card-title-link {
  text-decoration: none;
  color: inherit;
}

.blog-card-title-link:hover {
  color: #2563eb;
}

.blog-card-description {
  margin: 0;
  font-size: 1rem;
  line-height: 1.5rem;
  color: #000;
}

.blog-card-link {
  font-weight: 600;
  text-decoration: none;
  color: #000;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-family: inherit;
}

.blog-card-link::after {
  content: '→';
  font-size: 1rem;
}

.blog-card-link:hover {
  color: #2563eb;
}

.blog-card-read-more {
  font-size: 0.95rem;
}

.blog-card-read-more--cta {
  margin-top: 0.5rem;
  align-self: flex-start;
  padding: 0.85rem 1.6rem;
  border-radius: 999px;
  background: #000;
  color: #fff;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.blog-card-read-more--cta:hover {
  color: #fff;
  background: #2563eb;
}

@media screen and (max-width: 767px) {
  .blog {
    padding: 2rem 1rem;
  }
  
  .blog-title {
    font-size: 1.5rem;
    line-height: 1.5rem;
  }

  .blog-card {
    padding: 1.75rem;
    gap: 1rem;
  }
 
  .blog-card-title {
    font-size: 1.4rem;
  }
}

.proj-section .title {
  color: #04170e;
}

.section-label {
  display: inline-block;
  margin-bottom: 0.75rem;
  padding: 0.4rem 1rem;
  border-radius: 999px;
  background: #e5ff32;
  color: #04170e;
  font-family: "Inter Tight", sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
}

@media screen and (min-width: 1024px) {
  .cases-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

.section-subtitle {
  font-family: "Inter Tight", sans-serif;
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 1.5rem;
  margin: 0;
  color: #04170e;
}

.scenario-text p {
  font-family: Inter, sans-serif;
  font-size: 1rem;
  line-height: 1.65;
  color: rgba(0, 0, 0, 0.7);
  margin: 0;
}



.cases-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.25rem;
  margin-top: 2.25rem;
}

.agents-section {
  margin-bottom: 4rem;
}

.faq-section {
  margin-top: 4rem;
  padding: 0 2rem;
}

.faq-grid {
  margin-top: 0;
}

@media screen and (max-width: 767px) {
  .faq-section {
    padding: 0 1.25rem;
  }
}

.faq-card .case-header {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.faq-card .section-subtitle {
  font-size: 1.2rem;
}

.faq-answer {
  font-family: Inter, sans-serif;
  font-size: 1rem;
  line-height: 1.65;
  color: rgba(0, 0, 0, 0.7);
  margin: 0;
}

.case-card {
  background: #ffffff;
  border-radius: 1.75rem;
  border: 1px solid rgba(0, 27, 15, 0.08);
  padding: 2.25rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  box-shadow: 0 20px 40px rgba(0, 39, 19, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.case-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 24px 48px rgba(0, 39, 19, 0.12);
}

.case-header p {
  font-family: Inter, sans-serif;
  font-size: 1.05rem;
  line-height: 1.7;
  color: rgba(4, 23, 14, 0.72);
  margin: 0;
}

.case-header--agent {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.case-header-content {
  flex: 1 1 55%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-button-card {
  flex: 0 0 auto;
  background-color: var(--secondary);
  border-radius: 999px;
  padding: 0.9rem 1.85rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 12px 24px rgba(0, 39, 19, 0.12);
}

.contact-button-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 16px 32px rgba(0, 39, 19, 0.16);
}

.contact-button-card-text {
  color: #04170e;
  text-transform: uppercase;
  font-feature-settings: "dlig" on, "ss07" on, "ss04" on;
  font-family: Elmamono, sans-serif;
  font-weight: 500;
  letter-spacing: 1px;
  font-size: 0.95rem;
}

@media screen and (max-width: 767px) {
  .case-header--agent {
    flex-direction: column;
    align-items: flex-start;
  }

  .contact-button-card {
    width: 100%;
    justify-content: center;
  }
}

.case-stats {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 0.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(0, 27, 15, 0.08);
}

.case-stat {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.case-stat-value {
  font-family: "Inter Tight", sans-serif;
  font-size: 1.65rem;
  font-weight: 600;
  color: #04170e;
}

.case-stat-label {
  font-family: Inter, sans-serif;
  font-size: 0.95rem;
  color: rgba(4, 23, 14, 0.6);
}

.case-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 0.75rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(0, 27, 15, 0.08);
}

.case-tag {
  padding: 0.5rem 1rem;
  border-radius: 999px;
  background: rgba(0, 39, 19, 0.08);
  color: #04170e;
  font-family: Inter, sans-serif;
  font-size: 0.9rem;
  letter-spacing: 0.4px;
  text-transform: uppercase;
}

.team-section {
  padding: 4rem 2rem 2.5rem;
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

@media screen and (max-width: 991px) {
  .scenarios-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .scenario-module {
    padding: 1.5rem 1.25rem;
  }

  .cases-grid {
    grid-template-columns: 1fr;
    gap: 1.75rem;
  }

  .case-card {
    padding: 1.75rem;
    gap: 1rem;
  }

  .case-stats {
    gap: 1.5rem;
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

}

/* Media Mentions Section */
.media-mentions {
  padding: 2.25rem 2rem 2rem;
  background-color: #fff;
  border-bottom: 1px solid var(--border);
}

.media-title {
  font-family: "Inter Tight", sans-serif;
  font-size: 1.7rem;
  font-weight: 500;
  line-height: 1.9rem;
  color: #04170e;
  margin-bottom: 1.75rem;
}

.media-container {
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 1.25rem 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
}

.media-container:last-of-type {
  border-bottom: none;
}

.media-name-title {
  display: flex;
  align-items: center;
  gap: 1.25rem;
}

.media-name {
  flex: 0 0 320px;
}

.media-logo {
  width: 84px;
  height: auto;
  filter: grayscale(100%);
  opacity: 0.75;
  transition: filter 0.3s ease, opacity 0.3s ease, transform 0.3s ease;
}

.media-name-title span {
  font-family: "Inter Tight", sans-serif;
  font-size: 1.1rem;
  font-weight: 500;
  text-transform: uppercase;
}

.media-collection {
  flex: 1;
}

.media-entry {
  display: flex;
  align-items: center;
}

.media-article a {
  font-family: "Inter Tight", sans-serif;
  font-size: 1.02rem;
  line-height: 1.55rem;
  color: #000;
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: color 0.3s ease, border-color 0.3s ease;
}

.media-article a:hover {
  color: var(--primary);
  border-bottom-color: var(--primary);
}

.media-container:hover .media-logo {
  filter: none;
  opacity: 1;
  transform: scale(1.05);
}

@media screen and (max-width: 991px) {
  .media-container {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }

  .media-name {
    flex: none;
  }

  .media-logo {
    width: 72px;
  }

  .media-name-title span {
    font-size: 1rem;
  }

  .media-article a {
    font-size: 0.96rem;
    line-height: 1.5rem;
  }
}

@media screen and (max-width: 767px) {
  .media-mentions {
    padding: 2rem 1.5rem 1.75rem;
  }

  .media-container {
    padding: 0.9rem 0;
  }

  .media-logo {
    width: 60px;
  }

  .media-article a {
    font-size: 0.9rem;
    line-height: 1.4rem;
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
