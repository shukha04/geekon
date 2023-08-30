'use client'

import { FC, useCallback, useEffect, useRef, useState } from 'react'
import { Content, Item, Link, List, Viewport } from '@radix-ui/react-navigation-menu'
import { motion, useMotionValue, useScroll, useTransform } from 'framer-motion'
import { useTranslations } from 'next-intl'
import Logo from '@/assets/vectors/logo.svg'
import { NavLink } from '@/components/Navbar/ui/NavLink/NavLink'
import { NavToggle } from '../NavToggle/NavToggle'
import { ThemeButton } from '../ThemeButton/ThemeButton'
import './Navbar.scss'
import { NavbarRoot } from './Root'

const scrollThreshold = [ 0, 150 ]
export const Navbar: FC = () => {
	const [ opened, setOpened ] = useState<boolean>(false)
	const { scrollY } = useScroll()
	const scrollYDirectionChange = useRef<number>(scrollY.get())
	const lastScrollPosition = useRef<number>(0)
	const lastScrollDirection = useRef<'down' | 'up'>()
	const pixelsScrolled = useMotionValue(0)
	const navYPosition = useTransform(pixelsScrolled, scrollThreshold, [ 0, -150 ])
	const t = useTranslations('navbar')

	const handleScrollYChange = useCallback(
		(latest: number) => {
			if (latest < 0) {
				return
			}

			const isScrollingDown = scrollY.getPrevious() - latest < 0
			const scrollDirection = isScrollingDown ? 'down' : 'up'
			const currentPixelsScrolled = pixelsScrolled.get()
			let newPixelsScrolled = 0

			if (lastScrollDirection.current !== scrollDirection) {
				lastScrollPosition.current = currentPixelsScrolled
				scrollYDirectionChange.current = latest
			}

			if (isScrollingDown) {
				newPixelsScrolled = Math.min(
					lastScrollPosition.current + (latest - scrollYDirectionChange.current),
					scrollThreshold[1],
				)
			}
			else {
				newPixelsScrolled = Math.max(
					lastScrollPosition.current - (scrollYDirectionChange.current - latest),
					scrollThreshold[0],
				)
			}
			pixelsScrolled.set(newPixelsScrolled)
			lastScrollDirection.current = scrollDirection
		},
		[ pixelsScrolled, scrollY ],
	)

	const handleValueChange = useCallback((value: string) => {
		setOpened(!!value)
	}, [])

	const preventEvent = useCallback((event: any) => {
		event.preventDefault()
	}, [])

	useEffect(() => {
		if (!opened) {
			scrollY.on('change', handleScrollYChange)
		}

		return () => {
			scrollY.clearListeners()
		}
	}, [ handleScrollYChange, opened, scrollY ])

	return (
		<NavbarRoot
			animate={{ y: 0 }}
			className='navbar container'
			initial={{ y: -150 }}
			style={{ y: navYPosition }}
			transition={{
				type: 'spring',
				bounce: 0.5,
				duration: 0.5,
			}}
			onValueChange={handleValueChange}
		>
			<motion.div
				animate={opened ? { height: 'auto' } : { height: '3.333333333em' }}
				className='navbar__wrapper'
				transition={{
					type: 'spring',
					bounce: 0.4,
					duration: 0.4,
				}}
			>
				<div className='navbar__top'>
					<Logo className='logo' />
					<List className='navbar__list'>
						<Item className='navbar__list-item'>
							<ThemeButton />
						</Item>
						<Item className='navbar__list-item'>
							<NavToggle
								opened={opened}
								onPointerLeave={preventEvent}
								onPointerMove={preventEvent}
							/>
							<Content
								className='submenu'
								onPointerLeave={preventEvent}
							>
								<List className='submenu__list'>
									{[ 'main', 'services', 'cases', 'team', 'reviews' ].map((link) => {
										return (
											<Item
												key={link}
												className='submenu__item'
											>
												<Link
													asChild
													className='submenu__link'
												>
													<NavLink
														href={`#${link}`}
														whileHover={{ scale: 1.05 }}
														whileTap={{ scale: 1 }}
														transition={{
															type: 'spring',
															bounce: 0.4,
															duration: 0.4,
														}}
													>
														{t(`links.${link}`)}
													</NavLink>
												</Link>
											</Item>
										)
									})}
								</List>
							</Content>
						</Item>
					</List>
				</div>
				<Viewport
					forceMount
					className='navbar__viewport'
				/>
			</motion.div>
		</NavbarRoot>
	)
}
