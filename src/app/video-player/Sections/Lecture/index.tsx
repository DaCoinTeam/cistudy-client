"use client"
import { Avatar, Button, Image, Spacer } from "@nextui-org/react"
import React from "react"
import Resource from "./Resource"
const Section = () => {
    return (
        <div className="flex items-center justify-between w-full pl-6 py-3">
            <div className="flex items-center gap-3">
                <Image
                    className="w-10 h-10"
                    src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
                />
                <div>
                    <div className="font-bold text-sm"> Tao trùm ReactJs</div>
                    <div className="text-xs"> 15s </div>
                </div>
            </div>
            <Resource />
        </div>
    )
}

export default Section
