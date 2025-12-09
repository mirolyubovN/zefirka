import type { Metadata } from 'next';
import { getPortfolio } from '@/content';
import { SectionTitle } from '@/components/section-title';
import { PortfolioGrid } from '@/components/portfolio-grid';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { BreadcrumbSchema, ImageGallerySchema } from '@/components/structured-data';

export const metadata: Metadata = {
	title: 'Портфолио — Профитроли',
	description: 'Галерея работ: зефир, торты, птичье молоко и подарочные наборы ручной работы в Костанае',
	alternates: {
		canonical: '/portfolio',
	},
};

export default function PortfolioPage() {
	const portfolio = getPortfolio();

	return (
		<>
			<BreadcrumbSchema
				items={[
					{ name: 'Главная', url: '/' },
					{ name: 'Портфолио', url: '/portfolio' },
				]}
			/>
			{portfolio.length > 0 && (
				<ImageGallerySchema
					images={portfolio}
				/>
			)}
			<div className="py-8 lg:py-16">
				<div className="container mx-auto px-4">
					<Breadcrumbs
						items={[
							{ label: 'Портфолио' },
						]}
					/>

					<SectionTitle
						title="Портфолио"
						subtitle="Мои работы — натуральные десерты, созданные с любовью"
					/>
					{portfolio.length === 0 ? (
						<div className="text-center py-12">
							<p className="text-lg text-muted-foreground">
								Портфолио пока пустое
							</p>
						</div>
					) : (
						<PortfolioGrid items={portfolio} />
					)}
				</div>
			</div>
		</>
	);
}
