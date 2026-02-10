import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

// إعداد المكون الإضافي لربط ملف i18n/request.ts
const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  reactStrictMode: true,
  /* أي إعدادات أخرى هنا (مثل images أو experimental) */
};

export default withNextIntl(nextConfig);