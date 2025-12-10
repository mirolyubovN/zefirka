import Script from 'next/script';
import { SITE_NAME, SITE_URL, CONTACT_LINKS, SITE_DESCRIPTION } from '@/lib/constants';

// Person schema for home pastry chef - Enhanced for E-E-A-T
export function PersonSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE_URL}/#person`,
    name: 'Оксана',
    jobTitle: 'Домашний кондитер',
    description: 'Кондитер с 2-летним опытом. Обучение в школе Екатерины Абрамовой и «Кейко». Специализация: зефир, муссовые десерты, птичье молоко.',
    url: `${SITE_URL}/about`,
    image: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/images/me.webp`,
      width: 800,
      height: 1000,
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Костанай',
      addressRegion: 'Костанайская область',
      addressCountry: 'KZ',
    },
    sameAs: [
      CONTACT_LINKS.instagram,
      CONTACT_LINKS.telegram,
    ],
    knowsAbout: [
      'Зефир ручной работы',
      'Птичье молоко',
      'Муссовые торты',
      'Муссовые пирожные',
      'Профитроли',
      'Трюфели',
      'Натуральные десерты',
    ],
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'certificate',
        name: 'Сертификат школы Екатерины Абрамовой',
        educationalLevel: 'professional',
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'certificate',
        name: 'Сертификат школы «Кейко»',
        educationalLevel: 'professional',
      },
    ],
    memberOf: {
      '@type': 'Organization',
      name: 'Закрытый кондитерский клуб Екатерины Абрамовой',
    },
  };

  return (
    <Script
      id="person-schema"
      type="application/ld+json"
      strategy="beforeInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Local business schema - Enhanced
export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FoodEstablishment',
    '@id': `${SITE_URL}/#business`,
    name: SITE_NAME,
    alternateName: 'Десерты от Оксаны',
    description: 'Домашняя кондитерская: натуральные десерты ручной работы в Костанае. Зефир, торты, птичье молоко, профитроли, трюфели.',
    url: SITE_URL,
    telephone: '+77772714910',
    image: [
      `${SITE_URL}/images/portfolio/work-1.webp`,
      `${SITE_URL}/images/portfolio/work-2.webp`,
      `${SITE_URL}/images/portfolio/work-3.webp`,
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Костанай',
      addressRegion: 'Костанайская область',
      postalCode: '110000',
      addressCountry: 'KZ',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 53.2144,
      longitude: 63.6246,
    },
    areaServed: {
      '@type': 'City',
      name: 'Костанай',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '09:00',
      closes: '21:00',
    },
    servesCuisine: 'Кондитерские изделия',
    priceRange: '$$',
    paymentAccepted: 'Cash, Card',
    currenciesAccepted: 'KZT',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Каталог десертов',
      itemListElement: [
        { '@type': 'OfferCatalog', name: 'Зефир' },
        { '@type': 'OfferCatalog', name: 'Муссовые торты' },
        { '@type': 'OfferCatalog', name: 'Птичье молоко' },
        { '@type': 'OfferCatalog', name: 'Профитроли' },
        { '@type': 'OfferCatalog', name: 'Трюфели' },
      ],
    },
    potentialAction: {
      '@type': 'CommunicateAction',
      name: 'Связаться для заказа',
      target: [
        {
          '@type': 'EntryPoint',
          urlTemplate: CONTACT_LINKS.whatsapp,
          actionPlatform: 'https://schema.org/DesktopWebPlatform',
          inLanguage: 'ru',
        },
        {
          '@type': 'EntryPoint',
          urlTemplate: CONTACT_LINKS.telegram,
          actionPlatform: 'https://schema.org/DesktopWebPlatform',
          inLanguage: 'ru',
        },
      ],
    },
  };

  return (
    <Script
      id="local-business-schema"
      type="application/ld+json"
      strategy="beforeInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Website schema - Enhanced
export function WebsiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: SITE_NAME,
    alternateName: 'Zefirka Kostanay',
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    publisher: { '@id': `${SITE_URL}/#business` },
    inLanguage: 'ru-RU',
    copyrightYear: new Date().getFullYear(),
    copyrightHolder: { '@id': `${SITE_URL}/#person` },
  };

  return (
    <Script
      id="website-schema"
      type="application/ld+json"
      strategy="beforeInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Breadcrumb schema
interface BreadcrumbItem {
  name: string;
  url: string;
}

export function BreadcrumbSchema({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url === '/' ? SITE_URL : `${SITE_URL}${item.url}`,
    })),
  };

  return (
    <Script
      id="breadcrumb-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// FAQ Schema
interface FAQItem {
  question: string;
  answer: string;
}

export function FAQSchema({ faqs }: { faqs: FAQItem[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <Script
      id="faq-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Product schema for dessert pages - Enhanced
interface ProductSchemaProps {
  name: string;
  description: string;
  image: string;
  category: string;
  images?: string[];
  composition?: string;
}

export function ProductSchema({ name, description, image, category, images, composition }: ProductSchemaProps) {
  const allImages = images || [image];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    image: allImages.map((img) => (img.startsWith('http') ? img : `${SITE_URL}${img}`)),
    category,
    brand: { '@type': 'Brand', name: SITE_NAME },
    manufacturer: { '@id': `${SITE_URL}/#business` },
    ...(composition && {
      additionalProperty: {
        '@type': 'PropertyValue',
        name: 'Состав',
        value: composition.replace(/<[^>]*>/g, ''),
      },
    }),
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'KZT',
      },
      seller: { '@id': `${SITE_URL}/#business` },
      availableDeliveryMethod: {
        '@type': 'DeliveryMethod',
        name: 'Самовывоз или Яндекс Доставка',
      },
      potentialAction: {
        '@type': 'CommunicateAction',
        target: CONTACT_LINKS.whatsapp,
        name: 'Узнать цену и заказать',
        description: 'Свяжитесь для уточнения цены и оформления заказа',
      },
    },
  };

  return (
    <Script
      id="product-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Aggregate review schema
interface ReviewSchemaProps {
  reviews: Array<{ name: string; text: string }>;
}

export function AggregateReviewSchema({ reviews }: ReviewSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#business`,
    name: SITE_NAME,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      ratingCount: reviews.length.toString(),
      bestRating: '5',
      worstRating: '1',
    },
    review: reviews.slice(0, 5).map((review) => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: review.name },
      reviewBody: review.text,
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
    })),
  };

  return (
    <Script
      id="aggregate-review-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Image gallery schema for portfolio - Enhanced
interface ImageGallerySchemaProps {
  images: Array<{ image: string; title?: string }>;
  title?: string;
  description?: string;
}

export function ImageGallerySchema({
  images,
  title = 'Портфолио работ',
  description = 'Галерея десертов ручной работы от домашнего кондитера'
}: ImageGallerySchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    name: title,
    description,
    numberOfItems: images.length,
    creator: { '@id': `${SITE_URL}/#person` },
    image: images.slice(0, 20).map((img, index) => ({
      '@type': 'ImageObject',
      '@id': `${SITE_URL}/portfolio#image-${index + 1}`,
      url: img.image.startsWith('http') ? img.image : `${SITE_URL}${img.image}`,
      name: img.title || `Работа ${index + 1}`,
      description: img.title || 'Десерт ручной работы от кондитера Оксаны',
      author: { '@id': `${SITE_URL}/#person` },
      copyrightHolder: { '@id': `${SITE_URL}/#person` },
    })),
  };

  return (
    <Script
      id="image-gallery-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ItemList schema for category pages
interface ItemListSchemaProps {
  name: string;
  description: string;
  items: Array<{ title: string; slug: string; image: string }>;
  categorySlug: string;
}

export function ItemListSchema({ name, description, items, categorySlug }: ItemListSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    description,
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Product',
        name: item.title,
        url: `${SITE_URL}/catalog/${categorySlug}/${item.slug}`,
        image: item.image.startsWith('http') ? item.image : `${SITE_URL}${item.image}`,
      },
    })),
  };

  return (
    <Script
      id="itemlist-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
