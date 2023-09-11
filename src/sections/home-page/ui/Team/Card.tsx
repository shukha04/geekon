import { AllHTMLAttributes, forwardRef } from 'react'
import { Root as Separator } from '@radix-ui/react-separator'
import cx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import InfoIcon from '@/assets/icons/info-circle.svg'

type Props = {
	id: string
	imageUrl: string
	name: string
	position: string
	bio: string
} & AllHTMLAttributes<any>

export const MemberCard = forwardRef<HTMLDivElement, Props>(({
	id,
	imageUrl,
	name,
	position,
	bio,
	className,
	...props
}, forwardedRef) => {
	return (
		<div className={cx('member-card', className)} ref={forwardedRef} {...props}>
			<Link className='member-card__link' href={`/team/${id}`}>
				<div className='member-card__top'>
					<InfoIcon className='member-card__top-icon' />
					<div className='member-card__image-wrapper'>
						<Image alt={name} className='member-card__image' height={90} src={imageUrl} width={90} />
						<svg className='member-card__image-mask' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'>
							<clipPath clipPathUnits='objectBoundingBox' id='memberCardImageMask'>
								<path
									d='M 0.856715 0.5 C 1.19245 0.88242 0.88242 1.19245 0.5 0.856715 C 0.11758 1.19245 -0.192447 0.88242 0.143285 0.5 C -0.192447 0.11758 0.11758 -0.192447 0.5 0.143285 C 0.88242 -0.192447 1.19245 0.11758 0.856715 0.5 Z'
								/>
							</clipPath>
						</svg>
					</div>
					<div className='member-card__captions'>
						<h6 className='member-card__name'>
							{name}
						</h6>
						<p className='member-card__position'>
							{position}
						</p>
					</div>
				</div>
				<Separator className='member-card__separator' />
				<div className='member-card__content'>
					<p className='member-card__text'>
						{bio}
					</p>
				</div>
			</Link>
		</div>
	)
})

MemberCard.displayName = 'MemberCard'
