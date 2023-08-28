import { FC, ReactNode } from 'react'
import '../../assets/styles/global.scss'
import cx from 'clsx'
import { Metadata } from 'next'
import { createTranslator } from 'next-intl'
import { SFProDisplay, Unbounded } from '@/assets/fonts'
import { Navbar } from '@/components/Navbar'
import { FramerMotionProvider } from '@/providers/FramerMotion'
import { IntlLanguages, NextIntlProvider } from '@/providers/NextIntl'
import { ThemesProvider } from '@/providers/Themes'

type Props = {
	children?: ReactNode
	params: { lang: IntlLanguages }
}

const Layout: FC<Props> = ({ children, params: { lang } }) => {
	return (
		<html
			suppressHydrationWarning
			className={cx(SFProDisplay.variable, Unbounded.variable)}
			lang={lang}
		>
			<body>
				<NextIntlProvider lang={lang}>
					<ThemesProvider>
						<FramerMotionProvider>
							<Navbar />
							{children}
						</FramerMotionProvider>
					</ThemesProvider>
				</NextIntlProvider>
			</body>
		</html>
	)
}

export const generateMetadata = async ({ params: { lang } }: {
	params: { lang: IntlLanguages }
}): Promise<Metadata> => {
	const messages = (await import(`@/assets/locales/${lang}.json`)).default
	const t = createTranslator({ locale: lang, messages, namespace: 'metadata' })

	return {
		title: {
			default: t('title'),
			template: `${t('title')} | %s}`,
		},
		description: t('description'),
		generator: 'GeekOn Organization',
		applicationName: 'GeekOn',
		referrer: 'origin-when-cross-origin',
		keywords: t('keywords'),
		authors: [{ name: t('authors.Shukhrat') }, { name: t('authors.Daler') }],
		colorScheme: 'light dark',
		creator: t('authors.Shukhrat'),
		publisher: t('authors.Shukhrat'),

		// TODO: change to https://geekon.org
		metadataBase: new URL('https://geekon.vercel.app'),
		alternates: {
			canonical: '/',
			languages: {
				en: '/en',
				ru: '/ru',
			},
		},
		openGraph: {
			title: t('title'),
			description: t('og-description'),
			locale: lang,
			type: 'website',

			// TODO: change to https://geekon.org
			url: 'https://geekon.vercel.app',
			alternateLocale: lang === 'en' ? 'ru' : 'en',
			siteName: 'GeekOn',
		},
		robots: {
			follow: true,
			index: true,
		},
		themeColor: [{ media: '(prefers-color-scheme: light)', color: '#191A23' }],

		// TODO: change to https://geekon.org
		manifest: new URL(`https://geekon.vercel.app/manifest-${lang}.json`),
		twitter: {
			card: 'summary',
			title: t('title'),
			description: t('og-description'),
		},
		viewport: {
			width: 'device-width',
			initialScale: 1,
			maximumScale: 1,
		},

		// TODO: change to https://geekon.org
		assets: [ 'https://geekon.vercel.app/' ],
	}
}

export default Layout
