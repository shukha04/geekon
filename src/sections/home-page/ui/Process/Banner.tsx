import { forwardRef, HTMLAttributes } from 'react'
import cx from 'clsx'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { ButtonLink } from '@/components/ButtonLink/ui/ButtonLink'
import { OfferIllustration } from './Illustration'

const MotionLink = motion(ButtonLink)
export const Banner = forwardRef<HTMLDivElement, HTMLAttributes<any>>(({
	className,
	...props
}, forwardedRef) => {
	const t = useTranslations('homePage.processSection.banner')

	return (
		<div {...props} className={cx('offer', className)} ref={forwardedRef}>
			<div className='offer__content'>
				<h3 className='offer__title'>
					{t('title')}
				</h3>
				<p className='offer__text'>
					{t('text')}
				</p>
				<MotionLink color='dark' href='/contact-us' icon='bomb' whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}>
					{t('link')}
				</MotionLink>
			</div>
			<OfferIllustration className='offer__illustration' />
		</div>
	)
})

Banner.displayName = 'OfferBanner'
