import { FC, HTMLAttributes, ReactNode } from 'react'

type ButtonProps = {
	children?: ReactNode
}

const Button: FC<ButtonProps & HTMLAttributes<HTMLButtonElement>> = ({ children, ...rest }) => {
	return (
		<button {...rest}>
			{children}
		</button>
	)
}

export default Button
