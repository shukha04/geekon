import { AnimationScope } from 'framer-motion'

export type ContextState = {
	readonly cursorRef?: AnimationScope<HTMLDivElement>
	animateCursor?: any
	followMouse: () => void
	unfollowMouse: () => void
}
