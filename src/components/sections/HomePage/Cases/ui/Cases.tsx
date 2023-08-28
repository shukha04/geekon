import { FC } from 'react'
import { useTranslations } from 'next-intl'
import classes from './Cases.module.scss'

export const Cases: FC = () => {
	const t = useTranslations('homePage.casesSection')
	return (
		<section className={classes.cases}>
			<h2 className={classes.title}>
				{t('title')}
			</h2>
			<p className={classes.text}>
				{t('text')}
			</p>
		</section>
	)
}
