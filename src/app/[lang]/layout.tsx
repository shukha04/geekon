import { FC, ReactNode } from 'react'
import './global.scss'
import clsx from 'clsx'
import { Metadata } from 'next'
import { createTranslator } from 'next-intl'
import { SFProDisplay, Unbounded } from '@/assets/fonts'
import { Container } from '@/components/Container'
import { Navbar } from '@/components/Navbar'
import { FramerMotionProvider } from '@/providers/FramerMotion'
import { IntlLanguages, NextIntlProvider } from '@/providers/NextIntl'

type Props = {
	children?: ReactNode
	params: { lang: IntlLanguages }
}

const Layout: FC<Props> = ({ children, params: { lang } }) => {
	return (
		<html lang={lang}>
			<body className={clsx(SFProDisplay.variable, Unbounded.variable)}>
				<NextIntlProvider lang={lang}>
					<FramerMotionProvider>
						<Navbar />
						<Container>
							{children}
						</Container>
					</FramerMotionProvider>
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
			url: 'https://geekon.vercel.app',
			alternateLocale: lang === 'en' ? 'ru' : 'en',
			siteName: 'GeekOn',
		},
		robots: {
			follow: true,
			index: true,
		},
		themeColor: [{ media: '(prefers-color-scheme: light)', color: '#191A23' }],
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
		assets: [ 'https://geekon.vercel.app/' ],
	}
}

export default Layout
