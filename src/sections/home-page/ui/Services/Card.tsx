import { ComponentType, forwardRef, HTMLAttributes, SVGProps } from 'react'
import cx from 'clsx'
import Link from 'next/link'

type Props = {
	primaryTitle: string,
	secondaryTitle: string
	illustration: ComponentType<SVGProps<any>>
} & HTMLAttributes<any>

export const ServiceCard = forwardRef<HTMLDivElement, Props>(({ className, primaryTitle, secondaryTitle, illustration: Illustration, ...props }, forwardedRef) => {
	return (
		<div {...props} className={cx('card', className)} ref={forwardedRef}>
			<Link className='card__content-wrapper' href='/contact-us'>
				<h3 className='card__title'>
					<span className='card__title-primary'>
						{primaryTitle}
					</span>
					<span className='card__title-secondary'>
						{secondaryTitle}
					</span>
				</h3>
				<Illustration className='card__illustration' />
				<span className='label' />
			</Link>
		</div>
	)
})

ServiceCard.displayName = 'ServiceCard'
