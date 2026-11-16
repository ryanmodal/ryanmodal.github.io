type AnalyticsWindow = Window & { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void; fbq?: ((...args: unknown[]) => void) & { callMethod?: (...args: unknown[]) => void; queue?: unknown[][]; loaded?: boolean; version?: string }; _fbq?: unknown };
export function initializeAnalytics() {
  const w = window as AnalyticsWindow;
  const ga = import.meta.env['VITE_GA4_MEASUREMENT_ID'];
  const pixel = import.meta.env['VITE_META_PIXEL_ID'];
  if (ga && /^G-[A-Z0-9]+$/.test(ga) && !document.getElementById('modal-ga4')) {
    w.dataLayer = w.dataLayer || [];
    w.gtag = function () { w.dataLayer?.push(arguments); };
    w.gtag('js', new Date()); w.gtag('config', ga, { send_page_view: false });
    const s = document.createElement('script'); s.id = 'modal-ga4'; s.async = true; s.src = `https://www.googletagmanager.com/gtag/js?id=${ga}`; document.head.append(s);
  }
  if (pixel && /^\d+$/.test(pixel) && !w.fbq) {
    const fb: NonNullable<AnalyticsWindow['fbq']> = (...args) => { if (fb.callMethod) fb.callMethod(...args); else fb.queue?.push(args); };
    fb.queue = []; fb.loaded = true; fb.version = '2.0'; w.fbq = fb; w._fbq = fb;
    const s = document.createElement('script'); s.async = true; s.src = 'https://connect.facebook.net/en_US/fbevents.js'; document.head.append(s); fb('init', pixel);
  }
}
export function track(event: string, params: Record<string, string> = {}) {
  const w = window as AnalyticsWindow;
  w.gtag?.('event', event, params);
  const standard = event === 'quote_submit' ? 'Lead' : event === 'page_view' ? 'PageView' : undefined;
  w.fbq?.(standard ? 'track' : 'trackCustom', standard || event, params);
}