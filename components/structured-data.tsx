import Script from 'next/script';
import { SITE_NAME, SITE_URL, CONTACT_LINKS } from '@/lib/constants';

// Person schema for home pastry chef
export function PersonSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Оксана',
    jobTitle: 'Домашний кондитер',
    description: 'Премиальные натуральные десерты ручной работы: зефир, торты, птичье молоко, профитролли, трюфели',
    url: SITE_URL,
    image: `${SITE_URL}/images/about-photo.jpg`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Костанай',
      addressCountry: 'KZ',
    },
    sameAs: [
      CONTACT_LINKS.instagram,
      CONTACT_LINKS.telegram,
    ],
    knowsAbout: [
      'Зефир ручной работы',
      'Птичье молоко',
      'Торты на заказ',
      'Натуральные десерты',
    ],
  };

  return (
    <Script
      id="person-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Local business schema
export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FoodEstablishment',
    '@id': `${SITE_URL}/#business`,
    name: SITE_NAME,
    description: 'Премиальные натуральные десерты ручной работы в Костанае',
    url: SITE_URL,
    telephone: '+77772714910',
    image: `${SITE_URL}/images/portfolio/work-1.jpg`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Костанай',
      addressCountry: 'KZ',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 53.2144,
      longitude: 63.6246,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '09:00',
      closes: '21:00',
    },
    servesCuisine: 'Кондитерские изделия',
    priceRange: '$$',
    potentialAction: {
      '@type': 'CommunicateAction',
      name: 'Связаться для заказа',
      target: CONTACT_LINKS.whatsapp,
    },
  };

  return (
    <Script
      id="local-business-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Website schema
export function WebsiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    description: 'Премиальные натуральные десерты ручной работы в Костанае',
    publisher: { '@id': `${SITE_URL}/#business` },
    inLanguage: 'ru-RU',
  };

  return (
    <Script
      id="website-schema"
      type="application/ld+json"
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
      item: `${SITE_URL}${item.url}`,
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

// Product schema for dessert pages
interface ProductSchemaProps {
  name: string;
  description: string;
  image: string;
  category: string;
}

export function ProductSchema({ name, description, image, category }: ProductSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    image: image.startsWith('http') ? image : `${SITE_URL}${image}`,
    category,
    brand: { '@type': 'Brand', name: SITE_NAME },
    manufacturer: { '@id': `${SITE_URL}/#business` },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      seller: { '@id': `${SITE_URL}/#business` },
      potentialAction: {
        '@type': 'CommunicateAction',
        target: CONTACT_LINKS.whatsapp,
        name: 'Узнать цену и заказать',
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

// Image gallery schema for portfolio
interface ImageGallerySchemaProps {
  images: Array<{ image: string; title?: string }>;
}

export function ImageGallerySchema({ images }: ImageGallerySchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    name: 'Портфолио работ',
    description: 'Галерея десертов ручной работы от домашнего кондитера',
    numberOfItems: images.length,
    image: images.map((img, index) => ({
      '@type': 'ImageObject',
      '@id': `${SITE_URL}/portfolio#image-${index + 1}`,
      url: img.image.startsWith('http') ? img.image : `${SITE_URL}${img.image}`,
      name: img.title || `Работа ${index + 1}`,
      description: img.title || 'Десерт ручной работы',
      author: { '@id': `${SITE_URL}/#business` },
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
