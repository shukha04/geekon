'use client'

import { FC, ReactNode, useEffect, useMemo, useReducer, useState } from 'react'
import { Context, initialState } from '../config/context'
import { reducer } from '../config/reducer'
import { Cursor } from './Cursor'

type Props = {
	children?: ReactNode
}

export const CursorProvider: FC<Props> = ({ children }) => {
	const [ state, dispatch ] = useReducer(reducer, initialState)
	const [ validScreen, setValidScreen ] = useState<boolean>(false)

	useEffect(() => {
		setValidScreen(!window.matchMedia('(pointer: coarse) or (prefers-reduced-motion: reduce)').matches)
	}, [])

	const contextValue = useMemo(() => {
		return { state, dispatch }
	}, [ state, dispatch ])

	return validScreen
		? (
			<Context.Provider value={contextValue}>
				{children}
				<Cursor />
			</Context.Provider>
		)
		: (
			children
		)
}
