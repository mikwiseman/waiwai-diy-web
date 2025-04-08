<template>
  <div class="blog-page">
    <div class="blog-container">
      <h1 class="blog-title">{{ $t('blog.title') }}</h1>
      <div id="dib-posts"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogPage',
  mounted() {
    // Initialize DropInBlog if not already initialized
    if (!document.querySelector('script[src*="dropinblog"]')) {
      const dibScript = document.createElement('script');
      dibScript.async = true;
      dibScript.src = 'https://io.dropinblog.com/embedjs/17c5ce72-538c-4e85-bb74-4caf5c615779.js';
      document.head.appendChild(dibScript);
    }
  }
}
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
  .blog-page {
    padding: 2rem 1rem;
  }
  
  .blog-title {
    font-size: 2rem;
    line-height: 1.2;
    margin-bottom: 2rem;
  }
  
  :deep(.dib-posts) {
    grid-template-columns: 1fr;
  }
}
</style> 