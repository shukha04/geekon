'use client'

import { FC, useCallback } from 'react'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import InstagramIcon from '@/assets/icons/instagram-circle.svg'
import MailIcon from '@/assets/icons/mail-outline.svg'
import TelegramIcon from '@/assets/icons/telegram-circle.svg'
import WhatsappIcon from '@/assets/icons/whatsapp-circle.svg'
import Logo from '@/assets/vectors/logo.svg'
import { Container } from '@/components/Container'
import classes from './Navbar.module.scss'

export const Navbar: FC = () => {
	const t = useTranslations('navbar.links')

	const preventEvent = useCallback((event: any) => {
		event.preventDefault()
	}, [])

	return (
		<NavigationMenu.Root asChild>
			<motion.nav
				animate={{ y: 0 }}
				className={classes.navbar}
				initial={{ y: -150 }}
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
