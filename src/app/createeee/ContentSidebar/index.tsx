"use client"

import { AppButton } from "@app/_shared"
import { PhotoIcon } from "@heroicons/react/24/outline";
import { Card, CardBody, Listbox, ListboxItem, Spacer } from "@nextui-org/react"
import React from "react"

interface ContentSidebarProps {
  className?: string;
}

const ContentSidebar = (props: ContentSidebarProps) => {
    return (
        <div className={`${props.className}`}>
            <Listbox 
                aria-label="Single selection example"
                variant="flat"
                disallowEmptySelection
                selectionMode="single"
                hideSelectedIcon
                classNames={{
                    base: "px-0"
                }}
            >
                <ListboxItem key="text" classNames={{
                    title: "text-base font-bold",
                    base: "py-3 px-6"
                }}>Information</ListboxItem>
                <ListboxItem key="number"  classNames={{
                    title: "text-base font-bold",
                    base: "p-3  px-6"
                }}>Preview</ListboxItem>
                <ListboxItem key="date" classNames={{
                    title: "text-base font-bold",
                    base: "p-3  px-6"
                }}>Curriculum</ListboxItem>
            </Listbox>
            <Spacer y={12}/>
            <AppButton className="w-full" size="lg" text="Edit"/>
        </div>
    )
}

export default ContentSidebar
