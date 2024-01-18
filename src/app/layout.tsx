"use client"
import "./globals.css"
import React from "react"
import { ReduxProviders } from "@redux"
import WrappedRootLayout from "./_layout"
import { ContextProps } from "./_shared"
import { InitializationProviders } from "./_hooks"

const RootLayout = (props: ContextProps) => {
    return (
        <ReduxProviders>
            <WrappedRootLayout>
                <InitializationProviders>{props.children}</InitializationProviders>
            </WrappedRootLayout>
        </ReduxProviders>
    )
}
export default RootLayout
