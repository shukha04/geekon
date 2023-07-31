import { Dispatch } from 'react'
import { TargetAndTransition } from 'framer-motion'

export type CursorState = TargetAndTransition

export enum CursorActionTypes {
	SET_CURSOR = 'SET_CURSOR',
}

export type CursorAction = {
	type: CursorActionTypes.SET_CURSOR
	payload: CursorState
}

export type ContextState = {
	state: CursorState
	dispatch: Dispatch<CursorAction>
}
