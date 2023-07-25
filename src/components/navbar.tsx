'use client'

import { MouseEventHandler, useCallback, useContext, useEffect, useState } from 'react'
import clsx from 'clsx'
import { motion, useReducedMotion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import MailIcon from '@/assets/icons/mail-stroke.svg'
import Logo from '@/assets/vectors/logo.svg'
import Container from '@/components/container'
import { CursorActionTypes, CursorContext } from '@/context/cursor'
import classes from '@/styles/navbar.module.scss'

const Navbar = () => {
	const [ show, setShow ] = useState<boolean>(true)
	const [ scrollY, setScrollY ] = useState<number>(0)
	const { dispatch } = useContext(CursorContext)

	const t = useTranslations()
	const reducedMotion = useReducedMotion()

	const scrollHandler = useCallback(() => {
		if (scrollY > window.scrollY + 50) {
			setShow(true)
			setScrollY(window.scrollY)
		}
		else if (scrollY < window.scrollY - 50) {
			setShow(false)
			setScrollY(window.scrollY)
		}
	}, [ scrollY ])

	const buttonMouseMoveHandler = useCallback<MouseEventHandler<HTMLButtonElement>>(
		(event) => {
			const target = event.currentTarget
			const { left, top, width, height } = target.getBoundingClientRect()
			dispatch({
				type: CursorActionTypes.SET_CURSOR,
				payload: {
					hovering: true,
					animation: {
						left: left - 8,
						top: top - 4,
						width: width + 16,
						height: height + 8,
						borderRadius: '10px',
					},
				},
			})
		},
		[ dispatch ],
	)

	const buttonMouseLeaveHandler = useCallback<MouseEventHandler>(() => {
		dispatch({
			type: CursorActionTypes.SET_CURSOR,
			payload: { hovering: false },
		})
	}, [ dispatch ])

	useEffect(() => {
		window.addEventListener('scroll', scrollHandler)

		return () => {
			window.removeEventListener('scroll', scrollHandler)
		}
	}, [ scrollHandler ])

	return (
		<motion.div
			animate={show ? { y: 0 } : { y: -100 }}
			className={classes.navbar}
			initial={{ y: -100 }}
		>
			<Container>
				<div className={classes.container}>
					<div className={classes.top}>
						<Logo className={classes.logo} />
						<ul>
							<li>
								<motion.button
									initial={{ width: 'var(--btn-width)' }}
									whileFocus={reducedMotion ? undefined : { width: 'auto' }}
									whileHover={reducedMotion ? undefined : { width: 'auto' }}
									onMouseLeave={buttonMouseLeaveHandler}
									onMouseMove={buttonMouseMoveHandler}
								>
									<span className={classes.label}>
										{t('buttons.contact-us')}
									</span>
									<span className={classes.space} />
									<MailIcon className={classes.icon} />
								</motion.button>
							</li>
							<li>
								<motion.button
									initial={{ width: 'var(--btn-width)' }}
									whileFocus={reducedMotion ? undefined : { width: 'auto' }}
									whileHover={reducedMotion ? undefined : { width: 'auto' }}
									onMouseLeave={buttonMouseLeaveHandler}
									onMouseMove={buttonMouseMoveHandler}
								>
									<span className={classes.label}>
										{t('buttons.menu')}
									</span>
									<span className={classes.space} />
									<span className={clsx(classes.icon, classes.menu)}>
										<span />
										<span />
									</span>
								</motion.button>
							</li>
						</ul>
					</div>
				</div>
			</Container>
		</motion.div>
	)
}

export default Navbar
