'use client';

import { Button } from '@/components/ui/button';
import { CONTACT_LINKS } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { MessageCircle, Send, ArrowUpRight } from 'lucide-react';

interface CTAButtonProps {
  variant?: 'whatsapp' | 'telegram' | 'both';
  size?: 'default' | 'sm' | 'lg';
  className?: string;
  showIcon?: boolean;
}

export function CTAButton({
  variant = 'whatsapp',
  size = 'default',
  className,
  showIcon = true,
}: CTAButtonProps) {
  if (variant === 'both') {
    return (
      <div className={cn('flex flex-wrap gap-4', className)}>
        <a
          href={CONTACT_LINKS.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            'group relative inline-flex items-center gap-3 overflow-hidden',
            'rounded-full border border-foreground/20 bg-transparent px-6 py-3',
            'text-sm font-medium tracking-wide text-foreground',
            'transition-all duration-500 ease-out',
            'hover:border-primary hover:bg-primary hover:text-primary-foreground',
            'hover:shadow-lg hover:shadow-primary/20',
            'dark:border-foreground/15 dark:hover:shadow-primary/10'
          )}
        >
          {showIcon && (
            <MessageCircle className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
          )}
          <span>WhatsApp</span>
          <ArrowUpRight className="h-3 w-3 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
        <a
          href={CONTACT_LINKS.telegram}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            'group relative inline-flex items-center gap-3 overflow-hidden',
            'rounded-full border border-foreground/20 bg-transparent px-6 py-3',
            'text-sm font-medium tracking-wide text-foreground',
            'transition-all duration-500 ease-out',
            'hover:border-primary hover:bg-primary hover:text-primary-foreground',
            'hover:shadow-lg hover:shadow-primary/20',
            'dark:border-foreground/15 dark:hover:shadow-primary/10'
          )}
        >
          {showIcon && (
            <Send className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
          )}
          <span>Telegram</span>
          <ArrowUpRight className="h-3 w-3 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    );
  }

  const isWhatsApp = variant === 'whatsapp';
  const link = isWhatsApp ? CONTACT_LINKS.whatsapp : CONTACT_LINKS.telegram;
  const label = isWhatsApp ? 'Написать в WhatsApp' : 'Написать в Telegram';
  const Icon = isWhatsApp ? MessageCircle : Send;

  const sizeClasses = {
    sm: 'px-4 py-2 text-xs',
    default: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'group relative inline-flex items-center gap-3 overflow-hidden',
        'rounded-full border border-foreground/20 bg-transparent',
        'font-medium tracking-wide text-foreground',
        'transition-all duration-500 ease-out',
        'hover:border-primary hover:bg-primary hover:text-primary-foreground',
        'hover:shadow-lg hover:shadow-primary/20',
        'dark:border-foreground/15 dark:hover:shadow-primary/10',
        sizeClasses[size],
        className
      )}
    >
      {showIcon && (
        <Icon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
      )}
      <span>{label}</span>
      <ArrowUpRight className="h-3 w-3 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  );
}

export function CTAButtonGroup({ className }: { className?: string }) {
  return (
    <div className={cn('flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row', className)}>
      {/* Primary CTA - Filled elegant button */}
      <a
        href={CONTACT_LINKS.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          'group relative inline-flex w-full items-center justify-center gap-3 sm:w-auto',
          'rounded-full bg-primary px-8 py-4',
          'text-sm font-medium uppercase tracking-[0.2em] text-primary-foreground',
          'transition-all duration-500 ease-out',
          'hover:bg-foreground hover:shadow-xl hover:shadow-primary/25',
          'dark:hover:bg-foreground dark:hover:text-background',
          'dark:hover:shadow-primary/15'
        )}
      >
        <MessageCircle className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
        <span>WhatsApp</span>
        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </a>

      {/* Decorative separator */}
      <span className="hidden text-xs uppercase tracking-widest text-muted-foreground/40 sm:block">или</span>

      {/* Secondary CTA - Outlined elegant button */}
      <a
        href={CONTACT_LINKS.telegram}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          'group relative inline-flex w-full items-center justify-center gap-3 sm:w-auto',
          'rounded-full border-2 border-foreground/15 bg-transparent px-8 py-4',
          'text-sm font-medium uppercase tracking-[0.2em] text-foreground',
          'transition-all duration-500 ease-out',
          'hover:border-primary hover:text-primary',
          'hover:shadow-lg hover:shadow-primary/10',
          'dark:border-foreground/20 dark:hover:border-primary'
        )}
      >
        <Send className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
        <span>Telegram</span>
        <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </a>
    </div>
  );
}
