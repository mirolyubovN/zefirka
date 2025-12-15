// Contact links - keep in sync with content.md
export const CONTACT_LINKS = {
	whatsapp: 'https://wa.me/77772714910',
	telegram: 'https://t.me/zefirka_kst',
	instagram: 'https://instagram.com/oksana_desserts_kst',
};

// Navigation items
export const NAV_ITEMS = [
	{ href: '/', label: 'Главная' },
	{ href: '/catalog', label: 'Каталог' },
	{ href: '/podarochnye-nabory', label: 'Подарки' },
	{ href: '/portfolio', label: 'Портфолио' },
	{ href: '/about', label: 'Обо мне' },
	{ href: '/reviews', label: 'Отзывы' },
	{ href: '/faq', label: 'FAQ' },
	{ href: '/contacts', label: 'Контакты' },
];

// Site metadata
export const SITE_NAME = 'Zefirka';
export const SITE_DESCRIPTION = 'Премиальные натуральные десерты ручной работы: зефир, торты, птичье молоко, трюфели, профитроли и подарочные наборы в Костанае';
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://zefirka.kz';

// Why choose us items
export const WHY_CHOOSE_US = [
	{
		title: 'Натуральные ингредиенты',
		description: 'Использую только качественные натуральные продукты без консервантов и красителей',
		icon: 'leaf',
	},
	{
		title: 'Ручная работа',
		description: 'Каждый десерт создаётся вручную с любовью и вниманием к деталям',
		icon: 'heart',
	},
	{
		title: 'Малые партии',
		description: 'Готовлю небольшими партиями, чтобы гарантировать свежесть каждого десерта',
		icon: 'sparkles',
	},
	{
		title: 'Индивидуальный подход',
		description: 'Учитываю ваши пожелания и создаю уникальные десерты для особых случаев',
		icon: 'gift',
	},
];
