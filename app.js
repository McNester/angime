// Main application JavaScript - Fixed all issues
// Current language state
let currentLang = 'ru';
let currentGalleryIndex = 0;
let currentGalleryCategory = 'all';
let currentLightboxImages = [];
let currentModalItem = null;
let currentModalGalleryIndex = 0;

// Simple Image Loader
class ImageLoader {
    constructor() {
        this.loadedImages = new Set();
    }

    loadImage(img) {
        const src = img.getAttribute('data-src');
        if (!src) return;

        // Skip if already loaded or already has src
        if (this.loadedImages.has(src) || img.src) {
            if (!img.classList.contains('loaded')) {
                img.classList.add('loaded');
            }
            return;
        }

        // Add loading class
        img.classList.add('loading');

        // Create a new image to preload
        const tempImg = new Image();
        tempImg.onload = () => {
            this.loadedImages.add(src);
            img.src = src;
            img.classList.remove('loading');
            img.classList.add('loaded');
            img.removeAttribute('data-src');

            // Remove loading container if exists
            const loadingContainer = img.parentElement.querySelector('.image-loading');
            if (loadingContainer) {
                setTimeout(() => {
                    loadingContainer.remove();
                }, 300);
            }
        };

        tempImg.onerror = () => {
            console.error('Failed to load image:', src);
            img.classList.remove('loading');
            img.classList.add('error');

            // Set fallback image
            img.src = 'https://placehold.co/400x300/667eea/ffffff?text=Image+Error';
            img.classList.add('loaded');

            // Remove loading container
            const loadingContainer = img.parentElement.querySelector('.image-loading');
            if (loadingContainer) {
                loadingContainer.remove();
            }
        };

        tempImg.src = src;
    }

    loadImageSrc(src) {
        return new Promise((resolve, reject) => {
            if (this.loadedImages.has(src)) {
                resolve();
                return;
            }

            const tempImg = new Image();
            tempImg.onload = () => {
                this.loadedImages.add(src);
                resolve();
            };
            tempImg.onerror = reject;
            tempImg.src = src;
        });
    }
}

const imageLoader = new ImageLoader();

// Load menu data: сначала из сохранений админки (localStorage), потом menu.json, иначе CONFIG
let menuConfig = null;

async function loadMenuData() {
    try {
        var saved = localStorage.getItem('angime_menu');
        if (saved) {
            var parsed = JSON.parse(saved);
            if (parsed && parsed.menu && parsed.menu.categories && parsed.menu.categories.length) {
                menuConfig = parsed.menu;
                if (parsed.translations && typeof TRANSLATIONS !== 'undefined') {
                    var tr = parsed.translations;
                    for (var key in tr)
                        for (var lang in tr[key])
                            if (TRANSLATIONS[lang]) TRANSLATIONS[lang][key] = tr[key][lang];
                }
                return true;
            }
        }
    } catch (e) {}

    try {
        const response = await fetch('./menu.json');
        if (response.ok) {
            const data = await response.json();
            menuConfig = data.menu || data;
            return true;
        }
    } catch (e) {}

    menuConfig = CONFIG.menu;
    return false;
}

// Initialize app on DOM load
document.addEventListener('DOMContentLoaded', async () => {
    console.log('Initializing Angime website...');

    // Load menu data first
    await loadMenuData();

    initFloatingElements();
    initNavigation();
    initLanguageSwitcher();
    initReasons();
    initMenu();
    initMenuModal();
    initGallery();
    initTeam();
    initContact();
    initScrollEffects();
    initLightbox();
    updateContent();
    initMobileTapSupport();

    console.log('Initialization complete!');
});


