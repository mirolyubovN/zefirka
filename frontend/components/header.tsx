'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { ThemeToggle } from '@/components/theme-toggle';
import { NAV_ITEMS, SITE_NAME } from '@/lib/constants';
import { cn } from '@/lib/utils';

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      {/* Subtle top accent line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:h-20">
        {/* Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2 transition-colors"
        >
          <span style={{ fontFamily: "var(--font-logo)" }} className="text-2xl text-foreground transition-colors group-hover:text-primary lg:text-3xl">
            {SITE_NAME}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'group relative px-4 py-2 text-sm font-medium tracking-wide transition-colors',
                pathname === item.href
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              <span>{item.label}</span>
              {/* Active indicator */}
              {pathname === item.href && (
                <span className="absolute inset-x-4 -bottom-[1.5px] h-px bg-primary" />
              )}
              {/* Hover indicator */}
              <span className="absolute inset-x-4 -bottom-[1.5px] h-px scale-x-0 bg-foreground/30 transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        {/* Right side actions */}
        <div className="flex items-center gap-2">
          <ThemeToggle className="hidden sm:flex" />

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="relative h-9 w-9 rounded-full border border-border/60 hover:border-primary hover:text-primary"
              >
                <Menu className="h-4 w-4" />
                <span className="sr-only">Открыть меню</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full max-w-sm border-l border-border/40 bg-background/95 backdrop-blur-xl"
            >
              <SheetHeader className="border-b border-border/40 pb-6">
                <div className="flex items-center justify-between">
                  <SheetTitle style={{ fontFamily: "var(--font-logo)" }} className="text-3xl text-foreground">
                    {SITE_NAME}
                  </SheetTitle>
                  <ThemeToggle />
                </div>
              </SheetHeader>

              <nav className="mt-8 flex flex-col gap-1">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      'group flex items-center justify-between rounded-lg px-4 py-3 transition-colors',
                      pathname === item.href
                        ? 'bg-primary/10 text-primary'
                        : 'text-foreground hover:bg-secondary'
                    )}
                  >
                    <span className="text-base font-medium">{item.label}</span>
                    <ArrowUpRight
                      className={cn(
                        'h-4 w-4 transition-all duration-200',
                        pathname === item.href
                          ? 'opacity-100'
                          : 'opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
                      )}
                    />
                  </Link>
                ))}
              </nav>

              {/* Mobile social hint */}
              <div className="absolute bottom-8 left-6 right-6">
                <p className="text-center text-xs tracking-wide text-muted-foreground">
                  Премиальные десерты ручной работы
                </p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
