'use client'

import { useSyncExternalStore } from 'react'

const subscribe = (handler: () => void) => {
	window.addEventListener('scroll', handler)

	return () => {
		window.removeEventListener('scroll', handler)
	}
}

const useScrollY = (selector = (y: any) => {
	return y
}) => {
	return useSyncExternalStore(
		subscribe,
		() => {
			return selector(window.scrollY)
		},
		() => {
			return undefined
		},
	)
}

export default useScrollY