function initMobileTapSupport() {
    // Check if we're on a touch device
    const isTouchDevice = 'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        navigator.msMaxTouchPoints > 0;

    if (!isTouchDevice) return; // Only run on touch devices

    const interactiveCards = document.querySelectorAll(
        '.menu-item, .reason-card, .team-card, .contact-card, .bento-item'
    );

    interactiveCards.forEach(card => {
        // Store original styles
        const originalTransform = card.style.transform;
        const originalBoxShadow = card.style.boxShadow;
        const originalBorderColor = card.style.borderColor;

        card.addEventListener('click', function(e) {
            // Don't prevent default - allow normal click behavior
            e.stopPropagation();

            // Remove active class from all other cards
            interactiveCards.forEach(c => {
                if (c !== card) {
                    c.classList.remove('mobile-active');
                    // Restore original styles
                    c.style.transform = originalTransform;
                    c.style.boxShadow = originalBoxShadow;
                    c.style.borderColor = originalBorderColor;
                }
            });

            // Toggle active state on this card
            const isActive = card.classList.toggle('mobile-active');

            if (isActive) {
                // Apply hover styles
                card.style.transform = 'translateY(-5px)';
                card.style.boxShadow = '0 10px 30px rgba(255, 215, 0, 0.2)';
                card.style.borderColor = 'var(--accent-gold)';

                // For bento items
                if (card.classList.contains('bento-item')) {
                    card.style.transform = 'translateY(-5px) scale(1.01)';
                    card.style.boxShadow = '0 15px 30px -8px rgba(0, 0, 0, 0.6)';
                }
            } else {
                // Restore original styles
                card.style.transform = originalTransform;
                card.style.boxShadow = originalBoxShadow;
                card.style.borderColor = originalBorderColor;
            }
        });

        // Also close active state when clicking elsewhere
        document.addEventListener('click', function(e) {
            if (!card.contains(e.target)) {
                card.classList.remove('mobile-active');
                // Restore original styles
                card.style.transform = originalTransform;
                card.style.boxShadow = originalBoxShadow;
                card.style.borderColor = originalBorderColor;
            }
        });
    });
}



// Initialize floating SVG elements
function initFloatingElements() {
    const container = document.getElementById('floatingElements');
    const icons = [
        'beerGlass',
        'beerMug',
        'billiards',
        'music',
        'beerBottle',
        'beerGlass',
        'beerMug',
        'billiards',
        'music'
    ];

    icons.forEach(iconKey => {
        const div = document.createElement('div');
        div.className = 'float-item';
        div.innerHTML = CONFIG.svgIcons[iconKey] || CONFIG.svgIcons.beerGlass;
        container.appendChild(div);
    });
}

// Initialize navigation
function initNavigation() {
    const navLinks = document.getElementById('navLinks');

    CONFIG.navigation.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = item.href;
        a.setAttribute('data-i18n', `nav${item.id.charAt(0).toUpperCase() + item.id.slice(1)}`);
        a.textContent = TRANSLATIONS[currentLang][`nav${item.id.charAt(0).toUpperCase() + item.id.slice(1)}`];
        li.appendChild(a);
        navLinks.appendChild(li);
    });

    // Mobile menu toggle
    const burger = document.getElementById('burger');
    const navRight = document.getElementById('navRight');

    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        navRight.classList.toggle('active');
        document.body.style.overflow = navRight.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu on link click
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            burger.classList.remove('active');
            navRight.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Initialize language switcher
function initLanguageSwitcher() {
    const langButtons = document.querySelectorAll('.lang-btn');

    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            if (lang !== currentLang) {
                currentLang = lang;
                langButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                updateContent();
            }
        });
    });
}

// Update all content based on current language
function updateContent() {
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (TRANSLATIONS[currentLang][key]) {
            element.textContent = TRANSLATIONS[currentLang][key];
        }
    });

    // Update reasons
    updateReasons();
    // Update menu
    updateMenu();
    // Update team
    updateTeam();
    // Update contact
    updateContact();
    // Update gallery
    updateGallery();
}

// Initialize reasons section
function initReasons() {
    const grid = document.getElementById('reasonsGrid');

    CONFIG.reasons.forEach(reason => {
        const card = document.createElement('div');
        card.className = 'reason-card';
        card.innerHTML = `
            <div class="reason-icon">${CONFIG.svgIcons[reason.icon]}</div>
            <h3 data-i18n="${reason.titleKey}">${TRANSLATIONS[currentLang][reason.titleKey]}</h3>
            <p data-i18n="${reason.descKey}">${TRANSLATIONS[currentLang][reason.descKey]}</p>
        `;
        grid.appendChild(card);
    });
}

