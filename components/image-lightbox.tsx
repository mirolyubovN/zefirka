'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { createPortal } from 'react-dom';
import { cn } from '@/lib/utils';

interface ImageLightboxProps {
	images: string[];
	initialIndex?: number;
	isOpen: boolean;
	onClose: () => void;
}

export function ImageLightbox({ images, initialIndex = 0, isOpen, onClose }: ImageLightboxProps) {
	const [currentIndex, setCurrentIndex] = useState(initialIndex);
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	// Sync currentIndex when lightbox opens
	useEffect(() => {
		if (isOpen) {
			setCurrentIndex(initialIndex);
		}
	}, [isOpen, initialIndex]);

	const goNext = useCallback(() => {
		setCurrentIndex((prev) => (prev + 1) % images.length);
	}, [images.length]);

	const goPrev = useCallback(() => {
		setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
	}, [images.length]);

	useEffect(() => {
		if (!isOpen) return;

		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape') onClose();
			if (e.key === 'ArrowRight') goNext();
			if (e.key === 'ArrowLeft') goPrev();
		};

		document.body.style.overflow = 'hidden';
		window.addEventListener('keydown', handleKeyDown);

		return () => {
			document.body.style.overflow = '';
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, [isOpen, onClose, goNext, goPrev]);

	if (!isOpen || !mounted) return null;

	const lightboxContent = (
		<div
			className="fixed inset-0 flex flex-col"
			style={{ zIndex: 9999 }}
		>
			{/* Backdrop - full screen dark overlay */}
			<div
				className="fixed inset-0 bg-black/95"
				style={{ zIndex: 9999 }}
				onClick={onClose}
			/>

			{/* Top bar with close button */}
			<div
				className="fixed top-0 left-0 right-0 flex items-center justify-between px-4 py-4"
				style={{ zIndex: 10001 }}
			>
				<div className="text-white text-sm font-medium">
					{images.length > 1 && `${currentIndex + 1} / ${images.length}`}
				</div>
				<button
					onClick={onClose}
					className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-black font-medium transition-colors hover:bg-gray-200"
					aria-label="Закрыть"
				>
					<span className="text-sm">Закрыть</span>
					<X className="h-5 w-5" />
				</button>
			</div>

			{/* Main content area */}
			<div
				className="fixed inset-0 flex items-center justify-center p-4 pt-16 pb-20"
				style={{ zIndex: 10000 }}
				onClick={onClose}
			>
				{/* Navigation arrows */}
				{images.length > 1 && (
					<>
						<button
							onClick={(e) => {
								e.stopPropagation();
								goPrev();
							}}
							className="fixed left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-3 text-black transition-colors hover:bg-white sm:left-8"
							style={{ zIndex: 10001 }}
							aria-label="Предыдущее изображение"
						>
							<ChevronLeft className="h-6 w-6" />
						</button>
						<button
							onClick={(e) => {
								e.stopPropagation();
								goNext();
							}}
							className="fixed right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-3 text-black transition-colors hover:bg-white sm:right-8"
							style={{ zIndex: 10001 }}
							aria-label="Следующее изображение"
						>
							<ChevronRight className="h-6 w-6" />
						</button>
					</>
				)}

				{/* Image container */}
				<div
					className="relative flex items-center justify-center"
					onClick={(e) => e.stopPropagation()}
					style={{ maxHeight: 'calc(100vh - 140px)', maxWidth: 'calc(100vw - 32px)' }}
				>
					<Image
						src={images[currentIndex]}
						alt={`Изображение ${currentIndex + 1}`}
						width={1400}
						height={1800}
						className="rounded-lg object-contain"
						style={{
							maxHeight: 'calc(100vh - 140px)',
							maxWidth: 'calc(100vw - 100px)',
							width: 'auto',
							height: 'auto'
						}}
						priority
					/>
				</div>
			</div>

			{/* Bottom navigation dots */}
			{images.length > 1 && (
				<div
					className="fixed bottom-6 left-1/2 -translate-x-1/2 flex gap-2 rounded-full bg-white/90 px-4 py-2"
					style={{ zIndex: 10001 }}
				>
					{images.map((_, index) => (
						<button
							key={index}
							onClick={(e) => {
								e.stopPropagation();
								setCurrentIndex(index);
							}}
							className={cn(
								"h-2.5 rounded-full transition-all",
								index === currentIndex
									? "bg-black w-8"
									: "bg-black/30 w-2.5 hover:bg-black/50"
							)}
							aria-label={`Перейти к изображению ${index + 1}`}
						/>
					))}
				</div>
			)}
		</div>
	);

	// Use portal to render at document body level
	return createPortal(lightboxContent, document.body);
}

interface ClickableImageProps {
	src: string;
	alt: string;
	className?: string;
	onClick: () => void;
}

export function ClickableImage({ src, alt, className, onClick }: ClickableImageProps) {
	return (
		<button
			onClick={onClick}
			className={cn(
				"relative cursor-pointer overflow-hidden transition-transform hover:scale-[1.02]",
				className
			)}
		>
			<Image
				src={src}
				alt={alt}
				fill
				className="object-cover"
				sizes="(max-width: 768px) 100vw, 33vw"
			/>
			<div className="absolute inset-0 bg-black/0 transition-colors hover:bg-black/10" />
			<div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity hover:opacity-100">
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
	);
}
