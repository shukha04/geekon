'use client'

import { useCallback, useContext, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Context } from '../config/context'
import { CursorActionTypes } from '../config/types'
import classes from './Cursor.module.scss'

export const Cursor = () => {
	const { state, dispatch } = useContext(Context)

	const handleMouseMove = useCallback(
		(event: MouseEvent) => {
			dispatch({
				type: CursorActionTypes.SET_CURSOR,
				payload: { left: event.clientX - 10, top: event.clientY - 10 },
			})
		},
		[ dispatch ],
	)

	const handleMouseOut = useCallback(() => {
		dispatch({
			type: CursorActionTypes.SET_CURSOR,
			payload: { left: -20, top: -20 },
		})
	}, [ dispatch ])

	const handleMouseDown = useCallback(() => {
		dispatch({
			type: CursorActionTypes.SET_CURSOR,
			payload: { scale: 1.2 },
		})
	}, [ dispatch ])

	const handleMouseUp = useCallback(() => {
		dispatch({
			type: CursorActionTypes.SET_CURSOR,
			payload: { scale: 1 },
		})
	}, [ dispatch ])

	useEffect(() => {
		window.addEventListener('mousemove', handleMouseMove)
		window.addEventListener('mouseout', handleMouseOut)
		window.addEventListener('mousedown', handleMouseDown)
		window.addEventListener('mouseup', handleMouseUp)

		return () => {
			window.removeEventListener('mousemove', handleMouseMove)
			window.removeEventListener('mouseout', handleMouseOut)
			window.removeEventListener('mousedown', handleMouseDown)
			window.removeEventListener('mouseup', handleMouseUp)
		}
	}, [ handleMouseMove, handleMouseOut, handleMouseDown, handleMouseUp ])

	return (
		<motion.div
			animate={state}
			className={classes.cursor}
			transition={{
				left: { duration: 0 },
				top: { duration: 0 },
				scale: { type: 'spring', duration: 0.6, bounce: 0.7 },
			}}
		/>
	)
}