// Update reasons text
function updateReasons() {
    const cards = document.querySelectorAll('.reason-card');
    cards.forEach((card, index) => {
        const reason = CONFIG.reasons[index];
        card.querySelector('h3').textContent = TRANSLATIONS[currentLang][reason.titleKey];
        card.querySelector('p').textContent = TRANSLATIONS[currentLang][reason.descKey];
    });
}

// Initialize menu with lazy loading - FIXED
function initMenu() {
    const tabsContainer = document.getElementById('menuTabs');
    const contentContainer = document.getElementById('menuContent');

    // Use menuConfig if loaded, otherwise fallback to CONFIG.menu
    const menuData = menuConfig || CONFIG.menu;

    // Create tabs
    menuData.categories.forEach((category, index) => {
        const tab = document.createElement('div');
        tab.className = `menu-tab ${index === 0 ? 'active' : ''}`;
        tab.setAttribute('data-tab', category.id);
        tab.setAttribute('data-i18n', category.titleKey);
        tab.textContent = TRANSLATIONS[currentLang][category.titleKey];
        tabsContainer.appendChild(tab);

        // Create category content
        const categoryDiv = document.createElement('div');
        categoryDiv.className = `menu-category ${index === 0 ? 'active' : ''}`;
        categoryDiv.id = category.id;

        const grid = document.createElement('div');
        grid.className = 'menu-grid';

        category.items.forEach((item, itemIndex) => {
            const menuItem = document.createElement('div');
            menuItem.className = 'menu-item';

            // Use first image from array
            const firstImage = item.images ? item.images[0] : (item.image || 'https://placehold.co/400x300/667eea/ffffff?text=No+Image');

            menuItem.innerHTML = `
                <div class="menu-item-image">
                    <img data-src="${firstImage}" alt="${TRANSLATIONS[currentLang][item.nameKey]}" loading="lazy">
                </div>
                <div class="menu-item-content">
                    <div class="menu-item-header">
                        <h4 class="menu-item-name" data-i18n="${item.nameKey}">${TRANSLATIONS[currentLang][item.nameKey]}</h4>
                        <span class="menu-item-price">${item.price}</span>
                    </div>
                    <p class="menu-item-description" data-i18n="${item.descKey}">${TRANSLATIONS[currentLang][item.descKey]}</p>
                    <div class="menu-item-specs">
                        ${item.specs.map(spec => `<span class="spec">${spec}</span>`).join('')}
                    </div>
                </div>
            `;

            // Add click handler to open modal
            menuItem.addEventListener('click', () => openMenuModal(item, category.id));

            grid.appendChild(menuItem);

            // Load image immediately (not lazy)
            const imgEl = menuItem.querySelector('.menu-item-image img');
            if (imgEl) {
                // Load first 6 images immediately, others on scroll
                if (itemIndex < 6) {
                    setTimeout(() => imageLoader.loadImage(imgEl), 100);
                } else {
                    // Simple lazy load
                    const observer = new IntersectionObserver((entries) => {
                        entries.forEach(entry => {
                            if (entry.isIntersecting) {
                                imageLoader.loadImage(imgEl);
                                observer.unobserve(imgEl);
                            }
                        });
                    }, { threshold: 0.1 });
                    observer.observe(imgEl);
                }
            }
        });

        categoryDiv.appendChild(grid);
        contentContainer.appendChild(categoryDiv);
    });

    // Tab switching
    const tabs = document.querySelectorAll('.menu-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.menu-category').forEach(c => c.classList.remove('active'));

            tab.classList.add('active');
            const targetCategory = document.getElementById(tab.getAttribute('data-tab'));
            targetCategory.classList.add('active');
        });
    });
}

