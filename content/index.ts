// Static content for the website
// Edit this file directly to update content

import type {
	Category,
	Dessert,
	DessertFeature,
	PortfolioItem,
	Review,
	FAQ,
	About,
} from "@/lib/content-types";

export type { Category, Dessert, DessertFeature, PortfolioItem, Review, FAQ, About };

const categories: Category[] = [
	{
		id: 1,
		title: "Зефир",
		slug: "zefir",
		description: "Воздушный натуральный зефир с разнообразными вкусами",
		coverImage: "/images/categories/zefir.webp",
	},
	{
		id: 2,
		title: "Птичье молоко",
		slug: "ptichye-moloko",
		description: "Нежнейшее суфле в шоколадной глазури",
		coverImage: "/images/categories/ptichye-moloko.webp",
	},
	{
		id: 3,
		title: "Муссовые торты",
		slug: "mussovye-torty",
		description: "Муссовые торты для любых случаев",
		coverImage: "/images/categories/torty.webp",
	},
	{
		id: 4,
		title: "Муссовые пирожные",
		slug: "mussovye-pirozhnye",
		description: "Пирожные с нежным и изысканным вкусом",
		coverImage: "/images/categories/pirozhnye.webp",
	},
	{
		id: 5,
		title: "Профитроли",
		slug: "profiteroli",
		description: "Воздушные профитроли с очень вкусными начинками",
		coverImage: "/images/categories/profiterole.webp",
	},
	{
		id: 6,
		title: "Трюфели",
		slug: "truffels",
		description: "Недные трюфели из премиального бельгийского шоколада",
		coverImage: "/images/categories/truffels.webp",
	},
	{
		id: 7,
		title: "Торты",
		slug: "torty",
		description: "Трендовые торты, которые не оставят вас равнодушными",
		coverImage: "/images/categories/buklya.webp",
	},
];

