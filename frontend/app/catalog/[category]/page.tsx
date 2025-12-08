import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getCategories, getCategoryBySlug, getDessertsByCategory } from '@/content';
import { DessertCard } from '@/components/dessert-card';
import { SectionTitle } from '@/components/section-title';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { BreadcrumbSchema, ProductSchema } from '@/components/structured-data';
import { CTAButton } from '@/components/cta-button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
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
	const desserts = getDessertsByCategory(category);

	if (!categoryData) {
		return { title: 'Категория не найдена' };
	}

	if (desserts.length === 1) {
		const dessert = desserts[0];
		const plainDescription = dessert.description?.replace(/<[^>]*>/g, '') || '';
		return {
			title: dessert.title + ' — Натуральные десерты ручной работы',
			description: plainDescription.slice(0, 160) || dessert.title + ' от домашнего кондитера.',
			alternates: {
				canonical: '/catalog/' + category,
			},
			openGraph: {
				title: dessert.title + ' | Profiterole',
				description: plainDescription.slice(0, 160),
				images: dessert.images[0] ? [dessert.images[0]] : [categoryData.coverImage],
			},
		};
	}

	return {
		title: categoryData.title + ' — Натуральные десерты ручной работы',
		description: categoryData.description ||
			categoryData.title + ' от домашнего кондитера в Костанае. Только натуральные ингредиенты, ручная работа.',
		alternates: {
			canonical: '/catalog/' + category,
		},
		openGraph: {
			title: categoryData.title + ' | Profiterole',
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

	if (desserts.length === 1) {
		const dessert = desserts[0];
		const mainImage = dessert.images[0] || '/placeholder.svg';
		const plainDescription = dessert.description?.replace(/<[^>]*>/g, '') || '';

		return (
			<>
				<BreadcrumbSchema
					items={[
						{ name: 'Главная', url: '/' },
						{ name: 'Каталог', url: '/catalog' },
						{ name: categoryData.title, url: '/catalog/' + category },
					]}
				/>
				<ProductSchema
					name={dessert.title}
					description={plainDescription}
					image={mainImage}
					category={categoryData.title}
				/>
				<div className="py-16">
					<div className="container mx-auto px-4">
						<Breadcrumbs
							items={[
								{ label: 'Каталог', href: '/catalog' },
								{ label: categoryData.title },
							]}
						/>

						<div className="grid gap-12 lg:grid-cols-2 mt-8">
							<AnimatedFadeIn direction="left">
								<div className="relative aspect-square overflow-hidden rounded-2xl shadow-xl">
									<Image
										src={mainImage}
										alt={dessert.title}
										fill
										className="object-cover"
										sizes="(max-width: 1024px) 100vw, 50vw"
										priority
									/>
								</div>
								{dessert.images.length > 1 && (
									<div className="mt-4 grid grid-cols-4 gap-2">
										{dessert.images.slice(1, 5).map((img, i) => (
											<div key={i} className="relative aspect-square overflow-hidden rounded-lg">
												<Image
													src={img}
													alt={dessert.title + ' ' + (i + 2)}
													fill
													className="object-cover"
													sizes="100px"
												/>
											</div>
										))}
									</div>
								)}
							</AnimatedFadeIn>

							<AnimatedFadeIn direction="right">
								<div>
									<h1 className="text-3xl font-bold text-foreground md:text-4xl">
										{dessert.title}
									</h1>

									{dessert.description && (
										<div
											className="mt-6 prose prose-neutral max-w-none text-muted-foreground [&>p]:mb-4"
											dangerouslySetInnerHTML={{ __html: dessert.description }}
										/>
									)}

									<Separator className="my-8" />

									{dessert.composition && (
										<div className="mb-8">
											<h2 className="text-xl font-semibold text-foreground mb-4">
												Состав
											</h2>
											<div
												className="prose prose-neutral max-w-none text-muted-foreground [&>ul]:list-disc [&>ul]:pl-5"
												dangerouslySetInnerHTML={{ __html: dessert.composition }}
											/>
										</div>
									)}

									{dessert.features && dessert.features.length > 0 && (
										<div className="mb-8">
											<h2 className="text-xl font-semibold text-foreground mb-4">
												Характеристики
											</h2>
											<div className="space-y-3">
												{dessert.features.map((feature, i) => (
													<div
														key={i}
														className="flex justify-between items-center py-2 border-b border-border"
													>
														<span className="text-muted-foreground">
															{feature.name}
														</span>
														<span className="font-medium text-foreground">
															{feature.value}
														</span>
													</div>
												))}
											</div>
										</div>
									)}

									<Card className="border-primary/20 bg-primary/5">
										<CardContent className="p-6">
											<h3 className="text-lg font-semibold text-foreground mb-2">
												Хотите заказать?
											</h3>
											<p className="text-muted-foreground mb-4">
												Напишите мне, чтобы обсудить детали заказа
											</p>
											<CTAButton variant="both" />
										</CardContent>
									</Card>
								</div>
							</AnimatedFadeIn>
						</div>
					</div>
				</div>
			</>
		);
	}

	return (
		<>
			<BreadcrumbSchema
				items={[
					{ name: 'Главная', url: '/' },
					{ name: 'Каталог', url: '/catalog' },
					{ name: categoryData.title, url: '/catalog/' + category },
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
						<AnimatedStagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 p-4 -m-4">
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
