import Image from 'next/image';
import Link from 'next/link';
import { Leaf, Heart, Sparkles, Gift, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
	AnimatedFadeIn,
	AnimatedStagger,
	AnimatedStaggerItem,
} from '@/components/animated-fade-in';
import { SectionTitle } from '@/components/section-title';
import { CTAButtonGroup } from '@/components/cta-button';
import { CategoryCard } from '@/components/category-card';
import { ReviewCarousel } from '@/components/review-carousel';
import { PortfolioGrid } from '@/components/portfolio-grid';
import { WHY_CHOOSE_US } from '@/lib/constants';
import {
	getCategories,
	getPortfolio,
	getReviews,
	getAbout,
} from '@/content';

const iconMap = {
	leaf: Leaf,
	heart: Heart,
	sparkles: Sparkles,
	gift: Gift,
};

// Hero Section - Premium Editorial Style
function HeroSection() {
	return (
		<section className="relative min-h-[90vh] w-full overflow-hidden">
			{/* Gradient background */}
			<div className="absolute inset-0 bg-gradient-to-b from-secondary/50 via-background to-background dark:from-secondary/20" />

			{/* Decorative elements */}
			<div className="absolute inset-0 overflow-hidden">
				<div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
				<div className="absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
				<div className="absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
			</div>

			{/* Content */}
			<div className="container relative mx-auto flex min-h-[90vh] flex-col items-center justify-center px-4 pb-32 pt-20 text-center sm:pb-20">
				{/* Brand tag */}
				<AnimatedFadeIn>
					<div className="mb-8 flex items-center gap-3">
						<span className="h-px w-12 bg-gradient-to-r from-transparent to-primary/60" />
						<span className="text-[11px] font-medium uppercase tracking-[0.4em] text-primary">
							Десерты с premium начинками
						</span>
						<span className="h-px w-12 bg-gradient-to-l from-transparent to-primary/60" />
					</div>
				</AnimatedFadeIn>

				{/* Main headline */}
				<AnimatedFadeIn delay={0.1}>
					<h1 className="max-w-4xl font-display text-4xl font-medium tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
						Натуральные десерты{' '}
						<span className="relative">
							<span className="text-primary">ручной работы</span> в Костанае
							<span className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
						</span>
					</h1>
				</AnimatedFadeIn>

				{/* Subtitle */}
				<AnimatedFadeIn delay={0.2}>
					<p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
						Изысканный зефир, муссовые торты, трюфели, профитроли и нежнейшее птичье молоко
						из лучших натуральных ингредиентов
					</p>
				</AnimatedFadeIn>

				{/* CTA Buttons */}
				<AnimatedFadeIn delay={0.3}>
					<CTAButtonGroup className="mt-12" />
				</AnimatedFadeIn>

				{/* Scroll indicator - hidden on mobile to prevent overlap */}
				<div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 opacity-50 sm:block">
					<div className="flex flex-col items-center gap-2 text-muted-foreground">
						<span className="text-[10px] uppercase tracking-[0.3em]">Листайте</span>
						<div className="h-12 w-px bg-gradient-to-b from-muted-foreground/30 to-transparent" />
					</div>
				</div>
			</div>
		</section>
	);
}

// Categories Section
function CategoriesSection() {
	const categories = getCategories();

	return (
		<section className="py-24 lg:py-32">
			<div className="container mx-auto px-4">
				<SectionTitle
					title="Категории десертов"
					subtitle="Выберите то, что по душе именно вам"
				/>
				<AnimatedStagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 p-4 -m-4">
					{categories.map((category) => (
						<AnimatedStaggerItem key={category.id}>
							<CategoryCard category={category} />
						</AnimatedStaggerItem>
					))}
				</AnimatedStagger>
			</div>
		</section>
	);
}

