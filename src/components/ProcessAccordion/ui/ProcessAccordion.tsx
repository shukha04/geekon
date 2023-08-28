import { FC, MouseEventHandler, useCallback, useState } from 'react'
import { motion } from 'framer-motion'
import classes from './ProcessAccordion.module.scss'

type Props = {
	title: string
	description: string
	number: number
}

const variants = {
	closed: { height: 0 },
	opened: { height: 'auto' },
}

export const ProcessAccordion: FC<Props> = ({ title, description, number }) => {
	const [ open, setOpen ] = useState<boolean>(false)

	const handleClick: MouseEventHandler<HTMLElement> = useCallback((event) => {
		event.preventDefault()

		setOpen((prev) => {
			return !prev
		})
	}, [])

	return (
		<details
			className={classes.accordion}
			open={open}
		>
			<summary
				className={classes.header}
				onClick={handleClick}
			>
				<div className={classes.number}>
					{`0${number}`.slice(-2)}
				</div>
				{title}
			</summary>
			<motion.div
				animate={open ? 'opened' : 'closed'}
				className={classes.content}
				initial='closed'
				variants={variants}
				transition={{
					type: 'spring',
					bounce: 0.5,
					duration: 0.5,
				}}
			>
				<hr className={classes.divider} />
				<p className={classes.text}>
					{description}
				</p>
			</motion.div>
		</details>
	)
}
