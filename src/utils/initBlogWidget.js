const BLOG_WIDGET_SRC = 'https://wai-blog-production-c8f0.up.railway.app/embed/embed.js'

export const initBlogWidget = () => {
  if (typeof document === 'undefined') {
    return
  }

  const container = document.getElementById('blog-widget')

  if (!container) {
    return
  }

  document
    .querySelectorAll(`script[src="${BLOG_WIDGET_SRC}"]`)
    .forEach((script) => {
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    })

  container.innerHTML = ''

  const blogScript = document.createElement('script')

  blogScript.src = BLOG_WIDGET_SRC
  blogScript.dataset.target = 'blog-widget'
  blogScript.dataset.limit = '5'
  blogScript.dataset.images = 'true'
  blogScript.dataset.excerpt = 'true'
  blogScript.dataset.readMore = 'Continue reading'
  blogScript.dataset.primaryColor = '#2563eb'
  blogScript.dataset.newTab = 'false'

  container.insertAdjacentElement('afterend', blogScript)
}
