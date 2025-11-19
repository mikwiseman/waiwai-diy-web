<template>
  <header class="site-toolbar">
    <div class="site-toolbar__inner">
      <nav
        class="site-toolbar__nav"
        aria-label="Primary"
      >
        <router-link
          v-for="item in navItems"
          :key="item.key"
          :to="item.to"
          class="site-toolbar__link"
        >
          {{ item.label }}
        </router-link>
      </nav>
      <a
        class="site-toolbar__cta"
        href="https://calendly.com/mikwiseman/hi"
        target="_blank"
        rel="noopener noreferrer"
      >
        {{ t('header.discussProject') }}
      </a>
    </div>
  </header>
</template>

<script>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

export default {
  name: 'SiteToolbar',
  setup() {
    const { t } = useI18n()

    const navItems = computed(() => [
      {
        key: 'home',
        label: t('toolbar.home'),
        to: { name: 'home', hash: '#home' }
      },
      {
        key: 'agents',
        label: t('toolbar.agents'),
        to: { name: 'home', hash: '#agents' }
      },
      {
        key: 'faq',
        label: t('toolbar.faq'),
        to: { name: 'home', hash: '#faq' }
      },
      {
        key: 'cases',
        label: t('toolbar.cases'),
        to: { name: 'home', hash: '#cases' }
      },
      {
        key: 'team',
        label: t('toolbar.team'),
        to: { name: 'home', hash: '#team' }
      },
      {
        key: 'media',
        label: t('toolbar.media'),
        to: { name: 'home', hash: '#media' }
      },
      {
        key: 'awards',
        label: t('toolbar.awards'),
        to: { name: 'home', hash: '#awards' }
      },
      {
        key: 'blog',
        label: t('toolbar.blog'),
        to: { name: 'home', hash: '#blog' }
      },
      {
        key: 'contact',
        label: t('toolbar.contact'),
        to: { name: 'home', hash: '#contact' }
      }
    ])

    return {
      navItems,
      t
    }
  }
}
</script>

<style scoped>
.site-toolbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.92);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(12px);
}

.site-toolbar__inner {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1.5rem;
  max-width: 1440px;
  margin: 0 auto;
  padding: 1rem 2.5rem;
}

.site-toolbar__nav {
  flex: 1;
  display: flex;
  justify-content: flex-start;
  margin-right: auto;
  gap: 2rem;
  font-family: 'Elmamono', 'Roboto Mono', monospace;
  text-transform: uppercase;
}

.site-toolbar__link {
  color: rgba(214, 228, 255, 0.78);
  font-size: 0.92rem;
  letter-spacing: 0.04em;
  text-decoration: none;
  transition: color 0.2s ease;
}

.site-toolbar__link.router-link-active,
.site-toolbar__link:hover,
.site-toolbar__link:focus-visible {
  color: var(--deep-blue-bright);
}

.site-toolbar__cta {
  margin-left: auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 1.5rem;
  border-radius: 999px;
  background: var(--wai-accent-gradient, linear-gradient(135deg, #041336 0%, #0f5bff 100%));
  color: #fff;
  text-transform: uppercase;
  font-family: 'Elmamono', 'Roboto Mono', monospace;
  font-size: 0.85rem;
  letter-spacing: 0.05em;
  text-decoration: none;
  border: 1px solid rgba(15, 91, 255, 0.45);
  box-shadow: 0 12px 32px rgba(5, 16, 59, 0.45);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.site-toolbar__cta:hover,
.site-toolbar__cta:focus-visible {
  transform: translateY(-1px);
  box-shadow: 0 16px 40px rgba(5, 16, 59, 0.6);
}

@media (max-width: 1024px) {
  .site-toolbar__inner {
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }

  .site-toolbar__nav {
    flex: 1 1 100%;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .site-toolbar__cta {
    order: 1;
    margin-left: 0;
  }
}

@media (max-width: 600px) {
  .site-toolbar__inner {
    padding: 0.75rem 1rem;
  }

  .site-toolbar__nav {
    font-size: 0.78rem;
    gap: 0.75rem;
  }

  .site-toolbar__cta {
    width: 100%;
  }
}
</style>
