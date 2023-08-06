import { FC, ReactNode } from 'react'
import { notFound } from 'next/navigation'
import { NextIntlClientProvider } from 'next-intl'
import { IntlLanguages, IntlMessages } from '../config/types'

type Props = {
	children?: ReactNode
	lang: IntlLanguages
}
export const NextIntlProvider: FC<Props> = async ({ children, lang }) => {
	let messages: IntlMessages | undefined = undefined

	try {
		messages = (await import(`@/assets/locales/${lang}.json`)).default
	}
	catch (error) {
		notFound()
	}

	return (
		<NextIntlClientProvider
			locale={lang}
			messages={messages}
		>
			{children}
		</NextIntlClientProvider>
	)
}
