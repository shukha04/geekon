'use client'

import { useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { CursorContext } from '@/context/cursor'
import classes from '@/styles/cursor.module.scss'

type Position = {
	x: number
	y: number
}

const Cursor = () => {
	const [ position, setPosition ] = useState<Position>({ x: -10, y: -10 })
	const { state } = useContext(CursorContext)
	const reducedMotion = useReducedMotion()

	const isTouchDevice = useMemo(() => {
		if (typeof window !== 'undefined') {
			return window.matchMedia('(pointer: coarse)')
		}
		return null
	}, [])

	const hovering = useMemo(() => {
		return state.hovering && !reducedMotion
	}, [ state.hovering, reducedMotion ])

	const moveCursorHandler = useCallback((event: MouseEvent) => {
		setPosition({
			x: event.clientX,
			y: event.clientY,
		})
	}, [])

	const removeCursorHandler = useCallback(() => {
		setPosition({
			x: -10,
			y: -10,
		})
	}, [])

	useEffect(() => {
		if (!reducedMotion) {
			window.addEventListener('mousemove', moveCursorHandler)
			document.addEventListener('mouseleave', removeCursorHandler)
		}

		return () => {
			window.removeEventListener('mousemove', moveCursorHandler)
			document.removeEventListener('mouseleave', removeCursorHandler)
		}
	}, [ moveCursorHandler, removeCursorHandler, reducedMotion ])

	return !reducedMotion
		? (
			<motion.span
				className={classes.cursor}
				transition={hovering ? { type: 'spring', damping: 15, stiffness: 300 } : { duration: 0 }}
				animate={
					hovering
						? state.animation
						: isTouchDevice
							? { top: -20, left: -20 }
							: { top: position.y - 10, left: position.x - 10 }
				}
			/>
		)
		: null
}

export default Cursor
