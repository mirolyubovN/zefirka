import type { Metadata } from 'next';
import Image from 'next/image';
import { getAbout } from '@/content';
import { SectionTitle } from '@/components/section-title';
import { AnimatedFadeIn } from '@/components/animated-fade-in';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { BreadcrumbSchema } from '@/components/structured-data';
import { CertificatesGallery } from '@/components/certificates-gallery';

export const metadata: Metadata = {
	title: 'Обо мне — Профитроли',
	description: 'История домашнего кондитера в Костанае. Философия натуральных десертов и сертификаты качества.',
	alternates: {
		canonical: '/about',
	},
};

export default function AboutPage() {
	const about = getAbout();

	return (
		<>
			<BreadcrumbSchema
				items={[
					{ name: 'Главная', url: '/' },
					{ name: 'Обо мне', url: '/about' },
				]}
			/>
			<div className="py-8 lg:py-16">
				<div className="container mx-auto px-4">
					<Breadcrumbs
						items={[
							{ label: 'Обо мне' },
						]}
					/>

					<SectionTitle
						title="Обо мне"
						subtitle="Познакомьтесь с человеком за вашими любимыми десертами"
					/>

					<div className="grid items-center gap-12 lg:grid-cols-3 mb-20">
						<AnimatedFadeIn direction="left">
							<div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-xl">
								<Image
									src={about.photo}
									alt="Обо мне"
									fill
									className="object-cover"
									sizes="(max-width: 1024px) 100vw, 50vw"
									priority
								/>
							</div>
						</AnimatedFadeIn>

						<div className='lg:col-span-2'>
							<AnimatedFadeIn direction="right">
								<div>
									<h2 className="text-2xl font-bold text-foreground mb-6">
										Моя история
									</h2>
									<div
										className="prose prose-neutral max-w-none text-muted-foreground prose-p:leading-relaxed [&>p]:mb-4"
										dangerouslySetInnerHTML={{ __html: about.story }}
									/>
								</div>
							</AnimatedFadeIn>
						</div>
					</div>

					<AnimatedFadeIn>
						<div className="bg-secondary/30 rounded-2xl p-8 md:p-12 mb-20">
							<h2 className="text-2xl font-bold text-foreground mb-6 text-center">
								Моя философия
							</h2>
							<div
								className="prose prose-neutral max-w-3xl mx-auto text-muted-foreground prose-p:leading-relaxed text-center [&>p]:mb-4"
								dangerouslySetInnerHTML={{ __html: about.philosophy }}
							/>
						</div>
					</AnimatedFadeIn>

					{about.certificates && about.certificates.length > 0 && (
						<AnimatedFadeIn>
							<div>
								<h2 className="text-2xl font-bold text-foreground mb-8 text-center">
									Сертификаты
								</h2>
								<CertificatesGallery certificates={about.certificates} />
							</div>
						</AnimatedFadeIn>
					)}
				</div>
			</div>
		</>
	);
}
