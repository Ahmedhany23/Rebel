/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains:["res.cloudinary.com"],
        formats: ['image/avif', 'image/webp']
    }
};

export default nextConfig;
