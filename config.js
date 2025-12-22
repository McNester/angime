// Configuration file for Әңgіме Bar Website

const CONFIG = {
    // Logo configuration
    logo: {
        path: 'pictures/IMG_2146.PNG',
        alt: 'Әңgіме Bar Logo'
    },

    // SVG Icons (embedded from your uploaded files)
    svgIcons: {
        beerGlass: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><g fill="none"><path fill="#ffef5e" d="M8.513 20.13V23h6.974v-2.87"/><path stroke="#191919" stroke-linecap="round" stroke-linejoin="round" d="M8.513 20.13V23h6.974v-2.87"/><path fill="#fff9bf" d="m17.878 4.826l-2.391 15.305H8.512L6.122 4.826z"/><path fill="#ffef5e" d="M12 15.153a8.3 8.3 0 0 1-4.465-1.296l.98 6.277h6.975l.981-6.277A8.33 8.33 0 0 1 12 15.152"/><path stroke="#191919" stroke-linecap="round" stroke-linejoin="round" d="m17.878 4.826l-2.391 15.305H8.512L6.122 4.826z"/><path fill="#c2f3ff" stroke="#191919" stroke-linecap="round" stroke-linejoin="round" d="m18.386 1.548l-.508 3.278H6.121l-.518-3.278a.44.44 0 0 1 .12-.378A.48.48 0 0 1 6.1 1h11.787a.52.52 0 0 1 .389.17a.43.43 0 0 1 .11.378"/><path fill="#78eb7b" stroke="#191919" stroke-linecap="round" stroke-linejoin="round" d="M12 11.522a2.44 2.44 0 0 0 2.49-2.391a2.491 2.491 0 0 0-4.981 0a2.44 2.44 0 0 0 2.49 2.39"/><path stroke="#191919" stroke-linecap="round" stroke-linejoin="round" d="M5.523 23h12.953"/></g></svg>`,

        beerMug: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 36 36"><path fill="#FFAC33" d="M31 5.718h-6v4h4s2 0 2 2v12c0 2-2 2-2 2h-4v4h6c2.206 0 4-1.794 4-4v-16c0-2.206-1.794-4-4-4z"/><path fill="#FFCC4D" d="M27 6H3v26a4 4 0 0 0 4 4h16a4 4 0 0 0 4-4V6z"/><path fill="#F4900C" d="M8.5 32a1 1 0 0 1-1-1V15a1 1 0 0 1 2 0v16a1 1 0 0 1-1 1zm6.5 0a1 1 0 0 1-1-1V15a1 1 0 0 1 2 0v16a1 1 0 0 1-1 1zm6.5 0a1 1 0 0 1-1-1V15a1 1 0 1 1 2 0v16a1 1 0 0 1-1 1z"/><path fill="#FFAC33" d="M3 5v7.445c.59.344 1.268.555 2 .555a4 4 0 0 0 3.701-2.491c.35.302.801.491 1.299.491c.677 0 1.273-.338 1.635-.853A3.988 3.988 0 0 0 15 12a3.98 3.98 0 0 0 3.176-1.593A2.496 2.496 0 0 0 20.5 12c.949 0 1.765-.535 2.188-1.314l.147-.361a3.463 3.463 0 0 0 1.665.439c.981 0 1.865-.406 2.5-1.056V5H3z"/><path fill="#EEE" d="M24 0H4a3 3 0 0 0-3 3v4a4 4 0 0 0 7.701 1.509C9.051 8.811 9.502 9 10 9c.677 0 1.273-.338 1.635-.853A3.988 3.988 0 0 0 15 10a3.98 3.98 0 0 0 3.176-1.593A2.496 2.496 0 0 0 20.5 10c.949 0 1.765-.535 2.188-1.314c.398.195.839.314 1.312.314a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3z"/></svg>`,

        billiards: `<svg height="800px" width="800px" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path style="fill:#53BDB1;" d="M124.258,256c0-72.76,58.983-131.743,131.742-131.743c36.38,0,69.316,14.746,93.156,38.587l87.826-87.826C390.675,28.679,326.686,0,256,0C166.939,0,88.477,45.496,42.667,114.526C15.674,155.037,0,203.677,0,256c0,52.323,15.674,100.963,42.667,141.474c9.452,14.242,20.313,27.463,32.351,39.509l87.827-87.827C139.003,325.315,124.258,292.38,124.258,256z M71.306,131.274c-11.795-14.386-0.665-43.013,24.858-63.939c25.524-20.927,55.776-26.229,67.571-11.843c11.796,14.386,0.666,43.013-24.858,63.939C113.354,140.357,83.101,145.66,71.306,131.274z"/><path style="fill:#40B9B1;" d="M469.333,114.526c-9.452-14.242-20.313-27.463-32.351-39.509l-87.826,87.826c23.841,23.841,38.587,56.776,38.587,93.156c0,72.759-58.983,131.743-131.743,131.743c-36.379,0-69.315-14.746-93.156-38.587l-87.827,87.827C121.325,483.321,185.314,512,256,512c89.061,0,167.523-45.496,213.333-114.526C496.326,356.963,512,308.323,512,256C512,203.677,496.326,155.037,469.333,114.526z"/><path style="fill:#F2F2F2;" d="M308.92,203.209l-53.575,127.088h-35.193l31.172-69.621l-88.48,88.48c23.84,23.841,56.776,38.587,93.156,38.587c72.76,0,131.743-58.983,131.743-131.743c0-36.38-14.746-69.316-38.587-93.156L308.92,203.08V203.209z"/><path style="fill:#FEFFFE;" d="M124.258,256c0,36.38,14.746,69.315,38.587,93.156l88.48-88.48l22.403-50.037v-0.39h-59.439v-28.546h94.632v21.377l40.236-40.236c-23.84-23.841-56.776-38.587-93.156-38.587C183.241,124.257,124.258,183.24,124.258,256z"/><g><polygon style="fill:#FFFFFF;" points="311.852,186.379 217.22,186.379 217.22,214.925 276.659,214.925 276.659,215.315 254.256,265.352 311.852,207.756"/><polygon style="fill:#FFFFFF;" points="258.277,334.973 311.852,207.885 311.852,207.756 254.256,265.352 223.084,334.973"/></g><polygon style="fill:#504F4F;" points="308.92,181.703 214.288,181.703 214.288,210.249 273.727,210.249 273.727,210.639 251.324,260.676 308.92,203.08"/><polygon style="fill:#424242;" points="255.345,330.297 308.92,203.209 308.92,203.08 251.324,260.676 220.152,330.297"/><ellipse transform="matrix(0.7733 -0.634 0.634 0.7733 -32.5664 95.6806)" style="fill:#AAD7BE;" cx="117.521" cy="93.383" rx="59.762" ry="33.684"/><ellipse transform="matrix(0.7733 -0.634 0.634 0.7733 -32.5664 95.6806)" style="opacity:0.3;fill:#FEFFFE;" cx="117.521" cy="93.383" rx="59.762" ry="33.684"/></g></svg>`,

        music: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none"><g fill="none" stroke="#FFD700" stroke-linecap="round" stroke-width="2.5"><circle cx="6" cy="18" r="3" stroke-linejoin="round"/><path stroke-linejoin="round" d="M9 18V5"/><path d="M21 3L9 5m12 2L9 9"/><circle cx="18" cy="16" r="3" stroke-linejoin="round"/><path stroke-linejoin="round" d="M21 16V3"/></g></svg>`,

        beerBottle: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1024 1024"><path d="M327 202.1c-5 0-9.1 4.1-9.1 9.1v115.3c0 32.4-20.3 61.2-50.4 71.6-38.3 13.3-64 49.6-64 90.1v372.4c0 15.5 12.6 28.1 28.1 28.1h248.9c15.5 0 28.1-12.6 28.1-28.1V488.2c0-40.6-25.8-76.8-64.1-90.1-30.1-10.4-50.4-39.2-50.4-71.6V211.1c0-5-4.1-9.1-9.1-9.1h-58z" fill="#95C751"/><path d="M444.6 398c-30.1-10.4-50.4-39.2-50.4-71.6V202.1h-38.1v124.4c0 32.4 20.2 61.2 50.4 71.6 38.3 13.4 64.1 49.6 64.1 90.1v381.5c0 10.5-8.6 19.1-19.1 19.1h38.1c10.5 0 19.1-8.5 19.1-19.1V488.2c0-40.6-25.7-76.8-64.1-90.2z" fill="#6EB748"/><path d="M318 125.8h76.3v38.1H318z" fill="#FCD04E"/><path d="M356.1 125.8h38.1v38.1h-38.1z" fill="#F6BB33"/><path d="M480.1 888.7h-248c-15.8 0-28.6-12.8-28.6-28.6V687.4c0-15.2 12.4-27.6 27.6-27.6h250c15.2 0 27.6 12.4 27.6 27.6v172.7c0 15.8-12.8 28.6-28.6 28.6z" fill="#13AA5B"/><path d="M470.6 869.6c0 10.5-8.6 19.1-19.1 19.1h38.1c10.5 0 19.1-8.5 19.1-19.1V659.8h-38.1v209.8z" fill="#089648"/></svg>`,

        locationIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>`,
        clockIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>`,
        phoneIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>`
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
                        images: ['pictures/отработка меню/пиво аниме.JPG'],
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
                        images: ['pictures/отработка меню/пиво негейское, бланш, .JPG'],
                        details: { 'Тип': 'IPL', 'Объем': '400мл' }
                    },
                    {
                        nameKey: 'beerItem4Name',
                        price: '2000₸',
                        descKey: 'beerItem4Desc',
                        specs: ['400мл'],
                        images: ['pictures/отработка меню/пиво аниме.JPG'],
                        details: { 'Объем': '400мл' }
                    },
                    {
                        nameKey: 'beerItem5Name',
                        price: '2300₸',
                        descKey: 'beerItem5Desc',
                        specs: ['Бельгийское', '400мл'],
                        images: ['pictures/отработка меню/пиво негейское, бланш, .JPG'],
                        details: { 'Стиль': 'Бельгийское', 'Объем': '400мл' }
                    },
                    {
                        nameKey: 'beerItem6Name',
                        price: '1800₸',
                        descKey: 'beerItem6Desc',
                        specs: ['400мл'],
                        images: ['pictures/отработка меню/пиво кельш.JPG'],
                        details: { 'Объем': '400мл' }
                    },
                    {
                        nameKey: 'beerItem7Name',
                        price: '2000₸',
                        descKey: 'beerItem7Desc',
                        specs: ['Фруктовое', '400мл'],
                        images: ['pictures/отработка меню/пиво крик.JPG'],
                        details: { 'Вкус': 'Вишня', 'Объем': '400мл' }
                    },
                    {
                        nameKey: 'beerItem8Name',
                        price: '2000₸',
                        descKey: 'beerItem8Desc',
                        specs: ['Сидр', '400мл'],
                        images: ['pictures/отработка меню/пиво сидр.JPG'],
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
                        images: ['pictures/отработка меню/пиво хеллес.JPG'],
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
                        images: ['pictures/отработка меню/пиво квас.JPG'],
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
                        images: ['https://placehold.co/400x300/8B4513/ffffff?text=OAKHEART+RUM']
                    },
                    {
                        nameKey: 'barItem2Name',
                        price: '3000₸',
                        descKey: 'barItem2Desc',
                        specs: ['40мл'],
                        images: ['https://placehold.co/400x300/D4AF37/ffffff?text=JAMESON']
                    },
                    {
                        nameKey: 'barItem3Name',
                        price: '2500₸',
                        descKey: 'barItem3Desc',
                        specs: ['40мл'],
                        images: ['https://placehold.co/400x300/C19A6B/ffffff?text=BALLANTINES']
                    },
                    {
                        nameKey: 'barItem4Name',
                        price: '2000₸',
                        descKey: 'barItem4Desc',
                        specs: ['40мл'],
                        images: ['https://placehold.co/400x300/8B7355/ffffff?text=WILLIAM+LAWSON']
                    },
                    {
                        nameKey: 'barItem5Name',
                        price: '1500₸',
                        descKey: 'barItem5Desc',
                        specs: ['40мл'],
                        images: ['https://placehold.co/400x300/B8860B/ffffff?text=OLMECA+SILVER']
                    },
                    {
                        nameKey: 'barItem6Name',
                        price: '1700₸',
                        descKey: 'barItem6Desc',
                        specs: ['40мл'],
                        images: ['https://placehold.co/400x300/DAA520/ffffff?text=OLMECA+GOLD']
                    },
                    {
                        nameKey: 'barItem7Name',
                        price: '1800₸',
                        descKey: 'barItem7Desc',
                        specs: ['40мл'],
                        images: ['https://placehold.co/400x300/2F4F4F/ffffff?text=JAGERMEISTER']
                    },
                    {
                        nameKey: 'barItem8Name',
                        price: '8500₸',
                        descKey: 'barItem8Desc',
                        specs: ['330мл', '~15%'],
                        images: ['https://placehold.co/400x300/E8F5E9/333333?text=SOJU']
                    },
                    {
                        nameKey: 'barItem9Name',
                        price: '9000₸',
                        descKey: 'barItem9Desc',
                        specs: ['750мл'],
                        images: ['https://placehold.co/400x300/8B0000/ffffff?text=WINE']
                    },
                    {
                        nameKey: 'barItem10Name',
                        price: '10000₸',
                        descKey: 'barItem10Desc',
                        specs: ['750мл', 'Игристое'],
                        images: ['https://placehold.co/400x300/FFD700/333333?text=WINE+COCKTAIL']
                    }
                ]
            },
            {
                id: 'food',
                titleKey: 'menuFoodTab',
                items: [
                    {
                        nameKey: 'foodItem1Name',
                        price: '1800₸',
                        descKey: 'foodItem1Desc',
                        specs: [],
                        images: ['pictures/отработка меню/ассорти орешков.JPG']
                    },
                    {
                        nameKey: 'foodItem2Name',
                        price: '1800₸',
                        descKey: 'foodItem2Desc',
                        specs: [],
                        images: ['pictures/отработка меню/ ассорти Куртов.JPG']
                    },
                    {
                        nameKey: 'foodItem4Name',
                        price: '4000₸',
                        descKey: 'foodItem4Desc',
                        specs: [],
                        images: ['pictures/отработка меню/пивное ассорти.JPG']
                    },
                    {
                        nameKey: 'foodItemNachos',
                        price: '1800₸',
                        descKey: 'foodItemNachosDesc',
                        specs: [],
                        images: ['pictures/отработка меню/начос-nachos.JPG']
                    },
                    {
                        nameKey: 'foodItemChechel',
                        price: '1500₸',
                        descKey: 'foodItemChechelDesc',
                        specs: [],
                        images: ['pictures/отработка меню/чечил.JPG']
                    },
                    {
                        nameKey: 'foodItemOnionRings',
                        price: '1800₸',
                        descKey: 'foodItemOnionRingsDesc',
                        specs: [],
                        images: ['pictures/отработка меню/луковые кольца.JPG']
                    },
                    {
                        nameKey: 'foodItemFries',
                        price: '1200₸',
                        descKey: 'foodItemFriesDesc',
                        specs: [],
                        images: ['pictures/отработка меню/фрикенштейн.JPG']
                    },
                    {
                        nameKey: 'foodItemWedges',
                        price: '1200₸',
                        descKey: 'foodItemWedgesDesc',
                        specs: [],
                        images: ['pictures/отработка меню/сырная деревушка.JPG']
                    },
                    {
                        nameKey: 'foodItemCroutons',
                        price: '1500₸',
                        descKey: 'foodItemCroutonsDesc',
                        specs: [],
                        images: ['pictures/отработка меню/гренки.JPG']
                    },
                    {
                        nameKey: 'foodItemBaursaki',
                        price: '2000₸',
                        descKey: 'foodItemBaursakiDesc',
                        specs: [],
                        images: ['pictures/отработка меню/баурсаки с сыром.JPG']
                    },
                    {
                        nameKey: 'foodItemGarlicBaursaki',
                        price: '1800₸',
                        descKey: 'foodItemGarlicBaursakiDesc',
                        specs: [],
                        images: ['pictures/отработка меню/чесночные баурсаки.JPG']
                    },
                    {
                        nameKey: 'foodItem9Name',
                        price: '3000₸',
                        descKey: 'foodItem9Desc',
                        specs: [],
                        images: ['pictures/отработка меню/пицца маргарита.JPG']
                    },
                    {
                        nameKey: 'foodItem10Name',
                        price: '3200₸',
                        descKey: 'foodItem10Desc',
                        specs: [],
                        images: ['pictures/отработка меню/пицца пеперрони.JPG']
                    },
                    {
                        nameKey: 'foodItem11Name',
                        price: '3200₸',
                        descKey: 'foodItem11Desc',
                        specs: [],
                        images: ['pictures/отработка меню/пицца с курицей и грибами.JPG']
                    },
                    {
                        nameKey: 'foodItemBBQChicken',
                        price: '3200₸',
                        descKey: 'foodItemBBQChickenDesc',
                        specs: [],
                        images: ['pictures/отработка меню/пицца с цыпленком барбекью.JPG']
                    },
                    {
                        nameKey: 'foodItem12Name',
                        price: '3500₸',
                        descKey: 'foodItem12Desc',
                        specs: [],
                        images: ['menu/meet_pizza.JPG']
                    },
                    {
                        nameKey: 'foodItemShrimp',
                        price: '3200₸',
                        descKey: 'foodItemShrimpDesc',
                        specs: [],
                        images: ['pictures/отработка меню/тигровые креветки.JPG']
                    },
                    {
                        nameKey: 'foodItemYannem',
                        price: '3000₸',
                        descKey: 'foodItemYannemDesc',
                        specs: [],
                        images: ['pictures/отработка меню/яннем чикен.JPG']
                    },
                    {
                        nameKey: 'foodItem6Name',
                        price: '2800₸',
                        descKey: 'foodItem6Desc',
                        specs: [],
                        images: ['pictures/отработка меню/крылья бафаало.JPG']
                    },
                    {
                        nameKey: 'foodItemBBQWings',
                        price: '2800₸',
                        descKey: 'foodItemBBQWingsDesc',
                        specs: [],
                        images: ['pictures/отработка меню/крылья барбекю.JPG']
                    },
                    {
                        nameKey: 'foodItemCheburek',
                        price: '3000₸',
                        descKey: 'foodItemCheburekDesc',
                        specs: [],
                        images: ['pictures/отработка меню/чебуреки.JPG']
                    },
                    {
                        nameKey: 'foodItemDumplings',
                        price: '3000₸',
                        descKey: 'foodItemDumplingsDesc',
                        specs: [],
                        images: ['https://placehold.co/400x300/E8F5E9/333333?text=Жаренные пельмени']
                    },
                    {
                        nameKey: 'foodItemPannucio',
                        price: '3000₸',
                        // descKey: 'foodItemDumplingsDesc',
                        specs: [],
                        images: ['pictures/отработка меню/пануоццо с говядиной.JPG']
                    },
                    {
                        nameKey: 'foodItemHotDog',
                        price: '3000₸',
                        descKey: 'foodItemHotDogDesc',
                        specs: [],
                        images: ['pictures/отработка меню/хот дог.JPG']
                    },
                    {
                        nameKey: 'foodItemClubSandwich',
                        price: '3000₸',
                        descKey: 'foodItemClubSandwichDesc',
                        specs: [],
                        images: ['pictures/отработка меню/клаб сендвич.JPG']
                    },
                    {
                        nameKey: 'foodItemHamSandwich',
                        price: '3200₸',
                        descKey: 'foodItemHamSandwichDesc',
                        specs: [],
                        images: ['pictures/отработка меню/сэндвич с ветчиной.JPG']
                    },
                    {
                        nameKey: 'foodItemSausages',
                        price: '3200₸',
                        descKey: 'foodItemSausagesDesc',
                        specs: [],
                        images: ['pictures/отработка меню/сосиски.JPG']
                    },
                    {
                        nameKey: 'foodItemChefDish',
                        price: '5000₸',
                        descKey: 'foodItemChefDishDesc',
                        specs: [],
                        images: ['https://placehold.co/400x300/E8F5E9/333333?text=БЛЮДО ОТ ШЕФА']
                    }
                ]
            }
        ]
    },

    gallery: {
        categories: [
            {
                id: 'vibe',
                titleKey: 'categoryVibe',
                images: [
                    {
                        image: 'vibe/bar1.JPG',
                        alt: 'Интерьер бара',
                        titleKey: 'gallery1Title'
                    },
                    {
                        image: 'vibe/bar2.JPG',
                        alt: 'Интерьер бара',
                        titleKey: 'gallery1Title'
                    },
                    {
                        image: 'vibe/bar3.JPG',
                        alt: 'Интерьер бара',
                        titleKey: 'gallery1Title'
                    }
                ]
            },
            {
                id: 'pool',
                titleKey: 'categoryVibe',
                images: [
                    {
                        image: 'vibe/pool1.JPG',
                        alt: 'Интерьер бара',
                        titleKey: 'gallery2Title'
                    },
                    {
                        image: 'vibe/pool2.JPG',
                        alt: 'Интерьер бара',
                        titleKey: 'gallery2Title'
                    }
                ]
            },
            {
                id: 'guests',
                titleKey: 'categoryGuests',
                images: [
                    {
                        image: 'vibe/guests1.JPG',
                        alt: 'Гости',
                        titleKey: 'gallery9Title'
                    },
                    {
                        image: 'vibe/guests2.JPG',
                        alt: 'Гости',
                        titleKey: 'gallery9Title'
                    },
                    {
                        image: 'vibe/guests3.JPG',
                        alt: 'Гости',
                        titleKey: 'gallery9Title'
                    }
                ]
            },
            {
                id: 'events',
                titleKey: 'categoryEvents',
                images: [
                    {
                        image: 'vibe/music.JPG',
                        alt: 'Музыкальный вечер',
                        titleKey: 'gallery4Title'
                    }
                ]
            },
            {
                id: 'halloween',
                titleKey: 'categoryEvents',
                images: [
                    {
                        image: 'vibe/party.JPG',
                        alt: 'Музыкальный вечер',
                        titleKey: 'gallery6Title'
                    }
                ]
            },
        ]
    },

    team: [
        {
            nameKey: 'team1Name',
            roleKey: 'team1Role',
            descKey: 'team1Desc',
            photos: ['staff/team.JPG']
        },
        {
            nameKey: 'team2Name',
            roleKey: 'team2Role',
            descKey: 'team2Desc',
            photos: ['staff/chef.JPG']
        },
        {
            nameKey: 'team3Name',
            roleKey: 'team3Role',
            descKey: 'team3Desc',
            photos: ['staff/barmen.JPG']
        }
    ],

    contact: [
        {
            icon: 'locationIcon',
            titleKey: 'contactAddress',
            contentKey: 'contactAddressContent'
        },
        {
            icon: 'clockIcon',
            titleKey: 'contactHours',
            contentKey: 'contactHoursContent'
        },
        {
            icon: 'phoneIcon',
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
        foodItem4Name: 'Пивное ассорти',
        foodItem4Desc: 'Сырные шарики, чечел, колбаски, жареная колбаса, чесночный гренок (гренки).',
        foodItem5Name: 'Жаренный чечел',
        foodItem5Desc: 'Хрустящий жареный сыр',
        foodItem6Name: 'Крылья Баффало',
        foodItem6Desc: 'Сочные куриные крылышки с острым соусом',
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
        foodItem12Desc: 'Сыр моцарелла, пепперони, говядина, острый и барбекю соус.',

        // Additional food items from menu
        foodItemNachos: 'Начос',
        foodItemNachosDesc: 'Кукурузные чипсы с соусом',
        foodItemChechel: 'Чечел',
        foodItemChechelDesc: 'Классический сырный деликатес',
        foodItemOnionRings: 'Луковые кольца',
        foodItemOnionRingsDesc: 'Хрустящие луковые кольца',
        foodItemFries: 'Картофель фри',
        foodItemFriesDesc: 'Классический картофель фри',
        foodItemWedges: 'Картофельные дольки',
        foodItemWedgesDesc: 'Запеченные картофельные дольки',
        foodItemCroutons: 'Чесночные гренки',
        foodItemCroutonsDesc: 'Хрустящие гренки с чесноком',
        foodItemBaursaki: 'Баурсаки с моцареллой',
        foodItemBaursakiDesc: 'Традиционные баурсаки с сыром',
        foodItemGarlicBaursaki: 'Чесночные баурсаки',
        foodItemGarlicBaursakiDesc: 'Баурсаки с чесночным маслом',
        foodItemBBQChicken: 'Цыпленок Барбекю',
        foodItemBBQChickenDesc: 'Сыр моцарелла, неаполитанский соус, соус барбекю, жареный лук',
        foodItemShrimp: 'Тигровые креветки с соусом демиглас',
        foodItemShrimpDesc: 'Креветки с пикантным соусом',
        foodItemYannem: 'Яннем чикен',
        foodItemYannemDesc: 'Острые куриные крылышки',
        foodItemBBQWings: 'Крылья BBQ',
        foodItemBBQWingsDesc: 'Крылышки в соусе барбекю',
        foodItemCheburek: 'Жаренные чебуреки',
        foodItemCheburekDesc: 'Хрустящие чебуреки',
        foodItemDumplings: 'Жаренные пельмени',
        foodItemDumplingsDesc: 'Золотистые жареные пельмени',
        foodItemPannucio: 'Пануоццо с говядиной',
        foodItemPannucioDesc: 'Итальянский сэндвич с говядиной, томатами и моцареллой',
        foodItemHotDog: 'Хот-дог',
        foodItemHotDogDesc: 'Говяжья сосиска в пшеной булке',
        foodItemClubSandwich: 'Клаб сэндвич',
        foodItemClubSandwichDesc: 'Тостерный хлеб с курицей, огурцами и помидорами',
        foodItemHamSandwich: 'Сэндвич с ветчиной',
        foodItemHamSandwichDesc: 'Ветчина, помидоры, огурцы, лист салата и соус тар-тар',
        foodItemSausages: 'Ассорти колбасок',
        foodItemSausagesDesc: 'Говяжьи и куриные колбаски, мюнхенская капуста, картофельные дольки',
        foodItemChefDish: 'Блюдо от шефа',
        foodItemChefDishDesc: 'Ассорти мясных деликатесов',

        // Gallery section
        galleryTitle: 'Атмосфера Әңгіме',
        gallerySubtitle: 'Место, где рождаются истории',
        gallery1Title: 'Интерьер бара',
        gallery2Title: 'Бильярдный стол',
        gallery3Title: 'Наши гости',
        gallery4Title: 'Живая музыка',
        gallery5Title: 'Меню',
        gallery6Title: 'Хэллоуин',
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

        // Beer menu items - Kazakh
        beerItem1Name: 'ANIME',
        beerItem1Desc: 'Нағыз лагер. Ашық, жеңіл, сергітетін.',
        beerItem2Name: 'БИДАЙ',
        beerItem2Desc: 'Ашық сүзілмеген бидай сырасы.',
        beerItem3Name: 'Негейское',
        beerItem3Desc: 'Құрғақ қымыздандырылған IPL ашық лагері.',
        beerItem4Name: 'MEN KAZAKH',
        beerItem4Desc: 'Қазақ сыра қайнату авторлық технологиясы бойынша ашық лагер.',
        beerItem5Name: 'BLANCH',
        beerItem5Desc: 'Бельгия стиліндегі классикалық бидай сырасы.',
        beerItem6Name: 'КЁЛЬШ',
        beerItem6Desc: 'Премиум неміс солоды мен қымыздан қайнатылған ашық және алтын сыра.',
        beerItem7Name: 'КРИК',
        beerItem7Desc: 'Қышқыл шие жемістерімен ламбик ашыту арқылы дайындалған бельгия сыра стилі.',
        beerItem8Name: 'АПОРТ',
        beerItem8Desc: 'Алма сидрі. Алма шырынын ашыту арқылы алынатын әлсіз алкогольді сусын.',
        beerItem9Name: 'HAVI',
        beerItem9Desc: 'Классикалық бидай сүзілмеген сыра.',
        beerItem10Name: 'HELLES',
        beerItem10Desc: 'Бавария стиліндегі классикалық ашық сыра.',
        beerItem11Name: 'KOMIR',
        beerItem11Desc: 'Премиум солод пен қымыздан жасалған қою қараңғы ағылшын элі.',
        beerItem12Name: 'Квас',
        beerItem12Desc: 'Дәстүрлі рецепт бойынша дайындалған балалық шақтың дәмі.',

        // Bar menu items - Kazakh
        barItem1Name: 'OAKHEART 40мл',
        barItem1Desc: 'Ром',
        barItem2Name: 'JAMESON 40мл',
        barItem2Desc: 'Виски',
        barItem3Name: 'BALLANTINES 40мл',
        barItem3Desc: 'Виски',
        barItem4Name: 'WILLIAM LAWSON 40мл',
        barItem4Desc: 'Виски',
        barItem5Name: 'OLMECA SILVER 40мл',
        barItem5Desc: 'Текила',
        barItem6Name: 'OLMECA GOLD 40мл',
        barItem6Desc: 'Текила',
        barItem7Name: 'JAGERMEISTER 40мл',
        barItem7Desc: 'Ликер',
        barItem8Name: 'SOJU 330мл',
        barItem8Desc: '15% дейінгі корей күріш арағы.',
        barItem9Name: 'WINE 750мл',
        barItem9Desc: 'Грузин үй шарабы ақ немесе қызыл таңдау бойынша.',
        barItem10Name: 'WINE COCKTAIL 750мл',
        barItem10Desc: 'BELLINI және MIMOSA көпіршікті коктейльдері.',

        // Food items - Kazakh
        foodItem1Name: 'Жаңғақ ассортименті',
        foodItem1Desc: 'Бадам, жержаңғақ, фисташка.',
        foodItem2Name: 'Құрт ассортименті',
        foodItem2Desc: 'Ысталған, паприкамен классикалық.',
        foodItem4Name: 'Сыра ассортименті',
        foodItem4Desc: 'Ірімшік доптары, чечил, шұжықтар, қуырылған шұжық, сарымсақ гренкалары.',
        foodItem6Name: 'Баффало қанаттары',
        foodItem6Desc: 'Өткір соусты шырынды тауық қанаттары',
        foodItem9Name: 'Маргарита пиццасы',
        foodItem9Desc: 'Моцарелла ірімшігі, неаполь соусы.',
        foodItem10Name: 'Пепперони пиццасы',
        foodItem10Desc: 'Моцарелла ірімшігі, неаполь соусы, пепперони.',
        foodItem11Name: 'Тауық және саңырауқұлақпен пицца',
        foodItem11Desc: 'Моцарелла ірімшігі, неаполь соусы, тауық филесі, шампиньондар.',
        foodItem12Name: 'Етті пикантты',
        foodItem12Desc: 'Моцарелла ірімшігі, пепперони, сиыр еті, өткір және барбекю соусы.',

        // Additional food items - Kazakh
        foodItemNachos: 'Начос',
        foodItemNachosDesc: 'Ірімшік соусымен',
        foodItemChechel: 'Чечил',
        foodItemChechelDesc: 'Классикалық ірімшік деликатесі',
        foodItemOnionRings: 'Пияз сақиналары',
        foodItemOnionRingsDesc: 'Қытырлақ пияз сақиналары',
        foodItemFries: 'Картоп фри',
        foodItemFriesDesc: 'Классикалық картоп фри',
        foodItemWedges: 'Картоп дольдары',
        foodItemWedgesDesc: 'Піскен картоп дольдары',
        foodItemCroutons: 'Сарымсақты гренкалар',
        foodItemCroutonsDesc: 'Сарымсақпен қытырлақ гренкалар',
        foodItemBaursaki: 'Моцареллалы баурсақтар',
        foodItemBaursakiDesc: 'Ірімшікпен дәстүрлі баурсақтар',
        foodItemGarlicBaursaki: 'Сарымсақты баурсақтар',
        foodItemGarlicBaursakiDesc: 'Сарымсақ майымен баурсақтар',
        foodItemBBQChicken: 'Барбекю тауық',
        foodItemBBQChickenDesc: 'Моцарелла ірімшігі, неаполь соусы, барбекю соусы, қуырылған пияз',
        foodItemShrimp: 'Демиглас соусымен жолбарыс асшаяндары',
        foodItemShrimpDesc: 'Пикантты соусты асшаяндар',
        foodItemYannem: 'Яннем тауық',
        foodItemYannemDesc: 'Өткір тауық қанаттары',
        foodItemBBQWings: 'BBQ қанаттары',
        foodItemBBQWingsDesc: 'Барбекю соусындағы қанаттар',
        foodItemCheburek: 'Қуырылған шеберектер',
        foodItemCheburekDesc: 'Қытырлақ шеберектер',
        foodItemDumplings: 'Қуырылған пельмендер',
        foodItemDumplingsDesc: 'Алтын қуырылған пельмендер',
        foodItemPannucio: 'Сиыр етімен пануоццо',
        foodItemPannucioDesc: 'Сиыр еті, қызанақ және моцареллалы итальяндық сэндвич',
        foodItemHotDog: 'Хот-дог',
        foodItemHotDogDesc: 'Бидай нанындағы сиыр шұжығы',
        foodItemClubSandwich: 'Клаб сэндвич',
        foodItemClubSandwichDesc: 'Тауықпен, қияр және қызанақпен тостерлі нан',
        foodItemHamSandwich: 'Ветчиналы сэндвич',
        foodItemHamSandwichDesc: 'Ветчина, қызанақ, қияр, салат жапырағы және тар-тар соусы',
        foodItemSausages: 'Шұжық ассортименті',
        foodItemSausagesDesc: 'Сиыр және тауық шұжықтары, мюнхен қырыққабаты, картоп дольдары',
        foodItemChefDish: 'Шефтен тағам',
        foodItemChefDishDesc: 'Етті деликатестер ассортименті',

        // Gallery - Kazakh
        galleryTitle: 'Әңгіме атмосферасы',
        gallerySubtitle: 'Әңгімелердің туатын жері',
        gallery1Title: 'Бар интерьері',
        gallery2Title: 'Бильярд үстелі',
        gallery3Title: 'Біздің қонақтар',
        gallery4Title: 'Тірі музыка',
        gallery5Title: 'Мәзір',
        gallery6Title: 'Хэллоуин',
        gallery7Title: 'Крафттық сыра',
        gallery8Title: 'Бар тұғыры',
        gallery9Title: 'Бақытты қонақтар',
        categoryGuests: 'Қонақтар',
        categoryVibe: 'Атмосфера',
        categoryFood: 'Тамақ',
        categoryEvents: 'Оқиғалар',

        // Team - Kazakh
        teamTitle: 'Біздің команда',
        teamSubtitle: 'Атмосфера жасайтын адамдар',
        team1Name: 'Әңгіме командасы',
        team1Role: 'Бар командасы',
        team1Desc: 'Кешіңізді ұмытылмас ету үшін дайын кәсіби команда.',
        team2Name: 'Ас үй шебері',
        team2Role: 'Аспаз',
        team2Desc: 'Қазақ колоритімен бірегей тағамдар жасайды.',
        team3Name: 'Бармендер',
        team3Role: 'Бармендер',
        team3Desc: 'Крафттық коктейльдер мен сыра шеберлері.',

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

        // Beer menu items - English
        beerItem1Name: 'ANIME',
        beerItem1Desc: 'True lager. Light, easy, refreshing.',
        beerItem2Name: 'BIDAI',
        beerItem2Desc: 'Light unfiltered wheat beer.',
        beerItem3Name: 'Negeyskoye',
        beerItem3Desc: 'Light lager with dry hopping IPL (Indian Pale Lager).',
        beerItem4Name: 'MEN KAZAKH',
        beerItem4Desc: 'Light lager using authentic Kazakh brewing technology.',
        beerItem5Name: 'BLANCH',
        beerItem5Desc: 'Classic wheat beer in Belgian style.',
        beerItem6Name: 'KÖLSCH',
        beerItem6Desc: 'Light and golden beer brewed from premium German malt and hops.',
        beerItem7Name: 'KRIEK',
        beerItem7Desc: 'Belgian beer style made by fermenting lambic with sour cherry fruits.',
        beerItem8Name: 'APORT',
        beerItem8Desc: 'Apple cider. Low-alcohol drink obtained by fermenting apple juice.',
        beerItem9Name: 'HAVI',
        beerItem9Desc: 'Classic unfiltered wheat beer.',
        beerItem10Name: 'HELLES',
        beerItem10Desc: 'Classic light beer in Bavarian style.',
        beerItem11Name: 'KOMIR',
        beerItem11Desc: 'Dark rich English ale made from premium malt and hops.',
        beerItem12Name: 'Kvass',
        beerItem12Desc: 'Childhood taste made according to traditional recipe.',

        // Bar menu items - English
        barItem1Name: 'OAKHEART 40ml',
        barItem1Desc: 'Rum',
        barItem2Name: 'JAMESON 40ml',
        barItem2Desc: 'Whiskey',
        barItem3Name: 'BALLANTINES 40ml',
        barItem3Desc: 'Whiskey',
        barItem4Name: 'WILLIAM LAWSON 40ml',
        barItem4Desc: 'Whiskey',
        barItem5Name: 'OLMECA SILVER 40ml',
        barItem5Desc: 'Tequila',
        barItem6Name: 'OLMECA GOLD 40ml',
        barItem6Desc: 'Tequila',
        barItem7Name: 'JAGERMEISTER 40ml',
        barItem7Desc: 'Liqueur',
        barItem8Name: 'SOJU 330ml',
        barItem8Desc: 'Korean rice vodka up to 15% alc.',
        barItem9Name: 'WINE 750ml',
        barItem9Desc: 'Georgian homemade wine white or red by choice.',
        barItem10Name: 'WINE COCKTAIL 750ml',
        barItem10Desc: 'Sparkling cocktails BELLINI and MIMOSA.',

        // Food items - English
        foodItem1Name: 'Nuts Assortment',
        foodItem1Desc: 'Almonds, peanuts, pistachios.',
        foodItem2Name: 'Kurt Assortment',
        foodItem2Desc: 'Smoked, classic with paprika.',
        foodItem4Name: 'Beer Assortment',
        foodItem4Desc: 'Cheese balls, chechel, sausages, fried sausage, garlic croutons.',
        foodItem6Name: 'Buffalo Wings',
        foodItem6Desc: 'Juicy chicken wings with spicy sauce',
        foodItem9Name: 'Margarita Pizza',
        foodItem9Desc: 'Mozzarella cheese, Neapolitan sauce.',
        foodItem10Name: 'Pepperoni Pizza',
        foodItem10Desc: 'Mozzarella cheese, Neapolitan sauce, pepperoni.',
        foodItem11Name: 'Chicken and Mushroom Pizza',
        foodItem11Desc: 'Mozzarella cheese, Neapolitan sauce, chicken fillet, champignons.',
        foodItem12Name: 'Spicy Meat Pizza',
        foodItem12Desc: 'Mozzarella cheese, pepperoni, beef, spicy and BBQ sauce.',

        // Additional food items - English
        foodItemNachos: 'Nachos',
        foodItemNachosDesc: 'With cheese sauce',
        foodItemChechel: 'Chechel',
        foodItemChechelDesc: 'Classic cheese delicacy',
        foodItemOnionRings: 'Onion Rings',
        foodItemOnionRingsDesc: 'Crispy onion rings',
        foodItemFries: 'French Fries',
        foodItemFriesDesc: 'Classic french fries',
        foodItemWedges: 'Potato Wedges',
        foodItemWedgesDesc: 'Baked potato wedges',
        foodItemCroutons: 'Garlic Croutons',
        foodItemCroutonsDesc: 'Crispy garlic croutons',
        foodItemBaursaki: 'Baursaks with Mozzarella',
        foodItemBaursakiDesc: 'Traditional baursaks with cheese',
        foodItemGarlicBaursaki: 'Garlic Baursaks',
        foodItemGarlicBaursakiDesc: 'Baursaks with garlic butter',
        foodItemBBQChicken: 'BBQ Chicken Pizza',
        foodItemBBQChickenDesc: 'Mozzarella cheese, Neapolitan sauce, BBQ sauce, fried onions',
        foodItemShrimp: 'Tiger Shrimp with Demi-glace Sauce',
        foodItemShrimpDesc: 'Shrimp with spicy sauce',
        foodItemYannem: 'Yannem Chicken',
        foodItemYannemDesc: 'Spicy chicken wings',
        foodItemBBQWings: 'BBQ Wings',
        foodItemBBQWingsDesc: 'Wings in BBQ sauce',
        foodItemCheburek: 'Fried Chebureks',
        foodItemCheburekDesc: 'Crispy chebureks',
        foodItemDumplings: 'Fried Dumplings',
        foodItemDumplingsDesc: 'Golden fried dumplings',
        foodItemPannucio: 'Panuozzo with Beef',
        foodItemPannucioDesc: 'Italian sandwich with beef, tomatoes and mozzarella',
        foodItemHotDog: 'Hot Dog',
        foodItemHotDogDesc: 'Beef sausage in wheat bun',
        foodItemClubSandwich: 'Club Sandwich',
        foodItemClubSandwichDesc: 'Toasted bread with chicken, cucumbers and tomatoes',
        foodItemHamSandwich: 'Ham Sandwich',
        foodItemHamSandwichDesc: 'Ham, tomatoes, cucumbers, lettuce and tartar sauce',
        foodItemSausages: 'Sausage Assortment',
        foodItemSausagesDesc: 'Beef and chicken sausages, Munich cabbage, potato wedges',
        foodItemChefDish: 'Chef\'s Platter',
        foodItemChefDishDesc: 'Assortment of meat delicacies',

        // Gallery - English
        galleryTitle: 'Әңgіме Atmosphere',
        gallerySubtitle: 'Where stories are born',
        gallery1Title: 'Bar Interior',
        gallery2Title: 'Billiard Table',
        gallery3Title: 'Our Guests',
        gallery4Title: 'Live Music',
        gallery5Title: 'Menu',
        gallery6Title: 'Halloween',
        gallery7Title: 'Craft Beer',
        gallery8Title: 'Bar Counter',
        gallery9Title: 'Happy Guests',
        categoryGuests: 'Guests',
        categoryVibe: 'Atmosphere',
        categoryFood: 'Food',
        categoryEvents: 'Events',

        // Team - English
        teamTitle: 'Our Team',
        teamSubtitle: 'People who create the atmosphere',
        team1Name: 'Әңgіме Team',
        team1Role: 'Bar Team',
        team1Desc: 'Professional team ready to make your evening unforgettable.',
        team2Name: 'Chef',
        team2Role: 'Cook',
        team2Desc: 'Creates unique dishes with Kazakh flavor.',
        team3Name: 'Bartenders',
        team3Role: 'Bartenders',
        team3Desc: 'Masters of craft cocktails and beer.',

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
