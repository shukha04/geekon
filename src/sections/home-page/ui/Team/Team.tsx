import { FC } from 'react'
import { useTranslations } from 'next-intl'
import { MemberCard } from '@/sections/home-page/ui/Team/Card'
import './Team.scss'

const members: string[] = [
	'daler-firuzov',
	'shukhrat-rustamov',
	'sabina-izmailova',
	'saveliy-kurov',
	'samat-yakupov',
	'iskander-bajrashev',
]

export const TeamSection: FC = () => {
	const t = useTranslations('homePage.teamSection')

	return (
		<section className='team-section section container'>
			<h2 className='section__title'>
				<span className='section__title-bg'>
					{t('title')}
				</span>
			</h2>
			<p className='section__text'>
				{t('text')}
			</p>
			<ul className='members__list'>
				{members.map((id) => {
					return (
						<li key={id} className='members__list-item'>
							<MemberCard
								bio={t(`members.${id}.bio`)} id={id} imageUrl='/images/employees/daler-firuzov.jpg' name={t(`members.${id}.name`)}
								position={t(`members.${id}.position`)}
							/>
						</li>
					)
				})}
			</ul>
		</section>
	)
}
