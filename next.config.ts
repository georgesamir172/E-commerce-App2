import type { NextConfig } from "next";
import withFlowbiteReact from "flowbite-react/plugin/nextjs";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns : [new URL('https://ecommerce.routemisr.com/**/**')]
  }
};

export default withFlowbiteReact(nextConfig);
// export default nextConfig;