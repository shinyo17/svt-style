/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: { RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED: "false" },
  output: "export",
};

module.exports = nextConfig;
