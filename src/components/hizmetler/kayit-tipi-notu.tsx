"use client";

import { Info } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function KayitTipiNotu() {
  return (
    <Popover>
      <PopoverTrigger className="inline-flex items-center gap-1.5 rounded-full bg-surface-alt px-3 py-1.5 text-xs font-medium text-ink-muted transition-colors hover:text-ink">
        <Info className="size-3.5" />
        Kayıt tipi hakkında
      </PopoverTrigger>
      <PopoverContent className="text-sm text-ink-muted">
        Yurt dışı kayıtlı cihazlar, Türkiye hattıyla kullanım için IMEI kayıt
        işlemi gerektirebilir. Detaylı bilgi için bizi arayabilirsiniz.
      </PopoverContent>
    </Popover>
  );
}
