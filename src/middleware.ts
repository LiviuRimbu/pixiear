import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { NextRequest, NextResponse } from 'next/server';

// Create the next-intl middleware
const intlMiddleware = createMiddleware({
    ...routing,
    defaultLocale: 'ro',
    localeDetection: false,
});

export default function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Skip middleware for static assets
    if (
        pathname.startsWith('/_next') ||
        pathname.startsWith('/api') ||
        pathname.startsWith('/gif') ||
        pathname.startsWith('/audio') ||
        pathname === '/site.webmanifest' ||
        pathname === '/manifest.json' ||
        pathname === '/manifest.webmanifest' ||
        pathname.startsWith('/android-chrome') ||
        pathname.startsWith('/android-chrome-192x192.png') ||
        pathname.startsWith('/apple-touch-icon') ||
        pathname === '/favicon.ico' ||
        pathname === '/favicon-16x16.png' ||
        pathname === '/favicon-32x32.png' ||
        pathname === '/sw.js' ||
        pathname.match(/\.(webp|gif|png|jpg|jpeg|mp3|wav|mp4|svg|ico|webmanifest)$/)
    ) {
        return NextResponse.next();
    }

    // Apply next-intl middleware for all other routes
    return intlMiddleware(request);
}

export const config = {
    // Match all pages except static files
    matcher: [
        '/((?!api|_next|manifest.json|favicon.ico|icons|images|robots.txt|sitemap.xml|sw.js|audio|gif).*)',
    ],
};