'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home, RefreshCw, AlertTriangle } from 'lucide-react';

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	useEffect(() => {
		console.error('Application error:', error);
	}, [error]);

	return (
		<div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
			{/* Decorative background */}
			<div className="absolute inset-0 bg-gradient-to-b from-destructive/5 via-background to-background" />
			<div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-destructive/5 blur-3xl" />
			<div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />

			<div className="container relative mx-auto px-4 text-center">
				{/* Error icon */}
				<div className="relative mb-8">
					<span className="font-display text-[10rem] font-bold leading-none text-destructive/10 sm:text-[14rem]">
						500
					</span>
					<div className="absolute inset-0 flex items-center justify-center">
						<div className="rounded-full border border-destructive/20 bg-background/80 p-6 shadow-xl backdrop-blur-sm">
							<AlertTriangle className="h-12 w-12 text-destructive/60" />
						</div>
					</div>
				</div>

				{/* Message */}
				<h1 className="font-display text-3xl font-medium tracking-tight text-foreground md:text-4xl">
					Что-то пошло не так
				</h1>
				<p className="mx-auto mt-4 max-w-md text-lg text-muted-foreground">
					Произошла непредвиденная ошибка. Мы уже работаем над её исправлением
				</p>

				{/* Decorative line */}
				<div className="mx-auto my-8 flex items-center justify-center gap-3">
					<span className="h-px w-12 bg-gradient-to-r from-transparent to-destructive/30" />
					<span className="h-1.5 w-1.5 rounded-full bg-destructive/30" />
					<span className="h-px w-12 bg-gradient-to-l from-transparent to-destructive/30" />
				</div>

				{/* Actions */}
				<div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
					<Button
						onClick={reset}
						size="lg"
						className="group gap-2 rounded-full bg-primary px-8 text-sm font-medium uppercase tracking-wider hover:bg-primary/90"
					>
						<RefreshCw className="h-4 w-4 transition-transform group-hover:rotate-180" />
						<span>Попробовать снова</span>
					</Button>
					<Button
						asChild
						variant="outline"
						size="lg"
						className="group gap-2 rounded-full border-2 px-8 text-sm font-medium uppercase tracking-wider"
					>
						<Link href="/">
							<Home className="h-4 w-4" />
							<span>На главную</span>
						</Link>
					</Button>
				</div>

				{/* Contact suggestion */}
				<p className="mt-12 text-sm text-muted-foreground/60">
					Если ошибка повторяется,{' '}
					<Link href="/contacts" className="text-primary underline-offset-4 hover:underline">
						свяжитесь со мной
					</Link>
				</p>
			</div>
		</div>
	);
}
