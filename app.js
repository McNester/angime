// Main application JavaScript - Updated for multiple photos and lazy loading
//






class ImageLoader {
    constructor() {
        this.observer = null;
        this.initObserver();
    }

    initObserver() {
        if ('IntersectionObserver' in window) {
            this.observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        this.loadImage(img);
                        this.observer.unobserve(img);
                    }
                });
            }, {
                rootMargin: '100px 0px',
                threshold: 0.1
            });
        }
    }

    loadImage(img) {
        const src = img.getAttribute('data-src');
        if (!src) return;

        // Add loading class
        img.classList.add('loading');

        // Create a new image to preload
        const tempImg = new Image();
        tempImg.onload = () => {
            img.src = src;
            img.classList.remove('loading');
            img.classList.add('loaded');

            // Remove data-src attribute
            img.removeAttribute('data-src');
        };

        tempImg.onerror = () => {
            console.error('Failed to load image:', src);
            img.classList.remove('loading');
        };

        tempImg.src = src;
    }

    observe(img) {
        if (this.observer && img.getAttribute('data-src')) {
            this.observer.observe(img);
        } else if (img.getAttribute('data-src')) {
            // Fallback for browsers without IntersectionObserver
            this.loadImage(img);
        }
    }

    loadCriticalImages() {
        // Load critical images immediately (above the fold)
        document.querySelectorAll('.menu-item-image img[data-src], .hero img[data-src]').forEach(img => {
            this.loadImage(img);
        });
    }
}


// Current language state
let currentLang = 'ru';
let currentGalleryIndex = 0;
let currentGalleryCategory = 'vibe';

const imageLoader = new ImageLoader();

// Initialize app on DOM load
document.addEventListener('DOMContentLoaded', () => {
    console.log('Initializing Angime website...');
    console.log('CONFIG:', CONFIG);
    console.log('TRANSLATIONS:', TRANSLATIONS);

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



    setTimeout(() => {
        imageLoader.loadCriticalImages();
    }, 100);


    console.log('Initialization complete!');
});


// Override specific functions for enhanced functionality
const originalInitMenu = window.initMenu;
window.initMenu = function() {
    originalInitMenu?.();
    // Observe menu images for lazy loading
    document.querySelectorAll('.menu-item-image img[data-src]').forEach(img => {
        imageLoader.observe(img);
    });
};

const originalOpenMenuModal = window.openMenuModal;
window.openMenuModal = function(item) {
    originalOpenMenuModal?.(item);
    // Load modal images immediately
    document.querySelectorAll('#modalGallery img[data-src]').forEach(img => {
        imageLoader.loadImage(img);
    });
};

// const originalShowLightboxImage = window.showLightboxImage;
// window.showLightboxImage = function() {
//     const image = CONFIG.gallery[currentGalleryIndex];
//     const lightboxImage = document.getElementById('lightboxImage');
//
//     if (lightboxImage) {
//         lightboxImage.setAttribute('data-src', image.image);
//         lightboxImage.alt = image.alt;
//         imageLoader.loadImage(lightboxImage);
//     }
//
//     const lightboxCategory = document.getElementById('lightboxCategory');
//     const lightboxTitle = document.getElementById('lightboxTitle');
//
//     // Update category and title
//     const categoryText = image.category ? TRANSLATIONS[currentLang][`category${image.category.charAt(0).toUpperCase() + image.category.slice(1)}`] || image.category : '';
//     const titleText = image.titleKey ? TRANSLATIONS[currentLang][image.titleKey] : image.alt;
//
//     if (lightboxCategory) lightboxCategory.textContent = categoryText;
//     if (lightboxTitle) lightboxTitle.textContent = titleText;
// };

