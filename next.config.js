/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        RESEND_API_KEY: `${process.env.RESEND_API_KEY}`,
    },
    output: 'export',
};

module.exports = nextConfig
