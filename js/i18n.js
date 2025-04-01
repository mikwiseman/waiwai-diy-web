// Default language and translations setup
let currentLanguage = 'en';

// Function to get the current language from URL
function getLanguageFromURL() {
    const pathSegments = window.location.pathname.split('/');
    return pathSegments[1] === 'ru' ? 'ru' : 'en';
}

// Function to set language based on URL and localStorage
function initializeLanguage() {
    // First check URL for language
    const urlLanguage = getLanguageFromURL();
    
    // If URL has language, use it
    if (urlLanguage) {
        currentLanguage = urlLanguage;
        localStorage.setItem('language', urlLanguage);
    } else {
        // If no language in URL, check localStorage
        const storedLanguage = localStorage.getItem('language');
        if (storedLanguage) {
            currentLanguage = storedLanguage;
            // Update URL if stored language is Russian
            if (storedLanguage === 'ru' && !window.location.pathname.startsWith('/ru')) {
                window.history.replaceState({}, '', '/ru' + window.location.pathname);
            }
        } else {
            // Default to English if no stored preference
            currentLanguage = 'en';
            localStorage.setItem('language', 'en');
        }
    }
}

// Translations object
const translations = {
    en: {
        "meta": {
            "title": "WaiWai.diy"
        },
        "header": {
            "discussProject": "Discuss\nproject"
        },
        "hero": {
            "title": "Artificial Intelligence that truly understands your business",
            "subtitle": "Find leads, send them personalized messages and maintain correspondence with them. Free up resources for your business development while AI handles the routine"
        },
        "team": {
            "title": "Here they are -\nleft to right",
            "mikWiseman": {
                "name": "Mik Wiseman",
                "roles": ["Co-founder, CTO", "exCEO at Trinity Monsters", "exCTO at Red_mad_robot"]
            },
            "andreyLisitsyn": {
                "name": "Andrey Lisitsyn",
                "roles": ["Co-founder, CPO", "exHead of Design at TripleTen", "exHead of Product at Yandex Practicum"]
            }
        },
        "cases": {
            "title": "Cases",
            "comingSoon": "Case coming soon",
            "yourProject": "Place for your project",
            "stats": {
                "salesGrowth": "Sales growth thanks to WaiWai",
                "responseIncrease": "Increase in customer response rate",
                "timeReduction": "Reduction in vacancy closing time",
                "timeFreed": "Recruiters' time freed up for other tasks"
            },
            "falcone": {
                "title": "Falcone",
                "description": "Found clients for delivery service — sellers from Ozon, Wildberries, Yandex Market. WaiWai sent personalized emails using open data about clients and their needs.",
                "tags": ["Logistics", "Marketplaces", "Sales", "Email"]
            },
            "akBarsBank": {
                "title": "Ak Bars Bank",
                "description": "Automated the recruitment process on HeadHunter. WaiWai creates personalized letters based on candidate profiles for employee search. The system sorts incoming requests and responds to them, saving recruiters' time.",
                "tags": ["Finance", "Recruitment", "Mailings", "HH.ru", "LinkedIn"]
            },
            "ontico": {
                "title": "Ontico Conferences",
                "description": "For selling tickets to the Berlin conference, WaiWai found programmers based on programming language and attendance at similar events. Selection of relevant leads and personalized messages increased conversion by 2.4 times.",
                "tags": ["Events", "Sales", "LinkedIn"]
            },
            "rossi": {
                "title": "Hotel Rossi",
                "description": "Increased business client flow for the hotel. WaiWai sent personalized messages to companies sending employees on business trips to Saint Petersburg. LinkedIn became the main channel for lead search.",
                "tags": ["Tourism", "Sales", "LinkedIn", "Email"]
            }
        },
        "blog": {
            "title": "Blog"
        },
        "cta": {
            "title": "While competitors are looking for clients — yours are already reading messages from WaiWai",
            "bookCall": "Book a call slot"
        },
        "awards": {
            "title": "Awards",
            "ethGlobalSf": {
                "title": "ETHglobal San Francisco",
                "award": "1st place, AI-collabs nomination (2024)"
            },
            "ethGlobalBrussels": {
                "title": "ETHGlobal Brussels",
                "award": "1st place, AI-chat-bots nomination (2024)"
            },
            "ethGlobalSingapore": {
                "title": "ETHGlobal Singapore",
                "award": "3rd place, «Web3 services» nomination (2024)"
            }
        }
    },
    ru: {
        "meta": {
            "title": "WaiWai.diy"
        },
        "header": {
            "discussProject": "Обсудить\nпроект"
        },
        "hero": {
            "title": "Искусственный интеллект, который действительно понимает ваш бизнес",
            "subtitle": "Находите лиды, отправляйте им персональные сообщения и ведите с ними переписку. Освободите ресурсы для развития вашего бизнеса, а рутиной займется AI"
        },
        "team": {
            "title": "Вот они -\nслева направо",
            "mikWiseman": {
                "name": "Мик Вайсман",
                "roles": ["Co-founder, CTO", "exCEO at Trinity Monsters", "exCTO at Red_mad_robot"]
            },
            "andreyLisitsyn": {
                "name": "Андрей Лисицын",
                "roles": ["Co-founder, CPO", "exHead of Design at TripleTen", "exHead of Product at Yandex Practicum"]
            }
        },
        "cases": {
            "title": "Кейсы",
            "comingSoon": "Кейс скоро будет",
            "yourProject": "Место для вашего проекта",
            "stats": {
                "salesGrowth": "Рост продаж благодаря WaiWai",
                "responseIncrease": "Увеличение числа ответов клиентов на сообщения",
                "timeReduction": "Сокращение времени закрытия вакансии",
                "timeFreed": "Высвободилось времени рекрутеров на другие задачи"
            },
            "falcone": {
                "title": "Falcone",
                "description": "Нашли клиентов для сервиса доставки — селлеров Ozon, Wildberries, Yandex Market. WaiWai сделала рассылку персонализированных писем, используя открытые данные о клиентах и их потребностях.",
                "tags": ["Логистика", "Маркетплейсы", "Продажи", "Email"]
            },
            "akBarsBank": {
                "title": "Ак Барс Банк",
                "description": "Автоматизировали процесс набора персонала на HeadHunter. Для поиска сотрудников WaiWai создает персонализированные письма на основе профилей кандидатов. Система сортирует входящие запросы и отвечает на них, экономя время рекрутеров.",
                "tags": ["Финансы", "Рекрутмент", "Рассылки", "HH.ru", "LinkedIn"]
            },
            "ontico": {
                "title": "Конференции Ontico",
                "description": "Для продажи билетов на берлинскую конференцию WaiWai нашла программистов по языку программирования и посещению схожих мероприятий. Подбор релевантных лидов и персонализированные сообщения увеличили конверсию в 2,4 раза.",
                "tags": ["Мероприятия", "Продажи", "LinkedIn"]
            },
            "rossi": {
                "title": "Отель Rossi",
                "description": "Увеличили поток бизнес-клиентов для отеля. WaiWai разослала персонализированные сообщения в компании, отправляющие сотрудников в командировки в Санкт-Петербург. Основным каналом поиска лидов стал LinkedIn.",
                "tags": ["Туризм", "Продажи", "LinkedIn", "Email"]
            }
        },
        "blog": {
            "title": "Блог"
        },
        "cta": {
            "title": "Пока конкуренты ищут клиентов — ваши уже читают сообщения от WaiWai",
            "bookCall": "Забронируйте слот для звонка"
        },
        "awards": {
            "title": "Награды",
            "ethGlobalSf": {
                "title": "ETHglobal San Francisco",
                "award": "1 место, номинация AI-collabs (2024)"
            },
            "ethGlobalBrussels": {
                "title": "ETHGlobal Brussels",
                "award": "1 место, номинация AI-chat-bots (2024)"
            },
            "ethGlobalSingapore": {
                "title": "ETHGlobal Singapore",
                "award": "3 место, номинация «Web3 services» (2024)"
            }
        }
    }
};

