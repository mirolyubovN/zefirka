import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import type { Dessert } from '@/lib/content-types';

interface DessertCardProps {
  dessert: Dessert;
}

export function DessertCard({ dessert }: DessertCardProps) {
  const imageUrl = dessert.images[0] || '/placeholder.svg';
  const plainDescription = dessert.description?.replace(/<[^>]*>/g, '') || '';

  return (
    <Link href={`/catalog/${dessert.categorySlug}/${dessert.slug}`}>
      <div className="hover-lift">
        <Card className="group h-full overflow-hidden border shadow-md hover:shadow-xl transition-shadow">
          <div className="relative aspect-square overflow-hidden">
            <Image
              src={imageUrl}
              alt={dessert.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <CardContent className="p-5">
            <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
              {dessert.title}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
              {plainDescription}
            </p>
          </CardContent>
        </Card>
      </div>
    </Link>
  );
}
