import { Unbounded as UbFont } from 'next/font/google'
import localFont from 'next/font/local'

export const Unbounded = UbFont({ subsets: [ 'cyrillic', 'latin' ], variable: '--unbounded' })

export const SFProDisplay = localFont({
	src: [
		{
			path: './SF-Pro-Display/SF-Pro-Display-Regular.otf',
			weight: '400',
		},
		{
			path: './SF-Pro-Display/SF-Pro-Display-Medium.otf',
			weight: '500',
		},
	],
	style: 'normal',
	variable: '--sf-pro',
})
