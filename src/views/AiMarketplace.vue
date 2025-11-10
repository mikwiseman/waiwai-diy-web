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
  background: #010603;
  min-height: 100vh;
  color: #f4f7ed;
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
  color: #d7ff32;
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
  color: rgba(244, 247, 237, 0.85);
}

.marketplace__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  max-width: 1280px;
  margin: 0 auto;
}

.marketplace-card {
  background: #031209;
  border-radius: 1.75rem;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  min-height: 100%;
}

.marketplace-card__header h2 {
  margin: 0 0 0.5rem;
  font-size: 1.5rem;
}

.marketplace-card__header p {
  margin: 0;
  color: rgba(244, 247, 237, 0.8);
}

.marketplace-card__stats {
  display: grid;
  gap: 1rem;
  margin: 0;
}

.marketplace-card__stat {
  display: flex;
  justify-content: space-between;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding-top: 0.75rem;
}

.marketplace-card__stat dt {
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: rgba(244, 247, 237, 0.65);
}

.marketplace-card__stat dd {
  margin: 0;
  font-weight: 600;
}

.marketplace-card__cta {
  align-self: flex-start;
  padding: 0.75rem 1.25rem;
  border-radius: 999px;
  background: #d7ff32;
  color: #041106;
  font-family: 'Elmamono', 'Roboto Mono', monospace;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  text-decoration: none;
  border: 2px solid #0d1b11;
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
