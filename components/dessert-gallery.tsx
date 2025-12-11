'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ImageLightbox } from '@/components/image-lightbox';

interface DessertGalleryProps {
  images: string[];
  alt: string;
}

export function DessertGallery({ images, alt }: DessertGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  if (images.length === 0) return null;

  const mainImage = images[0];
  const thumbnails = images.slice(1, 5);

  return (
    <>
      {/* Main Image */}
      <button
        onClick={() => openLightbox(0)}
        className="relative aspect-square w-full overflow-hidden rounded-2xl shadow-xl cursor-zoom-in group"
      >
        <Image
          src={mainImage}
          alt={alt}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
        />
        <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
          <div className="rounded-full bg-white/90 p-3 shadow-lg">
            <svg
              className="h-6 w-6 text-primary"
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

      {/* Thumbnails */}
      {thumbnails.length > 0 && (
        <div className="mt-4 grid grid-cols-4 gap-2">
          {thumbnails.map((img, i) => (
            <button
              key={i}
              onClick={() => openLightbox(i + 1)}
              className="relative aspect-square overflow-hidden rounded-lg cursor-zoom-in group"
            >
              <Image
                src={img}
                alt={`${alt} ${i + 2}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="100px"
              />
              <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10" />
            </button>
          ))}
        </div>
      )}

      {/* Lightbox */}
      <ImageLightbox
        images={images}
        initialIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </>
  );
}
