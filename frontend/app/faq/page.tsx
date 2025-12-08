import type { Metadata } from 'next';
import { getFaqs } from '@/content';
import { SectionTitle } from '@/components/section-title';
import { AnimatedFadeIn } from '@/components/animated-fade-in';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { BreadcrumbSchema, FAQSchema } from '@/components/structured-data';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';

export const metadata: Metadata = {
	title: 'Часто задаваемые вопросы — Профитроли',
	description: 'Ответы на популярные вопросы о натуральных десертах, заказах и доставке в Костанае',
	alternates: {
		canonical: '/faq',
	},
};

export default function FaqPage() {
	const faqs = getFaqs();

	return (
		<>
			<BreadcrumbSchema
				items={[
					{ name: 'Главная', url: '/' },
					{ name: 'Часто задаваемые вопросы', url: '/faq' },
				]}
			/>
			{faqs.length > 0 && (
				<FAQSchema
					faqs={faqs}
				/>
			)}
			<div className="py-16">
				<div className="container mx-auto px-4">
					<Breadcrumbs
						items={[
							{ label: 'Часто задаваемые вопросы' },
						]}
					/>

					<SectionTitle
						title="Часто задаваемые вопросы"
						subtitle="Ответы на популярные вопросы о десертах и заказах"
					/>
					{faqs.length === 0 ? (
						<div className="text-center py-12">
							<p className="text-lg text-muted-foreground">
								Вопросы и ответы скоро появятся
							</p>
						</div>
					) : (
						<AnimatedFadeIn>
							<Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
								{faqs.map((faq, index) => (
									<AccordionItem key={faq.id} value={'item-' + index}>
										<AccordionTrigger className="text-left text-lg">
											{faq.question}
										</AccordionTrigger>
										<AccordionContent className="text-muted-foreground leading-relaxed">
											{faq.answer}
										</AccordionContent>
									</AccordionItem>
								))}
							</Accordion>
						</AnimatedFadeIn>
					)}
				</div>
			</div>
		</>
	);
}