// Update menu text
function updateMenu() {
    // Use menuConfig if loaded, otherwise fallback to CONFIG.menu
    const menuData = menuConfig || CONFIG.menu;

    // Update tab titles
    document.querySelectorAll('.menu-tab').forEach((tab, index) => {
        const category = menuData.categories[index];
        tab.textContent = TRANSLATIONS[currentLang][category.titleKey];
    });

    // Update menu items
    menuData.categories.forEach((category, catIndex) => {
        const items = document.querySelectorAll(`#${category.id} .menu-item`);
        items.forEach((item, itemIndex) => {
            const menuItem = category.items[itemIndex];
            item.querySelector('.menu-item-name').textContent = TRANSLATIONS[currentLang][menuItem.nameKey];
            item.querySelector('.menu-item-description').textContent = TRANSLATIONS[currentLang][menuItem.descKey];

            // Update image alt text
            const img = item.querySelector('.menu-item-image img');
            if (img) {
                img.alt = TRANSLATIONS[currentLang][menuItem.nameKey];
            }
        });
    });
}

// Menu Modal Functions - FIXED with immediate loading
function openMenuModal(item, categoryId) {
    currentModalItem = item;
    currentModalGalleryIndex = 0;

    const modal = document.getElementById('menuModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalPrice = document.getElementById('modalPrice');
    const modalDescription = document.getElementById('modalDescription');
    const modalDetails = document.getElementById('modalDetails');
    const galleryContainer = document.getElementById('modalGalleryContainer');
    const dotsContainer = document.getElementById('modalGalleryDots');

    // Set title and price
    modalTitle.textContent = TRANSLATIONS[currentLang][item.nameKey];
    modalPrice.textContent = item.price;
    modalDescription.textContent = TRANSLATIONS[currentLang][item.descKey];

    // Clear previous content
    galleryContainer.innerHTML = '';
    dotsContainer.innerHTML = '';

    // Build gallery
    const images = item.images || [item.image || 'https://placehold.co/800x600/667eea/ffffff?text=No+Image'];

    images.forEach((img, index) => {
        const slide = document.createElement('div');
        slide.className = 'modal-gallery-slide';
        slide.innerHTML = `
            <div class="image-loading">
                <div class="loading-spinner"></div>
            </div>
            <img src="${img}" alt="${TRANSLATIONS[currentLang][item.nameKey]}" loading="eager">
        `;
        galleryContainer.appendChild(slide);

        const dot = document.createElement('div');
        dot.className = `modal-gallery-dot ${index === 0 ? 'active' : ''}`;
        dot.addEventListener('click', () => goToModalSlide(index));
        dotsContainer.appendChild(dot);
    });

    // Build details
    if (item.details) {
        modalDetails.innerHTML = '';
        Object.entries(item.details).forEach(([key, value]) => {
            const row = document.createElement('div');
            row.className = 'modal-detail-row';
            row.innerHTML = `
                <span class="modal-detail-label">${key}:</span>
                <span class="modal-detail-value">${value}</span>
            `;
            modalDetails.appendChild(row);
        });
        modalDetails.style.display = 'block';
    } else {
        modalDetails.style.display = 'none';
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Load first image immediately
    setTimeout(() => {
        const firstImg = galleryContainer.querySelector('.modal-gallery-slide:first-child img');
        if (firstImg) {
            // Mark as loaded immediately since we're using src directly
            firstImg.classList.add('loaded');
            const loadingContainer = firstImg.parentElement.querySelector('.image-loading');
            if (loadingContainer) {
                loadingContainer.remove();
            }
        }
    }, 50);
}

function goToModalSlide(index) {
    currentModalGalleryIndex = index;

    const container = document.getElementById('modalGalleryContainer');
    const dots = document.querySelectorAll('.modal-gallery-dot');

    container.style.transform = `translateX(-${index * 100}%)`;

    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });

    // Load the current image
    const slide = container.querySelectorAll('.modal-gallery-slide')[index];
    if (slide) {
        const img = slide.querySelector('img');
        if (img && !img.classList.contains('loaded')) {
            img.classList.add('loaded');
            const loadingContainer = slide.querySelector('.image-loading');
            if (loadingContainer) {
                loadingContainer.remove();
            }
        }
    }
}

// Initialize modal
function initMenuModal() {
    const modal = document.getElementById('menuModal');
    const closeBtn = document.getElementById('modalClose');
    const prevBtn = document.getElementById('modalGalleryPrev');
    const nextBtn = document.getElementById('modalGalleryNext');

    if (closeBtn) closeBtn.addEventListener('click', closeMenuModal);
    if (prevBtn) prevBtn.addEventListener('click', () => navigateModalGallery(-1));
    if (nextBtn) nextBtn.addEventListener('click', () => navigateModalGallery(1));

    // Close on background click
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeMenuModal();
            }
        });
    }

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!modal || !modal.classList.contains('active')) return;

        if (e.key === 'Escape') closeMenuModal();
        if (e.key === 'ArrowLeft') navigateModalGallery(-1);
        if (e.key === 'ArrowRight') navigateModalGallery(1);
    });
}

