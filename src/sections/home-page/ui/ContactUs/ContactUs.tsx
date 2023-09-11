import { FC } from 'react'
import { useTranslations } from 'next-intl'

export const ContactUsSection: FC = () => {
	const t = useTranslations('homePage.contactUsSection')

	return (
		<section className='contact-us-section section container' id='contact-us'>
			<h2 className='section__title'>
				<span className='section__title-bg'>
					{t('title')}
				</span>
			</h2>
			<p className='section__text'>
				{t('text')}
			</p>
			<div className='contact-form'>
				<h2 className='contact-form__title' />
			</div>
		</section>
	)
}
