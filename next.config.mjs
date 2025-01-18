import withPWA from 'next-pwa';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();
const nextConfig = {
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"],
        });
        return config;
    },
};
export default withPWA({
    dest: 'public',
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development',
})(withNextIntl(nextConfig));
// import createNextIntlPlugin from 'next-intl/plugin';
//
// // Initialize next-intl plugin
// const withNextIntl = createNextIntlPlugin();
//
// const nextConfig = {
//     webpack(config) {
//         config.module.rules.push({
//             test: /\.svg$/,
//             use: ["@svgr/webpack"],
//         });
//         return config;
//     },
// };
//
// // Export only next-intl plugin configuration
// export default withNextIntl(nextConfig);
