<template>
  <div class="blog-page">
    <div class="blog-container">
      <h1 class="blog-title">
        {{ t('blog.title') }}
      </h1>
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
        v-else-if="blogInitialized && formattedPosts.length === 0"
        class="blog-status"
      >
        {{ t('blog.empty') }}
      </div>
      <div
        v-else
        class="blog-cards"
      >
        <article
          v-for="post in formattedPosts"
          :key="post.path"
          class="blog-card"
        >
          <time class="blog-card-date">
            {{ post.formattedDate }}
          </time>
          <h2 class="blog-card-title">
            <a
              class="blog-card-link blog-card-title-link"
              :href="post.path"
            >
              {{ post.title }}
            </a>
          </h2>
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
      </div>
    </div>
  </div>
</template>

<script>
import { computed, defineComponent, onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { fetchBlogPosts, formatBlogDate } from '@/utils/blogPosts'

export default defineComponent({
  name: 'BlogPage',
  setup() {
    const { t, locale } = useI18n()
    const blogPosts = ref([])
    const blogLoading = ref(true)
    const blogLoadFailed = ref(false)
    const blogInitialized = ref(false)

    const loadPosts = async () => {
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
      loadPosts()
    })

    const formattedPosts = computed(() =>
      blogPosts.value.map((post) => ({
        ...post,
        formattedDate: formatBlogDate(post?.date, locale.value)
      }))
    )

    return {
      t,
      blogLoading,
      blogLoadFailed,
      blogInitialized,
      formattedPosts
    }
  }
})
</script>

<style scoped>
.blog-page {
  padding: 4rem 2rem;
  background-color: #fff;
  min-height: 100vh;
}

.blog-container {
  max-width: 1200px;
  margin: 0 auto;
}

.blog-title {
  font-family: Inter Tight, sans-serif;
  font-size: 2.5rem;
  font-weight: 400;
  line-height: 1.2;
  margin-bottom: 3rem;
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
  gap: 1.75rem;
}

.blog-card {
  background: #fff;
  border-radius: 1.75rem;
  padding: 2.5rem;
  box-shadow: 0 24px 48px rgba(0, 39, 19, 0.12);
  border: 1px solid rgba(0, 27, 15, 0.08);
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.blog-card-date {
  font-size: 0.95rem;
  color: #64748b;
}

.blog-card-title {
  font-family: Inter Tight, sans-serif;
  font-size: 1.75rem;
  font-weight: 500;
  margin: 0;
  color: #0f172a;
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
  font-size: 1.05rem;
  line-height: 1.6rem;
  color: #1f2937;
}

.blog-card-link {
  font-weight: 600;
  text-decoration: none;
  color: #2563eb;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
}

.blog-card-link::after {
  content: '→';
  font-size: 1rem;
}

.blog-card-read-more {
  font-size: 1rem;
}

@media screen and (max-width: 991px) {
  .blog-title {
    font-size: 2.25rem;
    margin-bottom: 2.5rem;
  }

  .blog-card {
    padding: 2.1rem;
    gap: 1.1rem;
  }

  .blog-card-title {
    font-size: 1.65rem;
  }
}

@media screen and (max-width: 767px) {
  .blog-page {
    padding: 2rem 1rem;
  }
  
  .blog-title {
    font-size: 2rem;
    line-height: 1.2;
    margin-bottom: 2rem;
  }

  .blog-card {
    padding: 1.75rem;
    gap: 1rem;
  }

  .blog-card-title {
    font-size: 1.45rem;
  }
}
</style> 
