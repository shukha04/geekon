import { ElementType, FC, forwardRef, HTMLAttributes, ReactNode } from 'react'
import clsx from 'clsx'
import classes from '@/styles/container.module.scss'

type ContainerProps = {
	children?: ReactNode
	tag?: ElementType
}

const Container: FC<ContainerProps & HTMLAttributes<HTMLElement>> = forwardRef(({ children, tag, ...rest }, ref) => {
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
export default Container
