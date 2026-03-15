// Admin Panel JavaScript
// Password for admin access (change this!)
const ADMIN_USERNAME = 'arseblan';
const ADMIN_PASSWORD = 'yakonch2026';

let menuData = null;
let currentCategory = null;
let currentEditingItem = null;
let hasUnsavedChanges = false;

var ANGIME_MENU_KEY = 'angime_menu';

function saveMenuToStorage() {
    if (!menuData) return;
    try {
        var payload = { menu: menuData, translations: translationsData, updatedAt: new Date().toISOString() };
        localStorage.setItem(ANGIME_MENU_KEY, JSON.stringify(payload));
        pushToRemote(payload);
    } catch (e) {}
}

function pushToRemote(payload) {
    if (typeof CONFIG === 'undefined' || !CONFIG.REMOTE_MENU_URL) return;
    var key = localStorage.getItem('angime_jsonbin_key');
    if (!key) return;
    var m = CONFIG.REMOTE_MENU_URL.match(/\/b\/([^/]+)/);
    if (!m) return;
    var binId = m[1];
    fetch('https://api.jsonbin.io/v3/b/' + binId, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', 'X-Master-Key': key },
        body: JSON.stringify(payload || { menu: menuData, translations: translationsData, updatedAt: new Date().toISOString() })
    }).then(function(r) {
        if (r.ok) updateStatus('Меню сохранено в облако — изменения видны на всех устройствах');
        else r.text().then(function(t) { console.warn('JSONBin:', t); });
    }).catch(function(e) { console.warn('pushToRemote', e); });
}

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
    const menuJsonPath = window.location.pathname.includes('/adminangime') ? '/menu.json' : '../menu.json';

    function applyMenu(data, source) {
        menuData = data;
        renderAdmin();
        if (source) updateStatus(source);
    }
    function useConfig() {
        menuData = JSON.parse(JSON.stringify(CONFIG.menu));
        renderAdmin();
    }
    function applyRemote(record) {
        if (!record || !record.menu || !record.menu.categories) return false;
        menuData = record.menu;
        if (record.translations && typeof TRANSLATIONS !== 'undefined') {
            try {
                var tr = record.translations;
                for (var key in tr)
                    for (var lang in tr[key])
                        if (TRANSLATIONS[lang]) TRANSLATIONS[lang][key] = tr[key][lang];
            } catch (e) {}
        }
        if (record.translations) translationsData = record.translations;
        applyMenu(record.menu, 'Меню загружено из облака');
        return true;
    }

    if (typeof CONFIG !== 'undefined' && CONFIG.REMOTE_MENU_URL) {
        var opts = {};
        var key = localStorage.getItem('angime_jsonbin_key');
        if (key) opts.headers = { 'X-Master-Key': key };
        fetch(CONFIG.REMOTE_MENU_URL, opts)
            .then(function(r) { return r.ok ? r.json() : null; })
            .then(function(data) {
                var record = data && (data.record || data);
                if (applyRemote(record)) return;
                runLocalOrFile();
            })
            .catch(function() { runLocalOrFile(); });
        return;
    }
    runLocalOrFile();

    function runLocalOrFile() {
        var fromServer = null;
        var fromLocal = null;
        try {
            var saved = localStorage.getItem(ANGIME_MENU_KEY);
            if (saved) {
                var parsed = JSON.parse(saved);
                if (parsed && parsed.menu && parsed.menu.categories && parsed.menu.categories.length)
                    fromLocal = parsed;
            }
        } catch (e) {}

        fetch(menuJsonPath)
        .then(function(response) {
            if (response.ok) return response.json();
            throw new Error('menu.json not found');
        })
        .then(function(data) {
            fromServer = { menu: data.menu || data, updatedAt: data.updatedAt || '' };
        })
        .catch(function() { fromServer = null; })
        .then(function() {
            var serverTime = fromServer && fromServer.updatedAt ? fromServer.updatedAt : '';
            var localTime = fromLocal && fromLocal.updatedAt ? fromLocal.updatedAt : '';
            if (fromLocal && (!fromServer || localTime > serverTime)) {
                if (fromLocal.translations && typeof TRANSLATIONS !== 'undefined') {
                    try {
                        var tr = fromLocal.translations;
                        for (var key in tr)
                            for (var lang in tr[key])
                                if (TRANSLATIONS[lang]) TRANSLATIONS[lang][key] = tr[key][lang];
                    } catch (e) {}
                }
                if (fromLocal.translations) translationsData = fromLocal.translations;
                applyMenu(fromLocal.menu, 'Меню загружено из сохранённой копии');
                return;
            }
            if (fromServer) {
                applyMenu(fromServer.menu, 'Меню загружено');
                return;
            }
            if (fromLocal) {
                applyMenu(fromLocal.menu, 'Меню загружено из сохранённой копии');
                return;
            }
            useConfig();
        });
    }
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
    try {
        if (!currentCategory || !currentCategory.category || !currentCategory.category.items) return;
        var idx = typeof itemIndex === 'string' ? parseInt(itemIndex, 10) : itemIndex;
        if (isNaN(idx) || idx < 0) return;
        const item = currentCategory.category.items[idx];
        if (!item) return;
        currentEditingItem = { item, itemIndex: idx };

        // Сначала открываем модалку — пользователь сразу видит реакцию
        var modal = document.getElementById('itemModal');
        if (modal) modal.classList.add('active');
        var titleEl = document.getElementById('modalTitle');
        if (titleEl) titleEl.textContent = 'Редактировать позицию';

        // Безопасно заполняем поля (каждый элемент проверяем)
        function setVal(id, val) { var el = document.getElementById(id); if (el && val !== undefined) el.value = val; }
        setVal('nameRu', getTranslation(item.nameKey, 'ru') || item.nameKey || '');
        setVal('nameKk', getTranslation(item.nameKey, 'kk') || '');
        setVal('nameEn', getTranslation(item.nameKey, 'en') || '');
        setVal('price', item.price || '');
        setVal('descRu', item.descKey ? (getTranslation(item.descKey, 'ru') || '') : '');
        setVal('descKk', item.descKey ? (getTranslation(item.descKey, 'kk') || '') : '');
        setVal('descEn', item.descKey ? (getTranslation(item.descKey, 'en') || '') : '');
        setVal('specs', item.specs ? item.specs.join(', ') : '');
        setVal('images', item.images ? item.images.join('\n') : '');
        setVal('details', item.details ? JSON.stringify(item.details, null, 2) : '');
    } catch (e) {
        console.error('editItem error', e);
        var m = document.getElementById('itemModal');
        if (m) m.classList.add('active');
    }
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
    saveMenuToStorage();
    markAsChanged();
}

