import Link from "next/link";

const FOOTER_LINKS = [
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/hizmetler", label: "Hizmetler" },
  { href: "/iletisim", label: "İletişim" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 bg-surface-alt">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-14 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-sm">
          <p className="text-[15px] font-semibold tracking-tight text-ink">
            Duymuşlar Teknoloji
          </p>
          <p className="mt-2 text-sm leading-relaxed text-ink-muted">
            Telefon & elektronik satış, 2.el cihaz alım-satım, güvenlik
            kamerası ve uydu &amp; anten kurulumunda güvenilir çözüm ortağınız.
          </p>
        </div>

        <nav className="flex gap-8">
          {FOOTER_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-muted transition-colors hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="border-t border-border/60">
        <p className="mx-auto max-w-6xl px-6 py-6 text-xs text-ink-muted">
          © {year} Duymuşlar Teknoloji. Tüm hakları saklıdır.
        </p>
      </div>
    </footer>
  );
}
