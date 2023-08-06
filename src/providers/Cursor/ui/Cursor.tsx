'use client'

import { FC, useCallback, useEffect, useState } from 'react'
import { AnimationScope, motion, useMotionValue, useSpring } from 'framer-motion'
import classes from './Cursor.module.scss'

type Props = {
	scope: AnimationScope<HTMLDivElement>
	animate: any
	following: boolean
}
export const Cursor: FC<Props> = ({ scope, animate, following }) => {
	const [ visible, setVisible ] = useState<boolean>(false)

	const cursorX = useMotionValue<number>(-150)
	const cursorY = useMotionValue<number>(-150)
	const cursorXSpring = useSpring(cursorX, { duration: 0 })
	const cursorYSpring = useSpring(cursorY, { duration: 0 })

	const handleMouseMove = useCallback(
		(event: MouseEvent) => {
			if (following) {
				cursorX.set(event.clientX - 9)
				cursorY.set(event.clientY - 9)
			}
		},
		[ cursorX, cursorY, following ],
	)

	const handleMouseOut = useCallback(() => {
		cursorX.set(-150)
		cursorY.set(-150)
	}, [ cursorX, cursorY ])

	const handleMouseDown = useCallback(() => {
		if (scope.current) {
			animate(scope.current, { scale: [ 1.1, 1 ] }, { type: 'spring', bounce: 0.6, duration: 0.6 })
		}
	}, [ scope, animate ])

	useEffect(() => {
		setVisible(!window.matchMedia('(pointer: coarse) or (prefers-reduced-motion: reduce)').matches)

		window.addEventListener('mousemove', handleMouseMove)
		window.addEventListener('mouseout', handleMouseOut)
		window.addEventListener('mousedown', handleMouseDown)

		return () => {
			window.removeEventListener('mousemove', handleMouseMove)
			window.removeEventListener('mouseout', handleMouseOut)
			window.removeEventListener('mousedown', handleMouseDown)
		}
	}, [ handleMouseMove, handleMouseOut, handleMouseDown, following ])

	return visible
		? (
			<motion.div
				className={classes.cursor}
				ref={scope}
				style={{ left: cursorXSpring, top: cursorYSpring }}
			/>
		)
		: null
}
