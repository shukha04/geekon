import { AllHTMLAttributes, forwardRef } from 'react'
import cx from 'clsx'
import Image from 'next/image'

type Props = {
	name: string
	imageLink?: string
	message: string
	job?: string
	companyLogoLink?: string
} & AllHTMLAttributes<any>
export const ReviewCard = forwardRef<HTMLDivElement, Props>(({
	name,
	imageLink,
	message,
	job,
	companyLogoLink,
	className,
}, forwardedRef) => {
	return (
		<div className={cx('review-card', className)} ref={forwardedRef}>
			<div className='review-card__content'>
				<div className='review-card__image'>
					{imageLink
						? <Image alt={name} className='review-card__image-item' src={imageLink} />
						: <span className='review-card__image-item' />}
				</div>
				<p className='review-card__message'>
					{message}
				</p>
			</div>
			<div className='review-card__footer'>
				<div className='review-card__info'>
					<h6 className='review-card__name'>
						{name}
					</h6>
					<small className='review-card__job'>
						{job}
					</small>
				</div>
				{companyLogoLink
					? <Image alt={name} className='review-card__company' src={companyLogoLink} />
					: null}
			</div>
		</div>
	)
})

ReviewCard.displayName = 'ReviewCard'