const desserts: Dessert[] = [
	{
		id: 1,
		title: "Классический зефир",
		slug: "klassicheskiy-zefir",
		categorySlug: "zefir",
		description: "<p>Нежный воздушный зефир с натуральным вкусом. Каждая половинка — это облако нежности, которое тает во рту.</p><p>Идеально подходит для чаепития или в качестве подарка близким.</p>",
		composition: "<ul><li>Яблочное пюре</li><li>Натуральный сахар</li><li>Альбумин</li><li>Агар-агар</li><li>Глюкозный сироп</li><li>Вода</li><li>По желанию клиента - корица, имбирь, ванилин, мята</li></ul>",
		features: [],
		images: ["/images/desserts/zefir-klassika-1.webp", "/images/portfolio/work-18.webp", "/images/portfolio/work-4.webp"],
	},
	{
		id: 2,
		title: "Ягодный зефир",
		slug: "yagodnyy-zefir",
		categorySlug: "zefir",
		description: "<p>Зефир с натуральным ягодным пюре — малина, клубника, чёрная смородина, вишня.</p><p>Яркий вкус и аромат свежих ягод в каждом кусочке.</p>",
		composition: "<ul><li>Ягодное пюре (малина/клубника/смородина/вишня)</li><li>Натуральный сахар</li><li>Альбумин</li><li>Агар-агар</li><li>Глюкозный сироп</li><li>Вода</li></ul>",
		features: [],
		images: ["/images/desserts/zefir-yagody-1.webp", "/images/portfolio/work-36.webp", "/images/portfolio/work-21.webp"],
	},
	{
		id: 3,
		title: "Фруктовый зефир",
		slug: "fruktovyy-zefir",
		categorySlug: "zefir",
		description: "<p>Зефир с натуральным фруктовым пюре — апельсин, мандарин, хурма.</p><p>Яркий вкус и аромат свежих фруктов в каждом кусочке.</p>",
		composition: "<ul><li>Фруктовое пюре (апельсин/мандарин/хурма)</li><li>Натуральный сахар</li><li>Альбумин</li><li>Агар-агар</li><li>Глюкозный сироп</li><li>Вода</li></ul>",
		features: [],
		images: ["/images/desserts/zefir-frukty-1.webp", "/images/portfolio/work-39.webp"],
	},
	{
		id: 4,
		title: "Птичье молоко",
		slug: "ptichye-moloko",
		categorySlug: "ptichye-moloko",
		description: "<p>Нежнейшее суфле — классика, которая никогда не выходит из моды.</p><p>Тает во рту, оставляя приятное послевкусие.</p>",
		composition: "<ul><li>Сливочное масло 82,5%</li><li>Сгущённое молоко</li><li>Альбумин</li><li>Агар-агар</li><li>Вода</li><li>Добавочно (в зависимости от вкуса):</li><li>Шоколад, алкализованный какао</li><li>Апельсиновый сок и цедра апельсина</li><li>Сухой растворимый кофе</li><li>Фисташковая, арахисовая, кокосовая, фундучная, миндальная пасты без сахара</li></ul>",
		features: [],
		images: ["/images/desserts/ptichye-moloko-1.webp", "/images/portfolio/work-50.webp", "/images/portfolio/work-30.webp", "/images/portfolio/work-2.webp", "/images/portfolio/work-67.webp"],
	},
	{
		id: 5,
		title: "Профитроли",
		slug: "profitroli",
		categorySlug: "profiteroli",
		description: "<p>Мягкий, нежный, воздушный десерт с уменьшенным содержанием сахара, который не оставит никого равнодушным.</p>",
		composition: "<ul><li>Тесто: сливочное масло 82,5%, молоко, вода, сахар, соль, яйца</li><li>Крем: сливки, молоко, желтки, сахар, кукурузный крахмал, ванильный сахар</li><li>Для шоколадного крема: тёмный шоколад</li></ul>",
		features: [],
		images: ["/images/desserts/profitroli-1.webp", "/images/portfolio/work-54.webp", "/images/portfolio/work-7.webp"],
	},
	{
		id: 6,
		title: "Трюфели",
		slug: "truffels",
		categorySlug: "truffels",
		description: "<p>Трюфели из премиального бельгийского шоколада. Попробовав однажды вы навсегда влюбитесь в этот вкус.</p>",
		composition: "<ul><li>Трюфели: сливки, глюкозный сироп, шоколад, какао-масло.</li><li>Дополнительно: кокосовая стружка, кокосовая паста, дроблёный миндаль, вафельная крошка, шоколад</li></ul>",
		features: [],
		images: ["/images/desserts/truffels-1.webp", "/images/portfolio/work-44.webp", "/images/portfolio/work-47.webp", "/images/portfolio/work-42.webp"],
	},
	{
		id: 7,
		title: "Муссовый торт",
		slug: "mussovyy-tort",
		categorySlug: "mussovye-torty",
		description: "<p>Нежный муссовый торт с изысканным вкусом. Идеально подходит для особых случаев и праздников.</p>",
		composition: "<ul><li>Состав: сливки 33%, желатин, творожный сыр,  кондитерский шоколад (тёмный, молочный, белый), сахар.</li><li>Дополнительно (в зависимости от вкуса): кофе, халва, попкорн, воздушный рис, варёная сгущёнка, варёная карамель, кусочки шоколада. </li><li>Покрытие: шоколадная глазурь (шоколад и растительное масло, какао-масло), велюр на сгущёнке.</li></ul>",
		features: [],
		images: ["/images/portfolio/work-60.webp", "/images/portfolio/work-58.webp", "/images/portfolio/work-59.webp", "/images/portfolio/work-69.webp" , "/images/portfolio/work-28.webp"]
	},
	{
		id: 8,
		title: "Муссовое пирожное",
		slug: "mussovoe-pirozhnoe",
		categorySlug: "mussovye-pirozhnye",
		description: "<p>Изысканное муссовое пирожное с нежной текстурой и богатым вкусом.</p>",
		composition: "<ul><li>Состав: сливки 33%, желатин, творожный сыр,  кондитерский шоколад (тёмный, молочный, белый), сахар.</li><li>Дополнительно (в зависимости от вкуса): кофе, сыр Маскарпоне, кусочки шоколада, ванильная, мятная пасты, кусочки печенья, карамель. </li><li>Покрытие: шоколадная глазурь (шоколад и растительное масло, какао-масло), велюр на сгущёнке.</li></ul>",
		features: [],
		images: ["/images/portfolio/work-55.webp", "/images/portfolio/work-19.webp", "/images/desserts/mussovoe-pirozhnoe-1.webp"],
	},
	{
		id: 9,
		title: "Торт",
		slug: "tort",
		categorySlug: "torty",
		description: "<p>Трендовые торты ручной работы - настоящее украшение любого праздника. Каждый торт уникален: сочетание нежных бисквитов с роскошными неповторимыми начинками.</p><p>Идеально подходят для дней рождений, юбилеев и семейных торжеств..</p>",
		composition: "<p>Использую только качественные ингредиенты: сливочное масло 82,5%, сливки 33%, сахар, сахарная пудра, глюкозный сироп, творожный сыр и маскарпоне лучших производителей, премиальный алкализованный какао, премиальный шоколад, сухой растворимый кофе, кокосовое молоко, фундучную и кокосовую пасты без сахара, ягодные и фруктовые пюре собственного приготовления, сезонные ягоды и фрукты, орехи. Покрытие: шоколадный ганаш, мастика. Не использую готовые украшения и шоколадную глазурь из магазина! Готова порадовать Вас своими изделиями! Напишите мне и мы всё обсудим.</p>",
		features: [],
		images: ["/images/portfolio/work-74.webp", "/images/portfolio/work-79.webp", "/images/portfolio/work-78.webp", "/images/portfolio/work-72.webp" ],
	},
];

