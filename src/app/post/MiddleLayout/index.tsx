"use client"
import React from "react"
import { MiddleLayoutProviders } from "./hooks"
import WrappedMiddleLayout from "./WrappedMiddleLayout"

interface MiddleLayoutProps {
    className?: string
}

const MiddleLayout = (props: MiddleLayoutProps) => {
    return (
        <div className={`${props.className}`}>
            <MiddleLayoutProviders>
                <WrappedMiddleLayout/>
            </MiddleLayoutProviders>
        </div>
    )
}

export default MiddleLayout

