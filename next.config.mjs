/*

/** @type {import('next').NextConfig} */

/*
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'encrypted-tbn0.gstatic.com',
                pathname: '/images*',  // Allow all paths starting with "/images"
            },
        ],
    },
};

export default nextConfig;
*/

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [],
        domains: ['*'], // T�m alan adlar�ndan gelen g�rselleri destekler
    },
};

export default nextConfig;
