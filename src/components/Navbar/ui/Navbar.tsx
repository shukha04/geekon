'use client'

import { FC, useCallback, useEffect, useRef, useState } from 'react'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import clsx from 'clsx'
import { motion, useMotionValue, useScroll, useTransform } from 'framer-motion'
import { useTranslations } from 'next-intl'
import InstagramIcon from '@/assets/icons/instagram-circle.svg'
import MailIcon from '@/assets/icons/mail-outline.svg'
import TelegramIcon from '@/assets/icons/telegram-circle.svg'
import WhatsappIcon from '@/assets/icons/whatsapp-circle.svg'
import Logo from '@/assets/vectors/logo.svg'
import { Container } from '@/components/Container'
import classes from './Navbar.module.scss'

const scrollThreshold = [ 0, 200 ]

export const Navbar: FC = () => {
	const [ opened, setOpened ] = useState<boolean>(false)
	const { scrollY } = useScroll()
	const scrollYDirectionChange = useRef<number>(scrollY.get())
	const lastScrollPosition = useRef<number>(0)
	const lastScrollDirection = useRef<'down' | 'up'>()
	const pixelsScrolled = useMotionValue(0)
	const navYPosition = useTransform(pixelsScrolled, scrollThreshold, [ 0, -150 ])
	const t = useTranslations('navbar.links')

	const preventEvent = useCallback((event: any) => {
		event.preventDefault()
	}, [])

	const handleValueChange = useCallback((value: string) => {
		setOpened(!!value)
	}, [])

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

	useEffect(() => {
		if (!opened) {
			scrollY.on('change', handleScrollYChange)
		}

		return () => {
			scrollY.clearListeners()
		}
	}, [ handleScrollYChange, opened, scrollY ])

	return (
		<NavigationMenu.Root
			asChild
			onValueChange={handleValueChange}
		>
			<motion.nav
				animate={{ y: 0 }}
				className={classes.navbar}
				initial={{ y: -150 }}
				style={{ y: navYPosition }}
				transition={{
					type: 'spring',
					bounce: 0.5,
					duration: 0.5,
				}}
			>
				<Container>
					<div className={classes.wrapper}>
						<div className={classes.top}>
							<Logo className={classes.logo} />
							<NavigationMenu.List className={classes.links}>
								<NavigationMenu.Item>
									<NavigationMenu.Link className={classes.link}>
										<MailIcon aria-hidden />
									</NavigationMenu.Link>
								</NavigationMenu.Item>
								<NavigationMenu.Item value='menu'>
									<NavigationMenu.Trigger
										className={clsx(classes.link, classes.menu)}
										onPointerLeave={preventEvent}
										onPointerMove={preventEvent}
									>
										<span aria-hidden />
										<span aria-hidden />
									</NavigationMenu.Trigger>
									<NavigationMenu.Content
										className={classes.content}
										onPointerLeave={preventEvent}
									>
										<NavigationMenu.List className={classes.links}>
											{[ 'main', 'services', 'cases', 'team', 'reviews' ].map((link) => {
												return (
													<NavigationMenu.Item key={link}>
														<NavigationMenu.Link
															className={classes.link}
															href={`/#${link}`}
														>
															{t(link)}
														</NavigationMenu.Link>
													</NavigationMenu.Item>
												)
											})}
										</NavigationMenu.List>
										<NavigationMenu.List className={classes.sm}>
											<NavigationMenu.Item className={classes.item}>
												<NavigationMenu.Link className={classes.link}>
													<InstagramIcon />
												</NavigationMenu.Link>
											</NavigationMenu.Item>
											<NavigationMenu.Item className={classes.item}>
												<NavigationMenu.Link className={classes.link}>
													<TelegramIcon />
												</NavigationMenu.Link>
											</NavigationMenu.Item>
											<NavigationMenu.Item className={classes.item}>
												<NavigationMenu.Link className={classes.link}>
													<WhatsappIcon />
												</NavigationMenu.Link>
											</NavigationMenu.Item>
										</NavigationMenu.List>
									</NavigationMenu.Content>
								</NavigationMenu.Item>
							</NavigationMenu.List>
						</div>
						<NavigationMenu.Viewport className={classes.viewport} />
					</div>
				</Container>
			</motion.nav>
		</NavigationMenu.Root>
	)
}
