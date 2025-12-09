import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import type { Category } from '@/lib/content-types';

interface CategoryCardProps {
  category: Category;
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link href={`/catalog/${category.slug}`}>
      <div className="hover-lift">
        <Card className="group relative overflow-hidden border-0 bg-card py-0 shadow-sm transition-shadow duration-500 hover:shadow-xl hover:shadow-primary/10">
          <CardContent className="relative aspect-[4/3] p-0">
            <Image
              src={category.coverImage}
              alt={category.title}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300" />
            <div className="absolute inset-0 flex flex-col justify-end p-6">
              <div className="translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
                <h3 className="font-display text-xl font-medium text-white md:text-2xl">
                  {category.title}
                </h3>
                {category.description && (
                  <p className="mt-2 text-sm text-white/70 line-clamp-2">
                    {category.description}
                  </p>
                )}
              </div>
              <div className="mt-4 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/60 opacity-0 transition-all duration-300 group-hover:opacity-100">
                <span>Смотреть</span>
                <ArrowUpRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
            <div className="absolute inset-0 rounded-lg border border-white/0 transition-colors duration-300 group-hover:border-white/10" />
          </CardContent>
        </Card>
      </div>
    </Link>
  );
}
