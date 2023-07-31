import { ElementType, FC, HTMLAttributes, ReactNode } from 'react'
import clsx from 'clsx'
import classes from './Container.module.scss'

type Props = {
	children?: ReactNode
	tag?: ElementType
} & HTMLAttributes<HTMLElement>

export const Container: FC<Props> = ({ children, tag, ...rest }) => {
	const Tag = tag || 'div'

	return (
		<Tag
			{...rest}
			className={clsx(classes.container, rest.className)}
		>
			{children}
		</Tag>
	)
}
