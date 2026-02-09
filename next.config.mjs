const IMAGE_CACHE_TTL_SECONDS = 2678400;

const IMAGE_DEVICE_SIZES = [640, 750, 828, 1080, 1200];

const IMAGE_SIZES = [16, 32, 48, 64, 96, 128, 256, 384];

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: IMAGE_CACHE_TTL_SECONDS,
    deviceSizes: IMAGE_DEVICE_SIZES,
    imageSizes: IMAGE_SIZES,
  },
};

export default nextConfig;
