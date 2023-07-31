import { CursorAction, CursorActionTypes, CursorState } from './types'

export const reducer = (state: CursorState, action: CursorAction): CursorState => {
	switch (action.type) {
		case CursorActionTypes.SET_CURSOR: {
			return { ...state, ...action.payload }
		}
		default: {
			return state
		}
	}
}
