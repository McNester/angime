// Admin Panel JavaScript
// Password for admin access (change this!)
const ADMIN_USERNAME = 'arseblan';
const ADMIN_PASSWORD = 'yakonch2026';

let menuData = null;
let currentCategory = null;
let currentEditingItem = null;
let hasUnsavedChanges = false;

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    initLogin();
    initAdmin();
});

// Login functionality
function initLogin() {
    const loginScreen = document.getElementById('loginScreen');
    const adminPanel = document.getElementById('adminPanel');
    const loginBtn = document.getElementById('loginBtn');
    const usernameInput = document.getElementById('usernameInput');
    const passwordInput = document.getElementById('passwordInput');
    const loginError = document.getElementById('loginError');

    // Check if already logged in
    if (localStorage.getItem('adminLoggedIn') === 'true') {
        document.body.className = 'admin-page';
        loginScreen.style.display = 'none';
        adminPanel.style.display = 'flex';
        loadMenuData();
        return;
    }

    document.body.className = 'login-page';

    loginBtn.addEventListener('click', () => {
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();
        
        if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
            localStorage.setItem('adminLoggedIn', 'true');
            document.body.className = 'admin-page';
            loginScreen.style.display = 'none';
            adminPanel.style.display = 'flex';
            loadMenuData();
        } else {
            loginError.textContent = 'Неверный логин или пароль';
            usernameInput.value = '';
            passwordInput.value = '';
        }
    });

    // Enter key support
    usernameInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            passwordInput.focus();
        }
    });

    passwordInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            loginBtn.click();
        }
    });
}

// Logout
document.getElementById('logoutBtn')?.addEventListener('click', () => {
    localStorage.removeItem('adminLoggedIn');
    location.reload();
});

// Load menu data
function loadMenuData() {
    // Try to load from menu.json first, fallback to CONFIG
    // menu.json is in root, not in admin folder
    // Use absolute path for production compatibility
    const menuJsonPath = window.location.pathname.includes('/adminangime') 
        ? '/menu.json' 
        : '../menu.json';
    
    fetch(menuJsonPath)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('menu.json not found');
        })
        .then(data => {
            menuData = data.menu || data;
            renderAdmin();
        })
        .catch(() => {
            // Use CONFIG from config.js
            menuData = JSON.parse(JSON.stringify(CONFIG.menu));
            renderAdmin();
        });
}

// Render admin interface
function renderAdmin() {
    if (!menuData || !menuData.categories) {
        updateStatus('Нет данных меню');
        return;
    }
    renderCategories();
    const total = menuData.categories.reduce((sum, cat) => sum + (cat.items ? cat.items.length : 0), 0);
    const totalEl = document.getElementById('totalItems');
    if (totalEl) totalEl.textContent = total;
    updateStatus('Меню загружено');
}

// Render category tabs (sidebar: categoriesList)
function renderCategories() {
    const tabsContainer = document.getElementById('categoriesList');
    if (!tabsContainer) return;
    tabsContainer.innerHTML = '';

    menuData.categories.forEach((category, index) => {
        const tab = document.createElement('button');
        tab.type = 'button';
        tab.className = `category-item ${index === 0 ? 'active' : ''}`;
        tab.textContent = getCategoryTitle(category);
        tab.addEventListener('click', () => selectCategory(category, index));
        tabsContainer.appendChild(tab);
    });

    // Select first category by default
    if (menuData.categories.length > 0) {
        selectCategory(menuData.categories[0], 0);
    }
}

// Get category title from translations
function getCategoryTitle(category) {
    // Try to get from TRANSLATIONS if available
    if (typeof TRANSLATIONS !== 'undefined' && TRANSLATIONS.ru) {
        return TRANSLATIONS.ru[category.titleKey] || category.titleKey;
    }
    return category.titleKey;
}

// Select category
function selectCategory(category, index) {
    currentCategory = { category, index };
    
    // Update tabs
    document.querySelectorAll('.category-item').forEach((tab, i) => {
        tab.classList.toggle('active', i === index);
    });

    // Update header
    document.getElementById('currentCategoryTitle').textContent = getCategoryTitle(category);
    document.getElementById('addItemBtn').style.display = 'block';

    // Render items
    renderItems(category.items);
}

