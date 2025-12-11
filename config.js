// Configuration file for Әңgіме Bar Website

const CONFIG = {
    // SVG Icons (embedded from your uploaded files)
    svgIcons: {
        beerGlass: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><g fill="none"><path fill="#ffef5e" d="M8.513 20.13V23h6.974v-2.87"/><path stroke="#191919" stroke-linecap="round" stroke-linejoin="round" d="M8.513 20.13V23h6.974v-2.87"/><path fill="#fff9bf" d="m17.878 4.826l-2.391 15.305H8.512L6.122 4.826z"/><path fill="#ffef5e" d="M12 15.153a8.3 8.3 0 0 1-4.465-1.296l.98 6.277h6.975l.981-6.277A8.33 8.33 0 0 1 12 15.152"/><path stroke="#191919" stroke-linecap="round" stroke-linejoin="round" d="m17.878 4.826l-2.391 15.305H8.512L6.122 4.826z"/><path fill="#c2f3ff" stroke="#191919" stroke-linecap="round" stroke-linejoin="round" d="m18.386 1.548l-.508 3.278H6.121l-.518-3.278a.44.44 0 0 1 .12-.378A.48.48 0 0 1 6.1 1h11.787a.52.52 0 0 1 .389.17a.43.43 0 0 1 .11.378"/><path fill="#78eb7b" stroke="#191919" stroke-linecap="round" stroke-linejoin="round" d="M12 11.522a2.44 2.44 0 0 0 2.49-2.391a2.491 2.491 0 0 0-4.981 0a2.44 2.44 0 0 0 2.49 2.39"/><path stroke="#191919" stroke-linecap="round" stroke-linejoin="round" d="M5.523 23h12.953"/></g></svg>`,

        beerMug: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 36 36"><path fill="#FFAC33" d="M31 5.718h-6v4h4s2 0 2 2v12c0 2-2 2-2 2h-4v4h6c2.206 0 4-1.794 4-4v-16c0-2.206-1.794-4-4-4z"/><path fill="#FFCC4D" d="M27 6H3v26a4 4 0 0 0 4 4h16a4 4 0 0 0 4-4V6z"/><path fill="#F4900C" d="M8.5 32a1 1 0 0 1-1-1V15a1 1 0 0 1 2 0v16a1 1 0 0 1-1 1zm6.5 0a1 1 0 0 1-1-1V15a1 1 0 0 1 2 0v16a1 1 0 0 1-1 1zm6.5 0a1 1 0 0 1-1-1V15a1 1 0 1 1 2 0v16a1 1 0 0 1-1 1z"/><path fill="#FFAC33" d="M3 5v7.445c.59.344 1.268.555 2 .555a4 4 0 0 0 3.701-2.491c.35.302.801.491 1.299.491c.677 0 1.273-.338 1.635-.853A3.988 3.988 0 0 0 15 12a3.98 3.98 0 0 0 3.176-1.593A2.496 2.496 0 0 0 20.5 12c.949 0 1.765-.535 2.188-1.314l.147-.361a3.463 3.463 0 0 0 1.665.439c.981 0 1.865-.406 2.5-1.056V5H3z"/><path fill="#EEE" d="M24 0H4a3 3 0 0 0-3 3v4a4 4 0 0 0 7.701 1.509C9.051 8.811 9.502 9 10 9c.677 0 1.273-.338 1.635-.853A3.988 3.988 0 0 0 15 10a3.98 3.98 0 0 0 3.176-1.593A2.496 2.496 0 0 0 20.5 10c.949 0 1.765-.535 2.188-1.314c.398.195.839.314 1.312.314a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3z"/></svg>`,

        billiards: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 512 512"><path fill="#2B3B47" d="M256 508.206c-138.953 0-252-113.047-252-252C4 117.252 117.047 4.205 256 4.205s252 113.047 252 252.001c0 138.953-113.047 252-252 252z"/><path fill="#F9F9F7" d="M256 397.411c-77.309 0-140.205-62.896-140.205-140.205C115.795 179.896 178.691 117 256 117s140.205 62.896 140.205 140.206c0 77.309-62.896 140.205-140.205 140.205z"/><path fill="#2B3B47" d="M293.372 244.201c8.489-9.122 13.695-21.338 13.695-34.752c0-28.159-22.909-51.067-51.067-51.067c-28.159 0-51.067 22.909-51.067 51.067c0 13.414 5.207 25.629 13.695 34.752c-14.428 11.189-23.741 28.674-23.741 48.304c0 33.697 27.415 61.113 61.113 61.113c33.697 0 61.113-27.416 61.113-61.113c0-19.63-9.313-37.115-23.741-48.304zM256 187.618c12.038 0 21.831 9.794 21.831 21.832s-9.793 21.832-21.831 21.832s-21.832-9.793-21.832-21.832s9.794-21.832 21.832-21.832zm0 136.764c-17.577 0-31.877-14.3-31.877-31.877s14.3-31.878 31.877-31.878s31.877 14.301 31.877 31.878s-14.3 31.877-31.877 31.877z"/><path fill="#597B91" d="M165.608 63.927c7.364 10.35-5.593 32.205-28.939 48.814s-48.241 21.683-55.605 11.332c-7.364-10.35 5.593-32.205 28.939-48.814s48.241-21.683 55.605-11.332z"/></svg>`,

        music: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none"><g fill="none" stroke="#FFD700" stroke-linecap="round" stroke-width="2.5"><circle cx="6" cy="18" r="3" stroke-linejoin="round"/><path stroke-linejoin="round" d="M9 18V5"/><path d="M21 3L9 5m12 2L9 9"/><circle cx="18" cy="16" r="3" stroke-linejoin="round"/><path stroke-linejoin="round" d="M21 16V3"/></g></svg>`,

        beerBottle: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1024 1024"><path d="M327 202.1c-5 0-9.1 4.1-9.1 9.1v115.3c0 32.4-20.3 61.2-50.4 71.6-38.3 13.3-64 49.6-64 90.1v372.4c0 15.5 12.6 28.1 28.1 28.1h248.9c15.5 0 28.1-12.6 28.1-28.1V488.2c0-40.6-25.8-76.8-64.1-90.1-30.1-10.4-50.4-39.2-50.4-71.6V211.1c0-5-4.1-9.1-9.1-9.1h-58z" fill="#95C751"/><path d="M480.1 888.7h-248c-15.8 0-28.6-12.8-28.6-28.6V687.4c0-15.2 12.4-27.6 27.6-27.6h250c15.2 0 27.6 12.4 27.6 27.6v172.7c0 15.8-12.8 28.6-28.6 28.6z" fill="#13AA5B"/></svg>`,

        beerHand: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 512 512"><path fill="#F4A742" d="M172 260h-24l-24 100 24 52h24l24-52z"/><path fill="#FFD93B" d="M404 84c0-46.392-37.608-84-84-84s-84 37.608-84 84h-32v80c0 26.51 21.49 48 48 48h136c26.51 0 48-21.49 48-48V84z"/></svg>`
    },

    // Navigation menu items
    navigation: [
        { id: 'home', href: '#home' },
        { id: 'why', href: '#why' },
        { id: 'menu', href: '#menu' },
        { id: 'gallery', href: '#gallery' },
        { id: 'team', href: '#team' },
        { id: 'contact', href: '#contact' }
    ],

    // Reasons to visit
    reasons: [
        {
            icon: 'beerGlass',
            titleKey: 'reason1Title',
            descKey: 'reason1Desc'
        },
        {
            icon: 'billiards',
            titleKey: 'reason2Title',
            descKey: 'reason2Desc'
        },
        {
            icon: 'music',
            titleKey: 'reason3Title',
            descKey: 'reason3Desc'
        },
        {
            icon: 'beerMug',
            titleKey: 'reason4Title',
            descKey: 'reason4Desc'
        },
        {
            icon: 'beerGlass',
            titleKey: 'reason5Title',
            descKey: 'reason5Desc'
        },
        {
            icon: 'music',
            titleKey: 'reason6Title',
            descKey: 'reason6Desc'
        }
    ],

    // Menu categories and items - REAL ANGIME DATA
    menu: {
        categories: [
            {
                id: 'beer',
                titleKey: 'menuBeerTab',
                items: [
                    {
                        nameKey: 'beerItem1Name',
                        price: '1500₸',
                        descKey: 'beerItem1Desc',
                        specs: ['400мл'],
                        images: ['https://placehold.co/800x600/667eea/ffffff?text=ANIME'],
                        details: { 'Объем': '400мл' }
                    },
                    {
                        nameKey: 'beerItem2Name',
                        price: '1600₸',
                        descKey: 'beerItem2Desc',
                        specs: ['400мл'],
                        images: ['https://placehold.co/800x600/764ba2/ffffff?text=БИДАЙ'],
                        details: { 'Объем': '400мл' }
                    },
                    {
                        nameKey: 'beerItem3Name',
                        price: '2300₸',
                        descKey: 'beerItem3Desc',
                        specs: ['IPL', '400мл'],
                        images: ['https://placehold.co/800x600/f093fb/ffffff?text=Негейское'],
                        details: { 'Тип': 'IPL', 'Объем': '400мл' }
                    },
                    {
                        nameKey: 'beerItem4Name',
                        price: '2000₸',
                        descKey: 'beerItem4Desc',
                        specs: ['400мл'],
                        images: ['https://placehold.co/800x600/4facfe/ffffff?text=MEN+KAZAKH'],
                        details: { 'Объем': '400мл' }
                    },
                    {
                        nameKey: 'beerItem5Name',
                        price: '2300₸',
                        descKey: 'beerItem5Desc',
                        specs: ['Бельгийское', '400мл'],
                        images: ['https://placehold.co/800x600/43e97b/ffffff?text=BLANCH'],
                        details: { 'Стиль': 'Бельгийское', 'Объем': '400мл' }
                    },
                    {
                        nameKey: 'beerItem6Name',
                        price: '1800₸',
                        descKey: 'beerItem6Desc',
                        specs: ['400мл'],
                        images: ['https://placehold.co/800x600/fa709a/ffffff?text=КЁЛЬШ'],
                        details: { 'Объем': '400мл' }
                    },
                    {
                        nameKey: 'beerItem7Name',
                        price: '2000₸',
                        descKey: 'beerItem7Desc',
                        specs: ['Фруктовое', '400мл'],
                        images: ['https://placehold.co/800x600/764ba2/ffffff?text=КРИК'],
                        details: { 'Вкус': 'Вишня', 'Объем': '400мл' }
                    },
                    {
                        nameKey: 'beerItem8Name',
                        price: '2000₸',
                        descKey: 'beerItem8Desc',
                        specs: ['Сидр', '400мл'],
                        images: ['https://placehold.co/800x600/667eea/ffffff?text=АПОРТ'],
                        details: { 'Тип': 'Сидр', 'Объем': '400мл' }
                    },
                    {
                        nameKey: 'beerItem9Name',
                        price: '1400₸',
                        descKey: 'beerItem9Desc',
                        specs: ['400мл'],
                        images: ['https://placehold.co/800x600/f5576c/ffffff?text=HAVI'],
                        details: { 'Объем': '400мл' }
                    },
                    {
                        nameKey: 'beerItem10Name',
                        price: '1400₸',
                        descKey: 'beerItem10Desc',
                        specs: ['400мл'],
                        images: ['https://placehold.co/800x600/4facfe/ffffff?text=HELLES'],
                        details: { 'Стиль': 'Баварский', 'Объем': '400мл' }
                    },
                    {
                        nameKey: 'beerItem11Name',
                        price: '2500₸',
                        descKey: 'beerItem11Desc',
                        specs: ['Темное', '400мл'],
                        images: ['https://placehold.co/800x600/43e97b/ffffff?text=KOMIR'],
                        details: { 'Цвет': 'Темное', 'Объем': '400мл' }
                    },
                    {
                        nameKey: 'beerItem12Name',
                        price: '1000₸',
                        descKey: 'beerItem12Desc',
                        specs: ['Безалкогольный', '400мл'],
                        images: ['https://placehold.co/800x600/fa709a/ffffff?text=Квас'],
                        details: { 'Тип': 'Квас', 'Объем': '400мл' }
                    }
                ]
            },
            {
                id: 'bar',
                titleKey: 'menuBarTab',
                items: [
                    {
                        nameKey: 'barItem1Name',
                        price: '2000₸',
                        descKey: 'barItem1Desc',
                        specs: ['40мл'],
                        image: 'https://placehold.co/400x300/667eea/ffffff?text=OAKHEART'
                    },
                    {
                        nameKey: 'barItem2Name',
                        price: '3000₸',
                        descKey: 'barItem2Desc',
                        specs: ['40мл'],
                        image: 'https://placehold.co/400x300/f5576c/ffffff?text=JAMESON'
                    },
                    {
                        nameKey: 'barItem3Name',
                        price: '2500₸',
                        descKey: 'barItem3Desc',
                        specs: ['40мл'],
                        image: 'https://placehold.co/400x300/4facfe/ffffff?text=BALLANTINES'
                    },
                    {
                        nameKey: 'barItem4Name',
                        price: '2000₸',
                        descKey: 'barItem4Desc',
                        specs: ['40мл'],
                        image: 'https://placehold.co/400x300/43e97b/ffffff?text=WILLIAM+LAWSON'
                    },
                    {
                        nameKey: 'barItem5Name',
                        price: '1500₸',
                        descKey: 'barItem5Desc',
                        specs: ['40мл'],
                        image: 'https://placehold.co/400x300/fa709a/ffffff?text=OLMECA+SILVER'
                    },
                    {
                        nameKey: 'barItem6Name',
                        price: '1700₸',
                        descKey: 'barItem6Desc',
                        specs: ['40мл'],
                        image: 'https://placehold.co/400x300/764ba2/ffffff?text=OLMECA+GOLD'
                    },
                    {
                        nameKey: 'barItem7Name',
                        price: '1800₸',
                        descKey: 'barItem7Desc',
                        specs: ['40мл'],
                        image: 'https://placehold.co/400x300/667eea/ffffff?text=JAGERMEISTER'
                    },
                    {
                        nameKey: 'barItem8Name',
                        price: '8500₸',
                        descKey: 'barItem8Desc',
                        specs: ['330мл', '~15%'],
                        image: 'https://placehold.co/400x300/f093fb/ffffff?text=SOJU'
                    },
                    {
                        nameKey: 'barItem9Name',
                        price: '9000₸',
                        descKey: 'barItem9Desc',
                        specs: ['750мл'],
                        image: 'https://placehold.co/400x300/4facfe/ffffff?text=WINE'
                    },
                    {
                        nameKey: 'barItem10Name',
                        price: '10000₸',
                        descKey: 'barItem10Desc',
                        specs: ['750мл', 'Игристое'],
                        image: 'https://placehold.co/400x300/43e97b/ffffff?text=WINE+COCKTAIL'
                    }
                ]
            },
            {
                id: 'food',
                titleKey: 'menuFoodTab',
                items: [
                    {
                        nameKey: 'foodItem1Name',
                        price: '1700₸',
                        descKey: 'foodItem1Desc',
                        specs: [],
                        image: 'https://placehold.co/400x300/667eea/ffffff?text=Орешки'
                    },
                    {
                        nameKey: 'foodItem2Name',
                        price: '1700₸',
                        descKey: 'foodItem2Desc',
                        specs: [],
                        image: 'https://placehold.co/400x300/f5576c/ffffff?text=Курт'
                    },
                    {
                        nameKey: 'foodItem3Name',
                        price: '2000₸',
                        descKey: 'foodItem3Desc',
                        specs: [],
                        image: 'https://placehold.co/400x300/4facfe/ffffff?text=Чипсы'
                    },
                    {
                        nameKey: 'foodItem4Name',
                        price: '3700₸',
                        descKey: 'foodItem4Desc',
                        specs: [],
                        image: 'https://placehold.co/400x300/43e97b/ffffff?text=Ассорти'
                    },
                    {
                        nameKey: 'foodItem5Name',
                        price: '1500₸',
                        descKey: 'foodItem5Desc',
                        specs: [],
                        image: 'https://placehold.co/400x300/fa709a/ffffff?text=Чечел'
                    },
                    {
                        nameKey: 'foodItem6Name',
                        price: '2800₸',
                        descKey: 'foodItem6Desc',
                        specs: [],
                        image: 'https://placehold.co/400x300/764ba2/ffffff?text=Крылья'
                    },
                    {
                        nameKey: 'foodItem7Name',
                        price: '2700₸',
                        descKey: 'foodItem7Desc',
                        specs: [],
                        image: 'https://placehold.co/400x300/667eea/ffffff?text=Кесадилья'
                    },
                    {
                        nameKey: 'foodItem8Name',
                        price: '3300₸',
                        descKey: 'foodItem8Desc',
                        specs: [],
                        image: 'https://placehold.co/400x300/f5576c/ffffff?text=Бургер'
                    },
                    {
                        nameKey: 'foodItem9Name',
                        price: '2500₸',
                        descKey: 'foodItem9Desc',
                        specs: [],
                        image: 'https://placehold.co/400x300/4facfe/ffffff?text=Маргарита'
                    },
                    {
                        nameKey: 'foodItem10Name',
                        price: '3000₸',
                        descKey: 'foodItem10Desc',
                        specs: [],
                        image: 'https://placehold.co/400x300/43e97b/ffffff?text=Пепперони'
                    },
                    {
                        nameKey: 'foodItem11Name',
                        price: '3200₸',
                        descKey: 'foodItem11Desc',
                        specs: [],
                        image: 'https://placehold.co/400x300/fa709a/ffffff?text=С+курицей'
                    },
                    {
                        nameKey: 'foodItem12Name',
                        price: '3500₸',
                        descKey: 'foodItem12Desc',
                        specs: [],
                        image: 'https://placehold.co/400x300/764ba2/ffffff?text=Мясная'
                    }
                ]
            }
        ]
    },

    // Gallery images with categories
    gallery: [
        {
            image: 'https://placehold.co/600x600/667eea/ffffff?text=Bar+Interior',
            alt: 'Интерьер бара',
            category: 'vibe',
            titleKey: 'gallery1Title'
        },
        {
            image: 'https://placehold.co/600x600/f5576c/ffffff?text=Pool+Table',
            alt: 'Бильярдный стол',
            category: 'vibe',
            titleKey: 'gallery2Title'
        },
        {
            image: 'https://placehold.co/600x600/4facfe/ffffff?text=Guests',
            alt: 'Гости',
            category: 'guests',
            titleKey: 'gallery3Title'
        },
        {
            image: 'https://placehold.co/600x600/43e97b/ffffff?text=Music+Night',
            alt: 'Музыкальный вечер',
            category: 'events',
            titleKey: 'gallery4Title'
        },
        {
            image: 'https://placehold.co/600x600/fa709a/ffffff?text=Food+Menu',
            alt: 'Меню',
            category: 'food',
            titleKey: 'gallery5Title'
        },
        {
            image: 'https://placehold.co/600x600/764ba2/ffffff?text=Party',
            alt: 'Вечеринка',
            category: 'events',
            titleKey: 'gallery6Title'
        },
        {
            image: 'https://placehold.co/600x600/667eea/ffffff?text=Craft+Beer',
            alt: 'Крафтовое пиво',
            category: 'food',
            titleKey: 'gallery7Title'
        },
        {
            image: 'https://placehold.co/600x600/f093fb/ffffff?text=Bar+Counter',
            alt: 'Барная стойка',
            category: 'vibe',
            titleKey: 'gallery8Title'
        },
        {
            image: 'https://placehold.co/600x600/4facfe/ffffff?text=Happy+Guests',
            alt: 'Счастливые гости',
            category: 'guests',
            titleKey: 'gallery9Title'
        }
    ],

    // Team members
    team: [
        {
            nameKey: 'team1Name',
            roleKey: 'team1Role',
            descKey: 'team1Desc',
            photo: 'https://placehold.co/400x400/667eea/ffffff?text=Team'
        },
        {
            nameKey: 'team2Name',
            roleKey: 'team2Role',
            descKey: 'team2Desc',
            photo: 'https://placehold.co/400x400/f5576c/ffffff?text=Chef'
        },
        {
            nameKey: 'team3Name',
            roleKey: 'team3Role',
            descKey: 'team3Desc',
            photo: 'https://placehold.co/400x400/4facfe/ffffff?text=Bartender'
        }
    ],

    // Contact information - REAL ANGIME DATA
    contact: [
        {
            icon: '📍',
            titleKey: 'contactAddress',
            contentKey: 'contactAddressContent'
        },
        {
            icon: '⏰',
            titleKey: 'contactHours',
            contentKey: 'contactHoursContent'
        },
        {
            icon: '📱',
            titleKey: 'contactPhone',
            contentKey: 'contactPhoneContent'
        }
    ]
};

