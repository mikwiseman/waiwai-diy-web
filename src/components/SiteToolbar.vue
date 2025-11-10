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
        to: { name: 'home' }
      },
      {
        key: 'marketplace',
        label: t('toolbar.marketplace'),
        to: { name: 'home', hash: '#ai-marketplace' }
      },
      {
        key: 'waicode',
        label: t('toolbar.waicode'),
        to: { name: 'home', hash: '#waicode-waisdk' }
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
  background: rgba(3, 10, 6, 0.95);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
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
  justify-content: center;
  gap: 2rem;
  font-family: 'Elmamono', 'Roboto Mono', monospace;
  text-transform: uppercase;
}

.site-toolbar__link {
  color: rgba(255, 255, 255, 0.78);
  font-size: 0.92rem;
  letter-spacing: 0.04em;
  text-decoration: none;
  transition: color 0.2s ease;
}

.site-toolbar__link.router-link-active,
.site-toolbar__link:hover,
.site-toolbar__link:focus-visible {
  color: #d7ff32;
}

.site-toolbar__cta {
  margin-left: auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 1.5rem;
  border-radius: 999px;
  background: #d7ff32;
  color: #091106;
  text-transform: uppercase;
  font-family: 'Elmamono', 'Roboto Mono', monospace;
  font-size: 0.85rem;
  letter-spacing: 0.05em;
  text-decoration: none;
  border: 2px solid #0d1b11;
  box-shadow: 0 8px 30px rgba(215, 255, 50, 0.35);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.site-toolbar__cta:hover,
.site-toolbar__cta:focus-visible {
  transform: translateY(-1px);
  box-shadow: 0 12px 38px rgba(215, 255, 50, 0.45);
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
