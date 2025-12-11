'use client';

import { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { ImageLightbox } from './image-lightbox';

interface ImageGalleryProps {
	images: string[];
	className?: string;
}

export function ImageGallery({ images, className }: ImageGalleryProps) {
	const [lightboxOpen, setLightboxOpen] = useState(false);
	const [lightboxIndex, setLightboxIndex] = useState(0);

	const openLightbox = (index: number) => {
		setLightboxIndex(index);
		setLightboxOpen(true);
	};

	return (
		<>
			<div className={cn('grid gap-4', className)}>
				{images[0] && (
					<button
						className="relative aspect-square cursor-zoom-in overflow-hidden rounded-lg group"
						onClick={() => openLightbox(0)}
					>
						<Image
							src={images[0]}
							alt=""
							fill
							className="object-cover transition-transform duration-300 group-hover:scale-105"
							sizes="(max-width: 768px) 100vw, 50vw"
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
				)}

				{images.length > 1 && (
					<div className="grid grid-cols-4 gap-2">
						{images.slice(1, 5).map((image, index) => (
							<button
								key={index}
								className="relative aspect-square cursor-zoom-in overflow-hidden rounded-lg group"
								onClick={() => openLightbox(index + 1)}
							>
								<Image
									src={image}
									alt=""
									fill
									className="object-cover transition-transform duration-300 group-hover:scale-105"
									sizes="(max-width: 768px) 25vw, 12vw"
								/>
								<div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10" />
								{index === 3 && images.length > 5 && (
									<div className="absolute inset-0 flex items-center justify-center bg-black/60 text-white text-lg font-semibold">
										+{images.length - 5}
									</div>
								)}
							</button>
						))}
					</div>
				)}
			</div>

			<ImageLightbox
				images={images}
				initialIndex={lightboxIndex}
				isOpen={lightboxOpen}
				onClose={() => setLightboxOpen(false)}
			/>
		</>
	);
}
