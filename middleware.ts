import createMiddleware from 'next-intl/middleware';
import { NextResponse } from 'next/server';
import { routing } from './i18n/routing';
import type { NextRequest } from 'next/server';

// next-intl 미들웨어 생성
const nextIntlMiddleware = createMiddleware(routing);

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // 루트 경로에 접근했을 때 브라우저 언어에 따라 리다이렉트
  if (pathname === '/') {
    // 브라우저의 Accept-Language 헤더에서 언어 확인
    const acceptLanguage = request.headers.get('accept-language') || '';
    
    // 기본 locale 설정
    let locale = 'en';
    
    // ko가 포함되어 있으면 한국어로 처리
    if (acceptLanguage.includes('ko')) {
      locale = 'ko';
    }
    
    // 새 URL 생성 및 리다이렉트
    const url = new URL(`/${locale}`, request.url);
    return NextResponse.redirect(url);
  }
  
  // 다른 경로는 next-intl 미들웨어로 처리
  return nextIntlMiddleware(request);
}

export const config = {
  // 루트 경로와 국제화된 경로명 모두 매칭
  matcher: ['/', '/(ko|en)/:path*'],
};
