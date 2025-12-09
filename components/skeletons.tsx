import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

export function CategoryCardSkeleton() {
	return (
		<Card className="overflow-hidden border-0 shadow-lg">
			<CardContent className="relative aspect-[4/3] p-0">
				<Skeleton className="h-full w-full" />
			</CardContent>
		</Card>
	);
}

export function DessertCardSkeleton() {
	return (
		<Card className="h-full overflow-hidden border shadow-md">
			<Skeleton className="aspect-square" />
			<CardContent className="p-5">
				<Skeleton className="h-6 w-3/4" />
				<Skeleton className="mt-2 h-4 w-full" />
				<Skeleton className="mt-1 h-4 w-2/3" />
			</CardContent>
		</Card>
	);
}

export function ReviewCardSkeleton() {
	return (
		<Card className="h-full border shadow-md">
			<CardContent className="p-6">
				<Skeleton className="h-8 w-8 mb-4" />
				<Skeleton className="h-4 w-full" />
				<Skeleton className="h-4 w-full mt-2" />
				<Skeleton className="h-4 w-3/4 mt-2" />
				<div className="mt-6 flex items-center gap-4">
					<Skeleton className="h-12 w-12 rounded-full" />
					<Skeleton className="h-5 w-24" />
				</div>
			</CardContent>
		</Card>
	);
}

export function PortfolioItemSkeleton() {
	return <Skeleton className="aspect-square rounded-lg" />;
}

export function PortfolioGridSkeleton({ count = 8 }: { count?: number }) {
	return (
		<div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
			{Array.from({ length: count }).map((_, i) => (
				<PortfolioItemSkeleton key={i} />
			))}
		</div>
	);
}

export function HeroSkeleton() {
	return (
		<div className="relative h-[80vh] min-h-[600px] w-full">
			<Skeleton className="h-full w-full" />
			<div className="absolute inset-0 flex items-center justify-center">
				<div className="text-center space-y-6 px-4">
					<Skeleton className="h-12 w-[400px] mx-auto" />
					<Skeleton className="h-6 w-[300px] mx-auto" />
					<div className="flex justify-center gap-4">
						<Skeleton className="h-12 w-40" />
						<Skeleton className="h-12 w-40" />
					</div>
				</div>
			</div>
		</div>
	);
}

export function PageHeaderSkeleton() {
	return (
		<div className="py-8 lg:py-16 text-center">
			<Skeleton className="h-12 w-64 mx-auto" />
			<Skeleton className="h-6 w-96 mx-auto mt-4" />
		</div>
	);
}
