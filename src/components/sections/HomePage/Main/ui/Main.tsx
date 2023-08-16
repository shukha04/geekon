'use client'

import { FC } from 'react'
import BombIcon from '@/assets/icons/bomb-pixel.svg'
import Illustration from '@/assets/vectors/main-Illustration.svg'
import { Button } from '@/ui/Button'
import classes from './Main.module.scss'

export const Main: FC = () => {
	return (
		<div className={classes.main}>
			<div className={classes.text}>
				<h1 className={classes.title}>Custom Apps & Websites: Your Unique Solution!</h1>
				<p>
					Make your dreams come true with our expert design team! Unique software, web applications and IT solutions
					guaranteed to help you reach your goals!
				</p>
				<Button>
					Discuss project
					<BombIcon />
				</Button>
			</div>
			<div className={classes.illustration}>
				<Illustration />
			</div>
		</div>
	)
}
