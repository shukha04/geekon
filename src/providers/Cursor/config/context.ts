'use client'

import { createContext } from 'react'
import { ContextState } from './types'

export const Context = createContext<ContextState>({ followMouse: () => {}, unfollowMouse: () => {} })
