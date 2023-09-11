import { FC, useEffect } from 'react'
import { Content, Header, Item, Root, Trigger } from '@radix-ui/react-accordion'
import { Root as Separator } from '@radix-ui/react-separator'
import { motion, stagger, useAnimate, useInView } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Banner } from './Banner'
import './Process.scss'

const MotionAccordionItem = motion(Item)

export const ProcessSection: FC = () => {
	const t = useTranslations('homePage.processSection')
	const [ scope, animate ] = useAnimate()
	const isInView = useInView(scope, {
		once: true,
		margin: '0px 0px -100px 0px',
	})
	const stages = stagger(0.1, { ease: 'easeOut' })

	useEffect(() => {
		if (isInView) {
			animate('.child', {
				y: 0,
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
		<section className='process-section section container' id='process'>
			<h2 className='section__title'>
				<span className='section__title-bg'>
					{t('title')}
				</span>
			</h2>
			<p className='section__text'>
				{t('text')}
			</p>

			<Root collapsible className='process-section__accordion accordion' ref={scope} type='single'>
				{Array.from(Array(5)
					.keys())
					.map((step) => {
						return (
							<MotionAccordionItem
								key={step} className='accordion__item child' value={(step + 1).toString()} whileHover={{ scale: 1.015 }} initial={{
									opacity: 0,
									y: 100,
								}}
							>
								<Header className='accordion__title'>
									<Trigger className='accordion__title-wrapper'>
										<span className='accordion__title-number'>
											{`0${step + 1}`.slice(-2)}
										</span>
										<span className='accordion__title-text'>
											{t(`steps.${step + 1}.title`)}
										</span>
										<span className='accordion__title-icon'>
											<span className='accordion__title-indicator' />
											<span className='accordion__title-indicator' />
										</span>
									</Trigger>
								</Header>
								<Content className='accordion__content'>
									<Separator className='accordion__separator' />
									<p className='accordion__content-text'>
										{t(`steps.${step + 1}.description`)}
									</p>
								</Content>
							</MotionAccordionItem>
						)
					})}
			</Root>
			<Banner className='banner' />
		</section>
	)
}
