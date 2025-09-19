// Multi-language content
const translations = {
    fr: {
        'nav-home': 'Accueil',
        'nav-about': 'À propos',
        'nav-menu': 'Menu',
        'nav-gallery': 'Galerie',
        'nav-order': 'Commander',
        'nav-contact': 'Contact',
        'hero-subtitle': 'Cuisine traditionnelle du Guangdong au cœur de Paris',
        'view-menu': 'Notre Menu',
        'order-uber': 'Commander sur Uber Eats',
        'order-deliveroo': 'Commander sur Deliveroo',
        'about-title': 'À propos de nous',
        'about-description': '撚手食堂 est une enseigne authentique de cuisine cantonaise originaire de Guangzhou. Le restaurant de Pétion s\'inspire du style des 茶餐廳 (cha chaan teng) locaux, avec une ambiance rétro et tendance, différente des grandes brasseries traditionnelles de Canton.',
        'specialties': 'Spécialités',
        'specialties-desc': 'Cuisine traditionnelle du Guangdong (粤菜)',
        'services': 'Services',
        'services-desc': 'Plats végétaliens • Chiens autorisés',
        'payment': 'Paiements',
        'payment-desc': 'Ticket Restaurant • Chèque Déjeuner • CB • Espèces',
        'menu-title': 'Notre Menu',
        'gallery-title': 'Nos Plats',
        'order-title': 'Commande en Ligne',
        'order-uber-desc': 'Livraison rapide à domicile',
        'order-deliveroo-desc': 'Commandez dès maintenant',
        'contact-title': 'Contact',
        'contact-address': 'Adresse',
        'contact-phone': 'Téléphone',
        'contact-social': 'Réseaux Sociaux',
        'footer-services': 'Plats végétaliens • Chiens autorisés • Ticket Restaurant • CB • Espèces',
        'legal-notices': 'Mentions légales',
        'privacy-policy': 'Politique de confidentialité'
    },
    en: {
        'nav-home': 'Home',
        'nav-about': 'About',
        'nav-menu': 'Menu',
        'nav-gallery': 'Gallery',
        'nav-order': 'Order',
        'nav-contact': 'Contact',
        'hero-subtitle': 'Traditional Guangdong cuisine in the heart of Paris',
        'view-menu': 'Our Menu',
        'order-uber': 'Order on Uber Eats',
        'order-deliveroo': 'Order on Deliveroo',
        'about-title': 'About Us',
        'about-description': '撚手食堂 is an authentic Cantonese cuisine brand from Guangzhou. The Pétion branch reflects the charm of local cha chaan teng, blending retro elements with a modern and trendy style, unlike traditional Cantonese banquet restaurants.',
        'specialties': 'Specialties',
        'specialties-desc': 'Traditional Guangdong cuisine (粤菜)',
        'services': 'Services',
        'services-desc': 'Vegan dishes • Dogs allowed inside',
        'payment': 'Payment',
        'payment-desc': 'Meal vouchers • Lunch vouchers • Card • Cash',
        'menu-title': 'Our Menu',
        'gallery-title': 'Our Dishes',
        'order-title': 'Online Order',
        'order-uber-desc': 'Fast home delivery',
        'order-deliveroo-desc': 'Order now',
        'contact-title': 'Contact',
        'contact-address': 'Address',
        'contact-phone': 'Phone',
        'contact-social': 'Social Media',
        'footer-services': 'Vegan dishes • Dogs allowed • Meal vouchers • Card • Cash',
        'legal-notices': 'Legal Notices',
        'privacy-policy': 'Privacy Policy'
    },
    zh: {
        'nav-home': '首頁',
        'nav-about': '關於我們',
        'nav-menu': '菜單',
        'nav-gallery': '美食展示',
        'nav-order': '線上訂餐',
        'nav-contact': '聯絡我們',
        'hero-subtitle': '巴黎市中心的正宗廣東菜',
        'view-menu': '我們的菜單',
        'order-uber': '透過Uber Eats訂餐',
        'order-deliveroo': '透過Deliveroo訂餐',
        'about-title': '關於我們',
        'about-description': '撚手食堂是一個廣州本地粵菜品牌，起源於北京路的分店，位於地鐵六號線北京路站上蓋的天河城百貨大樓內。店鋪裝修結合了本地茶餐廳的元素，並不是傳統粵菜酒樓的形式，復古之中又帶有時尚潮流氣息。',
        'specialties': '招牌菜',
        'specialties-desc': '傳統廣東菜 (粵菜)',
        'services': '服務',
        'services-desc': '素食菜品 • 歡迎攜帶寵物',
        'payment': '付款方式',
        'payment-desc': '餐券 • 午餐券 • 信用卡 • 現金',
        'menu-title': '我們的菜單',
        'gallery-title': '美食展示',
        'order-title': '線上訂餐',
        'order-uber-desc': '快速送餐到府',
        'order-deliveroo-desc': '立即訂餐',
        'contact-title': '聯絡我們',
        'contact-address': '地址',
        'contact-phone': '電話',
        'contact-social': '社群媒體',
        'footer-services': '素食菜品 • 歡迎攜帶寵物 • 餐券 • 信用卡 • 現金',
        'legal-notices': '法律聲明',
        'privacy-policy': '隱私政策'
    }
};

