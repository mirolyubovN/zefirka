import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Gift, Heart, Package, Sparkles, Star, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CTAButton, CTAButtonGroup } from '@/components/cta-button';
import { SectionTitle } from '@/components/section-title';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { BreadcrumbSchema } from '@/components/structured-data';
import { PortfolioGrid } from '@/components/portfolio-grid';
import {
	AnimatedFadeIn,
	AnimatedStagger,
	AnimatedStaggerItem,
} from '@/components/animated-fade-in';
import { SITE_URL } from '@/lib/constants';

// Gift gallery images
const giftGallery = Array.from({ length: 19 }, (_, i) => ({
	id: i + 1,
	image: `/images/gifts/gift-${i + 1}.webp`,
}));

export const metadata: Metadata = {
	title: 'Подарочные наборы сладостей — Идеи для подарков | Костанай',
	description: 'Ищете идеи для подарков? Подарочные наборы натуральных сладостей ручной работы: зефир, птичье молоко, трюфели, профитроли. Идеальный подарок на день рождения, 8 марта, Новый год в Костанае.',
	keywords: [
		'идеи для подарков',
		'подарочные наборы сладостей',
		'подарок на день рождения',
		'подарок на 8 марта',
		'подарок на новый год',
		'сладкий подарок Костанай',
		'корпоративные подарки',
		'подарочный набор десертов',
		'что подарить',
		'оригинальный подарок',
	],
	alternates: {
		canonical: '/podarochnye-nabory',
	},
	openGraph: {
		title: 'Подарочные наборы сладостей — Идеи для подарков',
		description: 'Ищете идеи для подарков? Красивые наборы натуральных сладостей ручной работы. Идеальный подарок для близких в Костанае.',
		images: ['/images/portfolio/work-50.webp'],
		url: `${SITE_URL}/podarochnye-nabory`,
	},
};

const occasions = [
	{
		title: 'День рождения',
		description: 'Сладкий подарок, который точно порадует именинника',
		icon: Star,
	},
	{
		title: '8 Марта',
		description: 'Нежные десерты для любимых женщин',
		icon: Heart,
	},
	{
		title: 'Новый год',
		description: 'Праздничные наборы для уютных зимних вечеров',
		icon: Sparkles,
	},
	{
		title: 'Корпоративные',
		description: 'Впечатляющие подарки для партнёров и коллег',
		icon: Package,
	},
];

const giftSets = [
	{
		title: 'Набор "Классика"',
		description: 'Ассорти из зефира разных вкусов — яблочный, ягодный, цитрусовый',
		items: ['Зефир классический', 'Зефир ягодный', 'Зефир фруктовый'],
		image: '/images/gifts/gift-10.webp',
		link: '/catalog/zefir',
	},
	{
		title: 'Набор "Птичье молоко"',
		description: 'Нежнейшее суфле с разными вкусами',
		items: ['Классическое', 'Шоколадное', 'Фисташковое', 'Кофейное', 'Кокосовое', 'Фруктово-ягодное'],
		image: '/images/gifts/gift-1.webp',
		link: '/catalog/ptichye-moloko',
	},
	{
		title: 'Набор "Трюфели"',
		description: 'Премиальные шоколадные трюфели из бельгийского шоколада',
		items: ['Классические', 'С кокосом', 'С миндалём', 'С вафельной крошкой'],
		image: '/images/portfolio/work-44.webp',
		link: '/catalog/truffels',
	},
	{
		title: 'Набор "Ассорти"',
		description: 'Собери свой набор и любимых десертов',
		items: ['Зефир', 'Птичье молоко', 'Трюфели', 'Профитроли', 'Муссовые торты и пирожные', 'Торты'],
		image: '/images/portfolio/work-55.webp',
		link: '/catalog',
	},
];

function HeroSection() {
	return (
		<section className="relative overflow-hidden bg-gradient-to-b from-secondary/50 via-background to-background pt-8 pb-12 dark:from-secondary/20 lg:pt-16 lg:pb-24">
			<div className="absolute inset-0 overflow-hidden">
				<div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
				<div className="absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
			</div>

			<div className="container relative mx-auto px-4">
				<Breadcrumbs
					items={[
						{ label: 'Подарочные наборы' },
					]}
				/>
				<div className="mx-auto max-w-3xl text-center mt-8 lg:mt-12">
					<AnimatedFadeIn>
						<div className="mb-6 flex items-center justify-center gap-3">
							<span className="h-px w-12 bg-gradient-to-r from-transparent to-primary/60" />
							<span className="text-[11px] font-medium uppercase tracking-[0.4em] text-primary">
								Идеи для подарков
							</span>
							<span className="h-px w-12 bg-gradient-to-l from-transparent to-primary/60" />
						</div>
					</AnimatedFadeIn>

					<AnimatedFadeIn delay={0.1}>
						<h1 className="font-display text-4xl font-medium tracking-tight text-foreground sm:text-5xl lg:text-6xl">
							Подарочные наборы
							<br />
							<span className="text-primary">натуральных сладостей</span>
						</h1>
					</AnimatedFadeIn>

					<AnimatedFadeIn delay={0.2}>
						<p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
							Ищете идеи для подарков? Красивые наборы ручной работы — это всегда
							особенный и запоминающийся подарок для близких и коллег
						</p>
					</AnimatedFadeIn>

					<AnimatedFadeIn delay={0.3}>
						<CTAButtonGroup className="mt-8 justify-center" />
					</AnimatedFadeIn>
				</div>
			</div>
		</section>
	);
}

