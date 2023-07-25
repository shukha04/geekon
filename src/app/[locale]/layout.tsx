'use client'

import { FC, ReactNode } from 'react'
import { MotionConfig } from 'framer-motion'
import { notFound } from 'next/navigation'
import { AbstractIntlMessages, NextIntlClientProvider } from 'next-intl'
import { SFProDisplay } from '@/assets/fonts'
import Container from '@/components/container'
import Cursor from '@/components/cursor'
import Navbar from '@/components/navbar'
import '@/styles/global.scss'
import CursorContextProvider from '@/context/cursor'

type LayoutProps = {
	children?: ReactNode
	params: { locale: 'en' | 'ru' }
}

const Layout: FC<LayoutProps> = async ({ children, params: { locale } }) => {
	let homePageText: AbstractIntlMessages | undefined = undefined
	let navbarText: AbstractIntlMessages | undefined = undefined

	try {
		homePageText = (await import(`../../locales/${locale}/home-page.json`)).default
		navbarText = (await import(`../../locales/${locale}/navbar.json`)).default
	}
	catch (error) {
		notFound()
	}

	return (
		<html lang={locale}>
			<body className={SFProDisplay.className}>
				<MotionConfig reducedMotion='user'>
					<CursorContextProvider>
						<Cursor />
						<NextIntlClientProvider
							locale={locale}
							messages={navbarText}
						>
							<Navbar />
						</NextIntlClientProvider>
						<NextIntlClientProvider
							locale={locale}
							messages={homePageText}
						>
							<Container>
								{children}
							</Container>
						</NextIntlClientProvider>
					</CursorContextProvider>
				</MotionConfig>
			</body>
		</html>
	)
}

export function generateStaticParams() {
	return [{ locale: 'en' }, { locale: 'ru' }]
}

export default Layout