// DOM Elements
const langBtns = document.querySelectorAll('.lang-btn');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navMenu = document.querySelector('.nav-menu');

// Language switching functionality
let currentLang = 'fr';

function updateLanguage(lang) {
    currentLang = lang;

    // Update active language button
    langBtns.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        }
    });

    // Update all translatable elements
    document.querySelectorAll('[data-lang-key]').forEach(element => {
        const key = element.dataset.langKey;
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Update document language
    document.documentElement.lang = lang;

    // Update page title
    const titles = {
        fr: '撚手食堂 l GUANGDONG - Cuisine Cantonaise Authentique à Paris',
        en: '撚手食堂 l GUANGDONG - Authentic Cantonese Cuisine in Paris',
        zh: '撚手食堂 l GUANGDONG - 巴黎正宗广东菜'
    };
    document.title = titles[lang];
}

// Menu Carousel functionality
class MenuCarousel {
    constructor() {
        this.track = document.querySelector('.carousel-track');
        this.items = document.querySelectorAll('.menu-item');
        this.prevBtn = document.querySelector('.carousel-btn.prev');
        this.nextBtn = document.querySelector('.carousel-btn.next');
        this.dotsContainer = document.querySelector('.carousel-dots');

        this.currentIndex = 0;
        this.itemWidth = 100; // percentage

        this.init();
    }

    init() {
        this.createDots();
        this.addEventListeners();
        this.updateCarousel();

        // Auto-play carousel
        this.startAutoPlay();
    }

    createDots() {
        this.items.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => this.goToSlide(index));
            this.dotsContainer.appendChild(dot);
        });
        this.dots = document.querySelectorAll('.dot');
    }

    addEventListeners() {
        this.prevBtn.addEventListener('click', () => this.prevSlide());
        this.nextBtn.addEventListener('click', () => this.nextSlide());

        // Touch/swipe support
        let startX = 0;
        let currentX = 0;
        let isDragging = false;

        this.track.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            isDragging = true;
            this.pauseAutoPlay();
        });

        this.track.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            currentX = e.touches[0].clientX;
        });

        this.track.addEventListener('touchend', () => {
            if (!isDragging) return;
            const diff = startX - currentX;

            if (Math.abs(diff) > 50) {
                if (diff > 0) {
                    this.nextSlide();
                } else {
                    this.prevSlide();
                }
            }

            isDragging = false;
            this.startAutoPlay();
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (this.isInViewport()) {
                if (e.key === 'ArrowLeft') this.prevSlide();
                if (e.key === 'ArrowRight') this.nextSlide();
            }
        });
    }

    isInViewport() {
        const rect = this.track.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom > 0;
    }

    updateCarousel() {
        const translateX = -this.currentIndex * this.itemWidth;
        this.track.style.transform = `translateX(${translateX}%)`;

        // Update dots
        this.dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentIndex);
        });
    }

    goToSlide(index) {
        this.currentIndex = index;
        this.updateCarousel();
    }

    nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.items.length;
        this.updateCarousel();
    }

    prevSlide() {
        this.currentIndex = this.currentIndex === 0 ? this.items.length - 1 : this.currentIndex - 1;
        this.updateCarousel();
    }

    startAutoPlay() {
        this.stopAutoPlay();
        this.autoPlayInterval = setInterval(() => {
            this.nextSlide();
        }, 5000);
    }

    stopAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
        }
    }

    pauseAutoPlay() {
        this.stopAutoPlay();
        setTimeout(() => {
            this.startAutoPlay();
        }, 3000);
    }
}

