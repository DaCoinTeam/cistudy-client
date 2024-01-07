"use client"
import React from "react"
import { FormikProviders } from "./_hooks"
import { ContextProps } from "@app/_shared"

const RootLayout = (props: ContextProps) => {
    return <FormikProviders>{props.children}</FormikProviders>
}
export default RootLayout
