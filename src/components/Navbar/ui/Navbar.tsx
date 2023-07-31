'use client'

import { FC, useCallback, useContext } from 'react'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import Logo from '@/assets/vectors/logo.svg'
import { Container } from '@/components/Container'
import { CursorActionTypes, CursorContext } from '@/providers/Cursor'
import classes from './Navbar.module.scss'

export const Navbar: FC = () => {
	const { dispatch } = useContext(CursorContext)

	const handleLogoMouseEnter = useCallback(() => {
		dispatch({
			type: CursorActionTypes.SET_CURSOR,
			payload: { mixBlendMode: 'exclusion' },
		})
	}, [ dispatch ])

	const handleLogoMouseLeave = useCallback(() => {
		dispatch({
			type: CursorActionTypes.SET_CURSOR,
			payload: { mixBlendMode: 'normal' },
		})
	}, [ dispatch ])

	return (
		<Container className={classes.navbar}>
			<NavigationMenu.Root className={classes.wrapper}>
				<div className={classes.top}>
					<Logo
						className={classes.logo}
						onMouseEnter={handleLogoMouseEnter}
						onMouseLeave={handleLogoMouseLeave}
					/>
					<NavigationMenu.List />
				</div>
			</NavigationMenu.Root>
		</Container>
	)
}
