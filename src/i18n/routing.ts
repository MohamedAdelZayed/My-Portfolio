import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';
 
export const routing = defineRouting({
  locales: ['en', 'ar'], // تأكد أن en موجودة هنا
  defaultLocale: 'ar',   // اللغة الافتراضية
  localePrefix: 'always' // يضمن ظهور /en/ في الرابط دائماً
});
 
export const {Link, redirect, usePathname, useRouter} = createNavigation(routing);