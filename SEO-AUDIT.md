# Comprehensive SEO & Performance Audit for Zefirka

**Date:** December 2024
**Website:** zefirka.kz
**Framework:** Next.js 16.0.6 (App Router)

---

## Table of Contents

1. [Technical Audit Summary](#1-technical-audit-summary)
2. [Critical Issues Found](#2-critical-issues-found)
3. [Detailed Fixes & Code Examples](#3-detailed-fixes--code-examples)
4. [Core Web Vitals & Performance](#4-core-web-vitals--performance)
5. [Russian Content SEO](#5-russian-content-seo)
6. [Yandex-Specific Optimizations](#6-yandex-specific-optimizations)
7. [Structured Data (JSON-LD)](#7-structured-data-json-ld)
8. [Content Strategy](#8-content-strategy)
9. [Final Checklist](#9-final-checklist)

---

## 1. Technical Audit Summary

### Architecture Overview

| Aspect | Status | Notes |
|--------|--------|-------|
| Next.js Version | 16.0.6 | Latest, excellent |
| App Router | ✅ Used | Correctly implemented |
| Static Generation | ✅ Partial | `generateStaticParams` used |
| Server Components | ✅ Good | Default RSC, client only where needed |
| Metadata API | ✅ Used | Needs improvements |
| Structured Data | ✅ Present | Needs enhancements |
| Sitemap | ✅ Present | Working |
| Robots.txt | ⚠️ BLOCKING | Currently blocking ALL crawlers |

### File Structure Analysis

```
app/
├── layout.tsx          # Root layout with metadata
├── page.tsx            # Homepage
├── sitemap.ts          # Dynamic sitemap ✅
├── robots.ts           # ⚠️ Currently blocking crawlers
├── catalog/
│   ├── page.tsx        # Catalog index
│   └── [category]/
│       ├── page.tsx    # Category page (handles single dessert display)
│       └── [slug]/
│           └── page.tsx # Individual dessert page
├── portfolio/page.tsx
├── about/page.tsx
├── reviews/page.tsx
├── faq/page.tsx
├── contacts/page.tsx
├── not-found.tsx
├── error.tsx
└── global-error.tsx
```

### What's Working Well

- ✅ Proper use of Server Components (most pages are RSC)
- ✅ Client components only where needed (`'use client'` directive)
- ✅ `generateStaticParams` for static generation of dynamic routes
- ✅ Breadcrumb schema on all pages
- ✅ FAQ schema on FAQ page
- ✅ WebP images throughout
- ✅ Font optimization with `display: 'swap'`
- ✅ Proper Russian language support (`lang="ru"`)
- ✅ CSS animations instead of heavy JS libraries
- ✅ `prefers-reduced-motion` support

---

## 2. Critical Issues Found

### Issue 1: robots.txt Blocks All Crawlers (CRITICAL)

**File:** `app/robots.ts` (lines 8-15)

**Current Code:**
```typescript
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        disallow: '/',  // ⚠️ BLOCKS EVERYTHING
      },
    ],
  };
}
```

**Impact:** Your website is completely invisible to Google, Yandex, and all search engines.

---

### Issue 2: Inconsistent Brand Name in Metadata

Different pages use different brand names:

| Page | Brand Name Used |
|------|-----------------|
| layout.tsx | Zefirka |
| catalog/page.tsx | Профитроли |
| about/page.tsx | Профитроли |
| contacts/page.tsx | Профитроли |
| portfolio/page.tsx | Профитроли |
| faq/page.tsx | Zefirka |
| reviews/page.tsx | Zefirka |

**Impact:** Confusing for users and search engines, weakens brand recognition.

---

### Issue 3: Wrong Slug in Content Data

**File:** `content/index.ts` (line 48)

```typescript
{
  id: 5,
  title: "Профитроли",
  slug: "Zefirka",  // ⚠️ WRONG - should be "profiteroli"
  description: "Воздушные профитроли с очень вкусными начинками",
  coverImage: "/images/categories/profiterole.webp",
},
```

**Impact:** Broken URL structure, SEO confusion.

---

### Issue 4: Theme Flash (FOUC)

**File:** `components/theme-provider.tsx`

No inline script to prevent Flash of Unstyled Content when page loads with dark theme preference.

**Impact:** Users see a flash of wrong theme on page load.

---

### Issue 5: Missing Absolute URLs in OpenGraph

Some OG images use relative paths without `metadataBase` being properly utilized.

---

## 3. Detailed Fixes & Code Examples

### Fix 1: Enable robots.txt for Production

**File:** `app/robots.ts`

```typescript
import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/constants';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/private/'],
      },
      {
        userAgent: 'Yandex',
        allow: '/',
        crawlDelay: 0.5, // Yandex respects this
      },
      {
        userAgent: 'YandexImages',
        allow: '/images/',
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL, // Yandex uses this for mirror detection
  };
}
```

---

### Fix 2: Standardize Brand Name

**File:** `lib/constants.ts`

```typescript
// Site metadata - USE CONSISTENTLY
export const SITE_NAME = 'Zefirka';
export const SITE_NAME_FULL = 'Zefirka — Десерты ручной работы';
export const SITE_TAGLINE = 'Премиальные натуральные десерты в Костанае';
```

**Update all page titles to use consistent format:**

| Page | New Title |
|------|-----------|
| Home | Zefirka — Натуральные десерты ручной работы \| Костанай |
| Catalog | Каталог десертов \| Zefirka |
| Portfolio | Портфолио работ \| Zefirka |
| About | Кондитер Оксана — История \| Zefirka |
| Reviews | Отзывы клиентов \| Zefirka |
| FAQ | Вопросы и ответы \| Zefirka |
| Contacts | Контакты — Заказать десерты \| Zefirka |

---

### Fix 3: Correct the Profiteroli Slug

**File:** `content/index.ts`

```typescript
{
  id: 5,
  title: "Профитроли",
  slug: "profiteroli",  // ✅ FIXED
  description: "Воздушные профитроли с очень вкусными начинками",
  coverImage: "/images/categories/profiterole.webp",
},
```

---

### Fix 4: Prevent Theme Flash (FOUC)

**File:** `app/layout.tsx`

Add inline script in `<head>` before any other content:

```typescript
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        {/* Prevent theme flash - must be inline and blocking */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('Zefirka-theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <PersonSchema />
        <LocalBusinessSchema />
        <WebsiteSchema />
      </head>
      <body className={`${cormorant.variable} ${inter.variable} font-sans antialiased`}>
        <ThemeProvider defaultTheme="light" storageKey="Zefirka-theme">
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
```

---

### Fix 5: Enhanced Root Layout Metadata

**File:** `app/layout.tsx`

```typescript
export const metadata: Metadata = {
  title: {
    default: 'Zefirka — Натуральные десерты ручной работы | Костанай',
    template: '%s | Zefirka',
  },
  description: 'Премиальные натуральные десерты ручной работы в Костанае: зефир, муссовые торты, птичье молоко, профитроли и трюфели. Без консервантов, только натуральные ингредиенты.',
  keywords: [
    // Primary keywords
    'десерты Костанай',
    'торты на заказ Костанай',
    'зефир ручной работы',
    'домашний кондитер Костанай',
    // Long-tail Russian keywords
    'натуральный зефир без красителей',
    'птичье молоко домашнее Костанай',
    'муссовые торты на заказ',
    'бельгийские трюфели ручной работы',
    'профитроли с кремом Костанай',
    // Occasion-based keywords
    'торт на день рождения Костанай',
    'десерты на праздник',
    'подарочные наборы сладостей',
    // Location variations
    'кондитер Костанай',
    'сладости на заказ Костанай',
  ],
  authors: [{ name: 'Оксана', url: SITE_URL }],
  creator: 'Оксана',
  publisher: 'Zefirka',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: '/',
    languages: {
      'ru-RU': '/',
      'ru-KZ': '/',
    },
  },
  openGraph: {
    title: 'Zefirka — Натуральные десерты ручной работы',
    description: 'Премиальные десерты ручной работы в Костанае. Зефир, муссовые торты, птичье молоко и трюфели из натуральных ингредиентов.',
    url: SITE_URL,
    siteName: 'Zefirka',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: `${SITE_URL}/images/og-image.webp`,
        width: 1200,
        height: 630,
        alt: 'Zefirka — Премиальные натуральные десерты в Костанае',
        type: 'image/webp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zefirka — Десерты ручной работы',
    description: 'Натуральные десерты в Костанае: зефир, торты, трюфели',
    images: [`${SITE_URL}/images/og-image.webp`],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add when you have verification codes
    // google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
  category: 'food',
};
```

---

### Fix 6: Update Individual Page Metadata

**File:** `app/catalog/page.tsx`

```typescript
export const metadata: Metadata = {
  title: 'Каталог десертов',
  description: 'Выберите категорию десертов: зефир, птичье молоко, муссовые торты, профитроли и трюфели ручной работы в Костанае. Только натуральные ингредиенты.',
  alternates: {
    canonical: '/catalog',
  },
  openGraph: {
    title: 'Каталог десертов | Zefirka',
    description: 'Зефир, торты, птичье молоко, профитроли, трюфели — выбирайте натуральные десерты ручной работы',
    images: ['/images/og-catalog.webp'], // Create dedicated OG image
  },
};
```

**File:** `app/about/page.tsx`

```typescript
export const metadata: Metadata = {
  title: 'Кондитер Оксана — История натуральных десертов',
  description: 'Кондитер с обучением в школе Екатерины Абрамовой и «Кейко». Философия натуральных ингредиентов, сертификаты качества. Костанай.',
  alternates: {
    canonical: '/about',
  },
};
```

**File:** `app/portfolio/page.tsx`

```typescript
export const metadata: Metadata = {
  title: 'Портфолио работ — Десерты ручной работы',
  description: 'Фотогалерея работ кондитера: торты, зефир, пирожные, подарочные наборы. Более 50 примеров натуральных десертов в Костанае.',
  alternates: {
    canonical: '/portfolio',
  },
};
```

**File:** `app/reviews/page.tsx`

```typescript
export const metadata: Metadata = {
  title: 'Отзывы клиентов о десертах',
  description: 'Реальные отзывы клиентов о натуральных десертах в Костанае. Зефир, торты, птичье молоко — мнения покупателей.',
  alternates: {
    canonical: '/reviews',
  },
};
```

**File:** `app/faq/page.tsx`

```typescript
export const metadata: Metadata = {
  title: 'Вопросы и ответы — Заказ десертов',
  description: 'Ответы на вопросы: сроки заказа, доставка по Костанаю, хранение зефира и птичьего молока, состав десертов.',
  alternates: {
    canonical: '/faq',
  },
};
```

**File:** `app/contacts/page.tsx`

```typescript
export const metadata: Metadata = {
  title: 'Контакты — Заказать десерты в Костанае',
  description: 'Заказать десерты в Костанае: WhatsApp, Telegram, Instagram. Самовывоз бесплатно, Яндекс Доставка по тарифам сервиса.',
  alternates: {
    canonical: '/contacts',
  },
};
```

---

## 4. Core Web Vitals & Performance

### Image Optimization with Aspect Ratio (Prevents CLS)

**File:** `components/portfolio-grid.tsx`

```typescript
<button
  className="group relative w-full cursor-zoom-in overflow-hidden rounded-lg bg-muted hover-lift"
  onClick={() => openLightbox(index)}
  style={{ aspectRatio: '1 / 1' }} // Explicit aspect ratio prevents CLS
>
  <Image
    src={item.image}
    alt={item.title || `Десерт ${index + 1} — работа кондитера Оксаны`}
    fill
    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
    loading={index < 4 ? 'eager' : 'lazy'} // First 4 images load eagerly
    placeholder="blur"
    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAgEDBAMBAAAAAAAAAAAAAQIDAAQRBRIhMQYTQWH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABkRAAMBAQEAAAAAAAAAAAAAAAABAgMRIf/aAAwDAQACEQMRAD8A0e58wsNQ0q3S3u7iFYXmV1CttzxglT8NKov4"
  />
</button>
```

### Font Optimization

**File:** `app/layout.tsx`

```typescript
const cormorant = Cormorant_Garamond({
  variable: '--font-display',
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600'],  // Remove 700 if not used - reduces file size
  display: 'swap',
  preload: true,
  fallback: ['Georgia', 'serif'],
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600'],  // Remove 700 if not used
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'sans-serif'],
});
```

### Lazy Load Heavy Components

**File:** `components/review-carousel.tsx`

```typescript
'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Lazy load embla carousel to reduce initial bundle
const Carousel = dynamic(
  () => import('@/components/ui/carousel').then((mod) => mod.Carousel),
  {
    ssr: false,
    loading: () => <CarouselSkeleton />
  }
);

function CarouselSkeleton() {
  return (
    <div className="flex gap-4 overflow-hidden">
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="flex-shrink-0 w-[85%] sm:w-1/2 lg:w-1/3 xl:w-1/4 aspect-[3/4] bg-muted animate-pulse rounded-xl"
        />
      ))}
    </div>
  );
}
```

### Performance Best Practices Checklist

- [ ] All images use Next/Image with proper `sizes` attribute
- [ ] Above-fold images use `priority` prop
- [ ] Below-fold images use `loading="lazy"`
- [ ] All images have explicit `width` and `height` or `fill` with aspect-ratio container
- [ ] Blur placeholders for all images
- [ ] Fonts use `display: 'swap'`
- [ ] Unnecessary font weights removed
- [ ] Heavy carousels lazy-loaded
- [ ] CSS animations used instead of JS animations

---

## 5. Russian Content SEO

### Optimized Meta Descriptions (160 chars max)

```typescript
const META_DESCRIPTIONS = {
  home: 'Натуральные десерты ручной работы в Костанае: зефир, муссовые торты, птичье молоко, трюфели. Без консервантов. Свяжитесь для заказа.',

  catalog: 'Каталог десертов от кондитера: зефир с натуральными ягодами, муссовые торты, профитроли с кремом, бельгийские трюфели. Костанай.',

  portfolio: 'Фотогалерея работ кондитера Оксаны: торты, зефир, пирожные, подарочные наборы. Более 50 примеров натуральных десертов.',

  about: 'Кондитер Оксана — обучение в школе Екатерины Абрамовой и «Кейко». Философия натуральных ингредиентов. Сертификаты качества.',

  reviews: 'Реальные отзывы клиентов о натуральных десертах в Костанае. Зефир, торты, птичье молоко — мнения покупателей.',

  faq: 'Ответы на вопросы: сроки заказа, доставка по Костанаю, хранение зефира и птичьего молока, состав десертов.',

  contacts: 'Заказать десерты в Костанае: WhatsApp, Telegram, Instagram. Самовывоз бесплатно, Яндекс Доставка по тарифам.',
};
```

### Long-tail Keywords for Russian Market

**File:** `lib/seo-keywords.ts` (new file)

```typescript
export const SEO_KEYWORDS = {
  // Primary keywords (high volume)
  primary: [
    'десерты Костанай',
    'торты на заказ Костанай',
    'домашний кондитер Костанай',
    'зефир ручной работы',
  ],

  // Long-tail keywords (lower competition, higher conversion)
  longTail: [
    'натуральный зефир без красителей Костанай',
    'торт на день рождения заказать Костанай',
    'муссовый торт на заказ недорого',
    'птичье молоко домашнее рецепт Костанай',
    'профитроли с кремом заказать',
    'трюфели из бельгийского шоколада',
    'подарочный набор сладостей Костанай',
    'десерты без консервантов',
  ],

  // Seasonal keywords
  seasonal: [
    'торт на 8 марта Костанай',
    'новогодние десерты заказать',
    'сладкий подарок на день рождения',
    'десерты на свадьбу Костанай',
    'торт на выпускной',
    'сладости на корпоратив',
  ],

  // Local variations
  local: [
    'кондитер Костанай отзывы',
    'где заказать торт в Костанае',
    'доставка десертов Костанай',
    'сладости на заказ Костанайская область',
    'торты с доставкой Костанай',
  ],

  // Product-specific
  products: {
    zefir: [
      'зефир ручной работы купить',
      'натуральный зефир без красителей',
      'зефир с ягодами Костанай',
      'яблочный зефир домашний',
    ],
    ptichyeMoloko: [
      'птичье молоко домашнее купить',
      'конфеты птичье молоко на заказ',
      'птичье молоко без красителей',
    ],
    torty: [
      'муссовый торт на заказ Костанай',
      'бенто торт заказать',
      'торт без мастики Костанай',
    ],
    truffeli: [
      'трюфели из бельгийского шоколада',
      'шоколадные трюфели ручной работы',
      'конфеты трюфели купить Костанай',
    ],
  },
};
```

### H1/H2 Structure Recommendations

```
Homepage:
├── H1: Натуральные десерты ручной работы в Костанае
├── H2: Категории десертов
├── H2: Почему выбирают меня
├── H2: Портфолио
├── H2: История моих десертов
├── H2: Отзывы клиентов
└── H2: Готовы заказать десерт мечты?

Catalog Page:
├── H1: Каталог десертов
└── (Category cards don't need H2 - they link to category pages)

Category Page (e.g., Зефир):
├── H1: Зефир ручной работы
├── H2: Классический зефир (dessert card)
├── H2: Ягодный зефир (dessert card)
└── H2: Фруктовый зефир (dessert card)

Dessert Page:
├── H1: [Dessert Name] (e.g., "Классический зефир")
├── H2: Состав
├── H2: Характеристики (if present)
└── H2: Хотите заказать?

About Page:
├── H1: Обо мне
├── H2: Моя история
├── H2: Моя философия
└── H2: Сертификаты

FAQ Page:
├── H1: Часто задаваемые вопросы
└── (Questions are accordion items, not H2)

Portfolio Page:
├── H1: Портфолио работ
└── (Gallery images, no additional H2 needed)

Reviews Page:
├── H1: Отзывы клиентов
└── H2: Хотите попробовать?

Contacts Page:
├── H1: Контакты
├── H2: WhatsApp / Telegram / Instagram (cards)
├── H2: Город Костанай
└── H2: Время работы
```

---

## 6. Yandex-Specific Optimizations

### Add Yandex Meta Tags

**File:** `app/layout.tsx` - Add in `<head>`

```typescript
<head>
  {/* Yandex verification - get code from Yandex Webmaster */}
  <meta name="yandex-verification" content="your-verification-code" />

  {/* Yandex-specific: region targeting */}
  <meta name="geo.region" content="KZ-KUS" />
  <meta name="geo.placename" content="Костанай" />
  <meta name="geo.position" content="53.2144;63.6246" />
  <meta name="ICBM" content="53.2144, 63.6246" />

  {/* Content language */}
  <meta httpEquiv="content-language" content="ru" />

  {/* ... other head elements */}
</head>
```

### Yandex Webmaster Setup Checklist

1. **Register at webmaster.yandex.ru**
2. **Verify ownership** using meta tag or DNS
3. **Submit sitemap** (`https://zefirka.kz/sitemap.xml`)
4. **Set region** to Костанай in Yandex Webmaster settings
5. **Check for errors** in the "Diagnostics" section
6. **Monitor indexing** in "Indexing" → "Pages in search"

### Yandex Turbo Pages (Optional - for faster mobile)

**File:** `app/turbo.xml/route.ts` (new file)

```typescript
import { NextResponse } from 'next/server';
import { getDesserts } from '@/content';
import { SITE_URL, SITE_NAME } from '@/lib/constants';

export const dynamic = 'force-static';

export async function GET() {
  const desserts = getDesserts();

  const turboXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss xmlns:yandex="http://news.yandex.ru"
     xmlns:media="http://search.yahoo.com/mrss/"
     xmlns:turbo="http://turbo.yandex.ru"
     version="2.0">
  <channel>
    <title>${SITE_NAME}</title>
    <link>${SITE_URL}</link>
    <description>Натуральные десерты ручной работы в Костанае</description>
    <language>ru</language>
    ${desserts.map(dessert => `
    <item turbo="true">
      <title>${dessert.title}</title>
      <link>${SITE_URL}/catalog/${dessert.categorySlug}/${dessert.slug}</link>
      <turbo:content>
        <![CDATA[
          <header>
            <h1>${dessert.title}</h1>
          </header>
          ${dessert.description}
          <figure>
            <img src="${SITE_URL}${dessert.images[0]}" />
          </figure>
        ]]>
      </turbo:content>
    </item>
    `).join('')}
  </channel>
</rss>`;

  return new NextResponse(turboXml, {
    headers: {
      'Content-Type': 'application/rss+xml',
    },
  });
}
```

### Yandex vs Google: Key Differences

| Aspect | Google | Yandex |
|--------|--------|--------|
| robots.txt `host` | Ignored | Used for mirror detection |
| `crawl-delay` | Ignored | Respected |
| Region targeting | Via Search Console | Via meta tags + Webmaster |
| Image SEO | Alt text focused | Also uses EXIF data |
| JS rendering | Excellent | Good, but prefers HTML |
| Mobile-first | Yes | Yes, Turbo Pages help |

---

## 7. Structured Data (JSON-LD)

### Complete Structured Data File

**File:** `components/structured-data.tsx`

```typescript
import Script from 'next/script';
import { SITE_NAME, SITE_URL, CONTACT_LINKS, SITE_DESCRIPTION } from '@/lib/constants';

// ============================================
// PERSON SCHEMA - For E-E-A-T (Expertise)
// ============================================
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

// ============================================
// LOCAL BUSINESS SCHEMA
// ============================================
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
    priceRange: '$$',
    servesCuisine: 'Кондитерские изделия',
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
    // Important: No online ordering - contact only
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

// ============================================
// WEBSITE SCHEMA
// ============================================
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

// ============================================
// BREADCRUMB SCHEMA
// ============================================
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

// ============================================
// FAQ SCHEMA
// ============================================
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

// ============================================
// PRODUCT SCHEMA (for dessert pages)
// ============================================
interface ProductSchemaProps {
  name: string;
  description: string;
  images: string[];
  category: string;
  slug: string;
  composition?: string;
}

export function ProductSchema({
  name,
  description,
  images,
  category,
  slug,
  composition
}: ProductSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `${SITE_URL}/catalog/${slug}#product`,
    name,
    description,
    image: images.map((img) => (img.startsWith('http') ? img : `${SITE_URL}${img}`)),
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
      // No online ordering - contact only
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

// ============================================
// IMAGE GALLERY SCHEMA (for portfolio)
// ============================================
interface ImageGallerySchemaProps {
  images: Array<{ image: string; title?: string }>;
  title?: string;
  description?: string;
}

export function ImageGallerySchema({
  images,
  title = 'Портфолио работ',
  description = 'Галерея десертов ручной работы'
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

// ============================================
// ITEM LIST SCHEMA (for category pages)
// ============================================
interface ItemListSchemaProps {
  name: string;
  description: string;
  items: Array<{ title: string; slug: string; image: string }>;
  categorySlug: string;
}

export function ItemListSchema({
  name,
  description,
  items,
  categorySlug
}: ItemListSchemaProps) {
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
```

---

## 8. Content Strategy

### Expand FAQ Content

**File:** `content/index.ts` - Add more FAQs

```typescript
const faqs: FAQ[] = [
  // Existing FAQs...
  {
    id: 1,
    question: "За сколько дней нужно делать заказ?",
    answer: "Рекомендую делать заказ минимум за 3-5 дней, чтобы я могла спланировать производство и гарантировать свежесть вашего десерта.",
  },
  {
    id: 2,
    question: "Есть ли доставка?",
    answer: "Да! Возможен самовывоз или доставка Яндекс Доставкой по городу Костанай. Самовывоз бесплатный, стоимость Яндекс Доставки — по тарифам сервиса.",
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
  // NEW FAQs for better SEO
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
    answer: "Минимального заказа нет — можете заказать даже небольшую коробочку зефира для себя или подарка.",
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
```

### Add "How to Order" Section to Homepage

```typescript
// app/page.tsx - New ProcessSection component

function ProcessSection() {
  const steps = [
    {
      step: '01',
      title: 'Свяжитесь со мной',
      description: 'Напишите в WhatsApp или Telegram, расскажите о вашем событии и пожеланиях',
      icon: MessageCircle,
    },
    {
      step: '02',
      title: 'Обсудим детали',
      description: 'Подберём вкусы, размер, дату и обсудим оформление десерта',
      icon: MessageSquare,
    },
    {
      step: '03',
      title: 'Готовлю с любовью',
      description: 'Каждый десерт создаётся из свежих ингредиентов в день выдачи',
      icon: Heart,
    },
    {
      step: '04',
      title: 'Получите десерт',
      description: 'Самовывоз или доставка Яндекс Доставкой по Костанаю',
      icon: Gift,
    },
  ];

  return (
    <section className="py-12 lg:py-32 bg-secondary/20">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Как заказать"
          subtitle="Простой процесс от идеи до готового десерта"
        />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mt-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-6xl font-display font-bold text-primary/10 mb-4">
                {step.step}
              </div>
              <h3 className="text-xl font-medium mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

### Russian CTA Examples

| Purpose | Russian Text |
|---------|-------------|
| View portfolio | Посмотреть работы |
| Contact | Связаться |
| Order | Заказать |
| Learn more | Узнать больше |
| See all | Смотреть всё |
| Write on WhatsApp | Написать в WhatsApp |
| Write on Telegram | Написать в Telegram |
| Ask question | Задать вопрос |
| View catalog | Смотреть каталог |
| Calculate price | Узнать цену |

---

## 9. Final Checklist

### Critical (Do First) ⚠️

- [ ] **Fix robots.txt** — Change `disallow: '/'` to `allow: '/'`
- [ ] **Standardize brand name** — Use "Zefirka" consistently across all pages
- [ ] **Fix profiteroli slug** — Change "Zefirka" to "profiteroli" in `content/index.ts`
- [ ] **Add theme flash prevention** — Inline script in layout `<head>`

### High Priority

- [ ] **Update all page metadata** — Consistent titles and descriptions per section 3
- [ ] **Enhanced structured data** — Implement all schemas from section 7
- [ ] **Register in Yandex Webmaster** — Get verification code, submit sitemap
- [ ] **Register in Google Search Console** — Get verification code, submit sitemap
- [ ] **Add Yandex geo meta tags** — Per section 6
- [ ] **Fix OG images** — Ensure all pages have absolute URLs

### Performance

- [ ] **Add aspect-ratio to image containers** — Prevents CLS
- [ ] **Implement blur placeholders** — For all Next/Image components
- [ ] **Lazy load carousels** — Dynamic import for embla
- [ ] **Reduce font weights** — Remove unused 700 weight if not used
- [ ] **Add preload hints** — For critical above-fold images

### Content

- [ ] **Expand FAQ section** — Add questions from section 8
- [ ] **Add "How to Order" section** — Process description on homepage
- [ ] **Review all alt texts** — Make them descriptive in Russian
- [ ] **Add ingredient quality info** — Build E-E-A-T trust signals

### Yandex-Specific

- [ ] **Add geo meta tags** — Region targeting for Kostanay
- [ ] **Consider Turbo Pages** — For faster mobile experience
- [ ] **Submit sitemap** — To Yandex Webmaster
- [ ] **Set region** — In Yandex Webmaster settings
- [ ] **Test rendering** — Check how Yandex sees your pages

### Post-Launch Monitoring

- [ ] **Monitor Core Web Vitals** — In Search Console
- [ ] **Track keyword rankings** — For primary Russian keywords
- [ ] **Review Search Console errors** — Fix any crawl issues
- [ ] **Check Yandex Webmaster** — For indexing issues
- [ ] **Test structured data** — Use Google Rich Results Test

---

## Quick Reference: File Changes Summary

| File | Change |
|------|--------|
| `app/robots.ts` | Enable crawling |
| `app/layout.tsx` | Add theme flash prevention, update metadata, add geo tags |
| `app/catalog/page.tsx` | Update title/description |
| `app/about/page.tsx` | Update title/description |
| `app/portfolio/page.tsx` | Update title/description |
| `app/reviews/page.tsx` | Update title/description |
| `app/faq/page.tsx` | Update title/description |
| `app/contacts/page.tsx` | Update title/description |
| `content/index.ts` | Fix profiteroli slug, add more FAQs |
| `lib/constants.ts` | Add SITE_NAME_FULL, SITE_TAGLINE |
| `components/structured-data.tsx` | Enhance all schemas |
| `components/portfolio-grid.tsx` | Add aspect-ratio, blur placeholder |

---

**Document generated:** December 2024
**Next review recommended:** After implementing critical fixes