// Render items list (content: itemsGrid)
function renderItems(items) {
    const itemsGrid = document.getElementById('itemsGrid');
    if (!itemsGrid) return;

    if (items.length === 0) {
        itemsGrid.innerHTML = '<div class="empty-state"><p>В этой категории пока нет позиций</p></div>';
        return;
    }

    itemsGrid.innerHTML = '';

    items.forEach((item, itemIndex) => {
        const itemCard = createItemCard(item, itemIndex);
        itemsGrid.appendChild(itemCard);
    });
}

// Create item card
function createItemCard(item, itemIndex) {
    const card = document.createElement('div');
    card.className = 'item-card';

    const imageSrc = item.images && item.images.length > 0 
        ? item.images[0] 
        : 'https://placehold.co/120x120/667eea/ffffff?text=No+Image';

    const nameRu = getTranslation(item.nameKey, 'ru') || item.nameKey;
    const descRu = item.descKey ? (getTranslation(item.descKey, 'ru') || '') : '';

    card.innerHTML = `
        <img src="${imageSrc}" alt="${nameRu}" class="item-card-image" onerror="this.src='https://placehold.co/400x200/2d2d2d/888?text=No+Image'">
        <div class="item-card-content">
            <div class="item-card-header">
                <h3 class="item-card-name">${nameRu}</h3>
                <span class="item-card-price">${item.price}</span>
            </div>
            <p class="item-card-description">${descRu}</p>
            <div class="item-card-specs">
                ${item.specs ? item.specs.map(spec => `<span class="spec-badge">${spec}</span>`).join('') : ''}
            </div>
            <div class="item-card-actions">
                <button type="button" class="btn btn-primary btn-small" onclick="editItem(${itemIndex})">✏️ Редактировать</button>
                <button type="button" class="btn btn-danger btn-small" onclick="deleteItem(${itemIndex})">🗑️ Удалить</button>
            </div>
        </div>
    `;

    return card;
}

// Get translation
function getTranslation(key, lang = 'ru') {
    if (typeof TRANSLATIONS !== 'undefined' && TRANSLATIONS[lang]) {
        return TRANSLATIONS[lang][key];
    }
    return null;
}

// Edit item
function editItem(itemIndex) {
    if (!currentCategory || !currentCategory.category || !currentCategory.category.items) return;
    const item = currentCategory.category.items[itemIndex];
    if (!item) return;
    currentEditingItem = { item, itemIndex };

    // Populate form
    document.getElementById('nameRu').value = getTranslation(item.nameKey, 'ru') || item.nameKey || '';
    document.getElementById('nameKk').value = getTranslation(item.nameKey, 'kk') || '';
    document.getElementById('nameEn').value = getTranslation(item.nameKey, 'en') || '';
    document.getElementById('price').value = item.price || '';
    document.getElementById('descRu').value = item.descKey ? (getTranslation(item.descKey, 'ru') || '') : '';
    document.getElementById('descKk').value = item.descKey ? (getTranslation(item.descKey, 'kk') || '') : '';
    document.getElementById('descEn').value = item.descKey ? (getTranslation(item.descKey, 'en') || '') : '';
    document.getElementById('specs').value = item.specs ? item.specs.join(', ') : '';
    const imagesEl = document.getElementById('images');
    if (imagesEl) imagesEl.value = item.images ? item.images.join('\n') : '';
    document.getElementById('details').value = item.details ? JSON.stringify(item.details, null, 2) : '';

    // Show modal
    const modal = document.getElementById('itemModal');
    if (modal) modal.classList.add('active');
    const titleEl = document.getElementById('modalTitle');
    if (titleEl) titleEl.textContent = 'Редактировать позицию';
}

// Add new item
function addNewItem() {
    currentEditingItem = { item: null, itemIndex: -1 };

    // Clear form
    document.getElementById('itemForm').reset();
    document.getElementById('modalTitle').textContent = 'Добавить новую позицию';

    // Show modal
    document.getElementById('itemModal').classList.add('active');
}

// Delete item
function deleteItem(itemIndex) {
    if (!confirm('Вы уверены, что хотите удалить эту позицию?')) {
        return;
    }

    currentCategory.category.items.splice(itemIndex, 1);
    renderItems(currentCategory.category.items);
    markAsChanged();
}

