const BLOG_INDEX_PATH = '/blog/index.html'

const fallbackBaseUrl = 'https://example.com'

const deriveBlogPath = (rawPath = '') => {
  if (!rawPath) {
    return { slug: '', path: '' }
  }

  const withoutQuery = rawPath.split('?')[0]
  const withoutIndex = withoutQuery.replace(/index\.html?$/i, '')
  const normalized = withoutIndex
    .replace(/\\+/g, '/')
    .replace(/\/+/g, '/')
    .replace(/^\/+/g, '')
    .replace(/\/+$/, '')

  const segments = normalized.split('/').filter(Boolean)

  if (segments.length === 0) {
    return { slug: '', path: '' }
  }

  const blogIndex = segments.indexOf('blog')
  const postSegments = blogIndex === -1 ? segments : segments.slice(blogIndex + 1)

  if (postSegments.length === 0) {
    return { slug: '', path: '' }
  }

  const slug = postSegments[postSegments.length - 1]
  const path = `/blog/${postSegments.join('/')}/`

  return { slug, path }
}

const parseHref = (href = '') => {
  const trimmed = href.trim()

  if (!trimmed) {
    return { slug: '', path: '' }
  }

  try {
    const url = new URL(trimmed, fallbackBaseUrl)
    return deriveBlogPath(url.pathname)
  } catch (error) {
    return deriveBlogPath(trimmed)
  }
}

const parseArticle = (article) => {
  if (!article) {
    return null
  }

  const titleAnchor = article.querySelector('h2 a')
  const descriptionElement = article.querySelector('p')
  const timeElement = article.querySelector('time')

  const sourceHref = titleAnchor?.getAttribute('href') ?? ''
  const { slug, path } = parseHref(sourceHref)

  if (!slug || !path) {
    return null
  }

  const datetime = timeElement?.getAttribute('datetime') ?? ''
  const parsedDate = datetime ? new Date(datetime) : null

  return {
    title: titleAnchor?.textContent?.trim() ?? '',
    description: descriptionElement?.textContent?.trim() ?? '',
    datetime,
    date: parsedDate instanceof Date && !Number.isNaN(parsedDate.getTime()) ? parsedDate : null,
    slug,
    path,
    sourceHref
  }
}

export const fetchBlogPosts = async () => {
  if (typeof window === 'undefined') {
    return []
  }

  const response = await fetch(BLOG_INDEX_PATH, { cache: 'no-store' })

  if (!response.ok) {
    throw new Error(`Unable to load blog index (${response.status})`)
  }

  const html = await response.text()

  if (typeof DOMParser === 'undefined') {
    throw new Error('DOMParser is not available in this environment')
  }

  const parser = new DOMParser()
  const doc = parser.parseFromString(html, 'text/html')
  const articles = Array.from(doc.querySelectorAll('section.cards article.card'))

  const posts = articles
    .map(parseArticle)
    .filter((post) => post && post.title && post.path)

  posts.sort((a, b) => {
    const aTime = a?.date?.getTime() ?? 0
    const bTime = b?.date?.getTime() ?? 0
    return bTime - aTime
  })

  return posts
}

export const formatBlogDate = (date, locale) => {
  if (!(date instanceof Date) || Number.isNaN(date.getTime())) {
    return ''
  }

  const targetLocale = locale === 'ru' ? 'ru-RU' : 'en-US'

  return new Intl.DateTimeFormat(targetLocale, {
    year: 'numeric',
    month: 'short',
    day: '2-digit'
  }).format(date)
}
