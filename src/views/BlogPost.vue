<template>
  <div class="blog-post">
    <div class="blog-header">
      <div class="container">
        <h1 class="blog-title">{{ $t(`blog.${postId}.title`) }}</h1>
      </div>
    </div>
    
    <div class="blog-content">
      <div class="container">
        <div class="blog-image">
          <img :src="require(`@/assets/images/${postId}.jpg`)" :alt="$t(`blog.${postId}.title`)" />
        </div>
        <div class="blog-text" v-html="formattedContent"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogPost',
  props: {
    id: {
      type: String,
      required: true
    }
  },
  computed: {
    postId() {
      return this.id;
    },
    formattedContent() {
      return this.$t(`blog.${this.postId}.content`).split('\n').map(paragraph => 
        paragraph.startsWith('-') ? 
          `<li>${paragraph.substring(2)}</li>` : 
          `<p>${paragraph}</p>`
      ).join('');
    }
  }
}
</script>

<style scoped>
.blog-post {
  background-color: #002713;
  min-height: 100vh;
  color: #E5FF32;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
}

.blog-header {
  padding: 60px 0;
  background-color: #001a0d;
}

.blog-title {
  font-family: 'Inter', sans-serif;
  font-size: 42px;
  font-weight: 600;
  margin: 0;
  color: #E5FF32;
}

.blog-image {
  margin: 40px 0;
  border-radius: 8px;
  overflow: hidden;
}

.blog-image img {
  width: 100%;
  height: auto;
  display: block;
}

.blog-text {
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  line-height: 1.6;
  color: #fff;
}

.blog-text p {
  margin: 24px 0;
}

.blog-text li {
  margin: 12px 0;
  list-style-type: none;
  position: relative;
  padding-left: 24px;
}

.blog-text li:before {
  content: "•";
  color: #E5FF32;
  position: absolute;
  left: 0;
}
</style> 