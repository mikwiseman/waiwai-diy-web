export const config = {
  runtime: 'edge',
};

export default async function handler(request) {
  const url = new URL(request.url);
  const hostname = request.headers.get('host') || '';
  const isRussian = hostname.includes('waiwai.diy');
  
  // Fetch the static HTML
  const response = await fetch(new URL('/index.html', url.origin));
  let html = await response.text();
  
  // Define meta tags based on domain
  const metaTags = isRussian ? `
    <meta name="description" content="AI агенты для автоматизации продаж и маркетинга. Увеличиваем продажи на 21%, сокращаем время на рутину на 41%. Интеллектуальные агенты для email-рассылок, CRM, маркетплейсов и социальных сетей.">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://waiwai.diy">
    <meta property="og:title" content="WaiWai - AI агенты для автоматизации продаж и маркетинга">
    <meta property="og:description" content="AI агенты для автоматизации продаж и маркетинга. Увеличиваем продажи на 21%, сокращаем время на рутину на 41%. Интеллектуальные агенты для email-рассылок, CRM, маркетплейсов и социальных сетей.">
    <meta property="og:site_name" content="WaiWai">
    <meta name="twitter:card" content="summary">
    <meta name="twitter:url" content="https://waiwai.diy">
    <meta name="twitter:title" content="WaiWai - AI агенты для автоматизации продаж и маркетинга">
    <meta name="twitter:description" content="AI агенты для автоматизации продаж и маркетинга. Увеличиваем продажи на 21%, сокращаем время на рутину на 41%. Интеллектуальные агенты для email-рассылок, CRM, маркетплейсов и социальных сетей.">
  ` : `
    <meta name="description" content="AI agents for sales and marketing automation. Increase sales by 21%, reduce routine work by 41%. Smart agents for email campaigns, CRM, marketplaces, and social media.">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://wai.sale">
    <meta property="og:title" content="WaiWai - AI Agents for Sales and Marketing Automation">
    <meta property="og:description" content="AI agents for sales and marketing automation. Increase sales by 21%, reduce routine work by 41%. Smart agents for email campaigns, CRM, marketplaces, and social media.">
    <meta property="og:site_name" content="WaiWai">
    <meta name="twitter:card" content="summary">
    <meta name="twitter:url" content="https://wai.sale">
    <meta name="twitter:title" content="WaiWai - AI Agents for Sales and Marketing Automation">
    <meta name="twitter:description" content="AI agents for sales and marketing automation. Increase sales by 21%, reduce routine work by 41%. Smart agents for email campaigns, CRM, marketplaces, and social media.">
  `;
  
  // Update title based on domain
  const title = isRussian 
    ? '<title>WaiWai - AI агенты для автоматизации продаж и маркетинга</title>'
    : '<title>WaiWai - AI Agents for Sales and Marketing Automation</title>';
  
  // Replace the title and inject meta tags after it
  html = html.replace(/<title>.*?<\/title>/, `${title}\n${metaTags}`);
  
  return new Response(html, {
    headers: {
      'content-type': 'text/html; charset=utf-8',
    },
  });
}