import { createContext, Dispatch, FC, ReactNode, useMemo, useReducer } from 'react'
import { TargetAndTransition } from 'framer-motion'

type CursorState = { hovering: boolean; animation?: TargetAndTransition }

export enum CursorActionTypes {
	SET_CURSOR = 'SET_CURSOR',
}

type CursorAction = {
	type: CursorActionTypes.SET_CURSOR
	payload: CursorState
}

const reducer = (state: CursorState, action: CursorAction): CursorState => {
	switch (action.type) {
		case CursorActionTypes.SET_CURSOR: {
			return action.payload
		}
		default: {
			return state
		}
	}
}

const initialState: CursorState = { hovering: false }

type ContextState = {
	state: CursorState
	dispatch: Dispatch<CursorAction>
}

type CursorContextProviderProps = {
	children?: ReactNode
}

export const CursorContext = createContext<ContextState>({ state: initialState, dispatch: () => {} })

const CursorContextProvider: FC<CursorContextProviderProps> = ({ children }) => {
	const [ state, dispatch ] = useReducer(reducer, initialState)
	const contextValue = useMemo(() => {
		return { state, dispatch }
	}, [ state, dispatch ])

	return (
		<CursorContext.Provider value={contextValue}>
			{children}
		</CursorContext.Provider>
	)
}

export default CursorContextProvider