// Get translation for a key (supports nested keys like "header.title")
function getTranslation(key) {
    const keys = key.split('.');
    let value = translations[currentLanguage];
    
    for (const k of keys) {
        if (value && value[k] !== undefined) {
            value = value[k];
        } else {
            console.warn(`Translation missing for key: ${key}`);
            return key;
        }
    }
    
    return value;
}

// Update all translatable elements on the page
function updatePageContent() {
    // Update meta title
    document.title = getTranslation('meta.title');
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.textContent = getTranslation(key);
    });
    
    // Update all elements with data-i18n-html attribute (for HTML content)
    document.querySelectorAll('[data-i18n-html]').forEach(element => {
        const key = element.getAttribute('data-i18n-html');
        element.innerHTML = getTranslation(key);
    });

    // Update language buttons
    document.querySelectorAll('.language-button').forEach(button => {
        button.classList.toggle('active', button.getAttribute('data-lang') === currentLanguage);
    });
}

// Switch language
function switchLanguage(lang) {
    if (lang === currentLanguage) return;
    
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    
    // Update URL
    if (lang === 'ru') {
        const newPath = '/ru' + window.location.pathname.replace(/^\/ru/, '');
        window.history.pushState({}, '', newPath);
    } else {
        const newPath = window.location.pathname.replace(/^\/ru/, '');
        window.history.pushState({}, '', newPath);
    }
    
    updatePageContent();
}

// Initialize translations when the page loads
document.addEventListener('DOMContentLoaded', () => {
    initializeLanguage();
    updatePageContent();
});

// Handle browser back/forward buttons
window.addEventListener('popstate', () => {
    initializeLanguage();
    updatePageContent();
});

// Export for global access
window.switchLanguage = switchLanguage; 