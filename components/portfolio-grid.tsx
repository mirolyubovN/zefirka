'use client';

import { useState } from 'react';
import Image from 'next/image';
import type { PortfolioItem } from '@/lib/content-types';
import { cn } from '@/lib/utils';
import { AnimatedStagger, AnimatedStaggerItem } from './animated-fade-in';
import { ImageLightbox } from './image-lightbox';

interface PortfolioGridProps {
	items: PortfolioItem[];
	className?: string;
}

export function PortfolioGrid({ items, className }: PortfolioGridProps) {
	const [lightboxOpen, setLightboxOpen] = useState(false);
	const [lightboxIndex, setLightboxIndex] = useState(0);

	const openLightbox = (index: number) => {
		setLightboxIndex(index);
		setLightboxOpen(true);
	};

	const images = items.map(item => item.image);

	return (
		<>
			<AnimatedStagger
				className={cn(
					'grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 md:gap-4',
					className
				)}
			>
				{items.map((item, index) => (
					<AnimatedStaggerItem key={item.id}>
						<button
							className="group relative aspect-square w-full cursor-zoom-in overflow-hidden rounded-lg bg-muted hover-lift"
							onClick={() => openLightbox(index)}
						>
							<Image
								src={item.image}
								alt={item.title || 'Portfolio image'}
								fill
								className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
								sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
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
							{item.title && (
								<div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
									<p className="text-sm font-medium text-white">{item.title}</p>
								</div>
							)}
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
