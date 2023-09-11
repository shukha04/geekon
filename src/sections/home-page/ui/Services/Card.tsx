import { ComponentType, forwardRef, HTMLAttributes, SVGProps } from 'react'
import cx from 'clsx'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import LinkIcon from '@/assets/icons/link-circle.svg'

type Props = {
	id: string
	illustration: ComponentType<SVGProps<any>>
	color?: 'primary' | 'dark' | 'light'
} & HTMLAttributes<any>

export const ServiceCard = forwardRef<HTMLDivElement, Props>(({
	className,
	id,
	illustration: Illustration,
	color = 'primary',
	...props
}, forwardedRef) => {
	const t = useTranslations('homePage.servicesSection')

	return (
		<div {...props} className={cx('card', className, color)} ref={forwardedRef}>
			<Link className='card__content-wrapper' href='/contact-us'>
				<h3 className='card__title'>
					<span className='card__title-primary'>
						{t(`services.${id}.primary`)}
					</span>
					<span className='card__title-secondary'>
						{t(`services.${id}.secondary`)}
					</span>
				</h3>
				<Illustration className='card__illustration' />
				<span className='card__label'>
					<LinkIcon className='card__label-icon' />
					<span className='card__label-text'>
						{t('link')}
					</span>
				</span>
			</Link>
		</div>
	)
})

ServiceCard.displayName = 'ServiceCard'
