import { AnchorHTMLAttributes, forwardRef } from 'react'
import cx from 'clsx'
import { motion } from 'framer-motion'
import Link from 'next/link'
import BombIcon from '@/assets/icons/bomb-pixel.svg'
import WandIcon from '@/assets/icons/wand-pixel.svg'
import './ButonLink.scss'

type Props = {
	href: string
	icon?: 'bomb' | 'wand'
	color?: 'dark' | 'light'
} & AnchorHTMLAttributes<any>

const MotionLink = motion(Link)

export const ButtonLink = forwardRef<HTMLAnchorElement, Props>(({ children, icon, color = 'light', className, ...props }, forwardedRef) => {
	return (
		<Link {...props} className={cx('button-link', color, className)} ref={forwardedRef} role='link'>
			<span className='button-link__label'>
				{children}
			</span>
			{icon? icon === 'bomb' ? <BombIcon className='button-link__icon icon bomb' /> : <WandIcon className='button-link__icon icon wand' />: null}
		</Link>
	)
})

ButtonLink.displayName = Link.displayName