function OccasionsSection() {
	return (
		<section className="py-12 lg:py-24">
			<div className="container mx-auto px-4">
				<SectionTitle
					title="Для любого случая"
					subtitle="Подарочные наборы подходят для всех праздников и событий"
				/>

				<AnimatedStagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 p-4 -m-4">
					{occasions.map((occasion, index) => {
						const Icon = occasion.icon;
						return (
							<AnimatedStaggerItem key={index}>
								<Card className="group h-full border-0 bg-secondary/30 shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 dark:bg-card/50">
									<CardContent className="p-6 text-center">
										<div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-primary/20 bg-primary/5 transition-colors duration-300 group-hover:border-primary/40 group-hover:bg-primary/10">
											<Icon className="h-7 w-7 text-primary" />
										</div>
										<h3 className="mb-2 font-display text-lg font-medium text-foreground">
											{occasion.title}
										</h3>
										<p className="text-sm leading-relaxed text-muted-foreground">
											{occasion.description}
										</p>
									</CardContent>
								</Card>
							</AnimatedStaggerItem>
						);
					})}
				</AnimatedStagger>
			</div>
		</section>
	);
}

function GiftSetsSection() {
	return (
		<section className="bg-secondary/30 py-12 dark:bg-card/30 lg:py-24">
			<div className="container mx-auto px-4">
				<SectionTitle
					title="Популярные наборы"
					subtitle="Выберите готовый набор или соберите свой уникальный подарок"
				/>

				<div className="grid gap-8 md:grid-cols-2">
					{giftSets.map((set, index) => (
						<AnimatedFadeIn key={index} delay={index * 0.1}>
							<Card className="group h-full overflow-hidden border-0 bg-background shadow-sm transition-all duration-300 hover:shadow-xl dark:bg-card">
								<div className="grid sm:grid-cols-2">
									<div className="relative aspect-square sm:aspect-auto">
										<Image
											src={set.image}
											alt={set.title}
											fill
											className="object-cover transition-transform duration-500 group-hover:scale-105"
											sizes="(max-width: 640px) 100vw, 50vw"
										/>
									</div>
									<CardContent className="flex flex-col justify-center p-6">
										<h3 className="mb-2 font-display text-xl font-medium text-foreground">
											{set.title}
										</h3>
										<p className="mb-4 text-sm text-muted-foreground">
											{set.description}
										</p>
										<ul className="mb-4 space-y-1">
											{set.items.map((item, i) => (
												<li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
													<span className="h-1 w-1 rounded-full bg-primary" />
													{item}
												</li>
											))}
										</ul>
										<Button
											asChild
											variant="outline"
											size="sm"
											className="mt-auto w-fit gap-2 rounded-full"
										>
											<Link href={set.link}>
												<span>Подробнее</span>
												<ArrowRight className="h-4 w-4" />
											</Link>
										</Button>
									</CardContent>
								</div>
							</Card>
						</AnimatedFadeIn>
					))}
				</div>
			</div>
		</section>
	);
}

function GallerySection() {
	return (
		<section className="py-12 lg:py-24">
			<div className="container mx-auto px-4">
				<SectionTitle
					title="Примеры наборов"
					subtitle="Посмотрите, как выглядят мои подарочные наборы"
				/>
				<PortfolioGrid items={giftGallery} />
			</div>
		</section>
	);
}

