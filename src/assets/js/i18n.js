// Initialize language immediately when script loads
document.addEventListener('DOMContentLoaded', () => {
    initializeLanguage();
    updatePageContent();
});

// Function to get the current language from URL
function getLanguageFromURL() {
    return 'ru';  // Always return Russian as we're Russian-only now
}

// Function to set language based on URL and localStorage
function initializeLanguage() {
    localStorage.setItem('language', 'ru');
}

// Update all translatable elements on the page
function updatePageContent() {
    // Update meta title
    document.title = 'WaiWai.diy';
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        // Use Vue i18n for translations
        element.textContent = window.vm.$t(key);
    });
    
    // Update all elements with data-i18n-html attribute (for HTML content)
    document.querySelectorAll('[data-i18n-html]').forEach(element => {
        const key = element.getAttribute('data-i18n-html');
        // Use Vue i18n for translations
        element.innerHTML = window.vm.$t(key);
    });
}

// Handle browser back/forward buttons
window.addEventListener('popstate', () => {
    initializeLanguage();
    updatePageContent();
});