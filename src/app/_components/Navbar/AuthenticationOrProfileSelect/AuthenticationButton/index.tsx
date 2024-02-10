import { Avatar, useDisclosure } from "@nextui-org/react"
import { AuthenticationModal } from "./AuthenticationModal"
import React from "react"

export const AuthenticationButton = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure()
    return (<>
        <Avatar size="sm" isBordered onClick={onOpen} />
        <AuthenticationModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </>)
}