// Save item
function saveItem(formData) {
    const nameRu = formData.nameRu.value.trim();
    if (!nameRu || !formData.price.value.trim()) {
        alert('Заполните обязательные поля: Название (RU) и Цена');
        return;
    }

    // Generate keys
    const nameKey = currentEditingItem.item?.nameKey || generateKey('item', 'Name');
    const descKey = currentEditingItem.item?.descKey || generateKey('item', 'Desc');

    // Parse specs
    const specs = formData.specs.value
        .split(',')
        .map(s => s.trim())
        .filter(s => s.length > 0);

    // Parse images (поле "images" — textarea с URL, по одному на строку)
    const imagesRaw = formData.images ? formData.images.value : '';
    const images = imagesRaw
        .split(/[,\n]/)
        .map(img => img.trim())
        .filter(img => img.length > 0);

    // Parse details
    let details = null;
    if (formData.details.value.trim()) {
        try {
            details = JSON.parse(formData.details.value);
        } catch (e) {
            alert('Ошибка в формате JSON для деталей. Исправьте и попробуйте снова.');
            return;
        }
    }

    // Create/update item
    const item = {
        nameKey,
        price: formData.price.value.trim(),
        descKey: formData.descKk.value.trim() || formData.descEn.value.trim() ? descKey : undefined,
        specs: specs.length > 0 ? specs : [],
        images: images.length > 0 ? images : [],
        ...(details && { details })
    };

    // Update translations (we'll need to handle this separately)
    updateTranslations(nameKey, {
        ru: formData.nameRu.value.trim(),
        kk: formData.nameKk.value.trim(),
        en: formData.nameEn.value.trim()
    });

    if (formData.descRu.value.trim()) {
        updateTranslations(descKey, {
            ru: formData.descRu.value.trim(),
            kk: formData.descKk.value.trim(),
            en: formData.descEn.value.trim()
        });
    }

    // Add or update item
    if (currentEditingItem.itemIndex === -1) {
        // New item
        currentCategory.category.items.push(item);
    } else {
        // Update existing
        currentCategory.category.items[currentEditingItem.itemIndex] = item;
    }

    renderItems(currentCategory.category.items);
    closeModal();
    markAsChanged();
}

// Generate unique key
function generateKey(prefix, suffix) {
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 1000);
    return `${prefix}${timestamp}${random}${suffix}`;
}

// Update translations (stored separately)
let translationsData = {};

function updateTranslations(key, translations) {
    if (!translationsData[key]) {
        translationsData[key] = {};
    }
    Object.assign(translationsData[key], translations);
}

// Initialize admin
function initAdmin() {
    // Add item button
    document.getElementById('addItemBtn')?.addEventListener('click', addNewItem);

    // Modal handlers
    document.getElementById('modalClose')?.addEventListener('click', closeModal);
    document.getElementById('cancelBtn')?.addEventListener('click', closeModal);

    // Form submit
    document.getElementById('itemForm')?.addEventListener('submit', (e) => {
        e.preventDefault();
        saveItem(e.target);
    });

    // Save button
    document.getElementById('saveBtn')?.addEventListener('click', saveToFile);

    // Export button
    document.getElementById('exportBtn')?.addEventListener('click', exportJSON);

    // Close modal on background click
    document.getElementById('itemModal')?.addEventListener('click', (e) => {
        if (e.target.id === 'itemModal') {
            closeModal();
        }
    });
}

// Close modal
function closeModal() {
    document.getElementById('itemModal').classList.remove('active');
    currentEditingItem = null;
}

// Mark as changed
function markAsChanged() {
    hasUnsavedChanges = true;
    document.getElementById('unsavedIndicator').style.display = 'block';
    updateStatus('Есть несохраненные изменения');
}

// Update status
function updateStatus(message) {
    document.getElementById('statusText').textContent = message;
}

// Save to file
function saveToFile() {
    if (!menuData) {
        alert('Нет данных для сохранения');
        return;
    }

    // Create data structure
    const dataToSave = {
        menu: menuData,
        translations: translationsData,
        updatedAt: new Date().toISOString()
    };

    // Convert to JSON
    const json = JSON.stringify(dataToSave, null, 2);

    // Create blob and download
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'menu.json';
    a.click();
    URL.revokeObjectURL(url);

    hasUnsavedChanges = false;
    document.getElementById('unsavedIndicator').style.display = 'none';
    updateStatus('Меню экспортировано в menu.json. Загрузите файл в корень сайта (рядом с index.html) через FTP/GitHub.');
}

// Export JSON
function exportJSON() {
    if (!menuData) {
        alert('Нет данных для экспорта');
        return;
    }

    const json = JSON.stringify(menuData, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'menu-export.json';
    a.click();
    URL.revokeObjectURL(url);

    updateStatus('JSON экспортирован');
}

// Make functions global for onclick handlers
window.editItem = editItem;
window.deleteItem = deleteItem;
