import type { Metadata } from 'next';
import { getReviews } from '@/content';
import { SectionTitle } from '@/components/section-title';
import { ReviewCard } from '@/components/review-card';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { BreadcrumbSchema, AggregateReviewSchema } from '@/components/structured-data';
import {
	AnimatedFadeIn,
	AnimatedStagger,
	AnimatedStaggerItem,
} from '@/components/animated-fade-in';
import { CTAButton } from '@/components/cta-button';
import { Card, CardContent } from '@/components/ui/card';

export const metadata: Metadata = {
	title: 'Отзывы клиентов — Profiterole',
	description: 'Отзывы клиентов о натуральных десертах ручной работы в Костанае',
	alternates: {
		canonical: '/reviews',
	},
};

export default function ReviewsPage() {
	const reviews = getReviews();

	return (
		<>
			<BreadcrumbSchema
				items={[
					{ name: 'Главная', url: '/' },
					{ name: 'Отзывы', url: '/reviews' },
				]}
			/>
			{reviews.length > 0 && (
				<AggregateReviewSchema
					reviews={reviews}
				/>
			)}
			<div className="py-8 lg:py-16">
				<div className="container mx-auto px-4">
					<Breadcrumbs
						items={[
							{ label: 'Отзывы' },
						]}
					/>

					<SectionTitle
						title="Отзывы клиентов"
						subtitle="Что говорят те, кто уже попробовал мои десерты"
					/>
					{reviews.length === 0 ? (
						<div className="text-center py-12">
							<p className="text-lg text-muted-foreground">
								Отзывов пока нет
							</p>
						</div>
					) : (
						<AnimatedStagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 p-4 -m-4">
							{reviews.map((review) => (
								<AnimatedStaggerItem key={review.id}>
									<ReviewCard review={review} />
								</AnimatedStaggerItem>
							))}
						</AnimatedStagger>
					)}

					<AnimatedFadeIn delay={0.2}>
						<Card className="mt-16 border-primary/20 bg-primary/5 max-w-2xl mx-auto">
							<CardContent className="p-8 text-center">
								<h3 className="text-xl font-display font-medium text-foreground mb-3">
									Хотите попробовать?
								</h3>
								<p className="text-muted-foreground mb-6">
									Напишите мне, чтобы заказать десерт
								</p>
								<CTAButton variant="both" className="justify-center" />
							</CardContent>
						</Card>
					</AnimatedFadeIn>
				</div>
			</div>
		</>
	);
}
