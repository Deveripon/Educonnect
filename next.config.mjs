/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "avatars.githubusercontent.com",
            },
            {
                hostname: "i.pravatar.cc",
            },
            {
                hostname: "example.com",
            },
        ],
    },
};

export default nextConfig;
