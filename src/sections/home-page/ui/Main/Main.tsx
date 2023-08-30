import { FC, useEffect } from 'react'
import { motion, stagger, useAnimate } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { ButtonLink } from '@/components/ButtonLink/ui/ButtonLink'
import { MainIllustration } from './Illustration'
import './Main.scss'


const initial = {
	x: -200,
	opacity: 0,
	scale: 1,
}

export const MainSection: FC = () => {
	const t = useTranslations('homePage.mainSection')
	const [ contentScope, animateContent ] = useAnimate()
	const stages = stagger(0.2, { startDelay: 0.4 })

	useEffect(() => {
		animateContent('.child', {
			x: 0,
			opacity: 1,
			scale: 1,
		}, { delay: stages })
	}, [ animateContent, stages ])

	return (
		<section className='main-section section container' id='main'>
			<div className='main-section__content' ref={contentScope}>
				<motion.h1 className='main-section__content-title child' initial={initial}>
					{t('title')}
				</motion.h1>
				<motion.p className='main-section__content-text child' initial={initial}>
					{t('text')}
				</motion.p>
				<ButtonLink className='main-section__content-link child' href='/contact-us' icon='bomb' initial={initial}>
					{t('link')}
				</ButtonLink>
			</div>
			<MainIllustration />
		</section>
	)
}
