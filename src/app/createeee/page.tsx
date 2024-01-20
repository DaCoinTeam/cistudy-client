"use client"

import { Card, CardBody } from "@nextui-org/react"
import React from "react"
import ContentDetails from "./ContentDetails"
import ContentSidebar from "./ContentSidebar"
const Page = () => {
    return (
        <div className="m-auto max-w-[1280px] px-6 my-12">
            <div className="grid grid-cols-4 gap-12">
                <ContentSidebar className="col-span-1" />
                <ContentDetails className="col-span-3" />
            </div>
        </div>
    )
}

export default Page