function closeMenuModal() {
    document.getElementById('menuModal').classList.remove('active');
    document.body.style.overflow = '';
    currentModalItem = null;
}

function navigateModalGallery(direction) {
    if (!currentModalItem) return;

    const images = currentModalItem.images || [currentModalItem.image];
    currentModalGalleryIndex += direction;

    if (currentModalGalleryIndex < 0) {
        currentModalGalleryIndex = images.length - 1;
    } else if (currentModalGalleryIndex >= images.length) {
        currentModalGalleryIndex = 0;
    }

    goToModalSlide(currentModalGalleryIndex);
}

// Initialize gallery - FIXED to show one card per category
function initGallery() {
    console.log('Initializing gallery (one card per category)...');
    const grid = document.getElementById('bentoGallery');

    if (!grid) {
        console.error('bentoGallery element not found!');
        return;
    }

    grid.innerHTML = '';

    // Get first image from each category
    CONFIG.gallery.categories.forEach((category, catIndex) => {
        const firstImageObj = (category.images && category.images.length > 0) ? category.images[0] : null;
        if (!firstImageObj) return;

        const item = document.createElement('div');
        item.className = 'bento-item';
        item.dataset.category = category.id;
        item.dataset.categoryIndex = catIndex;
        item.dataset.imageIndex = 0;

        // Get translations
        const categoryTitle = TRANSLATIONS[currentLang][category.titleKey] || category.titleKey || category.id;
        const imageTitle = firstImageObj.titleKey ? (TRANSLATIONS[currentLang][firstImageObj.titleKey] || firstImageObj.alt) : firstImageObj.alt;

        // Fix image path
        let imagePath = firstImageObj.image;
        if (imagePath && !imagePath.startsWith('http') && !imagePath.startsWith('//')) {
            if (!imagePath.startsWith('/') && !imagePath.startsWith('./')) {
                imagePath = './' + imagePath;
            }
        }

        item.innerHTML = `
            <img data-src="${imagePath}" alt="${firstImageObj.alt || categoryTitle}" loading="lazy">
            <div class="bento-item-overlay">
                <div class="bento-item-category">${categoryTitle}</div>
                <div class="bento-item-title">${imageTitle}</div>
            </div>
        `;

        // Open lightbox with all images from this category
        item.addEventListener('click', () => {
            openLightboxForCategory(category, 0);
        });

        grid.appendChild(item);

        // Load image
        const imgEl = item.querySelector('img');
        if (imgEl) {
            // Load first 2 images immediately
            if (catIndex < 2) {
                setTimeout(() => imageLoader.loadImage(imgEl), 100);
            } else {
                // Simple lazy load
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            imageLoader.loadImage(imgEl);
                            observer.unobserve(imgEl);
                        }
                    });
                }, { threshold: 0.1 });
                observer.observe(imgEl);
            }
        }
    });
}

function updateGallery() {
    const items = document.querySelectorAll('.bento-item');
    items.forEach((item, index) => {
        const category = CONFIG.gallery.categories[index];
        if (!category) return;

        const firstImageObj = (category.images && category.images.length > 0) ? category.images[0] : null;
        if (!firstImageObj) return;

        const categoryTitle = TRANSLATIONS[currentLang][category.titleKey] || category.titleKey || category.id;
        const imageTitle = firstImageObj.titleKey ? (TRANSLATIONS[currentLang][firstImageObj.titleKey] || firstImageObj.alt) : firstImageObj.alt;

        const categoryEl = item.querySelector('.bento-item-category');
        const titleEl = item.querySelector('.bento-item-title');

        if (categoryEl) categoryEl.textContent = categoryTitle;
        if (titleEl) titleEl.textContent = imageTitle;

        // Update image alt
        const imgEl = item.querySelector('img');
        if (imgEl) {
            imgEl.alt = firstImageObj.alt || categoryTitle;
        }
    });
}