const portfolio: PortfolioItem[] = [
	// Best photos first - showcase pieces
	{ id: 74, image: "/images/portfolio/work-74.webp" },
	{ id: 72, image: "/images/portfolio/work-72.webp" },
	{ id: 56, image: "/images/portfolio/work-56.webp" },
	{ id: 70, image: "/images/portfolio/work-70.webp" },
	{ id: 59, image: "/images/portfolio/work-59.webp" },
	{ id: 55, image: "/images/portfolio/work-55.webp" },
	{ id: 61, image: "/images/portfolio/work-61.webp" },
	{ id: 69, image: "/images/portfolio/work-69.webp" },
	{ id: 79, image: "/images/portfolio/work-79.webp" },
	{ id: 76, image: "/images/portfolio/work-76.webp" },
	{ id: 78, image: "/images/portfolio/work-78.webp" },
	{ id: 62, image: "/images/portfolio/work-62.webp" },
	{ id: 60, image: "/images/portfolio/work-60.webp" },
	{ id: 57, image: "/images/portfolio/work-57.webp" },
	{ id: 58, image: "/images/portfolio/work-58.webp" },
	{ id: 66, image: "/images/portfolio/work-66.webp" },
	{ id: 63, image: "/images/portfolio/work-63.webp" },
	{ id: 73, image: "/images/portfolio/work-73.webp" },
	{ id: 75, image: "/images/portfolio/work-75.webp" },
	{ id: 77, image: "/images/portfolio/work-77.webp" },
	{ id: 64, image: "/images/portfolio/work-64.webp" },
	{ id: 65, image: "/images/portfolio/work-65.webp" },
	{ id: 67, image: "/images/portfolio/work-67.webp" },
	{ id: 68, image: "/images/portfolio/work-68.webp" },
	{ id: 71, image: "/images/portfolio/work-71.webp" },
	// Older portfolio items
	{ id: 1, image: "/images/portfolio/work-1.webp" },
	{ id: 2, image: "/images/portfolio/work-2.webp" },
	{ id: 3, image: "/images/portfolio/work-3.webp" },
	{ id: 4, image: "/images/portfolio/work-4.webp" },
	{ id: 5, image: "/images/portfolio/work-5.webp" },
	{ id: 6, image: "/images/portfolio/work-6.webp" },
	{ id: 7, image: "/images/portfolio/work-7.webp" },
	{ id: 8, image: "/images/portfolio/work-8.webp" },
	{ id: 11, image: "/images/portfolio/work-11.webp" },
	{ id: 12, image: "/images/portfolio/work-12.webp" },
	{ id: 13, image: "/images/portfolio/work-13.webp" },
	{ id: 15, image: "/images/portfolio/work-15.webp" },
	{ id: 16, image: "/images/portfolio/work-16.webp" },
	{ id: 18, image: "/images/portfolio/work-18.webp" },
	{ id: 19, image: "/images/portfolio/work-19.webp" },
	{ id: 20, image: "/images/portfolio/work-20.webp" },
	{ id: 21, image: "/images/portfolio/work-21.webp" },
	{ id: 22, image: "/images/portfolio/work-22.webp" },
	{ id: 23, image: "/images/portfolio/work-23.webp" },
	{ id: 24, image: "/images/portfolio/work-24.webp" },
	{ id: 25, image: "/images/portfolio/work-25.webp" },
	{ id: 26, image: "/images/portfolio/work-26.webp" },
	{ id: 27, image: "/images/portfolio/work-27.webp" },
	{ id: 28, image: "/images/portfolio/work-28.webp" },
	{ id: 29, image: "/images/portfolio/work-29.webp" },
	{ id: 30, image: "/images/portfolio/work-30.webp" },
	{ id: 31, image: "/images/portfolio/work-31.webp" },
	{ id: 32, image: "/images/portfolio/work-32.webp" },
	{ id: 33, image: "/images/portfolio/work-33.webp" },
	{ id: 34, image: "/images/portfolio/work-34.webp" },
	{ id: 35, image: "/images/portfolio/work-35.webp" },
	{ id: 36, image: "/images/portfolio/work-36.webp" },
	{ id: 37, image: "/images/portfolio/work-37.webp" },
	{ id: 38, image: "/images/portfolio/work-38.webp" },
	{ id: 39, image: "/images/portfolio/work-39.webp" },
	{ id: 40, image: "/images/portfolio/work-40.webp" },
	{ id: 41, image: "/images/portfolio/work-41.webp" },
	{ id: 42, image: "/images/portfolio/work-42.webp" },
	{ id: 43, image: "/images/portfolio/work-43.webp" },
	{ id: 44, image: "/images/portfolio/work-44.webp" },
	{ id: 45, image: "/images/portfolio/work-45.webp" },
	{ id: 46, image: "/images/portfolio/work-46.webp" },
	{ id: 47, image: "/images/portfolio/work-47.webp" },
	{ id: 48, image: "/images/portfolio/work-48.webp" },
	{ id: 49, image: "/images/portfolio/work-49.webp" },
	{ id: 50, image: "/images/portfolio/work-50.webp" },
	{ id: 51, image: "/images/portfolio/work-51.webp" },
	{ id: 52, image: "/images/portfolio/work-52.webp" },
	{ id: 53, image: "/images/portfolio/work-53.webp" },
	{ id: 54, image: "/images/portfolio/work-54.webp" },
];

