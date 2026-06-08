import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "onzhzfcewjlhvhgmwqri.supabase.co",
      },
    ],
  },/* config options here */
};

export default nextConfig;

