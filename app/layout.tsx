import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter, Great_Vibes } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { PersonSchema, LocalBusinessSchema, WebsiteSchema } from "@/components/structured-data";
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

const greatVibes = Great_Vibes({
	variable: "--font-logo",
	subsets: ["latin"],
	weight: ["400"],
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
		default: `${SITE_NAME} — Премиальные натуральные десерты ручной работы в Костанае`,
		template: `%s | ${SITE_NAME}`,
	},
	description: SITE_DESCRIPTION,
	keywords: [
		'зефир ручной работы Костанай',
		'натуральный зефир',
		'птичье молоко домашнее',
		'торты на заказ Костанай',
		'домашний кондитер',
		'домашний кондитер Костанай',
		'торты Костанай',
		'десерты Костанай',
		'подарки Костанай',
		'цветы Костанай',
		'подарок на 8 марта',
		'подарок на новый год',
		'трюфели Костанай',
		'профитроли Костанай',
		'печенье Костанай',
	],
	metadataBase: new URL(SITE_URL),
	alternates: {
		canonical: '/',
	},
	openGraph: {
		title: `${SITE_NAME} — Премиальные десерты ручной работы | Костанай`,
		description: SITE_DESCRIPTION,
		url: SITE_URL,
		siteName: SITE_NAME,
		locale: "ru_RU",
		type: "website",
		images: [
			{
				url: '/images/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Profiterole — Премиальные натуральные десерты в Костанае',
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: SITE_NAME,
		description: SITE_DESCRIPTION,
		images: ['/images/og-image.jpg'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	other: {
		'format-detection': 'telephone=no',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ru">
			<head>
				<PersonSchema />
				<LocalBusinessSchema />
				<WebsiteSchema />
			</head>
			<body className={`${cormorant.variable} ${inter.variable} ${greatVibes.variable} font-sans antialiased`}>
				<ThemeProvider defaultTheme="light" storageKey="profiterole-theme">
					<Header />
					<main className="min-h-screen">{children}</main>
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