const reviews: Review[] = [
	{ id: 1, image: "/images/reviews/review-1.webp" },
	{ id: 2, image: "/images/reviews/review-2.webp" },
	{ id: 3, image: "/images/reviews/review-3.webp" },
	{ id: 4, image: "/images/reviews/review-4.webp" },
	{ id: 5, image: "/images/reviews/review-5.webp" },
	{ id: 6, image: "/images/reviews/review-6.webp" },
	{ id: 7, image: "/images/reviews/review-7.webp" },
	{ id: 8, image: "/images/reviews/review-8.webp" },
	{ id: 9, image: "/images/reviews/review-9.webp" },
	{ id: 10, image: "/images/reviews/review-10.webp" },
	{ id: 11, image: "/images/reviews/review-11.webp" },
	{ id: 12, image: "/images/reviews/review-12.webp" },
	{ id: 13, image: "/images/reviews/review-13.webp" },
];

const faqs: FAQ[] = [
	{
		id: 1,
		question: "За сколько дней нужно делать заказ?",
		answer: "Рекомендую делать заказ минимум за 3-5 дней, чтобы я могла спланировать производство и гарантировать свежесть вашего десерта.",
	},
	{
		id: 2,
		question: "Есть ли доставка?",
		answer: "Да! Возможен самовывоз или доставка Яндекс Доставкой по городу Костанай. Самовывоз бесплатный, стоимость Яндекс Доставки — по тарифам сервиса. Напишите мне для уточнения деталей.",
	},
	{
		id: 3,
		question: "Какой срок хранения у зефира?",
		answer: "Срок хранения зефира: в течение 7 дней в герметично закрытом контейнере при комнатной температуре подальше от батарей и солнечных лучей.",
	},
	{
		id: 4,
		question: "Какой срок хранения у птичьего молока?",
		answer: "Срок хранения птичьего молока: в течение 3 дней в герметично закрытом контейнере в холодильнике.",
	},
	{
		id: 5,
		question: "Какой срок хранения у муссовых десертов?",
		answer: "Срок муссовых тортов и пирожных: в течение 3 дней в холодильнике.",
	},
	{
		id: 6,
		question: "Из каких ингредиентов готовятся десерты?",
		answer: "Все десерты готовятся из натуральных ингредиентов без консервантов. Использую качественное сливочное масло 82,5%, натуральные ягоды и фрукты, бельгийский шоколад, альбумин вместо сырого белка для безопасности.",
	},
	{
		id: 7,
		question: "Можно ли заказать десерт для аллергика?",
		answer: "Да, напишите мне о пищевых ограничениях, и мы подберём подходящий вариант. Могу приготовить десерты без орехов или с учётом других особенностей.",
	},
	{
		id: 8,
		question: "Какой минимальный заказ?",
		answer: "Минимального заказа нет — можете заказать даже небольшую коробочку зефира для себя или в подарок.",
	},
	{
		id: 9,
		question: "Делаете ли подарочные наборы?",
		answer: "Да! Собираю красивые подарочные наборы из разных десертов. Идеально для праздников: 8 марта, Новый год, дни рождения, корпоративные подарки.",
	},
	{
		id: 10,
		question: "Как оплатить заказ?",
		answer: "Принимаю оплату наличными при получении или переводом на карту. Предоплата не требуется для постоянных клиентов.",
	},
	{
		id: 11,
		question: "Можно ли заказать торт с индивидуальным дизайном?",
		answer: "Да, муссовые торты могу оформить по вашим пожеланиям. Обсудим детали: размер, вкусы, декор и дату готовности.",
	},
	{
		id: 12,
		question: "Почему используете альбумин, а не свежий белок?",
		answer: "Альбумин — это пастеризованный яичный белок, который безопаснее сырого. Он прошёл термическую обработку, что исключает риск сальмонеллёза, при этом десерты получаются такими же воздушными и вкусными.",
	},
];

