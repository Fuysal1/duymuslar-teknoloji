import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ComingSoon({ title }: { title: string }) {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-6 text-center">
      <h1 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
        {title}
      </h1>
      <p className="mt-4 text-base leading-relaxed text-ink-muted">
        Bu sayfanın içeriğini kısa süre içinde sizlerle paylaşacağız.
      </p>
      <Link
        href="/"
        className={cn(
          buttonVariants({ variant: "outline" }),
          "mt-8 h-11 gap-2 rounded-full px-6 text-sm"
        )}
      >
        <ArrowLeft className="size-4" />
        Ana Sayfaya Dön
      </Link>
    </div>
  );
}
