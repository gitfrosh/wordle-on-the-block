/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    // declare here all your variables
    SUPABASE_PUBLIC_ANON_KEY: process.env.SUPABASE_PUBLIC_ANON_KEY,
    SUPABASE_URL: process.env.SUPABASE_URL,
    AUTH_API_URL: process.env.AUTH_API_URL
    // SUPABASE_SERVICE_ROLE: process.env.SUPABASE_SERVICE_ROLE,
    // SUPABASE_JWT: process.env.SUPABASE_JWT
  }
}

module.exports = nextConfig