function WhyGiftSection() {
	return (
		<section className="py-12 lg:py-24">
			<div className="container mx-auto px-4">
				<div className="mx-auto max-w-3xl">
					<AnimatedFadeIn>
						<div className="text-center">
							<div className="mb-6 flex items-center justify-center gap-3">
								<span className="h-px w-8 bg-primary/60" />
								<Gift className="h-6 w-6 text-primary" />
								<span className="h-px w-8 bg-primary/60" />
							</div>
							<h2 className="font-display text-3xl font-medium tracking-tight text-foreground md:text-4xl">
								Почему мои наборы — идеальный подарок?
							</h2>
						</div>
					</AnimatedFadeIn>

					<AnimatedFadeIn delay={0.1}>
						<div className="mt-8 space-y-6 text-muted-foreground">
							<p className="text-lg leading-relaxed">
								<strong className="text-foreground">Натуральные ингредиенты.</strong> Все десерты
								готовятся из качественных натуральных продуктов без консервантов и искусственных
								красителей. Это подарок, который не только вкусный, но и безопасный.
							</p>
							<p className="text-lg leading-relaxed">
								<strong className="text-foreground">Ручная работа.</strong> Каждое изделие
								создаётся вручную с любовью и вниманием к деталям. Получатель сразу почувствует,
								что это не магазинная сладость.
							</p>
							<p className="text-lg leading-relaxed">
								<strong className="text-foreground">Красивая упаковка.</strong> Наборы собираются
								в стильные коробки и украшаются лентами. Подарок готов — останется только вручить!
							</p>
							<p className="text-lg leading-relaxed">
								<strong className="text-foreground">Индивидуальный подход.</strong> Можете собрать
								свой уникальный набор из любых десертов. Напишите мне, и мы подберём идеальную
								комбинацию под ваш бюджет и пожелания.
							</p>
						</div>
					</AnimatedFadeIn>
				</div>
			</div>
		</section>
	);
}

function CTASection() {
	return (
		<section className="relative overflow-hidden bg-foreground py-12 text-background dark:bg-card lg:py-24">
			<div className="absolute inset-0 overflow-hidden">
				<div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
				<div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
			</div>

			<div className="container relative mx-auto px-4 text-center">
				<AnimatedFadeIn>
					<div className="mb-4 flex items-center justify-center gap-3 lg:mb-6">
						<span className="h-px w-8 bg-gradient-to-r from-transparent to-primary/60" />
						<span className="text-[10px] font-medium uppercase tracking-[0.4em] text-primary">
							Заказать подарок
						</span>
						<span className="h-px w-8 bg-gradient-to-l from-transparent to-primary/60" />
					</div>

					<h2 className="font-display text-3xl font-medium tracking-tight dark:text-foreground md:text-4xl">
						Готовы порадовать близких?
					</h2>
					<p className="mx-auto mt-4 max-w-xl text-lg text-background/70 dark:text-muted-foreground">
						Напишите мне, и мы вместе соберём идеальный подарочный набор
					</p>

					<div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row lg:mt-10 lg:gap-4">
						<a
							href="https://wa.me/77772714910"
							target="_blank"
							rel="noopener noreferrer"
							className="group inline-flex items-center justify-center gap-3 rounded-full bg-primary px-6 py-3 text-sm font-medium uppercase tracking-[0.2em] text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/25 lg:px-8 lg:py-4"
						>
							Написать в WhatsApp
						</a>
						<a
							href="https://t.me/zefirka_kst"
							target="_blank"
							rel="noopener noreferrer"
							className="group inline-flex items-center justify-center gap-3 rounded-full border-2 border-background/20 bg-transparent px-6 py-3 text-sm font-medium uppercase tracking-[0.2em] text-background transition-all duration-300 hover:border-primary hover:text-primary dark:border-foreground/20 dark:text-foreground dark:hover:border-primary dark:hover:text-primary lg:px-8 lg:py-4"
						>
							Написать в Telegram
						</a>
					</div>
				</AnimatedFadeIn>
			</div>
		</section>
	);
}

export default function GiftSetsPage() {
	return (
		<>
			<BreadcrumbSchema
				items={[
					{ name: 'Главная', url: '/' },
					{ name: 'Подарочные наборы', url: '/podarochnye-nabory' },
				]}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'ItemList',
						name: 'Подарочные наборы сладостей',
						description: 'Ищете идеи для подарков? Красивые наборы натуральных сладостей ручной работы: зефир, птичье молоко, трюфели, профитроли.',
						numberOfItems: giftSets.length,
						itemListElement: giftSets.map((set, index) => ({
							'@type': 'ListItem',
							position: index + 1,
							item: {
								'@type': 'Product',
								name: set.title,
								description: set.description,
								image: `${SITE_URL}${set.image}`,
								brand: {
									'@type': 'Brand',
									name: 'Zefirka',
								},
								offers: {
									'@type': 'Offer',
									availability: 'https://schema.org/InStock',
									priceCurrency: 'KZT',
									price: '5000',
									priceValidUntil: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0],
									seller: {
										'@type': 'Organization',
										name: 'Zefirka',
									},
								},
							},
						})),
					}),
				}}
			/>
			<HeroSection />
			<OccasionsSection />
			<GiftSetsSection />
			<GallerySection />
			<WhyGiftSection />
			<CTASection />
		</>
	);
}
