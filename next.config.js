/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com',

            },
        ],
        domains: ['res.cloudinary.com', 'xgddmaybsftuiidgvjys.supabase.co'],
    },
    experimental: {
        mdxRs: true,
    },
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx']

}
const withMDX = require('@next/mdx')()
module.exports = withMDX(nextConfig)
