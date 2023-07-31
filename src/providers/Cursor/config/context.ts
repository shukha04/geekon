'use client'

import { createContext } from 'react'
import { ContextState, CursorState } from './types'

export const initialState: CursorState = {}

export const Context = createContext<ContextState>({ state: initialState, dispatch: () => {} })