const about: About = {
	photo: "/images/me.webp",
	story: "<p>Привет! Меня зовут Оксана, и я — кондитер с душой.</p><p>Моя история началась 2 года назад, когда я закончила обучение по приготовлению конфет «Птичье молоко» и сразу же перешла на курс по зефиру. С тех пор я влюбилась в искусство создания десертов и продолжаю своё обучение в <i>лучших</i> кондитерских школах - <b>школа Екатерины Абрамовой</b> и <b>«Кейко»</b>.</p><p>Закончила курс по изготовлению муссовых дессертов - пирожных и бенто-тортов. Состою в закрытом кондитерском клубе Екатерины Абрамовой, где каждый месяц мы изучаем по несколько новых рецептов, новых технологий и различных декоров. На самом деле, просто не хватает в сутках времени, чтобы всё повторить и реализовать. Поэтому я выбираю для себя самые интересные, востребованные и продаваемые десерты. Всегда открыта к новым эспериментам, потому что очень люблю своё дело!</p>",
	philosophy: "<p>Моя философия проста: только натуральные ингредиенты, не экономлю на продуктах, не использую заменители сливок и сливочного масла, не использую покупную шоколадную глазурь. Если добавляю красители, то только качественные и дорогие, указывая это в составе продукта. Десерт должен быть не только вкусным, но и безопасным. Поэтому в составе птичьего молока и зефира я никогда не использую натуральный белок, а только альбумин.</p><p>Моё отношение к покупателю заключается во внимании к каждому моменту - от создания десерта до его упаковки! Эстетика в каждой детали.</p><p>Каждый заказ я готовлю небольшими партиями, чтобы гарантировать свежесть и качество каждого изделия.</p>",
	certificates: [
		"/images/certificates/cert.webp",
		"/images/certificates/cert-2.webp",
		"/images/certificates/cert-3.webp",
		"/images/certificates/cert-4.webp",
	],
};

export function getCategories(): Category[] {
	return categories;
}

export function getCategoryBySlug(slug: string): Category | undefined {
	return categories.find((c) => c.slug === slug);
}

export function getDesserts(): Dessert[] {
	return desserts;
}

export function getDessertsByCategory(categorySlug: string): Dessert[] {
	return desserts.filter((d) => d.categorySlug === categorySlug);
}

export function getDessertBySlug(slug: string): Dessert | undefined {
	return desserts.find((d) => d.slug === slug);
}

export function getPortfolio(limit?: number): PortfolioItem[] {
	return limit ? portfolio.slice(0, limit) : portfolio;
}

export function getReviews(limit?: number): Review[] {
	return limit ? reviews.slice(0, limit) : reviews;
}

export function getAbout(): About {
	return about;
}

export function getFaqs(): FAQ[] {
	return faqs;
}
