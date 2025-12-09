import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedFadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
}

const directionClasses = {
  up: 'animate-fade-in-up',
  down: 'animate-fade-in-down',
  left: 'animate-fade-in-left',
  right: 'animate-fade-in-right',
  none: 'animate-fade-in',
};

export function AnimatedFadeIn({
  children,
  className,
  delay = 0,
  direction = 'up',
  duration = 0.6,
}: AnimatedFadeInProps) {
  return (
    <div
      className={cn(directionClasses[direction], className)}
      style={{
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
      }}
    >
      {children}
    </div>
  );
}

export function AnimatedStagger({
  children,
  className,
  staggerDelay = 0.1,
}: {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}) {
  return (
    <div className={cn('stagger-container', className)} style={{ '--stagger-delay': `${staggerDelay}s` } as React.CSSProperties}>
      {children}
    </div>
  );
}

export function AnimatedStaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('stagger-item animate-fade-in-up', className)}>
      {children}
    </div>
  );
}
