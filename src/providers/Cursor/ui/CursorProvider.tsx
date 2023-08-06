'use client'

import { FC, ReactNode, useCallback, useContext, useMemo, useState } from 'react'
import { useAnimate } from 'framer-motion'
import { Context } from '../config/context'
import { ContextState } from '../config/types'
import { Cursor } from './Cursor'

type Props = {
	children?: ReactNode
}

export const CursorProvider: FC<Props> = ({ children }) => {
	const [ scope, animate ] = useAnimate<HTMLDivElement>()
	const [ follow, setFollow ] = useState<boolean>(true)

	const followMouse = useCallback(() => {
		setFollow(true)
		if (scope.current) {
			animate(
				scope.current,
				{ width: 18, height: 18, borderRadius: '9px', mixBlendMode: 'normal' },
				{
					type: 'spring',
					bounce: 0.3,
					duration: 0.4,
				},
			)
		}
	}, [ scope, animate ])

	const unfollowMouse = useCallback(() => {
		setFollow(false)
	}, [])

	const initialState: ContextState = useMemo(() => {
		return { cursorRef: scope, animateCursor: animate, followMouse, unfollowMouse }
	}, [ scope, animate, followMouse, unfollowMouse ])

	return (
		<Context.Provider value={initialState}>
			{children}
			<Cursor
				animate={animate}
				following={follow}
				scope={scope}
			/>
		</Context.Provider>
	)
}

export const useCursor = () => {
	return useContext(Context)
}
