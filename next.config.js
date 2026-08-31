/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Ignora a verificação de tipos durante o build para evitar o erro do tsc no Termux
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
