import type { Metadata } from 'next';
import { getReviews } from '@/content';
import { SectionTitle } from '@/components/section-title';
import { ReviewCard } from '@/components/review-card';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { BreadcrumbSchema, AggregateReviewSchema } from '@/components/structured-data';
import {
	AnimatedStagger,
	AnimatedStaggerItem,
} from '@/components/animated-fade-in';

export const metadata: Metadata = {
	title: 'Отзывы клиентов — Профитроли',
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
			<div className="py-16">
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
						<AnimatedStagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
							{reviews.map((review) => (
								<AnimatedStaggerItem key={review.id}>
									<ReviewCard review={review} />
								</AnimatedStaggerItem>
							))}
						</AnimatedStagger>
					)}
				</div>
			</div>
		</>
	);
}
