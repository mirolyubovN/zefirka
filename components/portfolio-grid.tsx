'use client';

import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import type { PortfolioItem } from '@/lib/content-types';
import { cn } from '@/lib/utils';
import { AnimatedStagger, AnimatedStaggerItem } from './animated-fade-in';

interface PortfolioGridProps {
	items: PortfolioItem[];
	className?: string;
}

export function PortfolioGrid({ items, className }: PortfolioGridProps) {
	const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

	const openLightbox = (index: number) => setSelectedIndex(index);
	const closeLightbox = () => setSelectedIndex(null);

	const goToPrevious = useCallback(() => {
		if (selectedIndex === null) return;
		setSelectedIndex(selectedIndex === 0 ? items.length - 1 : selectedIndex - 1);
	}, [selectedIndex, items.length]);

	const goToNext = useCallback(() => {
		if (selectedIndex === null) return;
		setSelectedIndex(selectedIndex === items.length - 1 ? 0 : selectedIndex + 1);
	}, [selectedIndex, items.length]);

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

			<Dialog open={selectedIndex !== null} onOpenChange={closeLightbox}>
				<DialogContent
					className="max-w-[100vw] max-h-[100vh] w-screen h-screen p-0 border-0 bg-black/95 rounded-none sm:max-w-[100vw]"
					showCloseButton={false}
				>
					<DialogTitle className="sr-only">Просмотр изображения</DialogTitle>
					{selectedIndex !== null && (
						<div className="relative flex h-full w-full items-center justify-center animate-fade-in">
							<div className="relative h-[85vh] w-[90vw] max-w-6xl">
								<Image
									src={items[selectedIndex].image}
									alt={items[selectedIndex].title || 'Portfolio image'}
									fill
									className="object-contain"
									sizes="90vw"
									priority
								/>
							</div>

							<button
								onClick={closeLightbox}
								className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
								aria-label="Close"
							>
								<X className="h-5 w-5" />
							</button>

							{items.length > 1 && (
								<>
									<button
										onClick={(e) => {
											e.stopPropagation();
											goToPrevious();
										}}
										className="absolute left-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
										aria-label="Previous image"
									>
										<ChevronLeft className="h-6 w-6" />
									</button>
									<button
										onClick={(e) => {
											e.stopPropagation();
											goToNext();
										}}
										className="absolute right-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
										aria-label="Next image"
									>
										<ChevronRight className="h-6 w-6" />
									</button>
								</>
							)}

							{items[selectedIndex].title && (
								<div className="absolute bottom-20 left-1/2 -translate-x-1/2 text-center">
									<h3 className="font-display text-lg font-medium text-white">
										{items[selectedIndex].title}
									</h3>
								</div>
							)}

							<div className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-4 py-2 text-sm text-white/80 backdrop-blur-sm">
								{selectedIndex + 1} / {items.length}
							</div>
						</div>
					)}
				</DialogContent>
			</Dialog>
		</>
	);
}
