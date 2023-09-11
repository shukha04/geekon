import { FC } from 'react'
import { useTranslations } from 'next-intl'
import 'swiper/css'
import 'swiper/css/effect-cards'
import { EffectCards, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { ReviewCard } from './Card'
import './Reviews.scss'

export const ReviewsSection: FC = () => {
	const t = useTranslations('homePage.reviewsSection')

	return (
		<section className='reviews-section section container' id='reviews'>
			<h2 className='section__title'>
				<span className='section__title-bg'>
					{t('title')}
				</span>
			</h2>
			<p className='section__text'>
				{t('text')}
			</p>
			<Swiper
				className='reviews__slider'
				effect='cards'
				grabCursor={true}
				modules={[ EffectCards, Pagination ]}
				pagination={{ clickable: true }}
			>
				<SwiperSlide className='reviews__slider-item'>
					<ReviewCard
						id='d-winston'
						message='Why end might ask civil again spoil. She dinner she our horses depend. Remember at children by reserved to vicinity. In affronting unreserved delightful simplicity ye. Law own advantage furniture continual sweetness bed agreeable perpetual. Oh song well four only head busy it. Afford son she had lively living. Tastes lovers myself too formal season our valley boy. Lived it their their walls might to by young.'
						name='D Winston'
					/>
				</SwiperSlide>
				<SwiperSlide className='reviews__slider-item'>
					<ReviewCard
						id='d-winston'
						message='Why end might ask civil again spoil. She dinner she our horses depend. Remember at children by reserved to vicinity. In affronting unreserved delightful simplicity ye. Law own advantage furniture continual sweetness bed agreeable perpetual. Oh song well four only head busy it. Afford son she had lively living. Tastes lovers myself too formal season our valley boy. Lived it their their walls might to by young.'
						name='D Winston'
					/>
				</SwiperSlide>
			</Swiper>
		</section>
	)
}