// Lightbox functions for category
function openLightboxForCategory(category, startIndex) {
    // Flatten all images from all categories
    let allImages = [];
    let currentCategoryStartIndex = 0;

    // Collect all images from all categories
    CONFIG.gallery.categories.forEach(cat => {
        if (cat.images && cat.images.length > 0) {
            cat.images.forEach(image => {
                allImages.push({
                    ...image,
                    category: cat.id,
                    categoryTitle: TRANSLATIONS[currentLang][cat.titleKey] || cat.titleKey
                });
            });

            // If this is our target category, set the start index
            if (cat.id === category.id) {
                currentGalleryCategory = cat.id;
                currentGalleryIndex = currentCategoryStartIndex + startIndex;
            }

            currentCategoryStartIndex += cat.images.length;
        }
    });

    currentLightboxImages = allImages;

    showLightboxImage();

    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function showLightboxImage() {
    const image = currentLightboxImages[currentGalleryIndex];
    if (!image) return;

    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxCategory = document.getElementById('lightboxCategory');
    const lightboxTitle = document.getElementById('lightboxTitle');

    if (lightboxImage) {
        // Show loading
        lightboxImage.classList.remove('loaded');

        // Fix image path
        let imagePath = image.image;
        if (imagePath && !imagePath.startsWith('http') && !imagePath.startsWith('//')) {
            if (!imagePath.startsWith('/') && !imagePath.startsWith('./')) {
                imagePath = './' + imagePath;
            }
        }

        // Load image
        const tempImg = new Image();
        tempImg.onload = () => {
            lightboxImage.src = imagePath;
            lightboxImage.alt = image.alt || '';
            lightboxImage.classList.add('loaded');
        };

        tempImg.onerror = () => {
            console.error('Failed to load lightbox image:', imagePath);
            lightboxImage.src = 'https://placehold.co/800x600/667eea/ffffff?text=Image+Error';
            lightboxImage.alt = 'Ошибка загрузки';
            lightboxImage.classList.add('loaded');
        };

        tempImg.src = imagePath;
    }

    if (lightboxCategory) {
        lightboxCategory.textContent = image.categoryTitle || image.category || '';
    }

    if (lightboxTitle) {
        lightboxTitle.textContent = image.titleKey ? (TRANSLATIONS[currentLang][image.titleKey] || image.alt) : image.alt || '';
    }
}

function navigateLightbox(direction) {
    if (currentLightboxImages.length === 0) return;

    currentGalleryIndex += direction;

    if (currentGalleryIndex < 0) {
        currentGalleryIndex = currentLightboxImages.length - 1;
    } else if (currentGalleryIndex >= currentLightboxImages.length) {
        currentGalleryIndex = 0;
    }

    showLightboxImage();
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.classList.remove('active');
    }
    document.body.style.overflow = '';
    currentLightboxImages = [];
}

// Initialize lightbox
function initLightbox() {
    const lightboxClose = document.getElementById('lightboxClose');
    const lightboxPrev = document.getElementById('lightboxPrev');
    const lightboxNext = document.getElementById('lightboxNext');

    if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
    if (lightboxPrev) lightboxPrev.addEventListener('click', () => navigateLightbox(-1));
    if (lightboxNext) lightboxNext.addEventListener('click', () => navigateLightbox(1));

    // Close on background click
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
    }

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!lightbox || !lightbox.classList.contains('active')) return;

        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') navigateLightbox(-1);
        if (e.key === 'ArrowRight') navigateLightbox(1);
    });
}

