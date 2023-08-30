import { FC } from 'react'
import { useTranslations } from 'next-intl'

export const ServicesSection: FC = () => {
	const t = useTranslations('homePage.servicesSection')
	return (
		<section className='services-section section container' id='services'>
			<h2 className='section__title'>
				{t('title')}
			</h2>
			<p className='section__text'>
				{t('text')}
			</p>
		</section>
	)
}
