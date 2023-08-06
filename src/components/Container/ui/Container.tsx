import { ElementType, forwardRef, HTMLProps, ReactNode } from 'react'
import clsx from 'clsx'
import classes from './Container.module.scss'

type Props = {
	children?: ReactNode
	tag?: ElementType
} & HTMLProps<HTMLElement>

export const Container = forwardRef<HTMLElement, Props>(({ children, tag, ...rest }, ref) => {
	const Tag = tag || 'div'

	return (
		<Tag
			{...rest}
			className={clsx(classes.container, rest.className)}
			ref={ref}
		>
			{children}
		</Tag>
	)
})

Container.displayName = 'Container'
