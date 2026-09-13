import { PhoneShowcaseSection } from "@/components/hizmetler/phone-showcase-section";
import { SecondHandSection } from "@/components/hizmetler/second-hand-section";
import { InstallServicesSection } from "@/components/hizmetler/install-services-section";

export default function HizmetlerPage() {
  return (
    <>
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-4 sm:pt-20">
        <h1 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Hizmetler
        </h1>
        <p className="mt-3 max-w-xl text-base leading-relaxed text-ink-muted">
          Telefon &amp; elektronik satışından kurulum hizmetlerine, ihtiyacınız
          olan her şey tek adreste.
        </p>
      </div>
      <PhoneShowcaseSection />
      <SecondHandSection />
      <InstallServicesSection />
    </>
  );
}
