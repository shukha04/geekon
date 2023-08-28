'use client'

import { FC } from 'react'
import { useTranslations } from 'next-intl'
import BombIcon from '@/assets/icons/bomb-pixel.svg'
import Illustration from '@/assets/vectors/main-Illustration.svg'
import { Button } from '@/ui/Button'
import classes from './Main.module.scss'

export const Main: FC = () => {
	const t = useTranslations('homePage.mainSection')

	return (
		<section className={classes.main}>
			<div className={classes.content}>
				<h1 className={classes.title}>
					{t('title')}
				</h1>
				<p className={classes.text}>
					{t('text')}
				</p>
				<Button className={classes.button}>
					{t('link')}
					<BombIcon />
				</Button>
			</div>
			<Illustration className={classes.illustration} />
		</section>
	)
}
