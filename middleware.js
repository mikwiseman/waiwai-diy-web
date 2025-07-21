import { NextResponse } from '@vercel/edge'

export const config = {
  matcher: '/(.*)',
}

export default async function middleware(request) {
  const response = NextResponse.next()
  const url = new URL(request.url)
  const hostname = request.headers.get('host') || ''
  
  // Only process HTML responses
  if (!url.pathname.endsWith('.html') && url.pathname !== '/') {
    return response
  }

  // Fetch the original response
  const originalResponse = await fetch(request)
  const html = await originalResponse.text()
  
  // Skip if not HTML
  if (!originalResponse.headers.get('content-type')?.includes('text/html')) {
    return response
  }

  // Determine meta tags based on domain
  const isRussian = hostname.includes('waiwai.diy')
  
  const metaTags = isRussian ? `
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://waiwai.diy">
    <meta property="og:title" content="WaiWai - AI агенты для автоматизации продаж и маркетинга">
    <meta property="og:description" content="AI агенты для автоматизации продаж и маркетинга. Увеличиваем продажи на 21%, сокращаем время на рутину на 41%. Интеллектуальные агенты для email-рассылок, CRM, маркетплейсов и социальных сетей.">
    <meta property="og:image" content="https://waiwai.diy/og-image.jpg">
    
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://waiwai.diy">
    <meta property="twitter:title" content="WaiWai - AI агенты для автоматизации продаж и маркетинга">
    <meta property="twitter:description" content="AI агенты для автоматизации продаж и маркетинга. Увеличиваем продажи на 21%, сокращаем время на рутину на 41%. Интеллектуальные агенты для email-рассылок, CRM, маркетплейсов и социальных сетей.">
    <meta property="twitter:image" content="https://waiwai.diy/og-image.jpg">` : `
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://wai.sale">
    <meta property="og:title" content="WaiWai - AI Agents for Sales and Marketing Automation">
    <meta property="og:description" content="AI agents for sales and marketing automation. Increase sales by 21%, reduce routine work by 41%. Smart agents for email campaigns, CRM, marketplaces, and social media.">
    <meta property="og:image" content="https://wai.sale/og-image.jpg">
    
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://wai.sale">
    <meta property="twitter:title" content="WaiWai - AI Agents for Sales and Marketing Automation">
    <meta property="twitter:description" content="AI agents for sales and marketing automation. Increase sales by 21%, reduce routine work by 41%. Smart agents for email campaigns, CRM, marketplaces, and social media.">
    <meta property="twitter:image" content="https://wai.sale/og-image.jpg">`

  // Insert meta tags after <title> tag
  const modifiedHtml = html.replace('</title>', `</title>${metaTags}`)

  return new Response(modifiedHtml, {
    status: originalResponse.status,
    statusText: originalResponse.statusText,
    headers: {
      ...originalResponse.headers,
      'content-type': 'text/html; charset=utf-8'
    }
  })
}