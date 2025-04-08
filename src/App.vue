<template>
  <div id="app">
    <div id="luxy">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    // Initialize Luxy.js
    if (!/iPhone|iPad|Android/i.test(navigator.userAgent)) {
      window.luxy.init({
        wrapper: '#luxy',
        wrapperSpeed: 0.08,
      });
    }

    // Initialize DropInBlog
    const dibScript = document.createElement('script');
    dibScript.async = true;
    dibScript.src = 'https://io.dropinblog.com/embedjs/17c5ce72-538c-4e85-bb74-4caf5c615779.js';
    document.head.appendChild(dibScript);
  }
}
</script>

<style>
@import '@/assets/css/normalize.css';
@import '@/assets/css/webflow.css';
@import '@/assets/css/waiwaidiy.webflow.css';

/* Other styles */
.logo-card-whoverp .logo-image-media {
  filter: grayscale(100%);
  opacity: 50%;
  transition: opacity 0.3s ease;
  transition: filter 0.3s ease;
}

.logo-card-whoverp:hover .logo-image-media {
  filter: none;
  opacity: 100%;
}

.bg-gradient:tiny {
  filter: blur(100px);
  -webkit-filter: blur(100px);
}
</style>
