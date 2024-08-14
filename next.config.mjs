/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dhgexpezmhbrzplbodlo.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/canin-images/**",
      },
    ],
  },
};

export default nextConfig;
