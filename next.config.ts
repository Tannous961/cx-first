import type { NextConfig } from "next";
import { MEDIA_URL } from "@/lib/config";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL(MEDIA_URL + '/*')],
  }
};

export default nextConfig;
