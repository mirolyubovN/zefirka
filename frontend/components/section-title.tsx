import { cn } from '@/lib/utils';
import { AnimatedFadeIn } from './animated-fade-in';

interface SectionTitleProps {
	title: string;
	subtitle?: string;
	className?: string;
	align?: 'left' | 'center' | 'right';
	animated?: boolean;
}

export function SectionTitle({
	title,
	subtitle,
	className,
	align = 'center',
	animated = true,
}: SectionTitleProps) {
	const alignClasses = {
		left: 'text-left items-start',
		center: 'text-center items-center',
		right: 'text-right items-end',
	};

	const content = (
		<div className={cn('mb-16 flex flex-col gap-4', alignClasses[align], className)}>
			{/* Decorative element */}
			<div className="flex items-center gap-3">
				<span className="h-px w-8 bg-gradient-to-r from-transparent to-primary/60" />
				<span className="text-[10px] font-medium uppercase tracking-[0.3em] text-primary">
					Profiterole
				</span>
				<span className="h-px w-8 bg-gradient-to-l from-transparent to-primary/60" />
			</div>

			{/* Title */}
			<h2 className="font-display text-3xl font-medium tracking-tight text-foreground md:text-4xl lg:text-5xl">
				{title}
			</h2>

			{/* Subtitle */}
			{subtitle && (
				<p className="max-w-xl text-base text-muted-foreground md:text-lg">
					{subtitle}
				</p>
			)}
		</div>
	);

	if (!animated) return content;

	return <AnimatedFadeIn>{content}</AnimatedFadeIn>;
}
