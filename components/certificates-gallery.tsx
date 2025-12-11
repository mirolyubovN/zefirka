'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ImageLightbox } from './image-lightbox';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';

interface CertificatesGalleryProps {
	certificates: string[];
}

export function CertificatesGallery({ certificates }: CertificatesGalleryProps) {
	const [lightboxOpen, setLightboxOpen] = useState(false);
	const [selectedIndex, setSelectedIndex] = useState(0);

	const openLightbox = (index: number) => {
		setSelectedIndex(index);
		setLightboxOpen(true);
	};

	return (
		<>
			<Carousel className="w-full max-w-4xl mx-auto">
				<CarouselContent>
					{certificates.map((cert, i) => (
						<CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
							<button
								onClick={() => openLightbox(i)}
								className="group relative aspect-[3/4] w-full overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
							>
								<Image
									src={cert}
									alt={'Сертификат ' + (i + 1)}
									fill
									className="object-contain transition-transform duration-500 group-hover:scale-105"
									sizes="(max-width: 768px) 100vw, 33vw"
								/>
								{/* Hover overlay */}
								<div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
								{/* Zoom icon */}
								<div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
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
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>

			<ImageLightbox
				images={certificates}
				initialIndex={selectedIndex}
				isOpen={lightboxOpen}
				onClose={() => setLightboxOpen(false)}
			/>
		</>
	);
}
