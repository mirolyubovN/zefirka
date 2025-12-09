import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/constants';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  // Testing/staging - block all crawlers
  return {
    rules: [
      {
        userAgent: '*',
        disallow: '/',
      },
    ],
  };

  // Production - uncomment below and remove the block above
  // return {
  //   rules: [
  //     {
  //       userAgent: '*',
  //       allow: '/',
  //       disallow: ['/api/', '/_next/'],
  //     },
  //     {
  //       userAgent: 'Yandex',
  //       allow: '/',
  //       crawlDelay: 0.5,
  //     },
  //   ],
  //   sitemap: `${SITE_URL}/sitemap.xml`,
  //   host: SITE_URL,
  // };
}
