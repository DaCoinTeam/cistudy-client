"use client"
import { createContext } from "react"
import { ContextProps } from "@app/_shared"
import useInitialization from "./useInitialization.hook"
import React from "react"

export interface InitializationContextProps{
}

export const InitializationContext = createContext<InitializationContextProps | null>(null)

const  InitializationProviders = (props: ContextProps) => {
    useInitialization()

    return (
        <InitializationContext.Provider value={null}>
            {props.children}
        </InitializationContext.Provider>
    )
}

export default InitializationProviders