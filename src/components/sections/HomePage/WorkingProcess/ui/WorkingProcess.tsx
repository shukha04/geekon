import { FC } from 'react'
import { useTranslations } from 'next-intl'
import BombIcon from '@/assets/icons/bomb-pixel.svg'
import WPIllustration from '@/assets/vectors/wp-illustration.svg'
import { ProcessAccordion } from '@/components/ProcessAccordion/ui/ProcessAccordion'
import { Button } from '@/ui/Button'
import classes from './WorkingProcess.module.scss'

export const WorkingProcess: FC = () => {
	const t = useTranslations('homePage.processSection')

	return (
		<section className={classes.process}>
			<h2 className={classes.title}>
				<span>
					{t('title')}
				</span>
			</h2>
			<p className={classes.text}>
				{t('text')}
			</p>
			<div className={classes.steps}>
				{Array.from(Array(5).keys()).map((number) => {
					return (
						<ProcessAccordion
							key={number}
							description={t(`steps.${number + 1}.description`)}
							number={number + 1}
							title={t(`steps.${number + 1}.title`)}
						/>
					)
				})}
			</div>
			<div className={classes.banner}>
				<div className={classes.content}>
					<h3 className={classes.header}>
						{t('banner.title')}
					</h3>
					<p className={classes.text}>
						{t('banner.text')}
					</p>
					<Button className={classes.button}>
						{t('banner.link')}
						<BombIcon />
					</Button>
				</div>
				<WPIllustration className={classes.illustration} />
			</div>
		</section>
	)
}
