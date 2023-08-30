import { ButtonHTMLAttributes, forwardRef } from 'react'
import { NavigationMenuTriggerProps, Trigger } from '@radix-ui/react-navigation-menu'
import cx from 'clsx'
import { motion } from 'framer-motion'

type Props = {
	opened?: boolean
} & ButtonHTMLAttributes<any> &
	NavigationMenuTriggerProps

export const NavToggle = forwardRef<HTMLButtonElement, Props>(({
	opened,
	className,
	...props
}, forwardedRef) => {
	return (
		<Trigger
			{...props}
			className={cx('nav-toggle', className)}
			ref={forwardedRef}
		>
			<motion.span aria-hidden />
			<motion.span aria-hidden />
		</Trigger>
	)
})

NavToggle.displayName = Trigger.displayName
