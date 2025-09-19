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
        'order-uber': 'Commander sur Uber Eats',
        'contact-btn': 'Nous contacter',
        'about-title': 'À propos de nous',
        'restaurant-title': 'Notre Restaurant',
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
        'order-uber': 'Order on Uber Eats',
        'contact-btn': 'Contact us',
        'about-title': 'About Us',
        'restaurant-title': 'Our Restaurant',
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
        'order-uber': '透過Uber Eats訂餐',
        'contact-btn': '聯絡我們',
        'about-title': '關於我們',
        'restaurant-title': '我們的餐廳',
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

// Gallery lightbox effect (simplified without lazy loading)
function initGallery() {
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(item => {
        const img = item.querySelector('img');

        // Ensure images are visible
        if (img) {
            img.style.opacity = '1';
            img.classList.add('loaded');

            // Add click handler for lightbox effect
            item.addEventListener('click', () => {
                openLightbox(img.src, img.alt);
            });
        }
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
    mobileMenuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        navMenu.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');

        // Prevent body scroll when menu is open
        if (navMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        // Animate mobile menu button with CSS classes instead of inline styles
        const spans = mobileMenuBtn.querySelectorAll('span');
        spans.forEach(span => {
            span.style.background = mobileMenuBtn.classList.contains('active') ? '#d32f2f' : '#2c3e50';
        });
    });

    // Close mobile menu when clicking on menu links
    navMenu.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            navMenu.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
            document.body.style.overflow = '';

            const spans = mobileMenuBtn.querySelectorAll('span');
            spans.forEach(span => {
                span.style.background = '#2c3e50';
            });
        }
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.header') && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
            document.body.style.overflow = '';

            const spans = mobileMenuBtn.querySelectorAll('span');
            spans.forEach(span => {
                span.style.background = '#2c3e50';
            });
        }
    });

    // Close mobile menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
            document.body.style.overflow = '';

            const spans = mobileMenuBtn.querySelectorAll('span');
            spans.forEach(span => {
                span.style.background = '#2c3e50';
            });
        }
    });

    // Handle window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
            document.body.style.overflow = '';
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

// Parallax effect for decorative elements
function initParallaxEffect() {
    const parallaxElements = document.querySelectorAll('.container::before, .about::after, .gallery::before');

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;

        parallaxElements.forEach(element => {
            element.style.transform = `translateY(${rate}px)`;
        });
    });
}

// Add cursor trail effect
function initCursorTrail() {
    const trail = [];
    const trailLength = 10;

    for (let i = 0; i < trailLength; i++) {
        const dot = document.createElement('div');
        dot.className = 'cursor-trail';
        dot.style.cssText = `
            position: fixed;
            width: 4px;
            height: 4px;
            background: rgba(211, 47, 47, ${0.5 - i * 0.05});
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            transition: opacity 0.3s ease;
        `;
        document.body.appendChild(dot);
        trail.push(dot);
    }

    let mouseX = 0, mouseY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function updateTrail() {
        let currentX = mouseX;
        let currentY = mouseY;

        trail.forEach((dot, index) => {
            dot.style.left = currentX + 'px';
            dot.style.top = currentY + 'px';

            const nextDot = trail[index + 1];
            if (nextDot) {
                currentX += (parseFloat(nextDot.style.left) - currentX) * 0.3;
                currentY += (parseFloat(nextDot.style.top) - currentY) * 0.3;
            }
        });

        requestAnimationFrame(updateTrail);
    }

    updateTrail();
}

// Magnetic buttons effect
function initMagneticButtons() {
    const magneticElements = document.querySelectorAll('.cta-button, .lang-btn, .order-card');

    magneticElements.forEach(element => {
        element.addEventListener('mousemove', (e) => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            element.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
        });

        element.addEventListener('mouseleave', () => {
            element.style.transform = 'translate(0, 0)';
        });
    });
}

// Scroll-triggered animations (simplified)
function initAdvancedScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Add animation classes (excluding gallery items to prevent image hiding)
    const elementsToAnimate = [
        { selector: '.feature', animation: 'scaleIn' },
        { selector: '.order-card', animation: 'slideInFromRight' },
        { selector: '.contact-item', animation: 'slideInFromLeft' }
    ];

    elementsToAnimate.forEach(({ selector, animation }) => {
        document.querySelectorAll(selector).forEach((element, index) => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
            element.style.transitionDelay = `${index * 0.1}s`;

            observer.observe(element);
        });
    });

    // Gallery items get simpler animation that doesn't hide images
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach((item, index) => {
        item.style.opacity = '1'; // Always visible
        item.style.transform = 'scale(0.95)';
        item.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
        item.style.transitionDelay = `${index * 0.05}s`;

        // Simple scale-in animation
        setTimeout(() => {
            item.style.transform = 'scale(1)';
        }, 100 + (index * 50));
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

    // Initialize new features
    initParallaxEffect();
    initCursorTrail();
    initMagneticButtons();
    initAdvancedScrollAnimations();

    // Set initial language
    updateLanguage('fr');

});