// Smooth scrolling for navigation links
function smoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                navMenu.classList.remove('active');
            }
        });
    });
}

// Header scroll effect
function initHeaderScrollEffect() {
    const header = document.querySelector('.header');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = 'none';
        }

        lastScrollY = currentScrollY;
    });
}

// Gallery lazy loading and lightbox effect
function initGallery() {
    const galleryItems = document.querySelectorAll('.gallery-item');

    // Intersection Observer for lazy loading
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target.querySelector('img');
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                img.classList.add('loaded');
                observer.unobserve(entry.target);
            }
        });
    });

    galleryItems.forEach(item => {
        imageObserver.observe(item);

        // Add click handler for lightbox effect
        item.addEventListener('click', () => {
            const img = item.querySelector('img');
            openLightbox(img.src, img.alt);
        });
    });
}

// Simple lightbox functionality
function openLightbox(src, alt) {
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <img src="${src}" alt="${alt}">
            <button class="lightbox-close">&times;</button>
        </div>
    `;

    // Add styles
    lightbox.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;

    const content = lightbox.querySelector('.lightbox-content');
    content.style.cssText = `
        position: relative;
        max-width: 90%;
        max-height: 90%;
    `;

    const img = lightbox.querySelector('img');
    img.style.cssText = `
        width: 100%;
        height: 100%;
        object-fit: contain;
        border-radius: 8px;
    `;

    const closeBtn = lightbox.querySelector('.lightbox-close');
    closeBtn.style.cssText = `
        position: absolute;
        top: -40px;
        right: 0;
        background: none;
        border: none;
        color: white;
        font-size: 2rem;
        cursor: pointer;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
    `;

    document.body.appendChild(lightbox);

    // Animate in
    setTimeout(() => {
        lightbox.style.opacity = '1';
    }, 10);

    // Close handlers
    closeBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeLightbox();
    });

    function closeLightbox() {
        lightbox.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(lightbox);
        }, 300);
    }
}

// Mobile menu functionality
function initMobileMenu() {
    mobileMenuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');

        // Animate mobile menu button
        const spans = mobileMenuBtn.querySelectorAll('span');
        if (mobileMenuBtn.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans.forEach(span => {
                span.style.transform = '';
                span.style.opacity = '';
            });
        }
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.header')) {
            navMenu.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
        }
    });
}

// Animate elements on scroll
function initScrollAnimations() {
    const animateElements = document.querySelectorAll('.section-title, .about-text, .feature, .about-img, .order-card, .contact-item');

    const animateObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        animateObserver.observe(el);
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Language switching event listeners
    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            updateLanguage(btn.dataset.lang);
        });
    });

    // Initialize all components
    new MenuCarousel();
    smoothScroll();
    initHeaderScrollEffect();
    initGallery();
    initMobileMenu();
    initScrollAnimations();

    // Set initial language
    updateLanguage('fr');

    console.log('🍜 撚手食堂 website loaded successfully!');
});

// Performance optimizations
window.addEventListener('load', () => {
    // Preload critical images
    const criticalImages = [
        'public/images/hero.JPG',
        'public/images/deco.JPG'
    ];

    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
});

// Handle resize events
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        // Recalculate carousel dimensions if needed
        const carousel = document.querySelector('.carousel-track');
        if (carousel) {
            carousel.style.transform = `translateX(-${carousel.currentIndex * 100}%)`;
        }
    }, 250);
});