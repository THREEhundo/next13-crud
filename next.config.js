/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true
	},
	images: {
		domains: [
			'github.com',
			'media.gq.com',
			'cdn.cnn.com',
			'lh3.googleusercontent.com'
		]
	}
}

module.exports = nextConfig
