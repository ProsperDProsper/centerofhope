/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ["cdn.sanity.io"], // Allow Sanity's image CDN
	},
};

module.exports = nextConfig;
