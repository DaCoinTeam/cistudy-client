"use client"
import "./globals.css"
import React from "react"
import { ReduxProviders } from "@redux"
import WrappedRootLayout from "./_layout"
import { ContextProps } from "./_shared"
import { MetamaskProviders } from "./_hooks"
import { InitializationProviders } from "./_hooks"

const RootLayout = (props: ContextProps) => {
    return (
        <ReduxProviders>
            <MetamaskProviders>
                <WrappedRootLayout>
                    <InitializationProviders>{props.children}</InitializationProviders>
                </WrappedRootLayout>
            </MetamaskProviders>
        </ReduxProviders>
    )
}
export default RootLayout
