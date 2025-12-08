import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { getCategories, getCategoryBySlug, getDessertsByCategory } from '@/content';
import { DessertCard } from '@/components/dessert-card';
import { SectionTitle } from '@/components/section-title';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { BreadcrumbSchema } from '@/components/structured-data';
import { Button } from '@/components/ui/button';
import {
	AnimatedFadeIn,
	AnimatedStagger,
	AnimatedStaggerItem,
} from '@/components/animated-fade-in';

interface CategoryPageProps {
	params: Promise<{
		category: string;
	}>;
}

export async function generateStaticParams() {
	const categories = getCategories();
	return categories.map((category) => ({
		category: category.slug,
	}));
}

export async function generateMetadata({
	params,
}: CategoryPageProps): Promise<Metadata> {
	const { category } = await params;
	const categoryData = getCategoryBySlug(category);

	if (!categoryData) {
		return { title: 'Категория не найдена' };
	}

	return {
		title: `${categoryData.title} — Натуральные десерты ручной работы`,
		description: categoryData.description ||
			`${categoryData.title} от домашнего кондитера в Костанае. Только натуральные ингредиенты, ручная работа.`,
		alternates: {
			canonical: `/catalog/${category}`,
		},
		openGraph: {
			title: `${categoryData.title} | Профитроли`,
			description: categoryData.description,
			images: [categoryData.coverImage],
		},
	};
}

export default async function CategoryPage({ params }: CategoryPageProps) {
	const { category } = await params;
	const categoryData = getCategoryBySlug(category);

	if (!categoryData) {
		notFound();
	}

	const desserts = getDessertsByCategory(category);

	return (
		<>
			<BreadcrumbSchema
				items={[
					{ name: 'Главная', url: '/' },
					{ name: 'Каталог', url: '/catalog' },
					{ name: categoryData.title, url: `/catalog/${category}` },
				]}
			/>
			<div className="py-16">
				<div className="container mx-auto px-4">
					<Breadcrumbs
						items={[
							{ label: 'Каталог', href: '/catalog' },
							{ label: categoryData.title },
						]}
					/>

					<AnimatedFadeIn>
						<Button asChild variant="ghost" className="mb-8">
							<Link href="/catalog">
								<ChevronLeft className="mr-2 h-4 w-4" />
								Назад к каталогу
							</Link>
						</Button>
					</AnimatedFadeIn>

					<SectionTitle
						title={categoryData.title}
						subtitle={categoryData.description || undefined}
					/>

					{desserts.length === 0 ? (
						<AnimatedFadeIn>
							<div className="text-center py-12">
								<p className="text-lg text-muted-foreground">
									В этой категории пока нет десертов
								</p>
							</div>
						</AnimatedFadeIn>
					) : (
						<AnimatedStagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
							{desserts.map((dessert) => (
								<AnimatedStaggerItem key={dessert.id}>
									<DessertCard dessert={dessert} />
								</AnimatedStaggerItem>
							))}
						</AnimatedStagger>
					)}
				</div>
			</div>
		</>
	);
}
