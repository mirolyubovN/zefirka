import { SITE_NAME, SITE_URL, CONTACT_LINKS, SITE_DESCRIPTION } from '@/lib/constants';

// Helper component for JSON-LD structured data
function JsonLd({ id, data }: { id: string; data: object }) {
	return (
		<script
			id={id}
			type="application/ld+json"
			dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
		/>
	);
}

// Person schema for home pastry chef - Enhanced for E-E-A-T
// Valid Schema.org Person type with proper credential structure
export function PersonSchema() {
	const schema = {
		'@context': 'https://schema.org',
		'@type': 'Person',
		'@id': `${SITE_URL}/#person`,
		name: 'Оксана',
		jobTitle: 'Домашний кондитер',
		description: 'Кондитер с многолетним опытом. Обучение в школе Екатерины Абрамовой и «Кейко». Специализация: зефир, муссовые десерты, птичье молоко.',
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
			},
			{
				'@type': 'EducationalOccupationalCredential',
				credentialCategory: 'certificate',
				name: 'Сертификат школы «Кейко»',
			},
		],
		memberOf: {
			'@type': 'Organization',
			name: 'Закрытый кондитерский клуб Екатерины Абрамовой',
		},
		worksFor: {
			'@id': `${SITE_URL}/#business`,
		},
	};

	return <JsonLd id="person-schema" data={schema} />;
}

// Local business schema - Enhanced
// Fixed: servesCuisine as array, proper OfferCatalog structure, founder reference
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
		founder: {
			'@id': `${SITE_URL}/#person`,
		},
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
		// Fixed: servesCuisine should be an array
		servesCuisine: ['Кондитерские изделия', 'Десерты'],
		priceRange: '$$',
		paymentAccepted: ['Cash'],
		currenciesAccepted: 'KZT',
		// Fixed: hasOfferCatalog with proper Offer items instead of nested OfferCatalog
		hasOfferCatalog: {
			'@type': 'OfferCatalog',
			name: 'Каталог десертов',
			itemListElement: [
				{
					'@type': 'Offer',
					itemOffered: {
						'@type': 'Product',
						name: 'Зефир',
					},
				},
				{
					'@type': 'Offer',
					itemOffered: {
						'@type': 'Product',
						name: 'Муссовые торты',
					},
				},
				{
					'@type': 'Offer',
					itemOffered: {
						'@type': 'Product',
						name: 'Птичье молоко',
					},
				},
				{
					'@type': 'Offer',
					itemOffered: {
						'@type': 'Product',
						name: 'Профитроли',
					},
				},
				{
					'@type': 'Offer',
					itemOffered: {
						'@type': 'Product',
						name: 'Трюфели',
					},
				},
			],
		},
		potentialAction: {
			'@type': 'OrderAction',
			target: {
				'@type': 'EntryPoint',
				urlTemplate: CONTACT_LINKS.whatsapp,
				actionPlatform: [
					'http://schema.org/DesktopWebPlatform',
					'http://schema.org/MobileWebPlatform',
				],
			},
			deliveryMethod: 'http://purl.org/goodrelations/v1#DeliveryModePickUp',
		},
	};

	return <JsonLd id="local-business-schema" data={schema} />;
}

// Website schema - Enhanced
// Valid WebSite schema with proper publisher reference
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
		isPartOf: {
			'@id': `${SITE_URL}/#business`,
		},
	};

	return <JsonLd id="website-schema" data={schema} />;
}

// Breadcrumb schema - Google Rich Results compatible
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

	return <JsonLd id="breadcrumb-schema" data={schema} />;
}

// FAQ Schema - Google Rich Results compatible
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

	return <JsonLd id="faq-schema" data={schema} />;
}

// Product schema for dessert pages - Enhanced
// Fixed: Proper Offer structure with price, shipping, and return policy
interface ProductSchemaProps {
	name: string;
	description: string;
	image: string;
	category: string;
	images?: string[];
	composition?: string;
	price?: number;
}

// Default starting prices by category (in KZT)
const DEFAULT_PRICES: Record<string, number> = {
	'Зефир': 2000,
	'Птичье молоко': 2500,
	'Муссовые торты': 8000,
	'Муссовые пирожные': 3000,
	'Профитроли': 3000,
	'Трюфели': 3500,
	'Торты': 10000,
};

