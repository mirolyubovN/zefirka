'use client';

import { useState } from 'react';
import Image from 'next/image';
import type { Review } from '@/lib/content-types';
import { AnimatedStagger, AnimatedStaggerItem } from './animated-fade-in';
import { ImageLightbox } from './image-lightbox';

interface ReviewsGridProps {
	reviews: Review[];
}

export function ReviewsGrid({ reviews }: ReviewsGridProps) {
	const [lightboxOpen, setLightboxOpen] = useState(false);
	const [lightboxIndex, setLightboxIndex] = useState(0);

	const openLightbox = (index: number) => {
		setLightboxIndex(index);
		setLightboxOpen(true);
	};

	const images = reviews.map(review => review.image);

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
										className="h-5 w-5 text-primary"
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

			<ImageLightbox
				images={images}
				initialIndex={lightboxIndex}
				isOpen={lightboxOpen}
				onClose={() => setLightboxOpen(false)}
			/>
		</>
	);
}
