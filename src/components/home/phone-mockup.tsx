type PhoneMockupProps = {
  className?: string;
};

/**
 * Yer tutucu cihaz silüeti — gerçek ürün fotoğrafı DEĞİL.
 * Gerçek ürün görseli temin edildiğinde bu component değiştirilecek.
 */
export function PhoneMockup({ className }: PhoneMockupProps) {
  return (
    <svg
      viewBox="0 0 220 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Telefon cihaz silüeti"
    >
      <rect x="4" y="4" width="212" height="432" rx="48" fill="#1D1D1F" />
      <rect
        x="4"
        y="4"
        width="212"
        height="432"
        rx="48"
        stroke="#0071E3"
        strokeOpacity="0.18"
        strokeWidth="1.5"
      />
      <rect x="14" y="30" width="192" height="380" rx="30" fill="#0A0A0A" />
      <rect
        x="14"
        y="30"
        width="192"
        height="380"
        rx="30"
        fill="url(#phone-mockup-gradient)"
        fillOpacity="0.4"
      />
      <rect x="82" y="17" width="56" height="10" rx="5" fill="#F5F5F7" fillOpacity="0.3" />
      <circle cx="110" cy="406" r="3" fill="#F5F5F7" fillOpacity="0.25" />
      <defs>
        <linearGradient
          id="phone-mockup-gradient"
          x1="14"
          y1="30"
          x2="206"
          y2="410"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0071E3" />
          <stop offset="1" stopColor="#0071E3" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