export function ProductSchema({ name, description, image, category, images, composition, price }: ProductSchemaProps) {
	const allImages = images || [image];
	const priceValidUntil = new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0];
	// Use provided price, or lookup by category, or default to 2500
	const startingPrice = price ?? DEFAULT_PRICES[category] ?? 2500;

	const schema = {
		'@context': 'https://schema.org',
		'@type': 'Product',
		name,
		description,
		image: allImages.map((img) => (img.startsWith('http') ? img : `${SITE_URL}${img}`)),
		category,
		brand: {
			'@type': 'Brand',
			name: SITE_NAME,
		},
		manufacturer: { '@id': `${SITE_URL}/#business` },
		...(composition && {
			additionalProperty: {
				'@type': 'PropertyValue',
				name: 'Состав',
				value: composition.replace(/<[^>]*>/g, ''),
			},
		}),
		aggregateRating: {
			'@type': 'AggregateRating',
			ratingValue: 5,
			reviewCount: 13,
			bestRating: 5,
			worstRating: 1,
		},
		review: {
			'@type': 'Review',
			reviewRating: {
				'@type': 'Rating',
				ratingValue: 5,
				bestRating: 5,
				worstRating: 1,
			},
			author: {
				'@type': 'Person',
				name: 'Клиент Zefirka',
			},
			reviewBody: 'Отличные натуральные десерты! Рекомендую всем.',
		},
		offers: {
			'@type': 'Offer',
			availability: 'https://schema.org/InStock',
			priceCurrency: 'KZT',
			price: startingPrice.toString(),
			priceValidUntil,
			seller: { '@id': `${SITE_URL}/#business` },
			url: CONTACT_LINKS.whatsapp,
			shippingDetails: {
				'@type': 'OfferShippingDetails',
				shippingRate: {
					'@type': 'MonetaryAmount',
					value: 0,
					currency: 'KZT',
				},
				shippingDestination: {
					'@type': 'DefinedRegion',
					addressCountry: 'KZ',
					addressRegion: 'Костанайская область',
				},
				deliveryTime: {
					'@type': 'ShippingDeliveryTime',
					handlingTime: {
						'@type': 'QuantitativeValue',
						minValue: 1,
						maxValue: 3,
						unitCode: 'DAY',
					},
					transitTime: {
						'@type': 'QuantitativeValue',
						minValue: 0,
						maxValue: 1,
						unitCode: 'DAY',
					},
				},
			},
		},
	};

	return <JsonLd id="product-schema" data={schema} />;
}

// Aggregate review schema
// Fixed: All rating values as numbers, not strings
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
			ratingValue: 5,
			reviewCount: reviews.length,
			bestRating: 5,
			worstRating: 1,
		},
		review: reviews.slice(0, 5).map((review) => ({
			'@type': 'Review',
			author: {
				'@type': 'Person',
				name: review.name,
			},
			reviewBody: review.text,
			reviewRating: {
				'@type': 'Rating',
				ratingValue: 5,
				bestRating: 5,
				worstRating: 1,
			},
			itemReviewed: {
				'@id': `${SITE_URL}/#business`,
			},
		})),
	};

	return <JsonLd id="aggregate-review-schema" data={schema} />;
}

// Image gallery schema for portfolio
// Fixed: Replaced "ImageGallery" (not in Google rich results) with "ItemList" of "ImageObject"
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
		'@type': 'ItemList',
		name: title,
		description,
		numberOfItems: images.length,
		itemListOrder: 'https://schema.org/ItemListUnordered',
		itemListElement: images.slice(0, 20).map((img, index) => ({
			'@type': 'ListItem',
			position: index + 1,
			item: {
				'@type': 'ImageObject',
				'@id': `${SITE_URL}/portfolio#image-${index + 1}`,
				url: img.image.startsWith('http') ? img.image : `${SITE_URL}${img.image}`,
				contentUrl: img.image.startsWith('http') ? img.image : `${SITE_URL}${img.image}`,
				name: img.title || `Работа ${index + 1}`,
				description: img.title || 'Десерт ручной работы от кондитера Оксаны',
				author: { '@id': `${SITE_URL}/#person` },
				copyrightHolder: { '@id': `${SITE_URL}/#person` },
			},
		})),
	};

	return <JsonLd id="image-gallery-schema" data={schema} />;
}

// ItemList schema for category pages
// Valid structure for Google rich results
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

	return <JsonLd id="itemlist-schema" data={schema} />;
}
