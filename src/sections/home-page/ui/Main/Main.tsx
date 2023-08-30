import { FC, useEffect } from 'react'
import { motion, stagger, useAnimate } from 'framer-motion'
import { useTranslations } from 'next-intl'
import Illustration from '@/assets/vectors/main-Illustration.svg'
import { ButtonLink } from '@/components/ButtonLink/ui/ButtonLink'
import './Main.scss'

const MotionButton = motion(ButtonLink)

const initial = {
	x: -200,
	opacity: 0,
}

export const MainSection: FC = () => {
	const t = useTranslations('homePage.mainSection')
	const [ contentScope, animateContent ] = useAnimate()
	const [ illustrationScope, animateIllustration ] = useAnimate()
	const stages = stagger(0.2, { startDelay: 0.4 })

	useEffect(() => {
		animateContent('.child', { x: 0, opacity: 1 }, { delay: stages })
	}, [ animateContent, stages ])

	useEffect(() => {
		animateIllustration('path', { transform: 'translateY(-20px)' }, { repeat: Infinity, duration: 1 })
	}, [ animateIllustration ])

	return (
		<section className='main-section section container' id='main'>
			<div className='main-section__content' ref={contentScope}>
				<motion.h1 className='main-section__content-title child' initial={initial}>
					{t('title')}
				</motion.h1>
				<motion.p className='main-section__content-text child' initial={initial}>
					{t('text')}
				</motion.p>
				<MotionButton className='main-section__content-link child' href='/contact-us' icon='bomb' initial={initial}>
					{t('link')}
				</MotionButton>
			</div>
			<motion.div
				animate={{ opacity: 1, y: 0 }} className='main-section__illustration' initial={{ opacity: 0, y: 200 }} ref={illustrationScope}
			>
				<Illustration />
			</motion.div>
		</section>
	)
}
