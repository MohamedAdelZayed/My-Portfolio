import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  // انتظر الـ locale لأنها تأتي كـ Promise في النسخ الجديدة
  let locale = await requestLocale;

  // إذا كانت اللغة غير موجودة أو غير مدعومة، ارجع للافتراضية
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    // التأكد من أن المسار يشير فعلياً لمجلد messages داخل src
    messages: (await import(`../messages/${locale}.json`)).default
  };
});