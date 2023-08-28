import { ComponentType, FC, SVGProps } from 'react'
import clsx from 'clsx'
import Link from 'next/link'
import LinkIcon from '@/assets/icons/link-circle.svg'
import classes from './ServiceCard.module.scss'

type Props = {
	title: string
	subtitle: string
	illustration: ComponentType<SVGProps<any>>
	color?: 'dark' | 'main' | 'light'
	link: {
		label: string
		href: string
	}
}

export const ServiceCard: FC<Props> = ({ title, subtitle, illustration: Illustration, color = 'main', link }) => {
	return (
		<div className={clsx(classes.card, classes[color])}>
			<h3 className={classes.title}>
				<span>
					{title}
				</span>
				<span className={classes.secondary}>
					{subtitle}
				</span>
			</h3>
			<Link
				className={classes.link}
				href={link.href}
			>
				<LinkIcon className={classes.icon} />
				<span className={classes.label}>
					{link.label}
				</span>
			</Link>

			<Illustration className={classes.illustration} />
		</div>
	)
}
