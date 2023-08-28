'use client'

import { FC, ReactNode } from 'react'
import { ThemeProvider } from 'next-themes'

type Props = {
	children?: ReactNode
}

export const ThemesProvider: FC<Props> = ({ children }) => {
	return (
		<ThemeProvider>
			{children}
		</ThemeProvider>
	)
}
