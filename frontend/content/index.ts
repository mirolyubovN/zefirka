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
    coverImage: "/images/categories/zefir.jpg",
  },
  {
    id: 2,
    title: "Птичье молоко",
    slug: "ptichye-moloko",
    description: "Нежнейшее суфле в шоколадной глазури",
    coverImage: "/images/categories/ptichye-moloko.jpg",
  },
  {
    id: 3,
    title: "Муссовые торты",
    slug: "mussovye-torty",
    description: "Муссовые торты для любых случаев",
    coverImage: "/images/categories/torty.jpg",
  },
  {
    id: 4,
    title: "Муссовые пирожные",
    slug: "mussovye-pirozhnye",
    description: "Пирожные с нежным и изысканным вкусом",
    coverImage: "/images/categories/pirozhnye.jpg",
  },
  {
    id: 5,
    title: "Профитроли",
    slug: "profitroli",
    description: "Воздушные профитроли с очень вкусными начинками",
    coverImage: "/images/categories/profitroli.jpg",
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
    images: ["/images/desserts/zefir-klassika-1.jpg"],
  },
  {
    id: 2,
    title: "Ягодный зефир",
    slug: "yagodnyy-zefir",
    categorySlug: "zefir",
    description: "<p>Зефир с натуральным ягодным пюре — малина, клубника, чёрная смородина, вишня.</p><p>Яркий вкус и аромат свежих ягод в каждом кусочке.</p>",
    composition: "<ul><li>Ягодное пюре (малина/клубника/смородина/вишня)</li><li>Натуральный сахар</li><li>Альбумин</li><li>Агар-агар</li><li>Глюкозный сироп</li><li>Вода</li></ul>",
    features: [],
    images: ["/images/desserts/zefir-yagody-1.jpg"],
  },
  {
    id: 3,
    title: "Фруктовый зефир",
    slug: "fruktovyy-zefir",
    categorySlug: "zefir",
    description: "<p>Зефир с натуральным фруктовым пюре — апельсин, мандарин, хурма.</p><p>Яркий вкус и аромат свежих фруктов в каждом кусочке.</p><p>Срок хранения зефира: в течение 7 дней в герметично закрытом контейнере при комнатной температуре подальше от батарей и солнечных лучей.</p>",
    composition: "<ul><li>Фруктовое пюре (апельсин/мандарин/хурма)</li><li>Натуральный сахар</li><li>Альбумин</li><li>Агар-агар</li><li>Глюкозный сироп</li><li>Вода</li></ul>",
    features: [],
    images: ["/images/desserts/zefir-frukty-1.jpg"],
  },
  {
    id: 4,
    title: "Птичье молоко",
    slug: "ptichye-moloko",
    categorySlug: "ptichye-moloko",
    description: "<p>Нежнейшее суфле — классика, которая никогда не выходит из моды.</p><p>Тает во рту, оставляя приятное послевкусие.</p><p>Срок хранения птичьего молока: в течение 3 дней в герметично закрытом контейнере в холодильнике.</p>",
    composition: "<ul><li>Сливочное масло</li><li>Сгущённое молоко</li><li>Альбумин</li><li>Агар-агар</li><li>Вода</li><li>Добавочно (в зависимости от вкуса):</li><li>Шоколад, алкализованный какао</li><li>Апельсиновый сок и цедра апельсина</li><li>Сухой растворимый кофе</li><li>Фисташковая, арахисовая, кокосовая, фундучная, миндальная пасты без сахара</li></ul>",
    features: [],
    images: ["/images/desserts/ptichye-moloko-1.jpg"],
  },
  {
    id: 5,
    title: "Профитроли",
    slug: "profitroli",
    categorySlug: "profitroli",
    description: "<p>Мягкий, нежный, воздушный десерт с уменьшенным содержанием сахара, который не оставит никого равнодушным.</p>",
    composition: "<ul><li>Тесто: сливочное масло, молоко, вода, сахар, соль, яйца</li><li>Крем: сливки, молоко, желтки, сахар, кукурузный крахмал, ванильный сахар</li><li>Для шоколадного крема: тёмный шоколад</li></ul>",
    features: [],
    images: ["/images/desserts/profitroli-1.jpg"],
  },
];

const portfolio: PortfolioItem[] = [
  { id: 1, image: "/images/portfolio/work-1.jpg", title: "Зефир ассорти" },
  { id: 2, image: "/images/portfolio/work-2.jpg", title: "Торт на день рождения" },
  { id: 3, image: "/images/portfolio/work-3.jpg", title: "Птичье молоко" },
  { id: 4, image: "/images/portfolio/work-4.jpg", title: "Подарочный набор" },
  { id: 5, image: "/images/portfolio/work-5.jpg" },
  { id: 6, image: "/images/portfolio/work-6.jpg" },
  { id: 7, image: "/images/portfolio/work-7.jpg" },
  { id: 8, image: "/images/portfolio/work-8.jpg" },
  { id: 9, image: "/images/portfolio/work-9.jpg" },
  { id: 10, image: "/images/portfolio/work-10.jpg" },
  { id: 11, image: "/images/portfolio/work-11.jpg" },
  { id: 12, image: "/images/portfolio/work-12.jpg" },
];

const reviews: Review[] = [
  {
    id: 1,
    name: "Мария",
    text: "Очень вкусный зефир! Заказывала на день рождения дочери — все гости были в восторге. Спасибо большое!",
  },
  {
    id: 2,
    name: "Анна",
    text: "Птичье молоко просто тает во рту. Теперь только у Оксаны заказываю десерты для семьи.",
  },
  {
    id: 3,
    name: "Елена",
    text: "Заказывала подарочный набор на 8 марта. Красивая упаковка, свежайшие десерты. Рекомендую!",
  },
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
];

const about: About = {
  photo: "/images/about-photo.jpg",
  story: "<p>Привет! Меня зовут Оксана, и я — кондитер с душой.</p><p>Моя история началась 2 года назад, когда я закончила обучение по приготовлению конфет «Птичье молоко» и сразу же перешла на курс по зефиру. С тех пор я влюбилась в искусство создания десертов и продолжаю своё обучение в лучших кондитерских школах (школа Екатерины Абрамовой и «Кейко»). Закончила курс по изготовлению муссовых дессертов - пирожных и бенто-тортов. Состою в закрытом кондитерском клубе Екатерины Абрамовой, где каждый месяц мы изучаем по несколько новых рецептов, новых технологий и различных декоров. На самом деле, просто не хватает в сутках времени, чтобы всё повторить и реализовать. Поэтому я выбираю для себя самые интересные, востребованные и продаваемые десерты. Всегда открыта к новым эспериментам, потому что очень люблю своё дело!</p>",
  philosophy: "<p>Моя философия проста: только натуральные ингредиенты, не экономлю на продуктах, не использую заменители сливок и сливочного масла, не использую покупную шоколадную глазурь, если добавляю красители, что только качественные и дорогие, указывая это в составе продукта. Десерт должен быть не только вкусным, но и безопасным. Поэтому в составе птичьего молока и зефира я никогда не использую натуральный белок, а только альбумин.</p><p>Моё отношение к покупателю заключается во внимании к каждому моменту - от создания десерта до его упаковки! Эстетика в каждой детали.</p><p>Каждый заказ я готовлю небольшими партиями, чтобы гарантировать свежесть и качество каждого изделия.</p>",
  certificates: [],
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