// Initialize team
function initTeam() {
    const grid = document.getElementById('teamGrid');

    CONFIG.team.forEach((member, memberIndex) => {
        const card = document.createElement('div');
        card.className = 'team-card';
        card.dataset.memberIndex = memberIndex;

        const firstPhoto = member.photos[0] || 'https://placehold.co/400x400/667eea/ffffff?text=Team';

        card.innerHTML = `
            <div class="team-photo">
                <img data-src="${firstPhoto}" alt="${TRANSLATIONS[currentLang][member.nameKey]}" loading="lazy">
            </div>
            <div class="team-info">
                <h3 class="team-name" data-i18n="${member.nameKey}">${TRANSLATIONS[currentLang][member.nameKey]}</h3>
                <p class="team-role" data-i18n="${member.roleKey}">${TRANSLATIONS[currentLang][member.roleKey]}</p>
                <p class="team-description" data-i18n="${member.descKey}">${TRANSLATIONS[currentLang][member.descKey]}</p>
            </div>
        `;

        // Load team photo
        const imgEl = card.querySelector('.team-photo img');
        if (imgEl) {
            setTimeout(() => imageLoader.loadImage(imgEl), 100);
        }

        grid.appendChild(card);
    });
}

function updateTeam() {
    const cards = document.querySelectorAll('.team-card');
    cards.forEach((card, index) => {
        const member = CONFIG.team[index];
        card.querySelector('.team-name').textContent = TRANSLATIONS[currentLang][member.nameKey];
        card.querySelector('.team-role').textContent = TRANSLATIONS[currentLang][member.roleKey];
        card.querySelector('.team-description').textContent = TRANSLATIONS[currentLang][member.descKey];

        // Update image alt
        const img = card.querySelector('.team-photo img');
        if (img) {
            img.alt = TRANSLATIONS[currentLang][member.nameKey];
        }
    });
}

// Initialize contact with custom icons
function initContact() {
    const grid = document.getElementById('contactGrid');

    CONFIG.contact.forEach(contact => {
        const card = document.createElement('div');
        card.className = 'contact-card';

        const iconSvg = CONFIG.svgIcons[contact.icon] || contact.icon;
        const content = TRANSLATIONS[currentLang][contact.contentKey];

        // Parse HTML and create links
        const parser = new DOMParser();
        const doc = parser.parseFromString(content, 'text/html');
        const links = doc.querySelectorAll('a');

        let linksHtml = '';
        links.forEach(link => {
            const href = link.href;
            const text = link.textContent;
            let className = '';

            if (href.includes('instagram')) {
                className = 'instagram';
            } else if (href.includes('t.me')) {
                className = 'telegram';
            } else if (href.includes('2gis')) {
                className = 'map';
            }

            linksHtml += `<a href="${href}" target="_blank" class="${className}">${text}</a>`;
        });

        card.innerHTML = `
            <div class="contact-icon">${iconSvg}</div>
            <h3 data-i18n="${contact.titleKey}">${TRANSLATIONS[currentLang][contact.titleKey]}</h3>
            <div class="contact-content">${content.replace(/<a[^>]*>([^<]+)<\/a>/g, '$1')}</div>
            ${linksHtml ? `<div class="contact-links">${linksHtml}</div>` : ''}
        `;
        grid.appendChild(card);
    });
}

// Update contact text
function updateContact() {
    const cards = document.querySelectorAll('.contact-card');
    cards.forEach((card, index) => {
        const contact = CONFIG.contact[index];
        card.querySelector('h3').textContent = TRANSLATIONS[currentLang][contact.titleKey];

        const content = TRANSLATIONS[currentLang][contact.contentKey];
        const parser = new DOMParser();
        const doc = parser.parseFromString(content, 'text/html');
        const links = doc.querySelectorAll('a');

        let linksHtml = '';
        links.forEach(link => {
            const href = link.href;
            const text = link.textContent;
            let className = '';

            if (href.includes('instagram')) {
                className = 'instagram';
            } else if (href.includes('t.me')) {
                className = 'telegram';
            } else if (href.includes('2gis')) {
                className = 'map';
            }

            linksHtml += `<a href="${href}" target="_blank" class="${className}">${text}</a>`;
        });

        const contentElement = card.querySelector('.contact-content');
        contentElement.innerHTML = content.replace(/<a[^>]*>([^<]+)<\/a>/g, '$1');

        const linksContainer = card.querySelector('.contact-links');
        if (linksContainer) {
            linksContainer.innerHTML = linksHtml;
        }
    });
}

// Initialize scroll effects
function initScrollEffects() {
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;

        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const revealPoint = 100;

            if (elementTop < windowHeight - revealPoint) {
                element.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check
}
