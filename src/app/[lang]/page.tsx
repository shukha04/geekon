'use client'

import { FC } from 'react'
import { Cases } from '@/components/sections/HomePage/Cases'
import { Main } from '@/components/sections/HomePage/Main'
import { Services } from '@/components/sections/HomePage/Services'
import { WorkingProcess } from '@/components/sections/HomePage/WorkingProcess'

const Index: FC = () => {
	return (
		<>
			<Main />
			<Services />
			<Cases />
			<WorkingProcess />
		</>
	)
}

export default Index
