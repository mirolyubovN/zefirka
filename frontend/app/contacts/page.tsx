import type { Metadata } from 'next';
import { MessageCircle, Send, Instagram, MapPin, Clock, ArrowUpRight } from 'lucide-react';
import { SectionTitle } from '@/components/section-title';
import { Card, CardContent } from '@/components/ui/card';
import { AnimatedFadeIn, AnimatedStagger, AnimatedStaggerItem } from '@/components/animated-fade-in';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { BreadcrumbSchema } from '@/components/structured-data';
import { CONTACT_LINKS } from '@/lib/constants';

export const metadata: Metadata = {
	title: 'Контакты — Профитроли',
	description: 'Свяжитесь со мной через WhatsApp, Telegram или Instagram. Домашние десерты в Костанае.',
	alternates: {
		canonical: '/contacts',
	},
};

const contactMethods = [
	{
		name: 'WhatsApp',
		description: 'Быстрый способ связи для обсуждения заказа',
		href: CONTACT_LINKS.whatsapp,
		icon: MessageCircle,
	},
	{
		name: 'Telegram',
		description: 'Удобный мессенджер для подробных обсуждений',
		href: CONTACT_LINKS.telegram,
		icon: Send,
	},
	{
		name: 'Instagram',
		description: 'Следите за новинками и свежими работами',
		href: CONTACT_LINKS.instagram,
		icon: Instagram,
	},
];

export default function ContactsPage() {
	return (
		<>
			<BreadcrumbSchema
				items={[
					{ name: 'Главная', url: '/' },
					{ name: 'Контакты', url: '/contacts' },
				]}
			/>
			<div className="py-16">
				<div className="container mx-auto px-4">
					<Breadcrumbs
						items={[
							{ label: 'Контакты' },
						]}
					/>

					<SectionTitle
						title="Контакты"
						subtitle="Выберите удобный способ связи — я всегда рада новым заказам!"
					/>

					<AnimatedStagger className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto mb-20">
						{contactMethods.map((method) => {
							const Icon = method.icon;
							return (
								<AnimatedStaggerItem key={method.name}>
									<a
										href={method.href}
										target="_blank"
										rel="noopener noreferrer"
										className="group block h-full"
									>
										<Card className="h-full border-0 bg-card shadow-sm transition-all duration-500 hover:shadow-xl hover:shadow-primary/10">
											<CardContent className="p-8 text-center">
												<div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary/20 bg-primary/5 transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
													<Icon className="h-7 w-7 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
												</div>

												<h3 className="font-display text-xl font-medium text-foreground mb-3">
													{method.name}
												</h3>

												<p className="text-sm leading-relaxed text-muted-foreground mb-4">
													{method.description}
												</p>

												<div className="flex items-center justify-center gap-1 text-xs uppercase tracking-[0.2em] text-primary opacity-0 transition-all duration-300 group-hover:opacity-100">
													<span>Перейти</span>
													<ArrowUpRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
												</div>
											</CardContent>
										</Card>
									</a>
								</AnimatedStaggerItem>
							);
						})}
					</AnimatedStagger>

					<div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
						<AnimatedFadeIn>
							<Card className="h-full border-0 bg-card shadow-sm">
								<CardContent className="p-8">
									<div className="flex items-start gap-5">
										<div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/20 bg-primary/5 flex-shrink-0">
											<MapPin className="h-5 w-5 text-primary" />
										</div>
										<div>
											<h3 className="font-display text-xl font-medium text-foreground mb-3">
												Город Костанай
											</h3>
											<p className="text-muted-foreground leading-relaxed mb-4">
												Самовывоз или доставка Яндекс Доставкой по городу.
											</p>
											<ul className="space-y-2 text-sm text-muted-foreground">
												<li className="flex items-center gap-2">
													<span className="h-1 w-1 rounded-full bg-primary/60" />
													Самовывоз — бесплатно
												</li>
												<li className="flex items-center gap-2">
													<span className="h-1 w-1 rounded-full bg-primary/60" />
													Яндекс Доставка — по тарифам сервиса
												</li>
											</ul>
										</div>
									</div>
								</CardContent>
							</Card>
						</AnimatedFadeIn>

						<AnimatedFadeIn delay={0.1}>
							<Card className="h-full border-0 bg-card shadow-sm">
								<CardContent className="p-8">
									<div className="flex items-start gap-5">
										<div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/20 bg-primary/5 flex-shrink-0">
											<Clock className="h-5 w-5 text-primary" />
										</div>
										<div>
											<h3 className="font-display text-xl font-medium text-foreground mb-3">
												Время работы
											</h3>
											<p className="text-muted-foreground leading-relaxed mb-4">
												Принимаю заказы ежедневно с 9:00 до 21:00
											</p>
											<p className="text-sm text-muted-foreground/70">
												Отвечаю на сообщения в течение нескольких часов
											</p>
										</div>
									</div>
								</CardContent>
							</Card>
						</AnimatedFadeIn>
					</div>

					<AnimatedFadeIn delay={0.2}>
						<div className="mt-20 text-center">
							<p className="text-sm tracking-wide text-muted-foreground/60">
								Буду рада создать для вас особенный десерт
							</p>
						</div>
					</AnimatedFadeIn>
				</div>
			</div>
		</>
	);
}
