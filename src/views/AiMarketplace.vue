<template>
  <div class="marketplace">
    <section class="marketplace__hero">
      <p class="marketplace__badge">
        {{ t('marketplace.badge') }}
      </p>
      <h1 class="marketplace__title">
        {{ t('marketplace.title') }}
      </h1>
      <p class="marketplace__description">
        {{ t('marketplace.description') }}
      </p>
    </section>

    <section class="marketplace__grid">
      <article
        v-for="agent in agents"
        :key="agent.key"
        class="marketplace-card"
      >
        <header class="marketplace-card__header">
          <h2>{{ agent.title }}</h2>
          <p>{{ agent.description }}</p>
        </header>
        <dl
          v-if="agent.stats.length"
          class="marketplace-card__stats"
        >
          <div
            v-for="stat in agent.stats"
            :key="stat.id"
            class="marketplace-card__stat"
          >
            <dt>{{ stat.label }}</dt>
            <dd>{{ stat.value }}</dd>
          </div>
        </dl>
        <a
          v-if="agent.presentationLink"
          :href="agent.presentationLink"
          target="_blank"
          rel="noopener noreferrer"
          class="marketplace-card__cta"
        >
          {{ t('header.presentation') }}
        </a>
      </article>
    </section>
  </div>
</template>

<script>
import { computed, defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: 'AiMarketplace',
  setup() {
    const { t, tm } = useI18n()

    const agentKeys = [
      'sales',
      'hr',
      'custom',
      'training',
      'deepSearch',
      'summarizer'
    ]

    const agents = computed(() =>
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
                id: `${key}-stat-${index}`
              }))
            : []
        }
      })
    )

    return {
      t,
      agents
    }
  }
})
</script>

<style scoped>
.marketplace {
  padding: 8rem 2rem 4rem;
  background: var(--wai-hero-gradient, linear-gradient(180deg, #000000 0%, #050f2f 55%, #0f5bff 100%));
  min-height: 100vh;
  color: #fff;
}

.marketplace__hero {
  max-width: 960px;
  margin: 0 auto 3rem;
  text-align: center;
}

.marketplace__badge {
  font-family: 'Elmamono', 'Roboto Mono', monospace;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--deep-blue-bright, #8fb2ff);
  margin-bottom: 1rem;
}

.marketplace__title {
  font-family: 'Inter Tight', sans-serif;
  font-size: clamp(2.5rem, 6vw, 4rem);
  margin: 0 0 1rem;
}

.marketplace__description {
  font-size: 1.15rem;
  line-height: 1.6;
  color: var(--deep-blue-text-muted-override, rgba(214, 228, 255, 0.65));
}

.marketplace__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  max-width: 1280px;
  margin: 0 auto;
}

.marketplace-card {
  background: var(--wai-panel-gradient, linear-gradient(155deg, rgba(1, 4, 12, 0.92) 0%, rgba(15, 91, 255, 0.6) 100%));
  border-radius: 1.75rem;
  padding: 2rem;
  border: 1px solid rgba(15, 91, 255, 0.35);
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  min-height: 100%;
  box-shadow: 0 35px 80px rgba(3, 8, 24, 0.65);
}

.marketplace-card__header h2 {
  margin: 0 0 0.5rem;
  font-size: 1.5rem;
}

.marketplace-card__header p {
  margin: 0;
  color: var(--deep-blue-text-muted-override, rgba(214, 228, 255, 0.65));
}

.marketplace-card__stats {
  display: grid;
  gap: 1rem;
  margin: 0;
}

.marketplace-card__stat {
  display: flex;
  justify-content: space-between;
  border-top: 1px solid rgba(214, 228, 255, 0.25);
  padding-top: 0.75rem;
}

.marketplace-card__stat dt {
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--deep-blue-text-muted-override, rgba(214, 228, 255, 0.65));
}

.marketplace-card__stat dd {
  margin: 0;
  font-weight: 600;
}

.marketplace-card__cta {
  align-self: flex-start;
  padding: 0.75rem 1.25rem;
  border-radius: 999px;
  background: var(--wai-accent-gradient, linear-gradient(135deg, #041336 0%, #0f5bff 100%));
  color: #fff;
  font-family: 'Elmamono', 'Roboto Mono', monospace;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  text-decoration: none;
  border: 1px solid rgba(15, 91, 255, 0.45);
  box-shadow: 0 20px 45px rgba(3, 8, 24, 0.5);
}

@media (max-width: 640px) {
  .marketplace {
    padding: 7rem 1rem 3rem;
  }

  .marketplace-card {
    padding: 1.5rem;
  }
}
</style>
