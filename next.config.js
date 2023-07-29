/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**",
            },
        ],
        domains: ['res.cloudinary.com', 'lh3.googleusercontent.com'],
    },
}

module.exports = nextConfig
