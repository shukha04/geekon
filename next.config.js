/** @type {import('next').NextConfig} */
const nextConfig = {
	webpack(config) {
		config.module.rules.push(
			{
				test: /\.svg$/i,
				type: 'asset',
				resourceQuery: /url/,
			},
			{
				test: /\.svg$/i,
				resourceQuery: { not: [ /url/ ] },
				use: [ '@svgr/webpack' ],
			},
		)

		return config
	},
}

module.exports = nextConfig
