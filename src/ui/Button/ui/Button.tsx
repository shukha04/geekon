import { FC, forwardRef, HTMLAttributes, ReactNode } from 'react'
import clsx from 'clsx'
import { ButtonColors } from '../config/types'
import classes from './Button.module.scss'

type Props = {
	children?: ReactNode
	color?: ButtonColors
} & HTMLAttributes<HTMLButtonElement>

export const Button: FC<Props> = forwardRef<HTMLButtonElement, Props>(({ children, color = ButtonColors.DARK, ...rest }, ref) => {
	return (
		<button
			{...rest}
			className={clsx(classes.button, classes[color], rest.className)}
			ref={ref}
		>
			{children}
		</button>
	)
})

Button.displayName = 'Button'
