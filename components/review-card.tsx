import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import type { Review } from '@/lib/content-types';

interface ReviewCardProps {
  review: Review;
}

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <Card className="group h-full border-0 bg-card shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
      <CardContent className="flex h-full flex-col p-8">
        <div className="mb-6">
          <svg
            className="h-8 w-8 text-primary/20"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
          </svg>
        </div>

        <p className="flex-1 text-base leading-relaxed text-muted-foreground">
          {review.text}
        </p>

        <div className="mt-8 flex items-center gap-4 border-t border-border/40 pt-6">
          {review.clientPhoto ? (
            <div className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-primary/10 ring-offset-2 ring-offset-background">
              <Image
                src={review.clientPhoto}
                alt={review.name}
                fill
                className="object-cover"
                sizes="48px"
              />
            </div>
          ) : (
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 font-display text-lg font-medium text-primary ring-2 ring-primary/10 ring-offset-2 ring-offset-background">
              {review.name.charAt(0)}
            </div>
          )}
          <div>
            <p className="font-display text-base font-medium text-foreground">
              {review.name}
            </p>
            <p className="text-xs tracking-wide text-muted-foreground/60">
              Клиент
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