// Fix lightbox close button
const originalInitLightbox = window.initLightbox;
window.initLightbox = function() {
    originalInitLightbox?.();

    const lightbox = document.getElementById('lightbox');
    const lightboxClose = document.getElementById('lightboxClose');
    const lightboxPrev = document.getElementById('lightboxPrev');
    const lightboxNext = document.getElementById('lightboxNext');

    lightboxClose?.addEventListener('click', closeLightbox);
    lightboxPrev?.addEventListener('click', () => navigateLightbox(-1));
    lightboxNext?.addEventListener('click', () => navigateLightbox(1));

    // Close on background click
    lightbox?.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!lightbox?.classList.contains('active')) return;

        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') navigateLightbox(-1);
        if (e.key === 'ArrowRight') navigateLightbox(1);
    });
};


// Initialize floating SVG elements
function initFloatingElements() {
    const container = document.getElementById('floatingElements');
    const icons = [
        'beerGlass',
        'beerMug',
        'billiards',
        'music',
        'beerBottle',
        // 'beerHand',
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
}

// Initialize reasons section
function initReasons() {
    console.log('Initializing reasons...');
    const grid = document.getElementById('reasonsGrid');
    console.log('reasonsGrid element:', grid);
    console.log('CONFIG.reasons:', CONFIG.reasons);

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

// Initialize menu with lazy loading
function initMenu() {
    console.log('Initializing menu...');
    const tabsContainer = document.getElementById('menuTabs');
    const contentContainer = document.getElementById('menuContent');

    // Create tabs
    CONFIG.menu.categories.forEach((category, index) => {
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
            menuItem.addEventListener('click', () => openMenuModal(item));

            grid.appendChild(menuItem);
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
    // Update tab titles
    document.querySelectorAll('.menu-tab').forEach((tab, index) => {
        const category = CONFIG.menu.categories[index];
        tab.textContent = TRANSLATIONS[currentLang][category.titleKey];
    });

    // Update menu items
    CONFIG.menu.categories.forEach((category, catIndex) => {
        const items = document.querySelectorAll(`#${category.id} .menu-item`);
        items.forEach((item, itemIndex) => {
            const menuItem = category.items[itemIndex];
            item.querySelector('.menu-item-name').textContent = TRANSLATIONS[currentLang][menuItem.nameKey];
            item.querySelector('.menu-item-description').textContent = TRANSLATIONS[currentLang][menuItem.descKey];
            item.querySelector('.menu-item-image img').alt = TRANSLATIONS[currentLang][menuItem.nameKey];
        });
    });
}

// Menu Modal Functions
let currentModalGalleryIndex = 0;
let currentModalItem = null;

function openMenuModal(item) {
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

    // Build gallery
    const images = item.images || [item.image || 'https://via.placeholder.com/800x600/667eea/ffffff?text=No+Image'];
    galleryContainer.innerHTML = '';
    dotsContainer.innerHTML = '';

    images.forEach((img, index) => {
        const slide = document.createElement('div');
        slide.className = 'modal-gallery-slide';
        slide.innerHTML = `<img data-src="${img}" alt="${TRANSLATIONS[currentLang][item.nameKey]}" loading="lazy">`;
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

function goToModalSlide(index) {
    currentModalGalleryIndex = index;

    const container = document.getElementById('modalGalleryContainer');
    const dots = document.querySelectorAll('.modal-gallery-dot');

    container.style.transform = `translateX(-${index * 100}%)`;

    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
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

// Initialize gallery with category navigation
function initGallery() {
    console.log('Initializing gallery (one card per category)...');
    const grid = document.getElementById('bentoGallery');

    if (!grid) {
        console.error('bentoGallery element not found!');
        return;
    }

    grid.innerHTML = '';

    CONFIG.gallery.categories.forEach((category, catIndex) => {
        const firstImageObj = (category.images && category.images.length > 0) ? category.images[0] : null;
        // Skip category if it has no images
        if (!firstImageObj) return;

        const item = document.createElement('div');
        item.className = 'bento-item category-card';
        item.dataset.category = category.id;
        item.dataset.index = 0; // always show first image on card

        // Title from translations (fall back to category.id)
        const categoryTitle = TRANSLATIONS[currentLang][category.titleKey] || category.titleKey || category.id;

        item.innerHTML = `
            <img data-src="${firstImageObj.image}" alt="${firstImageObj.alt || categoryTitle}" loading="lazy">
            <div class="bento-item-overlay">
                <div class="bento-item-category">${categoryTitle}</div>
                <div class="bento-item-title">${firstImageObj.titleKey ? (TRANSLATIONS[currentLang][firstImageObj.titleKey] || firstImageObj.alt) : firstImageObj.alt}</div>
            </div>
        `;

        // Open lightbox for this category, starting at index 0
        item.addEventListener('click', () => {
            openLightbox(category.id, 0);
        });

        grid.appendChild(item);

        // Observe lazy load for the card image
        const imgEl = item.querySelector('img');
        if (imgEl) imageLoader.observe(imgEl);
    });
}



// Initialize lightbox with fixed close button
function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxClose = document.getElementById('lightboxClose');
    const lightboxPrev = document.getElementById('lightboxPrev');
    const lightboxNext = document.getElementById('lightboxNext');

    if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
    if (lightboxPrev) lightboxPrev.addEventListener('click', () => navigateLightbox(-1));
    if (lightboxNext) lightboxNext.addEventListener('click', () => navigateLightbox(1));

    // Close on background click
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

// Open lightbox
function openLightbox(categoryId, index) {
    const category = CONFIG.gallery.categories.find(cat => cat.id === categoryId);
    if (!category || !category.images || category.images.length === 0) return;

    currentGalleryCategory = categoryId;
    // Clamp index to available images
    currentGalleryIndex = Math.max(0, Math.min(index, category.images.length - 1));

    showLightboxImage();

    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

// Close lightbox
function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.classList.remove('active');
    }
    document.body.style.overflow = '';
}

// Navigate lightbox
function navigateLightbox(direction) {
    const category = CONFIG.gallery.categories.find(cat => cat.id === currentGalleryCategory);
    if (!category || !category.images || category.images.length === 0) return;

    currentGalleryIndex += direction;

    if (currentGalleryIndex < 0) {
        currentGalleryIndex = category.images.length - 1;
    } else if (currentGalleryIndex >= category.images.length) {
        currentGalleryIndex = 0;
    }

    showLightboxImage();
}

// Show current lightbox image
function showLightboxImage() {
    const category = CONFIG.gallery.categories.find(cat => cat.id === currentGalleryCategory);
    if (!category || !category.images || !category.images[currentGalleryIndex]) return;

    const image = category.images[currentGalleryIndex];
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxCategory = document.getElementById('lightboxCategory');
    const lightboxTitle = document.getElementById('lightboxTitle');

    if (lightboxImage) {
        // Use data-src so imageLoader could handle if you want, but for lightbox we load immediately:
        lightboxImage.removeAttribute('data-src');
        lightboxImage.alt = image.alt || '';
        lightboxImage.classList.remove('loaded');

        // Preload then assign
        const tempImg = new Image();
        tempImg.onload = () => {
            lightboxImage.src = image.image;
            lightboxImage.classList.add('loaded');
        };
        tempImg.onerror = () => {
            console.error('Failed to load lightbox image:', image.image);
        };
        tempImg.src = image.image;
    }

    // Update category & title text
    const categoryText = TRANSLATIONS[currentLang][category.titleKey] || category.titleKey || category.id;
    const titleText = image.titleKey ? (TRANSLATIONS[currentLang][image.titleKey] || image.alt) : image.alt || '';

    if (lightboxCategory) lightboxCategory.textContent = categoryText;
    if (lightboxTitle) lightboxTitle.textContent = titleText;
}

// Initialize team with multiple photos
function initTeam() {
    console.log('Initializing team...');
    const grid = document.getElementById('teamGrid');

    CONFIG.team.forEach((member, memberIndex) => {
        const card = document.createElement('div');
        card.className = 'team-card';
        card.dataset.memberIndex = memberIndex;

        const firstPhoto = member.photos[0] || 'https://placehold.co/400x400/667eea/ffffff?text=Team';

        card.innerHTML = `
            <div class="team-photo">
                <img data-src="${firstPhoto}" alt="${TRANSLATIONS[currentLang][member.nameKey]}" loading="lazy">
                ${member.photos.length > 1 ? `
                    <div class="team-photo-nav team-photo-prev">‹</div>
                    <div class="team-photo-nav team-photo-next">›</div>
                    <div class="team-photo-dots"></div>
                ` : ''}
            </div>
            <div class="team-info">
                <h3 class="team-name" data-i18n="${member.nameKey}">${TRANSLATIONS[currentLang][member.nameKey]}</h3>
                <p class="team-role" data-i18n="${member.roleKey}">${TRANSLATIONS[currentLang][member.roleKey]}</p>
                <p class="team-description" data-i18n="${member.descKey}">${TRANSLATIONS[currentLang][member.descKey]}</p>
            </div>
        `;

        // 🔥 FIX: enable lazy loading for team photo!
        const imgEl = card.querySelector('.team-photo img');
        if (imgEl) imageLoader.observe(imgEl);

        grid.appendChild(card);
    });
}


function updateTeamPhoto(card, memberIndex, photoIndex) {
    const member = CONFIG.team[memberIndex];
    const photoElement = card.querySelector('.team-photo img');
    const dots = card.querySelectorAll('.team-photo-dot');

    if (photoElement && member.photos[photoIndex]) {
        photoElement.setAttribute('data-src', member.photos[photoIndex]);
        photoElement.alt = `${TRANSLATIONS[currentLang][member.nameKey]} - фото ${photoIndex + 1}`;

        // Update dots
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === photoIndex);
        });

        // Store current photo index
        card.dataset.photoIndex = photoIndex;
    }
}

// Update team text
function updateTeam() {
    const cards = document.querySelectorAll('.team-card');
    cards.forEach((card, index) => {
        const member = CONFIG.team[index];
        card.querySelector('.team-name').textContent = TRANSLATIONS[currentLang][member.nameKey];
        card.querySelector('.team-role').textContent = TRANSLATIONS[currentLang][member.roleKey];
        card.querySelector('.team-description').textContent = TRANSLATIONS[currentLang][member.descKey];
        card.querySelector('.team-photo img').alt = TRANSLATIONS[currentLang][member.nameKey];
    });
}

// Initialize contact with custom icons
function initContact() {
    console.log('Initializing contact...');
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
            let icon = '';

            // if (href.includes('instagram')) {
            //     className = 'instagram';
            //     icon = '📸';
            // } else if (href.includes('t.me')) {
            //     className = 'telegram';
            //     icon = '✈️';
            // } else if (href.includes('2gis')) {
            //     className = 'map';
            //     icon = '🗺️';
            // } else {
            //     icon = '🔗';
            // }

            linksHtml += `<a href="${href}" target="_blank" class="${className}">${icon} ${text}</a>`;
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
            let icon = '';

            // if (href.includes('instagram')) {
            //     className = 'instagram';
            //     icon = '📸';
            // } else if (href.includes('t.me')) {
            //     className = 'telegram';
            //     icon = '✈️';
            // } else if (href.includes('2gis')) {
            //     className = 'map';
            //     icon = '🗺️';
            // } else {
            //     icon = '🔗';
            // }

            linksHtml += `<a href="${href}" target="_blank" class="${className}">${icon} ${text}</a>`;
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

    // Parallax effect for floating elements
    // document.addEventListener('mousemove', (e) => {
    //     const floatItems = document.querySelectorAll('.float-item');
    //     const mouseX = e.clientX / window.innerWidth;
    //     const mouseY = e.clientY / window.innerHeight;
    //
    //     floatItems.forEach((item, index) => {
    //         const speed = (index + 1) * 0.5;
    //         const x = (mouseX - 0.5) * speed * 50;
    //         const y = (mouseY - 0.5) * speed * 50;
    //
    //         item.style.transform = `translate(${x}px, ${y}px)`;
    //     });
    // });
}