// Translations - REAL ANGIME DATA
const TRANSLATIONS = {
    ru: {
        // Site name and navigation
        siteName: 'ӘҢГІМЕ',
        navHome: 'Главная',
        navWhy: 'Почему мы',
        navMenu: 'Меню',
        navGallery: 'Галерея',
        navTeam: 'Команда',
        navContact: 'Контакты',

        // Hero section
        heroSubtitle: 'Крафтовый бар • Астана',
        heroDescription: 'Место, где рождаются разговоры. Крафтовое пиво собственного производства, бильярд и уютная атмосфера в сердце Астаны.',
        viewMenuBtn: 'Посмотреть меню',
        bookTableBtn: 'Забронировать стол',

        // Why visit section
        whyVisitTitle: 'Почему стоит нас посетить?',
        whyVisitSubtitle: 'Что делает Әңгіме особенным местом',
        reason1Title: 'Собственное крафтовое пиво',
        reason1Desc: '12 сортов авторского пива собственного производства. От легких лагеров до насыщенных элей.',
        reason2Title: 'Бильярд',
        reason2Desc: 'Профессиональные столы для игры с друзьями. Создайте свою компанию.',
        reason3Title: 'Живая музыка',
        reason3Desc: 'Регулярные выступления местных музыкантов. Атмосфера для настоящих разговоров.',
        reason4Title: 'Уютная атмосфера',
        reason4Desc: 'Современный дизайн с казахскими мотивами. Место для встреч и общения.',
        reason5Title: 'Авторская кухня',
        reason5Desc: 'Закуски и блюда, которые идеально дополняют наши напитки.',
        reason6Title: 'События',
        reason6Desc: 'Регулярные тематические вечера и мероприятия. Следите за нашими новостями.',

        // Menu section
        menuTitle: 'Наше меню',
        menuSubtitle: 'Крафтовое пиво, напитки и авторская кухня',
        menuBeerTab: 'Разливное пиво',
        menuBarTab: 'Крепкий алкоголь',
        menuFoodTab: 'Еда',

        // Beer menu items - REAL DATA
        beerItem1Name: 'ANIME',
        beerItem1Desc: 'Настоящий лагерь. Светлый, легкий, освежающий.',
        beerItem2Name: 'БИДАЙ',
        beerItem2Desc: 'Светлое нефильтрованное пшеничное пиво.',
        beerItem3Name: 'Негейское',
        beerItem3Desc: 'Светлый лагерь с сухим охмелением IPL (Indian Pale Lager).',
        beerItem4Name: 'MEN KAZAKH',
        beerItem4Desc: 'Светлый лагерь по авторской технологии казахского пивоварения.',
        beerItem5Name: 'BLANCH',
        beerItem5Desc: 'Классическое пшеничное пиво в бельгийском стиле.',
        beerItem6Name: 'КЁЛЬШ',
        beerItem6Desc: 'Светлое и золотистое пиво сваренное из премиального немецкого солода и хмеля.',
        beerItem7Name: 'КРИК',
        beerItem7Desc: 'Стиль бельгийского пива, приготовленного путем сбраживания ламбика с плодами кислой вишни.',
        beerItem8Name: 'АПОРТ',
        beerItem8Desc: 'Яблочный сидр. Слабоалкогольный напиток, получаемый путём брожения яблочного сока.',
        beerItem9Name: 'HAVI',
        beerItem9Desc: 'Классическое пшеничное нефильтрованное пиво.',
        beerItem10Name: 'HELLES',
        beerItem10Desc: 'Классическое светлое пиво в баварском стиле.',
        beerItem11Name: 'KOMIR',
        beerItem11Desc: 'Темный плотный английский эль из премиального солода и хмеля.',
        beerItem12Name: 'Квас',
        beerItem12Desc: 'Вкус из детства приготовленный по традиционному рецепту.',

        // Bar menu items - REAL DATA
        barItem1Name: 'OAKHEART 40ml',
        barItem1Desc: 'Ром',
        barItem2Name: 'JAMESON 40ml',
        barItem2Desc: 'Виски',
        barItem3Name: 'BALLANTINES 40ml',
        barItem3Desc: 'Виски',
        barItem4Name: 'WILLIAM LAWSON 40ml',
        barItem4Desc: 'Виски',
        barItem5Name: 'OLMECA SILVER 40ml',
        barItem5Desc: 'Текила',
        barItem6Name: 'OLMECA GOLD 40ml',
        barItem6Desc: 'Текила',
        barItem7Name: 'JAGERMEISTER 40ml',
        barItem7Desc: 'Ликёр',
        barItem8Name: 'SOJU 330ml',
        barItem8Desc: 'Корейская рисовая водка до 15% alc.',
        barItem9Name: 'WINE 750ml',
        barItem9Desc: 'Грузинское домашнее вино белое или красное на выбор.',
        barItem10Name: 'WINE COCKTAIL 750ml',
        barItem10Desc: 'Игристые коктейли BELLINI и MIMOSA.',

        // Food menu items - REAL DATA
        foodItem1Name: 'Ассорти орешков',
        foodItem1Desc: 'Миндаль, арахис, фисташки.',
        foodItem2Name: 'Ассорти куртов',
        foodItem2Desc: 'Копченный, классический с паприкой.',
        foodItem3Name: 'Ассорти чипсов',
        foodItem3Desc: 'Картофельные, начос, мини баурсачки и кетчуп.',
        foodItem4Name: 'Ассорти пенное',
        foodItem4Desc: 'Сырные шарики, чечел, пастрами, жаренные колбаски, чесночные гренки и соус тар-тар.',
        foodItem5Name: 'Жаренный чечел',
        foodItem5Desc: 'Хрустящий жареный сыр',
        foodItem6Name: 'Крылья Буффало / BBQ',
        foodItem6Desc: 'Сочные куриные крылышки с острым или BBQ соусом',
        foodItem7Name: 'Кесадилья с курицей',
        foodItem7Desc: 'Тортилья, сыр моцарелла, филе курицы, шампиньоны, лук репчатый, болгарский перец, томатный соус.',
        foodItem8Name: 'Бургер с говядиной',
        foodItem8Desc: 'Лист салата, карамелизованный лук, соус BBQ, рванная говядина, огурец, помидоры, фри, сырный соус.',
        foodItem9Name: 'Пицца Маргарита',
        foodItem9Desc: 'Сыр моцарелла, неаполитанский соус.',
        foodItem10Name: 'Пицца Пепперони',
        foodItem10Desc: 'Сыр моцарелла, неаполитанский соус, пепперони.',
        foodItem11Name: 'Пицца с курицей и грибами',
        foodItem11Desc: 'Сыр моцарелла, неаполитанский соус, куриное филе, шампиньоны.',
        foodItem12Name: 'Мясная пикантная',
        foodItem12Desc: 'Сыр моцарелла, неаполитанский соус, шрирача соус, BBQ соус, пепперони, рванная говядина.',

        // Gallery section
        galleryTitle: 'Атмосфера Әңгіме',
        gallerySubtitle: 'Место, где рождаются истории',
        gallery1Title: 'Интерьер бара',
        gallery2Title: 'Бильярдный стол',
        gallery3Title: 'Наши гости',
        gallery4Title: 'Музыкальный вечер',
        gallery5Title: 'Меню',
        gallery6Title: 'Вечеринка',
        gallery7Title: 'Крафтовое пиво',
        gallery8Title: 'Барная стойка',
        gallery9Title: 'Счастливые гости',
        categoryGuests: 'Гости',
        categoryVibe: 'Атмосфера',
        categoryFood: 'Еда',
        categoryEvents: 'События',

        // Team section
        teamTitle: 'Наша команда',
        teamSubtitle: 'Люди, которые создают атмосферу',
        team1Name: 'Команда Әңгіме',
        team1Role: 'Команда бара',
        team1Desc: 'Профессиональная команда, готовая сделать ваш вечер незабываемым.',
        team2Name: 'Шеф-повар',
        team2Role: 'Повар',
        team2Desc: 'Создает уникальные блюда с казахским колоритом.',
        team3Name: 'Бармены',
        team3Role: 'Барменчики',
        team3Desc: 'Мастера крафтовых коктейлей и пива.',

        // Contact section - REAL DATA
        contactTitle: 'Контакты',
        contactSubtitle: 'Приходите в гости',
        contactAddress: 'Адрес',
        contactAddressContent: 'Достык 4<br>Астана, Казахстан<br><a href="https://2gis.kz/astana/firm/70000001096867561/71.406785%2C51.127837?m=71.40659%2C51.127833%2F19.84" target="_blank">Открыть на карте</a>',
        contactHours: 'Часы работы',
        contactHoursContent: 'Пн-Чт: 18:00 - 03:00<br>Пт-Сб: 18:00 - 05:00<br>Вс: 18:00 - 03:00',
        contactPhone: 'Связь',
        contactPhoneContent: '+7 778 171 8003<br><a href="https://www.instagram.com/angime.bar" target="_blank">@angime.bar</a><br><a href="https://t.me/angimebarast" target="_blank">Telegram</a>',

        // Footer
        footerTagline: 'Крафтовый бар в Астане',
        footerSlogan: 'Место, где рождаются разговоры'
    },

    kk: {
        // Site name and navigation
        siteName: 'ӘҢГІМЕ',
        navHome: 'Басты бет',
        navWhy: 'Неліктен біз',
        navMenu: 'Мәзір',
        navGallery: 'Галерея',
        navTeam: 'Команда',
        navContact: 'Байланыс',

        // Hero section
        heroSubtitle: 'Крафттық бар • Астана',
        heroDescription: 'Әңгімелердің туатын жері. Өзіміздің өндірісіміздің крафттық сырасы, бильярд және Астананың жүрегіндегі жайлы атмосфера.',
        viewMenuBtn: 'Мәзірді қарау',
        bookTableBtn: 'Үстел брондау',

        // Why visit section
        whyVisitTitle: 'Неліктен бізге келу керек?',
        whyVisitSubtitle: 'Әңгіме ерекше ететін нәрсе',
        reason1Title: 'Өзіміздің крафттық сырамыз',
        reason1Desc: 'Өзіміздің өндірісіміздің 12 түрлі авторлық сырасы. Жеңіл лагерден қанық эльге дейін.',
        reason2Title: 'Бильярд',
        reason2Desc: 'Достармен ойнауға арналған кәсіби үстелдер. Өз компанияңызды құрыңыз.',
        reason3Title: 'Тірі музыка',
        reason3Desc: 'Жергілікті музыканттардың тұрақты өнерлері. Шынайы әңгімелерге арналған атмосфера.',
        reason4Title: 'Жайлы атмосфера',
        reason4Desc: 'Қазақ мотивтерімен заманауи дизайн. Кездесулер мен қарым-қатынас орны.',
        reason5Title: 'Авторлық ас',
        reason5Desc: 'Біздің сусындарды керемет толықтыратын тағамдар мен тамақтар.',
        reason6Title: 'Оқиғалар',
        reason6Desc: 'Тұрақты тақырыптық кештер мен іс-шаралар. Біздің жаңалықтарды қадағалаңыз.',

        // Menu section
        menuTitle: 'Біздің мәзір',
        menuSubtitle: 'Крафттық сыра, сусындар және авторлық ас',
        menuBeerTab: 'Құйылатын сыра',
        menuBarTab: 'Күшті алкоголь',
        menuFoodTab: 'Тағам',

        // Contact section - REAL DATA
        contactTitle: 'Байланыс',
        contactSubtitle: 'Келіңіздер қонаққа',
        contactAddress: 'Мекен-жайы',
        contactAddressContent: 'Достық 4<br>Астана, Қазақстан<br><a href="https://2gis.kz/astana/firm/70000001096867561/71.406785%2C51.127837?m=71.40659%2C51.127833%2F19.84" target="_blank">Картада ашу</a>',
        contactHours: 'Жұмыс уақыты',
        contactHoursContent: 'Дс-Бс: 18:00 - 03:00<br>Жм-Сб: 18:00 - 05:00<br>Жк: 18:00 - 03:00',
        contactPhone: 'Байланыс',
        contactPhoneContent: '+7 778 171 8003<br><a href="https://www.instagram.com/angime.bar" target="_blank">@angime.bar</a><br><a href="https://t.me/angimebarast" target="_blank">Telegram</a>',

        // Footer
        footerTagline: 'Астанадағы крафттық бар',
        footerSlogan: 'Әңгімелердің туатын жері'
    },

    en: {
        // Site name and navigation
        siteName: 'ӘҢGІМЕ',
        navHome: 'Home',
        navWhy: 'Why Us',
        navMenu: 'Menu',
        navGallery: 'Gallery',
        navTeam: 'Team',
        navContact: 'Contact',

        // Hero section
        heroSubtitle: 'Craft Bar • Astana',
        heroDescription: 'Where conversations are born. Our own craft beer, billiards and cozy atmosphere in the heart of Astana.',
        viewMenuBtn: 'View Menu',
        bookTableBtn: 'Book a Table',

        // Why visit section
        whyVisitTitle: 'Why Visit Us?',
        whyVisitSubtitle: 'What makes Әңgіме special',
        reason1Title: 'Our Own Craft Beer',
        reason1Desc: '12 varieties of our own craft beer. From light lagers to rich ales.',
        reason2Title: 'Billiards',
        reason2Desc: 'Professional tables for playing with friends. Create your own company.',
        reason3Title: 'Live Music',
        reason3Desc: 'Regular performances by local musicians. Atmosphere for genuine conversations.',
        reason4Title: 'Cozy Atmosphere',
        reason4Desc: 'Modern design with Kazakh motifs. A place for meetings and communication.',
        reason5Title: 'Author\'s Cuisine',
        reason5Desc: 'Snacks and dishes that perfectly complement our drinks.',
        reason6Title: 'Events',
        reason6Desc: 'Regular themed nights and events. Follow our news.',

        // Menu section
        menuTitle: 'Our Menu',
        menuSubtitle: 'Craft beer, drinks and author\'s cuisine',
        menuBeerTab: 'Draft Beer',
        menuBarTab: 'Strong Alcohol',
        menuFoodTab: 'Food',

        // Contact section - REAL DATA
        contactTitle: 'Contact',
        contactSubtitle: 'Come visit us',
        contactAddress: 'Address',
        contactAddressContent: 'Dostyk 4<br>Astana, Kazakhstan<br><a href="https://2gis.kz/astana/firm/70000001096867561/71.406785%2C51.127837?m=71.40659%2C51.127833%2F19.84" target="_blank">Open on map</a>',
        contactHours: 'Working Hours',
        contactHoursContent: 'Mon-Thu: 18:00 - 03:00<br>Fri-Sat: 18:00 - 05:00<br>Sun: 18:00 - 03:00',
        contactPhone: 'Contact',
        contactPhoneContent: '+7 778 171 8003<br><a href="https://www.instagram.com/angime.bar" target="_blank">@angime.bar</a><br><a href="https://t.me/angimebarast" target="_blank">Telegram</a>',

        // Footer
        footerTagline: 'Craft Bar in Astana',
        footerSlogan: 'Where conversations are born'
    }
};
