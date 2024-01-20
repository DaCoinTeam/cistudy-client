"use client"
import { FolderArrowDownIcon, FolderIcon, FolderOpenIcon } from "@heroicons/react/24/outline"
import {
    Button,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
    Image,
} from "@nextui-org/react"
import React from "react"
const Resource = () => {
    return (
        <Dropdown>
            <DropdownTrigger>
                <Button variant="light" isIconOnly>
                    <FolderOpenIcon className="w-6 h-6 text-teal-500" />
                </Button>
            </DropdownTrigger>
            <DropdownMenu variant="flat" aria-label="Dropdown menu with shortcut">
                <DropdownItem key="new" shortcut="⌘N">
          New file
                </DropdownItem>
                <DropdownItem key="copy" shortcut="⌘C">
          Copy link
                </DropdownItem>
                <DropdownItem key="edit" shortcut="⌘⇧E">
          Edit file
                </DropdownItem>
                <DropdownItem
                    key="delete"
                    shortcut="⌘⇧D"
                    className="text-danger"
                    color="danger"
                >
          Delete file
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    )
}

export default Resource
