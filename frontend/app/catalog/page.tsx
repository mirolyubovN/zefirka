import type { Metadata } from 'next';
import { getCategories } from '@/content';
import { CategoryCard } from '@/components/category-card';
import { SectionTitle } from '@/components/section-title';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { BreadcrumbSchema } from '@/components/structured-data';
import {
	AnimatedStagger,
	AnimatedStaggerItem,
} from '@/components/animated-fade-in';

export const metadata: Metadata = {
	title: 'Каталог десертов — Профитроли',
	description: 'Выберите категорию десертов: зефир, птичье молоко, торты, шоколад и подарочные наборы ручной работы в Костанае',
	alternates: {
		canonical: '/catalog',
	},
};

export default function CatalogPage() {
	const categories = getCategories();

	return (
		<>
			<BreadcrumbSchema
				items={[
					{ name: 'Главная', url: '/' },
					{ name: 'Каталог', url: '/catalog' },
				]}
			/>
			<div className="py-16">
				<div className="container mx-auto px-4">
					<Breadcrumbs
						items={[
							{ label: 'Каталог' },
						]}
					/>

					<SectionTitle
						title="Каталог десертов"
						subtitle="Выберите категорию, чтобы увидеть все доступные десерты"
					/>
					<AnimatedStagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 p-4 -m-4">
						{categories.map((category) => (
							<AnimatedStaggerItem key={category.id}>
								<CategoryCard category={category} />
							</AnimatedStaggerItem>
						))}
					</AnimatedStagger>
				</div>
			</div>
		</>
	);
}
