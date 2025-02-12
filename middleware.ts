import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // 국제화된 경로명만 일치
  matcher: ['/', '/(ko|en)/:path*'],
};
