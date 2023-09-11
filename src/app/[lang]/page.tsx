'use client'

import { FC } from 'react'
import { ContactUsSection, MainSection, ProcessSection, ReviewsSection, ServicesSection, TeamSection } from '@/sections/home-page'

const Index: FC = () => {
	return (
		<>
			<MainSection />
			<ServicesSection />
			<ProcessSection />
			<TeamSection />
			<ReviewsSection />
			<ContactUsSection />
		</>
	)
}

export default Index
