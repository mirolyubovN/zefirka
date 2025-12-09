import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getDessertBySlug, getCategoryBySlug, getDesserts } from '@/content';
import { CTAButton } from '@/components/cta-button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { AnimatedFadeIn } from '@/components/animated-fade-in';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { BreadcrumbSchema, ProductSchema } from '@/components/structured-data';

interface DessertPageProps {
	params: Promise<{
		category: string;
		slug: string;
	}>;
}

export async function generateStaticParams() {
	const desserts = getDesserts();
	return desserts.map((dessert) => ({
		category: dessert.categorySlug,
		slug: dessert.slug,
	}));
}

export async function generateMetadata({
	params,
}: DessertPageProps): Promise<Metadata> {
	const { category, slug } = await params;
	const dessert = getDessertBySlug(slug);

	if (!dessert) {
		return { title: 'Десерт не найден' };
	}

	const plainDescription = dessert.description?.replace(/<[^>]*>/g, '') || '';

	return {
		title: dessert.title + ' — Натуральные десерты ручной работы | Костанай',
		description: plainDescription.slice(0, 160) || dessert.title + ' от домашнего кондитера.',
		alternates: {
			canonical: '/catalog/' + category + '/' + slug,
		},
		openGraph: {
			title: dessert.title + ' | Профитроли',
			description: plainDescription.slice(0, 160),
			images: dessert.images[0] ? [dessert.images[0]] : undefined,
		},
	};
}

export default async function DessertPage({ params }: DessertPageProps) {
	const { category, slug } = await params;
	const dessert = getDessertBySlug(slug);
	const categoryData = getCategoryBySlug(category);

	if (!dessert || !categoryData) {
		notFound();
	}

	const mainImage = dessert.images[0] || '/placeholder.svg';
	const plainDescription = dessert.description?.replace(/<[^>]*>/g, '') || '';

	return (
		<>
			<BreadcrumbSchema
				items={[
					{ name: 'Главная', url: '/' },
					{ name: 'Каталог', url: '/catalog' },
					{ name: categoryData.title, url: '/catalog/' + category },
					{ name: dessert.title, url: '/catalog/' + category + '/' + slug },
				]}
			/>
			<ProductSchema
				name={dessert.title}
				description={plainDescription}
				image={mainImage}
				category={categoryData.title}
			/>
			<div className="py-8 lg:py-16">
				<div className="container mx-auto px-4">
					<Breadcrumbs
						items={[
							{ label: 'Каталог', href: '/catalog' },
							{ label: categoryData.title, href: '/catalog/' + category },
							{ label: dessert.title },
						]}
					/>

					<div className="grid gap-12 lg:grid-cols-2">
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
