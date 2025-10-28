<template>
  <div class="blog-page">
    <div class="blog-container">
      <div id="blog-widget" />
    </div>
  </div>
</template>

<script>
import { defineComponent, nextTick, onMounted } from 'vue'
import { initBlogWidget } from '@/utils/initBlogWidget'

export default defineComponent({
  name: 'BlogPage',
  setup() {
    onMounted(() => {
      nextTick(() => {
        initBlogWidget()
      })
    })
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

@media screen and (max-width: 767px) {
  .blog-page {
    padding: 2rem 1rem;
  }
  
  .blog-title {
    font-size: 2rem;
    line-height: 1.2;
    margin-bottom: 2rem;
  }
}
</style> 