function getVal(id) {
    var el = document.getElementById(id);
    return el ? (el.value || '').trim() : '';
}

// Save item — читает поля по id из DOM, сохраняет в меню
function saveItem() {
    try {
        if (!currentCategory || !currentCategory.category || !currentCategory.category.items) {
            alert('Сначала выберите категорию.');
            return;
        }
        if (!currentEditingItem || currentEditingItem.itemIndex === undefined) {
            alert('Ошибка: нет выбранной позиции.');
            return;
        }
        var nameRu = getVal('nameRu');
        var priceVal = getVal('price');
        if (!nameRu || !priceVal) {
            alert('Заполните обязательные поля: Название (RU) и Цена');
            return;
        }

    var nameKey = currentEditingItem.item ? currentEditingItem.item.nameKey : generateKey('item', 'Name');
    var descKey = (currentEditingItem.item && currentEditingItem.item.descKey) ? currentEditingItem.item.descKey : generateKey('item', 'Desc');

    var specs = (getVal('specs') || '').split(',').map(function(s) { return s.trim(); }).filter(Boolean);
    var imagesRaw = getVal('images') || '';
    var images = imagesRaw.split(/[,\n]/).map(function(s) { return s.trim(); }).filter(Boolean);

    var details = null;
    var detailsStr = getVal('details');
    if (detailsStr) {
        try { details = JSON.parse(detailsStr); } catch (e) {
            alert('Ошибка в формате JSON для деталей.');
            return;
        }
    }

    var item = {
        nameKey: nameKey,
        price: priceVal,
        specs: specs,
        images: images
    };
    if (getVal('descRu') || getVal('descKk') || getVal('descEn')) item.descKey = descKey;
    if (details) item.details = details;

    updateTranslations(nameKey, { ru: nameRu, kk: getVal('nameKk'), en: getVal('nameEn') });
    if (getVal('descRu') || getVal('descKk') || getVal('descEn'))
        updateTranslations(descKey, { ru: getVal('descRu'), kk: getVal('descKk'), en: getVal('descEn') });

    if (currentEditingItem.itemIndex === -1) {
        currentCategory.category.items.push(item);
    } else {
        currentCategory.category.items[currentEditingItem.itemIndex] = item;
    }

    renderItems(currentCategory.category.items);
    saveMenuToStorage();
    closeModal();
    markAsChanged();
    updateStatus('Позиция сохранена');
    } catch (e) {
        console.error('saveItem', e);
        alert('Ошибка сохранения: ' + (e.message || e));
    }
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
    if (typeof TRANSLATIONS !== 'undefined') {
        for (var lang in translations) {
            if (TRANSLATIONS[lang]) TRANSLATIONS[lang][key] = translations[lang];
        }
    }
}

