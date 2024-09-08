/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',

    // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
    // trailingSlash: true,

    // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
    // skipTrailingSlashRedirect: true,

    // Optional: Change the output directory `out` -> `dist`
    distDir: '.dist',
    // unOptimize to prevent minification of the images
    images: {
        unoptimized: true,
    },
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.module.rules.push({
                test: /resume/,
                use: 'null-loader',
            })
        }
        return config;
    },
};

export default nextConfig;
