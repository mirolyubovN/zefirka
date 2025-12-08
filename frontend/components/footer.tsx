import Link from 'next/link';
import { Instagram, MessageCircle, Send, ArrowUpRight } from 'lucide-react';
import { CONTACT_LINKS, NAV_ITEMS, SITE_NAME } from '@/lib/constants';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border/50 bg-secondary/20 dark:bg-card/50">
      {/* Subtle decorative line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-4 py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-5">
            <Link
              href="/"
              className="inline-block text-3xl font-display font-medium tracking-tight text-foreground transition-colors hover:text-primary"
            >
              {SITE_NAME}
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Премиальные натуральные десерты ручной работы.
              Каждое изделие создаётся с любовью и вниманием к деталям.
            </p>

            {/* Social Links - Elegant minimal style */}
            <div className="mt-8 flex items-center gap-1">
              <a
                href={CONTACT_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex h-11 w-11 items-center justify-center rounded-full border border-border/60 bg-transparent text-muted-foreground transition-all duration-300 hover:border-primary hover:text-primary hover:shadow-lg hover:shadow-primary/10 dark:border-border dark:hover:border-primary"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
              </a>
              <a
                href={CONTACT_LINKS.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex h-11 w-11 items-center justify-center rounded-full border border-border/60 bg-transparent text-muted-foreground transition-all duration-300 hover:border-primary hover:text-primary hover:shadow-lg hover:shadow-primary/10 dark:border-border dark:hover:border-primary"
                aria-label="Telegram"
              >
                <Send className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
              </a>
              <a
                href={CONTACT_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex h-11 w-11 items-center justify-center rounded-full border border-border/60 bg-transparent text-muted-foreground transition-all duration-300 hover:border-primary hover:text-primary hover:shadow-lg hover:shadow-primary/10 dark:border-border dark:hover:border-primary"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="lg:col-span-3 lg:col-start-7">
            <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Навигация
            </h3>
            <ul className="mt-6 space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-1 text-sm text-foreground/80 transition-colors hover:text-primary"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="h-3 w-3 opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Контакты
            </h3>
            <div className="mt-6 space-y-4">
              <a
                href={CONTACT_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-sm text-foreground/80 transition-colors hover:text-primary"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Написать в WhatsApp</span>
                <ArrowUpRight className="h-3 w-3 opacity-0 transition-all duration-200 group-hover:opacity-100" />
              </a>
              <a
                href={CONTACT_LINKS.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-sm text-foreground/80 transition-colors hover:text-primary"
              >
                <Send className="h-4 w-4" />
                <span>Написать в Telegram</span>
                <ArrowUpRight className="h-3 w-3 opacity-0 transition-all duration-200 group-hover:opacity-100" />
              </a>
              <a
                href={CONTACT_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-sm text-foreground/80 transition-colors hover:text-primary"
              >
                <Instagram className="h-4 w-4" />
                <span>Смотреть в Instagram</span>
                <ArrowUpRight className="h-3 w-3 opacity-0 transition-all duration-200 group-hover:opacity-100" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border/40 pt-8 sm:flex-row">
          <p className="text-xs tracking-wide text-muted-foreground">
            &copy; {currentYear} {SITE_NAME}. Все права защищены.
          </p>
          <p className="text-xs tracking-wide text-muted-foreground/60">
            г. Костанай
          </p>
        </div>
      </div>
    </footer>
  );
}
