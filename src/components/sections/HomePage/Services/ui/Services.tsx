import { useTranslations } from 'next-intl'
import MDIllustration from '@/assets/vectors/3d-illustration.svg'
import AppIllustration from '@/assets/vectors/app-illustration.svg'
import GraphIllustration from '@/assets/vectors/graph-Illustration.svg'
import SMMIllustration from '@/assets/vectors/smm-illustration.svg'
import UIUXIllustration from '@/assets/vectors/uiux-Illustration.svg'
import WebIllustration from '@/assets/vectors/web-illustration.svg'
import { ServiceCard } from '@/components/ServiceCard'
import classes from './Services.module.scss'

export const Services = () => {
	const t = useTranslations('homePage.servicesSection')

	return (
		<section className={classes.services}>
			<h2 className={classes.title}>
				{t('title')}
			</h2>
			<p className={classes.text}>
				{t('text')}
			</p>
			<ul className={classes.list}>
				<li className={classes.item}>
					<ServiceCard
						illustration={WebIllustration}
						link={{ label: t('link'), href: '' }}
						subtitle={t('services.webDev.secondary')}
						title={t('services.webDev.primary')}
					/>
				</li>
				<li className={classes.item}>
					<ServiceCard
						color='light'
						illustration={AppIllustration}
						link={{ label: t('link'), href: '' }}
						subtitle={t('services.appDev.secondary')}
						title={t('services.appDev.primary')}
					/>
				</li>
				<li className={classes.item}>
					<ServiceCard
						color='light'
						illustration={GraphIllustration}
						link={{ label: t('link'), href: '' }}
						subtitle={t('services.graphDes.secondary')}
						title={t('services.graphDes.primary')}
					/>
				</li>
				<li className={classes.item}>
					<ServiceCard
						color='dark'
						illustration={UIUXIllustration}
						link={{ label: t('link'), href: '' }}
						subtitle={t('services.uiux.secondary')}
						title={t('services.uiux.primary')}
					/>
				</li>
				<li className={classes.item}>
					<ServiceCard
						color='dark'
						illustration={SMMIllustration}
						link={{ label: t('link'), href: '' }}
						subtitle={t('services.smm.secondary')}
						title={t('services.smm.primary')}
					/>
				</li>
				<li className={classes.item}>
					<ServiceCard
						illustration={MDIllustration}
						link={{ label: t('link'), href: '' }}
						subtitle={t('services.3d.secondary')}
						title={t('services.3d.primary')}
					/>
				</li>
			</ul>
		</section>
	)
}
