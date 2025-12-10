'use client';

import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import type { Review } from '@/lib/content-types';
import { AnimatedStagger, AnimatedStaggerItem } from './animated-fade-in';

interface ReviewsGridProps {
  reviews: Review[];
}

export function ReviewsGrid({ reviews }: ReviewsGridProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const goToPrevious = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex(selectedIndex === 0 ? reviews.length - 1 : selectedIndex - 1);
  }, [selectedIndex, reviews.length]);

  const goToNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex(selectedIndex === reviews.length - 1 ? 0 : selectedIndex + 1);
  }, [selectedIndex, reviews.length]);

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === 'ArrowRight') goToNext();
      if (e.key === 'Escape') closeLightbox();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, goToPrevious, goToNext]);

  return (
    <>
      <AnimatedStagger className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4 -m-4">
        {reviews.map((review, index) => (
          <AnimatedStaggerItem key={review.id}>
            <button
              className="relative aspect-[3/4] w-full overflow-hidden rounded-xl cursor-zoom-in group"
              onClick={() => openLightbox(index)}
            >
              <Image
                src={review.image}
                alt={`Отзыв клиента ${review.id}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
              {/* Zoom icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="rounded-full bg-white/90 p-3 shadow-lg">
                  <svg
                    className="h-5 w-5 text-foreground"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                    />
                  </svg>
                </div>
              </div>
            </button>
          </AnimatedStaggerItem>
        ))}
      </AnimatedStagger>

      <Dialog open={selectedIndex !== null} onOpenChange={closeLightbox}>
        <DialogContent
          className="max-w-[100vw] max-h-[100vh] w-screen h-screen p-0 border-0 bg-black/95 rounded-none sm:max-w-[100vw]"
          showCloseButton={false}
        >
          <DialogTitle className="sr-only">Просмотр отзыва</DialogTitle>
          {selectedIndex !== null && (
            <div className="relative flex h-full w-full items-center justify-center animate-fade-in">
              <div className="relative h-[85vh] w-[90vw] max-w-3xl">
                <Image
                  src={reviews[selectedIndex].image}
                  alt={`Отзыв клиента ${selectedIndex + 1}`}
                  fill
                  className="object-contain"
                  sizes="90vw"
                  priority
                />
              </div>

              <button
                onClick={closeLightbox}
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                aria-label="Закрыть"
              >
                <X className="h-5 w-5" />
              </button>

              {reviews.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      goToPrevious();
                    }}
                    className="absolute left-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                    aria-label="Предыдущее изображение"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      goToNext();
                    }}
                    className="absolute right-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                    aria-label="Следующее изображение"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </>
              )}

              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-4 py-2 text-sm text-white/80 backdrop-blur-sm">
                {selectedIndex + 1} / {reviews.length}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
