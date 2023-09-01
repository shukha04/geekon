import { ComponentType, FC } from 'react'
import { useTranslations } from 'next-intl'
import { ServiceCard } from '@/sections/home-page/ui/Services/Card'
import { SMMIllustration } from '@/sections/home-page/ui/Services/SMMIllustration'
import { UIUXIllustration } from '@/sections/home-page/ui/Services/UIUXIllustration'
import { AppIllustration } from './AppIllustration'
import { GraphDesIllustration } from './GraphDesIllustration'
import { WebDevIllustration } from './WebDevIllustration'

const services: { id: string, illustration: ComponentType }[] = [
	{
		id: 'webDev',
		illustration: WebDevIllustration,
	},
	{
		id: 'appDev',
		illustration: AppIllustration,
	},
	{
		id: 'graphDes',
		illustration: GraphDesIllustration,
	},
	{
		id: 'uiux',
		illustration: UIUXIllustration,
	},
	{
		id: 'smm',
		illustration: SMMIllustration,
	},
]

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
			<ul className='services-section__list'>
				{services.map(({ id, illustration: Illustration }) => {
					return (
						<ServiceCard
							key={id} illustration={Illustration} primaryTitle={t(`services.${id}.primary`)} secondaryTitle={t(`services.${id}.secondary`)}
						/>
					)
				})}
			</ul>
		</section>
	)
}