// Why Choose Us Section
function WhyChooseUsSection() {
	return (
		<section className="relative overflow-hidden bg-secondary/30 py-24 dark:bg-card/30 lg:py-32">
			{/* Decorative background */}
			<div className="absolute inset-0 bg-gradient-to-br from-primary/3 to-transparent" />

			<div className="container relative mx-auto px-4">
				<SectionTitle
					title="Почему выбирают меня"
					subtitle="Каждый десерт создаётся с любовью и заботой о вашем здоровье"
				/>
				<AnimatedStagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 p-4 -m-4">
					{WHY_CHOOSE_US.map((item, index) => {
						const Icon = iconMap[item.icon as keyof typeof iconMap];
						return (
							<AnimatedStaggerItem key={index}>
								<Card className="group h-full border-0 bg-background/80 shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 dark:bg-card/80">
									<CardContent className="p-8 text-center">
										<div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-primary/20 bg-primary/5 transition-colors duration-300 group-hover:border-primary/40 group-hover:bg-primary/10">
											<Icon className="h-6 w-6 text-primary" />
										</div>
										<h3 className="mb-3 font-display text-lg font-medium text-foreground">
											{item.title}
										</h3>
										<p className="text-sm leading-relaxed text-muted-foreground">
											{item.description}
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

// Portfolio Section
function PortfolioSection() {
	const portfolio = getPortfolio(8);

	return (
		<section className="py-24 lg:py-32">
			<div className="container mx-auto px-4">
				<SectionTitle
					title="Портфолио"
					subtitle="Мои работы говорят сами за себя"
				/>
				<PortfolioGrid items={portfolio} />
				<AnimatedFadeIn delay={0.2}>
					<div className="mt-12 text-center">
						<Button
							asChild
							variant="outline"
							size="lg"
							className="group gap-2 rounded-full border-2 border-foreground/15 px-8 hover:border-primary hover:text-primary dark:border-foreground/20"
						>
							<Link href="/portfolio">
								<span>Смотреть всё портфолио</span>
								<ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
							</Link>
						</Button>
					</div>
				</AnimatedFadeIn>
			</div>
		</section>
	);
}

// About Preview Section
function AboutPreviewSection() {
	const about = getAbout();

	return (
		<section className="relative overflow-hidden bg-secondary/30 py-24 dark:bg-card/30 lg:py-32">
			<div className="container mx-auto px-4">
				<div className="grid items-center gap-16 lg:grid-cols-2">
					<AnimatedFadeIn direction="left">
						<div className="relative">
							{/* Decorative frame */}
							<div className="absolute -inset-4 rounded-2xl border border-primary/10" />
							<div className="absolute -inset-8 rounded-3xl border border-primary/5" />

							<div className="relative aspect-[4/5] overflow-hidden rounded-xl">
								<Image
									src={about.photo}
									alt="Обо мне"
									fill
									className="object-cover"
									sizes="(max-width: 1024px) 100vw, 50vw"
								/>
								{/* Gradient overlay */}
								<div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
							</div>
						</div>
					</AnimatedFadeIn>

					<AnimatedFadeIn direction="right">
						<div>
							{/* Section tag */}
							<div className="mb-6 flex items-center gap-3">
								<span className="h-px w-8 bg-primary/60" />
								<span className="text-[10px] font-medium uppercase tracking-[0.3em] text-primary">
									Обо мне
								</span>
							</div>

							<h2 className="font-display text-3xl font-medium tracking-tight text-foreground md:text-4xl lg:text-5xl">
								История моих десертов
							</h2>

							<div
								className="mt-8 space-y-4 text-base leading-relaxed text-muted-foreground [&>p]:mb-4"
								dangerouslySetInnerHTML={{ __html: about.story }}
							/>

							<Button
								asChild
								size="lg"
								className="group mt-8 gap-2 rounded-full bg-primary px-8 text-sm font-medium uppercase tracking-[0.15em] hover:bg-foreground dark:hover:text-background"
							>
								<Link href="/about">
									<span>Узнать больше</span>
									<ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
								</Link>
							</Button>
						</div>
					</AnimatedFadeIn>
				</div>
			</div>
		</section>
	);
}

// Reviews Section
function ReviewsSection() {
	const reviews = getReviews();

	return (
		<section className="py-24 lg:py-32">
			<div className="container mx-auto px-4">
				<SectionTitle
					title="Отзывы клиентов"
					subtitle="Что говорят те, кто уже попробовал мои десерты"
				/>
				<AnimatedFadeIn>
					<ReviewCarousel reviews={reviews} />
				</AnimatedFadeIn>
			</div>
		</section>
	);
}

// CTA Section - Premium Style
function CTASection() {
	return (
		<section className="relative overflow-hidden bg-foreground py-24 text-background dark:bg-card lg:py-32">
			{/* Decorative elements */}
			<div className="absolute inset-0 overflow-hidden">
				<div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
				<div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
			</div>

			{/* Subtle grid pattern */}
			<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

			<div className="container relative mx-auto px-4 text-center">
				<AnimatedFadeIn>
					{/* Tag */}
					<div className="mb-8 flex items-center justify-center gap-3">
						<span className="h-px w-8 bg-gradient-to-r from-transparent to-primary/60" />
						<span className="text-[10px] font-medium uppercase tracking-[0.4em] text-primary">
							Заказать
						</span>
						<span className="h-px w-8 bg-gradient-to-l from-transparent to-primary/60" />
					</div>

					<h2 className="font-display text-3xl font-medium tracking-tight dark:text-foreground md:text-4xl lg:text-5xl">
						Готовы заказать десерт мечты?
					</h2>
					<p className="mx-auto mt-6 max-w-xl text-lg text-background/70 dark:text-muted-foreground">
						Напишите мне, и мы обсудим ваш идеальный десерт для любого события
					</p>

					{/* CTA Buttons - Inverted for dark section */}
					<div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
						<a
							href="https://wa.me/79001234567"
							target="_blank"
							rel="noopener noreferrer"
							className="group inline-flex items-center justify-center gap-3 rounded-full bg-primary px-8 py-4 text-sm font-medium uppercase tracking-[0.2em] text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/25"
						>
							Написать в WhatsApp
						</a>
						<a
							href="https://t.me/Profiterole_kz"
							target="_blank"
							rel="noopener noreferrer"
							className="group inline-flex items-center justify-center gap-3 rounded-full border-2 border-background/20 bg-transparent px-8 py-4 text-sm font-medium uppercase tracking-[0.2em] transition-all duration-300 hover:border-primary hover:text-primary dark:border-foreground/20 dark:text-foreground dark:hover:border-primary dark:hover:text-primary"
						>
							Написать в Telegram
						</a>
					</div>
				</AnimatedFadeIn>
			</div>
		</section>
	);
}

export default function HomePage() {
	return (
		<>
			<HeroSection />
			<CategoriesSection />
			<WhyChooseUsSection />
			<PortfolioSection />
			<AboutPreviewSection />
			<ReviewsSection />
			<CTASection />
		</>
	);
}
