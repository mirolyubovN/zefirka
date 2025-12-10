import type { Metadata } from 'next';
import { SectionTitle } from '@/components/section-title';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { BreadcrumbSchema } from '@/components/structured-data';
import { SITE_NAME, SITE_URL, CONTACT_LINKS } from '@/lib/constants';

export const metadata: Metadata = {
	title: 'Политика конфиденциальности',
	description: 'Политика конфиденциальности сайта Zefirka. Информация об использовании Яндекс Метрики.',
	alternates: {
		canonical: '/privacy',
	},
};

export default function PrivacyPage() {
	return (
		<>
			<BreadcrumbSchema
				items={[
					{ name: 'Главная', url: '/' },
					{ name: 'Политика конфиденциальности', url: '/privacy' },
				]}
			/>
			<div className="py-8 lg:py-16">
				<div className="container mx-auto px-4">
					<Breadcrumbs
						items={[
							{ label: 'Политика конфиденциальности' },
						]}
					/>

					<SectionTitle
						title="Политика конфиденциальности"
					/>

					<div className="prose prose-neutral max-w-3xl mx-auto dark:prose-invert">
						<section className="mb-8">
							<h2 className="text-xl font-semibold mb-4">1. Общие положения</h2>
							<p>
								Настоящая Политика конфиденциальности описывает, какие данные собираются
								на сайте {SITE_NAME} ({SITE_URL}) и как они используются.
							</p>
							<p>
								Владелец сайта: Миролюбов Никита.
							</p>
						</section>

						<section className="mb-8">
							<h2 className="text-xl font-semibold mb-4">2. Сбор данных</h2>

							<h3 className="text-lg font-medium mt-6 mb-3">2.1. Яндекс Метрика</h3>
							<p>
								Для анализа посещаемости сайта используется сервис Яндекс Метрика,
								который автоматически собирает:
							</p>
							<ul className="list-disc pl-6 space-y-2">
								<li>IP-адрес</li>
								<li>Информацию о браузере и устройстве</li>
								<li>Посещённые страницы</li>
								<li>Источник перехода</li>
								<li>Примерное местоположение (город)</li>
							</ul>
							<p className="mt-4">
								Эти данные используются исключительно для улучшения работы сайта
								и не передаются третьим лицам, кроме ТОО «Яндекс.Казахстан».
							</p>
							<p className="mt-2">
								Политика конфиденциальности Яндекса:{' '}
								<a
									href="https://yandex.ru/legal/confidential/"
									target="_blank"
									rel="noopener noreferrer"
									className="text-primary hover:underline"
								>
									yandex.ru/legal/confidential
								</a>
							</p>

							<h3 className="text-lg font-medium mt-6 mb-3">2.2. Данные, которые мы НЕ собираем</h3>
							<p>
								На сайте нет форм регистрации, заказа или подписки.
								Мы не собираем имена, email, телефоны или платёжные данные.
							</p>
							<p className="mt-2">
								Связь происходит через сторонние мессенджеры (WhatsApp, Telegram, Instagram),
								которые имеют собственные политики конфиденциальности.
							</p>
						</section>

						<section className="mb-8">
							<h2 className="text-xl font-semibold mb-4">3. Отказ от сбора данных</h2>
							<p>Вы можете отказаться от сбора данных:</p>
							<ul className="list-disc pl-6 space-y-2">
								<li>Отключив cookie в настройках браузера</li>
								<li>
									Установив{' '}
									<a
										href="https://yandex.ru/support/metrika/general/opt-out.html"
										target="_blank"
										rel="noopener noreferrer"
										className="text-primary hover:underline"
									>
										расширение блокировки Яндекс Метрики
									</a>
								</li>
							</ul>
						</section>

						<section className="mb-8">
							<h2 className="text-xl font-semibold mb-4">4. Контакты</h2>
							<p>По вопросам конфиденциальности:</p>
							<ul className="list-disc pl-6 space-y-2 mt-2">
								<li>
									<a
										href={CONTACT_LINKS.whatsapp}
										target="_blank"
										rel="noopener noreferrer"
										className="text-primary hover:underline"
									>
										WhatsApp
									</a>
								</li>
								<li>
									<a
										href={CONTACT_LINKS.telegram}
										target="_blank"
										rel="noopener noreferrer"
										className="text-primary hover:underline"
									>
										Telegram
									</a>
								</li>
							</ul>
						</section>

						<section className="mb-8">
							<p className="text-sm text-muted-foreground">
								Политика разработана в соответствии с Законом РК «О персональных данных и их защите».
							</p>
						</section>
					</div>
				</div>
			</div>
		</>
	);
}
