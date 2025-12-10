import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { PersonSchema, LocalBusinessSchema, WebsiteSchema } from "@/components/structured-data";
import { YandexMetrica } from "@/components/yandex-metrica";
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from "@/lib/constants";

const cormorant = Cormorant_Garamond({
	variable: "--font-display",
	subsets: ["latin", "cyrillic"],
	weight: ["400", "500", "600", "700"],
	display: "swap",
	preload: true,
});

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin", "cyrillic"],
	weight: ["400", "500", "600", "700"],
	display: "swap",
	preload: true,
});

export const viewport: Viewport = {
	width: 'device-width',
	initialScale: 1,
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: '#f8f6f3' },
		{ media: '(prefers-color-scheme: dark)', color: '#1a1816' },
	],
};

export const metadata: Metadata = {
	title: {
		default: `${SITE_NAME} — Натуральные десерты ручной работы | Костанай`,
		template: `%s | ${SITE_NAME}`,
	},
	description: SITE_DESCRIPTION,
	icons: {
		icon: [
			{ url: '/favicon.ico', sizes: 'any' },
			{ url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
			{ url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
		],
		apple: [
			{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
		],
		other: [
			{ rel: 'manifest', url: '/site.webmanifest' },
		],
	},
	authors: [{ name: 'Оксана', url: SITE_URL }],
	creator: 'Оксана',
	publisher: SITE_NAME,
	keywords: [
		// Primary keywords
		'десерты Костанай',
		'торты на заказ Костанай',
		'домашний кондитер Костанай',
		'зефир ручной работы',
		// Long-tail keywords
		'натуральный зефир без красителей',
		'птичье молоко домашнее Костанай',
		'муссовые торты на заказ',
		'бельгийские трюфели ручной работы',
		'профитроли с кремом Костанай',
		// Occasion-based keywords
		'торт на день рождения Костанай',
		'десерты на праздник',
		'подарочные наборы сладостей',
		// Local variations
		'кондитер Костанай',
		'сладости на заказ Костанай',
	],
	metadataBase: new URL(SITE_URL),
	alternates: {
		canonical: '/',
		languages: {
			'ru-RU': '/',
			'ru-KZ': '/',
		},
	},
	openGraph: {
		title: `${SITE_NAME} — Натуральные десерты ручной работы`,
		description: SITE_DESCRIPTION,
		url: SITE_URL,
		siteName: SITE_NAME,
		locale: "ru_RU",
		type: "website",
		images: [
			{
				url: `${SITE_URL}/images/og-image.webp`,
				width: 1200,
				height: 630,
				alt: 'Zefirka — Премиальные натуральные десерты в Костанае',
				type: 'image/webp',
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: `${SITE_NAME} — Десерты ручной работы`,
		description: SITE_DESCRIPTION,
		images: [`${SITE_URL}/images/og-image.webp`],
	},
	robots: {
		index: true,
		follow: true,
		nocache: false,
		googleBot: {
			index: true,
			follow: true,
			noimageindex: false,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	category: 'food',
	other: {
		'format-detection': 'telephone=no',
		// Yandex geo targeting
		'geo.region': 'KZ-KUS',
		'geo.placename': 'Костанай',
		'geo.position': '53.2144;63.6246',
		'ICBM': '53.2144, 63.6246',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ru" suppressHydrationWarning>
			<head>
				{/* Prevent theme flash - must be inline and blocking */}
				<script
					dangerouslySetInnerHTML={{
						__html: `
							(function() {
								try {
									var theme = localStorage.getItem('Zefirka-theme');
									if (theme === 'dark' || (theme !== 'light' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
										document.documentElement.classList.add('dark');
									}
								} catch (e) {}
							})();
						`,
					}}
				/>
				<PersonSchema />
				<LocalBusinessSchema />
				<WebsiteSchema />
			</head>
			<body className={`${cormorant.variable} ${inter.variable} font-sans antialiased`}>
				<ThemeProvider defaultTheme="system" storageKey="Zefirka-theme">
					<Header />
					<main className="min-h-screen">{children}</main>
					<Footer />
				</ThemeProvider>
				<YandexMetrica />
			</body>
		</html>
	);
}
