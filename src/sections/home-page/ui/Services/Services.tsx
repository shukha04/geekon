import { ComponentType, FC, useEffect } from 'react'
import { motion, stagger, useAnimate, useInView } from 'framer-motion'
import { useTranslations } from 'next-intl'
import ThreeDIllustration from '@/assets/vectors/3d-illustration.svg'
import AppIllustration from '@/assets/vectors/app-illustration.svg'
import GraphDesIllustration from '@/assets/vectors/graph-des-illustration.svg'
import SMMIllustration from '@/assets/vectors/smm-illustration.svg'
import UIUXIllustration from '@/assets/vectors/uiux-illustration.svg'
import WebDevIllustration from '@/assets/vectors/web-dev-illustration.svg'
import { ServiceCard } from './Card'
import './Services.scss'

const services: { id: string, illustration: ComponentType, color: 'primary' | 'dark' | 'light' }[] = [
	{
		id: 'webDev',
		illustration: WebDevIllustration,
		color: 'primary',
	},
	{
		id: 'appDev',
		illustration: AppIllustration,
		color: 'light',
	},
	{
		id: 'graphDes',
		illustration: GraphDesIllustration,
		color: 'light',
	},
	{
		id: 'uiux',
		illustration: UIUXIllustration,
		color: 'dark',
	},
	{
		id: 'smm',
		illustration: SMMIllustration,
		color: 'dark',
	},
	{
		id: '3d',
		illustration: ThreeDIllustration,
		color: 'primary',
	},
]

const MotionServiceCard = motion(ServiceCard)

export const ServicesSection: FC = () => {
	const t = useTranslations('homePage.servicesSection')
	const [ scope, animate ] = useAnimate<HTMLUListElement>()
	const isInView = useInView(scope, {
		once: true,
		margin: '0px 0px -100px 0px',
	})
	const stages = stagger(0.1, { ease: 'easeOut' })

	useEffect(() => {
		if (isInView) {
			animate('.child', {
				x: 0,
				opacity: 1,
			}, {
				delay: stages,
				duration: 0.4,
				type: 'spring',
				bounce: 0.4,
			})
		}
	}, [ isInView, stages, animate ])
	return (
		<section className='services-section section container' id='services'>
			<h2 className='section__title'>
				<span className='section__title-bg'>
					{t('title')}
				</span>
			</h2>
			<p className='section__text'>
				{t('text')}
			</p>
			<ul className='services-section__list' ref={scope}>
				{services.map(({
					id,
					illustration: Illustration,
					color,
				}) => {
					return (
						<MotionServiceCard
							key={id}
							className='services-section__list-item child'
							color={color}
							id={id}
							illustration={Illustration}
							whileHover={{ scale: 1.025 }}
							initial={{
								opacity: 0,
								x: 100,
							}}
						/>
					)
				})}
			</ul>
		</section>
	)
}