// Initialize admin
function initAdmin() {
    // Add item button
    document.getElementById('addItemBtn')?.addEventListener('click', addNewItem);

    // Modal handlers
    document.getElementById('modalClose')?.addEventListener('click', closeModal);
    document.getElementById('cancelBtn')?.addEventListener('click', closeModal);

    document.getElementById('saveItemBtn')?.addEventListener('click', saveItem);
    document.getElementById('itemForm')?.addEventListener('submit', function(e) {
        e.preventDefault();
        saveItem();
    });

    document.getElementById('cloudSetupBtn')?.addEventListener('click', function() {
        var key = prompt('Ключ API JSONBin (для сохранения в облако):\n\nПолучить: jsonbin.io → API Keys. Вставьте сюда Master Key.');
        if (key != null && key.trim()) {
            localStorage.setItem('angime_jsonbin_key', key.trim());
            alert('Ключ сохранён. В config.js задайте REMOTE_MENU_URL:\nhttps://api.jsonbin.io/v3/b/ВАШ_BIN_ID/latest\n\nСоздайте бин на jsonbin.io, скопируйте ссылку. После этого нажмите «Сделать бин публичным», чтобы сайт загружал меню на всех устройствах без ключа.');
        }
    });

    document.getElementById('cloudPublicBtn')?.addEventListener('click', function() {
        if (typeof CONFIG === 'undefined' || !CONFIG.REMOTE_MENU_URL) {
            alert('Сначала в config.js задайте REMOTE_MENU_URL (ссылка на ваш бин).');
            return;
        }
        var key = localStorage.getItem('angime_jsonbin_key');
        if (!key) {
            alert('Сначала нажмите «Облако» и введите API-ключ JSONBin.');
            return;
        }
        var m = CONFIG.REMOTE_MENU_URL.match(/\/b\/([^/]+)/);
        if (!m) {
            alert('В REMOTE_MENU_URL должен быть путь вида .../b/BIN_ID/latest');
            return;
        }
        var binId = m[1];
        fetch('https://api.jsonbin.io/v3/b/' + binId + '/meta/privacy', {
            method: 'PUT',
            headers: { 'X-Master-Key': key, 'X-Bin-Private': 'false', 'Content-Type': 'application/json' },
            body: '{}'
        }).then(function(r) {
            if (r.ok) alert('Готово. Бин теперь публичный — сайт будет загружать меню на всех устройствах (Safari, телефоны) без ключа.');
            else r.text().then(function(t) { alert('Ошибка: ' + t); });
        }).catch(function(e) { alert('Ошибка: ' + e.message); });
    });

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

    saveMenuToStorage();
    pushToRemote(dataToSave);
    hasUnsavedChanges = false;
    document.getElementById('unsavedIndicator').style.display = 'none';
    updateStatus('Меню экспортировано. Если настроено облако — изменения уже на всех устройствах.');
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
