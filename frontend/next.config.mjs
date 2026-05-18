/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      {
        source: '/services/elderly-care',
        destination: '/services/elderly-care-coimbatore',
        permanent: true,
      },
      {
        source: '/services/patient-care',
        destination: '/services/patient-care-coimbatore',
        permanent: true,
      },
      {
        source: '/services/patient care',
        destination: '/services/patient-care-coimbatore',
        permanent: true,
      },
      {
        source: '/services/postnatal-baby-care',
        destination: '/services/postnatal-baby-care-coimbatore',
        permanent: true,
      },
      {
        source: '/services/nursing-services',
        destination: '/services/home-nursing-care-coimbatore',
        permanent: true,
      },
      {
        source: '/services/physiotherapy-home',
        destination: '/services/physiotherapy-home-visit-coimbatore',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
