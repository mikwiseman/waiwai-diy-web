<template>
  <div class="blog-post">
    <div class="blog-container">
      <div class="blog-image">
        <img :src="require(`@/assets/images/${imageFileName}`)" :alt="$t(`blog.${postId}.title`)" />
      </div>
      
      <h1 class="blog-title">{{ $t(`blog.${postId}.title`) }}</h1>
      
      <div class="blog-text" v-html="formattedContent"></div>
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
    imageFileName() {
      const imageMap = {
        'post1': 'poisk-klientov.jpg',
        'post2': 'germes-presentation.jpg'
      };
      return imageMap[this.id] || 'default.jpg';
    },
    formattedContent() {
      const content = this.$t(`blog.${this.postId}.content`);
      return content.split('\n').map(paragraph => {
        if (paragraph.startsWith('-')) {
          return `<li>${paragraph.substring(1)}</li>`;
        } else if (paragraph.length === 0) {
          return '';
        } else if (paragraph.endsWith('?') || paragraph.endsWith(':')) {
          return `<h2>${paragraph}</h2>`;
        } else {
          return `<p>${paragraph}</p>`;
        }
      }).join('');
    }
  }
}
</script>

<style scoped>
.blog-post {
  background-color: #002713;
  min-height: 100vh;
  padding: 60px 20px;
}

.blog-container {
  max-width: 800px;
  margin: 0 auto;
  background-color: rgba(0, 39, 19, 0.7);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.2);
}

.blog-image {
  width: 100%;
  height: 400px;
  overflow: hidden;
  position: relative;
}

.blog-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.blog-title {
  font-family: 'Inter', sans-serif;
  font-size: 42px;
  font-weight: 600;
  color: #E5FF32;
  margin: 40px;
  line-height: 1.2;
}

.blog-text {
  padding: 0 40px 40px;
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  line-height: 1.8;
  color: #fff;
}

.blog-text h2 {
  font-family: 'Inter', sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: #E5FF32;
  margin: 40px 0 20px;
}

.blog-text p {
  margin: 24px 0;
  opacity: 0.9;
}

.blog-text li {
  margin: 16px 0 16px 20px;
  list-style-type: none;
  position: relative;
  padding-left: 24px;
  opacity: 0.9;
}

.blog-text li:before {
  content: "•";
  color: #E5FF32;
  position: absolute;
  left: 0;
  font-size: 20px;
  line-height: 1;
}

@media (max-width: 768px) {
  .blog-post {
    padding: 20px;
  }

  .blog-image {
    height: 300px;
  }

  .blog-title {
    font-size: 32px;
    margin: 30px;
  }

  .blog-text {
    padding: 0 30px 30px;
    font-size: 16px;
  }

  .blog-text h2 {
    font-size: 20px;
    margin: 30px 0 15px;
  }
}
</style> 