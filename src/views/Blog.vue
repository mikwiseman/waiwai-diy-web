<template>
  <div class="blog-page">
    <div class="blog-container">
      <h1 class="integration-title">Blog Integration Guide</h1>
      
      <div class="integration-step">
        <h2>Step 1: Add the Blog Script to Your Page</h2>
        <p>Copy and paste this script anywhere on your page.</p>
        <p>If you're using a website builder, you can place it in an Embed Code or Custom HTML block.</p>
        <div class="code-block">
          <code>&lt;script async src="https://io.dropinblog.com/embedjs/17c5ce72-538c-4e85-bb74-4caf5c615779.js"&gt;&lt;/script&gt;</code>
        </div>
      </div>

      <div class="integration-step">
        <h2>Step 2: Choose Where Your Blog Appears</h2>
        <p>Paste this code in the same block (if using a builder) or anywhere on your page where you want the blog to show.</p>
        <div class="code-block">
          <code>&lt;div id="dib-posts"&gt;&lt;/div&gt;</code>
        </div>
      </div>

      <div class="blog-preview">
        <h2>Blog Preview</h2>
        <div id="dib-posts"></div>
      </div>

      <div class="help-section">
        <h2>Need help?</h2>
        <ul>
          <li><a href="https://dropinblog.com/docs" target="_blank">View integration guides</a></li>
          <li><a href="https://dropinblog.com/video" target="_blank">Watch integration video</a></li>
          <li><a href="https://dropinblog.com/contact" target="_blank">Message us</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogPage',
  mounted() {
    // Ensure DropInBlog script is loaded
    if (!document.querySelector('script[src*="dropinblog.com"]')) {
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://io.dropinblog.com/embedjs/17c5ce72-538c-4e85-bb74-4caf5c615779.js';
      document.head.appendChild(script);
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

.integration-title {
  font-family: Inter Tight, sans-serif;
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 3rem;
  color: #000;
}

.integration-step {
  margin-bottom: 3rem;
}

.integration-step h2 {
  font-family: Inter Tight, sans-serif;
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 1rem;
  color: #000;
}

.code-block {
  background: #f5f5f5;
  border-radius: 8px;
  padding: 1.5rem;
  margin: 1rem 0;
  overflow-x: auto;
}

.code-block code {
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
  color: #333;
}

.blog-preview {
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid #eee;
}

.blog-preview h2 {
  font-family: Inter Tight, sans-serif;
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 2rem;
  color: #000;
}

.help-section {
  margin-top: 4rem;
  padding: 2rem;
  background: #f9f9f9;
  border-radius: 12px;
}

.help-section h2 {
  font-family: Inter Tight, sans-serif;
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 1rem;
  color: #000;
}

.help-section ul {
  list-style: none;
  padding: 0;
}

.help-section li {
  margin-bottom: 0.5rem;
}

.help-section a {
  color: #0066cc;
  text-decoration: none;
  font-family: Inter, sans-serif;
  transition: color 0.3s ease;
}

.help-section a:hover {
  color: #004999;
  text-decoration: underline;
}

@media screen and (max-width: 767px) {
  .blog-page {
    padding: 2rem 1rem;
  }

  .integration-title {
    font-size: 2rem;
  }

  .integration-step h2 {
    font-size: 1.25rem;
  }
}
</style> 