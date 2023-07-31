'use client'

import { FC, ReactNode } from 'react'
import { MotionConfig } from 'framer-motion'

type Props = {
	children?: ReactNode
}

export const FramerMotionProvider: FC<Props> = ({ children }) => {
	return (
		<MotionConfig reducedMotion='user'>
			{children}
		</MotionConfig>
	)
}
