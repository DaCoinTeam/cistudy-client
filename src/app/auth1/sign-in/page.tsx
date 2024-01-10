"use client"
import React from "react"
import { MainSection } from "./_components"
import { useSelector } from "react-redux"
import { RootState } from "@redux"
const Page = () => {
    const user = useSelector((state: RootState) => state.auth.user)
    return (
        <div className="grid place-items-center h-full">
            <MainSection />
            {JSON.stringify(user)}
        </div>
    )
}
export default Page
