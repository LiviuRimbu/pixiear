import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware({
    ...routing,
    defaultLocale: 'ro', // Force 'ro' as the default locale
    localeDetection: false, // Disable automatic locale detection
});

export const config = {
    // Match all pages except static files (_next, favicon.ico, manifest.json, etc.)
    matcher: [
        '/((?!api|_next|manifest.json|favicon.ico|icons|images|robots.txt|sitemap.xml|sw.js|audio).*)',
    ],
};