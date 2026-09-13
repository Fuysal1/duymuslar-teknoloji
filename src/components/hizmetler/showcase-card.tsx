import { Phone, type LucideIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { KayitTipiBadge } from "@/components/hizmetler/kayit-tipi-badge";
import { TELEFON_HREF } from "@/lib/constants";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { KayitTipi } from "@/data/urunler";

interface ShowcaseCardProps {
  eyebrow: string;
  title: string;
  icon: LucideIcon;
  ctaLabel: string;
  kayitTipi?: KayitTipi;
  description?: string;
  note?: string;
}

export function ShowcaseCard({
  eyebrow,
  title,
  icon: Icon,
  ctaLabel,
  kayitTipi,
  description,
  note,
}: ShowcaseCardProps) {
  return (
    <Card className="flex h-full w-[78%] shrink-0 snap-start flex-col rounded-3xl bg-white p-2 shadow-none sm:w-auto sm:shrink">
      <CardHeader>
        <div className="flex aspect-4/3 items-center justify-center rounded-2xl bg-surface-alt">
          <Icon className="size-12 text-ink-muted/50" strokeWidth={1.25} />
        </div>
        <span className="mt-4 text-xs font-medium text-brand">{eyebrow}</span>
        <CardTitle className="text-lg font-semibold text-ink">
          {title}
        </CardTitle>
        {kayitTipi && (
          <div className="mt-1">
            <KayitTipiBadge kayitTipi={kayitTipi} />
          </div>
        )}
        {description && (
          <CardDescription className="text-[13px] leading-relaxed text-ink-muted">
            {description}
          </CardDescription>
        )}
        {note && (
          <span className="text-xs text-ink-muted/70">{note}</span>
        )}
      </CardHeader>
      <CardContent className="mt-auto pt-2">
        <a
          href={TELEFON_HREF}
          className={cn(
            buttonVariants({ variant: "outline" }),
            "h-10 w-full gap-2 rounded-full text-sm"
          )}
        >
          <Phone className="size-4" />
          {ctaLabel}
        </a>
      </CardContent>
    </Card>
  );
}
